import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { company, offices } from "@/content/company";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How A & H Consulting Group LLC collects, uses, stores, and protects personal data, and the rights available to data subjects under the EU GDPR and UAE data protection law.",
  alternates: { canonical: "/legal/privacy" },
};

const LAST_UPDATED = "1 January 2026";

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        intro={`How ${company.legalName} collects, uses, and protects personal data, and the rights available to you.`}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Privacy policy", href: "/legal/privacy" },
        ]}
      />

      <section className="py-16 lg:py-24">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="text-[0.8125rem] tracking-[0.04em] text-slate-ink/80 uppercase">
              Last updated {LAST_UPDATED}
            </p>

            <div className="prose-legal mt-10">
              <p>
                {company.legalName} (&ldquo;A&amp;H&rdquo;, &ldquo;we&rdquo;,
                &ldquo;us&rdquo;) is committed to protecting the personal data
                entrusted to us. This policy explains what we collect, why we
                collect it, how long we keep it, and the rights you can
                exercise. It applies to our website, our client engagements, and
                our recruitment activity.
              </p>
              <p>
                We process personal data in accordance with the EU General Data
                Protection Regulation (Regulation 2016/679), the Dutch GDPR
                Implementation Act (Uitvoeringswet AVG), and UAE Federal Decree
                Law No. 45 of 2021 on the Protection of Personal Data, as
                applicable to the relationship between us.
              </p>

              <h2>1. Who is responsible for your data</h2>
              <p>
                {company.legalName} is the data controller for personal data
                collected through this website, for business development, and
                for recruitment. Our registered head office is:
              </p>
              <ul>
                {offices.map((office) => (
                  <li key={office.id}>
                    <strong>{office.region}:</strong> {office.lines.join(", ")}
                  </li>
                ))}
              </ul>
              <p>
                Data protection enquiries should be addressed to{" "}
                <a href={`mailto:${company.privacyEmail}`}>
                  {company.privacyEmail}
                </a>
                .
              </p>
              <p>
                Where we process personal data on behalf of a client as part of
                a consulting engagement, the client is the data controller and
                we act as a data processor under a written data processing
                agreement. In that situation, the client&rsquo;s own privacy
                notice governs how the data is used, and requests from data
                subjects should be directed to the client.
              </p>

              <h2>2. What personal data we collect</h2>
              <h3>Information you provide directly</h3>
              <ul>
                <li>
                  <strong>Enquiry details:</strong> name, work email address,
                  organisation, phone number where provided, the area of
                  interest you select, and the content of your message.
                </li>
                <li>
                  <strong>Recruitment information:</strong> your CV, covering
                  note, employment history, qualifications, right to work
                  information, and references.
                </li>
                <li>
                  <strong>Engagement correspondence:</strong> contact details
                  and communications exchanged with us during the course of a
                  client relationship.
                </li>
              </ul>

              <h3>Information collected automatically</h3>
              <ul>
                <li>
                  <strong>Technical data:</strong> IP address, browser type,
                  device type, referring page, and pages viewed. This is
                  collected through server logs and, where enabled, privacy
                  preserving analytics.
                </li>
                <li>
                  <strong>Security data:</strong> request metadata retained
                  briefly to detect and prevent automated abuse of our contact
                  form.
                </li>
              </ul>
              <p>
                We do not collect special category data through this website,
                and we ask that you do not include sensitive personal
                information in enquiry messages.
              </p>

              <h2>3. Why we process it, and our lawful basis</h2>
              <ul>
                <li>
                  <strong>Responding to your enquiry.</strong> On the basis of
                  your consent and our legitimate interest in conducting
                  business correspondence.
                </li>
                <li>
                  <strong>
                    Delivering and administering client engagements.
                  </strong>{" "}
                  On the basis of performance of a contract, or steps taken at
                  your request prior to entering one.
                </li>
                <li>
                  <strong>Recruitment.</strong> On the basis of steps taken
                  prior to entering an employment contract and our legitimate
                  interest in assessing candidates.
                </li>
                <li>
                  <strong>Securing our website and systems.</strong> On the
                  basis of our legitimate interest in preventing fraud, abuse,
                  and unauthorised access.
                </li>
                <li>
                  <strong>Meeting legal and regulatory obligations.</strong>{" "}
                  Including accounting, tax, and anti money laundering
                  requirements.
                </li>
              </ul>
              <p>
                We do not sell personal data, and we do not use enquiry details
                for unsolicited marketing.
              </p>

              <h2>4. How long we keep it</h2>
              <ul>
                <li>
                  <strong>Enquiries that do not become engagements:</strong> 24
                  months from last contact, then deleted.
                </li>
                <li>
                  <strong>Client engagement records:</strong> for the duration
                  of the engagement and seven years afterwards, to meet
                  contractual, accounting, and professional obligations.
                </li>
                <li>
                  <strong>Unsuccessful job applications:</strong> 12 months,
                  unless you ask us to keep them longer for future openings.
                </li>
                <li>
                  <strong>Server and security logs:</strong> no more than 90
                  days.
                </li>
              </ul>

              <h2>5. Who we share it with</h2>
              <p>
                We share personal data only where necessary, and only with
                parties bound by confidentiality and data protection
                obligations:
              </p>
              <ul>
                <li>
                  <strong>Hosting and infrastructure providers</strong> that
                  operate this website and our internal systems.
                </li>
                <li>
                  <strong>Email and productivity providers</strong> used to
                  receive and respond to correspondence.
                </li>
                <li>
                  <strong>Professional advisers</strong> such as accountants,
                  auditors, and legal counsel, where required.
                </li>
                <li>
                  <strong>Regulators and law enforcement</strong>, where we are
                  legally obliged to disclose.
                </li>
              </ul>
              <p>
                We do not transfer client data to subcontractors without the
                client&rsquo;s written authorisation.
              </p>

              <h2>6. International transfers</h2>
              <p>
                We operate from the United Arab Emirates and the Netherlands, so
                personal data may be processed in either jurisdiction. Where
                personal data is transferred out of the European Economic Area,
                we rely on an adequacy decision where one applies, or otherwise
                on the European Commission Standard Contractual Clauses,
                together with a transfer risk assessment.
              </p>
              <p>
                On client engagements, data residency requirements are captured
                during discovery and reflected in the solution architecture. We
                do not move client data between jurisdictions without written
                instruction.
              </p>

              <h2>7. How we protect it</h2>
              <ul>
                <li>Encryption of data in transit (TLS) and at rest.</li>
                <li>
                  Least privilege access control with multifactor authentication
                  enforced.
                </li>
                <li>
                  Credentials held only in a managed secrets store, never in
                  code or email.
                </li>
                <li>Segregated environments for each client engagement.</li>
                <li>
                  Access reviewed periodically and revoked on engagement close.
                </li>
                <li>
                  Logging and monitoring, with a documented incident response
                  procedure.
                </li>
              </ul>
              <p>
                No system can be guaranteed completely secure. Where a personal
                data breach is likely to result in a risk to individuals, we
                will notify the relevant supervisory authority and affected
                individuals without undue delay and in accordance with
                applicable law.
              </p>

              <h2>8. Your rights</h2>
              <p>
                Subject to the applicable law, you may have the right to request
                access to your personal data; to have inaccurate data corrected;
                to have data erased; to restrict or object to processing; to
                receive your data in a portable format; and to withdraw consent
                at any time where processing relies on consent.
              </p>
              <p>
                To exercise any of these rights, email{" "}
                <a href={`mailto:${company.privacyEmail}`}>
                  {company.privacyEmail}
                </a>
                . We will respond within one month. We may ask you to verify
                your identity before we act on a request.
              </p>
              <p>
                If you are not satisfied with our response, you have the right
                to lodge a complaint with a supervisory authority. In the
                Netherlands, that is the Autoriteit Persoonsgegevens. In the
                United Arab Emirates, it is the UAE Data Office.
              </p>

              <h2>9. Cookies</h2>
              <p>
                This website uses only the cookies strictly necessary for it to
                function. We do not use advertising or cross site tracking
                cookies. Full detail is set out in our{" "}
                <a href="/legal/cookies">cookie policy</a>.
              </p>

              <h2>10. Changes to this policy</h2>
              <p>
                We may update this policy to reflect changes in our practices or
                in the law. The date at the top of this page records the most
                recent revision. Material changes affecting existing clients are
                notified directly.
              </p>

              <h2>11. Contact</h2>
              <p>
                Questions about this policy or about how we handle personal data
                should be sent to{" "}
                <a href={`mailto:${company.privacyEmail}`}>
                  {company.privacyEmail}
                </a>
                , or by post to our registered head office at{" "}
                {offices[0].lines.join(", ")}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
