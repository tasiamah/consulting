import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/ui";
import { ArrowUpRight, MailIcon } from "@/components/icons";
import { benefits, openRoles } from "@/content/careers";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Open roles at A & H Consulting Group in Dubai and Amsterdam: software engineering, cloud platform, security consulting, and systems integration.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Work where the consultant owns the outcome."
        intro="We hire a small number of experienced people and give them real accountability for client results. There is no bench, no body shopping, and no layer of account managers between you and the problem."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Careers", href: "/careers" },
        ]}
      />

      {/* Open roles */}
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Open positions"
            title={`${openRoles.length} roles currently open.`}
            intro="We review every application ourselves. There is no applicant tracking system filtering CVs before a human sees them. Expect a reply either way within a week."
          />

          <ul className="mt-14 space-y-px bg-line">
            {openRoles.map((role) => (
              <li key={role.title} className="bg-white">
                <a
                  href={`mailto:${company.careersEmail}?subject=${encodeURIComponent(
                    `Application: ${role.title} (${role.office})`,
                  )}`}
                  className="group grid gap-6 py-8 transition-colors hover:bg-paper lg:grid-cols-[1.4fr_1fr_auto] lg:items-center lg:gap-10 lg:px-6"
                >
                  <div>
                    <h3 className="text-[1.25rem] leading-snug text-ink group-hover:text-accent-600 lg:text-[1.375rem]">
                      {role.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-[0.9375rem] leading-[1.75] text-slate-ink">
                      {role.summary}
                    </p>
                  </div>

                  <dl className="flex flex-wrap gap-x-8 gap-y-2 text-[0.8125rem]">
                    <div>
                      <dt className="text-slate-ink/60">Location</dt>
                      <dd className="mt-0.5 font-medium text-ink">
                        {role.office}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-slate-ink/60">Type</dt>
                      <dd className="mt-0.5 font-medium text-ink">
                        {role.type}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-slate-ink/60">Practice</dt>
                      <dd className="mt-0.5 font-medium text-ink">
                        {role.practice}
                      </dd>
                    </div>
                  </dl>

                  <span className="inline-flex items-center gap-2 text-[0.75rem] font-semibold tracking-[0.08em] text-navy-900 uppercase lg:justify-self-end">
                    <span className="border-b border-transparent pb-0.5 transition-colors group-hover:border-accent-500 group-hover:text-accent-600">
                      Apply
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-12 border border-line bg-paper p-8 lg:p-10">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <h3 className="text-[1.25rem] leading-snug text-ink">
                  Nothing here that fits you?
                </h3>
                <p className="mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-slate-ink">
                  We keep a standing interest in strong architects, security
                  engineers, and delivery leads. Send a CV and a short note on
                  the work you want to be doing.
                </p>
              </div>
              <a
                href={`mailto:${company.careersEmail}?subject=${encodeURIComponent(
                  "Speculative application",
                )}`}
                className="inline-flex items-center gap-2.5 bg-navy-900 px-6 py-4 text-[0.75rem] font-semibold tracking-[0.06em] text-white uppercase transition-colors hover:bg-accent-600"
              >
                <MailIcon className="h-4 w-4" />
                {company.careersEmail}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why join */}
      <section className="border-y border-line bg-paper py-24 lg:py-32">
        <div className="container-page">
          <SectionHeading
            eyebrow="Working here"
            title="What the job is actually like."
            intro="A small firm across two offices. You will know every colleague by name, and every client will know yours."
          />
          <div className="mt-16 grid gap-px border border-line bg-line lg:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white p-8 lg:p-11">
                <h3 className="text-[1.1875rem] leading-snug text-ink">
                  {benefit.title}
                </h3>
                <p className="mt-4 text-[0.9375rem] leading-[1.8] text-slate-ink">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring process */}
      <section className="py-24 lg:py-32">
        <div className="container-page">
          <SectionHeading
            eyebrow="Hiring process"
            title="Four steps, about three weeks."
            align="center"
          />
          <ol className="mt-16 grid gap-px border border-line bg-line lg:grid-cols-4">
            {[
              {
                step: "01",
                name: "Application review",
                detail:
                  "Read by the practice lead for the role. You get a decision within a week.",
              },
              {
                step: "02",
                name: "Introductory call",
                detail:
                  "Forty five minutes on your experience and what you want next. A two way conversation, not a screening.",
              },
              {
                step: "03",
                name: "Technical discussion",
                detail:
                  "A real problem from our domain, discussed with two of the people you would work alongside. No timed puzzles.",
              },
              {
                step: "04",
                name: "Partner conversation",
                detail:
                  "A final conversation with a partner covering expectations, progression, and the offer.",
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
