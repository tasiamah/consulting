"use client";

import { useState } from "react";
import { Plus } from "./icons";

export function Accordion({
  items,
  idPrefix,
}: {
  items: { question: string; answer: string }[];
  idPrefix: string;
}) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="border-t border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${idPrefix}-panel-${i}`;
        const buttonId = `${idPrefix}-button-${i}`;

        return (
          <div key={item.question} className="border-b border-line">
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-start justify-between gap-6 py-6 text-left transition-colors hover:text-accent-600"
              >
                <span className="font-serif text-[1.125rem] leading-snug text-ink group-hover:text-accent-600 lg:text-[1.25rem]">
                  {item.question}
                </span>
                <Plus
                  className={`mt-0.5 h-5 w-5 shrink-0 text-accent-500 transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pr-10 pb-7"
            >
              <p className="max-w-3xl text-[0.9375rem] leading-[1.8] text-slate-ink">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
