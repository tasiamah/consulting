"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts the numeric part of a stat up from zero when it scrolls into view.
 * Any surrounding characters ("40+", "96%", "< 2 min") are preserved, and the
 * value renders verbatim when there is no number or motion is reduced.
 */
export function CountUp({
  value,
  className = "",
}: {
  value: string;
  className?: string;
}) {
  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)([\s\S]*)$/);
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState<string | null>(null);

  const target = match ? Number(match[2]) : null;

  useEffect(() => {
    const node = ref.current;
    if (node === null || target === null) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const decimals = (match?.[2].split(".")[1] ?? "").length;
    let frame = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const duration = 1100;

        const step = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          // Ease out so the number settles rather than stopping abruptly.
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay((target * eased).toFixed(decimals));
          if (progress < 1) frame = requestAnimationFrame(step);
          else setDisplay(null);
        };

        frame = requestAnimationFrame(step);
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target, match]);

  if (!match || target === null) {
    return <span className={className}>{value}</span>;
  }

  const [, prefix, , suffix] = match;

  return (
    <span ref={ref} className={className}>
      {prefix}
      <span className="tabular-nums">{display ?? match[2]}</span>
      {suffix}
    </span>
  );
}
