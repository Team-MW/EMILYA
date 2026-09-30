"use client";

import { useState } from "react";
import { Lotus } from "./Logo";
import type { FaqItem } from "@/lib/faq";

export function FaqSection({ items }: { items: readonly FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section className="relative overflow-hidden border-t border-gold/20 bg-cream/70">
      <div className="pointer-events-none absolute inset-x-0 top-0 hairline" />
      <div className="ornament-bg absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-3xl px-6 py-20 sm:py-28">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="flex flex-col items-center text-center">
          <p className="text-[10px] uppercase tracking-[0.42em] text-gold">À savoir</p>
          <h2 className="mt-3 font-display text-4xl font-light text-ink sm:text-5xl">
            Questions fréquentes
          </h2>
          <div className="mt-5 flex items-center gap-3">
            <span className="h-px w-10 bg-gold/70" />
            <Lotus className="h-5 w-5 text-gold" />
            <span className="h-px w-10 bg-gold/70" />
          </div>
        </div>

        <ul className="mt-12 divide-y divide-gold/20 border-y border-gold/25 bg-ivory/80 shadow-[0_20px_60px_-40px_rgba(42,34,28,0.45)]">
          {items.map((item, i) => {
            const isOpen = open === i;
            const n = String(i + 1).padStart(2, "0");
            const id = `faq-${i}`;
            return (
              <li key={item.q} className={isOpen ? "bg-cream/80" : ""}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={id}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-start gap-5 px-5 py-5 text-left transition-colors hover:bg-cream/40 sm:px-8 sm:py-6"
                >
                  <span className="mt-1 font-cinzel text-[11px] tracking-[0.18em] text-gold">
                    {n}
                  </span>
                  <span className="flex-1 font-display text-xl leading-snug text-ink sm:text-2xl">
                    {item.q}
                  </span>
                  <span
                    className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold transition-transform duration-300 ${
                      isOpen ? "rotate-45 bg-gold/10" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none">
                      <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.2" />
                    </svg>
                  </span>
                </button>
                <div
                  id={id}
                  className={`grid transition-[grid-template-rows] duration-[400ms] ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-6 pl-[3.75rem] text-sm leading-7 text-taupe sm:px-8 sm:pl-[4.75rem] sm:pb-7">
                      {item.a}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
