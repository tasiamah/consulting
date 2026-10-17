export const phases = [
  {
    number: "01",
    name: "Discovery",
    duration: "2 to 4 weeks",
    summary:
      "We establish the facts before proposing anything. That means interviewing the people who use the systems, reading the code, and reviewing the contracts, not accepting a brief at face value.",
    activities: [
      "Stakeholder interviews across business and technical functions",
      "Architecture, codebase, and vendor contract review",
      "Constraint mapping: regulatory, budgetary, and operational",
      "Written findings report with options, costs, and tradeoffs",
    ],
  },
  {
    number: "02",
    name: "Design",
    duration: "2 to 5 weeks",
    summary:
      "A solution design reviewed and signed off internally before any build begins. Every design passes through our architecture review so the firm, not just the assigned architect, stands behind it.",
    activities: [
      "Solution and data architecture with documented decisions",
      "Security and data protection design review",
      "Delivery plan with milestones and acceptance criteria",
      "Internal architecture review signoff",
    ],
  },
  {
    number: "03",
    name: "Build",
    duration: "Two week increments",
    summary:
      "Work ships in two week increments, each ending in a demonstration of working software against agreed acceptance criteria. Nothing is reported as complete until the client has seen it run.",
    activities: [
      "Peer reviewed development with automated test coverage",
      "Continuous integration with security and dependency scanning",
      "Fortnightly demonstration and written progress report",
      "Formal change control on any scope variation",
    ],
  },
  {
    number: "04",
    name: "Transition",
    duration: "2 to 4 weeks",
    summary:
      "Handover is a deliverable, not a courtesy. Clients leave an engagement able to operate, extend, and audit the system without us, whether or not they retain us for support.",
    activities: [
      "Rehearsed cutover with a documented rollback procedure",
      "Documentation, runbooks, and infrastructure as code handover",
      "Training for client engineering and operations staff",
      "Full transfer of source code and intellectual property",
    ],
  },
  {
    number: "05",
    name: "Support",
    duration: "Ongoing, by agreement",
    summary:
      "Where clients choose continued support, a named team stays with the system under contractual response targets and a monthly service review.",
    activities: [
      "Monitored ticket queue with defined priority levels",
      "Scheduled patching, dependency upgrades, and capacity review",
      "Monthly service report covering incidents and improvements",
      "Quarterly architecture and cost review",
    ],
  },
];

export const principles = [
  {
    title: "Independence from vendors",
    description:
      "We hold no reseller agreements and take no commission on software you buy. Our recommendation is the one we believe is right, and we will tell you when the answer is to change nothing.",
  },
  {
    title: "Written over verbal",
    description:
      "Scope, acceptance criteria, decisions, and risks are documented. If it was agreed in a meeting, it is confirmed in writing afterwards, which is what makes an engagement auditable.",
  },
  {
    title: "Senior people on the work",
    description:
      "The consultant who scoped your engagement stays on it. We do not win work with principals and staff it with juniors, and our team numbers are deliberately kept small enough to make that true.",
  },
  {
    title: "Nothing locked in",
    description:
      "We build on mainstream, well supported technology and hand over everything needed to run it. Retaining us should be a commercial choice, never a technical necessity.",
  },
];
