"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { MotionProps } from "framer-motion";
import { Shield, Scale, AlertTriangle, ChevronDown } from "lucide-react";

// ─── Tipos ───────────────────────────────────────────────────────────────────

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

// ─── Datos ────────────────────────────────────────────────────────────────────

const servicios = [
  {
    icon: Shield,
    title: "Defensa ante cobro de CAE",
    description:
      "La Tesoreria no siempre tiene jurisdiccion para cobrarte como si fuera un impuesto. El Art. 18 bis de la Ley 20.027 establece que el cobro del CAE corresponde al juez civil, no al procedimiento tributario. Te defendemos con argumentos solidos y estrategia clara.",
    badge: "Hasta 30 dias habiles para actuar",
  },
  {
    icon: Scale,
    title: "Juicios de cobranza judicial",
    description:
      "Si enfrentas una demanda ejecutiva de banco u otro acreedor, analizamos el titulo, los plazos de prescripcion y las excepciones disponibles para protegerte de cobros indebidos o desproporcionados.",
    badge: null,
  },
  {
    icon: AlertTriangle,
    title: "Declaracion de quiebra e insolvencia",
    description:
      "Antes de que un proceso de quiebra te afecte, evaluamos tu situacion patrimonial y te orientamos sobre los mecanismos de renegociacion y defensa disponibles en la ley chilena.",
    badge: null,
  },
];

const razonesGrid = [
  { num: "i.", titulo: "Exclusion expresa", desc: "La Ley 20.027 somete el cobro al procedimiento civil, no al tributario." },
  { num: "ii.", titulo: "Nomina no es CAE", desc: "La Nomina del art. 169 CT es instrumento exclusivo de obligaciones tributarias." },
  { num: "iii.", titulo: "No es contribuyente", desc: "El deudor CAE no esta 'afecto a impuesto' en los terminos del art. 8 N°5 CT." },
  { num: "iv.", titulo: "Naturaleza inmutable", desc: "Usar el cauce tributario no transforma un mutuo en obligacion tributaria." },
  { num: "v.", titulo: "Legitimacion no acreditada", desc: "El Fisco no prueba si actua como titular, subrogado o delegado del banco." },
  { num: "vi.", titulo: "Titulo indeterminado", desc: "La Nomina no desglosa capital, intereses ni origen: indefension estructural." },
];

// ─── Acordeon ─────────────────────────────────────────────────────────────────

