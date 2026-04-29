'use client'

import { motion } from 'framer-motion'
import { Instagram, Mail, MapPin, Phone } from 'lucide-react'

import { PageHero } from '@/components/sections/page-hero'
import { siteConfig } from '@/lib/seo'

const ease = [0.22, 1, 0.36, 1] as const

const services = [
  'Red Carpet & Premieres',
  'Editorial & Magazine',
  'Fashion Week',
  'VIP & Private Event',
  'Bridal',
  'Other',
]

export function ContactContent() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk."
        description="Pour toute demande de booking, de collaboration éditoriale ou d'événement privé. Réponse sous 24h."
        image="https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1920&q=85"
        breadcrumb="Contact"
      />

      <section className="border-b border-foreground/[0.08] bg-background">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease }}
              className="lg:col-span-7"
            >
              <p className="font-display text-[10px] uppercase tracking-[0.4em] text-gold">
                Booking request
              </p>
              <h2 className="mt-5 font-display text-3xl leading-[1.05] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-[2.8rem]">
                Tell me about
                <br /> your <span className="italic text-gold">project</span>.
              </h2>

              <form
                className="mt-12 space-y-7"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid gap-7 sm:grid-cols-2">
                  <Field label="First name" name="firstname" placeholder="Claudia" />
                  <Field label="Last name" name="lastname" placeholder="Stella" />
                </div>

                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@studio.com"
                />
                <Field
                  label="Phone (optional)"
                  name="phone"
                  type="tel"
                  placeholder="+33 6 ..."
                />

                <div className="space-y-2">
                  <label className="block font-display text-[10px] uppercase tracking-[0.32em] text-foreground/55">
                    Type of service
                  </label>
                  <select
                    name="service"
                    defaultValue=""
                    className="w-full appearance-none border-0 border-b border-foreground/[0.18] bg-transparent py-3 font-display text-base text-foreground focus:border-gold focus:outline-none"
                  >
                    <option value="" disabled className="bg-background">
                      Select a service
                    </option>
                    {services.map((s) => (
                      <option key={s} value={s} className="bg-background">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <Field
                  label="Date / period"
                  name="date"
                  placeholder="Cannes 2026 · 16/05"
                />

                <div className="space-y-2">
                  <label className="block font-display text-[10px] uppercase tracking-[0.32em] text-foreground/55">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Brief, lieu, type d'événement, références éventuelles..."
                    className="w-full resize-none border-0 border-b border-foreground/[0.18] bg-transparent py-3 text-base leading-relaxed text-foreground placeholder:text-foreground/25 focus:border-gold focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 bg-gold px-9 py-4 font-display text-[11px] font-medium uppercase tracking-[0.32em] text-background transition-all duration-300 hover:bg-foreground"
                >
                  Send request
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </form>
            </motion.div>

            {/* Info column */}
            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="border border-foreground/[0.08] bg-foreground/[0.015] p-10">
                <p className="font-display text-[10px] uppercase tracking-[0.4em] text-gold">
                  Direct contact
                </p>
                <ul className="mt-8 space-y-7">
                  <ContactRow
                    icon={<Mail className="size-4" />}
                    label="Email"
                    value={siteConfig.email}
                    href={`mailto:${siteConfig.email}`}
                  />
                  <ContactRow
                    icon={<Phone className="size-4" />}
                    label="Phone · WhatsApp"
                    value={siteConfig.phone}
                    href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  />
                  <ContactRow
                    icon={<Instagram className="size-4" />}
                    label="Instagram"
                    value="@stella.ceriani.mua"
                    href={siteConfig.instagram}
                  />
                  <ContactRow
                    icon={<MapPin className="size-4" />}
                    label="Studio"
                    value="Paris · Worldwide on request"
                  />
                </ul>
              </div>

              <div className="mt-8 border border-gold/40 bg-background p-10">
                <p className="font-display text-[10px] uppercase tracking-[0.4em] text-gold">
                  Cannes 2026
                </p>
                <p className="mt-5 font-display text-3xl leading-tight text-foreground">
                  Du 12 au 23 mai
                </p>
                <p className="mt-3 text-[14px] leading-relaxed text-foreground/60">
                  Bookings ouverts pour le Festival de Cannes 2026. Les places partent vite, réservez dès aujourd&apos;hui.
                </p>
              </div>

              <p className="mt-8 font-display text-[10px] uppercase tracking-[0.32em] text-foreground/40">
                EN · FR · IT · réponse sous 24h
              </p>
            </motion.aside>
          </div>
        </div>
      </section>
    </>
  )
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="block font-display text-[10px] uppercase tracking-[0.32em] text-foreground/55"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full border-0 border-b border-foreground/[0.18] bg-transparent py-3 text-base text-foreground placeholder:text-foreground/25 focus:border-gold focus:outline-none"
      />
    </div>
  )
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode
  label: string
  value: string
  href?: string
}) {
  const content = (
    <div className="flex items-start gap-4">
      <span className="flex size-10 shrink-0 items-center justify-center border border-foreground/[0.15] text-gold">
        {icon}
      </span>
      <div>
        <p className="font-display text-[10px] uppercase tracking-[0.32em] text-foreground/40">
          {label}
        </p>
        <p className="mt-1 font-display text-base text-foreground">{value}</p>
      </div>
    </div>
  )

  if (href) {
    return (
      <li>
        <a
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noreferrer' : undefined}
          className="block transition-opacity hover:opacity-80"
        >
          {content}
        </a>
      </li>
    )
  }

  return <li>{content}</li>
}
