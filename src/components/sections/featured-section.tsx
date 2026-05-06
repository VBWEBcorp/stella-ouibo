'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import { useLang } from '@/hooks/use-lang'

const ease = [0.22, 1, 0.36, 1] as const

export function FeaturedSection() {
  const { t } = useLang()

  return (
    <section className="border-b border-foreground/[0.08] bg-background">
      <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
        {/* Eyebrow centered, TWG-style */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease }}
          className="text-center font-sans text-[10px] font-semibold uppercase tracking-[0.4em] text-foreground/55"
        >
          {t('feat.eyebrow')}
        </motion.p>

        {/* Hero featured image — full-width, capped */}
        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease, delay: 0.1 }}
          className="mx-auto mt-12 max-w-5xl"
        >
          <div className="relative aspect-[16/10] overflow-hidden bg-foreground/[0.04]">
            <Image
              src="https://images.unsplash.com/photo-1503236823255-94609f598e71?auto=format&fit=crop&w=1800&q=90"
              alt={t('feat.role')}
              fill
              sizes="(min-width:1024px) 1024px, 100vw"
              className="object-cover"
            />
          </div>

          <figcaption className="mx-auto mt-6 max-w-3xl text-center">
            <p className="font-display text-[18px] italic leading-tight text-foreground sm:text-[22px]">
              {t('feat.role')}
            </p>
            <p className="mt-2 font-sans text-[10px] font-semibold uppercase tracking-[0.32em] text-foreground/50">
              {t('feat.client')} · {t('feat.context')}
            </p>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  )
}
