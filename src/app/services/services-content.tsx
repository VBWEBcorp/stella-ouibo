'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import { CtaSection } from '@/components/sections/cta-section'
import { PageHero } from '@/components/sections/page-hero'

const ease = [0.22, 1, 0.36, 1] as const

const services = [
  {
    n: '01',
    title: 'Red Carpet & Premieres',
    tag: 'Cannes · Venezia · Berlinale',
    desc: 'Préparation VIP en hôtels de luxe avant tapis rouge, premières et galas. Five-star pampering, intemporal glamour, perfect timing.',
    image: 'https://images.unsplash.com/photo-1521577352947-9bb58764b69a?auto=format&fit=crop&w=1100&q=85',
    bullets: [
      'Préparation hôtelière VIP (Ritz, Carlton)',
      'Coiffure & maquillage red carpet',
      'Retouches sur place pendant l\'événement',
      'Photo / interview / after-party',
    ],
    price: 'Sur devis',
  },
  {
    n: '02',
    title: 'Editorial & Magazine',
    tag: 'Vogue · Harcourt · L\'Officiel',
    desc: 'Direction beauté pour shootings éditoriaux, couvertures et campagnes. Travail à quatre mains avec photographes, stylistes et directeurs artistiques.',
    image: 'https://images.unsplash.com/photo-1503236823255-94609f598e71?auto=format&fit=crop&w=1100&q=85',
    bullets: [
      'Maquillage & coiffure éditoriaux',
      'Recherche et tests beauté',
      'Plusieurs looks par session',
      'Adaptable studio ou extérieur',
    ],
    price: 'Sur devis',
  },
  {
    n: '03',
    title: 'Fashion Week & Runway',
    tag: 'Paris · Milano · London',
    desc: 'Beauty looks signature pour défilés et présentations couture. Travail en équipe avec backstage managers, briefings DA, exécution rapide et précise.',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1100&q=85',
    bullets: [
      'Briefing DA & key look',
      'Direction d\'équipe backstage',
      'Reproduction exacte sur 20+ mannequins',
      'Disponibilité saisonnière (FW/SS)',
    ],
    price: 'Sur devis',
  },
  {
    n: '04',
    title: 'VIP & Private Events',
    tag: 'Galas · Mariages · Soirées',
    desc: 'Service privé pour événements VIP, mariages d\'exception, gala dinners et soirées sur-mesure. Intimité, élégance et prestation 5 étoiles.',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1100&q=85',
    bullets: [
      'Maquillage mariée + essai',
      'Préparation cortège (mère, demoiselles)',
      'Forfait soirée sur place',
      'Coiffure intégrée',
    ],
    price: 'À partir de 850 €',
  },
  {
    n: '05',
    title: 'Masterclass & Cours',
    tag: 'École · À domicile · En ligne',
    desc: 'Cours privés ou collectifs pour futures maquilleuses et passionnées. Transmission de la technique minimaliste signature Stella : valoriser sans transformer.',
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1100&q=85',
    bullets: [
      'Cours privé ou collectif',
      'Présentiel (Paris, école) ou à domicile',
      'Sessions en ligne (visio)',
      'Programme adapté débutant ou pro',
    ],
    price: 'Sur devis',
  },
]

const process = [
  { n: '01', title: 'First contact', desc: 'Email ou téléphone. Brief rapide, dates et lieu.' },
  { n: '02', title: 'Mood & references', desc: 'Échange de moodboards, look de référence et brief beauté.' },
  { n: '03', title: 'Devis & contrat', desc: 'Proposition chiffrée, contrat signé, acompte de réservation.' },
  { n: '04', title: 'Day of', desc: 'Préparation, exécution, retouches et follow-up. Ponctualité absolue.' },
]

export function ServicesContent() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Cinq univers, une signature."
        description="Maquillage et coiffure de luxe, sans limite de déplacement. Pour clients privés, marques, productions et futures maquilleuses. Disponible à Paris, Cannes, Milan, Londres et à l'international."
        image="https://images.unsplash.com/photo-1525258946800-98cfd641d0de?auto=format&fit=crop&w=1920&q=85"
        breadcrumb="Services"
      />

      {/* Services list — alternating large blocks */}
      <section className="bg-background">
        {services.map((s, i) => {
          const isReverse = i % 2 === 1
          return (
            <div
              key={s.n}
              className="border-b border-foreground/[0.08]"
            >
              <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
                <div
                  className={`grid items-center gap-12 lg:grid-cols-12 lg:gap-20 ${
                    isReverse ? 'lg:[direction:rtl]' : ''
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8, ease }}
                    className={`relative ${isReverse ? '[direction:ltr]' : ''} lg:col-span-7`}
                  >
                    <div className="relative aspect-[5/4] overflow-hidden">
                      <Image
                        src={s.image}
                        alt=""
                        fill
                        sizes="(min-width:1024px) 60vw, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                    </div>
                    <span className="absolute left-4 top-4 font-display text-[10px] uppercase tracking-[0.32em] text-white/70">
                      {s.tag}
                    </span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8, ease, delay: 0.1 }}
                    className={`${isReverse ? '[direction:ltr]' : ''} lg:col-span-5`}
                  >
                    <span className="font-display text-[11px] uppercase tracking-[0.32em] text-gold">
                      Service {s.n}
                    </span>
                    <h2 className="mt-4 font-display text-4xl leading-[1.04] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-[3.4rem]">
                      {s.title}
                    </h2>
                    <p className="mt-6 text-[15px] leading-relaxed text-foreground/65 sm:text-base">
                      {s.desc}
                    </p>

                    <ul className="mt-8 space-y-3 border-t border-foreground/[0.08] pt-6">
                      {s.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-3 text-[14px] text-foreground/75"
                        >
                          <span className="mt-2 inline-block h-px w-4 shrink-0 bg-gold" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-foreground/[0.08] pt-6">
                      <div>
                        <p className="font-display text-[10px] uppercase tracking-[0.32em] text-foreground/40">
                          Tarif
                        </p>
                        <p className="mt-1 font-display text-xl text-foreground">{s.price}</p>
                      </div>
                      <Link
                        href="/contact"
                        className="group inline-flex items-center gap-3 border border-foreground/30 px-7 py-3.5 font-display text-[11px] font-medium uppercase tracking-[0.32em] text-foreground transition-all duration-300 hover:border-gold hover:text-gold"
                      >
                        Demander un devis
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          )
        })}
      </section>

      {/* Process */}
      <section className="border-b border-foreground/[0.08] bg-background">
        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
          <div className="max-w-2xl">
            <p className="font-display text-[10px] uppercase tracking-[0.4em] text-gold">
              Process
            </p>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-[3.6rem]">
              Simple,
              <br /> <span className="italic text-gold">precise</span>, on time.
            </h2>
          </div>

          <div className="mt-16 grid gap-px bg-foreground/[0.08] sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.n} className="bg-background p-10">
                <span className="font-display text-[11px] uppercase tracking-[0.32em] text-gold">
                  {p.n}
                </span>
                <h3 className="mt-4 font-display text-2xl tracking-tight text-foreground">
                  {p.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-foreground/55">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
