/**
 * Technologies we build and operate on. Keep this honest. An enterprise
 * client will ask about anything listed here during technical due diligence.
 */

export const techGroups = [
  {
    group: "Cloud & platform",
    items: [
      "AWS",
      "Microsoft Azure",
      "Google Cloud",
      "Terraform",
      "Kubernetes",
      "Docker",
    ],
  },
  {
    group: "Languages & frameworks",
    items: [
      "TypeScript",
      "Node.js",
      "C# / .NET",
      "Python",
      "Java",
      "React / Next.js",
    ],
  },
  {
    group: "Data & integration",
    items: [
      "PostgreSQL",
      "SQL Server",
      "Kafka",
      "Redis",
      "dbt",
      "REST / GraphQL",
    ],
  },
  {
    group: "Enterprise systems",
    items: [
      "SAP",
      "Microsoft Dynamics",
      "Oracle",
      "NetSuite",
      "Salesforce",
      "HubSpot",
    ],
  },
  {
    group: "Security & assurance",
    items: [
      "ISO/IEC 27001",
      "NIST CSF",
      "CIS Benchmarks",
      "SAST / SCA",
      "SSO & MFA",
      "SIEM",
    ],
  },
  {
    group: "Delivery & operations",
    items: [
      "GitHub Actions",
      "Azure DevOps",
      "Grafana",
      "Datadog",
      "PagerDuty",
      "Playwright",
    ],
  },
] as const;
