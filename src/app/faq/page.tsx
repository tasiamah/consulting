import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaSection } from "@/components/cta-section";
import { Accordion } from "@/components/accordion";
import { allFaqs, faqGroups } from "@/content/faqs";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Frequently asked questions",
  description:
    "Answers on how A & H Consulting Group engages clients: pricing models, intellectual property ownership, data handling, security questionnaires, delivery reporting, and support terms.",
  alternates: { canonical: "/faq" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Client FAQ"
        title="The questions procurement always asks."
        intro="Commercial terms, intellectual property, data handling, and delivery governance, answered in advance so you can assess us before the first call rather than after it."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "FAQ", href: "/faq" },
        ]}
      />

      <section className="py-20 lg:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-[1fr_2.2fr] lg:gap-20">
          <nav
            aria-label="FAQ sections"
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <h2 className="font-sans text-[0.6875rem] font-semibold tracking-[0.18em] text-slate-ink/80 uppercase">
              Sections
            </h2>
            <ul className="mt-6 space-y-3">
              {faqGroups.map((group) => (
                <li key={group.group}>
                  <a
                    href={`#${slugify(group.group)}`}
                    className="text-[0.9375rem] text-slate-ink transition-colors hover:text-accent-600"
                  >
                    {group.group}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-10 border-t border-line pt-8">
              <p className="text-[0.875rem] leading-relaxed text-slate-ink">
                Not covered here? Email{" "}
                <a
                  href={`mailto:${company.email}`}
                  className="font-medium text-accent-600 underline underline-offset-4 hover:text-accent-700"
                >
                  {company.email}
                </a>{" "}
                or{" "}
                <Link
                  href="/contact"
                  className="font-medium text-accent-600 underline underline-offset-4 hover:text-accent-700"
                >
                  send us the question
                </Link>
                .
              </p>
            </div>
          </nav>

          <div className="space-y-16">
            {faqGroups.map((group) => (
              <section
                key={group.group}
                id={slugify(group.group)}
                className="scroll-mt-28"
              >
                <h2 className="text-[1.5rem] leading-tight text-ink lg:text-[1.75rem]">
                  {group.group}
                </h2>
                <div className="mt-7">
                  <Accordion
                    items={group.items}
                    idPrefix={slugify(group.group)}
                  />
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
