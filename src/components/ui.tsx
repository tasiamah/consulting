import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight } from "./icons";

/* -------------------------------------------------------------------------- */
/* Button                                                                     */
/* -------------------------------------------------------------------------- */

type ButtonVariant = "primary" | "secondary" | "ghost" | "onDark";

const buttonStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-navy-900 text-white hover:bg-accent-600 border border-transparent shadow-[0_1px_2px_rgba(7,22,39,0.12)]",
  secondary:
    "bg-white text-ink border border-line hover:border-navy-900/40 hover:bg-paper",
  ghost: "bg-transparent text-ink border border-transparent hover:bg-paper",
  onDark: "bg-white text-navy-900 border border-transparent hover:bg-accent-50",
};

export function Button({
  href,
  variant = "primary",
  withArrow = false,
  className = "",
  children,
  ...rest
}: {
  href?: string;
  variant?: ButtonVariant;
  withArrow?: boolean;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<"button">, "ref">) {
  const classes = `group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[0.8125rem] font-semibold tracking-[0.04em] uppercase transition-colors duration-200 ${buttonStyles[variant]} ${className}`;

  const inner = (
    <>
      {children}
      {withArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {inner}
    </button>
  );
}

/* -------------------------------------------------------------------------- */
/* Typography helpers                                                         */
/* -------------------------------------------------------------------------- */

export function Eyebrow({
  children,
  tone = "dark",
  className = "",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <span
      className={`eyebrow ${tone === "light" ? "text-accent-200" : "text-accent-600"} ${className}`}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "dark",
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}
    >
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2
        className={`mt-5 text-[2rem] leading-[1.12] sm:text-[2.5rem] lg:text-[2.875rem] ${
          tone === "light" ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-6 text-[1.0625rem] leading-[1.75] ${
            tone === "light" ? "text-white/65" : "text-slate-ink"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Link with underline on hover arrow treatment                               */
/* -------------------------------------------------------------------------- */

export function TextLink({
  href,
  children,
  tone = "dark",
  className = "",
}: {
  href: string;
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 text-[0.8125rem] font-semibold tracking-[0.06em] uppercase transition-colors ${
        tone === "light"
          ? "text-white hover:text-accent-200"
          : "text-navy-900 hover:text-accent-600"
      } ${className}`}
    >
      <span className="border-b border-current/30 pb-0.5 transition-colors group-hover:border-current">
        {children}
      </span>
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}
