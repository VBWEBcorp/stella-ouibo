'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import { CtaSection } from '@/components/sections/cta-section'
import { PageHero } from '@/components/sections/page-hero'

const ease = [0.22, 1, 0.36, 1] as const

const journey = [
  {
    year: '2019',
    title: 'Premier coup de pinceau',
    desc: 'Début de carrière à Milan, formée aux écoles italiennes du maquillage de mode et d\'opéra.',
  },
  {
    year: '2021',
    title: 'Festival de Cannes · première édition',
    desc: 'Premier tapis rouge. Préparation VIP en hôtels de luxe pour talents internationaux.',
  },
  {
    year: '2022',
    title: 'Vogue China · L\'Oréal · Givenchy',
    desc: 'Direction beauté pour magazines et grandes maisons de couture.',
  },
  {
    year: '2024',
    title: 'Installation à Paris',
    desc: 'Studio à Paris, collaborations internationales : Milan, Londres, New York.',
  },
  {
    year: '2026',
    title: 'Cannes 2026 · 6e édition',
    desc: '12 au 23 mai. Réservations ouvertes pour le Festival.',
  },
]

const principles = [
  {
    n: '01',
    title: 'Harmony',
    desc: '« It\'s all about harmony of colors and shapes. » Une beauté qui sert le visage, jamais l\'inverse.',
  },
  {
    n: '02',
    title: 'Precision',
    desc: 'Le rouge à lèvres parfait n\'est pas une couleur, c\'est une ligne. Chaque trait pensé, chaque texture maîtrisée.',
  },
  {
    n: '03',
    title: 'Discretion',
    desc: 'Préparation VIP en suites privées. Confidentialité, ponctualité et calme avant les projecteurs.',
  },
]

const editorial = [
  'https://images.unsplash.com/photo-1496440737103-cd596325d314?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1521577352947-9bb58764b69a?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1525258946800-98cfd641d0de?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1503236823255-94609f598e71?auto=format&fit=crop&w=900&q=85',
]

export function AboutContent() {
  return (
    <>
      <PageHero
        eyebrow="The Artist"
        title="Claudia Stella Ceriani"
        description="Maquilleuse et coiffeuse italienne basée à Paris. Beauté éditoriale, mode, tapis rouge et événements VIP. Disponible worldwide."
        image="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1920&q=85"
        breadcrumb="À propos"
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
              <p className="font-display text-[10px] uppercase tracking-[0.4em] text-gold">
                Profil
              </p>
              <h2 className="mt-5 font-display text-4xl leading-[1.05] tracking-[-0.02em] text-foreground sm:text-5xl">
                <span className="italic font-light text-gold">Italian</span> heart,
                <br /> Parisian discipline.
              </h2>

              <div className="mt-10 space-y-6 text-[15px] leading-[1.8] text-foreground/70 sm:text-base">
                <p>
                  Née en Italie, Claudia Stella Ceriani développe très tôt une obsession pour la peau, la lumière et la précision du trait. Formée aux écoles italiennes du maquillage de mode et d&apos;opéra, elle pose ses pinceaux à Paris en 2024 après plusieurs années entre Milan et la Côte d&apos;Azur.
                </p>
                <p>
                  Cinq éditions consécutives au Festival de Cannes, des collaborations avec Vogue China, L&apos;Oréal Paris, Givenchy, Harcourt et amfAR. Claudia conjugue l&apos;exigence couture italienne et l&apos;élégance parisienne dans chacune de ses prestations.
                </p>
                <p className="border-l border-gold/60 pl-5 italic text-foreground/85">
                  &ldquo;Red lips, always looking for the perfect line, color and form.&rdquo;
                </p>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-px border border-foreground/[0.08] bg-foreground/[0.08] sm:grid-cols-3">
                {[
                  { k: 'Languages', v: 'EN · FR · IT' },
                  { k: 'Based in', v: 'Paris' },
                  { k: 'Cannes editions', v: '6 (2021–2026)' },
                ].map((d) => (
                  <div key={d.k} className="bg-background p-5">
                    <p className="font-display text-[10px] uppercase tracking-[0.32em] text-foreground/40">
                      {d.k}
                    </p>
                    <p className="mt-2 font-display text-base text-foreground">{d.v}</p>
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
              <div className="absolute -bottom-5 -left-5 hidden border border-gold/50 bg-background px-5 py-4 lg:block">
                <p className="font-display text-[10px] uppercase tracking-[0.32em] text-gold">
                  Portrait
                </p>
                <p className="mt-2 font-display text-lg italic text-foreground">Paris, 2025</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="border-b border-foreground/[0.08] bg-background">
        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
          <div className="max-w-2xl">
            <p className="font-display text-[10px] uppercase tracking-[0.4em] text-gold">
              Journey
            </p>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-[3.6rem]">
              A path lit by
              <br /> <span className="italic text-gold">spotlights</span>.
            </h2>
          </div>

          <ul className="mt-16 divide-y divide-white/[0.08] border-y border-foreground/[0.08]">
            {journey.map((j, i) => (
              <motion.li
                key={j.year}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease, delay: i * 0.06 }}
                className="group grid items-baseline gap-6 py-8 transition-colors hover:bg-foreground/[0.02] sm:grid-cols-[120px_1fr_2fr] sm:gap-10"
              >
                <span className="font-display text-2xl text-gold sm:text-3xl">{j.year}</span>
                <span className="font-display text-xl text-foreground sm:text-2xl">
                  {j.title}
                </span>
                <span className="text-[15px] leading-relaxed text-foreground/55">
                  {j.desc}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Principles */}
      <section className="border-b border-foreground/[0.08] bg-background">
        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
          <div className="max-w-2xl">
            <p className="font-display text-[10px] uppercase tracking-[0.4em] text-gold">
              Principles
            </p>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-[3.6rem]">
              Three rules,
              <br /> <span className="italic text-gold">always</span>.
            </h2>
          </div>

          <div className="mt-16 grid gap-px bg-foreground/[0.08] sm:grid-cols-3">
            {principles.map((p) => (
              <div key={p.n} className="bg-background p-10">
                <span className="font-display text-[11px] uppercase tracking-[0.32em] text-gold">
                  {p.n}
                </span>
                <h3 className="mt-6 font-display text-3xl tracking-tight text-foreground">
                  {p.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-foreground/55">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial gallery */}
      <section className="border-b border-foreground/[0.08] bg-background">
        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="font-display text-[10px] uppercase tracking-[0.4em] text-gold">
                Editorial
              </p>
              <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-[-0.02em] text-foreground sm:text-5xl">
                Behind the lens.
              </h2>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
            {editorial.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease, delay: i * 0.06 }}
                className={`relative overflow-hidden ${i % 2 === 0 ? 'aspect-[3/4]' : 'aspect-[3/4] lg:translate-y-8'}`}
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
