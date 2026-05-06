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
    clientKey: 'hero.slide.1.client',
    roleKey: 'hero.slide.1.role',
  },
  {
    src: 'https://images.unsplash.com/photo-1503236823255-94609f598e71?auto=format&fit=crop&w=1920&q=85',
    clientKey: 'hero.slide.2.client',
    roleKey: 'hero.slide.2.role',
  },
  {
    src: 'https://images.unsplash.com/photo-1521577352947-9bb58764b69a?auto=format&fit=crop&w=1920&q=85',
    clientKey: 'hero.slide.3.client',
    roleKey: 'hero.slide.3.role',
  },
  {
    src: 'https://images.unsplash.com/photo-1525258946800-98cfd641d0de?auto=format&fit=crop&w=1920&q=85',
    clientKey: 'hero.slide.4.client',
    roleKey: 'hero.slide.4.role',
  },
]

const thumbnails = slides.map((s) => ({
  src: s.src.replace('w=1920', 'w=200'),
}))

function HeroLangToggle() {
  const { lang, setLang } = useLang()
  return (
    <div className="flex items-center gap-2 font-sans text-[10px] font-semibold uppercase tracking-[0.32em]">
      <button
        type="button"
        onClick={() => setLang('fr')}
        aria-pressed={lang === 'fr'}
        className={`transition-colors ${
          lang === 'fr' ? 'text-white' : 'text-white/40 hover:text-white/80'
        }`}
      >
        FR
      </button>
      <span aria-hidden className="text-white/25">/</span>
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        className={`transition-colors ${
          lang === 'en' ? 'text-white' : 'text-white/40 hover:text-white/80'
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
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-background">
      {/* Image stack */}
      <div className="absolute inset-0" aria-hidden>
        <AnimatePresence initial={false}>
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.04 }}
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

        {/* Dark overlay : voile global + renforts haut/bas pour lisibilité */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/65 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
      </div>

      <div className="relative flex min-h-[100svh] flex-col">
        {/* Top spacing for fixed header */}
        <div className="h-16 sm:h-20 lg:h-24" />

        {/* Top meta strip — sous le header, façon press release */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
          className="border-y border-white/[0.12] bg-black/15 backdrop-blur-sm"
        >
          <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-6 py-3 font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-white/80 sm:px-10 lg:px-16">
            <span>{t('hero.headerLabel')}</span>
            <span className="hidden md:inline">{t('hero.eyebrow')}</span>
            <div className="flex items-center gap-5">
              <span className="hidden text-white/55 sm:inline">{t('hero.location')}</span>
              <HeroLangToggle />
            </div>
          </div>
        </motion.div>

        {/* Center : massive editorial title */}
        <div className="flex flex-1 items-center justify-center px-6 sm:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.35 }}
            className="text-center"
          >
            <h1 className="font-display font-light italic leading-[0.92] tracking-[-0.04em] text-white text-[20vw] sm:text-[16vw] lg:text-[10vw] xl:text-[9rem]">
              {t('hero.title.line1')}
              <br />
              {t('hero.title.line2')}
              <span className="not-italic">{t('hero.title.dot')}</span>
            </h1>
            <p className="mx-auto mt-10 max-w-md text-[15px] leading-[1.6] text-white/75 sm:text-base">
              {t('hero.subtitle')}
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-white px-9 py-4 font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-black transition-all duration-300 hover:bg-white/90"
              >
                {t('hero.cta.book')}
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/gallery"
                className="group inline-flex items-center justify-center gap-3 border border-white/40 px-9 py-4 font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-white transition-all duration-300 hover:border-white hover:bg-white/10"
              >
                {t('hero.cta.portfolio')}
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom : caption + numbered thumbnails (TWG signature) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.6 }}
          className="px-6 pb-8 sm:px-10 sm:pb-10 lg:px-16 lg:pb-12"
        >
          {/* Now showing caption — TWG style */}
          <div className="mx-auto max-w-[1440px]">
            <div className="flex items-end justify-between gap-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4, ease }}
                  className="text-white"
                >
                  <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em]">
                    {t('hero.captionName')}{' '}
                    <span className="font-light text-white/55">{t('hero.captionRole')},</span>{' '}
                    <span className="font-display italic font-normal text-white">
                      {t(slides[current].clientKey)}
                    </span>
                  </p>
                  <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.28em] text-white/50">
                    {t(slides[current].roleKey)}
                  </p>
                </motion.div>
              </AnimatePresence>

              <span className="hidden font-sans text-[10px] uppercase tracking-[0.28em] text-white/45 md:inline">
                {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </span>
            </div>

            {/* Thumbnails strip */}
            <div className="mt-6 flex items-center gap-3 sm:gap-4">
              {slides.map((s, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Slide ${i + 1}`}
                  onClick={() => setCurrent(i)}
                  className={`group relative flex-1 transition-all duration-500 ${
                    i === current ? 'opacity-100' : 'opacity-50 hover:opacity-80'
                  }`}
                >
                  <div className={`relative aspect-[4/3] overflow-hidden border ${
                    i === current ? 'border-white' : 'border-white/20'
                  }`}>
                    <Image
                      src={s.src.replace('w=1920', 'w=300')}
                      alt=""
                      fill
                      sizes="160px"
                      className="object-cover"
                    />
                  </div>
                  <span className={`mt-2 block font-sans text-[10px] font-semibold uppercase tracking-[0.28em] transition-colors ${
                    i === current ? 'text-white' : 'text-white/40'
                  }`}>
                    0{i + 1}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
