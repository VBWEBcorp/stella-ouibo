'use client'

import { animate, motion, useMotionValue, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'

import { useLang } from '@/hooks/use-lang'

const images = [
  { src: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=900&q=85', label: 'Red lips · Signature' },
  { src: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=900&q=85', label: 'Smoky eye · Editorial' },
  { src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=85', label: 'Backstage · Cannes' },
  { src: 'https://images.unsplash.com/photo-1525258946800-98cfd641d0de?auto=format&fit=crop&w=900&q=85', label: 'Couture · Paris' },
  { src: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=900&q=85', label: 'Nude shades · Beauty' },
  { src: 'https://images.unsplash.com/photo-1503236823255-94609f598e71?auto=format&fit=crop&w=900&q=85', label: 'Portrait · Harcourt' },
  { src: 'https://images.unsplash.com/photo-1496440737103-cd596325d314?auto=format&fit=crop&w=900&q=85', label: 'Glam · Premiere' },
  { src: 'https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=900&q=85', label: 'Fashion · Vogue' },
]

export function GalleryCarousel() {
  const { t } = useLang()
  const trackRef = useRef<HTMLDivElement>(null)
  const [maxScroll, setMaxScroll] = useState(0)
  const x = useMotionValue(0)
  const progress = useTransform(x, [0, -maxScroll || -1], [0, 1])

  useEffect(() => {
    function measure() {
      if (!trackRef.current) return
      setMaxScroll(Math.max(0, trackRef.current.scrollWidth - trackRef.current.clientWidth))
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const slide = useCallback(
    (dir: -1 | 1) => {
      const current = x.get()
      const step = 360
      const next = Math.max(-maxScroll, Math.min(0, current - dir * step))
      animate(x, next, { type: 'spring', stiffness: 280, damping: 35 })
    },
    [x, maxScroll]
  )

  return (
    <section className="border-b border-foreground/[0.08] bg-background">
      <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="font-display text-[10px] uppercase tracking-[0.4em] text-gold">
              {t('gal.eyebrow')}
            </p>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-[3.6rem]">
              {t('gal.title.line1')}
              <br /> <span className="italic text-gold">{t('gal.title.italic')}</span>.
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => slide(-1)}
              aria-label="Précédent"
              className="flex size-12 items-center justify-center border border-foreground/30 text-foreground transition-all duration-300 hover:border-gold hover:text-gold"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => slide(1)}
              aria-label="Suivant"
              className="flex size-12 items-center justify-center border border-foreground/30 text-foreground transition-all duration-300 hover:border-gold hover:text-gold"
            >
              →
            </button>
          </div>
        </div>

        {/* Track */}
        <div className="mt-14 overflow-hidden lg:mt-20" role="region" aria-label="Galerie">
          <motion.div
            ref={trackRef}
            style={{ x }}
            drag="x"
            dragConstraints={{ left: -maxScroll, right: 0 }}
            dragElastic={0.06}
            className="flex cursor-grab gap-5 active:cursor-grabbing"
          >
            {images.map((img, i) => (
              <div
                key={i}
                className="group relative shrink-0"
                style={{ width: 'min(78vw, 340px)' }}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.label}
                    fill
                    sizes="340px"
                    loading="lazy"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-black/15 transition-opacity duration-500 group-hover:bg-black/0" />
                </div>
                <div className="mt-4 flex items-baseline justify-between">
                  <span className="font-display text-[11px] uppercase tracking-[0.28em] text-foreground/70">
                    {img.label}
                  </span>
                  <span className="font-display text-[10px] tracking-[0.24em] text-foreground/30">
                    0{i + 1}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Progress + CTA */}
        <div className="mt-12 flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          <div className="h-px w-full max-w-xs overflow-hidden bg-foreground/[0.08]">
            <motion.div
              className="h-full origin-left bg-gold"
              style={{ scaleX: progress }}
            />
          </div>
          <Link
            href="/gallery"
            className="group inline-flex items-center gap-3 font-display text-[11px] font-medium uppercase tracking-[0.32em] text-foreground transition-colors hover:text-gold"
          >
            {t('gal.cta')}
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
