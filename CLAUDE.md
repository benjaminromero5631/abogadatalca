# CLAUDE.md — Sitio Web Abogadas Talca

> Este archivo guía a Claude Code en la construcción completa del sitio web de **Abogadas Talca**. Sigue estas instrucciones al pie de la letra. No improvises fuera de lo especificado; si hay ambigüedad, pregunta antes de proceder.

## 0. Reglas de flujo de trabajo

- **Siempre hacer `git push` al terminar cada instruccion.** Hacer commit con los archivos modificados y luego push a `origin main`.
- **Actualizar este CLAUDE.md** cuando el usuario entregue una instruccion nueva de comportamiento o flujo de trabajo.

---

## 1. Contexto del Proyecto

**Cliente:** Estudio jurídico "Abogadas Talca" — estudio de abogadas mujeres en Talca, Región del Maule, Chile.

**Objetivo del sitio:** Convertir visitantes en clientes. Cada sección, botón y texto debe empujar al usuario hacia una consulta (WhatsApp o formulario). El sitio no es un portafolio: es una **máquina de conversión**.

**Público objetivo:** Personas (mayoritariamente mujeres) de la Región del Maule que enfrentan un problema legal y buscan ayuda urgente, clara y de confianza.

**Tono de comunicación:** Cercano, humano, claro. Sin tecnicismos legales innecesarios. El mensaje central es: *"Tu problema tiene solución. Nosotras te ayudamos."*

---

## 2. Stack Tecnológico

| Decisión | Elección | Razón |
|---|---|---|
| Framework | **Next.js 14** (App Router) | SEO, rendimiento, ISR para el blog |
| Estilos | **Tailwind CSS v3** | Velocidad de desarrollo, consistencia |
| Animaciones | **Framer Motion** | Scroll reveals, micro-interacciones |
| Formularios | **React Hook Form + Resend** | Envío de email sin backend propio |
| Blog | **Contentlayer + MDX** | Blog estático, fácil de editar |
| Mapas | **Google Maps Embed API** | Sencillo, sin SDK pesado |
| Deploy | **Vercel** | Integración nativa con Next.js |
| Dominio | `abogadastalca.cl` (ya existente) |  |

### Estructura de carpetas

```
abogadas-talca/
├── app/
│   ├── layout.tsx          # Root layout, fuentes, meta globals
│   ├── page.tsx            # Home (landing principal)
│   ├── nosotras/
│   │   └── page.tsx
│   ├── areas/
│   │   └── [slug]/
│   │       └── page.tsx    # Página individual por área
│   ├── blog/
│   │   ├── page.tsx        # Listado de artículos
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── contacto/
│   │   └── page.tsx
│   └── api/
│       └── contact/
│           └── route.ts    # Endpoint formulario → Resend
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── WhatsAppButton.tsx   # Botón flotante siempre visible
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── Stats.tsx
│   │   ├── AreasGrid.tsx
│   │   ├── WhyUs.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   └── CTABand.tsx
│   ├── shared/
│   │   ├── SectionLabel.tsx
│   │   ├── AnimatedSection.tsx  # Wrapper con scroll reveal
│   │   └── ContactForm.tsx
│   └── blog/
│       ├── BlogCard.tsx
│       └── BlogList.tsx
├── content/
│   └── blog/               # Archivos .mdx para artículos
├── public/
│   ├── images/
│   │   ├── abogadas/       # Fotos profesionales del equipo
│   │   └── og/             # Imágenes Open Graph
│   └── favicon.ico
├── lib/
│   ├── constants.ts        # Datos del negocio (teléfono, email, etc.)
│   └── seo.ts              # Helpers para metadata
├── CLAUDE.md               # Este archivo
└── .env.local              # Variables de entorno (no commitear)
```

---

## 3. Variables de Entorno

Crear `.env.local` con:

```env
# Resend (envío de emails del formulario)
RESEND_API_KEY=re_XXXXXXXXXXXXXXXXXXXXXXXXXX

# Email destino del formulario de contacto
CONTACT_EMAIL=contacto@abogadastalca.cl

# Google Maps Embed API Key
NEXT_PUBLIC_GOOGLE_MAPS_KEY=AIzaXXXXXXXXXXXXXXXXXXXXXX

# WhatsApp Business Number (solo dígitos, sin +)
NEXT_PUBLIC_WA_NUMBER=569XXXXXXXX
NEXT_PUBLIC_WA_MESSAGE=Hola, me gustaría consultar sobre un caso legal.
```

