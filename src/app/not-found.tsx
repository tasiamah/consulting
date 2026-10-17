import Link from "next/link";
import { Button, Eyebrow } from "@/components/ui";
import { services } from "@/content/services";
import { company } from "@/content/company";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div className="bg-grid absolute inset-0" />
      <div className="absolute -top-32 right-0 h-[32rem] w-[32rem] rounded-full bg-accent-600/18 blur-[140px]" />

      <div className="container-page relative py-28 lg:py-36">
        <div className="max-w-2xl">
          <Eyebrow tone="light">Error 404</Eyebrow>
          <h1 className="mt-6 text-[2.5rem] leading-[1.08] text-white lg:text-[3.25rem]">
            This page could not be found.
          </h1>
          <p className="mt-7 text-[1.0625rem] leading-[1.8] text-white/60">
            The address may have changed, or the link that brought you here may be out of date. The
            pages below cover most of what people are looking for.
          </p>

          <div className="mt-11 flex flex-wrap gap-4">
            <Button href="/" variant="onDark" withArrow>
              Return home
            </Button>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 border border-white/20 px-6 py-3.5 text-[0.8125rem] font-semibold tracking-[0.04em] text-white uppercase transition-colors hover:border-white/50 hover:bg-white/5"
            >
              Contact us
            </Link>
          </div>

          <div className="mt-16 border-t border-white/10 pt-10">
            <h2 className="font-sans text-[0.6875rem] font-semibold tracking-[0.18em] text-white/50 uppercase">
              Our services
            </h2>
            <ul className="mt-6 grid gap-x-10 gap-y-3 sm:grid-cols-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-[0.9375rem] text-white/70 transition-colors hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-10 text-[0.875rem] text-white/45">
              Still stuck? Email{" "}
              <a
                href={`mailto:${company.email}`}
                className="text-white/80 underline underline-offset-4 hover:text-white"
              >
                {company.email}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
