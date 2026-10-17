import Link from "next/link";
import type { Metadata } from "next";
import {
  Button,
  Eyebrow,
  SectionHeading,
  Stat,
  TextLink,
} from "@/components/ui";
import { Avatar } from "@/components/avatar";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ServiceIcons,
} from "@/components/icons";
import { CtaSection } from "@/components/cta-section";
import { AssuranceTerminal } from "@/components/assurance-terminal";
import { TechStack } from "@/components/tech-stack";
import { Reveal } from "@/components/reveal";
import { assurances, company, stats } from "@/content/company";
import { services } from "@/content/services";
import { industries } from "@/content/industries";
import { caseStudies } from "@/content/case-studies";
import { phases } from "@/content/approach";
import { leadership, team } from "@/content/team";

export const metadata: Metadata = {
  title: `${company.shortName} | Enterprise Software Consulting in the UAE and Europe`,
  description:
    "Enterprise software consultancy operating from Dubai and London. Custom software development, system integration, cloud solutions, cybersecurity, and managed support for regulated and high-growth businesses.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBand />
      <ServicesSection />
      <ApproachSection />
      <TechStack />
      <AssuranceSection />
      <IndustriesSection />
      <CaseStudiesSection />
      <TeamSection />
      <CtaSection />
    </>
  );
}

/* -------------------------------------------------------------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div className="bg-grid absolute inset-0" />
      <div className="absolute -top-32 -right-20 h-[40rem] w-[40rem] rounded-full bg-accent-600/20 blur-[150px]" />
      <div className="absolute -bottom-40 left-1/4 h-[32rem] w-[32rem] rounded-full bg-accent-700/15 blur-[150px]" />

      <div className="container-page relative py-20 lg:py-28">
        <div className="grid items-start gap-16 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
          <div className="animate-rise">
            <Eyebrow tone="light">Dubai &nbsp;·&nbsp; London</Eyebrow>

            <h1 className="mt-7 text-[2.5rem] leading-[1.05] text-white sm:text-[3.25rem] lg:text-[4rem]">
              Software systems that stand up to scrutiny.
            </h1>

            <p className="mt-8 max-w-2xl text-[1.0625rem] leading-[1.8] text-white/65 lg:text-[1.1875rem]">
              {company.legalName} is an enterprise software consultancy
              operating from the United Arab Emirates and the United Kingdom. We
              design, build, and run the platforms that regulated and
              high-growth businesses depend on, and we document them well enough
              to satisfy an auditor.
            </p>

            <div className="mt-11 flex flex-wrap items-center gap-4">
              <Button href="/contact" variant="onDark" withArrow>
                Book a consultation
              </Button>
              <Link
                href="/services"
                className="group inline-flex items-center gap-2.5 border border-white/20 px-6 py-3.5 text-[0.8125rem] font-semibold tracking-[0.04em] text-white uppercase transition-colors hover:border-white/50 hover:bg-white/5"
              >
                Explore our services
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <ul className="mt-14 grid gap-x-10 gap-y-4 border-t border-white/10 pt-9 sm:grid-cols-2">
              {[
                "Independent, with no vendor commissions",
                "Client owns all intellectual property",
                "Fixed-scope phases with written acceptance",
                "GDPR and UAE data protection by design",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[0.875rem] text-white/70"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <aside className="animate-rise lg:mt-3">
            <AssuranceTerminal />
            <div className="mt-6 border-t border-white/10 pt-6">
              <TextLink href="/about" tone="light">
                About the firm
              </TextLink>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */

