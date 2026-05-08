import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { AREAS, BUSINESS } from "@/lib/constants";
import { BLOG_POSTS } from "@/lib/blog";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return AREAS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = AREAS.find((a) => a.slug === slug);
  if (!area) return {};
  return {
    title: area.seoTitle,
    description: area.metaDescription,
    keywords: [...area.keywords],
    openGraph: {
      title: area.seoTitle,
      description: area.metaDescription,
      url: `${BUSINESS.web}/areas/${area.slug}`,
      type: "website",
      locale: "es_CL",
      siteName: BUSINESS.name,
    },
    alternates: {
      canonical: `${BUSINESS.web}/areas/${area.slug}`,
    },
  };
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const area = AREAS.find((a) => a.slug === slug);
  if (!area) notFound();

  const waUrl = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(
    `Hola, quisiera consultar sobre ${area.title}.`
  )}`;

  const relatedPosts = BLOG_POSTS.filter((p) => p.areaSlug === area.slug);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "LegalService",
    name: `${area.title} — ${BUSINESS.name}`,
    description: area.metaDescription,
    provider: {
      "@type": "LegalService",
      name: BUSINESS.name,
      url: BUSINESS.web,
      telephone: BUSINESS.phone,
      areaServed: "Región del Maule, Chile",
    },
    url: `${BUSINESS.web}/areas/${area.slug}`,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: area.title,
      itemListElement: area.casos.map((caso) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: caso },
      })),
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: area.faq.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <div className="min-h-screen bg-stone">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="bg-ink text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/#areas"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={15} /> Volver
          </Link>
          <p className="text-terracotta text-xs uppercase tracking-widest font-medium mb-4">
            Area de practica
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-light mb-4">{area.title}</h1>
          <p className="text-white/50 max-w-xl">{area.short}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 grid md:grid-cols-[1fr_300px] gap-12">
        <div>
          <div className="space-y-4 mb-12">
            {area.longDescription.map((para, i) => (
              <p key={i} className="text-ink leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          <h2 className="text-xs text-ink-faint uppercase tracking-widest mb-6">
            Casos que atendemos
          </h2>
          <ul className="space-y-3 mb-12">
            {area.casos.map((caso) => (
              <li key={caso} className="flex items-start gap-3">
                <CheckCircle size={16} className="text-terracotta mt-0.5 shrink-0" />
                <span className="text-ink-muted text-sm">{caso}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-xs text-ink-faint uppercase tracking-widest mb-6">
            Como funciona el proceso
          </h2>
          <div className="space-y-6 mb-12">
            {area.proceso.map((item, i) => (
              <div key={i} className="flex gap-4">
                <span className="font-display text-3xl font-light text-terracotta leading-none mt-0.5 w-8 shrink-0">
                  {i + 1}
                </span>
                <div>
                  <p className="text-ink text-sm font-medium mb-1">{item.step}</p>
                  <p className="text-ink-faint text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-xs text-ink-faint uppercase tracking-widest mb-6">
            Preguntas frecuentes
          </h2>
          <div className="divide-y divide-border">
            {area.faq.map((item, i) => (
              <details key={i} className="group py-5">
                <summary className="flex justify-between items-start cursor-pointer list-none text-sm text-ink font-medium">
                  <span className="pr-4">{item.q}</span>
                  <span className="text-terracotta shrink-0 transition-transform duration-200 group-open:rotate-45 mt-0.5">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-ink-faint text-sm leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>

          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-12 border-t border-border">
              <h2 className="text-xs text-ink-faint uppercase tracking-widest mb-8">
                Artículos relacionados
              </h2>
              <div className="space-y-8">
                {relatedPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block"
                  >
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-ink-faint text-xs">{post.displayDate}</span>
                      <span className="text-border">·</span>
                      <span className="text-ink-faint text-xs">{post.readingTime} de lectura</span>
                    </div>
                    <h3 className="font-display text-xl font-medium text-ink group-hover:text-terracotta transition-colors mb-1">
                      {post.title}
                    </h3>
                    <p className="text-ink-faint text-sm leading-relaxed">{post.excerpt}</p>
                    <span className="inline-block mt-3 text-xs text-terracotta border-b border-terracotta/0 group-hover:border-terracotta pb-0.5 transition-all">
                      Leer artículo
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        <div>
          <div className="border border-border p-6 sticky top-24">
            <h3 className="font-display text-xl font-light text-ink mb-2">Consulta gratuita</h3>
            <p className="text-ink-faint text-sm mb-6">
              Sin costo. Evaluamos tu caso y te explicamos las opciones reales.
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white w-full py-3 text-sm font-medium transition-colors mb-3"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
            <Link
              href="/contacto"
              className="flex items-center justify-center border border-ink/20 hover:border-ink text-ink w-full py-3 text-sm transition-colors"
            >
              Formulario de contacto
            </Link>
            <p className="text-center text-ink-faint text-xs mt-4">{BUSINESS.hours}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
