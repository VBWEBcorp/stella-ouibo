import Link from 'next/link'

import { cn } from '@/lib/utils'

type LogoProps = {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Stella C · Accueil"
      className={cn(
        'group inline-flex items-baseline gap-[2px] font-sans text-[13px] font-bold uppercase tracking-[0.32em] transition-opacity hover:opacity-75',
        className
      )}
    >
      <span>STELLA</span>
      <span className="font-display font-normal italic">.C</span>
    </Link>
  )
}
