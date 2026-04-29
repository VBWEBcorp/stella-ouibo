'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import Image from 'next/image'
import { useMemo, useState } from 'react'

interface GalleryImage {
  _id: string
  title: string
  description?: string
  imageUrl: string
  category?: string
}

interface GallerySettings {
  enabled: boolean
  title: string
  description?: string
  eyebrow?: string
  heroImage?: string
}

const ease = [0.22, 1, 0.36, 1] as const

interface Props {
  initialSettings: GallerySettings
  initialImages: GalleryImage[]
}

export default function GalleryContent({ initialSettings, initialImages }: Props) {
  const [settings] = useState<GallerySettings>(initialSettings)
  const [images] = useState<GalleryImage[]>(initialImages)
  const [filter, setFilter] = useState<string>('All')
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null)

  const categories = useMemo(() => {
    const set = new Set<string>()
    images.forEach((img) => {
      if (img.category) set.add(img.category)
    })
    return ['All', ...Array.from(set)]
  }, [images])

  const filtered = useMemo(() => {
    if (filter === 'All') return images
    return images.filter((img) => img.category === filter)
  }, [images, filter])

  if (!settings?.enabled) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center pt-20">
        <p className="font-display text-sm uppercase tracking-[0.32em] text-foreground/50">
          Portfolio not available
        </p>
      </div>
    )
  }

  return (
    <div>
      {/* Hero — magazine cover */}
      <section className="relative isolate overflow-hidden pt-16 sm:pt-20 lg:pt-24">
        <div className="absolute inset-0" aria-hidden>
          {settings.heroImage ? (
            <Image
              src={settings.heroImage}
              alt=""
              fill
              sizes="100vw"
              priority
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-background" />
          )}
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/0 to-background" />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="max-w-3xl"
          >
            <p className="font-display text-[10px] uppercase tracking-[0.4em] text-gold">
              {settings.eyebrow || 'Portfolio'}
            </p>
            <h1 className="mt-6 font-display text-5xl leading-[0.98] tracking-[-0.03em] text-white sm:text-7xl lg:text-[7rem]">
              {settings.title}
            </h1>
            {settings.description && (
              <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-white/75 sm:text-base">
                {settings.description}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-30 border-y border-foreground/[0.08] bg-background/85 backdrop-blur-xl sm:top-20 lg:top-24">
        <div className="mx-auto flex max-w-[1440px] items-center gap-2 overflow-x-auto px-6 py-4 sm:px-10 lg:px-16 [&::-webkit-scrollbar]:hidden">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              className={`shrink-0 border px-5 py-2 font-display text-[11px] uppercase tracking-[0.32em] transition-all duration-300 ${
                filter === c
                  ? 'border-gold bg-gold text-background'
                  : 'border-foreground/[0.12] text-foreground/60 hover:border-foreground hover:text-foreground'
              }`}
            >
              {c}
            </button>
          ))}
          <span className="ml-auto hidden font-display text-[10px] uppercase tracking-[0.32em] text-foreground/40 sm:inline">
            {filtered.length} {filtered.length > 1 ? 'works' : 'work'}
          </span>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          {filtered.length > 0 ? (
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5"
            >
              {filtered.map((image, i) => {
                const tall = i % 5 === 1 || i % 5 === 4
                return (
                  <motion.button
                    key={image._id}
                    type="button"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease, delay: (i % 6) * 0.05 }}
                    onClick={() => setLightbox(image)}
                    className={`group relative block w-full overflow-hidden bg-foreground/[0.04] text-left ${
                      tall ? 'aspect-[3/4] lg:row-span-2' : 'aspect-[4/5]'
                    }`}
                  >
                    <Image
                      src={image.imageUrl}
                      alt={image.title}
                      fill
                      sizes="(min-width:1024px) 33vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background via-background/0 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      {image.category && (
                        <span className="font-display text-[10px] uppercase tracking-[0.32em] text-gold">
                          {image.category}
                        </span>
                      )}
                      <h3 className="mt-2 font-display text-lg text-foreground">
                        {image.title}
                      </h3>
                      {image.description && (
                        <p className="mt-1 text-[12px] text-foreground/60 line-clamp-2">
                          {image.description}
                        </p>
                      )}
                    </div>
                    {/* Always-on category tag */}
                    {image.category && (
                      <span className="absolute left-3 top-3 border border-white/30 bg-black/40 px-3 py-1 font-display text-[9px] uppercase tracking-[0.32em] text-white backdrop-blur-md transition-opacity duration-300 group-hover:opacity-0">
                        {image.category}
                      </span>
                    )}
                  </motion.button>
                )
              })}
            </motion.div>
          ) : (
            <div className="py-32 text-center">
              <p className="font-display text-sm uppercase tracking-[0.32em] text-foreground/45">
                No works in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4 backdrop-blur-md sm:p-8"
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                setLightbox(null)
              }}
              aria-label="Fermer"
              className="absolute right-5 top-5 flex size-12 items-center justify-center border border-white/30 text-foreground transition-colors hover:border-gold hover:text-gold sm:right-8 sm:top-8"
            >
              <X className="size-5" />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease }}
              className="relative grid w-full max-w-6xl gap-0 lg:grid-cols-[1.5fr_1fr]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-foreground/[0.04] lg:aspect-auto lg:max-h-[85vh]">
                <Image
                  src={lightbox.imageUrl}
                  alt={lightbox.title}
                  fill
                  sizes="80vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-end border-l border-foreground/[0.08] bg-background p-8 sm:p-10">
                {lightbox.category && (
                  <span className="font-display text-[10px] uppercase tracking-[0.4em] text-gold">
                    {lightbox.category}
                  </span>
                )}
                <h3 className="mt-5 font-display text-3xl leading-tight text-foreground sm:text-4xl">
                  {lightbox.title}
                </h3>
                {lightbox.description && (
                  <p className="mt-5 text-[15px] leading-relaxed text-foreground/65">
                    {lightbox.description}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
