import type React from 'react'
import Image from 'next/image'
import { ArrowRight, CalendarDays, MapPin } from 'lucide-react'
import { EVENT_DATES, VENUE_ADDRESS, VENUE_NAME } from '@/lib/site'
import { TrailerButton } from './trailer-modal'
import { TornEdge } from './primitives'

const TAGLINE = ['Make', 'Experiment', 'Collaborate', 'Learn', 'Share']

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden parchment">
      <Image
        src="/images/hero.png"
        alt="Illustration of a Durga-inspired goddess, Howrah Bridge and a drone over the Kolkata skyline"
        fill
        priority
        sizes="100vw"
        className="intro-reveal-bg -z-20 object-cover object-right"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/90 to-background/10 md:via-background/75" />

      <div className="mx-auto flex min-h-[calc(100svh-4.5rem)] max-w-7xl flex-col justify-center px-4 py-16 md:px-6 md:py-24">
        <div className="max-w-2xl">
          <p style={{ '--reveal-delay': '200ms' } as React.CSSProperties} className="intro-reveal mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {"Bengal's Soul · Ideas Without Borders"}
          </p>
          <h1 style={{ '--reveal-delay': '350ms' } as React.CSSProperties} className="intro-reveal font-display text-6xl uppercase leading-[0.9] text-foreground text-balance sm:text-7xl lg:text-8xl">
            Smart Maker <span className="text-primary">Fest 2026</span>
          </h1>
          <p style={{ '--reveal-delay': '500ms' } as React.CSSProperties} className="intro-reveal mt-4 font-display text-xl uppercase tracking-[0.25em] text-primary md:text-2xl">
            Innovation Meets Tradition
          </p>
          <ul style={{ '--reveal-delay': '600ms' } as React.CSSProperties} className="intro-reveal mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold uppercase tracking-widest text-foreground">
            {TAGLINE.map((word, i) => (
              <li key={word} className="flex items-center gap-3">
                {word}
                {i < TAGLINE.length - 1 && (
                  <span className="text-accent" aria-hidden="true">
                    ·
                  </span>
                )}
              </li>
            ))}
          </ul>

          <dl style={{ '--reveal-delay': '750ms' } as React.CSSProperties} className="intro-reveal mt-8 grid gap-3 sm:grid-cols-2">
            <div className="flex items-start gap-3 rounded-xl border border-border bg-card/85 p-4">
              <CalendarDays className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Dates</dt>
                <dd className="font-semibold">{EVENT_DATES}</dd>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-border bg-card/85 p-4">
              <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Venue</dt>
                <dd className="text-sm font-semibold leading-snug">
                  {VENUE_NAME}, {VENUE_ADDRESS}
                </dd>
              </div>
            </div>
          </dl>

          <div style={{ '--reveal-delay': '900ms' } as React.CSSProperties} className="intro-reveal mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#events"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-colors hover:bg-maroon-deep"
            >
              Explore Events
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <TrailerButton />
          </div>
        </div>
      </div>
      <TornEdge className="absolute inset-x-0 bottom-0 text-secondary" />
    </section>
  )
}
