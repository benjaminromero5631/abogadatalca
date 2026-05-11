"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const links = [
  { href: "/#areas", label: "Áreas" },
  { href: "/nosotras", label: "Sobre Abogadas Talca" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const waUrl = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(BUSINESS.waMessage)}`;

  return (
    <header className="sticky top-0 z-50 bg-stone border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between relative">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="Abogadas Talca"
            width={36}
            height={36}
            className="rounded-full object-cover"
          />
          <span className="font-display text-lg font-semibold text-ink tracking-wide hidden sm:block">
            Abogadas Talca
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-ink-muted hover:text-ink text-sm transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-terracotta border border-terracotta px-4 py-1.5 hover:bg-terracotta hover:text-white transition-colors"
          >
            Consulta gratuita
          </a>
        </nav>

        <span className="absolute left-1/2 -translate-x-1/2 text-sm font-semibold tracking-widest uppercase text-[#7D1F4B] md:hidden pointer-events-none">
          Abogadas Talca
        </span>

        <button
          className="md:hidden text-ink"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-stone border-t border-border px-6 py-5 flex flex-col gap-5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-ink-muted text-sm"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-terracotta border border-terracotta px-4 py-2 text-center"
          >
            Consulta gratuita
          </a>
        </div>
      )}
    </header>
  );
}
