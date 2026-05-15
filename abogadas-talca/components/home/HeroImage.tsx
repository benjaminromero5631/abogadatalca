"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function HeroImage() {
  const reduced = useReducedMotion();

  return (
    <div className="hidden md:flex justify-center items-center">
      <div className="relative">
        <motion.div
          className="w-72 h-96 border border-white/10 overflow-hidden relative"
          initial={reduced ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.25 }}
        >
          <Image
            src="/images/abogadas/catalina.jpg"
            alt="Catalina del Carmen Fuentes Tapia — Abogada"
            fill
            className="object-cover object-top"
            priority
          />
          <motion.div
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-5 py-4"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
          >
            <p className="font-display text-base text-white font-medium leading-tight">
              Catalina del Carmen
            </p>
            <p className="font-display text-base text-white font-medium leading-tight">
              Fuentes Tapia
            </p>
            <p className="text-white/55 text-xs mt-1">Abogada</p>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute -bottom-4 -right-4 w-full h-full border border-terracotta/20 -z-10"
          initial={reduced ? false : { opacity: 0, x: 8, y: 8 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
        />
      </div>
    </div>
  );
}
