import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaSection } from "@/components/cta-section";
import { SectionHeading } from "@/components/ui";
import { ArrowRight } from "@/components/icons";
import { industries } from "@/content/industries";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Enterprise software consulting for financial services, healthcare, logistics, retail, manufacturing, and professional services across the UAE, the Gulf, and Europe.",
  alternates: { canonical: "/industries" },
};

const serviceName = (slug: string) =>
  services.find((s) => s.slug === slug)?.shortTitle ?? slug;

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Sectors where traceability is a requirement, not a feature."
        intro="We concentrate on industries carrying a regulatory, audit, or safety obligation. Those constraints shape the architecture from the first day of discovery rather than being retrofitted before a compliance deadline."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
        ]}
      />

      <section className="py-20 lg:py-28">
        <div className="container-page divide-y divide-line">
          {industries.map((industry, index) => (
            <article
              key={industry.slug}
              id={industry.slug}
              className="scroll-mt-28 bg-white py-12 lg:py-16"
            >
              <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
                <div>
                  <span className="font-serif text-[0.875rem] text-accent-300 tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-5 text-[1.625rem] leading-tight text-ink lg:text-[1.875rem]">
                    {industry.name}
                  </h2>
                  <p className="mt-5 text-[0.9375rem] leading-[1.8] text-slate-ink">
                    {industry.summary}
                  </p>

                  <h3 className="mt-9 font-sans text-[0.6875rem] font-semibold tracking-[0.18em] text-slate-ink/70 uppercase">
                    Services most often engaged
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {industry.relevantServices.map((slug) => (
                      <li key={slug}>
                        <Link
                          href={`/services/${slug}`}
                          className="inline-flex items-center gap-1.5 border border-line px-3 py-1.5 text-[0.8125rem] text-slate-ink transition-colors hover:border-navy-900/30 hover:text-accent-600"
                        >
                          {serviceName(slug)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:border-l lg:border-line lg:pl-16">
                  <h3 className="font-sans text-[0.6875rem] font-semibold tracking-[0.18em] text-slate-ink/70 uppercase">
                    Problems we are typically brought in to solve
                  </h3>
                  <ul className="mt-7 grid gap-px bg-line">
                    {industry.challenges.map((challenge) => (
                      <li
                        key={challenge}
                        className="flex items-start gap-4 bg-white py-4 text-[0.9375rem] leading-relaxed text-slate-ink"
                      >
                        <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-accent-400" />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-paper py-20 lg:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Outside these sectors?"
            title="The constraints matter more than the industry label."
            intro="If your business has audit requirements, integration complexity, or systems it cannot afford to take offline, the engineering discipline is the same regardless of what you sell. Tell us the problem and we will tell you honestly whether we have done something comparable."
            align="center"
          />
          <div className="mt-10 flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 bg-navy-900 px-7 py-4 text-[0.8125rem] font-semibold tracking-[0.06em] text-white uppercase transition-colors hover:bg-accent-600"
            >
              Describe your situation
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
