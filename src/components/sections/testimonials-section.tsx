'use client'

import { motion } from 'framer-motion'

import { useLang } from '@/hooks/use-lang'

const ease = [0.22, 1, 0.36, 1] as const

const press = [
  { name: 'Vogue', context: 'China · Beauty Editorial' },
  { name: "L'Oréal", context: 'Paris · Campaign' },
  { name: 'Givenchy', context: 'Beauty · Runway' },
  { name: 'Harcourt', context: 'Magazine · Portrait' },
  { name: 'amfAR', context: 'Cannes · Gala' },
  { name: 'Festival de Cannes', context: '2021 → 2026' },
]

const testimonialKeys = [
  { quote: 'test.1.quote', author: 'test.1.author', role: 'test.1.role' },
  { quote: 'test.2.quote', author: 'test.2.author', role: 'test.2.role' },
  { quote: 'test.3.quote', author: 'test.3.author', role: 'test.3.role' },
]

export function TestimonialsSection() {
  const { t } = useLang()

  return (
    <section className="border-b border-foreground/[0.08] bg-background">
      <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
        {/* Header — TWG */}
        <div className="flex items-end justify-between gap-6 border-b border-foreground/[0.12] pb-8">
          <h2 className="font-sans text-[28px] font-bold uppercase tracking-[-0.01em] text-foreground sm:text-[40px] lg:text-[56px]">
            {t('press.eyebrow')}
          </h2>
          <span className="hidden font-sans text-[10px] font-semibold uppercase tracking-[0.32em] text-foreground/45 sm:inline">
            Trusted houses
          </span>
        </div>

        {/* Press logos grid */}
        <div className="mt-12 grid grid-cols-2 gap-px bg-foreground/[0.08] sm:grid-cols-3 lg:grid-cols-6 lg:mt-16">
          {press.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease, delay: i * 0.05 }}
              className="group flex aspect-[4/3] flex-col items-center justify-center gap-2 bg-background px-4 py-6 transition-colors hover:bg-foreground/[0.02]"
            >
              <span className="font-display text-2xl font-light italic text-foreground/85 transition-colors group-hover:text-foreground sm:text-3xl">
                {p.name}
              </span>
              <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.28em] text-foreground/40">
                {p.context}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-24 grid gap-12 sm:mt-32 lg:grid-cols-3 lg:gap-16">
          {testimonialKeys.map((tt, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease, delay: i * 0.08 }}
              className="relative"
            >
              <span aria-hidden className="font-display text-7xl leading-none text-foreground/15">
                &ldquo;
              </span>
              <blockquote className="mt-2 font-display text-xl leading-[1.5] italic text-foreground sm:text-[1.4rem]">
                {t(tt.quote)}
              </blockquote>
              <figcaption className="mt-8 flex items-baseline gap-3 border-t border-foreground/[0.08] pt-4">
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground">
                  {t(tt.author)}
                </span>
                <span aria-hidden className="text-foreground/30">·</span>
                <span className="font-display text-[13px] italic text-foreground/55">
                  {t(tt.role)}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
