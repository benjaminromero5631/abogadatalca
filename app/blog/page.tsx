import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog";
import { BUSINESS } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog jurídico — Abogadas Talca",
  description:
    "Guías legales prácticas sobre derecho laboral, de familia, civil y penal en Chile. Escritas por abogadas con más de 12 años de experiencia en la Región del Maule.",
  alternates: {
    canonical: `${BUSINESS.web}/blog`,
  },
};

const CATEGORIES = [
  "Derecho Laboral",
  "Derecho de Familia",
  "Derecho Civil",
  "Derecho Penal",
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-stone">
      <div className="bg-ink text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-terracotta text-xs uppercase tracking-widest font-medium mb-4">
            Blog jurídico
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-light mb-4">
            Guías legales prácticas
          </h1>
          <p className="text-white/50 max-w-xl">
            Información clara sobre tus derechos. Sin tecnicismos innecesarios.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {CATEGORIES.map((category) => {
          const posts = BLOG_POSTS.filter((p) => p.category === category);
          if (posts.length === 0) return null;
          return (
            <div key={category} className="mb-16">
              <p className="text-xs text-ink-faint uppercase tracking-widest mb-8 pb-3 border-b border-border">
                {category}
              </p>
              <div className="space-y-10">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-ink-faint text-xs">{post.displayDate}</span>
                      <span className="text-border">·</span>
                      <span className="text-ink-faint text-xs">{post.readingTime} de lectura</span>
                    </div>
                    <h2 className="font-display text-2xl font-medium text-ink group-hover:text-terracotta transition-colors mb-2">
                      {post.title}
                    </h2>
                    <p className="text-ink-faint text-sm leading-relaxed max-w-2xl">
                      {post.excerpt}
                    </p>
                    <span className="inline-block mt-4 text-xs text-terracotta border-b border-terracotta/0 group-hover:border-terracotta pb-0.5 transition-all">
                      Leer artículo
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
