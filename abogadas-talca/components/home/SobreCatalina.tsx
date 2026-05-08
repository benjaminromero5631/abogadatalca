"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Heart, MapPin, Phone, Mail, Clock } from "lucide-react";

const areas = ["Familia", "Civil", "Laboral", "Penal"];

const contacto = [
  { icon: Mail, label: "abogadastalca.cl@gmail.com" },
  { icon: Phone, label: "+56 9 6224 2528" },
  { icon: MapPin, label: "1 Poniente 1258, Of. 1111, Talca" },
  { icon: Clock, label: "Lunes a Viernes, 9:00 - 18:00 hrs." },
];

export default function SobreCatalina() {
  const reduced = useReducedMotion();

  return (
    <section id="sobre-nosotras" className="bg-white py-20 md:py-28 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Imagen */}
        <motion.div
          className="order-2 md:order-1"
          initial={reduced ? false : { opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-stone max-w-sm mx-auto md:mx-0">
            {/* TODO: Reemplazar src con la ruta real de la foto de Catalina */}
            {/* Ejemplo: src="/images/catalina.jpg" */}
            <Image
              src="/images/catalina.jpg"
              alt="Catalina Fuentes — Abogada especialista en Derecho de Familia, Talca"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </motion.div>

        {/* Texto */}
        <motion.div
          className="order-1 md:order-2"
          initial={reduced ? false : { opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <p className="text-terracotta text-xs uppercase tracking-widest font-medium mb-4">
            Sobre Nosotras
          </p>

          <h2 className="font-display text-4xl md:text-5xl font-medium text-ink mb-1">
            Catalina Fuentes
          </h2>
          <p className="text-ink-faint text-base mb-6">
            Magíster en Derecho de Familia
          </p>

          {/* Separador decorativo */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-terracotta" />
            <Heart size={14} className="text-terracotta fill-terracotta" />
            <div className="h-px flex-1 bg-border" />
          </div>

          <blockquote className="border-l-4 border-terracotta pl-5 mb-8">
            <p className="font-display text-xl font-light text-ink italic leading-snug">
              "Estoy aqui para ofrecer una asesoria integral a las familias, en las diversas areas del derecho."
            </p>
          </blockquote>

          <p className="text-ink-faint text-sm leading-relaxed mb-8">
            Con formacion especializada y una vocacion profunda por el servicio, acompano a cada cliente con empatia, claridad y compromiso real en cada etapa del proceso legal.
          </p>

          {/* Areas */}
          <div className="flex flex-wrap gap-2 mb-8">
            {areas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-burdeo bg-stone border border-border px-3 py-1.5 rounded-full"
              >
                <Heart size={10} className="fill-terracotta text-terracotta" />
                {area}
              </span>
            ))}
          </div>

          {/* Contacto */}
          <div className="space-y-2.5 mb-8">
            {contacto.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 text-sm text-ink-faint">
                <Icon size={14} className="text-terracotta shrink-0" />
                <span>{label}</span>
              </div>
            ))}
          </div>

          <Link
            href="#contacto"
            aria-label="Agendar consulta con Catalina Fuentes"
            className="inline-flex items-center justify-center px-7 py-3 bg-burdeo hover:bg-terracotta-dark text-white text-sm font-medium transition-colors rounded-sm"
          >
            Agenda tu consulta
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
