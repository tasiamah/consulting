/** PLACEHOLDER — keep only roles you are genuinely hiring for. */

export type Role = {
  title: string;
  office: string;
  type: string;
  practice: string;
  summary: string;
};

export const openRoles: Role[] = [
  {
    title: "Senior Software Engineer",
    office: "Dubai, UAE",
    type: "Full time",
    practice: "Software Development",
    summary:
      "Lead build workstreams on client platform engagements across TypeScript and .NET. You will own technical decisions on your workstream and review the work of engineers around you.",
  },
  {
    title: "Cloud Platform Engineer",
    office: "Dubai, UAE",
    type: "Full time",
    practice: "Cloud Solutions",
    summary:
      "Design and provision client landing zones on AWS and Azure through Terraform, with responsibility for resilience, residency, and cost accountability.",
  },
  {
    title: "Security Consultant",
    office: "London, UK",
    type: "Full time",
    practice: "Cybersecurity",
    summary:
      "Run client security assessments against recognised control frameworks and work embedded with client engineering teams to remediate what you find.",
  },
  {
    title: "Integration Engineer",
    office: "Dubai, UAE",
    type: "Full time",
    practice: "System Integration",
    summary:
      "Build the interfaces connecting ERP, finance, and bespoke systems, including the reconciliation reporting that finance and audit teams depend on.",
  },
];

export const benefits = [
  {
    title: "Senior work, not staffing",
    description:
      "We do not resell headcount. Every consultant owns client outcomes and has a direct line to the partner sponsoring the engagement.",
  },
  {
    title: "Two offices, one standard",
    description:
      "Dubai and London teams work to the same engineering and review standards, with genuine mobility between engagements and regions.",
  },
  {
    title: "Funded certification",
    description:
      "Professional certifications relevant to your practice area are paid for, with study time allocated during working hours rather than evenings.",
  },
  {
    title: "Protected improvement time",
    description:
      "A standing allocation of non-billable time each month for tooling, internal standards, and research that improves how the firm delivers.",
  },
];
