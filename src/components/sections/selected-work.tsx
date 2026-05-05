'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import { useLang } from '@/hooks/use-lang'

const ease = [0.22, 1, 0.36, 1] as const

const works = [
  {
    src: 'https://images.unsplash.com/photo-1503236823255-94609f598e71?auto=format&fit=crop&w=900&q=85',
    roleKey: 'work.1.role',
    clientKey: 'work.1.client',
  },
  {
    src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=85',
    roleKey: 'work.2.role',
    clientKey: 'work.2.client',
  },
  {
    src: 'https://images.unsplash.com/photo-1525258946800-98cfd641d0de?auto=format&fit=crop&w=900&q=85',
    roleKey: 'work.3.role',
    clientKey: 'work.3.client',
  },
  {
    src: 'https://images.unsplash.com/photo-1496440737103-cd596325d314?auto=format&fit=crop&w=900&q=85',
    roleKey: 'work.4.role',
    clientKey: 'work.4.client',
  },
  {
    src: 'https://images.unsplash.com/photo-1521577352947-9bb58764b69a?auto=format&fit=crop&w=900&q=85',
    roleKey: 'work.5.role',
    clientKey: 'work.5.client',
  },
  {
    src: 'https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=900&q=85',
    roleKey: 'work.6.role',
    clientKey: 'work.6.client',
  },
  {
    src: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=900&q=85',
    roleKey: 'work.7.role',
    clientKey: 'work.7.client',
  },
  {
    src: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=85',
    roleKey: 'work.8.role',
    clientKey: 'work.8.client',
  },
]

export function SelectedWork() {
  const { t } = useLang()

  return (
    <section className="border-b border-foreground/[0.08] bg-background">
      <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
        {/* Section title — TWG-style: bold uppercase sans-serif */}
        <div className="flex items-end justify-between gap-6 border-b border-foreground/[0.12] pb-8">
          <h2 className="font-sans text-[28px] font-bold uppercase tracking-[-0.01em] text-foreground sm:text-[40px] lg:text-[56px]">
            {t('work.title')}
          </h2>
          <Link
            href="/gallery"
            className="hidden shrink-0 font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-foreground transition-colors hover:text-foreground/60 sm:inline-flex sm:items-center sm:gap-2"
          >
            {t('work.cta')}
            <span aria-hidden>→</span>
          </Link>
        </div>

        {/* Grid 4 columns desktop, 2 mobile */}
        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-5 lg:mt-14 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-16">
          {works.map((w, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease, delay: (i % 4) * 0.06 }}
              className="group"
            >
              <Link href="/gallery" className="block">
                <div className="relative aspect-[4/5] overflow-hidden bg-foreground/[0.04]">
                  <Image
                    src={w.src}
                    alt=""
                    fill
                    sizes="(min-width:1024px) 25vw, 50vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="mt-4 space-y-0.5">
                  <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.06em] text-foreground">
                    {t(w.roleKey)}
                  </p>
                  <p className="font-display text-[14px] italic leading-tight text-foreground/55">
                    {t(w.clientKey)}
                  </p>
                </figcaption>
              </Link>
            </motion.figure>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-12 flex justify-center sm:hidden">
          <Link
            href="/gallery"
            className="group inline-flex items-center gap-2 border border-foreground/30 px-7 py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-foreground"
          >
            {t('work.cta')}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
