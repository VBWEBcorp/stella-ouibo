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
    image: 'https://images.unsplash.com/photo-1503236823255-94609f598e71?auto=format&fit=crop&w=1200&q=85',
  },
  {
    number: '02',
    titleKey: 'svc.2.title',
    subtitleKey: 'svc.2.subtitle',
    descKey: 'svc.2.desc',
    image: 'https://images.unsplash.com/photo-1521577352947-9bb58764b69a?auto=format&fit=crop&w=1200&q=85',
  },
  {
    number: '03',
    titleKey: 'svc.3.title',
    subtitleKey: 'svc.3.subtitle',
    descKey: 'svc.3.desc',
    image: 'https://images.unsplash.com/photo-1525258946800-98cfd641d0de?auto=format&fit=crop&w=1200&q=85',
  },
  {
    number: '04',
    titleKey: 'svc.4.title',
    subtitleKey: 'svc.4.subtitle',
    descKey: 'svc.4.desc',
    image: 'https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=1200&q=85',
  },
  {
    number: '05',
    titleKey: 'svc.5.title',
    subtitleKey: 'svc.5.subtitle',
    descKey: 'svc.5.desc',
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1200&q=85',
  },
]

export function ServicesPreview() {
  const { t } = useLang()

  return (
    <section className="border-b border-foreground/[0.08] bg-background">
      <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
        {/* Header — TWG editorial */}
        <div className="flex items-end justify-between gap-6 border-b border-foreground/[0.12] pb-8">
          <h2 className="font-sans text-[28px] font-bold uppercase tracking-[-0.01em] text-foreground sm:text-[40px] lg:text-[56px]">
            {t('svc.title.line1')}
            <br />
            {t('svc.title.line2')}
          </h2>
          <p className="hidden max-w-sm shrink-0 text-[14px] leading-relaxed text-foreground/55 lg:block">
            {t('svc.intro')}
          </p>
        </div>

        {/* Mobile intro */}
        <p className="mt-6 max-w-md text-[14px] leading-relaxed text-foreground/55 lg:hidden">
          {t('svc.intro')}
        </p>

        {/* Services list — alternating left/right rows */}
        <div className="mt-12 lg:mt-16">
          {services.map((s, i) => (
            <motion.div
              key={s.titleKey}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease }}
              className="group border-b border-foreground/[0.08] last:border-b-0"
            >
              <Link
                href="/services"
                className="grid items-center gap-6 py-7 transition-colors hover:bg-foreground/[0.02] sm:gap-10 sm:py-9 lg:grid-cols-[80px_180px_1fr_120px_auto] lg:gap-12 lg:py-12"
              >
                {/* Number */}
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.32em] text-foreground/45">
                  {s.number}
                </span>

                {/* Image - desktop only */}
                <div className="relative hidden aspect-[4/5] w-[180px] overflow-hidden lg:block">
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    sizes="180px"
                    loading="lazy"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Title + subtitle (italic Playfair) */}
                <div>
                  <h3 className="font-sans text-[22px] font-bold uppercase tracking-[-0.01em] leading-tight text-foreground sm:text-[28px] lg:text-[32px]">
                    {t(s.titleKey)}
                  </h3>
                  <p className="mt-1 font-display text-[15px] italic text-foreground/55 sm:text-base">
                    {t(s.subtitleKey)}
                  </p>
                </div>

                {/* Description - desktop only */}
                <p className="hidden text-[13px] leading-[1.6] text-foreground/55 lg:block">
                  {t(s.descKey)}
                </p>

                {/* Arrow */}
                <span className="hidden font-sans text-2xl text-foreground/35 transition-all duration-300 group-hover:translate-x-1 group-hover:text-foreground lg:inline">
                  →
                </span>

                {/* Mobile description */}
                <p className="lg:hidden text-[13px] leading-[1.6] text-foreground/55">
                  {t(s.descKey)}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="group inline-flex items-center gap-3 border border-foreground/30 px-8 py-4 font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-foreground transition-all duration-300 hover:border-foreground"
          >
            {t('svc.allServices')}
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
