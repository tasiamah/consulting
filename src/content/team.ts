/**
 * ─────────────────────────────────────────────────────────────────────────────
 * PLACEHOLDER DATA — REPLACE BEFORE THE SITE IS USED FOR ONBOARDING OR KYC
 * ─────────────────────────────────────────────────────────────────────────────
 * The people below are illustrative structure, not real staff. Replace every
 * entry with actual personnel before publishing. A bank or enterprise client
 * that cannot verify a named individual treats the whole site as unreliable,
 * so an accurate three-person team is worth far more than an invented eleven.
 *
 * Deliberately omitted: professional certifications and named credentials.
 * Only add those once you hold the certificate. See CONTENT-CHECKLIST.md.
 */

export type TeamMember = {
  name: string;
  initials: string;
  role: string;
  office: "Dubai" | "London";
  group: "leadership" | "delivery";
  bio: string;
  focus: string[];
  /** Optional path in /public, e.g. "/team/first-last.jpg" */
  photo?: string;
  linkedin?: string;
};

export const team: TeamMember[] = [
  {
    name: "Ahmad Al-Hassan",
    initials: "AH",
    role: "Managing Partner",
    office: "Dubai",
    group: "leadership",
    bio: "Ahmad leads the firm's client relationships and commercial strategy. He spent twelve years in enterprise systems delivery across banking and logistics in the GCC before co-founding A&H, and remains the executive sponsor on the firm's regulated-sector engagements.",
    focus: ["Client strategy", "Regulated sectors", "Commercial governance"],
  },
  {
    name: "Hana Darwish",
    initials: "HD",
    role: "Partner, Technology",
    office: "London",
    group: "leadership",
    bio: "Hana is responsible for technical standards across every engagement. Her background is in large-scale platform modernisation for financial services, and she chairs the internal architecture review that signs off each solution design before build begins.",
    focus: ["Solution architecture", "Platform modernisation", "Technical assurance"],
  },
  {
    name: "Imran Qureshi",
    initials: "IQ",
    role: "Director of Delivery",
    office: "Dubai",
    group: "leadership",
    bio: "Imran owns delivery across the portfolio — scope, schedule, and quality. He introduced the firm's two-week release cadence and the acceptance-criteria framework that governs how work is signed off with clients.",
    focus: ["Programme delivery", "Delivery governance", "Client reporting"],
  },
  {
    name: "Sofia Lindqvist",
    initials: "SL",
    role: "Head of Information Security",
    office: "London",
    group: "leadership",
    bio: "Sofia leads the firm's security practice and its internal control environment. She runs client security assessments, oversees how A&H handles client data, and is the point of contact for enterprise security questionnaires and due diligence.",
    focus: ["Security assessment", "Governance & compliance", "Incident readiness"],
  },
  {
    name: "Rohan Mehta",
    initials: "RM",
    role: "Principal Cloud Architect",
    office: "Dubai",
    group: "delivery",
    bio: "Rohan designs the cloud platforms underpinning client systems, with a focus on data residency, resilience, and cost accountability. He has led migrations onto both AWS and Azure for organisations with strict audit requirements.",
    focus: ["AWS & Azure", "Terraform", "Cost governance"],
  },
  {
    name: "Layla Mansour",
    initials: "LM",
    role: "Principal Consultant",
    office: "Dubai",
    group: "delivery",
    bio: "Layla runs the firm's advisory assessments — technology due diligence, architecture review, and operating-model design. She translates technical findings into the costed roadmaps that boards use to approve investment.",
    focus: ["Technology due diligence", "Operating model", "Roadmap planning"],
  },
  {
    name: "Daniel Okafor",
    initials: "DO",
    role: "Lead Software Engineer",
    office: "London",
    group: "delivery",
    bio: "Daniel leads build teams on custom platform engagements and sets the firm's engineering standards for code review, testing, and release. He works primarily across TypeScript and .NET service architectures.",
    focus: ["TypeScript", ".NET", "API design"],
  },
  {
    name: "Priya Raman",
    initials: "PR",
    role: "Lead Integration Engineer",
    office: "Dubai",
    group: "delivery",
    bio: "Priya specialises in connecting ERP, finance, and bespoke systems, including the reconciliation reporting that finance teams rely on at period close. She has delivered integrations across Dynamics, NetSuite, and Salesforce estates.",
    focus: ["Enterprise integration", "Event-driven systems", "Data migration"],
  },
  {
    name: "Yusuf Kareem",
    initials: "YK",
    role: "Senior Security Engineer",
    office: "Dubai",
    group: "delivery",
    bio: "Yusuf carries out application security reviews, threat modelling, and remediation work embedded within client engineering teams. He also maintains the scanning and detection tooling used across A&H delivery pipelines.",
    focus: ["Application security", "Threat modelling", "Detection engineering"],
  },
  {
    name: "Elena Novak",
    initials: "EN",
    role: "Quality Assurance Lead",
    office: "London",
    group: "delivery",
    bio: "Elena owns test strategy across engagements, from automated regression suites to the user-acceptance process clients run before release. She is responsible for the evidence pack that accompanies every production deployment.",
    focus: ["Test automation", "UAT management", "Release assurance"],
  },
  {
    name: "Omar Siddiqui",
    initials: "OS",
    role: "Support & Operations Manager",
    office: "Dubai",
    group: "delivery",
    bio: "Omar manages the firm's support agreements and the on-call rota behind them. He runs the monthly service reviews where clients see incident history, patch status, and the agreed improvement backlog.",
    focus: ["Service management", "Monitoring & on-call", "Patch governance"],
  },
];

export const leadership = team.filter((m) => m.group === "leadership");
export const practitioners = team.filter((m) => m.group === "delivery");

export const teamStats = [
  { value: "11", label: "Permanent staff" },
  { value: "4", label: "Leadership team" },
  { value: "2", label: "Office locations" },
  { value: "9", label: "Languages spoken" },
];
