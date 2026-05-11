import Link from "next/link";
import { AREAS, BUSINESS } from "@/lib/constants";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function AreasGrid() {
  const waUrl = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(BUSINESS.waMessage)}`;

  return (
    <section id="areas" className="bg-stone py-14 md:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-terracotta text-xs uppercase tracking-widest font-medium mb-4">Áreas de práctica</p>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-ink mb-3">
            Resolvemos tu caso.
          </h2>
          <p className="text-ink-faint text-sm max-w-md mb-8 md:mb-14">
            Si no ves tu situación reflejada, escríbenos — siempre encontramos la vía legal correcta.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {AREAS.map((area, i) => {
            const isDestacada = area.slug === "derecho-familia";
            return (
              <AnimatedSection key={area.slug} delay={i * 0.07}>
                <Link
                  href={`/areas/${area.slug}`}
                  className={`group p-8 flex flex-col h-full min-h-[220px] transition-colors ${
                    isDestacada
                      ? "bg-burdeo hover:bg-terracotta-dark text-white"
                      : "bg-stone hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <p className={`text-xs font-medium ${isDestacada ? "text-white/50" : "text-ink-faint"}`}>
                      0{i + 1}
                    </p>
                    {isDestacada && (
                      <span className="text-[10px] uppercase tracking-widest font-medium bg-white/20 text-white px-2 py-0.5 rounded-full">
                        Destacado
                      </span>
                    )}
                  </div>
                  <h3 className={`font-display text-2xl font-medium mb-3 transition-colors ${
                    isDestacada
                      ? "text-white"
                      : "text-ink group-hover:text-terracotta"
                  }`}>
                    {area.title}
                  </h3>
                  <p className={`text-sm leading-relaxed flex-1 ${isDestacada ? "text-white/75" : "text-ink-faint"}`}>
                    {area.short}
                  </p>
                  <span className={`inline-block mt-6 text-xs border-b pb-0.5 transition-all ${
                    isDestacada
                      ? "text-white/80 border-white/30 group-hover:border-white"
                      : "text-terracotta border-terracotta/0 group-hover:border-terracotta"
                  }`}>
                    Ver mas
                  </span>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="mt-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink-faint hover:text-ink transition-colors"
            >
              No encuentras tu caso? Escríbenos por WhatsApp
            </a>
            <div className="h-px flex-1 bg-border" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
