'use client'

import { Instagram, Mail, Phone } from 'lucide-react'
import Link from 'next/link'

import { useLang } from '@/hooks/use-lang'
import { siteConfig } from '@/lib/seo'

const navLinks = [
  { key: 'nav.home', to: '/' },
  { key: 'nav.about', to: '/a-propos' },
  { key: 'nav.services', to: '/services' },
  { key: 'nav.portfolio', to: '/gallery' },
  { key: 'nav.contact', to: '/contact' },
]

const serviceKeys = [
  'foot.svc.1',
  'foot.svc.2',
  'foot.svc.3',
  'foot.svc.4',
  'foot.svc.5',
]

const cities = ['Paris', 'Cannes', 'Milano', 'London', 'Worldwide']

export function Footer() {
  const { t } = useLang()

  return (
    <footer className="border-t border-foreground/[0.08] bg-background text-foreground">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12">
        {/* Headline — TWG mode mais avec less is more signature */}
        <div className="border-b border-foreground/[0.08] py-24 sm:py-32 lg:py-40">
          <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.4em] text-foreground/55">
                {t('foot.available')}
              </p>
              <h2 className="mt-8 font-display text-6xl font-light italic leading-[0.98] tracking-[-0.03em] text-foreground sm:text-8xl lg:text-[10rem]">
                {t('foot.h.line1')}
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border border-foreground px-8 py-4 font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
            >
              {t('foot.book')}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        {/* Columns */}
        <div className="grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="space-y-6">
            <Link
              href="/"
              className="inline-flex items-baseline gap-[2px] font-sans text-[13px] font-bold uppercase tracking-[0.32em] text-foreground"
            >
              STELLA<span className="font-display font-normal italic">.C</span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-foreground/55">
              {t('foot.brandTagline')}
            </p>

            <div className="flex items-center gap-4 pt-2">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex size-10 items-center justify-center border border-foreground/[0.15] text-foreground/70 transition-all hover:border-foreground hover:text-foreground"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Email"
                className="flex size-10 items-center justify-center border border-foreground/[0.15] text-foreground/70 transition-all hover:border-foreground hover:text-foreground"
              >
                <Mail className="size-4" />
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                aria-label="Téléphone"
                className="flex size-10 items-center justify-center border border-foreground/[0.15] text-foreground/70 transition-all hover:border-foreground hover:text-foreground"
              >
                <Phone className="size-4" />
              </a>
            </div>
          </div>

          {/* Pages */}
          <nav aria-label="Pages">
            <h3 className="font-sans text-[10px] font-semibold uppercase tracking-[0.32em] text-foreground/55">
              {t('foot.col.pages')}
            </h3>
            <ul className="mt-6 space-y-3">
              {navLinks.map((l) => (
                <li key={l.key}>
                  <Link
                    href={l.to}
                    className="text-sm text-foreground/65 transition-colors hover:text-foreground"
                  >
                    {t(l.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h3 className="font-sans text-[10px] font-semibold uppercase tracking-[0.32em] text-foreground/55">
              {t('foot.col.services')}
            </h3>
            <ul className="mt-6 space-y-3">
              {serviceKeys.map((k) => (
                <li key={k} className="text-sm text-foreground/65">
                  {t(k)}
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h3 className="font-sans text-[10px] font-semibold uppercase tracking-[0.32em] text-foreground/55">
              {t('foot.col.locations')}
            </h3>
            <ul className="mt-6 space-y-3">
              {cities.map((c) => (
                <li key={c} className="text-sm text-foreground/65">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-start justify-between gap-3 border-t border-foreground/[0.08] py-8 font-sans text-[10px] font-semibold uppercase tracking-[0.24em] text-foreground/40 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {siteConfig.fullName} · {t('foot.rights')}
          </p>
          <p className="flex items-center gap-3">
            <Link href="/mentions-legales" className="hover:text-foreground">
              {t('foot.legal.mentions')}
            </Link>
            <span aria-hidden className="text-foreground/20">·</span>
            <Link href="/politique-de-confidentialite" className="hover:text-foreground">
              {t('foot.legal.privacy')}
            </Link>
            <span aria-hidden className="text-foreground/20">·</span>
            <span className="text-foreground/30">
              {t('foot.crafted')} <span className="text-foreground">Ouibo</span>
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
