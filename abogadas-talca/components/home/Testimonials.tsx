import { TESTIMONIALS } from "@/lib/constants";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function Testimonials() {
  return (
    <section className="bg-stone py-20 md:py-28 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-terracotta text-xs uppercase tracking-widest font-medium mb-4">Testimonios</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-ink mb-14">
            Casos reales. Resultados concretos.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {TESTIMONIALS.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="bg-stone p-8 h-full flex flex-col">
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, j) => (
                    <span key={j} className="text-terracotta text-xs">★</span>
                  ))}
                </div>
                <p className="text-ink-muted text-sm leading-relaxed flex-1 font-display text-lg font-medium italic">
                  "{t.quote}"
                </p>
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-ink text-sm font-medium">{t.name}</p>
                  <p className="text-ink-faint text-xs mt-0.5">{t.case}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
