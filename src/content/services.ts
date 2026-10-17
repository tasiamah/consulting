export type Service = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  summary: string;
  overview: string[];
  capabilities: { title: string; description: string }[];
  deliverables: string[];
  engagement: { model: string; duration: string; team: string };
  icon: "code" | "compass" | "integrate" | "cloud" | "shield" | "support";
};

export const services: Service[] = [
  {
    slug: "custom-software-development",
    number: "01",
    title: "Custom Software Development",
    shortTitle: "Software Development",
    summary:
      "Bespoke platforms, internal tools, and customer-facing products engineered to your operational reality rather than to a template.",
    overview: [
      "Off-the-shelf software forces your business to adapt to someone else's process. We take the opposite approach: we start from how your organisation actually operates, then build the system that fits it.",
      "Our delivery teams pair senior engineers with a dedicated solution architect, so the people writing the code are the same people who understood the problem. Work ships in two-week increments with a demonstrable outcome at the end of each one.",
    ],
    capabilities: [
      {
        title: "Product and platform engineering",
        description:
          "Web applications, internal operations platforms, customer portals, and APIs built on TypeScript, .NET, Python, and Java.",
      },
      {
        title: "Legacy modernisation",
        description:
          "Incremental replacement of ageing systems using the strangler-fig pattern, so the business keeps running throughout the transition.",
      },
      {
        title: "Data and reporting layers",
        description:
          "Warehouses, pipelines, and reporting surfaces that give leadership a single, reconciled view of the business.",
      },
      {
        title: "Workflow automation",
        description:
          "Removal of manual handoffs across finance, operations, and compliance functions, with full audit trails.",
      },
    ],
    deliverables: [
      "Technical discovery report and solution architecture",
      "Working software released in two-week increments",
      "Automated test suite and CI/CD pipeline",
      "Infrastructure-as-code and environment runbooks",
      "Developer and administrator documentation",
      "Source code and IP transferred in full on completion",
    ],
    engagement: {
      model: "Fixed-scope phases or dedicated team",
      duration: "8 weeks to 12 months",
      team: "Architect, 2 to 4 engineers, QA, delivery lead",
    },
    icon: "code",
  },
  {
    slug: "it-consulting",
    number: "02",
    title: "IT Consulting & Technology Advisory",
    shortTitle: "IT Consulting",
    summary:
      "Independent assessment of your technology estate, with a costed roadmap your board can act on and your auditors can follow.",
    overview: [
      "Technology decisions are capital decisions. We give leadership teams an evidence-based view of what they own, what it costs, where the risk sits, and what to do next, without a vendor incentive attached to the answer.",
      "Engagements typically begin with a four-week assessment covering architecture, vendor contracts, team capability, and spend. The output is a prioritised roadmap with effort, cost, and risk attached to every recommendation.",
    ],
    capabilities: [
      {
        title: "Technology due diligence",
        description:
          "Pre-investment and pre-acquisition reviews of codebases, architecture, licensing exposure, and engineering practice.",
      },
      {
        title: "Architecture review",
        description:
          "Assessment against scalability, resilience, and maintainability criteria, with a remediation plan sequenced by business impact.",
      },
      {
        title: "Vendor and spend rationalisation",
        description:
          "Contract and licence review that identifies duplication, over-provisioning, and renegotiation opportunities.",
      },
      {
        title: "Operating model design",
        description:
          "Team structure, role definitions, governance forums, and delivery process appropriate to your stage and sector.",
      },
    ],
    deliverables: [
      "Current-state assessment with documented evidence",
      "Target architecture and operating model",
      "Prioritised roadmap with cost and effort estimates",
      "Risk register with mitigation owners",
      "Board-ready summary presentation",
    ],
    engagement: {
      model: "Fixed-fee assessment or retained advisory",
      duration: "4 to 12 weeks",
      team: "Principal consultant, architect, analyst",
    },
    icon: "compass",
  },
  {
    slug: "system-integration",
    number: "03",
    title: "System Integration",
    shortTitle: "System Integration",
    summary:
      "Connecting ERP, CRM, finance, and bespoke systems so data moves once, reliably, and with a verifiable audit trail.",
    overview: [
      "Most operational pain in a mid-sized business is not caused by any single system. It is caused by the gaps between them. Reconciliation by spreadsheet, data re-keyed between departments, and month-end closes that take weeks.",
      "We design and build the integration layer that closes those gaps, with idempotent processing, dead-letter handling, and reconciliation reporting so finance and audit teams can prove the numbers tie out.",
    ],
    capabilities: [
      {
        title: "Enterprise application integration",
        description:
          "SAP, Microsoft Dynamics, Oracle, NetSuite, Salesforce, and HubSpot connected to bespoke and third-party systems.",
      },
      {
        title: "API design and governance",
        description:
          "Versioned, documented, contract-tested APIs with authentication, rate limiting, and consumer onboarding.",
      },
      {
        title: "Event-driven architecture",
        description:
          "Message brokers and event streams that decouple systems and absorb load without data loss.",
      },
      {
        title: "Data migration",
        description:
          "Profiling, cleansing, mapping, and rehearsed cutover with rollback plans and reconciliation evidence.",
      },
    ],
    deliverables: [
      "Integration architecture and data-flow mapping",
      "Built and tested interfaces with contract tests",
      "Monitoring, alerting, and reconciliation dashboards",
      "Cutover plan, rehearsal results, and rollback procedure",
      "Operational runbook for the support team",
    ],
    engagement: {
      model: "Fixed-scope integration programme",
      duration: "6 weeks to 9 months",
      team: "Integration architect, 2 to 3 engineers, data analyst",
    },
    icon: "integrate",
  },
  {
    slug: "cloud-solutions",
    number: "04",
    title: "Cloud Solutions",
    shortTitle: "Cloud Solutions",
    summary:
      "Migration, architecture, and cost governance across AWS, Azure, and Google Cloud, built for data residency and audit requirements.",
    overview: [
      "Cloud programmes fail for predictable reasons: workloads lifted without redesign, no cost accountability, and no answer when a regulator asks where the data physically sits.",
      "We plan migrations around those constraints from the outset. Every environment we build is defined in code, tagged for cost attribution, and documented against the residency and retention rules that apply to your sector.",
    ],
    capabilities: [
      {
        title: "Migration planning and execution",
        description:
          "Workload assessment, dependency mapping, and phased migration with measured rollback points.",
      },
      {
        title: "Landing zone and platform engineering",
        description:
          "Account structure, network topology, identity, and guardrails provisioned through Terraform.",
      },
      {
        title: "Cost governance",
        description:
          "Tagging standards, budget alerts, rightsizing, and committed-use planning with monthly reporting to finance.",
      },
      {
        title: "Resilience engineering",
        description:
          "Multi-zone design, backup and restore testing, and documented recovery time and recovery point objectives.",
      },
    ],
    deliverables: [
      "Workload assessment and migration sequencing plan",
      "Terraform-defined landing zone and environments",
      "Cost model with tagging and budget controls",
      "Disaster recovery plan with tested restore evidence",
      "Platform operations handbook",
    ],
    engagement: {
      model: "Programme delivery or platform retainer",
      duration: "6 weeks to 12 months",
      team: "Cloud architect, 2 platform engineers, FinOps analyst",
    },
    icon: "cloud",
  },
  {
    slug: "cybersecurity",
    number: "05",
    title: "Cybersecurity",
    shortTitle: "Cybersecurity",
    summary:
      "Security assessment, hardening, and incident readiness mapped to the controls your clients, insurers, and regulators ask about.",
    overview: [
      "Security questionnaires from enterprise clients and insurers have become a commercial gate. Answering them credibly requires controls that genuinely exist and evidence that they operate.",
      "We assess your current posture against recognised control frameworks, remediate the gaps that carry real risk, and leave you with the documentation and monitoring needed to demonstrate control to a third party.",
    ],
    capabilities: [
      {
        title: "Security posture assessment",
        description:
          "Gap analysis against ISO/IEC 27001 Annex A, NIST CSF, and CIS Controls, scored by likelihood and impact.",
      },
      {
        title: "Application security",
        description:
          "Threat modelling, secure code review, dependency and secret scanning, and remediation alongside your engineers.",
      },
      {
        title: "Identity and access management",
        description:
          "Single sign-on, multi-factor enforcement, privileged access control, and quarterly access recertification.",
      },
      {
        title: "Incident readiness",
        description:
          "Response playbooks, logging and detection coverage, and tabletop exercises with the leadership team.",
      },
    ],
    deliverables: [
      "Control gap assessment with risk-scored findings",
      "Prioritised remediation plan with owners and dates",
      "Hardened configuration baselines and policy documents",
      "Logging, detection, and alerting coverage",
      "Incident response playbook and exercise report",
    ],
    engagement: {
      model: "Assessment, remediation programme, or retainer",
      duration: "3 weeks to 6 months",
      team: "Security lead, 1 to 2 security engineers, GRC analyst",
    },
    icon: "shield",
  },
  {
    slug: "managed-support",
    number: "06",
    title: "Software Maintenance & Support",
    shortTitle: "Maintenance & Support",
    summary:
      "Contracted support with defined response targets, proactive patching, and a named engineering team that knows your system.",
    overview: [
      "Software is not finished when it ships. Dependencies age, usage patterns shift, and the people who understood the original design move on.",
      "Our support agreements put a named team behind your system with contractual response targets, a monitored ticket queue, and a monthly service review covering incidents, patching, and the improvement backlog.",
    ],
    capabilities: [
      {
        title: "Application support",
        description:
          "Triage, diagnosis, and resolution against agreed priority levels, with root-cause analysis on major incidents.",
      },
      {
        title: "Proactive maintenance",
        description:
          "Dependency upgrades, security patching, certificate renewal, and capacity review on a published schedule.",
      },
      {
        title: "Monitoring and on-call",
        description:
          "Uptime, error-rate, and performance monitoring with escalation paths and optional extended-hours cover.",
      },
      {
        title: "Continuous improvement",
        description:
          "A managed enhancement backlog with a committed allocation of engineering capacity each month.",
      },
    ],
    deliverables: [
      "Service agreement with defined response targets",
      "Monitored ticket queue and escalation path",
      "Monthly service report and review meeting",
      "Maintained dependency and patch register",
      "Quarterly architecture and capacity review",
    ],
    engagement: {
      model: "Annual support agreement, tiered by cover level",
      duration: "12-month term, renewable",
      team: "Named support lead plus assigned engineers",
    },
    icon: "support",
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
