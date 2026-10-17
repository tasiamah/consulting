/**
 * Single source of truth for company facts used across the site.
 *
 * Fields typed as `string | undefined` are only rendered when set. Leave
 * registration identifiers unset rather than approximate — they are read by
 * banks and counterparties during onboarding. See CONTENT-CHECKLIST.md.
 */

export const company = {
  legalName: "A & H Consulting Group LLC",
  shortName: "A&H Consulting Group",
  initials: "A&H",
  tagline: "Enterprise software consulting",
  foundedYear: 2019,
  domain: "aandhconsultinggroup.com",
  url: "https://aandhconsultinggroup.com",

  email: "info@aandhconsultinggroup.com",
  salesEmail: "info@aandhconsultinggroup.com",
  careersEmail: "careers@aandhconsultinggroup.com",
  privacyEmail: "privacy@aandhconsultinggroup.com",

  /** Shown beside each office. Set to `undefined` to hide. */
  phone: undefined as string | undefined,

  /** Verified registration identifiers. Unset values are hidden sitewide. */
  registration: {
    uaeLicenseNumber: undefined as string | undefined,
    nlRegistrationNumber: undefined as string | undefined,
    vatNumber: undefined as string | undefined,
  },

  linkedin: undefined as string | undefined,

  summary:
    "A & H Consulting Group LLC is an enterprise software consultancy operating from Dubai and London. We design, build, and run the systems that regulated and high-growth businesses depend on.",
} as const;

export type Office = {
  id: string;
  region: string;
  city: string;
  country: string;
  /** Compact form for the header strip, e.g. "Dubai, UAE". */
  shortLabel: string;
  lines: string[];
  timezone: string;
  hours: string;
  role: string;
};

export const offices: Office[] = [
  {
    id: "uae",
    region: "Middle East",
    city: "Dubai",
    country: "United Arab Emirates",
    shortLabel: "Dubai, UAE",
    lines: [
      "Level 2, Unit 2",
      "IFZA Freezone",
      "P.O. Box 515000",
      "Dubai, United Arab Emirates",
    ],
    timezone: "GST (UTC+4)",
    hours: "Monday – Friday, 09:00 – 18:00",
    role: "Registered head office and regional delivery centre",
  },
  {
    id: "uk",
    region: "Europe",
    city: "London",
    country: "United Kingdom",
    shortLabel: "London, UK",
    lines: [
      "71–75 Shelton Street",
      "Covent Garden",
      "WC2H 9JQ",
      "London, United Kingdom",
    ],
    timezone: "GMT/BST (UTC+0/+1)",
    hours: "Monday – Friday, 09:00 – 18:00",
    role: "European client engagement and advisory office",
  },
];

export const stats = [
  {
    value: "40+",
    label: "Engagements delivered",
    detail: "Across six industries since 2019",
  },
  { value: "2", label: "Delivery regions", detail: "Dubai and London" },
  {
    value: "11",
    label: "Consultants and engineers",
    detail: "Permanent multidisciplinary team",
  },
  {
    value: "96%",
    label: "Client retention",
    detail: "Clients who extend beyond the first engagement",
  },
];

/**
 * Operating commitments. These describe how we work — deliberately phrased as
 * practices rather than third-party certifications.
 */
export const assurances = [
  {
    title: "Contractual and legal clarity",
    description:
      "Every engagement runs on a written master services agreement with a defined scope, acceptance criteria, and change-control process. Mutual NDAs are signed before discovery begins.",
  },
  {
    title: "Data protection by design",
    description:
      "We build to GDPR and UAE Federal Decree-Law No. 45 of 2021 requirements: data minimisation, documented lawful bases, encryption in transit and at rest, and defined retention periods.",
  },
  {
    title: "Secure engineering practice",
    description:
      "Peer-reviewed code, least-privilege access, dependency and secret scanning in CI, and segregated client environments. Credentials are never shared outside a managed secrets store.",
  },
  {
    title: "Continuity and handover",
    description:
      "Documentation, infrastructure-as-code, and runbooks are delivered alongside every system so clients retain full ownership and can operate independently.",
  },
];
