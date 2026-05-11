"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion, animate } from "framer-motion";
import { BUSINESS } from "@/lib/constants";

const STATS = [
  { prefix: "+", to: 12, suffix: " años", label: "De ejercicio" },
  { prefix: "+", to: 500, suffix: "", label: "Casos resueltos" },
  { prefix: "", to: 4, suffix: " áreas", label: "Familia · Laboral · Civil · Penal" },
];

function Counter({
  to,
  prefix,
  suffix,
  delay,
  reduced,
}: {
  to: number;
  prefix: string;
  suffix: string;
  delay: number;
  reduced: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (reduced) {
      if (ref.current) ref.current.textContent = prefix + to + suffix;
      return;
    }

    let controls: { stop: () => void } | null = null;

    const t = setTimeout(() => {
      controls = animate(0, to, {
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1],
        onUpdate(v) {
          if (ref.current) ref.current.textContent = prefix + Math.round(v) + suffix;
        },
      });
    }, delay * 1000);

    return () => {
      clearTimeout(t);
      controls?.stop();
    };
  }, [to, prefix, suffix, delay, reduced]);

  return (
    <span ref={ref}>{reduced ? prefix + to + suffix : prefix + "0" + suffix}</span>
  );
}

export default function Hero() {
  const reduced = useReducedMotion() ?? false;
  const waUrl = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(BUSINESS.waMessage)}`;

  return (
    <section className="bg-ink text-white relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 py-24 md:py-32">
        <div>
          <motion.p
            className="text-white/40 text-xs uppercase tracking-widest mb-6 font-body"
            initial={reduced ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
          >
            Abogadas Talca — Talca, Región del Maule
          </motion.p>

          <motion.h1
            className="font-display text-[2.6rem] md:text-5xl lg:text-6xl font-medium leading-[1.1] mb-8"
            initial={reduced ? false : { opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.15 }}
          >
            +12 años resolviendo<br />
            casos en la<br />
            <motion.em
              className="text-terracotta not-italic"
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.55 }}
            >
              Región del Maule.
            </motion.em>
          </motion.h1>

          <motion.p
            className="text-white/55 text-base md:text-lg leading-relaxed mb-10 max-w-sm"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            Derecho de Familia, Civil, Laboral y Penal. Primera consulta gratuita.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3"
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.55 }}
          >
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-6 py-3 text-sm font-medium transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Consulta gratuita
            </a>
            <Link
              href="#areas"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white/60 border border-white/20 hover:border-white/40 hover:text-white transition-colors"
            >
              Ver áreas de práctica
            </Link>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/10"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.7 }}
          >
            {STATS.map((s, i) => (
              <div key={s.label}>
                <p className="font-display text-3xl font-medium text-white">
                  <Counter
                    to={s.to}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    delay={0.8 + i * 0.12}
                    reduced={reduced}
                  />
                </p>
                <p className="text-white/35 text-xs mt-0.5">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
