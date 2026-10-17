import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaSection } from "@/components/cta-section";
import { SectionHeading } from "@/components/ui";
import { Check, DocIcon } from "@/components/icons";
import { phases, principles } from "@/content/approach";
import { assurances } from "@/content/company";

export const metadata: Metadata = {
  title: "Our approach",
  description:
    "How A & H Consulting Group delivers: a five-phase methodology covering discovery, design, build, transition, and support, with written acceptance criteria at every milestone.",
  alternates: { canonical: "/approach" },
};

const artefacts = [
  {
    name: "Discovery findings report",
    phase: "Discovery",
    purpose:
      "Documented current state, options with costs and trade-offs, and a recommendation. Yours to keep whether or not you proceed with us.",
  },
  {
    name: "Solution architecture document",
    phase: "Design",
    purpose:
      "System design, data model, integration points, and a record of every significant architectural decision with its rationale.",
  },
  {
    name: "Delivery plan and acceptance criteria",
    phase: "Design",
    purpose:
      "Milestones, dates, dependencies, and the specific, testable conditions each deliverable must meet to be accepted.",
  },
  {
    name: "Risk register",
    phase: "All phases",
    purpose:
      "Identified risks with likelihood, impact, mitigation, and a named owner. Reviewed and reissued at every milestone.",
  },
  {
    name: "Fortnightly progress report",
    phase: "Build",
    purpose:
      "Work completed, work planned, risks, budget consumed, and decisions required from you. Issued in writing alongside a live demonstration.",
  },
  {
    name: "Handover pack",
    phase: "Transition",
    purpose:
      "Source code, infrastructure-as-code, runbooks, administrator and developer documentation, and a signed IP transfer.",
  },
];

export default function ApproachPage() {
  return (
    <>
      <PageHero
        eyebrow="Our approach"
        title="Method over promises."
        intro="Any consultancy can tell you it delivers quality. What matters is whether the engagement produces evidence: written decisions, testable acceptance criteria, and documentation that outlives the people who wrote it."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Approach", href: "/approach" },
        ]}
        aside={
          <ul className="space-y-4 border-l border-white/15 pl-8">
            {[
              "Written acceptance criteria per milestone",
              "Internal architecture review before build",
              "Fortnightly demonstration of working software",
              "Formal change control on every variation",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[0.9375rem] text-white/75"
              >
                <Check className="mt-1 h-4 w-4 shrink-0 text-accent-300" />
                {item}
              </li>
            ))}
          </ul>
        }
      />

      {/* Phases */}
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="The engagement"
            title="Five phases, start to finish."
            intro="Not every engagement runs all five. An advisory assessment may stop after discovery, by design. But where we build, this is the sequence, and no phase begins before the previous one has been signed off."
          />

          <ol className="mt-16 space-y-px bg-line">
            {phases.map((phase) => (
              <li key={phase.number} className="bg-white">
                <div className="grid gap-8 py-10 lg:grid-cols-[auto_1fr_1.1fr] lg:gap-14 lg:py-14">
                  <div className="lg:w-28">
                    <span className="font-serif text-[2.75rem] leading-none text-accent-200 tabular-nums">
                      {phase.number}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-[1.5rem] leading-tight text-ink">
                      {phase.name}
                    </h3>
                    <p className="mt-2 text-[0.75rem] font-semibold tracking-[0.08em] text-accent-600 uppercase">
                      {phase.duration}
                    </p>
                    <p className="mt-5 text-[0.9375rem] leading-[1.8] text-slate-ink">
                      {phase.summary}
                    </p>
                  </div>

                  <div className="lg:border-l lg:border-line lg:pl-14">
                    <h4 className="font-sans text-[0.6875rem] font-semibold tracking-[0.18em] text-slate-ink/70 uppercase">
                      What happens
                    </h4>
                    <ul className="mt-5 space-y-3">
                      {phase.activities.map((activity) => (
                        <li
                          key={activity}
                          className="flex items-start gap-3 text-[0.9375rem] leading-relaxed text-slate-ink"
                        >
                          <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-accent-500" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Artefacts */}
      <section className="border-y border-line bg-paper py-24 lg:py-32">
        <div className="container-page">
          <SectionHeading
            eyebrow="Documentation"
            title="What ends up in your hands."
            intro="These artefacts are what make an engagement auditable after the fact. They are also what a board, an acquirer, or a regulator will ask to see."
          />

          <div className="mt-16 grid gap-px border border-line bg-line lg:grid-cols-3">
            {artefacts.map((artefact) => (
              <div key={artefact.name} className="bg-white p-8">
                <DocIcon className="h-5 w-5 text-accent-500" />
                <h3 className="mt-6 font-sans text-[1rem] font-semibold tracking-tight text-ink">
                  {artefact.name}
                </h3>
                <p className="mt-1.5 text-[0.75rem] tracking-[0.04em] text-accent-600 uppercase">
                  {artefact.phase}
                </p>
                <p className="mt-4 text-[0.875rem] leading-[1.75] text-slate-ink">
                  {artefact.purpose}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24 lg:py-32">
        <div className="container-page">
          <SectionHeading
            eyebrow="Principles"
            title="The commitments behind the method."
            align="center"
          />
          <div className="mt-16 grid gap-px border border-line bg-line lg:grid-cols-2">
            {principles.map((principle) => (
              <div key={principle.title} className="bg-white p-8 lg:p-11">
                <h3 className="text-[1.1875rem] leading-snug text-ink">
                  {principle.title}
                </h3>
                <p className="mt-4 text-[0.9375rem] leading-[1.8] text-slate-ink">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="relative overflow-hidden bg-navy-900 py-24 lg:py-32">
        <div className="bg-grid absolute inset-0" />
        <div className="container-page relative">
          <SectionHeading
            eyebrow="Controls"
            tone="light"
            title="How we handle data and access."
            intro="Clients remain accountable for their suppliers. These are the controls we operate under on every engagement, written into the master services agreement rather than offered as reassurance."
          />
          <div className="mt-16 grid gap-px bg-white/10 lg:grid-cols-2">
            {assurances.map((item) => (
              <div key={item.title} className="bg-navy-900 p-8 lg:p-11">
                <h3 className="text-[1.125rem] leading-snug text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-[0.9375rem] leading-[1.8] text-white/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="Start with discovery"
        title="Begin with four weeks of facts, not a twelve-month commitment."
        intro="Most engagements start with a short, fixed-fee discovery phase. You end it with a written report you own outright, including the option of doing nothing if that is genuinely the right answer."
      />
    </>
  );
}
