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
    <footer className="border-t border-foreground/[0.08] bg-background text-foreground/70">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12">
        {/* Headline */}
        <div className="border-b border-foreground/[0.08] py-20 sm:py-28">
          <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="font-display text-[10px] uppercase tracking-[0.4em] text-gold">
                {t('foot.available')}
              </p>
              <h2 className="mt-6 font-display text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-[5.5rem]">
                {t('foot.h.line1')}
                <br />
                <span className="italic font-light text-gold">{t('foot.h.line2')}</span>
                {t('foot.h.dot')}
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border border-foreground/30 px-7 py-4 font-display text-[11px] font-medium uppercase tracking-[0.32em] text-foreground transition-all duration-300 hover:border-gold hover:text-gold"
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
              className="inline-flex items-baseline gap-[2px] font-display text-base font-semibold uppercase tracking-[0.32em] text-foreground"
            >
              STELLA<span className="italic text-gold">.C</span>
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
                className="flex size-10 items-center justify-center border border-foreground/[0.15] text-foreground/70 transition-all hover:border-gold hover:text-gold"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Email"
                className="flex size-10 items-center justify-center border border-foreground/[0.15] text-foreground/70 transition-all hover:border-gold hover:text-gold"
              >
                <Mail className="size-4" />
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                aria-label="Téléphone"
                className="flex size-10 items-center justify-center border border-foreground/[0.15] text-foreground/70 transition-all hover:border-gold hover:text-gold"
              >
                <Phone className="size-4" />
              </a>
            </div>
          </div>

          {/* Pages */}
          <nav aria-label="Pages">
            <h3 className="font-display text-[10px] font-semibold uppercase tracking-[0.32em] text-gold">
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
            <h3 className="font-display text-[10px] font-semibold uppercase tracking-[0.32em] text-gold">
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
            <h3 className="font-display text-[10px] font-semibold uppercase tracking-[0.32em] text-gold">
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
        <div className="flex flex-col items-start justify-between gap-3 border-t border-foreground/[0.08] py-8 text-[11px] uppercase tracking-[0.24em] text-foreground/40 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {siteConfig.fullName} · {t('foot.rights')}
          </p>
          <p className="flex items-center gap-3">
            <Link href="/mentions-legales" className="hover:text-foreground/80">
              {t('foot.legal.mentions')}
            </Link>
            <span aria-hidden className="text-foreground/20">·</span>
            <Link href="/politique-de-confidentialite" className="hover:text-foreground/80">
              {t('foot.legal.privacy')}
            </Link>
            <span aria-hidden className="text-foreground/20">·</span>
            <span className="text-foreground/30">
              {t('foot.crafted')} <span className="text-gold">Ouibo</span>
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
