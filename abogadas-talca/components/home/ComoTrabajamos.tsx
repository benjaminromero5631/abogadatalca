"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { MessageSquare, ClipboardList, Scale, Handshake } from "lucide-react";

const pasos = [
  {
    num: "01",
    icon: MessageSquare,
    title: "Escuchamos tu caso",
    desc: "Te escuchamos con atencion para entender tu situacion y tus necesidades.",
  },
  {
    num: "02",
    icon: ClipboardList,
    title: "Analizamos y evaluamos",
    desc: "Estudiamos tu caso y disenamos la mejor estrategia legal para ti.",
  },
  {
    num: "03",
    icon: Scale,
    title: "Te acompanamos y defendemos",
    desc: "Te representamos con compromiso, transparencia y dedicacion en cada paso del proceso.",
  },
  {
    num: "04",
    icon: Handshake,
    title: "Buscamos la mejor solucion",
    desc: "Nuestro objetivo es proteger lo que mas importa: tu tranquilidad y la de tu familia.",
  },
];

export default function ComoTrabajamos() {
  const reduced = useReducedMotion();

  return (
    <section id="como-trabajamos" className="bg-stone py-20 md:py-28 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-terracotta text-xs uppercase tracking-widest font-medium mb-4">
            Nuestro proceso
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-ink mb-3">
            ¿Como trabajamos contigo?
          </h2>
          <p className="text-ink-faint text-sm max-w-md mx-auto">
            Estamos contigo en cada paso. Tu tranquilidad es nuestra prioridad.
          </p>
        </motion.div>

        {/* Timeline desktop: fila conectada / mobile: columna */}
        <div className="relative">
          {/* Linea conectora (solo desktop) */}
          <div
            className="hidden lg:block absolute top-10 left-0 right-0 h-px border-t-2 border-dashed border-border z-0"
            style={{ left: "calc(12.5%)", right: "calc(12.5%)" }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {pasos.map((paso, i) => {
              const Icon = paso.icon;
              return (
                <motion.div
                  key={paso.num}
                  initial={reduced ? false : { opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Icono circular */}
                  <div className="w-20 h-20 rounded-full bg-white border-2 border-border flex items-center justify-center mb-5 shadow-sm relative">
                    <Icon size={24} className="text-terracotta" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-burdeo text-white text-[10px] font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-medium text-ink mb-2">
                    {paso.title}
                  </h3>
                  <p className="text-ink-faint text-sm leading-relaxed">
                    {paso.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Frase cierre + CTA */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
          className="text-center mt-14"
        >
          <p className="font-display text-xl font-light text-ink-faint italic mb-6">
            "Estamos contigo en cada paso."
          </p>
          <Link
            href="#contacto"
            aria-label="Comenzar consulta legal"
            className="inline-flex items-center justify-center px-8 py-3 bg-burdeo hover:bg-terracotta-dark text-white text-sm font-medium transition-colors rounded-sm"
          >
            Comienza hoy
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
