import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { BLOG_POSTS, type ContentBlock } from "@/lib/blog";
import { BUSINESS } from "@/lib/constants";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.seoTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.seoTitle,
      description: post.metaDescription,
      url: `${BUSINESS.web}/blog/${post.slug}`,
      type: "article",
      locale: "es_CL",
      siteName: BUSINESS.name,
    },
    alternates: {
      canonical: `${BUSINESS.web}/blog/${post.slug}`,
    },
  };
}

function renderBlock(block: ContentBlock, i: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          key={i}
          className="font-display text-2xl font-medium text-ink mt-10 mb-4"
        >
          {block.text}
        </h2>
      );
    case "p":
      return (
        <p key={i} className="text-ink-muted leading-relaxed mb-4">
          {block.text}
        </p>
      );
    case "ul":
      return (
        <ul key={i} className="space-y-2 mb-6 mt-2">
          {block.items.map((item, j) => (
            <li key={j} className="flex items-start gap-3">
              <CheckCircle size={14} className="text-terracotta mt-1 shrink-0" />
              <span className="text-ink-muted text-sm leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      );
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const waUrl = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(
    `Hola, leí el artículo sobre ${post.title} y quisiera consultar mi caso.`
  )}`;

  const relatedPosts = BLOG_POSTS.filter(
    (p) => p.areaSlug === post.areaSlug && p.slug !== post.slug
  );

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.seoTitle,
    description: post.metaDescription,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "LegalService",
      name: BUSINESS.name,
      url: BUSINESS.web,
    },
    datePublished: post.displayDate,
    url: `${BUSINESS.web}/blog/${post.slug}`,
    keywords: post.keywords.join(", "),
  };

  return (
    <div className="min-h-screen bg-stone">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <div className="bg-ink text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={15} /> Blog jurídico
          </Link>
          <p className="text-terracotta text-xs uppercase tracking-widest font-medium mb-4">
            {post.category} · {post.readingTime} de lectura
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-light mb-4 max-w-2xl">
            {post.title}
          </h1>
          <p className="text-white/40 text-sm">
            {post.author} · {post.displayDate}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 grid md:grid-cols-[1fr_280px] gap-12">
        <article>
          <p className="text-ink leading-relaxed mb-8 text-lg border-l-2 border-terracotta pl-4">
            {post.excerpt}
          </p>
          {post.content.map((block, i) => renderBlock(block, i))}

          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-12 border-t border-border">
              <p className="text-xs text-ink-faint uppercase tracking-widest mb-8">
                Más artículos de {post.category}
              </p>
              <div className="space-y-8">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group block"
                  >
                    <p className="text-ink-faint text-xs mb-1">{related.displayDate}</p>
                    <h3 className="font-display text-xl font-medium text-ink group-hover:text-terracotta transition-colors mb-1">
                      {related.title}
                    </h3>
                    <p className="text-ink-faint text-sm">{related.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>

        <div>
          <div className="border border-border p-6 sticky top-24">
            <h3 className="font-display text-xl font-light text-ink mb-2">
              Consulta gratuita
            </h3>
            <p className="text-ink-faint text-sm mb-2">
              ¿Tu caso se parece a lo que describes aquí?
            </p>
            <p className="text-ink-faint text-sm mb-6">
              La primera consulta es gratis y sin compromiso.
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
              Consultar por WhatsApp
            </a>
            <Link
              href={`/areas/${post.areaSlug}`}
              className="flex items-center justify-center border border-ink/20 hover:border-ink text-ink w-full py-3 text-sm transition-colors"
            >
              Ver area de practica
            </Link>
            <p className="text-center text-ink-faint text-xs mt-4">
              {BUSINESS.hours}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
