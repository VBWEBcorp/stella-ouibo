'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import { CtaSection } from '@/components/sections/cta-section'
import { PageHero } from '@/components/sections/page-hero'
import { useLang } from '@/hooks/use-lang'

const ease = [0.22, 1, 0.36, 1] as const

const journey = [
  {
    year: '2019',
    titleFr: 'Premiers coups de pinceau',
    titleEn: 'First brushstrokes',
    descFr: 'Début de carrière en Italie, formée aux écoles italiennes du maquillage de mode et d\'opéra.',
    descEn: 'Career begins in Italy, trained at Italian schools of fashion and opera makeup.',
  },
  {
    year: '2021',
    titleFr: 'Festival de Cannes · première édition',
    titleEn: 'Festival de Cannes · first edition',
    descFr: 'Premier tapis rouge. Préparation VIP en hôtels de luxe pour talents internationaux.',
    descEn: 'First red carpet. VIP preparation in luxury hotels for international talents.',
  },
  {
    year: '2022',
    titleFr: 'Vogue China · L\'Oréal · Givenchy',
    titleEn: 'Vogue China · L\'Oréal · Givenchy',
    descFr: 'Direction beauté pour magazines et grandes maisons de couture.',
    descEn: 'Beauty direction for magazines and major couture houses.',
  },
  {
    year: '2024',
    titleFr: 'Installation à Paris',
    titleEn: 'Move to Paris',
    descFr: 'Studio à Paris, collaborations internationales : Milan, Londres, New York.',
    descEn: 'Studio in Paris, international collaborations: Milan, London, New York.',
  },
  {
    year: '2026',
    titleFr: 'Cannes 2026 · 6e édition',
    titleEn: 'Cannes 2026 · 6th edition',
    descFr: 'Du 12 au 23 mai. Réservations ouvertes pour le Festival.',
    descEn: 'May 12 to 23. Bookings open for the Festival.',
  },
]

const valueKeys = ['val.1', 'val.2', 'val.3', 'val.4', 'val.5']

const editorial = [
  'https://images.unsplash.com/photo-1496440737103-cd596325d314?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1521577352947-9bb58764b69a?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1525258946800-98cfd641d0de?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1503236823255-94609f598e71?auto=format&fit=crop&w=900&q=85',
]