> ⚠️ **NUNCA commitear `.env.local`**. Está en `.gitignore` por defecto en Next.js.

---

## 4. Datos del Negocio (lib/constants.ts)

```typescript
// lib/constants.ts
// ═══════════════════════════════════════════════════════════
// COMPLETAR ANTES DE EJECUTAR — datos reales del cliente
// ═══════════════════════════════════════════════════════════

export const BUSINESS = {
  name: "Abogadas Talca",
  tagline: "Tu problema legal tiene solución. Nosotras te ayudamos.",
  description:
    "Estudio jurídico femenino especializado en derecho de familia, laboral, civil y penal. Atendemos en toda la Región del Maule.",
  phone: "+56 9 XXXX XXXX",           // TODO: reemplazar
  whatsapp: "569XXXXXXXX",            // TODO: reemplazar (sin +)
  email: "contacto@abogadastalca.cl", // TODO: confirmar
  address: "Dirección, Talca, Región del Maule", // TODO: reemplazar
  instagram: "https://www.instagram.com/abogadastalca/",
  web: "https://abogadastalca.cl",
  googleMapsEmbed: "URL_EMBED_DE_GOOGLE_MAPS", // TODO: reemplazar
  hours: "Lunes a Viernes, 9:00 - 18:00 hrs",
} as const;

export const TEAM = [
  {
    name: "NOMBRE ABOGADA 1",         // TODO: reemplazar
    title: "Abogada — Derecho de Familia",
    bio: "BIO ABOGADA 1",             // TODO: reemplazar
    photo: "/images/abogadas/abogada-1.jpg",
    linkedin: "",
  },
  {
    name: "NOMBRE ABOGADA 2",         // TODO: reemplazar
    title: "Abogada — Derecho Laboral",
    bio: "BIO ABOGADA 2",             // TODO: reemplazar
    photo: "/images/abogadas/abogada-2.jpg",
    linkedin: "",
  },
] as const;

export const AREAS = [
  {
    slug: "derecho-laboral",
    title: "Derecho Laboral",
    icon: "briefcase",
    short: "Despidos injustificados, acoso laboral, liquidaciones y negociación colectiva.",
    description: `
      Si fuiste despedido injustamente, sufres acoso en el trabajo o no te han pagado lo que corresponde,
      podemos ayudarte a hacer valer tus derechos ante la Inspección del Trabajo o los Tribunales Laborales.
      Actuamos con rapidez porque sabemos que el tiempo importa.
    `,
    casos: [
      "Despido injustificado",
      "Acoso laboral o sexual",
      "Liquidaciones incorrectas",
      "Tutela de derechos fundamentales",
      "Negociación colectiva",
    ],
  },
  {
    slug: "derecho-familia",
    title: "Derecho de Familia",
    icon: "users",
    short: "Divorcios, pensión de alimentos, tuición y régimen de visitas.",
    description: `
      Los conflictos de familia son los más difíciles de enfrentar. Te acompañamos en cada etapa
      con claridad, empatía y un enfoque orientado al bienestar de tu familia,
      especialmente de tus hijos.
    `,
    casos: [
      "Divorcio (unilateral o de mutuo acuerdo)",
      "Pensión de alimentos",
      "Tuición y custodia",
      "Régimen de visitas",
      "Violencia intrafamiliar (medidas de protección)",
      "Adopción",
    ],
  },
  {
    slug: "derecho-civil",
    title: "Derecho Civil",
    icon: "file-text",
    short: "Contratos, arrendamientos, herencias y posesión efectiva.",
    description: `
      Redactamos y revisamos contratos para protegerte, gestionamos herencias y
      posesiones efectivas, y defendemos tus derechos en disputas civiles.
    `,
    casos: [
      "Redacción y revisión de contratos",
      "Arrendamientos y cobranzas",
      "Herencias y posesión efectiva",
      "Responsabilidad civil",
      "Deudas y obligaciones",
    ],
  },
  {
    slug: "derecho-penal",
    title: "Derecho Penal",
    icon: "shield",
    short: "Defensa penal, recursos de amparo y protección de derechos.",
    description: `
      Brindamos defensa penal a imputados y representación a víctimas.
      Actuamos desde la primera audiencia con estrategia y firmeza.
    `,
    casos: [
      "Defensa penal (imputados)",
      "Querella y representación de víctimas",
      "Recursos de amparo",
      "Delitos informáticos",
      "Violencia intrafamiliar (denuncia penal)",
    ],
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Me ayudaron con mi divorcio en poco tiempo y siempre me explicaron todo con claridad. Me sentí acompañada en cada paso.",
    name: "María J.",
    case: "Divorcio · Talca",
    rating: 5,
  },
  {
    quote:
      "Logré que me pagaran todo lo que me debían después de un despido injusto. Sin ellas no habría sabido cómo reclamar.",
    name: "Carolina R.",
    case: "Despido injustificado · Curicó",
    rating: 5,
  },
  {
    quote:
      "Me ayudaron a sacar la posesión efectiva de mi madre rápido y sin complicaciones. Muy profesionales y amables.",
    name: "Claudia M.",
    case: "Herencia · Linares",
    rating: 5,
  },
] as const;

export const FAQ = [
  {
    q: "¿La primera consulta tiene costo?",
    a: "No. La primera consulta es completamente gratuita, ya sea por WhatsApp o en nuestras oficinas en Talca.",
  },
  {
    q: "¿Atienden en toda la Región del Maule?",
    a: "Sí, atendemos clientes de Talca, Curicó, Linares, Constitución y toda la región. Muchas consultas las realizamos de forma remota.",
  },
  {
    q: "¿Cuánto tarda un proceso de divorcio?",
    a: "Un divorcio de mutuo acuerdo puede resolverse entre 3 y 6 meses. El unilateral puede tardar más según el caso. Te informamos los tiempos reales antes de comenzar.",
  },
  {
    q: "¿Cómo me contacto en caso de urgencia?",
    a: "Por WhatsApp al +56 9 XXXX XXXX. Respondemos el mismo día en horario hábil y tenemos atención de urgencia para casos de violencia intrafamiliar.",
  },
  {
    q: "¿Cuánto cobran por sus servicios?",
    a: "Los honorarios dependen del tipo y complejidad del caso. Somos transparentes: antes de comenzar te entregamos un presupuesto claro y sin letra chica.",
  },
  {
    q: "¿Trabajan con abogados de turno o representación en juicio?",
    a: "Sí, actuamos como abogadas patrocinantes en todas las instancias del proceso legal, desde la primera audiencia hasta el cierre del caso.",
  },
] as const;
```

