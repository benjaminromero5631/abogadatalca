"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Users2, Star, Shield, MessageCircle } from "lucide-react";

const STATS = [
  { icon: Users2, number: "+500", label: "clientes\nasesorados" },
  { icon: Star,   number: "4.9/5", label: "valoración\nde clientes" },
  { icon: Shield, number: "+12",  label: "años de\nexperiencia" },
];

function anim(
  reduced: boolean,
  props: Record<string, unknown>
): Record<string, unknown> {
  return reduced ? {} : props;
}

export default function Hero() {
  const reduced = useReducedMotion() ?? false;

  return (
    <section className="relative overflow-hidden bg-ink min-h-screen">
      {/* Mobile: imagen posicionada a la derecha con overlay */}
      <div className="absolute top-0 right-0 h-[70vh] w-[58%] lg:hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E1E2E] via-[#1E1E2E]/65 to-transparent z-10" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#1E1E2E] to-transparent z-10" />
        <Image
          src="/images/abogadas/catahero.jpeg"
          fill
          className="object-cover object-top"
          alt="Catalina Fuentes, abogada"
          priority
        />
      </div>

      {/* Layout principal */}
      <div className="relative min-h-screen lg:grid lg:grid-cols-[55%_45%]">
        {/* Columna izquierda — contenido */}
        <div className="relative z-10 flex flex-col justify-center px-6 pt-24 pb-12 lg:px-16 lg:pt-32 lg:pb-20">

          {/* Badge ubicación */}
          <motion.div
            className="mb-6"
            {...anim(reduced, {
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              viewport: { once: true },
              transition: { duration: 0.5, ease: "easeOut", delay: 0.1 },
            })}
          >
            <span className="inline-flex items-center gap-1.5 border border-white/20 rounded-full px-3 py-1">
              <MapPin size={12} className="text-terracotta flex-shrink-0" />
              <span className="text-[11px] tracking-widest text-white/70 font-body uppercase">
                Talca, Región del Maule
              </span>
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="font-display text-4xl lg:text-5xl font-normal leading-tight mb-4"
            {...anim(reduced, {
              initial: { opacity: 0, y: 24 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.55, ease: "easeOut", delay: 0.2 },
            })}
          >
            <span className="text-white">Defensa legal</span>
            <br />
            <span className="text-terracotta">cercana y estratégica.</span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            className="text-sm lg:text-base text-white/70 max-w-[360px] mb-8 font-body leading-relaxed"
            {...anim(reduced, {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5, ease: "easeOut", delay: 0.35 },
            })}
          >
            Te acompañamos con empatía, experiencia y compromiso en cada etapa del proceso legal.
          </motion.p>

          {/* Estadísticas */}
          <div className="flex gap-6 mb-8">
            {STATS.map(({ icon: Icon, number, label }, i) => (
              <motion.div
                key={number}
                className="flex flex-col items-start gap-1"
                {...anim(reduced, {
                  initial: { opacity: 0, y: 16 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.45, ease: "easeOut", delay: 0.5 + i * 0.1 },
                })}
              >
                <Icon size={20} className="text-white/60" />
                <span className="text-xl font-bold text-white font-body leading-none">{number}</span>
                <span className="text-xs text-white/60 font-body leading-tight whitespace-pre-line">{label}</span>
              </motion.div>
            ))}
          </div>

          {/* Botones */}
          <motion.div
            className="flex flex-col gap-3 max-w-[280px]"
            {...anim(reduced, {
              initial: { opacity: 0, y: 18 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5, ease: "easeOut", delay: 0.65 },
            })}
          >
            <a
              href="https://wa.me/56962242528"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white rounded-full py-3 px-6 text-sm font-medium transition-colors font-body"
            >
              <MessageCircle size={18} />
              Hablar por WhatsApp
            </a>
            <Link
              href="#areas"
              className="inline-flex items-center justify-center border border-white/40 hover:border-white/80 text-white rounded-full py-3 px-6 text-sm font-medium transition-colors bg-transparent font-body"
            >
              Cómo podemos ayudarte ›
            </Link>
          </motion.div>
        </div>

        {/* Columna derecha — foto (solo desktop) */}
        <motion.div
          className="hidden lg:block relative"
          {...anim(reduced, {
            initial: { opacity: 0, x: 40 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
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
