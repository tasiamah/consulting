import Link from "next/link";
import { ArrowRight, Check, MailIcon } from "./icons";
import { Eyebrow } from "./ui";
import { company } from "@/content/company";

const assurancePoints = [
  "Initial consultation at no cost",
  "Mutual NDA signed before discovery",
  "Written findings you own outright",
];

export function CtaSection({
  eyebrow = "Next step",
  title = "Let's establish whether we are the right firm for the problem.",
  intro = "Tell us what you are trying to achieve and we will tell you plainly whether we can help, what it would take, and roughly what it would cost. If the answer is that you do not need us, we will say so.",
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div className="bg-grid absolute inset-0" />
      <div className="absolute -top-24 left-1/4 h-[30rem] w-[30rem] rounded-full bg-accent-500/15 blur-[140px]" />

      <div className="container-page relative py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-24">
          <div>
            <Eyebrow tone="light">{eyebrow}</Eyebrow>
            <h2 className="mt-6 max-w-2xl text-[2rem] leading-[1.14] text-white sm:text-[2.5rem] lg:text-[2.75rem]">
              {title}
            </h2>
            <p className="mt-7 max-w-xl text-[1.0625rem] leading-[1.75] text-white/60">
              {intro}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 bg-white px-7 py-4 text-[0.8125rem] font-semibold tracking-[0.06em] text-navy-900 uppercase transition-colors hover:bg-accent-50"
              >
                Book a consultation
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center gap-2.5 border border-white/20 px-7 py-4 text-[0.8125rem] font-semibold tracking-[0.06em] text-white uppercase transition-colors hover:border-white/50 hover:bg-white/5"
              >
                <MailIcon className="h-4 w-4" />
                Email us
              </a>
            </div>
          </div>

          <div className="lg:border-l lg:border-white/10 lg:pl-14">
            <h3 className="font-sans text-[0.6875rem] font-semibold tracking-[0.18em] text-white/50 uppercase">
              What to expect
            </h3>
            <ul className="mt-6 space-y-4">
              {assurancePoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3.5 text-[0.9375rem] text-white/80"
                >
                  <Check className="mt-1 h-4 w-4 shrink-0 text-accent-300" />
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-8 border-t border-white/10 pt-6 text-[0.8125rem] leading-relaxed text-white/55">
              Enquiries are answered by a consultant, not a call centre. We
              typically respond within one business day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
