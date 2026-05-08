import AnimatedSection from "@/components/shared/AnimatedSection";

const reasons = [
  {
    num: "01",
    title: "Resultados medibles",
    desc: "Antes de comenzar te informamos tus probabilidades reales, los plazos y los costos. Sin promesas vacías.",
  },
  {
    num: "02",
    title: "Respuesta el mismo día",
    desc: "Respondemos consultas en horario hábil. Para urgencias como violencia intrafamiliar, actuamos de inmediato.",
  },
  {
    num: "03",
    title: "Presupuesto sin letra chica",
    desc: "Cada caso recibe un presupuesto claro antes de comenzar. Sabes exactamente qué pagas y por qué.",
  },
  {
    num: "04",
    title: "10 años en la región",
    desc: "Conocemos los tribunales, los plazos y las particularidades del sistema judicial en el Maule.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-white py-20 md:py-28 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-terracotta text-xs uppercase tracking-widest font-medium mb-4">Por qué elegirnos</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-ink mb-14">
            Directo. Confiable. Experto.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {reasons.map((r, i) => (
            <AnimatedSection key={r.num} delay={i * 0.08}>
              <div className="flex gap-6">
                <span className="font-display text-5xl font-medium text-terracotta/25 leading-none mt-1 select-none">
                  {r.num}
                </span>
                <div>
                  <h3 className="font-display text-xl font-medium text-ink mb-2">{r.title}</h3>
                  <p className="text-ink-faint text-sm leading-relaxed">{r.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
