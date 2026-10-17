import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaSection } from "@/components/cta-section";
import { TextLink } from "@/components/ui";
import { ArrowRight, Check, DocIcon, ServiceIcons } from "@/components/icons";
import { getService, services } from "@/content/services";
import { industries } from "@/content/industries";
import { caseStudies } from "@/content/case-studies";
import { company } from "@/content/company";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | ${company.shortName}`,
      description: service.summary,
      url: `/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const Icon = ServiceIcons[service.icon];
  const relatedIndustries = industries.filter((i) =>
    i.relevantServices.includes(service.slug),
  );
  const relatedCases = caseStudies
    .filter((c) => c.services.includes(service.slug))
    .slice(0, 2);
  const otherServices = services.filter((s) => s.slug !== service.slug);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    serviceType: service.title,
    provider: {
      "@type": "Organization",
      name: company.legalName,
      url: company.url,
    },
    areaServed: ["AE", "GB"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} capabilities`,
      itemListElement: service.capabilities.map((cap) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: cap.title,
          description: cap.description,
        },
      })),
    },
  };

  return (
    <>
      <PageHero
        eyebrow={`Service ${service.number}`}
        title={service.title}
        intro={service.summary}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.shortTitle, href: `/services/${service.slug}` },
        ]}
        aside={
          <div className="border border-white/12 bg-white/[0.04] p-7">
            <Icon className="h-9 w-9 text-accent-300" />
            <dl className="mt-7 space-y-5">
              <div>
                <dt className="text-[0.75rem] tracking-[0.04em] text-white/40 uppercase">
                  Engagement model
                </dt>
                <dd className="mt-1 text-[0.9375rem] text-white/85">
                  {service.engagement.model}
                </dd>
              </div>
              <div>
                <dt className="text-[0.75rem] tracking-[0.04em] text-white/40 uppercase">
                  Typical duration
                </dt>
                <dd className="mt-1 text-[0.9375rem] text-white/85">
                  {service.engagement.duration}
                </dd>
              </div>
              <div>
                <dt className="text-[0.75rem] tracking-[0.04em] text-white/40 uppercase">
                  Team composition
                </dt>
                <dd className="mt-1 text-[0.9375rem] text-white/85">
                  {service.engagement.team}
                </dd>
              </div>
            </dl>
          </div>
        }
      />

      {/* Overview + deliverables */}
      <section className="py-20 lg:py-28">
        <div className="container-page grid gap-16 lg:grid-cols-[1.5fr_1fr] lg:gap-24">
          <div>
            <h2 className="text-[1.75rem] leading-tight text-ink lg:text-[2.125rem]">
              The problem we are solving
            </h2>
            <div className="mt-7 space-y-5">
              {service.overview.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-[1.0625rem] leading-[1.85] text-slate-ink"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <h3 className="mt-16 font-sans text-[0.6875rem] font-semibold tracking-[0.18em] text-slate-ink/70 uppercase">
              Capabilities
            </h3>
            <div className="mt-7 grid gap-px border border-line bg-line sm:grid-cols-2">
              {service.capabilities.map((cap) => (
                <div key={cap.title} className="bg-white p-7">
                  <h4 className="font-sans text-[1rem] font-semibold tracking-tight text-ink">
                    {cap.title}
                  </h4>
                  <p className="mt-3 text-[0.875rem] leading-[1.75] text-slate-ink">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="lg:sticky lg:top-32 lg:self-start">
            <div className="border border-line bg-paper p-8">
              <div className="flex items-center gap-3">
                <DocIcon className="h-5 w-5 text-accent-500" />
                <h2 className="font-sans text-[0.6875rem] font-semibold tracking-[0.18em] text-ink uppercase">
                  What you receive
                </h2>
              </div>
              <ul className="mt-7 space-y-4">
                {service.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[0.875rem] leading-[1.7] text-slate-ink"
                  >
                    <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-accent-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="group mt-9 inline-flex w-full items-center justify-center gap-2.5 bg-navy-900 px-6 py-4 text-[0.75rem] font-semibold tracking-[0.06em] text-white uppercase transition-colors hover:bg-accent-600"
              >
                Discuss this service
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Related industries */}
      {relatedIndustries.length > 0 && (
        <section className="border-y border-line bg-paper py-20 lg:py-24">
          <div className="container-page">
            <h2 className="font-sans text-[0.6875rem] font-semibold tracking-[0.18em] text-slate-ink/70 uppercase">
              Where this applies
            </h2>
            <div className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {relatedIndustries.map((industry) => (
                <Link
                  key={industry.slug}
                  href={`/industries#${industry.slug}`}
                  className="group bg-white p-7 transition-colors hover:bg-paper-dark"
                >
                  <h3 className="text-[1.0625rem] text-ink group-hover:text-accent-600">
                    {industry.name}
                  </h3>
                  <p className="mt-3 text-[0.875rem] leading-[1.7] text-slate-ink">
                    {industry.summary}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related case studies */}
      {relatedCases.length > 0 && (
        <section className="py-20 lg:py-28">
          <div className="container-page">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <h2 className="text-[1.75rem] leading-tight text-ink lg:text-[2.125rem]">
                Related engagements
              </h2>
              <TextLink href="/case-studies">All case studies</TextLink>
            </div>
            <div className="mt-10 grid gap-px border border-line bg-line lg:grid-cols-2">
              {relatedCases.map((study) => (
                <Link
                  key={study.slug}
                  href={`/case-studies/${study.slug}`}
                  className="group bg-white p-8 transition-colors hover:bg-paper lg:p-10"
                >
                  <div className="text-[0.6875rem] font-semibold tracking-[0.14em] text-accent-600 uppercase">
                    {study.sector}
                  </div>
                  <h3 className="mt-5 text-[1.1875rem] leading-snug text-ink group-hover:text-accent-600">
                    {study.title}
                  </h3>
                  <p className="mt-4 text-[0.9375rem] leading-[1.75] text-slate-ink">
                    {study.challenge.slice(0, 165)}…
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other services */}
      <section className="border-t border-line py-16">
        <div className="container-page">
          <h2 className="font-sans text-[0.6875rem] font-semibold tracking-[0.18em] text-slate-ink/70 uppercase">
            Other practice areas
          </h2>
          <ul className="mt-7 flex flex-wrap gap-3">
            {otherServices.map((other) => (
              <li key={other.slug}>
                <Link
                  href={`/services/${other.slug}`}
                  className="inline-flex items-center gap-2 border border-line px-4 py-2.5 text-[0.875rem] text-slate-ink transition-colors hover:border-navy-900/30 hover:text-accent-600"
                >
                  {other.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
