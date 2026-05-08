import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { BUSINESS } from "@/lib/constants";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Abogadas Talca — Estudio Jurídico Región del Maule",
    template: "%s | Abogadas Talca",
  },
  description:
    "Estudio jurídico en Talca especializado en derecho de familia, laboral, civil y penal. +12 años de experiencia en la Región del Maule. Primera consulta gratuita.",
  keywords: [
    "abogadas talca",
    "abogado talca",
    "estudio juridico talca",
    "derecho familia talca",
    "divorcio talca",
    "despido injustificado talca",
    "pension alimenticia maule",
    "abogada maule",
    "Catalina Fuentes Tapia",
  ],
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: BUSINESS.web,
    siteName: BUSINESS.name,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: BUSINESS.name,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Talca",
    addressRegion: "Maule",
    addressCountry: "CL",
  },
  telephone: BUSINESS.phone,
  url: BUSINESS.web,
  priceRange: "$$",
  areaServed: "Región del Maule",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
