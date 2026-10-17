export type FaqGroup = {
  group: string;
  items: { question: string; answer: string }[];
};

export const faqGroups: FaqGroup[] = [
  {
    group: "Working with us",
    items: [
      {
        question: "What services does A & H Consulting Group offer?",
        answer:
          "Six practice areas: custom software development, IT consulting and technology advisory, system integration, cloud solutions, cybersecurity, and software maintenance and support. Most engagements combine two or three of these. A cloud migration, for example, almost always carries security and integration workstreams alongside it.",
      },
      {
        question: "How does an engagement start?",
        answer:
          "With a scoping conversation, at no cost and under mutual NDA if you prefer. If there is a fit, we propose a short paid discovery phase that produces a written findings report with options, costs, and trade-offs. You own that report regardless of whether you proceed to a build with us.",
      },
      {
        question: "What size of organisation do you work with?",
        answer:
          "Typically organisations between 50 and 2,000 staff: large enough to have genuine systems complexity, small enough that senior people are directly accountable for the outcome. We also take selected due diligence and advisory work for investors.",
      },
      {
        question: "Which industries do you serve?",
        answer:
          "Financial services, healthcare and life sciences, logistics and supply chain, retail and e-commerce, manufacturing, and professional services. The common thread is a regulatory or audit requirement that makes traceability a design constraint rather than a feature request.",
      },
      {
        question: "Can you work alongside our existing in-house team?",
        answer:
          "Yes, and this is how a substantial share of our work runs. We embed with your engineers, follow your conventions, and contribute to your repositories. Where the objective is to build internal capability, we structure the engagement so knowledge transfer is an explicit deliverable.",
      },
    ],
  },
  {
    group: "Commercial terms",
    items: [
      {
        question: "How do you price engagements?",
        answer:
          "Discovery and assessment phases are fixed fee. Build work is priced either as fixed-scope phases or as a dedicated team at a monthly rate, depending on how well defined the requirements are. Support runs as an annual agreement tiered by cover level. We do not charge for scoping conversations or proposals.",
      },
      {
        question: "Who owns the software you build?",
        answer:
          "You do, in full. Intellectual property in bespoke work transfers to the client on payment, and this is written into the master services agreement. We hand over source code, infrastructure definitions, and documentation at every milestone, not only at the end.",
      },
      {
        question: "What happens if the scope changes mid-engagement?",
        answer:
          "Scope changes go through a written change-control process: we estimate the impact on cost and schedule, you approve or decline it, and the baseline is updated. Nothing is billed outside an approved baseline.",
      },
      {
        question: "What are your payment terms?",
        answer:
          "Invoices are issued monthly in arrears on 30-day terms against delivered milestones. We invoice in AED, GBP, USD, or EUR. Purchase order and supplier onboarding requirements are accommodated.",
      },
    ],
  },
  {
    group: "Security and compliance",
    items: [
      {
        question: "How do you handle our data during an engagement?",
        answer:
          "Under a mutual NDA signed before discovery begins. We work in segregated client environments, apply least-privilege access, hold credentials only in a managed secrets store, and never copy production data onto local machines. Access is revoked and evidenced at engagement close.",
      },
      {
        question: "Are your solutions built to data protection requirements?",
        answer:
          "Yes. We design to UK and EU GDPR and to UAE Federal Decree-Law No. 45 of 2021: documented lawful bases, data minimisation, encryption in transit and at rest, defined retention periods, and the technical means to service data subject requests. Where you operate under sector-specific rules, those are captured as constraints during discovery.",
      },
      {
        question:
          "Can you complete our security questionnaire or vendor onboarding?",
        answer:
          "Yes. Our Head of Information Security is the named contact for due diligence, security questionnaires, and supplier onboarding. Contact us and we will respond with the documentation your procurement process requires.",
      },
      {
        question: "Do you carry professional indemnity insurance?",
        answer:
          "Yes. Certificates of insurance are provided on request as part of supplier onboarding, along with our certificate of incorporation and trade licence.",
      },
    ],
  },
  {
    group: "Delivery and support",
    items: [
      {
        question: "How do you keep us informed during delivery?",
        answer:
          "A written progress report every two weeks covering completed work, upcoming work, risks, and any decisions needed from you, plus a demonstration of working software at the end of each increment. You also have direct access to the delivery lead, not only to an account manager.",
      },
      {
        question: "What happens after a system goes live?",
        answer:
          "Every engagement ends with a transition phase: rehearsed cutover, documentation and runbook handover, and training for your team. From there you can operate the system yourself or move onto a support agreement with defined response targets and a monthly service review.",
      },
      {
        question: "Do you provide support outside business hours?",
        answer:
          "Extended-hours and on-call cover are available as part of a support agreement. The specific cover window and response targets are agreed in the service schedule rather than offered as a blanket promise.",
      },
      {
        question: "What if we are not satisfied with the work?",
        answer:
          "Each phase has written acceptance criteria agreed in advance, so satisfaction is assessed against a defined standard rather than an impression. Where work does not meet those criteria we remediate it at our cost, and the agreement sets out a defined escalation path to a partner.",
      },
    ],
  },
];

export const allFaqs = faqGroups.flatMap((g) => g.items);
