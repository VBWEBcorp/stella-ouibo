'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { useLang } from '@/hooks/use-lang'

const ease = [0.22, 1, 0.36, 1] as const
const INTERVAL = 5500

const slides = [
  {
    src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1920&q=85',
    labelKey: 'hero.slide.1',
  },
  {
    src: 'https://images.unsplash.com/photo-1503236823255-94609f598e71?auto=format&fit=crop&w=1920&q=85',
    labelKey: 'hero.slide.2',
  },
  {
    src: 'https://images.unsplash.com/photo-1521577352947-9bb58764b69a?auto=format&fit=crop&w=1920&q=85',
    labelKey: 'hero.slide.3',
  },
  {
    src: 'https://images.unsplash.com/photo-1525258946800-98cfd641d0de?auto=format&fit=crop&w=1920&q=85',
    labelKey: 'hero.slide.4',
  },
]

function HeroLangToggle() {
  const { lang, setLang } = useLang()
  return (
    <div className="flex items-center gap-2 font-display text-[10px] uppercase tracking-[0.32em]">
      <button
        type="button"
        onClick={() => setLang('fr')}
        aria-pressed={lang === 'fr'}
        className={`transition-colors ${
          lang === 'fr'
            ? 'text-gold'
            : 'text-white/45 hover:text-white'
        }`}
      >
        FR
      </button>
      <span aria-hidden className="text-white/20">/</span>
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        className={`transition-colors ${
          lang === 'en'
            ? 'text-gold'
            : 'text-white/45 hover:text-white'
        }`}
      >
        EN
      </button>
    </div>
  )
}

export function HeroSection() {
  const { t } = useLang()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, INTERVAL)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-background pt-16 sm:pt-20 lg:pt-24">
      {/* Image stack */}
      <div className="absolute inset-0" aria-hidden>
        <AnimatePresence initial={false}>
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease }}
            className="absolute inset-0"
          >
            <Image
              src={slides[current].src}
              alt=""
              fill
              sizes="100vw"
              priority={current === 0}
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/0 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/10 to-black/40" />
      </div>

      <div className="pointer-events-none absolute inset-x-8 inset-y-24 hidden border border-white/[0.18] lg:block" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-[1440px] flex-col justify-between px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-20">
        {/* Top meta bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
          className="flex items-center justify-between gap-6 font-display text-[10px] uppercase tracking-[0.32em] text-white/55"
        >
          <span>{t('hero.issue')}</span>
          <div className="flex items-center gap-5">
            <span className="hidden sm:inline">{t('hero.location')}</span>
            <span aria-hidden className="hidden text-white/20 sm:inline">·</span>
            <HeroLangToggle />
          </div>
        </motion.div>

        {/* Center title */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.35 }}
          className="max-w-[14ch] lg:max-w-[16ch]"
        >
          <p className="font-display text-[10px] uppercase tracking-[0.42em] text-gold">
            {t('hero.eyebrow')}
          </p>
          <h1 className="mt-7 font-display text-[14vw] font-light leading-[0.95] tracking-[-0.035em] text-white sm:text-[10vw] lg:text-[5.6vw] xl:text-[5rem] 2xl:text-[5.4rem]">
            <span className="block whitespace-nowrap">{t('hero.title.line1')}</span>
            <span className="block whitespace-nowrap">
              {t('hero.title.line2')}{' '}
              <span className="italic text-gold">{t('hero.title.italic')}</span>
              <span className="text-gold">.</span>
            </span>
          </h1>
          <p className="mt-8 max-w-md text-[15px] leading-relaxed text-white/70 sm:text-base">
            {t('hero.subtitle')}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 bg-gold px-8 py-4 font-display text-[11px] font-medium uppercase tracking-[0.32em] text-background transition-all duration-300 hover:bg-white hover:text-black"
            >
              {t('hero.cta.book')}
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/gallery"
              className="group inline-flex items-center justify-center gap-3 border border-white/40 px-8 py-4 font-display text-[11px] font-medium uppercase tracking-[0.32em] text-white transition-all duration-300 hover:border-gold hover:text-gold"
            >
              {t('hero.cta.portfolio')}
            </Link>
          </div>
        </motion.div>

        {/* Bottom slide indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.7 }}
          className="flex items-end justify-between gap-6"
        >
          <div className="hidden flex-col gap-3 sm:flex">
            <p className="font-display text-[10px] uppercase tracking-[0.32em] text-white/45">
              {t('hero.nowShowing')}
            </p>
            <AnimatePresence mode="wait">
              <motion.p
                key={current}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.4, ease }}
                className="font-display text-sm uppercase tracking-[0.18em] text-white"
              >
                {t(slides[current].labelKey)}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Slide ${i + 1}`}
                onClick={() => setCurrent(i)}
                className="group flex flex-col items-center gap-2"
              >
                <span
                  className={`block h-[2px] transition-all duration-500 ${
                    i === current
                      ? 'w-12 bg-gold'
                      : 'w-6 bg-white/30 group-hover:bg-white/60'
                  }`}
                />
                <span
                  className={`font-display text-[10px] tracking-[0.24em] transition-colors ${
                    i === current ? 'text-white' : 'text-white/35'
                  }`}
                >
                  0{i + 1}
                </span>
              </button>
            ))}
          </div>

          <div className="hidden text-right font-display text-[10px] uppercase tracking-[0.32em] text-white/45 sm:block">
            <p>{t('hero.scroll')}</p>
            <p className="mt-2 text-white/70">↓</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
