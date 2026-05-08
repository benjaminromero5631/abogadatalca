import { BUSINESS } from "@/lib/constants";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function ContactSection() {
  const waUrl = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(BUSINESS.waMessage)}`;

  return (
    <section id="contacto" className="bg-stone py-20 md:py-28 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-terracotta text-xs uppercase tracking-widest font-medium mb-4">Contacto</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-ink mb-14">
            Cuéntanos tu caso.
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-16">
          <AnimatedSection>
            <div className="flex flex-col items-center justify-center h-full gap-6 py-8">
              <p className="text-ink-muted text-center text-sm max-w-xs">
                Escribenos por WhatsApp y te respondemos el mismo dia. La primera consulta es gratuita.
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-10 py-7 transition-colors w-full max-w-xs"
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="font-display text-xl font-medium">Escribir por WhatsApp</span>
                <span className="text-white/80 text-xs">{BUSINESS.phone}</span>
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.12}>
            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { label: "Teléfono", value: BUSINESS.phone },
                  { label: "Email", value: BUSINESS.email },
                  { label: "Dirección", value: BUSINESS.address },
                  { label: "Horario", value: BUSINESS.hours },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-xs text-ink-faint uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-ink text-sm">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="overflow-hidden rounded-2xl border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.0!2d-71.6694!3d-35.4264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9669714a6d3ef16b%3A0x9c1b0c3b6c1e2f1a!2sCalle%201%20Pte%201258%2C%20Talca%2C%20Maule!5e0!3m2!1ses!2scl!4v1"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicacion Abogadas Talca"
                />
              </div>
              <a
                href="https://maps.google.com/?q=Calle+1+Pte+1258,+Talca,+Maule"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-terracotta text-terracotta hover:bg-burdeo hover:text-white hover:border-burdeo transition-colors px-5 py-2.5 rounded-lg text-sm font-medium"
              >
                📍 Como llegar — Abrir en Google Maps
              </a>

              <div className="border-l-2 border-terracotta pl-4">
                <p className="text-ink text-sm font-medium mb-1">Urgencias</p>
                <p className="text-ink-faint text-sm">
                  Para casos de violencia intrafamiliar, escríbenos directamente por WhatsApp. Actuamos de inmediato.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
