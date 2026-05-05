'use client'

import { useLang } from '@/hooks/use-lang'

const valueKeys = [
  'marquee.editorial',
  'marquee.redCarpet',
  'marquee.beauty',
  'marquee.couture',
  'marquee.fashionWeek',
  'marquee.bridal',
  'marquee.corporate',
  'marquee.vipEvents',
  'marquee.masterclass',
  'marquee.backstage',
]

function Track({
  direction,
  values,
}: {
  direction: 'left' | 'right'
  values: string[]
}) {
  const animClass = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'

  const items = values.map((label, i) => (
    <span
      key={`${label}-${i}`}
      className="inline-flex shrink-0 items-center gap-10 whitespace-nowrap font-display text-2xl font-light italic text-foreground/80 sm:text-3xl lg:text-[2.6rem]"
    >
      {label}
      <span aria-hidden className="font-sans not-italic text-foreground/30">·</span>
    </span>
  ))

  return (
    <div className="flex overflow-hidden">
      <div className={`flex shrink-0 items-center gap-10 pr-10 ${animClass}`}>
        {items}
      </div>
      <div aria-hidden className={`flex shrink-0 items-center gap-10 pr-10 ${animClass}`}>
        {items}
      </div>
    </div>
  )
}

export function ValuesMarquee({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const { t } = useLang()
  const values = valueKeys.map((k) => t(k))

  return (
    <section
      className={
        variant === 'dark'
          ? 'border-y border-foreground/[0.08] bg-background/40 py-10 backdrop-blur-sm sm:py-12'
          : 'border-y border-foreground/[0.08] bg-background py-12 sm:py-16'
      }
    >
      <Track direction="left" values={values} />
    </section>
  )
}
