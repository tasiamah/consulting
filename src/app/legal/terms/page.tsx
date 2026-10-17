import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { company, offices } from "@/content/company";

export const metadata: Metadata = {
  title: "Terms of service",
  description:
    "Terms governing use of the A & H Consulting Group website and the general basis on which the firm accepts and delivers client engagements.",
  alternates: { canonical: "/legal/terms" },
};

const LAST_UPDATED = "1 January 2026";

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of service"
        intro={`Terms governing use of this website and the general basis on which ${company.legalName} accepts engagements.`}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Terms of service", href: "/legal/terms" },
        ]}
      />

      <section className="py-16 lg:py-24">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="text-[0.8125rem] tracking-[0.04em] text-slate-ink/60 uppercase">
              Last updated {LAST_UPDATED}
            </p>

            <div className="prose-legal mt-10">
              <p>
                These terms apply to your use of {company.domain} (the
                &ldquo;site&rdquo;) and set out the general basis on which{" "}
                {company.legalName} (&ldquo;A&amp;H&rdquo;, &ldquo;we&rdquo;,
                &ldquo;us&rdquo;) provides professional services. By using the
                site you accept these terms.
              </p>

              <h2>1. About us</h2>
              <p>
                {company.legalName} is a limited liability company providing
                enterprise software consulting services, with its registered
                head office at {offices[0].lines.join(", ")} and a European
                office at {offices[1].lines.join(", ")}. You can contact us at{" "}
                <a href={`mailto:${company.email}`}>{company.email}</a>.
              </p>

              <h2>2. Use of this site</h2>
              <p>
                You may use this site for lawful purposes only. You must not:
              </p>
              <ul>
                <li>
                  Use the site in a way that breaches applicable law, or attempt
                  to gain unauthorised access to it or to any system connected
                  to it.
                </li>
                <li>
                  Introduce malicious code, or conduct scanning, scraping, or
                  load testing without our written consent.
                </li>
                <li>
                  Use the contact form to transmit unsolicited commercial
                  communications or automated submissions.
                </li>
              </ul>
              <p>
                We may suspend or withdraw access to the site at any time, and
                we do not guarantee that it will be continuously available.
              </p>

              <h2>3. Information on this site is not advice</h2>
              <p>
                The content of this site is provided for general information
                about our capabilities. It does not constitute professional,
                technical, legal, or financial advice and must not be relied
                upon as such. Professional advice is given only under a signed
                engagement agreement, and only to the client named in it.
              </p>
              <p>
                Case studies describe past engagements and are illustrative.
                They are not a representation or warranty that comparable
                results will be achieved in any other engagement.
              </p>

              <h2>4. Engagement terms</h2>
              <p>
                Professional services are provided solely under a written master
                services agreement and accompanying statement of work. Where
                those documents conflict with these terms, the engagement
                documents prevail in respect of the services. Our engagement
                agreements ordinarily address:
              </p>
              <ul>
                <li>
                  <strong>Scope and acceptance.</strong> Deliverables,
                  milestones, and the written acceptance criteria against which
                  each deliverable is assessed.
                </li>
                <li>
                  <strong>Change control.</strong> A documented process for
                  estimating, approving, and baselining any variation to scope,
                  cost, or schedule.
                </li>
                <li>
                  <strong>Fees and payment.</strong> Pricing basis, invoicing
                  schedule, and payment terms. Unless agreed otherwise, invoices
                  are issued monthly in arrears on 30 day terms.
                </li>
                <li>
                  <strong>Intellectual property.</strong> Ownership of bespoke
                  deliverables transfers to the client on payment. We retain
                  ownership of our preexisting methodologies, tools, and
                  expertise, and grant the client a licence to use them to the
                  extent embedded in a deliverable.
                </li>
                <li>
                  <strong>Confidentiality.</strong> Mutual confidentiality
                  obligations, ordinarily under a separate nondisclosure
                  agreement signed before discovery begins.
                </li>
                <li>
                  <strong>Data protection.</strong> A data processing agreement
                  where we process personal data on the client&rsquo;s behalf.
                </li>
                <li>
                  <strong>Liability.</strong> Limitations and exclusions of
                  liability appropriate to the value and risk of the engagement.
                </li>
                <li>
                  <strong>Termination.</strong> Notice periods and the
                  consequences of termination, including handover of work in
                  progress.
                </li>
              </ul>
              <p>
                Proposals are valid for 30 days from issue unless stated
                otherwise and do not create a binding commitment until
                countersigned by both parties.
              </p>

              <h2>5. Intellectual property in site content</h2>
              <p>
                All content on this site, including text, layout, graphics, and
                the A&amp;H name and marks, is owned by or licensed to{" "}
                {company.legalName}. You may view and print pages for your own
                internal business use. Any other reproduction, distribution, or
                commercial exploitation requires our prior written consent.
              </p>

              <h2>6. Third party links</h2>
              <p>
                Where this site links to third party resources, those links are
                provided for convenience. We have no control over the content of
                those sites and accept no responsibility for it.
              </p>

              <h2>7. Limitation of liability</h2>
              <p>
                Nothing in these terms excludes or limits liability for death or
                personal injury caused by negligence, for fraud or fraudulent
                misrepresentation, or for any other liability that cannot
                lawfully be excluded.
              </p>
              <p>
                Subject to that, we exclude all conditions, warranties, and
                representations relating to this site to the fullest extent
                permitted by law, and we will not be liable for any loss of
                profit, loss of business, business interruption, or loss of data
                arising from use of, or inability to use, this site. Liability
                in respect of professional services is governed exclusively by
                the applicable engagement agreement.
              </p>

              <h2>8. Privacy</h2>
              <p>
                Personal data submitted through this site is handled in
                accordance with our <a href="/legal/privacy">privacy policy</a>{" "}
                and our <a href="/legal/cookies">cookie policy</a>.
              </p>

              <h2>9. Changes to these terms</h2>
              <p>
                We may revise these terms at any time by updating this page. The
                revision date above records the most recent change. Continued
                use of the site constitutes acceptance of the revised terms.
              </p>

              <h2>10. Governing law</h2>
              <p>
                These terms and any dispute arising out of them are governed by
                the laws of the Emirate of Dubai and the federal laws of the
                United Arab Emirates, and the courts of Dubai have exclusive
                jurisdiction. Governing law for professional services is
                specified in the relevant engagement agreement and may differ.
              </p>

              <h2>11. Contact</h2>
              <p>
                Questions about these terms should be sent to{" "}
                <a href={`mailto:${company.email}`}>{company.email}</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
