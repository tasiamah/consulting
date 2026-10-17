export type Industry = {
  slug: string;
  name: string;
  summary: string;
  challenges: string[];
  relevantServices: string[];
};

export const industries: Industry[] = [
  {
    slug: "financial-services",
    name: "Financial Services",
    summary:
      "Banks, payment providers, and investment firms operating under supervisory scrutiny, where auditability is a design requirement rather than an afterthought.",
    challenges: [
      "Demonstrating data residency and retention to regulators",
      "Core system modernisation without service interruption",
      "Reconciliation and audit trails across fragmented ledgers",
      "Access control and segregation of duties",
    ],
    relevantServices: ["cybersecurity", "system-integration", "it-consulting"],
  },
  {
    slug: "healthcare",
    name: "Healthcare & Life Sciences",
    summary:
      "Providers and health technology companies handling patient data, where confidentiality obligations and clinical continuity set the engineering constraints.",
    challenges: [
      "Protecting patient data across clinical and administrative systems",
      "Interoperability between records, scheduling, and billing platforms",
      "Availability requirements that tolerate no planned downtime",
      "Evidence of control for accreditation and insurer review",
    ],
    relevantServices: ["system-integration", "cybersecurity", "managed-support"],
  },
  {
    slug: "logistics",
    name: "Logistics & Supply Chain",
    summary:
      "Freight, warehousing, and distribution businesses that need real-time visibility across partners, carriers, and customs processes.",
    challenges: [
      "Consolidating shipment data across carrier and partner systems",
      "Replacing manual documentation and customs workflows",
      "Peak-season capacity without permanent over-provisioning",
      "Reliable exception handling when upstream systems fail",
    ],
    relevantServices: ["system-integration", "custom-software-development", "cloud-solutions"],
  },
  {
    slug: "retail-ecommerce",
    name: "Retail & E-commerce",
    summary:
      "Multi-channel retailers reconciling inventory, orders, and customer data across storefronts, marketplaces, and physical locations.",
    challenges: [
      "A single accurate view of inventory across channels",
      "Order orchestration between storefront, warehouse, and finance",
      "Handling demand spikes without degrading checkout",
      "Payment and customer data handled to PCI expectations",
    ],
    relevantServices: ["custom-software-development", "cloud-solutions", "system-integration"],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing & Industrial",
    summary:
      "Producers connecting plant-floor systems to enterprise planning, with traceability requirements that run from raw material to despatch.",
    challenges: [
      "Bridging operational technology and enterprise IT safely",
      "Production and quality traceability for compliance",
      "Planning accuracy across multi-site operations",
      "Securing environments that cannot be taken offline",
    ],
    relevantServices: ["system-integration", "it-consulting", "cybersecurity"],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    summary:
      "Legal, accounting, and advisory firms where billable utilisation, client confidentiality, and matter-level reporting drive the technology agenda.",
    challenges: [
      "Confidentiality and information barriers between matters",
      "Time, billing, and engagement profitability reporting",
      "Document management with defensible retention",
      "Client portals that meet enterprise security review",
    ],
    relevantServices: ["custom-software-development", "cybersecurity", "managed-support"],
  },
];
