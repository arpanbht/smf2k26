import Image from 'next/image'
import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Breadcrumb, QuoteStrap, TagChipList } from './primitives'

export type EventSectionProps = {
  id: string
  name: string
  title: string
  subtitle: string
  aboutHeading?: string
  description: ReactNode
  chipsHeading?: string
  chips?: { label: string; icon: LucideIcon }[]
  image: string
  imageAlt: string
  imageShape?: 'rounded' | 'circle'
  imageOverlay?: ReactNode
  sideBanner?: string[]
  quote: string
  tone?: 'light' | 'alt'
  children?: ReactNode
}

export function EventSection({
  id,
  name,
  title,
  subtitle,
  aboutHeading,
  description,
  chipsHeading,
  chips,
  image,
  imageAlt,
  imageShape = 'rounded',
  imageOverlay,
  sideBanner,
  quote,
  tone = 'light',
  children,
}: EventSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn('py-20 md:py-24', tone === 'light' ? 'parchment' : 'parchment-alt')}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          <div>
            <Breadcrumb current={name} />
            <h2 id={`${id}-title`} className="font-display text-5xl uppercase leading-[0.9] text-balance md:text-7xl">
              {title}
            </h2>
            <p className="mt-3 font-display text-lg uppercase tracking-[0.2em] text-primary md:text-xl">{subtitle}</p>

            {aboutHeading && <h3 className="mt-6 text-sm font-bold uppercase tracking-widest">{aboutHeading}</h3>}
            <div className={cn('max-w-xl leading-relaxed text-muted-foreground', aboutHeading ? 'mt-2' : 'mt-6')}>
              {description}
            </div>

            {chips && chips.length > 0 && (
              <div className="mt-6">
                {chipsHeading && (
                  <h3 className="mb-3 text-sm font-bold uppercase tracking-widest">{chipsHeading}</h3>
                )}
                <TagChipList chips={chips} />
              </div>
            )}

            {children && <div className="mt-6">{children}</div>}
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              {imageShape === 'circle' ? (
                <div className="relative mx-auto aspect-square w-full max-w-md rounded-full border-[10px] border-foreground p-2 shadow-2xl ring-4 ring-accent/60">
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    className="rounded-full object-cover"
                  />
                </div>
              ) : (
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border-4 border-card shadow-xl sm:aspect-[4/5] lg:aspect-[4/5]">
                  <Image src={image} alt={imageAlt} fill sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover" />
                  {imageOverlay}
                </div>
              )}
            </div>
            {sideBanner && (
              <p
                className="font-script text-4xl leading-[1.05] text-foreground sm:w-40 sm:-rotate-3 md:text-4xl"
                aria-label={sideBanner.join(' ')}
              >
                {sideBanner.map((line, i) => (
                  <span key={line} className={cn('block', i === sideBanner.length - 1 && 'text-primary')}>
                    {line}
                  </span>
                ))}
              </p>
            )}
          </div>
        </div>

        <QuoteStrap quote={quote} />
      </div>
    </section>
  )
}
