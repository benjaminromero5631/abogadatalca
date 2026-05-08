"use client";

import { useState } from "react";
import { FAQ as faqData } from "@/lib/constants";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white py-20 md:py-28 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <p className="text-terracotta text-xs uppercase tracking-widest font-medium mb-4">Preguntas frecuentes</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-ink mb-14">
            Dudas comunes.
          </h2>
        </AnimatedSection>

        <div className="divide-y divide-border">
          {faqData.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.04}>
              <div>
                <button
                  className="w-full flex items-center justify-between py-5 text-left group"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span className="font-display text-lg font-medium text-ink group-hover:text-terracotta transition-colors pr-8">
                    {item.q}
                  </span>
                  <span className="text-ink-faint text-lg shrink-0 select-none">
                    {open === i ? "−" : "+"}
                  </span>
                </button>

                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: open === i ? "200px" : "0px" }}
                >
                  <p className="text-ink-faint text-sm leading-relaxed pb-6 pr-12">
                    {item.a}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
