'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const ease = [0.22, 1, 0.36, 1] as const

type PageHeroProps = {
  eyebrow: string
  title: string
  description?: string
  image: string
  breadcrumb: string
}

export function PageHero({ eyebrow, title, description, image, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden pt-16 sm:pt-20 lg:pt-24">
      {/* Background image */}
      <div className="absolute inset-0" aria-hidden>
        <Image
          src={image}
          alt=""
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/0 to-background" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        {/* Breadcrumb */}
        <nav aria-label="Fil d'Ariane" className="pt-12 sm:pt-16">
          <ol className="flex flex-wrap items-center gap-3 font-sans text-[10px] font-semibold uppercase tracking-[0.32em] text-white/55">
            <li>
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
            </li>
            <li aria-hidden className="text-white/30">/</li>
            <li aria-current="page" className="text-white">
              {breadcrumb}
            </li>
          </ol>
        </nav>

        {/* Content */}
        <div className="grid items-end gap-8 pb-24 pt-20 lg:grid-cols-12 lg:gap-16 lg:pb-32 lg:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="lg:col-span-8"
          >
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.4em] text-white/70">
              {eyebrow}
            </p>
            <h1 className="mt-6 font-sans text-[40px] font-bold uppercase leading-[0.95] tracking-[-0.02em] text-white sm:text-[64px] lg:text-[88px]">
              {title}
            </h1>
          </motion.div>

          {description && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.15 }}
              className="lg:col-span-4 lg:pb-4"
            >
              <p className="border-l border-white/40 pl-5 text-[15px] leading-relaxed text-white/75 sm:text-base">
                {description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
