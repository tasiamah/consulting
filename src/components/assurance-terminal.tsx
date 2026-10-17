"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "./icons";

/**
 * Animated panel in the hero that reveals the checks we run before a client
 * system is signed off. Reinforces the governance message that the rest of the
 * page makes in prose.
 */

const CHECKS = [
  { label: "data residency", value: "me-central-1" },
  { label: "encryption at rest", value: "AES-256" },
  { label: "access recertification", value: "quarterly" },
  { label: "restore test", value: "passed" },
  { label: "dependency scan", value: "0 critical" },
];

const LINE_INTERVAL = 520;
const HOLD_AFTER_COMPLETE = 3600;

export function AssuranceTerminal() {
  // Starts complete so the panel reads correctly before hydration, with no
  // script, and under reduced motion. The loop rewinds it to zero to animate.
  const [visible, setVisible] = useState(CHECKS.length);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const schedule = (next: number) => {
      timer.current = setTimeout(
        () => {
          setVisible(next);
          schedule(next >= CHECKS.length ? 0 : next + 1);
        },
        next === 0 ? HOLD_AFTER_COMPLETE : LINE_INTERVAL,
      );
    };

    schedule(0);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const running = visible < CHECKS.length;

  return (
    <div className="border border-white/12 bg-navy-950/70 backdrop-blur-sm">
      {/* Title bar */}
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            {running && (
              <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-accent-300" />
            )}
            <span
              className={`relative inline-flex h-2 w-2 rounded-full ${
                running ? "bg-accent-300" : "bg-emerald-400"
              }`}
            />
          </span>
          <span className="font-mono text-[0.6875rem] tracking-[0.14em] text-white/55 uppercase">
            Pre-release assurance
          </span>
        </div>
        <span className="font-mono text-[0.6875rem] text-white/30">
          {String(Math.min(visible, CHECKS.length)).padStart(2, "0")}/
          {String(CHECKS.length).padStart(2, "0")}
        </span>
      </div>

      {/* Check list */}
      <ul className="px-5 py-3">
        {CHECKS.map((check, i) => {
          const shown = i < visible;
          return (
            <li
              key={check.label}
              className={`flex items-center justify-between gap-4 py-[0.375rem] font-mono text-[0.75rem] transition-all duration-500 ${
                shown ? "translate-y-0 opacity-100" : "translate-y-1 opacity-25"
              }`}
            >
              <span className="flex min-w-0 items-center gap-2.5">
                <Check
                  className={`h-3.5 w-3.5 shrink-0 transition-colors duration-500 ${
                    shown ? "text-emerald-400" : "text-white/20"
                  }`}
                />
                <span className="truncate text-white/70">{check.label}</span>
              </span>
              <span className={shown ? "text-accent-200" : "text-white/15"}>
                {check.value}
              </span>
            </li>
          );
        })}
      </ul>

      {/* Prompt */}
      <div className="flex items-center gap-2 border-t border-white/10 px-5 py-3 font-mono text-[0.75rem]">
        <span className="text-accent-300">$</span>
        <span className="text-white/45">
          {running ? "running checks" : "all checks passed. ready for handover"}
        </span>
        <span className="animate-caret ml-0.5 inline-block h-3.5 w-[0.4rem] bg-accent-300/80" />
      </div>
    </div>
  );
}
