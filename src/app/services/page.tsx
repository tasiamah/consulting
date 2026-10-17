import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaSection } from "@/components/cta-section";
import { SectionHeading, TextLink } from "@/components/ui";
import { ArrowRight, Check, ServiceIcons } from "@/components/icons";
import { services } from "@/content/services";
import { phases } from "@/content/approach";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom software development, IT consulting, system integration, cloud solutions, cybersecurity, and managed support delivered from Dubai and London.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Advisory through delivery, under one accountable firm."
        intro="Six practice areas covering the full life of a system: deciding what to build, building it, integrating it with everything else, hosting it securely, and keeping it running afterwards."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
        aside={
          <dl className="space-y-5 border-l border-white/15 pl-8">
            {[
              { term: "Practice areas", detail: "Six, delivered by one team" },
              {
                term: "Engagement models",
                detail: "Fixed scope, dedicated team, or retainer",
              },
              { term: "Typical duration", detail: "4 weeks to 12 months" },
              {
                term: "Intellectual property",
                detail: "Transfers to the client in full",
              },
            ].map((item) => (
              <div key={item.term}>
                <dt className="text-[0.75rem] tracking-[0.04em] text-white/40 uppercase">
                  {item.term}
                </dt>
                <dd className="mt-1 text-[0.9375rem] text-white/85">
                  {item.detail}
                </dd>
              </div>
            ))}
          </dl>
        }
      />

      {/* Service list */}
      <section className="py-20 lg:py-28">
        <div className="container-page divide-y divide-line">
          {services.map((service) => {
            const Icon = ServiceIcons[service.icon];
            return (
              <article
                key={service.slug}
                id={service.slug}
                className="scroll-mt-28 bg-white py-12 lg:py-16"
              >
                <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
                  <div>
                    <div className="flex items-center gap-4">
                      <Icon className="h-8 w-8 text-accent-500" />
                      <span className="font-serif text-[1rem] text-accent-300 tabular-nums">
                        {service.number}
                      </span>
                    </div>
                    <h2 className="mt-6 text-[1.625rem] leading-tight text-ink lg:text-[1.875rem]">
                      {service.title}
                    </h2>
                    <p className="mt-5 text-[0.9375rem] leading-[1.8] text-slate-ink">
                      {service.summary}
                    </p>
                    <div className="mt-8">
                      <TextLink href={`/services/${service.slug}`}>
                        Full detail
                      </TextLink>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-sans text-[0.6875rem] font-semibold tracking-[0.18em] text-slate-ink/70 uppercase">
                      Capabilities
                    </h3>
                    <div className="mt-6 grid gap-x-10 gap-y-7 sm:grid-cols-2">
                      {service.capabilities.map((cap) => (
                        <div key={cap.title}>
                          <h4 className="font-sans text-[0.9375rem] font-semibold tracking-tight text-ink">
                            {cap.title}
                          </h4>
                          <p className="mt-2 text-[0.875rem] leading-[1.7] text-slate-ink">
                            {cap.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Engagement models */}
      <section className="border-y border-line bg-paper py-24 lg:py-32">
        <div className="container-page">
          <SectionHeading
            eyebrow="Engagement models"
            title="Three ways to appoint us."
            intro="The right model depends on how well defined the problem is. We will tell you which one fits rather than defaulting to whichever is most profitable for us."
          />

          <div className="mt-16 grid gap-px border border-line bg-line lg:grid-cols-3">
            {[
              {
                name: "Fixed scope phase",
                best: "Requirements are understood and the outcome is well defined",
                includes: [
                  "Agreed price and schedule",
                  "Written acceptance criteria per milestone",
                  "Formal change control on variations",
                  "Suited to discovery, assessments, and defined builds",
                ],
              },
              {
                name: "Dedicated team",
                best: "Scope will evolve, or you need sustained capacity alongside your own team",
                includes: [
                  "Named consultants at a monthly rate",
                  "Two week increments with demonstrations",
                  "Reprioritisation without renegotiation",
                  "Suited to multiquarter programmes",
                ],
              },
              {
                name: "Retainer",
                best: "Ongoing advisory, support, or security oversight",
                includes: [
                  "Committed capacity each month",
                  "Defined response targets",
                  "Monthly service review",
                  "Annual term, renewable",
                ],
              },
            ].map((model) => (
              <div key={model.name} className="bg-white p-8 lg:p-10">
                <h3 className="text-[1.25rem] leading-snug text-ink">
                  {model.name}
                </h3>
                <p className="mt-4 text-[0.875rem] leading-[1.7] text-slate-ink">
                  <span className="font-semibold text-ink">Best when: </span>
                  {model.best}
                </p>
                <ul className="mt-7 space-y-3 border-t border-line pt-6">
                  {model.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[0.875rem] leading-relaxed text-slate-ink"
                    >
                      <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-accent-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process strip */}
      <section className="py-24 lg:py-32">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading
              eyebrow="Delivery process"
              title="The same five phases, every engagement."
            />
            <TextLink href="/approach">How we work</TextLink>
          </div>

          <ol className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
            {phases.map((phase) => (
              <li key={phase.number} className="bg-white p-7">
                <span className="font-serif text-[1.375rem] leading-none text-accent-300 tabular-nums">
                  {phase.number}
                </span>
                <h3 className="mt-5 font-sans text-[1rem] font-semibold tracking-tight text-ink">
                  {phase.name}
                </h3>
                <p className="mt-1.5 text-[0.75rem] tracking-[0.04em] text-slate-ink/60 uppercase">
                  {phase.duration}
                </p>
                <ul className="mt-5 space-y-2">
                  {phase.activities.slice(0, 3).map((activity) => (
                    <li
                      key={activity}
                      className="text-[0.8125rem] leading-relaxed text-slate-ink before:mr-2 before:text-accent-300 before:content-['·']"
                    >
                      {activity}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Cross link */}
      <section className="border-t border-line bg-paper py-16">
        <div className="container-page flex flex-wrap items-center justify-between gap-6">
          <p className="max-w-xl text-[1.0625rem] leading-relaxed text-ink">
            Not sure which practice area your problem sits in? That is a normal
            starting point, and most are not cleanly one thing.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 bg-navy-900 px-7 py-4 text-[0.8125rem] font-semibold tracking-[0.06em] text-white uppercase transition-colors hover:bg-accent-600"
          >
            Talk it through with a consultant
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
