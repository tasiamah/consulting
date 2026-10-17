import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaSection } from "@/components/cta-section";
import { ArrowRight } from "@/components/icons";
import { caseStudies } from "@/content/case-studies";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Case studies",
  description:
    "Selected client engagements across logistics, financial services, healthcare, and manufacturing — the problem, the approach taken, and the measured outcome.",
  alternates: { canonical: "/case-studies" },
};

const serviceName = (slug: string) => services.find((s) => s.slug === slug)?.shortTitle ?? slug;

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title="Engagements, and what measurably changed."
        intro="Published anonymously under the confidentiality terms of each agreement. Named references and client introductions are available to prospective clients at proposal stage."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Case studies", href: "/case-studies" },
        ]}
      />

      <section className="py-20 lg:py-28">
        <div className="container-page divide-y divide-line">
          {caseStudies.map((study) => (
            <article key={study.slug} className="bg-white py-12 lg:py-16">
              <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-[0.6875rem] font-semibold tracking-[0.14em] uppercase">
                    <span className="text-accent-600">{study.sector}</span>
                    <span className="text-line">|</span>
                    <span className="text-slate-ink/60">{study.region}</span>
                    <span className="text-line">|</span>
                    <span className="text-slate-ink/60">{study.duration}</span>
                  </div>

                  <h2 className="mt-6 text-[1.625rem] leading-tight text-ink lg:text-[2rem]">
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="transition-colors hover:text-accent-600"
                    >
                      {study.title}
                    </Link>
                  </h2>

                  <p className="mt-3 text-[0.9375rem] text-slate-ink/70">{study.client}</p>

                  <p className="mt-6 max-w-2xl text-[1rem] leading-[1.8] text-slate-ink">
                    {study.challenge}
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="group inline-flex items-center gap-2 text-[0.8125rem] font-semibold tracking-[0.06em] text-navy-900 uppercase transition-colors hover:text-accent-600"
                    >
                      <span className="border-b border-current/30 pb-0.5 transition-colors group-hover:border-current">
                        Read the full engagement
                      </span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                    <ul className="flex flex-wrap gap-2">
                      {study.services.map((slug) => (
                        <li
                          key={slug}
                          className="border border-line px-3 py-1.5 text-[0.75rem] text-slate-ink/80"
                        >
                          {serviceName(slug)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <dl className="grid gap-px self-start bg-line lg:border lg:border-line">
                  {study.results.map((result) => (
                    <div key={result.label} className="bg-white p-6 lg:p-7">
                      <dt className="font-serif text-[2rem] leading-none text-navy-900">
                        {result.metric}
                      </dt>
                      <dd className="mt-3 text-[0.8125rem] leading-relaxed text-slate-ink">
                        {result.label}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-paper py-16">
        <div className="container-page">
          <p className="mx-auto max-w-3xl text-center text-[0.9375rem] leading-[1.8] text-slate-ink">
            <span className="font-semibold text-ink">A note on confidentiality.</span> Client names
            are withheld unless we hold written permission to use them. Figures are drawn from
            measurements taken during the engagement and agreed with the client before publication.
            Where we cannot evidence a number, we do not publish one.
          </p>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
