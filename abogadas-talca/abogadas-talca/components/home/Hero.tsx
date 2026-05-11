"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Users2, Star, Shield, MessageCircle } from "lucide-react";

const STATS = [
  { icon: Users2, number: "+500", label: "clientes asesorados" },
  { icon: Star,   number: "4.9/5", label: "valoración de clientes" },
  { icon: Shield, number: "+12",  label: "años de experiencia" },
];

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" as const, delay },
  };
}

export default function Hero() {
  const reduced = useReducedMotion() ?? false;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const a = (props: Record<string, any>) => (reduced ? {} : props);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#1E1E2E]">

      {/* ── Foto mobile: absolute derecha, altura completa ── */}
      <div className="absolute inset-y-0 right-0 w-[55%] lg:hidden" style={{ zIndex: 0 }}>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #1E1E2E 45%, rgba(30,30,46,0.53) 70%, transparent 100%)",
            zIndex: 1,
          }}
        />
        <Image
          src="/images/abogadas/catahero.jpeg"
          fill
          className="object-cover object-top"
          alt="Catalina Fuentes, abogada"
          priority
        />
      </div>

      {/* ── Layout principal ── */}
      <div className="relative min-h-screen lg:grid lg:grid-cols-[55%_45%]" style={{ zIndex: 10 }}>

        {/* Columna izquierda — contenido */}
        <div className="flex flex-col justify-center pt-28 pb-12 pl-6 pr-4 lg:px-16 lg:pt-32 lg:pb-20">

          {/* Badge */}
          <motion.div className="mb-5" {...a(fadeUp(0.1))}>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-1">
              <MapPin size={12} color="#C4738A" />
              <span className="text-[10px] tracking-widest text-white/70 uppercase">
                Talca, Región del Maule
              </span>
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="font-display font-normal leading-tight mb-4 text-3xl lg:text-5xl"
            {...a(fadeUp(0.2))}
          >
            <span className="text-white">Defensa legal</span>
            <br />
            <span style={{ color: "#C4738A" }}>cercana y estratégica.</span>
          </motion.h1>

          {/* Párrafo */}
          <motion.p
            className="text-sm text-white/70 max-w-[260px] mb-8 leading-relaxed"
            {...a(fadeUp(0.35))}
          >
            Te acompañamos con empatía, experiencia y compromiso en cada etapa del proceso legal.
          </motion.p>

          {/* Stats */}
          <div className="flex gap-5 mb-8">
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

          {/* Botones */}
          <motion.div className="flex flex-col gap-3 max-w-[240px]" {...a(fadeUp(0.65))}>
            <a
              href="https://wa.me/56962242528"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full py-3 px-5 text-sm font-medium text-white transition-colors hover:opacity-90"
              style={{ backgroundColor: "#25D366" }}
            >
              <MessageCircle size={16} />
              Hablar por WhatsApp
            </a>
            <a
              href="#areas"
              className="flex items-center justify-center rounded-full border border-white/30 hover:border-white/70 py-3 px-5 text-sm text-white transition-colors bg-transparent"
            >
              Cómo podemos ayudarte ›
            </a>
          </motion.div>
        </div>

        {/* Columna derecha — foto desktop */}
        <motion.div
          className="hidden lg:block relative"
          {...a({
            initial: { opacity: 0, x: 30 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
          })}
        >
          <Image
            src="/images/abogadas/catahero.jpeg"
            fill
            className="object-cover object-top"
            alt="Catalina Fuentes, abogada"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