export function AboutContent() {
  const { t, lang } = useLang()

  return (
    <>
      <PageHero
        eyebrow={lang === 'fr' ? 'L\'Artiste' : 'The Artist'}
        title="Claudia Stella Ceriani"
        description={
          lang === 'fr'
            ? 'Maquilleuse mode, célébrités et événementiel. Italienne basée à Paris. Service de luxe, sans limite de déplacement.'
            : 'Fashion, celebrity and event makeup artist. Italian, based in Paris. Luxury service, no travel limits.'
        }
        image="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1920&q=85"
        breadcrumb={lang === 'fr' ? 'À propos' : 'About'}
      />

      {/* Bio + portrait */}
      <section className="border-b border-foreground/[0.08] bg-background">
        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
          <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease }}
              className="lg:col-span-7"
            >
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.4em] text-foreground/55">
                {lang === 'fr' ? 'Profil' : 'Profile'}
              </p>
              <h2 className="mt-5 font-display text-[40px] font-light italic leading-[1.04] tracking-[-0.02em] text-foreground sm:text-[56px] lg:text-[68px]">
                {lang === 'fr' ? 'Less is more.' : 'Less is more.'}
              </h2>

              <div className="mt-10 space-y-6 text-[15px] leading-[1.8] text-foreground/70 sm:text-base">
                <p>{t('story.p1')}</p>
                <p>{t('story.p2')}</p>
                <p className="border-l border-foreground/30 pl-5 font-display italic text-foreground/85">
                  {t('story.quote')}
                </p>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-px border border-foreground/[0.08] bg-foreground/[0.08] sm:grid-cols-3">
                {[
                  { k: lang === 'fr' ? 'Langues' : 'Languages', v: 'EN · FR · IT' },
                  { k: lang === 'fr' ? 'Basée à' : 'Based in', v: 'Paris' },
                  { k: lang === 'fr' ? 'Cannes' : 'Cannes', v: '2021 → 2026' },
                ].map((d) => (
                  <div key={d.k} className="bg-background p-5">
                    <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.32em] text-foreground/40">
                      {d.k}
                    </p>
                    <p className="mt-2 font-display text-base italic text-foreground">{d.v}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease, delay: 0.15 }}
              className="relative lg:col-span-5"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1496440737103-cd596325d314?auto=format&fit=crop&w=1100&q=85"
                  alt="Portrait Claudia Stella"
                  fill
                  sizes="(min-width:1024px) 35vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-foreground/45">
                {lang === 'fr' ? 'Portrait · Paris, 2025' : 'Portrait · Paris, 2025'}
              </figcaption>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="border-b border-foreground/[0.08] bg-background">
        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
          <div className="flex items-end justify-between gap-6 border-b border-foreground/[0.12] pb-8">
            <h2 className="font-sans text-[28px] font-bold uppercase tracking-[-0.01em] text-foreground sm:text-[40px] lg:text-[56px]">
              {t('val.title')}
            </h2>
            <span className="hidden font-sans text-[10px] font-semibold uppercase tracking-[0.32em] text-foreground/45 sm:inline">
              {t('val.eyebrow')}
            </span>
          </div>

          <div className="mt-12 grid gap-px bg-foreground/[0.08] sm:grid-cols-2 lg:grid-cols-5 lg:mt-16">
            {valueKeys.map((k, i) => (
              <motion.div
                key={k}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease, delay: i * 0.06 }}
                className="bg-background p-8 lg:p-10"
              >
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.32em] text-foreground/40">
                  0{i + 1}
                </span>
                <h3 className="mt-6 font-display text-3xl italic tracking-tight text-foreground">
                  {t(`${k}.title`)}
                </h3>
                <p className="mt-4 text-[14px] leading-[1.7] text-foreground/55">
                  {t(`${k}.desc`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="border-b border-foreground/[0.08] bg-background">
        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
          <div className="flex items-end justify-between gap-6 border-b border-foreground/[0.12] pb-8">
            <h2 className="font-sans text-[28px] font-bold uppercase tracking-[-0.01em] text-foreground sm:text-[40px] lg:text-[56px]">
              {lang === 'fr' ? 'Parcours' : 'Journey'}
            </h2>
          </div>

          <ul className="mt-12 divide-y divide-foreground/[0.08] lg:mt-16">
            {journey.map((j, i) => (
              <motion.li
                key={j.year}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease, delay: i * 0.06 }}
                className="group grid items-baseline gap-6 py-8 transition-colors hover:bg-foreground/[0.02] sm:grid-cols-[120px_1fr_2fr] sm:gap-10"
              >
                <span className="font-display text-2xl italic text-foreground sm:text-3xl">{j.year}</span>
                <span className="font-sans text-[16px] font-semibold uppercase tracking-[-0.005em] text-foreground sm:text-[20px]">
                  {lang === 'fr' ? j.titleFr : j.titleEn}
                </span>
                <span className="text-[15px] leading-relaxed text-foreground/55">
                  {lang === 'fr' ? j.descFr : j.descEn}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Editorial gallery */}
      <section className="border-b border-foreground/[0.08] bg-background">
        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
          <div className="flex items-end justify-between gap-6 border-b border-foreground/[0.12] pb-8">
            <h2 className="font-sans text-[28px] font-bold uppercase tracking-[-0.01em] text-foreground sm:text-[40px] lg:text-[56px]">
              {lang === 'fr' ? 'Éditorial' : 'Editorial'}
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
            {editorial.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease, delay: i * 0.06 }}
                className="relative aspect-[3/4] overflow-hidden"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(min-width:1024px) 25vw, 50vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
