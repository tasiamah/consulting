import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaSection } from "@/components/cta-section";
import { ArrowRight, Check } from "@/components/icons";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import { services } from "@/content/services";
import { company } from "@/content/company";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/case-studies/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  return {
    title: study.title,
    description: study.challenge.slice(0, 180),
    alternates: { canonical: `/case-studies/${study.slug}` },
    openGraph: {
      title: `${study.title} | ${company.shortName}`,
      description: study.challenge.slice(0, 180),
      url: `/case-studies/${study.slug}`,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: PageProps<"/case-studies/[slug]">) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const related = caseStudies.filter((c) => c.slug !== study.slug).slice(0, 3);
  const engagedServices = study.services
    .map((s) => services.find((svc) => svc.slug === s))
    .filter(Boolean);

  return (
    <>
      <PageHero
        eyebrow={`${study.sector} · ${study.region}`}
        title={study.title}
        intro={study.client}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Case studies", href: "/case-studies" },
          { label: study.sector, href: `/case-studies/${study.slug}` },
        ]}
        aside={
          <dl className="grid gap-px bg-white/15">
            {study.results.map((result) => (
              <div key={result.label} className="bg-navy-950 p-6">
                <dt className="font-serif text-[2rem] leading-none text-white">
                  {result.metric}
                </dt>
                <dd className="mt-3 text-[0.8125rem] leading-relaxed text-white/55">
                  {result.label}
                </dd>
              </div>
            ))}
          </dl>
        }
      />

      <section className="py-20 lg:py-28">
        <div className="container-page grid gap-16 lg:grid-cols-[1.5fr_1fr] lg:gap-24">
          <div>
            <h2 className="text-[1.625rem] leading-tight text-ink lg:text-[2rem]">
              The situation
            </h2>
            <p className="mt-7 text-[1.0625rem] leading-[1.85] text-slate-ink">
              {study.challenge}
            </p>

            <h2 className="mt-16 text-[1.625rem] leading-tight text-ink lg:text-[2rem]">
              What we did
            </h2>
            <ol className="mt-8 space-y-px bg-line">
              {study.approach.map((step, i) => (
                <li key={step} className="flex gap-6 bg-white py-6">
                  <span className="font-serif text-[1.125rem] leading-none text-accent-300 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[0.9375rem] leading-[1.8] text-slate-ink">
                    {step}
                  </p>
                </li>
              ))}
            </ol>

            <h2 className="mt-16 text-[1.625rem] leading-tight text-ink lg:text-[2rem]">
              The outcome
            </h2>
            <ul className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-2">
              {study.results.map((result) => (
                <li key={result.label} className="bg-white p-7">
                  <div className="font-serif text-[2.25rem] leading-none text-navy-900">
                    {result.metric}
                  </div>
                  <p className="mt-4 text-[0.875rem] leading-relaxed text-slate-ink">
                    {result.label}
                  </p>
                </li>
              ))}
            </ul>

            {study.quote && (
              <figure className="mt-14 border-l-2 border-accent-500 pl-8">
                <blockquote className="font-serif text-[1.375rem] leading-[1.6] text-ink">
                  “{study.quote.text}”
                </blockquote>
                <figcaption className="mt-5 text-[0.875rem] text-slate-ink">
                  {study.quote.attribution}
                </figcaption>
              </figure>
            )}
          </div>

          <aside className="space-y-8 lg:sticky lg:top-32 lg:self-start">
            <div className="border border-line bg-paper p-8">
              <h2 className="font-sans text-[0.6875rem] font-semibold tracking-[0.18em] text-ink uppercase">
                Engagement summary
              </h2>
              <dl className="mt-7 space-y-5">
                {[
                  { term: "Client", detail: study.client },
                  { term: "Sector", detail: study.sector },
                  { term: "Region", detail: study.region },
                  { term: "Duration", detail: study.duration },
                ].map((item) => (
                  <div key={item.term}>
                    <dt className="text-[0.75rem] text-slate-ink/70">
                      {item.term}
                    </dt>
                    <dd className="mt-1 text-[0.9375rem] text-ink">
                      {item.detail}
                    </dd>
                  </div>
                ))}
              </dl>

              <h3 className="mt-8 border-t border-line pt-7 font-sans text-[0.6875rem] font-semibold tracking-[0.18em] text-ink uppercase">
                Practice areas engaged
              </h3>
              <ul className="mt-5 space-y-3">
                {engagedServices.map((svc) => (
                  <li key={svc!.slug}>
                    <Link
                      href={`/services/${svc!.slug}`}
                      className="group inline-flex items-start gap-3 text-[0.875rem] text-slate-ink transition-colors hover:text-accent-600"
                    >
                      <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-accent-500" />
                      <span className="border-b border-transparent group-hover:border-accent-500">
                        {svc!.shortTitle}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="group mt-9 inline-flex w-full items-center justify-center gap-2.5 bg-navy-900 px-6 py-4 text-[0.75rem] font-semibold tracking-[0.06em] text-white uppercase transition-colors hover:bg-accent-600"
              >
                Discuss a similar problem
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <p className="text-[0.8125rem] leading-relaxed text-slate-ink/80">
              This engagement is published anonymously under the confidentiality
              terms of the client agreement. A named reference can be arranged
              for prospective clients at proposal stage.
            </p>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-line bg-paper py-20 lg:py-24">
          <div className="container-page">
            <h2 className="font-sans text-[0.6875rem] font-semibold tracking-[0.18em] text-slate-ink/70 uppercase">
              Other engagements
            </h2>
            <div className="mt-8 grid gap-px border border-line bg-line lg:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/case-studies/${item.slug}`}
                  className="group bg-white p-8 transition-colors hover:bg-paper-dark"
                >
                  <div className="text-[0.6875rem] font-semibold tracking-[0.14em] text-accent-600 uppercase">
                    {item.sector}
                  </div>
                  <h3 className="mt-5 text-[1.0625rem] leading-snug text-ink group-hover:text-accent-600">
                    {item.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaSection />
    </>
  );
}
