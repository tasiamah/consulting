import { NextResponse } from "next/server";
import { company } from "@/content/company";
import { services } from "@/content/services";

type Payload = {
  name?: unknown;
  email?: unknown;
  organisation?: unknown;
  phone?: unknown;
  interest?: unknown;
  message?: unknown;
  consent?: unknown;
  /** Honeypot — real users never fill this in. */
  website?: unknown;
};

const MAX_LENGTHS = {
  name: 120,
  email: 200,
  organisation: 160,
  phone: 40,
  interest: 80,
  message: 5000,
} as const;

const str = (value: unknown) => (typeof value === "string" ? value.trim() : "");

// Deliberately permissive: enough to catch typos without rejecting valid addresses.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const interestOptions = [...services.map((s) => s.shortTitle), "Not sure yet", "Other"];

/** In-memory throttle. Resets on cold start, which is acceptable for a contact form. */
const recentSubmissions = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 4;

function isRateLimited(key: string) {
  const now = Date.now();
  const hits = (recentSubmissions.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  if (hits.length >= MAX_PER_WINDOW) return true;
  hits.push(now);
  recentSubmissions.set(key, hits);
  return false;
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Malformed request." }, { status: 400 });
  }

  // Silently accept honeypot hits so bots do not learn they were caught.
  if (str(body.website)) {
    return NextResponse.json({ ok: true });
  }

  const name = str(body.name);
  const email = str(body.email);
  const organisation = str(body.organisation);
  const phone = str(body.phone);
  const interest = str(body.interest);
  const message = str(body.message);

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Please tell us your name.";
  if (!EMAIL_PATTERN.test(email)) errors.email = "Please enter a valid email address.";
  if (message.length < 20)
    errors.message = "Please give us at least a couple of sentences of context.";
  if (body.consent !== true)
    errors.consent = "Please confirm you are happy for us to respond to your enquiry.";
  if (interest && !interestOptions.includes(interest)) errors.interest = "Unrecognised selection.";

  for (const [field, limit] of Object.entries(MAX_LENGTHS)) {
    const value = str(body[field as keyof Payload]);
    if (value.length > limit) errors[field] = "This value is too long.";
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many enquiries from this address. Please email us directly." },
      { status: 429 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_INBOX ?? company.email;
  const from = process.env.CONTACT_FROM ?? `Website Enquiry <onboarding@resend.dev>`;

  // Without a configured mail provider the form cannot deliver. Tell the
  // visitor plainly rather than pretending the message was sent.
  if (!apiKey) {
    console.warn("[contact] RESEND_API_KEY is not set — enquiry was not delivered.", {
      name,
      email,
      organisation,
    });
    return NextResponse.json(
      {
        error: `Our enquiry form is temporarily unavailable. Please email us directly at ${company.email}.`,
      },
      { status: 503 },
    );
  }

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    organisation && `Organisation: ${organisation}`,
    phone && `Phone: ${phone}`,
    interest && `Area of interest: ${interest}`,
    "",
    "Message:",
    message,
    "",
    "---",
    `Submitted from ${company.domain} · IP ${ip}`,
  ].filter(Boolean);

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Website enquiry — ${name}${organisation ? ` (${organisation})` : ""}`,
        text: lines.join("\n"),
      }),
    });

    if (!response.ok) {
      console.error("[contact] Mail provider rejected the request", await response.text());
      return NextResponse.json(
        { error: `We could not send your message. Please email ${company.email} directly.` },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("[contact] Unexpected failure sending enquiry", error);
    return NextResponse.json(
      { error: `We could not send your message. Please email ${company.email} directly.` },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
