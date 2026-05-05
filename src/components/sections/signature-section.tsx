'use client'

import { motion } from 'framer-motion'

import { useLang } from '@/hooks/use-lang'

const ease = [0.22, 1, 0.36, 1] as const

export function SignatureSection() {
  const { t } = useLang()

  return (
    <section className="relative border-y border-foreground/[0.08] bg-background">
      <div className="mx-auto max-w-[1440px] px-6 py-32 sm:px-10 sm:py-44 lg:px-16 lg:py-56">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease }}
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          {/* Eyebrow */}
          <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.4em] text-foreground/55">
            {t('sig.eyebrow')}
          </p>

          {/* Hairline */}
          <span aria-hidden className="mt-10 h-px w-12 bg-foreground/30" />

          {/* Massive italic signature */}
          <h2 className="mt-12 font-display font-light italic leading-[0.92] tracking-[-0.03em] text-foreground text-[18vw] sm:text-[12vw] lg:text-[8.5vw] xl:text-[8rem]">
            {t('sig.title')}
          </h2>

          {/* Body */}
          <p className="mx-auto mt-14 max-w-xl text-[15px] leading-[1.75] text-foreground/65 sm:text-base">
            {t('sig.body')}
          </p>

          <p className="mt-8 font-sans text-[10px] font-semibold uppercase tracking-[0.32em] text-foreground/45">
            {t('sig.cite')}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
