'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import type { BlogPost } from '@/lib/blog-posts'

const ease = [0.22, 1, 0.36, 1] as const

function estimateReadTime(html: string) {
  const text = html.replace(/<[^>]*>/g, '')
  const words = text.trim().split(/\s+/).length
  return Math.max(1, Math.ceil(words / 200))
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

interface RelatedPost {
  slug: string
  title: string
  excerpt: string
  coverImage: string
  category: string
  publishedAt: string
}

export default function BlogPostContent({
  post,
  related,
}: {
  post: BlogPost
  related: RelatedPost[]
}) {
  const readTime = estimateReadTime(post.content)

  return (
    <article className="bg-background">
      {/* Hero — full bleed cover */}
      <section className="relative isolate overflow-hidden pt-16 sm:pt-20 lg:pt-24">
        <div className="relative h-[60svh] min-h-[420px] w-full overflow-hidden sm:h-[70svh] lg:h-[80svh]">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-background via-background/60 to-transparent" />

          <div className="absolute inset-x-0 bottom-0">
            <div className="mx-auto max-w-[1440px] px-6 pb-12 sm:px-10 sm:pb-16 lg:px-16 lg:pb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease }}
              >
                <div className="flex items-baseline gap-3 text-white">
                  <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.4em]">
                    {post.category}
                  </span>
                  <span aria-hidden className="text-white/40">·</span>
                  <span className="font-display text-[13px] italic text-white/85">
                    {formatDate(post.publishedAt)}
                  </span>
                  <span aria-hidden className="text-white/40">·</span>
                  <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.32em] text-white/85">
                    {readTime} min
                  </span>
                </div>

                <h1 className="mt-6 max-w-4xl font-display text-[40px] font-light italic leading-[1.05] tracking-[-0.02em] text-white sm:text-[56px] lg:text-[72px]">
                  {post.title}
                </h1>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section>
        <div className="mx-auto max-w-3xl px-6 py-16 sm:px-10 sm:py-24 lg:px-0 lg:py-28">
          {/* Back link */}
          <Link
            href="/blog"
            className="mb-12 inline-flex items-center gap-2 font-sans text-[10px] font-semibold uppercase tracking-[0.32em] text-foreground/55 transition-colors hover:text-foreground"
          >
            <span aria-hidden>←</span>
            Tous les articles
          </Link>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="mb-12 border-l border-foreground/30 pl-5 font-display text-[20px] italic leading-[1.5] text-foreground/85 sm:text-[22px]">
              {post.excerpt}
            </p>
          )}

          {/* Author */}
          <div className="mb-14 flex items-center justify-between border-y border-foreground/[0.08] py-5">
            <div>
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.32em] text-foreground/55">
                Article écrit par
              </p>
              <p className="mt-1 font-display text-[18px] italic text-foreground">
                {post.author}
              </p>
            </div>
            <div className="text-right">
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.32em] text-foreground/55">
                Publié le
              </p>
              <p className="mt-1 font-display text-[14px] italic text-foreground/75">
                {formatDate(post.publishedAt)}
              </p>
            </div>
          </div>

          {/* Body — HTML */}
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          {post.tags?.length > 0 && (
            <div className="mt-16 flex flex-wrap items-center gap-2 border-t border-foreground/[0.08] pt-8">
              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.32em] text-foreground/55">
                Tags
              </span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-foreground/15 px-3 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.24em] text-foreground/65"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-foreground/[0.08] bg-background">
          <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32">
            <div className="flex items-end justify-between gap-6 border-b border-foreground/[0.12] pb-8">
              <h2 className="font-sans text-[22px] font-bold uppercase tracking-[-0.01em] text-foreground sm:text-[32px] lg:text-[44px]">
                À lire ensuite
              </h2>
              <Link
                href="/blog"
                className="hidden font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-foreground transition-colors hover:text-foreground/60 sm:inline-flex sm:items-center sm:gap-2"
              >
                Tous les articles <span aria-hidden>→</span>
              </Link>
            </div>

            <div className="mt-12 grid gap-10 md:grid-cols-2 lg:gap-16">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-foreground/[0.04]">
                    <Image
                      src={r.coverImage}
                      alt={r.title}
                      fill
                      sizes="(min-width:768px) 50vw, 100vw"
                      loading="lazy"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="mt-5 flex items-baseline gap-3">
                    <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.32em] text-foreground/55">
                      {r.category}
                    </span>
                    <span aria-hidden className="text-foreground/30">·</span>
                    <span className="font-display text-[12px] italic text-foreground/55">
                      {formatDate(r.publishedAt)}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-[22px] italic leading-[1.15] text-foreground transition-colors group-hover:text-foreground/65 sm:text-[26px]">
                    {r.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="border-t border-foreground/[0.08] bg-foreground/[0.02]">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.4em] text-foreground/55">
                Discutons
              </p>
              <h2 className="mt-5 font-display text-[36px] font-light italic leading-[1.05] tracking-[-0.02em] text-foreground sm:text-[48px] lg:text-[64px]">
                Réservez une session.
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-foreground/65">
                Pour toute demande de booking, de cours ou de collaboration. Réponse sous vingt-quatre heures.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border border-foreground px-7 py-4 font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
            >
              Me contacter
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Article body styling */}
      <style jsx global>{`
        .blog-content {
          font-size: 1rem;
          line-height: 1.85;
          color: var(--foreground);
          opacity: 0.85;
        }
        .blog-content > p:first-of-type::first-letter {
          font-family: var(--font-display);
          font-style: italic;
          font-weight: 400;
          float: left;
          font-size: 4.2rem;
          line-height: 1;
          padding-right: 0.6rem;
          padding-top: 0.45rem;
          color: var(--foreground);
        }
        .blog-content h2 {
          font-family: var(--font-sans);
          font-size: 1.4rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: -0.005em;
          margin-top: 3rem;
          margin-bottom: 1rem;
          padding-bottom: 0.6rem;
          border-bottom: 1px solid var(--hairline);
          color: var(--foreground);
          line-height: 1.2;
        }
        .blog-content h3 {
          font-family: var(--font-display);
          font-size: 1.4rem;
          font-style: italic;
          font-weight: 400;
          margin-top: 2rem;
          margin-bottom: 0.6rem;
          color: var(--foreground);
          line-height: 1.3;
        }
        .blog-content p {
          margin-bottom: 1.4rem;
        }
        .blog-content strong {
          font-weight: 600;
          color: var(--foreground);
          opacity: 1;
        }
        .blog-content em {
          font-family: var(--font-display);
          font-style: italic;
        }
        .blog-content a {
          color: var(--foreground);
          text-decoration: underline;
          text-underline-offset: 4px;
          text-decoration-thickness: 1px;
          transition: opacity 0.2s ease;
        }
        .blog-content a:hover {
          opacity: 0.65;
        }
        .blog-content ul,
        .blog-content ol {
          padding-left: 1.5rem;
          margin-bottom: 1.4rem;
        }
        .blog-content ul { list-style: disc; }
        .blog-content ol { list-style: decimal; }
        .blog-content li {
          margin-bottom: 0.5rem;
        }
        .blog-content blockquote {
          border-left: 1px solid var(--foreground);
          padding-left: 1.5rem;
          margin: 2rem 0;
          font-family: var(--font-display);
          font-style: italic;
          font-size: 1.2rem;
          line-height: 1.5;
          color: var(--foreground);
          opacity: 1;
        }
        .blog-content hr {
          border: none;
          border-top: 1px solid var(--hairline);
          margin: 2.5rem 0;
        }
        .blog-content img {
          max-width: 100%;
          height: auto;
          margin: 2rem 0;
        }
      `}</style>
    </article>
  )
}
