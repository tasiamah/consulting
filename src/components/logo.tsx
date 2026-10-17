import Link from "next/link";

/** The square takes `currentColor`; `glyph` must contrast against it. */
export function LogoMark({
  className = "",
  glyph = "#ffffff",
}: {
  className?: string;
  glyph?: string;
}) {
  return (
    <svg viewBox="0 0 36 36" aria-hidden="true" className={className}>
      <rect width="36" height="36" rx="3" fill="currentColor" />
      <path
        d="M9.5 26.5 18 9.5l8.5 17"
        fill="none"
        stroke={glyph}
        strokeWidth="2.2"
        strokeLinecap="square"
      />
      <path
        d="M13.9 20.1h8.2"
        fill="none"
        stroke={glyph}
        strokeWidth="2.2"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const isLight = variant === "light";

  return (
    <Link
      href="/"
      aria-label="A & H Consulting Group home"
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <LogoMark
        glyph={isLight ? "#061322" : "#ffffff"}
        className={`h-9 w-9 shrink-0 transition-colors ${
          isLight
            ? "text-white/95 group-hover:text-white"
            : "text-navy-900 group-hover:text-accent-600"
        }`}
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-serif text-[1.3rem] leading-none font-semibold tracking-[-0.02em] ${
            isLight ? "text-white" : "text-ink"
          }`}
        >
          A&amp;H
        </span>
        <span
          className={`mt-[3px] text-[0.5625rem] leading-none font-semibold tracking-[0.2em] uppercase ${
            isLight ? "text-white/60" : "text-slate-ink/70"
          }`}
        >
          Consulting Group
        </span>
      </span>
    </Link>
  );
}
