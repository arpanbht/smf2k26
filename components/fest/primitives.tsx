import type { LucideIcon } from 'lucide-react'
import { ArrowRight, Cog } from 'lucide-react'
import { REGISTER_URL } from '@/lib/site'
import { cn } from '@/lib/utils'

export function RegisterButton({ className, size = 'md' }: { className?: string; size?: 'sm' | 'md' }) {
  return (
    <a
      href={REGISTER_URL}
      className={cn(
        'inline-flex items-center gap-2 rounded-full bg-primary font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-colors hover:bg-maroon-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
        size === 'sm' ? 'px-4 py-2 text-sm' : 'px-6 py-3 text-sm md:text-base',
        className,
      )}
    >
      Register Now
      <ArrowRight className="size-4" aria-hidden="true" />
    </a>
  )
}

export function TagChip({ label, icon: Icon }: { label: string; icon: LucideIcon }) {
  return (
    <li className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-card/80 px-3 py-1.5 text-sm font-medium text-foreground">
      <span className="flex size-6 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon className="size-3.5" aria-hidden="true" />
      </span>
      {label}
    </li>
  )
}

export function TagChipList({ chips }: { chips: { label: string; icon: LucideIcon }[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {chips.map((chip) => (
        <TagChip key={chip.label} {...chip} />
      ))}
    </ul>
  )
}

export function QuoteStrap({ quote, withRegister = true }: { quote: string; withRegister?: boolean }) {
  return (
    <div className="mt-12 flex flex-col items-center gap-6 border-t border-dashed border-primary/30 pt-8 md:flex-row md:justify-between">
      <p className="flex items-center gap-3 text-center font-display text-lg tracking-wider text-foreground md:text-2xl">
        <Cog className="size-5 shrink-0 text-accent" aria-hidden="true" />
        <span className="italic">{`“${quote}”`}</span>
        <Cog className="size-5 shrink-0 text-accent" aria-hidden="true" />
      </p>
      {withRegister && <RegisterButton />}
    </div>
  )
}

export function Breadcrumb({ current }: { current: string }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4 text-xs font-medium text-muted-foreground">
      <ol className="flex items-center gap-1.5">
        <li>
          <a href="#home" className="hover:text-primary">
            Home
          </a>
        </li>
        <li aria-hidden="true">›</li>
        <li>
          <a href="#events" className="hover:text-primary">
            Events
          </a>
        </li>
        <li aria-hidden="true">›</li>
        <li aria-current="page" className="text-primary">
          {current}
        </li>
      </ol>
    </nav>
  )
}

export function TornEdge({ className, flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 24"
      preserveAspectRatio="none"
      className={cn('block h-4 w-full md:h-6', flip && 'rotate-180', className)}
    >
      <path
        fill="currentColor"
        d="M0 24V10l30 6 28-9 34 8 26-11 40 10 22-7 38 9 30-10 26 7 44-6 24 10 36-9 30 8 22-11 40 9 30-6 26 8 38-10 24 7 32-6 40 10 20-8 36 7 28-9 34 10 26-8 42 6 24-9 30 8 36-6 28 9 26-7 40 8 22-10 38 9 30-7 24 6 36-8 26 9 30-6 V24Z"
      />
    </svg>
  )
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#home" className="flex items-center gap-2" aria-label="Smart Maker Fest 2026 — back to top">
      <span className="relative flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <Cog className="size-8" strokeWidth={1.5} aria-hidden="true" />
        <span className="absolute font-display text-sm leading-none">P</span>
      </span>
      <span className={cn('font-display uppercase leading-[0.95] tracking-wide text-foreground', compact ? 'text-sm' : 'text-base')}>
        Smart Maker
        <br />
        Fest <span className="text-primary">2026</span>
      </span>
    </a>
  )
}
