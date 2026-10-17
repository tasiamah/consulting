import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { company, offices } from "@/content/company";
import { services } from "@/content/services";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: `${company.shortName} | Enterprise Software Consulting in the UAE and Europe`,
    template: `%s | ${company.shortName}`,
  },
  description:
    "A & H Consulting Group LLC is an enterprise software consultancy in Dubai and Amsterdam, delivering custom software, system integration, cloud, and cybersecurity for regulated and high growth businesses.",
  keywords: [
    "software consulting UAE",
    "IT consulting Dubai",
    "custom software development Dubai",
    "system integration consultancy",
    "cloud migration consultants",
    "cybersecurity consulting UAE",
    "enterprise software Amsterdam",
  ],
  authors: [{ name: company.legalName }],
  creator: company.legalName,
  publisher: company.legalName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: company.legalName,
    url: company.url,
    title: `${company.shortName} | Enterprise Software Consulting`,
    description:
      "Enterprise software consulting from Dubai and Amsterdam. Custom development, integration, cloud, and security for regulated businesses.",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.shortName} | Enterprise Software Consulting`,
    description:
      "Enterprise software consulting from Dubai and Amsterdam. Custom development, integration, cloud, and security for regulated businesses.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "technology",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${company.url}/#organization`,
  name: company.legalName,
  alternateName: company.shortName,
  url: company.url,
  email: company.email,
  description: company.summary,
  areaServed: ["AE", "NL", "EU", "GCC"],
  knowsAbout: services.map((s) => s.title),
  address: offices.map((office) => ({
    "@type": "PostalAddress",
    streetAddress: office.streetAddress,
    addressLocality: office.city,
    addressCountry: office.countryCode,
    postalCode: office.postalCode,
  })),
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: company.email,
    availableLanguage: ["English", "Arabic"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sourceSerif.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-navy-900 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </body>
    </html>
  );
}
