import { cn } from '@/lib/utils'

type SectionTitleProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        'mx-auto max-w-3xl space-y-5',
        align === 'center' && 'text-center',
        className
      )}
    >
      {eyebrow ? (
        <p className="font-display text-[10px] font-medium uppercase tracking-[0.4em] text-gold">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-balance text-4xl leading-[1.04] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-[3.4rem]">
        {title}
      </h2>
      {description ? (
        <p className="text-pretty text-base leading-relaxed text-foreground/60 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}
