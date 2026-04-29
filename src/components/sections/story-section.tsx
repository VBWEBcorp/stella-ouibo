'use client'

import { animate, motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import { useLang } from '@/hooks/use-lang'

const ease = [0.22, 1, 0.36, 1] as const

type Stat =
  | { value: number; suffix?: string; labelKey: string }
  | { value: string; labelKey: string }

const stats: Stat[] = [
  { value: 6, labelKey: 'story.stat.1' },
  { value: 50, suffix: '+', labelKey: 'story.stat.2' },
  { value: 3, labelKey: 'story.stat.3' },
  { value: '∞', labelKey: 'story.stat.4' },
]

function MosaicShot({
  src,
  alt,
  ratio,
  meta,
  delay = 0,
}: {
  src: string
  alt: string
  ratio: string
  meta?: string
  delay?: number
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease, delay }}
      className="group relative"
    >
      <div className={`relative overflow-hidden ${ratio}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width:1280px) 25vw, (min-width:1024px) 30vw, 100vw"
          loading="lazy"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
      </div>
      {meta && (
        <figcaption className="mt-3 flex items-center justify-between font-display text-[10px] uppercase tracking-[0.32em] text-foreground/45">
          <span>{meta}</span>
          <span className="h-px w-10 bg-foreground/15" aria-hidden />
        </figcaption>
      )}
    </motion.figure>
  )
}

function CountUp({
  to,
  suffix = '',
  duration = 1.8,
  trigger,
}: {
  to: number
  suffix?: string
  duration?: number
  trigger: boolean
}) {
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!trigger) return
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(Math.round(v)),
    })
    return () => controls.stop()
  }, [trigger, to, duration])

  return (
    <>
      {val}
      {suffix}
    </>
  )
}

export function StorySection() {
  const { t } = useLang()

  return (
    <section className="relative overflow-hidden border-b border-foreground/[0.08] bg-background">
      <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Image — desktop : grid 2x2 décalée, mobile : photo unique */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease }}
            className="relative lg:col-span-7"
          >
            {/* Mobile : single hero shot */}
            <div className="relative aspect-[4/5] overflow-hidden lg:hidden">
              <Image
                src="https://images.unsplash.com/photo-1496440737103-cd596325d314?auto=format&fit=crop&w=1100&q=85"
                alt="Backstage portrait"
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
            </div>

            {/* Desktop : 2 columns with vertical offset */}
            <div className="hidden lg:grid lg:grid-cols-2 lg:gap-5 xl:gap-7">
              <div className="space-y-5 xl:space-y-7">
                <MosaicShot
                  src="https://images.unsplash.com/photo-1496440737103-cd596325d314?auto=format&fit=crop&w=900&q=85"
                  alt="Portrait Paris"
                  ratio="aspect-[3/4]"
                  meta={t('story.shot.1')}
                  delay={0}
                />
                <MosaicShot
                  src="https://images.unsplash.com/photo-1503236823255-94609f598e71?auto=format&fit=crop&w=900&q=85"
                  alt="Beauty close-up"
                  ratio="aspect-[4/5]"
                  meta={t('story.shot.2')}
                  delay={0.15}
                />
              </div>

              <div className="space-y-5 pt-16 xl:space-y-7 xl:pt-24">
                <MosaicShot
                  src="https://images.unsplash.com/photo-1525258946800-98cfd641d0de?auto=format&fit=crop&w=900&q=85"
                  alt="Editorial Vogue"
                  ratio="aspect-[4/5]"
                  meta={t('story.shot.3')}
                  delay={0.08}
                />
                <MosaicShot
                  src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=85"
                  alt="Backstage Cannes"
                  ratio="aspect-[3/4]"
                  meta={t('story.shot.4')}
                  delay={0.22}
                />
              </div>
            </div>

            <div className="absolute -left-2 top-10 hidden -rotate-90 origin-left font-display text-[10px] uppercase tracking-[0.4em] text-foreground/40 xl:block">
              {t('story.captionLeft')}
            </div>

            <div className="pointer-events-none absolute -bottom-2 right-2 hidden border border-gold/50 bg-background px-6 py-5 lg:block xl:-bottom-4 xl:right-4">
              <p className="font-display text-[10px] uppercase tracking-[0.32em] text-gold">
                {t('story.tagSince')}
              </p>
              <p className="mt-2 font-display text-3xl italic text-foreground">Stella C.</p>
            </div>
          </motion.div>

          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <p className="font-display text-[10px] uppercase tracking-[0.4em] text-gold">
              {t('story.eyebrow')}
            </p>

            <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-[3.6rem]">
              {t('story.title.line1')}
              <br />
              {t('story.title.line2')}{' '}
              <span className="italic text-gold">{t('story.title.italic')}</span>
              {t('story.title.dot')}
            </h2>

            <div className="mt-8 space-y-5 text-[15px] leading-[1.75] text-foreground/65 sm:text-base">
              <p>{t('story.p1')}</p>
              <p className="border-l border-gold/60 pl-5 italic text-foreground/80">
                {t('story.quote')}
              </p>
            </div>

            <div className="mt-10">
              <Link
                href="/a-propos"
                className="group inline-flex items-center gap-3 border-b border-foreground/40 pb-2 font-display text-[11px] font-medium uppercase tracking-[0.32em] text-foreground transition-colors hover:border-gold hover:text-gold"
              >
                {t('story.cta')}
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </motion.div>
        </div>

        <StatsRow />
      </div>
    </section>
  )
}

function StatsRow() {
  const { t } = useLang()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease, delay: 0.2 }}
      className="mt-20 grid grid-cols-2 border-t border-foreground/[0.08] pt-10 sm:mt-28 sm:grid-cols-4"
    >
      {stats.map((s, i) => (
        <div
          key={s.labelKey}
          className={`flex flex-col gap-2 px-2 py-4 ${i !== 0 ? 'sm:border-l sm:border-foreground/[0.08]' : ''}`}
        >
          <span className="font-display text-5xl font-light leading-none tracking-tight text-foreground sm:text-6xl">
            {typeof s.value === 'number' ? (
              <CountUp
                to={s.value}
                suffix={'suffix' in s ? s.suffix : ''}
                trigger={inView}
                duration={1.6 + i * 0.1}
              />
            ) : (
              s.value
            )}
          </span>
          <span className="font-display text-[10px] uppercase tracking-[0.32em] text-foreground/50">
            {t(s.labelKey)}
          </span>
        </div>
      ))}
    </motion.div>
  )
}
