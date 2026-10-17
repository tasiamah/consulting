import Link from "next/link";
import { Logo } from "./logo";
import { ArrowRight, ClockIcon, MailIcon, PinIcon } from "./icons";
import { company, offices } from "@/content/company";
import { footerNav } from "@/content/navigation";

// Resolved once at module load so the component stays statically renderable.
const currentYear = new Date().getFullYear();

export function SiteFooter() {
  const { registration } = company;
  const registrationFacts = [
    registration.uaeLicenseNumber && {
      label: "UAE trade licence no.",
      value: registration.uaeLicenseNumber,
    },
    registration.nlRegistrationNumber && {
      label: "KvK no.",
      value: registration.nlRegistrationNumber,
    },
    registration.vatNumber && {
      label: "VAT no.",
      value: registration.vatNumber,
    },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <footer className="bg-navy-950 text-white/60">
      <div className="container-page">
        {/* Primary */}
        <div className="grid gap-14 border-b border-white/10 py-16 lg:grid-cols-[1.15fr_2fr] lg:gap-20 lg:py-20">
          <div>
            <Logo variant="light" />
            <p className="mt-7 max-w-sm text-[0.9375rem] leading-[1.75]">
              {company.summary}
            </p>

            <div className="mt-8 space-y-3 text-[0.875rem]">
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center gap-2.5 transition-colors hover:text-white"
              >
                <MailIcon className="h-4 w-4 text-accent-300" />
                {company.email}
              </a>
              {company.phone && (
                <div>
                  <a
                    href={`tel:${company.phone.replace(/\s/g, "")}`}
                    className="transition-colors hover:text-white"
                  >
                    {company.phone}
                  </a>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="group mt-9 inline-flex items-center gap-2.5 border border-white/20 px-5 py-3.5 text-[0.75rem] font-semibold tracking-[0.08em] text-white uppercase transition-colors hover:border-white/50 hover:bg-white/5"
            >
              Start a conversation
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {footerNav.map((col) => (
              <nav key={col.heading} aria-label={col.heading}>
                <h3 className="font-sans text-[0.6875rem] font-semibold tracking-[0.18em] text-white uppercase">
                  {col.heading}
                </h3>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[0.875rem] transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Offices */}
        <div className="grid gap-10 border-b border-white/10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {offices.map((office) => (
            <div key={office.id}>
              <div className="flex items-center gap-2.5">
                <PinIcon className="h-4 w-4 text-accent-300" />
                <h3 className="font-sans text-[0.6875rem] font-semibold tracking-[0.18em] text-white uppercase">
                  {office.city}, {office.country}
                </h3>
              </div>
              <address className="mt-4 text-[0.875rem] leading-[1.7] not-italic">
                {office.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <div className="mt-4 flex items-start gap-2.5 text-[0.8125rem] text-white/45">
                <ClockIcon className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                <span>
                  {office.hours}
                  <span className="block">{office.timezone}</span>
                </span>
              </div>
            </div>
          ))}

          <div className="lg:col-span-2">
            <h3 className="font-sans text-[0.6875rem] font-semibold tracking-[0.18em] text-white uppercase">
              Corporate information
            </h3>
            <dl className="mt-4 space-y-2.5 text-[0.875rem]">
              <div className="flex gap-2">
                <dt className="text-white/40">Legal name</dt>
                <dd className="text-white/75">{company.legalName}</dd>
              </div>
              {registrationFacts.map((fact) => (
                <div key={fact.label} className="flex gap-2">
                  <dt className="text-white/40">{fact.label}</dt>
                  <dd className="text-white/75">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 max-w-md text-[0.8125rem] leading-relaxed text-white/40">
              Certificate of incorporation, trade licence, and proof of
              insurance are available to clients and counterparties on request
              as part of supplier onboarding.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-5 py-8 text-[0.8125rem] text-white/40 md:flex-row md:items-center md:justify-between">
          <p>
            © {currentYear} {company.legalName}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-7 gap-y-2">
            <li>
              <Link
                href="/legal/privacy"
                className="transition-colors hover:text-white"
              >
                Privacy policy
              </Link>
            </li>
            <li>
              <Link
                href="/legal/terms"
                className="transition-colors hover:text-white"
              >
                Terms of service
              </Link>
            </li>
            <li>
              <Link
                href="/legal/cookies"
                className="transition-colors hover:text-white"
              >
                Cookie policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