function AccordionRow({ item, index, open, onToggle }: {
  item: AccordionItem;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const reduced = useReducedMotion();

  return (
    <div className="border-b border-white/10">
      <button
        className="w-full flex items-center justify-between py-5 text-left group"
        onClick={onToggle}
        aria-expanded={open}
        aria-label={`${open ? "Cerrar" : "Abrir"}: ${item.title}`}
      >
        <span className="font-display text-lg font-medium text-white group-hover:text-gold transition-colors pr-8">
          {item.title}
        </span>
        <ChevronDown
          size={18}
          className={`text-gold shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key={`acc-${index}`}
            initial={reduced ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 pr-8 text-white/70 text-sm leading-relaxed">
              {item.content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Componente principal ─────────────────────────────────────────────────────

export default function DefensaDeudores() {
  const [openItem, setOpenItem] = useState<number | null>(0);
  const reduced = useReducedMotion();

  const toggle = (i: number) => setOpenItem(openItem === i ? null : i);

  const fadeUp = (delay = 0): MotionProps => ({
    initial: reduced ? false : { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.6, ease: "easeOut" as const, delay },
  });

  const acordeonItems: AccordionItem[] = [
    {
      title: "I. El Escenario",
      content: (
        <div className="space-y-4">
          <p>
            Por una deuda de Credito con Aval del Estado, la Tesoreria despacha mandamiento de ejecucion y embargo usando el procedimiento de cobro de impuestos del Codigo Tributario.
          </p>
          <blockquote className="border-l-2 border-gold pl-4">
            <p className="text-gold/90 italic text-sm">
              "El vicio estructural: Se pretende ejecutar una deuda contractual — un mutuo bancario con garantia estatal — con las prerrogativas disenadas para recaudar impuestos."
            </p>
          </blockquote>
        </div>
      ),
    },
    {
      title: "II. La norma que el Fisco ignora",
      content: (
        <div className="space-y-4">
          <blockquote className="border-l-2 border-gold pl-4">
            <p className="text-white/90 text-sm leading-relaxed">
              "Las acciones de cobranza que ejerza la Tesoreria General de la Republica se sometern a las reglas generales de procedimiento aplicables al cobro coactivo, ordinario o ejecutivo, de los titulos en que constan las obligaciones y creditos otorgados al amparo de esta ley."
            </p>
            <footer className="mt-2 text-gold/70 text-xs">-- Art. 18 BIS · Ley N° 20.027 (CAE)</footer>
          </blockquote>
          <p className="italic text-gold/80 text-sm">
            Traduccion: el cobro del CAE se tramita ante el juez civil, no ante la Tesoreria.
          </p>
        </div>
      ),
    },
    {
      title: "III. Defensa Principal",
      content: (
        <div className="space-y-4">
          <p className="font-medium text-white">La Tesoreria carece de jurisdiccion para este cobro.</p>
          <p className="italic text-gold/80 text-sm">Tres premisas concurrentes, cada una suficiente por si sola:</p>
          <ol className="space-y-3">
            {[
              { titulo: "El Tesorero es juez solo de tributos.", desc: "Su jurisdiccion esta acotada, por texto expreso, al cobro ejecutivo de las obligaciones tributarias de dinero. El CAE no lo es: es un mutuo contractual." },
              { titulo: "El DL 1.263 habilita un procedimiento, no extiende jurisdiccion.", desc: "Una cosa es la norma procesal aplicable; otra, la habilitacion del organo para conocer." },
              { titulo: "La ley especial remite al juez civil.", desc: "El art. 18 bis de la Ley 20.027 es ley especial y posterior: desplaza doblemente cualquier pretension del procedimiento tributario." },
            ].map((p, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-gold font-display text-base shrink-0">{i + 1}.</span>
                <div>
                  <span className="font-medium text-white">{p.titulo}</span>{" "}
                  <span className="text-white/65 text-sm">{p.desc}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      ),
    },
    {
      title: "IV. El titulo no empece al ejecutado",
      content: (
        <div className="space-y-4">
          <p className="italic text-gold/80 text-sm">
            Seis capas argumentativas independientes y convergentes. Acogida cualquiera, la excepcion prospera.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {razonesGrid.map((r) => (
              <div key={r.num} className="bg-white/5 rounded p-3 border border-white/10">
                <p className="text-gold text-xs font-medium mb-1">{r.num} {r.titulo}</p>
                <p className="text-white/60 text-xs leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "V. La accion tributaria esta prescrita",
      content: (
        <div className="space-y-5">
          <p className="italic text-gold/80 text-sm">
            Si el Fisco invoca las prerrogativas del regimen tributario, debe someterse tambien a su regimen de prescripcion.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center bg-white/5 rounded-lg p-5 border border-white/10">
              <p className="font-display text-5xl font-light text-gold">3</p>
              <p className="text-white/50 text-xs mt-1 uppercase tracking-wider">anos</p>
              <p className="text-white/60 text-xs mt-2">Plazo de prescripcion tributaria (arts. 200 y 201 CT)</p>
            </div>
            <div className="text-center bg-white/5 rounded-lg p-5 border border-white/10">
              <p className="font-display text-5xl font-light text-gold">+5</p>
              <p className="text-white/50 text-xs mt-1 uppercase tracking-wider">anos</p>
              <p className="text-white/60 text-xs mt-2">Transcurridos entre exigibilidad y requerimiento, sin acto interruptivo</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "VI. Por que importa",
      content: (
        <div className="space-y-4">
          <p className="font-medium text-white">Mas que un caso: un problema institucional.</p>
          <ol className="space-y-4">
            {[
              { titulo: "LA LEY ESPECIAL, EN LETRA MUERTA:", desc: "Si el Fisco puede usar el cauce tributario para cobrar el CAE, el art. 18 bis de la Ley 20.027 queda operativamente derogado por via administrativa." },
              { titulo: "UN INCENTIVO PERVERSO:", desc: "A la Administracion le convendria migrar toda deuda suya al Codigo Tributario: ahi estan sus mayores prerrogativas (titulo autogenerado, juez propio, plazos brevisimos)." },
              { titulo: "DESIGUALDAD ANTE LA LEY · ART. 19 N°2 C.P.R.:", desc: "Dos deudas bancarias identicas reciben tratamientos procesales radicalmente distintos segun intervenga o no el Fisco como garante." },
            ].map((p, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-gold font-display text-base shrink-0">{["i.", "ii.", "iii."][i]}</span>
                <div>
                  <span className="font-medium text-white text-sm">{p.titulo}</span>{" "}
                  <span className="text-white/65 text-sm">{p.desc}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      ),
    },
  ];

  return (
    <section id="defensa-deudores">
      {/* ── Parte A: Hero ──────────────────────────────────────────────── */}
      <div className="bg-navy px-6 py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeUp(0)}>
            <span className="inline-block text-[11px] uppercase tracking-widest font-medium bg-gold/20 text-gold px-4 py-1.5 rounded-full mb-8">
              DESTACADO
            </span>
            <h2 className="font-display text-5xl md:text-6xl font-medium text-white mb-3">
              Defensa de Deudores
            </h2>
            <p className="text-gold text-lg font-light mb-6">
              CAE · Cobranza Judicial · Insolvencia
            </p>
            <p className="text-white/60 max-w-2xl mx-auto text-base leading-relaxed mb-10">
              ¿Recibiste una notificacion de la Tesoreria por un CAE? ¿Enfrentas un juicio de cobranza o una amenaza de quiebra? Conoce tus derechos antes de que el plazo decida por ti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contacto"
                aria-label="Consultar caso de defensa de deudores"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-gold hover:bg-gold-light text-navy text-sm font-semibold transition-colors rounded-sm"
              >
                Consulta ahora
              </Link>
              <Link
                href="#defensa-servicios"
                aria-label="Ver como te defendemos"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-white/30 hover:border-gold text-white hover:text-gold text-sm font-medium transition-colors rounded-sm"
              >
                ¿Como te defendemos?
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Parte B: Servicios ─────────────────────────────────────────── */}
      <div id="defensa-servicios" className="bg-cream px-6 py-20 md:py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp(0)} className="mb-12">
            <p className="text-navy text-xs uppercase tracking-widest font-medium mb-4">Defensa de Deudores</p>
            <h3 className="font-display text-4xl md:text-5xl font-medium text-navy">
              ¿En que situaciones te ayudamos?
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {servicios.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  {...fadeUp(i * 0.1)}
                  className="bg-white border border-navy/10 rounded-xl p-8 flex flex-col"
                >
                  <div className="w-10 h-10 rounded-full bg-navy/8 flex items-center justify-center mb-6">
                    <Icon size={20} className="text-navy" />
                  </div>
                  <h4 className="font-display text-xl font-medium text-navy mb-3">{s.title}</h4>
                  <p className="text-navy/60 text-sm leading-relaxed flex-1">{s.description}</p>
                  {s.badge && (
                    <span className="inline-block mt-6 text-[11px] uppercase tracking-widest font-medium text-gold bg-navy px-3 py-1.5 rounded-full self-start">
                      {s.badge}
                    </span>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Parte C: Caso de estudio CAE ───────────────────────────────── */}
      <div className="bg-navy px-6 py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp(0)} className="mb-12">
            <p className="text-gold/60 text-xs uppercase tracking-widest font-medium mb-6">
              -- Caso del Estudio --
            </p>
            <h3 className="font-display text-4xl md:text-5xl font-medium text-white mb-4">
              Cuando el Fisco te cobra un CAE como si fuera un impuesto.
            </h3>
            <p className="text-gold italic text-base">
              Como estructuramos la oposicion ante la pretension de la Tesoreria General en un cobro de Credito con Aval del Estado.
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.1)} className="divide-y divide-white/10">
            {acordeonItems.map((item, i) => (
              <AccordionRow
                key={i}
                item={item}
                index={i}
                open={openItem === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Parte D: CTA de cierre ─────────────────────────────────────── */}
      <div className="bg-navy border-t border-white/10 px-6 py-20 md:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div {...fadeUp(0)}>
            <p className="text-gold/60 text-xs uppercase tracking-widest font-medium mb-8">
              -- Para Concluir --
            </p>
            <h3 className="font-display text-4xl md:text-5xl font-medium text-white mb-4">
              Un cobro de la Tesoreria no siempre es un cobro legitimo.
            </h3>
            <p className="text-gold italic text-base mb-10 leading-relaxed">
              Si fuiste notificado por un CAE, tienes 30 dias habiles para iniciar tu defensa y frenar el proceso. No dejes que el plazo decida por ti.
            </p>
            <Link
              href="#contacto"
              aria-label="Consultar caso de defensa de deudores urgente"
              className="inline-flex items-center justify-center px-10 py-4 bg-gold hover:bg-gold-light text-navy text-sm font-bold transition-colors rounded-sm"
            >
              Consulta tu caso ahora
            </Link>
            <p className="text-white/30 text-xs mt-4">
              Consulta confidencial · Sin compromiso
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
