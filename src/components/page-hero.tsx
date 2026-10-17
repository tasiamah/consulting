import Link from "next/link";
import type { ReactNode } from "react";
import { Eyebrow } from "./ui";

/** Standard dark masthead used at the top of every interior page. */
export function PageHero({
  eyebrow,
  title,
  intro,
  breadcrumb,
  aside,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  breadcrumb?: { label: string; href: string }[];
  aside?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div className="bg-grid absolute inset-0" />
      <div className="absolute top-0 -right-40 h-[28rem] w-[28rem] rounded-full bg-accent-600/18 blur-[130px]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />

      <div className="container-page relative py-16 lg:py-24">
        {breadcrumb && (
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-[0.75rem] text-white/45">
              {breadcrumb.map((crumb, i) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  {i > 0 && <span className="text-white/20">/</span>}
                  <Link href={crumb.href} className="transition-colors hover:text-white">
                    {crumb.label}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div
          className={
            aside ? "grid items-end gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-20" : undefined
          }
        >
          <div className={aside ? undefined : "max-w-4xl"}>
            <Eyebrow tone="light">{eyebrow}</Eyebrow>
            <h1 className="mt-6 text-[2.25rem] leading-[1.08] text-white sm:text-[3rem] lg:text-[3.5rem]">
              {title}
            </h1>
            {intro && (
              <p className="mt-7 max-w-2xl text-[1.0625rem] leading-[1.75] text-white/65 lg:text-[1.125rem]">
                {intro}
              </p>
            )}
          </div>
          {aside && <div>{aside}</div>}
        </div>
      </div>
    </section>
  );
}
