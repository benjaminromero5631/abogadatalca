"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Users2, Star, Shield, MessageCircle, Heart } from "lucide-react";

const STATS = [
  { icon: Users2, number: "+500", label: "clientes asesorados" },
  { icon: Star,   number: "4.9/5", label: "valoración de clientes" },
  { icon: Shield, number: "+12",   label: "años de experiencia" },
];

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.45, ease: "easeOut" as const, delay },
  };
}

export default function Hero() {
  const reduced = useReducedMotion() ?? false;
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const a = (props: Record<string, any>) => (mounted && !reduced ? props : {});

  return (
    <section className="bg-navy overflow-hidden">

      {/* ── PARTE SUPERIOR: split layout ── */}
      <div className="flex flex-col lg:grid lg:grid-cols-[55%_45%]">

        {/* Mobile: banner arriba (solo mobile) */}
        <div className="block lg:hidden relative mt-16 h-56 w-full">
          <Image
            src="/images/abogadas/heroprincipal.jpeg"
            fill
            className="object-cover object-center"
            alt="Abogadas Talca — banner"
            priority
          />
        </div>

        {/* Columna izquierda — contenido */}
        <div className="flex flex-col justify-center px-6 pt-8 pb-10 lg:px-16 lg:pt-36 lg:pb-20">

          {/* Badge ubicación */}
          <motion.div className="mb-5" {...a(fadeUp(0.1))}>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-1">
              <MapPin size={12} color="#C4738A" />
              <span className="text-[10px] tracking-widest text-white/70 uppercase">
                Talca, Región del Maule
              </span>
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            className="font-display font-normal leading-tight mb-4 text-3xl sm:text-4xl lg:text-5xl"
            {...a(fadeUp(0.2))}
          >
            <span className="text-white">Defensa legal</span>
            <br />
            <span style={{ color: "#C4738A" }}>cercana y estratégica.</span>
          </motion.h1>

          {/* Párrafo */}
          <motion.p
            className="text-sm text-white/70 mb-8 leading-relaxed"
            {...a(fadeUp(0.35))}
          >
            Te acompañamos con empatía, experiencia y compromiso en cada etapa del proceso legal.
          </motion.p>

          {/* Stats — fila horizontal de 3 columnas */}
          <div className="grid grid-cols-3 gap-3">
            {STATS.map(({ icon: Icon, number, label }, i) => (
              <motion.div
                key={number}
                className="flex flex-col gap-0.5"
                {...a({
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.5, ease: "easeOut", delay: 0.5 + i * 0.1 },
                })}
              >
                <Icon size={18} className="text-white/50 mb-1" />
                <span className="text-base font-bold text-white leading-none">{number}</span>
                <span className="text-[10px] text-white/50 leading-tight">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop: foto derecha — limpia, sin gradiente agresivo */}
        <motion.div
          className="hidden lg:block relative"
          {...a({
            initial: { opacity: 0, x: 30 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
          })}
        >
          <Image
            src="/images/abogadas/presentacion-abogada.jpg"
            fill
            className="object-cover object-top"
            alt="Catalina Fuentes, abogada"
            priority
          />
        </motion.div>
      </div>

      {/* ── PARTE INFERIOR: full width, mismo fondo navy ── */}
      <div className="px-6 pt-8 pb-16 lg:px-16 lg:pt-12 lg:pb-24">

        {/* Segundo headline */}
        <motion.h2
          className="font-display font-normal leading-tight mb-3 text-3xl sm:text-4xl lg:text-5xl"
          {...a(fadeUp(0.1))}
        >
          <span className="text-white">+12 años resolviendo casos en la</span>
          <br />
          <span style={{ color: "#C4738A" }}>Región del Maule.</span>
        </motion.h2>

        {/* Subtítulo */}
        <motion.p
          className="text-sm text-white/60 mb-8 leading-relaxed"
          {...a(fadeUp(0.2))}
        >
          Derecho de Familia, Civil, Laboral y Penal. Primera consulta gratuita.
        </motion.p>

        {/* Quote card + Botones — apilados en mobile, lado a lado en desktop */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-5">

          {/* Quote card — fondo burdeo */}
          <motion.div
            className="flex-1 rounded-xl px-5 py-5"
            style={{ backgroundColor: "#7D1F4B" }}
            {...a(fadeUp(0.3))}
          >
            <Heart size={20} className="text-white/70 mb-3" strokeWidth={1.5} />
            <p className="font-display italic text-white/90 text-base leading-relaxed mb-3">
              &ldquo;No es solo un caso. Es tu historia, y merece ser bien defendida.&rdquo;
            </p>
            <p className="text-white/50 text-[11px] tracking-wide">
              Catalina Fuentes &middot; Magíster en Derecho de Familia
            </p>
          </motion.div>

          {/* Botones apilados */}
          <motion.div
            className="flex flex-col gap-3 lg:w-64 lg:self-center"
            {...a(fadeUp(0.4))}
          >
            <a
              href="https://wa.me/56962242528"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full py-3.5 px-5 text-sm font-medium text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#25D366" }}
            >
              <MessageCircle size={16} />
              Consulta gratuita
            </a>
            <a
              href="#areas"
              className="flex items-center justify-center rounded-full border border-white/30 hover:border-white/70 py-3.5 px-5 text-sm text-white transition-colors bg-transparent"
            >
              Ver áreas de práctica
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
