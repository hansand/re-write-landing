"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";

export function AccordionItem({
  question,
  answer,
  defaultOpen = false,
}: {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <div className="border-b border-hairline">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-6 py-6 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-500"
        >
          <span className="text-base font-medium text-ink sm:text-lg">{question}</span>
          <Plus
            aria-hidden="true"
            className={`size-5 shrink-0 text-muted transition-transform duration-300 ease-out ${
              open ? "rotate-45 text-brand-500" : ""
            }`}
          />
        </button>
      </h3>
      <div
        id={panelId}
        className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="min-h-0">
          <p className="max-w-[65ch] pb-6 text-muted">{answer}</p>
        </div>
      </div>
    </div>
  );
}