---

## 5. Identidad Visual

### Paleta de colores (extraida del logo — vigente)

Las variables se definen en `app/globals.css` via `@theme inline` (Tailwind v4).

```css
/* Brand principal */
--color-stone:          #FBF0EE;   /* fondo rosa claro — bg-stone */
--color-ink:            #1E1E2E;   /* texto principal  — text-ink */
--color-ink-muted:      #4A3040;
--color-ink-faint:      #9A7880;
--color-border:         #E8D0D4;
--color-terracotta:     #C4738A;   /* rosa medio / accent — text-terracotta */
--color-terracotta-dark:#7D1F4B;   /* vino primario — bg-burdeo, bg-terracotta-dark */
--color-burdeo:         #7D1F4B;

/* Paleta Defensa Deudores (seccion premium) */
--color-navy:           #0F1E3C;
--color-navy-mid:       #1A3260;
--color-gold:           #C9A96E;
--color-gold-light:     #E8D5A3;
--color-cream:          #F5F0E8;
```

### Tipografia

- **Display / headings:** Cormorant Garamond (`--font-cormorant`, variable `font-display`)
- **Cuerpo:** Inter (`--font-inter`, variable `font-body`)
- Importados en `app/layout.tsx` via `next/font/google`

### Reglas visuales

- Fondos alternan entre `bg-stone` (#FBF0EE) y `bg-white` en secciones normales
- Seccion `DefensaDeudores` usa paleta propia navy/gold — no mezclar con el brand principal
- Accent color principal: `text-terracotta` (#C4738A)
- CTAs primarios: `bg-burdeo` (#7D1F4B) — texto blanco
- Bordes redondeados: `rounded-xl` para tarjetas, `rounded-full` para badges
- Espaciado de secciones: `py-20 md:py-28`
- **NUNCA** usar sombras excesivas ni gradientes complejos

---

## 6. Secciones del Home (page.tsx)

Construir en este orden exacto:

### 6.1 Navbar
- Logo a la izquierda: "ABOGADAS TALCA" en `font-display`, color `gold`
- Links: Áreas · Nosotras · Blog · Contacto
- CTA derecha: botón `"Consulta gratis"` con fondo `gold`, texto `navy` → abre WhatsApp
- Sticky (pegado al scroll), fondo `navy`, sin transparencias
- Mobile: hamburger menu con drawer lateral

### 6.2 Hero
- Fondo `navy`
- Badge pill superior: `"Estudio jurídico femenino · Talca, Maule"`
- H1 (Playfair Display, blanco): `"Tu problema legal tiene solución."` + segunda línea con `"Nosotras te ayudamos."` en `gold`
- Subtítulo (DM Sans, blanco 75%): descripción en máximo 2 líneas
- Dos botones:
  - Primario verde: `"Consulta gratis por WhatsApp"` → `https://wa.me/${BUSINESS.whatsapp}?text=...`
  - Secundario outline blanco: `"Ver áreas de práctica"` → scroll a sección áreas
- Stats row (3 datos): `+500 clientes atendidos` · `8 años de experiencia` · `98% satisfacción`
- Card derecha con avatares del equipo + estrellas Google

### 6.3 Áreas de Práctica
- Fondo `cream`
- Grid 3×2 de tarjetas blancas con borde sutil
- Cada tarjeta: ícono Lucide en `gold`, título, descripción corta, link `"Consultar →"`
- Última tarjeta CTA oscura: `"¿No encuentras tu caso? Escríbenos"` con fondo `navy`
- Al hacer click en una tarjeta → navega a `/areas/[slug]`

### 6.4 Por Qué Nosotras
- Fondo `navy`
- Grid 2×2 de tarjetas con número grande semitransparente
- 4 diferenciadores:
  1. Trato humano y cercano
  2. Somos abogadas mujeres
  3. Respuesta rápida (mismo día)
  4. Transparencia total (presupuesto previo)

### 6.5 Testimonios
- Fondo `cream-dark`
- 3 tarjetas blancas en grid
- Cada tarjeta: estrellas doradas, cita en cursiva, nombre + caso
- Añadir link a Google Reviews al final de la sección

### 6.6 FAQ
- Fondo `cream`
- Acordeón animado (Framer Motion) con las preguntas de `constants.ts`
- Ícono `+` / `−` en `gold`
- Máximo 6 preguntas visibles

### 6.7 Blog Preview
- Fondo blanco
- Grid de 3 artículos recientes desde Contentlayer
- Cada card: imagen de portada, categoría badge, título, fecha, link `"Leer artículo →"`
- CTA: `"Ver todos los artículos"` → `/blog`

### 6.8 Google Maps + Contacto
- Layout 50/50: mapa a la izquierda, formulario a la derecha
- Formulario con campos: Nombre · Teléfono · Email · Área de consulta (select) · Mensaje
- Submit → `POST /api/contact` → Resend → email a `CONTACT_EMAIL`
- Mostrar estado de éxito/error con animación
- Debajo del formulario: datos de contacto rápido (teléfono, email, horario)

### 6.9 CTA Band
- Fondo `gold`
- H2 `navy`: `"¿Lista para resolver tu problema legal?"`
- Subtítulo: `"La primera consulta es gratis y sin compromiso."`
- Botón `navy` con ícono WhatsApp

### 6.10 Footer
- Fondo `navy-dark`
- Columnas: Logo+descripción · Servicios · Redes sociales · Contacto
- Bottom bar: copyright + links legales
- Logo Instagram con link a `@abogadastalca`

---

## 7. Botón Flotante WhatsApp (WhatsAppButton.tsx)

```typescript
// Siempre visible en esquina inferior derecha
// Comportamiento:
// - Aparece con delay de 2s tras cargar la página (Framer Motion)
// - Tooltip al hover: "¿Necesitas ayuda? Escríbenos"
// - Pulso animado en el ícono (CSS animation)
// - Link: https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(BUSINESS.waMessage)}
// - z-index: 50, position: fixed, bottom-6, right-6
// - Color: #25D366 (verde WhatsApp oficial)
// - En mobile: solo ícono. En desktop: ícono + texto
```

---

## 8. Blog (Contentlayer + MDX)

### Frontmatter requerido por artículo

```mdx
---
title: "Título del artículo"
slug: "url-del-articulo"
date: "2025-01-15"
category: "Derecho de Familia"   # o Laboral, Civil, Penal
excerpt: "Resumen corto que aparece en las cards del blog."
coverImage: "/images/blog/nombre-imagen.jpg"
author: "NOMBRE ABOGADA"
readingTime: "5 min"
---
```

### Categorías permitidas
- `Derecho de Familia`
- `Derecho Laboral`
- `Derecho Civil`
- `Derecho Penal`
- `Consejos Legales`

### Artículos iniciales a crear (contenido de ejemplo)
1. `"¿Qué hacer si me despiden injustamente en Chile?"` — Derecho Laboral
2. `"Pensión de alimentos: cómo calcularla y exigirla"` — Derecho de Familia
3. `"Guía para hacer una posesión efectiva sin complicaciones"` — Derecho Civil

---

## 9. SEO

### Metadata global (app/layout.tsx)
```typescript
export const metadata: Metadata = {
  title: {
    default: "Abogadas Talca — Estudio Jurídico Región del Maule",
    template: "%s | Abogadas Talca",
  },
  description:
    "Abogadas especializadas en derecho de familia, laboral, civil y penal en Talca. Primera consulta gratis. Atendemos en toda la Región del Maule.",
  keywords: [
    "abogadas talca",
    "abogado talca",
    "estudio juridico talca",
    "derecho familia talca",
    "divorcio talca",
    "despido injustificado talca",
    "pension alimenticia maule",
    "abogada maule",
  ],
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://abogadastalca.cl",
    siteName: "Abogadas Talca",
    images: [{ url: "/images/og/og-default.jpg", width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};
```

### Metadata por página de área
Cada `/areas/[slug]` genera su propio title y description basado en `AREAS[slug]`.

### Schema.org (JSON-LD)
Añadir en `app/layout.tsx`:
```typescript
// Tipo: LegalService
{
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Abogadas Talca",
  "address": { "@type": "PostalAddress", "addressLocality": "Talca", "addressRegion": "Maule", "addressCountry": "CL" },
  "telephone": BUSINESS.phone,
  "url": BUSINESS.web,
  "priceRange": "$$",
  "areaServed": "Región del Maule",
}
```

---

## 10. Performance & Accesibilidad

- Todas las imágenes: `next/image` con `alt` descriptivo
- Fonts: `display: swap` para evitar FOUT
- Animaciones con `prefers-reduced-motion` respetado en Framer Motion
- Contraste mínimo AA en todos los textos
- Formulario con `aria-label` y mensajes de error accesibles
- Meta viewport correcto en layout
- Lighthouse target: Performance ≥ 90, Accessibility ≥ 95

---

## 11. Orden de Construcción Sugerido

Seguir este orden para tener algo deployable lo antes posible:

1. `npx create-next-app@latest abogadas-talca --typescript --tailwind --app`
2. Instalar dependencias: `framer-motion lucide-react react-hook-form resend contentlayer next-contentlayer`
3. Configurar `tailwind.config.ts` con paleta de colores y fuentes
4. Crear `lib/constants.ts` con todos los datos (usar TODO donde falten datos reales)
5. Construir layout base: `Navbar` + `Footer` + `WhatsAppButton`
6. Construir `Hero` (sección más importante para conversión)
7. Construir `AreasGrid` + páginas `/areas/[slug]`
8. Construir `WhyUs` + `Testimonials` + `FAQ`
9. Construir formulario de contacto + endpoint `/api/contact`
10. Integrar Google Maps embed
11. Configurar Contentlayer + crear 3 artículos de ejemplo en `/blog`
12. SEO: metadata, JSON-LD, sitemap.xml, robots.txt
13. Deploy en Vercel + configurar dominio `abogadastalca.cl`

---

## 12. Datos Pendientes — Completar Antes de Deploy

> ⚠️ Claude Code debe marcar estas secciones como `TODO` y avisar al desarrollador antes del deploy.

| # | Dato pendiente | Dónde usarlo |
|---|---|---|
| 1 | Nombres reales de las abogadas | `TEAM` en constants.ts, sección Nosotras |
| 2 | Número de WhatsApp Business | `BUSINESS.whatsapp`, botón flotante, CTAs |
| 3 | Email de contacto real | `.env.local`, formulario |
| 4 | Dirección física exacta | Footer, Google Maps, Schema.org |
| 5 | Fotos profesionales del equipo | `/public/images/abogadas/` |
| 6 | API Key de Resend | `.env.local` |
| 7 | API Key de Google Maps | `.env.local` |
| 8 | Bios de cada abogada | `TEAM[n].bio` |
| 9 | Testimonios reales verificados | `TESTIMONIALS` en constants.ts |
| 10 | Imágenes de portada para el blog | `/public/images/blog/` |

---

## 13. Comandos Útiles

```bash
# Desarrollo local
npm run dev

# Build de producción
npm run build

# Verificar tipos
npm run type-check

# Lint
npm run lint

# Deploy a Vercel
vercel --prod
```

---

*Última actualización: generado con Claude para el proyecto Abogadas Talca.*
*Mantener este archivo actualizado a medida que el proyecto evolucione.*