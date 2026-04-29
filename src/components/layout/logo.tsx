import Link from 'next/link'

import { cn } from '@/lib/utils'

type LogoProps = {
  className?: string
  variant?: 'default' | 'on-dark'
}

export function Logo({ className, variant = 'default' }: LogoProps) {
  const colorClass =
    variant === 'on-dark' ? 'text-white' : 'text-foreground'

  return (
    <Link
      href="/"
      aria-label="Stella C · Accueil"
      className={cn(
        'group inline-flex items-baseline gap-[2px] font-display tracking-[0.32em] uppercase transition-opacity hover:opacity-85',
        colorClass,
        className
      )}
    >
      <span className="text-[15px] font-semibold leading-none">STELLA</span>
      <span className="text-gold text-[15px] font-semibold italic leading-none">.C</span>
    </Link>
  )
}
