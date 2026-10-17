/**
 * Client engagements are published anonymously under the confidentiality terms
 * of each agreement.
 *
 * PLACEHOLDER DATA. Rewrite each entry to describe real engagements before
 * publishing, or remove the case studies section entirely. Named clients may
 * only be added with written permission. See CONTENT-CHECKLIST.md.
 */

export type CaseStudy = {
  slug: string;
  client: string;
  sector: string;
  region: string;
  title: string;
  challenge: string;
  approach: string[];
  results: { metric: string; label: string }[];
  services: string[];
  duration: string;
  quote?: { text: string; attribution: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "regional-logistics-visibility-platform",
    client: "Regional freight and customs operator",
    sector: "Logistics",
    region: "United Arab Emirates",
    title:
      "Replacing spreadsheet based shipment tracking with a live operations platform",
    challenge:
      "Operations staff tracked shipments across three carrier portals and a shared spreadsheet. Status enquiries took up to a day to answer, customs documentation was rekeyed by hand, and management had no reliable view of exceptions until after they became client complaints.",
    approach: [
      "Four week discovery mapping the shipment lifecycle across operations, documentation, and finance teams",
      "Built an integration layer consuming carrier APIs and EDI feeds into a single normalised shipment record",
      "Delivered an operations console with exception queues, SLA timers, and role based access",
      "Automated customs document generation from structured shipment data, removing manual rekeying",
      "Transitioned the platform to a support agreement with monitoring and an on call rota",
    ],
    results: [
      {
        metric: "< 2 min",
        label:
          "Average shipment status enquiry response, down from up to one day",
      },
      {
        metric: "71%",
        label: "Reduction in manual documentation handling time",
      },
      {
        metric: "3",
        label: "Carrier systems consolidated into one operational view",
      },
    ],
    services: [
      "system-integration",
      "custom-software-development",
      "managed-support",
    ],
    duration: "7 months, followed by ongoing support",
  },
  {
    slug: "payments-provider-security-uplift",
    client: "Cross border payments provider",
    sector: "Financial Services",
    region: "Netherlands & UAE",
    title: "Closing the control gaps blocking enterprise client onboarding",
    challenge:
      "The business was losing enterprise deals at the security review stage. It could not evidence access controls, logging coverage, or an incident response process, and each questionnaire was answered from scratch by the engineering lead.",
    approach: [
      "Assessed the control environment against ISO/IEC 27001 Annex A and NIST CSF, scoring findings by likelihood and impact",
      "Prioritised remediation into a 90 day plan with named owners and reporting to the board",
      "Implemented single sign on, enforced multifactor authentication, and quarterly access recertification",
      "Established centralised logging with detection rules and defined escalation paths",
      "Produced an incident response playbook and ran a tabletop exercise with the leadership team",
    ],
    results: [
      {
        metric: "90 days",
        label: "From assessment to all high severity findings remediated",
      },
      {
        metric: "100%",
        label: "Privileged accounts brought under multifactor authentication",
      },
      {
        metric: "4 days",
        label:
          "Average security questionnaire turnaround, down from several weeks",
      },
    ],
    services: ["cybersecurity", "it-consulting"],
    duration: "5 months",
  },
  {
    slug: "healthcare-group-cloud-migration",
    client: "Private healthcare group",
    sector: "Healthcare",
    region: "United Arab Emirates",
    title:
      "Migrating clinical and administrative systems with no planned downtime",
    challenge:
      "Ageing on premise infrastructure across four clinics was reaching end of support. Recovery had never been tested, costs were unattributable to any department, and the group could not answer where patient data physically resided.",
    approach: [
      "Assessed every workload for migration suitability and mapped system dependencies",
      "Built a Terraform defined landing zone with in region data residency and enforced encryption",
      "Migrated in phases outside clinical hours, each with a tested rollback point",
      "Established backup and restore testing with documented recovery objectives",
      "Introduced cost tagging and monthly reporting to the group finance team",
    ],
    results: [
      {
        metric: "0",
        label: "Minutes of planned clinical downtime across the migration",
      },
      { metric: "34%", label: "Reduction in annual infrastructure cost" },
      {
        metric: "4 hrs",
        label: "Tested recovery time objective, previously undefined",
      },
    ],
    services: ["cloud-solutions", "cybersecurity", "it-consulting"],
    duration: "9 months",
  },
  {
    slug: "manufacturer-erp-integration",
    client: "Industrial components manufacturer",
    sector: "Manufacturing",
    region: "Netherlands",
    title: "Connecting plant floor production data to enterprise planning",
    challenge:
      "Production output was reported into the ERP system manually at the end of each shift. Planning worked from figures that were a day old, stock accuracy drifted, and quality traceability depended on paper records held at each site.",
    approach: [
      "Modelled the data flow between plant systems, the ERP, and the quality function",
      "Built an event driven integration layer with idempotent processing and dead letter handling",
      "Delivered reconciliation reporting so finance could verify production figures tie out",
      "Digitised quality traceability records with lineage at batch level",
      "Handed over with runbooks, monitoring dashboards, and training for the internal IT team",
    ],
    results: [
      {
        metric: "Real time",
        label: "Production reporting into planning, previously end of shift",
      },
      {
        metric: "98.6%",
        label: "Stock record accuracy, up from an estimated 89%",
      },
      { metric: "2 sites", label: "Brought onto a single traceability record" },
    ],
    services: ["system-integration", "custom-software-development"],
    duration: "6 months",
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);
