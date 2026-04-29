'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import { useLang } from '@/hooks/use-lang'

const ease = [0.22, 1, 0.36, 1] as const

const services = [
  {
    number: '01',
    titleKey: 'svc.1.title',
    subtitleKey: 'svc.1.subtitle',
    descKey: 'svc.1.desc',
    image: 'https://images.unsplash.com/photo-1521577352947-9bb58764b69a?auto=format&fit=crop&w=900&q=85',
  },
  {
    number: '02',
    titleKey: 'svc.2.title',
    subtitleKey: 'svc.2.subtitle',
    descKey: 'svc.2.desc',
    image: 'https://images.unsplash.com/photo-1503236823255-94609f598e71?auto=format&fit=crop&w=900&q=85',
  },
  {
    number: '03',
    titleKey: 'svc.3.title',
    subtitleKey: 'svc.3.subtitle',
    descKey: 'svc.3.desc',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=85',
  },
  {
    number: '04',
    titleKey: 'svc.4.title',
    subtitleKey: 'svc.4.subtitle',
    descKey: 'svc.4.desc',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=900&q=85',
  },
]

export function ServicesPreview() {
  const { t, lang } = useLang()

  return (
    <section className="border-b border-foreground/[0.08] bg-background">
      <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="font-display text-[10px] uppercase tracking-[0.4em] text-gold">
              {t('svc.eyebrow')}
            </p>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-[3.8rem]">
              {lang === 'en' ? (
                <>
                  {t('svc.title.line1')}{' '}
                  <span className="italic text-gold">{t('svc.title.italic')}</span>
                  <br /> {t('svc.title.line2')}
                </>
              ) : (
                <>
                  {t('svc.title.line1')}{' '}
                  <span className="italic text-gold">{t('svc.title.italic')}</span>
                  <br /> {t('svc.title.line2')}
                </>
              )}
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-foreground/55">
            {t('svc.intro')}
          </p>
        </div>

        {/* Grid services */}
        <div className="mt-16 grid gap-px bg-foreground/[0.08] sm:grid-cols-2 lg:mt-20">
          {services.map((s, i) => (
            <motion.div
              key={s.titleKey}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease, delay: i * 0.08 }}
              className="group relative overflow-hidden bg-background"
            >
              <Link href="/services" className="block">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    sizes="(min-width:640px) 50vw, 100vw"
                    className="object-cover grayscale-[40%] transition-all duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-black/25 transition-opacity duration-500 group-hover:bg-black/0" />
                </div>

                <div className="flex items-start gap-6 px-6 py-7 sm:gap-8 sm:px-8 sm:py-9">
                  <span className="font-display text-[11px] uppercase tracking-[0.32em] text-gold">
                    {s.number}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-2xl leading-tight text-foreground sm:text-[1.7rem]">
                        {t(s.titleKey)}
                      </h3>
                      <span className="font-display text-[10px] uppercase tracking-[0.28em] text-foreground/40 transition-colors group-hover:text-gold">
                        {t(s.subtitleKey)}
                      </span>
                    </div>
                    <p className="mt-3 text-[14px] leading-relaxed text-foreground/55 sm:text-[15px]">
                      {t(s.descKey)}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="group inline-flex items-center gap-3 border border-foreground/30 px-8 py-4 font-display text-[11px] font-medium uppercase tracking-[0.32em] text-foreground transition-all duration-300 hover:border-gold hover:text-gold"
          >
            {t('svc.allServices')}
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
