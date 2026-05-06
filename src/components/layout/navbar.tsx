'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Instagram, Linkedin, Mail, Menu, Phone, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { ThemeToggle } from '@/components/theme/theme-toggle'
import { useLang } from '@/hooks/use-lang'
import { siteConfig } from '@/lib/seo'
import { cn } from '@/lib/utils'

const linksMeta = [
  { to: '/', key: 'nav.home' },
  { to: '/a-propos', key: 'nav.about' },
  { to: '/services', key: 'nav.services' },
  { to: '/gallery', key: 'nav.portfolio' },
  { to: '/blog', key: 'nav.blog' },
  { to: '/contact', key: 'nav.contact' },
]

const ease = [0.32, 0.72, 0.24, 1] as const

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'
  const { t } = useLang()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const headerStyle =
    !isHome || scrolled
      ? 'bg-background/85 backdrop-blur-xl border-b border-foreground/[0.08]'
      : 'bg-transparent border-b border-transparent'

  const isOnDark = isHome && !scrolled

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          headerStyle
        )}
      >
        <div
          className={cn(
            'mx-auto grid h-16 max-w-[1440px] grid-cols-3 items-center px-5 sm:h-20 sm:px-8 lg:h-24 lg:px-12',
            isOnDark ? 'text-white' : 'text-foreground'
          )}
        >
          {/* Left : Menu button (TWG-style "ARTISTS") */}
          <div className="flex items-center justify-start">
            <button
              type="button"
              aria-expanded={open}
              aria-controls="side-menu"
              aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
              onClick={() => setOpen(true)}
              className="group inline-flex items-center gap-2.5 font-sans text-[10px] font-semibold uppercase tracking-[0.32em] transition-opacity hover:opacity-70"
            >
              <Menu className="size-4" />
              <span>{t('nav.menu')}</span>
            </button>
          </div>

          {/* Center : logo TWG-style */}
          <div className="flex items-center justify-center">
            <Link
              href="/"
              aria-label="Stella C · Accueil"
              className="font-sans text-[12px] font-bold uppercase tracking-[0.4em] transition-opacity hover:opacity-75 sm:text-[14px]"
            >
              STELLA<span className="font-display font-normal italic"> · C</span>
            </Link>
          </div>

          {/* Right : actions */}
          <div className="flex items-center justify-end gap-3 sm:gap-4">
            <ThemeToggle />

            <Link
              href="/contact"
              className="font-sans text-[10px] font-semibold uppercase tracking-[0.32em] transition-opacity hover:opacity-70"
            >
              {t('nav.bookMe')}
            </Link>
          </div>
        </div>
      </header>

      {/* Side drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[60] bg-black/65 backdrop-blur-sm"
            />

            <motion.aside
              key="panel"
              id="side-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Menu de navigation"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.55, ease }}
              className="fixed inset-y-0 left-0 z-[70] flex w-full max-w-[460px] flex-col border-r border-foreground/[0.08] bg-background shadow-[32px_0_64px_-12px_rgba(0,0,0,0.45)]"
            >
              <div className="flex items-center justify-between border-b border-foreground/[0.08] px-7 py-7">
                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.4em] text-foreground/55">
                  {t('nav.menu')}
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Fermer le menu"
                  className="flex size-10 items-center justify-center border border-foreground/20 text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
                >
                  <X className="size-4" />
                </button>
              </div>

              <nav
                aria-label="Navigation principale"
                className="flex flex-1 flex-col justify-center gap-1 px-7"
              >
                {linksMeta.map((l, i) => (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.18 + i * 0.06, duration: 0.5, ease }}
                    className="border-b border-foreground/[0.06] last:border-b-0"
                  >
                    <Link
                      href={l.to}
                      onClick={() => setOpen(false)}
                      className={cn(
                        'group flex items-baseline justify-between py-5 transition-colors',
                        pathname === l.to
                          ? 'text-foreground'
                          : 'text-foreground/55 hover:text-foreground'
                      )}
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="font-sans text-[10px] font-semibold tracking-[0.32em] text-foreground/35">
                          0{i + 1}
                        </span>
                        <span className="font-display text-3xl font-light italic tracking-[-0.01em] sm:text-[2.4rem]">
                          {t(l.key)}
                        </span>
                      </span>
                      <span className="font-sans text-base text-foreground/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-foreground">
                        →
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.5, ease }}
                className="space-y-5 border-t border-foreground/[0.08] px-7 py-7"
              >
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center gap-3 bg-foreground py-4 font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-background transition-all duration-300 hover:bg-foreground/85"
                >
                  {t('nav.bookSession')}
                  <span aria-hidden>→</span>
                </Link>

                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-1">
                    <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.32em] text-foreground/40">
                      {t('nav.directLine')}
                    </p>
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                      className="font-display text-sm italic text-foreground transition-colors hover:text-foreground/65"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={siteConfig.instagram}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram"
                      className="flex size-10 items-center justify-center border border-foreground/15 text-foreground/70 transition-all hover:border-foreground hover:text-foreground"
                    >
                      <Instagram className="size-4" />
                    </a>
                    <a
                      href={siteConfig.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      className="flex size-10 items-center justify-center border border-foreground/15 text-foreground/70 transition-all hover:border-foreground hover:text-foreground"
                    >
                      <Linkedin className="size-4" />
                    </a>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      aria-label="Email"
                      className="flex size-10 items-center justify-center border border-foreground/15 text-foreground/70 transition-all hover:border-foreground hover:text-foreground"
                    >
                      <Mail className="size-4" />
                    </a>
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                      aria-label="Téléphone"
                      className="flex size-10 items-center justify-center border border-foreground/15 text-foreground/70 transition-all hover:border-foreground hover:text-foreground"
                    >
                      <Phone className="size-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