function StatsBand() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
        {stats.map((stat) => (
          <Stat key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */

function ServicesSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="What we do"
            title="Six practice areas, one accountable team."
            intro="Most engagements draw on more than one. A cloud migration carries security and integration workstreams; a new platform needs a support agreement behind it. We scope the whole problem rather than the convenient part of it."
          />
          <TextLink href="/services">All services</TextLink>
        </div>

        <div className="mt-16 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = ServiceIcons[service.icon];
            return (
              <Reveal key={service.slug} delay={i * 55} className="h-full">
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative flex h-full flex-col bg-white p-8 transition-colors duration-300 hover:bg-paper lg:p-10"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="h-7 w-7 text-accent-500 transition-colors group-hover:text-accent-600" />
                    <span className="font-mono text-[0.75rem] text-line transition-colors group-hover:text-accent-300">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-[1.25rem] leading-snug text-ink transition-colors group-hover:text-accent-600">
                    {service.title}
                  </h3>
                  <p className="mt-4 flex-1 text-[0.9375rem] leading-[1.75] text-slate-ink">
                    {service.summary}
                  </p>

                  <span className="mt-7 inline-flex items-center gap-2 font-mono text-[0.6875rem] font-medium tracking-[0.1em] text-navy-900 uppercase">
                    <span className="border-b border-transparent pb-0.5 transition-colors group-hover:border-accent-500 group-hover:text-accent-600">
                      Service detail
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */

function ApproachSection() {
  return (
    <section className="border-y border-line bg-paper py-24 lg:py-32">
      <div className="container-page">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
          <div>
            <SectionHeading
              eyebrow="How we work"
              title="A method you can audit, not a promise you have to trust."
              intro="Every engagement follows the same five phases. Scope, decisions, and acceptance criteria are written down, which is what makes progress verifiable by you, by your board, and by anyone reviewing the engagement afterwards."
            />
            <div className="mt-10">
              <TextLink href="/approach">Our full methodology</TextLink>
            </div>
          </div>

          <ol className="space-y-px bg-line">
            {phases.map((phase) => (
              <li key={phase.number} className="bg-paper">
                <div className="flex gap-6 py-7 lg:gap-9">
                  <span className="font-serif text-[1.5rem] leading-none text-accent-300 tabular-nums">
                    {phase.number}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <h3 className="font-sans text-[1.0625rem] font-semibold tracking-tight text-ink">
                        {phase.name}
                      </h3>
                      <span className="text-[0.75rem] tracking-[0.04em] text-slate-ink/70 uppercase">
                        {phase.duration}
                      </span>
                    </div>
                    <p className="mt-3 text-[0.9375rem] leading-[1.75] text-slate-ink">
                      {phase.summary}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */

function AssuranceSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Governance"
          title="How we handle your business, your data, and your money."
          intro="Clients in regulated sectors are accountable for their suppliers. These are the commitments that make us straightforward to appoint, and straightforward to defend to a regulator, an insurer, or a bank."
          align="center"
        />

        <div className="mt-16 grid gap-px border border-line bg-line lg:grid-cols-2">
          {assurances.map((item, i) => (
            <Reveal key={item.title} delay={i * 60} className="h-full">
              <div className="h-full bg-white p-8 lg:p-11">
                <span className="font-mono text-[0.75rem] text-accent-400 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-[1.1875rem] leading-snug text-ink">
                  {item.title}
                </h3>
                <p className="mt-4 text-[0.9375rem] leading-[1.8] text-slate-ink">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-[0.875rem] leading-relaxed text-slate-ink/80">
          Certificate of incorporation, trade licence, insurance certificates,
          and completed security questionnaires are provided on request during
          supplier onboarding.{" "}
          <Link
            href="/contact"
            className="font-medium text-accent-600 underline underline-offset-4 hover:text-accent-700"
          >
            Request documentation
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */

function IndustriesSection() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-24 lg:py-32">
      <div className="bg-grid absolute inset-0" />
      <div className="container-page relative">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="Industries"
            tone="light"
            title="Sectors where getting it wrong is expensive."
            intro="We concentrate on industries with a regulatory or audit requirement, because that is where disciplined delivery is worth paying for."
          />
          <TextLink href="/industries" tone="light">
            All industries
          </TextLink>
        </div>

        <div className="mt-16 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <Reveal key={industry.slug} delay={i * 55} className="h-full">
              <Link
                href={`/industries#${industry.slug}`}
                className="group block h-full bg-navy-900 p-8 transition-colors duration-300 hover:bg-navy-800 lg:p-10"
              >
                <h3 className="flex items-start justify-between gap-4 text-[1.125rem] leading-snug text-white">
                  {industry.name}
                  <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-accent-300 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </h3>
                <p className="mt-4 text-[0.9375rem] leading-[1.75] text-white/55">
                  {industry.summary}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */

function CaseStudiesSection() {
  const featured = caseStudies.slice(0, 3);

  return (
    <section className="py-24 lg:py-32">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="Selected work"
            title="Engagements, and what actually changed."
            intro="Published anonymously under the confidentiality terms of each agreement. Named references are available to serious prospective clients on request."
          />
          <TextLink href="/case-studies">All case studies</TextLink>
        </div>

        <div className="mt-16 grid gap-px border border-line bg-line lg:grid-cols-3">
          {featured.map((study, i) => (
            <Reveal key={study.slug} delay={i * 70} className="h-full">
              <Link
                href={`/case-studies/${study.slug}`}
                className="group flex h-full flex-col bg-white p-8 transition-colors duration-300 hover:bg-paper lg:p-10"
              >
                <div className="flex items-center gap-3 text-[0.6875rem] font-semibold tracking-[0.14em] uppercase">
                  <span className="text-accent-600">{study.sector}</span>
                  <span className="text-line">|</span>
                  <span className="text-slate-ink/60">{study.region}</span>
                </div>

                <h3 className="mt-6 flex-1 text-[1.1875rem] leading-snug text-ink transition-colors group-hover:text-accent-600">
                  {study.title}
                </h3>

                <dl className="mt-8 space-y-4 border-t border-line pt-7">
                  {study.results.slice(0, 2).map((result) => (
                    <div key={result.label}>
                      <dt className="font-serif text-[1.625rem] leading-none text-navy-900">
                        {result.metric}
                      </dt>
                      <dd className="mt-2 text-[0.8125rem] leading-relaxed text-slate-ink">
                        {result.label}
                      </dd>
                    </div>
                  ))}
                </dl>

                <span className="mt-8 inline-flex items-center gap-2 font-mono text-[0.6875rem] font-medium tracking-[0.1em] text-navy-900 uppercase">
                  <span className="border-b border-transparent pb-0.5 transition-colors group-hover:border-accent-500 group-hover:text-accent-600">
                    Read the engagement
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */

function TeamSection() {
  return (
    <section className="border-y border-line bg-paper py-24 lg:py-32">
      <div className="container-page">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr] lg:gap-24">
          <div>
            <SectionHeading
              eyebrow="The firm"
              title="You will know exactly who is doing the work."
              intro={`${team.length} permanent consultants and engineers across Dubai and London. The partner who scopes your engagement stays accountable for it through delivery. We keep the firm deliberately small enough for that to remain true.`}
            />
            <div className="mt-10">
              <TextLink href="/about#team">Meet the team</TextLink>
            </div>
          </div>

          <div>
            <h3 className="font-sans text-[0.6875rem] font-semibold tracking-[0.18em] text-slate-ink/70 uppercase">
              Leadership
            </h3>
            <ul className="mt-7 grid gap-x-12 gap-y-9 sm:grid-cols-2">
              {leadership.map((member) => (
                <li key={member.name} className="flex items-center gap-5">
                  <Avatar
                    name={member.name}
                    photo={member.photo}
                    overrides={member.avatar}
                    className="h-16 w-16 shrink-0 rounded-sm"
                  />
                  <div>
                    <div className="text-[0.9375rem] font-semibold tracking-tight text-ink">
                      {member.name}
                    </div>
                    <div className="mt-1 text-[0.8125rem] text-slate-ink">
                      {member.role}
                    </div>
                    <div className="mt-0.5 text-[0.75rem] text-slate-ink/60">
                      {member.office}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
