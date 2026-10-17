"use client";

import { useId, useState } from "react";
import { ArrowRight, Check } from "./icons";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClasses =
  "w-full border border-line bg-white px-4 py-3.5 text-[0.9375rem] text-ink transition-colors placeholder:text-slate-ink/45 focus:border-accent-500 focus:outline-none";

const labelClasses =
  "block text-[0.6875rem] font-semibold tracking-[0.14em] text-slate-ink uppercase";

export function ContactForm({
  interestOptions,
  fallbackEmail,
}: {
  interestOptions: string[];
  fallbackEmail: string;
}) {
  const uid = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");
    setErrors({});
    setFormError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          organisation: data.get("organisation"),
          phone: data.get("phone"),
          interest: data.get("interest"),
          message: data.get("message"),
          consent: data.get("consent") === "on",
          website: data.get("website"),
        }),
      });

      const result = (await response.json().catch(() => ({}))) as {
        errors?: Record<string, string>;
        error?: string;
      };

      if (response.ok) {
        form.reset();
        setStatus("success");
        return;
      }

      if (result.errors) setErrors(result.errors);
      setFormError(
        result.error ??
          (result.errors
            ? "Please correct the highlighted fields."
            : `Something went wrong. Please email ${fallbackEmail} directly.`),
      );
      setStatus("error");
    } catch {
      setFormError(
        `We could not reach the server. Please email ${fallbackEmail} directly.`,
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-line bg-paper p-10 text-center lg:p-14">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent-500/10">
          <Check className="h-6 w-6 text-accent-600" />
        </div>
        <h3 className="mt-7 text-[1.5rem] leading-tight text-ink">
          Thank you — message received.
        </h3>
        <p className="mx-auto mt-5 max-w-md text-[0.9375rem] leading-[1.8] text-slate-ink">
          A consultant will respond directly, usually within one business day.
          If your enquiry is urgent, email{" "}
          <a
            href={`mailto:${fallbackEmail}`}
            className="font-medium text-accent-600 underline underline-offset-4"
          >
            {fallbackEmail}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-[0.75rem] font-semibold tracking-[0.08em] text-navy-900 uppercase underline underline-offset-4 hover:text-accent-600"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="border border-line bg-paper p-8 lg:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          id={`${uid}-name`}
          name="name"
          label="Full name"
          required
          autoComplete="name"
          error={errors.name}
        />
        <Field
          id={`${uid}-email`}
          name="email"
          type="email"
          label="Work email"
          required
          autoComplete="email"
          error={errors.email}
        />
        <Field
          id={`${uid}-organisation`}
          name="organisation"
          label="Organisation"
          autoComplete="organization"
          error={errors.organisation}
        />
        <Field
          id={`${uid}-phone`}
          name="phone"
          type="tel"
          label="Phone (optional)"
          autoComplete="tel"
          error={errors.phone}
        />

        <div className="sm:col-span-2">
          <label htmlFor={`${uid}-interest`} className={labelClasses}>
            Area of interest
          </label>
          <select
            id={`${uid}-interest`}
            name="interest"
            defaultValue=""
            className={`${fieldClasses} mt-2.5 appearance-none bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat pr-10`}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%233d4a59' stroke-width='1.5'%3E%3Cpath d='m6 9.5 6 6 6-6'/%3E%3C/svg%3E\")",
            }}
          >
            <option value="">Select the closest fit</option>
            {interestOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor={`${uid}-message`} className={labelClasses}>
            How can we help? <span className="text-accent-600">*</span>
          </label>
          <textarea
            id={`${uid}-message`}
            name="message"
            rows={6}
            required
            placeholder="Tell us about the system, the constraint you are working within, and what a good outcome looks like."
            aria-invalid={Boolean(errors.message)}
            className={`${fieldClasses} mt-2.5 resize-y`}
          />
          {errors.message && <FieldError>{errors.message}</FieldError>}
        </div>
      </div>

      {/* Honeypot */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label htmlFor={`${uid}-website`}>Website</label>
        <input
          id={`${uid}-website`}
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="mt-7 border-t border-line pt-7">
        <label className="flex cursor-pointer items-start gap-3.5">
          <input
            type="checkbox"
            name="consent"
            required
            className="mt-1 h-4 w-4 shrink-0 accent-[#1a5496]"
          />
          <span className="text-[0.8125rem] leading-[1.7] text-slate-ink">
            I consent to A &amp; H Consulting Group storing the details above in
            order to respond to this enquiry, as described in the{" "}
            <a
              href="/legal/privacy"
              className="font-medium text-accent-600 underline underline-offset-4"
            >
              privacy policy
            </a>
            .
          </span>
        </label>
        {errors.consent && <FieldError>{errors.consent}</FieldError>}
      </div>

      {formError && (
        <p
          role="alert"
          className="mt-6 border-l-2 border-red-500 bg-red-50 px-4 py-3 text-[0.875rem] leading-relaxed text-red-900"
        >
          {formError}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group mt-8 inline-flex w-full items-center justify-center gap-2.5 bg-navy-900 px-7 py-4 text-[0.8125rem] font-semibold tracking-[0.06em] text-white uppercase transition-colors hover:bg-accent-600 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send enquiry"}
        {status !== "submitting" && (
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </button>

      <p className="mt-5 text-[0.75rem] leading-relaxed text-slate-ink/70">
        We respond to every enquiry. Your details are never shared with third
        parties or used for marketing.
      </p>
    </form>
  );
}

function Field({
  id,
  name,
  label,
  type = "text",
  required = false,
  autoComplete,
  error,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClasses}>
        {label} {required && <span className="text-accent-600">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        className={`${fieldClasses} mt-2.5`}
      />
      {error && <FieldError>{error}</FieldError>}
    </div>
  );
}

function FieldError({ children }: { children: React.ReactNode }) {
  return <p className="mt-2 text-[0.75rem] text-red-700">{children}</p>;
}
