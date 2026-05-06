'use client'

import { motion } from 'framer-motion'

import { useLang } from '@/hooks/use-lang'

const ease = [0.22, 1, 0.36, 1] as const

const audienceKeys = [
  'aud.1',
  'aud.2',
  'aud.3',
  'aud.4',
  'aud.5',
  'aud.6',
  'aud.7',
  'aud.8',
]

export function AudienceSection() {
  const { t } = useLang()

  return (
    <section className="border-b border-foreground/[0.08] bg-background">
      <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
        {/* Header — TWG */}
        <div className="flex items-end justify-between gap-6 border-b border-foreground/[0.12] pb-8">
          <h2 className="font-sans text-[28px] font-bold uppercase tracking-[-0.01em] text-foreground sm:text-[40px] lg:text-[56px]">
            {t('aud.title')}
          </h2>
          <span className="hidden font-sans text-[10px] font-semibold uppercase tracking-[0.32em] text-foreground/45 sm:inline">
            {t('aud.eyebrow')}
          </span>
        </div>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease }}
          className="mt-10 max-w-2xl text-[15px] leading-[1.7] text-foreground/65 sm:text-base"
        >
          {t('aud.intro')}
        </motion.p>

        {/* List — large editorial */}
        <ul className="mt-14 grid grid-cols-1 gap-px bg-foreground/[0.08] sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {audienceKeys.map((k, i) => (
            <motion.li
              key={k}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease, delay: (i % 4) * 0.05 }}
              className="group flex items-center justify-between gap-4 bg-background px-7 py-7 transition-colors hover:bg-foreground/[0.02]"
            >
              <div className="flex items-baseline gap-5">
                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.32em] text-foreground/35">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-display text-[19px] italic leading-tight text-foreground sm:text-[22px]">
                  {t(k)}
                </span>
              </div>
              <span className="font-sans text-foreground/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-foreground">
                →
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
