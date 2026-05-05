'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import { useLang } from '@/hooks/use-lang'

const ease = [0.22, 1, 0.36, 1] as const

export function CtaSection() {
  const { t } = useLang()

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="https://images.unsplash.com/photo-1503236823255-94609f598e71?auto=format&fit=crop&w=1920&q=85"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-background" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 py-28 sm:px-10 sm:py-36 lg:px-16 lg:py-44">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease }}
          className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16"
        >
          <div className="lg:col-span-7">
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.4em] text-white/70">
              {t('cta.eyebrow')}
            </p>
            <h2 className="mt-6 font-display text-5xl font-light italic leading-[0.98] tracking-[-0.03em] text-white sm:text-7xl lg:text-[6.5rem]">
              {t('cta.title.line1')}
              <br />
              <span className="font-normal">{t('cta.title.italic')}</span>
              <span className="not-italic">{t('cta.title.dot')}</span>
            </h2>
            <p className="mt-8 max-w-lg text-[15px] leading-relaxed text-white/70 sm:text-base">
              {t('cta.desc')}
            </p>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-white px-9 py-5 font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-black transition-all duration-300 hover:bg-white/90"
              >
                {t('cta.btn')}
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
              <a
                href="mailto:stella.ceriani.mua@gmail.com"
                className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70 transition-colors hover:text-white"
              >
                stella.ceriani.mua@gmail.com
              </a>
            </div>
          </div>

          <div className="hidden lg:col-span-5 lg:block">
            <div className="relative ml-auto max-w-sm border border-white/[0.18] bg-black/40 p-10 backdrop-blur-md">
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.32em] text-white/55">
                {t('cta.directLine')}
              </p>
              <p className="mt-5 font-display text-3xl leading-tight text-white">
                +33 6 35 29 76 89
              </p>
              <p className="mt-8 font-sans text-[10px] font-semibold uppercase tracking-[0.32em] text-white/55">
                {t('cta.languages')}
              </p>
              <p className="mt-3 font-display text-xl italic text-white/85">
                {t('cta.langValue')}
              </p>
              <p className="mt-8 font-sans text-[10px] font-semibold uppercase tracking-[0.32em] text-white/55">
                {t('cta.basedIn')}
              </p>
              <p className="mt-3 font-display text-xl italic text-white/85">
                {t('cta.basedValue')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
