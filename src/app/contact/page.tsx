import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { ClockIcon, MailIcon, PinIcon } from "@/components/icons";
import { company, offices } from "@/content/company";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Contact & consultation",
  description:
    "Speak to a consultant at A & H Consulting Group. Offices in Dubai, United Arab Emirates and Amsterdam, Netherlands. Initial consultations are held at no cost.",
  alternates: { canonical: "/contact" },
};

const interestOptions = [
  ...services.map((s) => s.shortTitle),
  "Not sure yet",
  "Other",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start with a conversation, not a pitch."
        intro="Tell us what you are trying to achieve. We will tell you plainly whether we can help, what it would take, and roughly what it would cost, including when the honest answer is that you do not need us."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />

      <section className="py-20 lg:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
          <div>
            <h2 className="text-[1.625rem] leading-tight text-ink lg:text-[1.875rem]">
              Send us an enquiry
            </h2>
            <p className="mt-5 max-w-xl text-[0.9375rem] leading-[1.8] text-slate-ink">
              Enquiries are read and answered by a consultant. Expect a reply
              within one business day, and a substantive one rather than a
              calendar link.
            </p>
            <div className="mt-10">
              <ContactForm
                interestOptions={interestOptions}
                fallbackEmail={company.email}
              />
            </div>
          </div>

          <aside className="space-y-10">
            {/* Direct contact */}
            <div className="border border-line">
              <div className="border-b border-line bg-paper px-7 py-5">
                <h2 className="font-sans text-[0.6875rem] font-semibold tracking-[0.18em] text-ink uppercase">
                  Direct contact
                </h2>
              </div>
              <dl className="divide-y divide-line">
                <div className="px-7 py-5">
                  <dt className="text-[0.75rem] text-slate-ink/70">
                    General enquiries
                  </dt>
                  <dd className="mt-1.5">
                    <a
                      href={`mailto:${company.email}`}
                      className="inline-flex items-center gap-2.5 text-[0.9375rem] font-medium text-ink transition-colors hover:text-accent-600"
                    >
                      <MailIcon className="h-4 w-4 text-accent-500" />
                      {company.email}
                    </a>
                  </dd>
                </div>
                <div className="px-7 py-5">
                  <dt className="text-[0.75rem] text-slate-ink/70">
                    Recruitment
                  </dt>
                  <dd className="mt-1.5">
                    <a
                      href={`mailto:${company.careersEmail}`}
                      className="inline-flex items-center gap-2.5 text-[0.9375rem] font-medium text-ink transition-colors hover:text-accent-600"
                    >
                      <MailIcon className="h-4 w-4 text-accent-500" />
                      {company.careersEmail}
                    </a>
                  </dd>
                </div>
                <div className="px-7 py-5">
                  <dt className="text-[0.75rem] text-slate-ink/70">
                    Data protection
                  </dt>
                  <dd className="mt-1.5">
                    <a
                      href={`mailto:${company.privacyEmail}`}
                      className="inline-flex items-center gap-2.5 text-[0.9375rem] font-medium text-ink transition-colors hover:text-accent-600"
                    >
                      <MailIcon className="h-4 w-4 text-accent-500" />
                      {company.privacyEmail}
                    </a>
                  </dd>
                </div>
                {company.phone && (
                  <div className="px-7 py-5">
                    <dt className="text-[0.75rem] text-slate-ink/70">
                      Telephone
                    </dt>
                    <dd className="mt-1.5 text-[0.9375rem] font-medium text-ink">
                      <a
                        href={`tel:${company.phone.replace(/\s/g, "")}`}
                        className="transition-colors hover:text-accent-600"
                      >
                        {company.phone}
                      </a>
                    </dd>
                  </div>
                )}
              </dl>
            </div>

            {/* Offices */}
            {offices.map((office) => (
              <div key={office.id} className="border border-line">
                <div className="flex items-center gap-2.5 border-b border-line bg-paper px-7 py-5">
                  <PinIcon className="h-4 w-4 text-accent-500" />
                  <h2 className="font-sans text-[0.6875rem] font-semibold tracking-[0.18em] text-ink uppercase">
                    {office.city}, {office.country}
                  </h2>
                </div>
                <div className="px-7 py-6">
                  <p className="text-[0.75rem] tracking-[0.04em] text-accent-600 uppercase">
                    {office.region}
                  </p>
                  <address className="mt-3 text-[0.9375rem] leading-[1.8] not-italic text-slate-ink">
                    {office.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                  <div className="mt-5 flex items-start gap-2.5 border-t border-line pt-5 text-[0.8125rem] text-slate-ink">
                    <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                    <span>
                      {office.hours}
                      <span className="block text-slate-ink/60">
                        {office.timezone}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            ))}

            <p className="text-[0.8125rem] leading-relaxed text-slate-ink/80">
              Both locations are staffed offices. Visits are welcome by
              appointment. Please arrange in advance so the right people are
              available.
            </p>
          </aside>
        </div>
      </section>

      {/* What happens next */}
      <section className="border-t border-line bg-paper py-20 lg:py-24">
        <div className="container-page">
          <h2 className="text-[1.625rem] leading-tight text-ink lg:text-[2rem]">
            What happens after you get in touch
          </h2>
          <ol className="mt-12 grid gap-px border border-line bg-line lg:grid-cols-4">
            {[
              {
                step: "01",
                name: "We reply",
                detail:
                  "A consultant reads your enquiry and responds directly, normally within one business day.",
              },
              {
                step: "02",
                name: "Introductory call",
                detail:
                  "Thirty to forty five minutes on the problem, the constraints, and the outcome you need. No charge, and under mutual NDA if you prefer.",
              },
              {
                step: "03",
                name: "Written proposal",
                detail:
                  "Scope, approach, team, timeline, and price, set out in writing. Proposals are free and carry no obligation.",
              },
              {
                step: "04",
                name: "Discovery",
                detail:
                  "If you proceed, we begin with a short fixed fee discovery phase producing a findings report you own outright.",
              },
            ].map((item) => (
              <li key={item.step} className="bg-white p-8">
                <span className="font-serif text-[1.5rem] leading-none text-accent-200 tabular-nums">
                  {item.step}
                </span>
                <h3 className="mt-5 font-sans text-[1rem] font-semibold tracking-tight text-ink">
                  {item.name}
                </h3>
                <p className="mt-3 text-[0.875rem] leading-[1.75] text-slate-ink">
                  {item.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
