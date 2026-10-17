import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Cookie policy",
  description:
    "Which cookies and similar technologies the A & H Consulting Group website uses, why they are used, and how to control them.",
  alternates: { canonical: "/legal/cookies" },
};

const LAST_UPDATED = "1 January 2026";

const cookieTable = [
  {
    name: "Strictly necessary",
    purpose:
      "Allows the site to function: page delivery, security, and protection of the contact form against automated abuse.",
    duration: "Session, or up to 24 hours",
    consent: "Not required",
  },
  {
    name: "Preference",
    purpose:
      "Remembers choices you make, such as dismissing a notice, so they persist between visits.",
    duration: "Up to 12 months",
    consent: "Not required",
  },
  {
    name: "Analytics",
    purpose:
      "Aggregated, nonidentifying measurement of which pages are viewed, used to improve the site. Enabled only where a privacy preserving analytics provider is in use.",
    duration: "No persistent identifier set",
    consent: "Not required where fully anonymised",
  },
  {
    name: "Advertising and tracking",
    purpose:
      "Not used. We run no advertising pixels and no cross site tracking.",
    duration: "Not applicable",
    consent: "Not applicable",
  },
];

export default function CookiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Cookie policy"
        intro="This site uses the minimum set of cookies needed to operate securely. We do not run advertising or cross site tracking."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Cookie policy", href: "/legal/cookies" },
        ]}
      />

      <section className="py-16 lg:py-24">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="text-[0.8125rem] tracking-[0.04em] text-slate-ink/60 uppercase">
              Last updated {LAST_UPDATED}
            </p>

            <div className="prose-legal mt-10">
              <h2>1. What cookies are</h2>
              <p>
                Cookies are small text files placed on your device by a website.
                They are widely used to make sites work, to remember
                preferences, and to provide information to site operators.
                Similar technologies, such as local storage, serve comparable
                purposes and are covered by this policy.
              </p>

              <h2>2. Our approach</h2>
              <p>
                {company.legalName} keeps cookie use to the minimum necessary.
                We do not use advertising cookies, we do not operate tracking
                pixels for third party advertising networks, and we do not sell
                or share browsing data. Any analytics we operate is configured
                to collect aggregated, nonidentifying measurements only.
              </p>
            </div>

            {/* Cookie categories */}
            <div className="mt-12 overflow-hidden border border-line">
              <table className="w-full border-collapse text-left">
                <caption className="sr-only">
                  Categories of cookies used on this website, their purpose,
                  duration, and whether consent is required
                </caption>
                <thead>
                  <tr className="bg-paper">
                    {["Category", "Purpose", "Duration", "Consent"].map(
                      (heading) => (
                        <th
                          key={heading}
                          scope="col"
                          className="border-b border-line px-5 py-4 text-[0.6875rem] font-semibold tracking-[0.14em] text-ink uppercase"
                        >
                          {heading}
                        </th>
                      ),
                    )}
                  </tr>
                </thead>
                <tbody>
                  {cookieTable.map((row) => (
                    <tr key={row.name} className="align-top">
                      <th
                        scope="row"
                        className="border-b border-line px-5 py-5 text-[0.875rem] font-semibold text-ink"
                      >
                        {row.name}
                      </th>
                      <td className="border-b border-line px-5 py-5 text-[0.875rem] leading-relaxed text-slate-ink">
                        {row.purpose}
                      </td>
                      <td className="border-b border-line px-5 py-5 text-[0.875rem] whitespace-nowrap text-slate-ink">
                        {row.duration}
                      </td>
                      <td className="border-b border-line px-5 py-5 text-[0.875rem] text-slate-ink">
                        {row.consent}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="prose-legal mt-12">
              <h2>3. Third party services</h2>
              <p>
                This site is hosted on infrastructure operated by our hosting
                provider, which may set cookies strictly necessary for security,
                load balancing, and abuse prevention. Web fonts are self hosted
                and served from our own domain, so no request is made to a third
                party font provider when you load a page.
              </p>

              <h2>4. Managing cookies</h2>
              <p>
                You can control and delete cookies through your browser
                settings. Most browsers allow you to refuse all cookies, accept
                only first party cookies, or delete cookies when you close the
                browser. Instructions are available in the help documentation
                for Chrome, Safari, Firefox, and Edge.
              </p>
              <p>
                Blocking strictly necessary cookies may prevent parts of this
                site, including the contact form, from functioning correctly.
              </p>

              <h2>5. Do Not Track</h2>
              <p>
                Because we do not operate cross site tracking, there is nothing
                for a Do Not Track signal to disable. We honour it by default
                simply by not collecting that data.
              </p>

              <h2>6. Changes to this policy</h2>
              <p>
                If we introduce additional cookies, this page will be updated
                before they are set, and a consent mechanism will be presented
                where the law requires one.
              </p>

              <h2>7. Contact</h2>
              <p>
                Questions about this policy should be sent to{" "}
                <a href={`mailto:${company.privacyEmail}`}>
                  {company.privacyEmail}
                </a>
                . Our <a href="/legal/privacy">privacy policy</a> explains how
                we handle personal data more broadly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
