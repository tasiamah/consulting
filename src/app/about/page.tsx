import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaSection } from "@/components/cta-section";
import { Monogram, SectionHeading, Stat } from "@/components/ui";
import { ClockIcon, PinIcon } from "@/components/icons";
import { assurances, company, offices, stats } from "@/content/company";
import { leadership, practitioners, team } from "@/content/team";
import { principles } from "@/content/approach";

export const metadata: Metadata = {
  title: "About the firm",
  description:
    "A & H Consulting Group LLC is an enterprise software consultancy registered in Sharjah with a European office in London. Meet the leadership team and review our corporate information.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const { registration } = company;

  const corporateFacts = [
    { label: "Registered legal name", value: company.legalName },
    { label: "Entity type", value: "Limited liability company" },
    { label: "Year established", value: String(company.foundedYear) },
    { label: "Registered authority", value: registration.uaeAuthority },
    registration.uaeLicenseNumber && {
      label: "UAE trade licence number",
      value: registration.uaeLicenseNumber,
    },
    registration.ukCompanyNumber && {
      label: "UK company number",
      value: registration.ukCompanyNumber,
    },
    registration.vatNumber && { label: "VAT registration number", value: registration.vatNumber },
    { label: "Head office", value: "Sharjah, United Arab Emirates" },
    { label: "European office", value: "London, United Kingdom" },
    { label: "Permanent staff", value: `${team.length} consultants and engineers` },
    { label: "Primary contact", value: company.email },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A consultancy built to be verifiable."
        intro="We work with organisations that have to justify their supplier choices — to a board, a regulator, an insurer, or a bank. That shapes everything about how this firm operates."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
      />

      {/* Story */}
      <section className="py-20 lg:py-28">
        <div className="container-page grid gap-16 lg:grid-cols-[1.45fr_1fr] lg:gap-24">
          <div>
            <SectionHeading eyebrow="Our story" title="Why the firm exists." />
            <div className="mt-8 space-y-6 text-[1.0625rem] leading-[1.85] text-slate-ink">
              <p>
                {company.shortName} was founded in {company.foundedYear} on a straightforward
                observation: mid-sized organisations in the Gulf and Europe were being poorly served
                at both ends of the market. The large consultancies sold them partner-level
                credibility and staffed the work with juniors. The small development shops wrote
                decent code but could not produce an architecture document, a risk register, or a
                security questionnaire response when procurement asked for one.
              </p>
              <p>
                We set out to occupy the space between those two. A firm small enough that the
                people who scope the work remain accountable for delivering it, and disciplined
                enough that every engagement produces the written evidence a serious organisation
                needs — architecture decisions, acceptance criteria, risk assessments, and
                handover documentation.
              </p>
              <p>
                Today we operate from two offices. Sharjah is our registered head office and primary
                delivery centre, serving clients across the UAE and the wider Gulf. London handles
                European client engagement and advisory work. Both teams work to the same engineering
                and review standards, and every solution design passes the same internal architecture
                review before a line of code is written.
              </p>
              <p>
                We are deliberately not trying to become large. Growth is constrained to what we can
                staff with senior people, because the moment we cannot put an experienced consultant
                on every engagement, the thing clients are actually buying from us stops existing.
              </p>
            </div>
          </div>

          <aside className="lg:pt-24">
            <div className="border border-line bg-paper">
              <div className="border-b border-line px-7 py-5">
                <h2 className="font-sans text-[0.6875rem] font-semibold tracking-[0.18em] text-ink uppercase">
                  Corporate information
                </h2>
              </div>
              <dl className="divide-y divide-line">
                {corporateFacts.map((fact) => (
                  <div key={fact.label} className="px-7 py-4">
                    <dt className="text-[0.75rem] text-slate-ink/70">{fact.label}</dt>
                    <dd className="mt-1 text-[0.875rem] font-medium break-words text-ink">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="border-t border-line px-7 py-5 text-[0.8125rem] leading-relaxed text-slate-ink/80">
                Certificate of incorporation, trade licence, bank references, and proof of
                professional indemnity insurance are available to counterparties on request.{" "}
                <Link
                  href="/contact"
                  className="font-medium text-accent-600 underline underline-offset-4 hover:text-accent-700"
                >
                  Request documentation
                </Link>
                .
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-line bg-navy-950">
        <div className="bg-grid">
          <div className="container-page grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <Stat key={stat.label} {...stat} tone="light" />
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24 lg:py-32">
        <div className="container-page">
          <SectionHeading
            eyebrow="What we hold to"
            title="Four commitments we will not trade away."
            intro="These are not aspirations. Each one is reflected in how our contracts are written and how engagements are actually staffed."
            align="center"
          />
          <div className="mt-16 grid gap-px border border-line bg-line lg:grid-cols-2">
            {principles.map((principle, i) => (
              <div key={principle.title} className="bg-white p-8 lg:p-11">
                <span className="font-serif text-[0.875rem] text-accent-300 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-[1.1875rem] leading-snug text-ink">{principle.title}</h3>
                <p className="mt-4 text-[0.9375rem] leading-[1.8] text-slate-ink">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="scroll-mt-24 border-y border-line bg-paper py-24 lg:py-32">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our people"
            title="The team accountable for your engagement."
            intro={`${team.length} permanent consultants and engineers across Sharjah and London. Every engagement has a named partner sponsor and a named delivery lead, and both stay with it from discovery through to handover.`}
          />

          {/* Leadership */}
          <h3 className="mt-16 font-sans text-[0.6875rem] font-semibold tracking-[0.18em] text-slate-ink/70 uppercase">
            Leadership
          </h3>
          <div className="mt-7 grid gap-px border border-line bg-line lg:grid-cols-2">
            {leadership.map((member) => (
              <article key={member.name} className="bg-white p-8 lg:p-10">
                <div className="flex items-start gap-5">
                  <Monogram initials={member.initials} className="h-16 w-16 shrink-0 text-[1.25rem]" />
                  <div>
                    <h4 className="font-sans text-[1.0625rem] font-semibold tracking-tight text-ink">
                      {member.name}
                    </h4>
                    <p className="mt-1 text-[0.875rem] text-accent-600">{member.role}</p>
                    <p className="mt-0.5 text-[0.8125rem] text-slate-ink/60">
                      {member.office} office
                    </p>
                  </div>
                </div>
                <p className="mt-6 text-[0.9375rem] leading-[1.8] text-slate-ink">{member.bio}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {member.focus.map((f) => (
                    <li
                      key={f}
                      className="border border-line px-3 py-1.5 text-[0.75rem] text-slate-ink"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          {/* Practitioners */}
          <h3 className="mt-16 font-sans text-[0.6875rem] font-semibold tracking-[0.18em] text-slate-ink/70 uppercase">
            Consultants &amp; engineers
          </h3>
          <div className="mt-7 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {practitioners.map((member) => (
              <article key={member.name} className="bg-white p-7">
                <div className="flex items-start gap-4">
                  <Monogram
                    initials={member.initials}
                    className="h-12 w-12 shrink-0 text-[0.9375rem]"
                  />
                  <div>
                    <h4 className="font-sans text-[0.9375rem] font-semibold tracking-tight text-ink">
                      {member.name}
                    </h4>
                    <p className="mt-1 text-[0.8125rem] text-accent-600">{member.role}</p>
                    <p className="mt-0.5 text-[0.75rem] text-slate-ink/60">{member.office}</p>
                  </div>
                </div>
                <p className="mt-5 text-[0.875rem] leading-[1.75] text-slate-ink">{member.bio}</p>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {member.focus.map((f) => (
                    <li
                      key={f}
                      className="border border-line px-2.5 py-1 text-[0.6875rem] text-slate-ink/80"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <p className="mt-10 text-[0.875rem] text-slate-ink">
            We are currently hiring across software, cloud, and security.{" "}
            <Link
              href="/careers"
              className="font-medium text-accent-600 underline underline-offset-4 hover:text-accent-700"
            >
              See open roles
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Offices */}
      <section className="py-24 lg:py-32">
        <div className="container-page">
          <SectionHeading
            eyebrow="Where we are"
            title="Two offices, one standard of delivery."
            intro="Both locations are staffed permanent offices, not registered addresses. Clients are welcome to visit either."
          />

          <div className="mt-16 grid gap-px border border-line bg-line lg:grid-cols-2">
            {offices.map((office) => (
              <div key={office.id} className="bg-white p-8 lg:p-11">
                <div className="flex items-center gap-3">
                  <PinIcon className="h-5 w-5 text-accent-500" />
                  <span className="text-[0.6875rem] font-semibold tracking-[0.18em] text-slate-ink/70 uppercase">
                    {office.region}
                  </span>
                </div>
                <h3 className="mt-5 text-[1.5rem] leading-tight text-ink">
                  {office.city}, {office.country}
                </h3>
                <p className="mt-3 text-[0.9375rem] text-accent-600">{office.role}</p>

                <address className="mt-7 border-t border-line pt-7 text-[0.9375rem] leading-[1.8] not-italic text-slate-ink">
                  {office.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>

                <div className="mt-6 flex items-start gap-3 text-[0.875rem] text-slate-ink">
                  <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                  <span>
                    {office.hours}
                    <span className="block text-slate-ink/60">{office.timezone}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="border-t border-line bg-paper py-24 lg:py-32">
        <div className="container-page">
          <SectionHeading
            eyebrow="Governance"
            title="Operating commitments."
            intro="The controls that make us straightforward to appoint as a supplier and straightforward to defend afterwards."
          />
          <div className="mt-14 grid gap-px border border-line bg-line lg:grid-cols-2">
            {assurances.map((item) => (
              <div key={item.title} className="bg-white p-8 lg:p-10">
                <h3 className="text-[1.125rem] leading-snug text-ink">{item.title}</h3>
                <p className="mt-4 text-[0.9375rem] leading-[1.8] text-slate-ink">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="Get in touch"
        title="Talk to a partner, not a sales team."
        intro="Initial conversations are held with one of the four people who lead this firm. If we are not the right fit for what you need, we will tell you in that first call."
      />
    </>
  );
}
