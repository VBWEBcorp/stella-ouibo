'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'

interface BlogPostSummary {
  slug: string
  title: string
  excerpt: string
  coverImage: string
  category: string
  author: string
  publishedAt: string
}

interface BlogSettings {
  enabled: boolean
  title: string
  description?: string
  eyebrow?: string
  heroImage?: string
}

const ease = [0.22, 1, 0.36, 1] as const

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

interface Props {
  settings: BlogSettings
  posts: BlogPostSummary[]
}

export default function BlogPageContent({ settings, posts }: Props) {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const categories = useMemo(() => {
    return Array.from(new Set(posts.map((p) => p.category)))
  }, [posts])

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return posts
    return posts.filter((p) => p.category === activeCategory)
  }, [posts, activeCategory])

  if (!settings?.enabled) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center pt-20">
        <p className="font-sans text-sm uppercase tracking-[0.32em] text-foreground/45">
          Blog not available
        </p>
      </div>
    )
  }

  const featured = filtered[0]
  const rest = filtered.slice(1)

  return (
    <div>
      {/* Hero — TWG editorial */}
      <section className="relative isolate overflow-hidden border-b border-foreground/[0.08] pt-16 sm:pt-20 lg:pt-24">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="grid items-end gap-10 lg:grid-cols-12 lg:gap-16"
          >
            <div className="lg:col-span-8">
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.4em] text-foreground/55">
                {settings.eyebrow || 'Blog'}
              </p>
              <h1 className="mt-6 font-display text-6xl font-light italic leading-[0.95] tracking-[-0.03em] text-foreground sm:text-7xl lg:text-[8rem]">
                {settings.title}
              </h1>
            </div>
            {settings.description && (
              <p className="border-l border-foreground/30 pl-5 text-[15px] leading-[1.75] text-foreground/65 sm:text-base lg:col-span-4 lg:pb-4">
                {settings.description}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Category filters */}
      {categories.length > 1 && (
        <div className="sticky top-16 z-30 border-b border-foreground/[0.08] bg-background/85 backdrop-blur-xl sm:top-20 lg:top-24">
          <div className="mx-auto flex max-w-[1440px] items-center gap-2 overflow-x-auto px-6 py-4 sm:px-10 lg:px-16 [&::-webkit-scrollbar]:hidden">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`shrink-0 border px-5 py-2 font-sans text-[10px] font-semibold uppercase tracking-[0.32em] transition-all duration-300 ${
                activeCategory === 'all'
                  ? 'border-foreground bg-foreground text-background'
                  : 'border-foreground/20 text-foreground/60 hover:border-foreground hover:text-foreground'
              }`}
            >
              Tous
            </button>
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActiveCategory(c)}
                className={`shrink-0 border px-5 py-2 font-sans text-[10px] font-semibold uppercase tracking-[0.32em] transition-all duration-300 ${
                  activeCategory === c
                    ? 'border-foreground bg-foreground text-background'
                    : 'border-foreground/20 text-foreground/60 hover:border-foreground hover:text-foreground'
                }`}
              >
                {c}
              </button>
            ))}
            <span className="ml-auto hidden font-sans text-[10px] font-semibold uppercase tracking-[0.32em] text-foreground/40 sm:inline">
              {filtered.length} {filtered.length > 1 ? 'articles' : 'article'}
            </span>
          </div>
        </div>
      )}

      {/* Featured + grid */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-24 lg:px-16 lg:py-32">
          {filtered.length === 0 && (
            <div className="py-32 text-center">
              <p className="font-sans text-sm uppercase tracking-[0.32em] text-foreground/45">
                Aucun article dans cette catégorie pour le moment.
              </p>
            </div>
          )}

          {/* Featured */}
          {featured && (
            <motion.article
              key={featured.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="border-b border-foreground/[0.08] pb-14 lg:pb-20"
            >
              <Link
                href={`/blog/${featured.slug}`}
                className="group grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-foreground/[0.04] lg:aspect-[5/6]">
                  <Image
                    src={featured.coverImage}
                    alt={featured.title}
                    fill
                    sizes="(min-width:1024px) 50vw, 100vw"
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.32em] text-foreground/55">
                      {featured.category}
                    </span>
                    <span aria-hidden className="text-foreground/30">·</span>
                    <span className="font-display text-[13px] italic text-foreground/55">
                      {formatDate(featured.publishedAt)}
                    </span>
                  </div>

                  <h2 className="mt-6 font-display text-[36px] font-light italic leading-[1.05] tracking-[-0.02em] text-foreground sm:text-[44px] lg:text-[56px]">
                    {featured.title}
                  </h2>

                  <p className="mt-6 max-w-xl text-[15px] leading-[1.7] text-foreground/65 sm:text-base">
                    {featured.excerpt}
                  </p>

                  <div className="mt-8 flex items-center justify-between border-t border-foreground/[0.08] pt-6">
                    <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-foreground/55">
                      {featured.author}
                    </span>
                    <span className="inline-flex items-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-foreground transition-all duration-300 group-hover:gap-3">
                      Lire l&apos;article
                      <span aria-hidden>→</span>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          )}

          {/* Rest of posts — TWG grid */}
          {rest.length > 0 && (
            <div className="mt-14 grid gap-10 sm:gap-12 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-16">
              {rest.map((post, i) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease, delay: i * 0.06 }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden bg-foreground/[0.04]">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                        loading="lazy"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    </div>

                    <div className="mt-5 flex items-baseline gap-3">
                      <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.32em] text-foreground/55">
                        {post.category}
                      </span>
                      <span aria-hidden className="text-foreground/30">·</span>
                      <span className="font-display text-[12px] italic text-foreground/55">
                        {formatDate(post.publishedAt)}
                      </span>
                    </div>

                    <h3 className="mt-3 font-display text-[22px] italic leading-[1.15] text-foreground transition-colors group-hover:text-foreground/65 sm:text-[24px]">
                      {post.title}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-[14px] leading-[1.65] text-foreground/55">
                      {post.excerpt}
                    </p>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
