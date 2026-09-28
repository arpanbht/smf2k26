import { EVENT_TILES } from '@/lib/site'
import { EventCarousel } from './event-carousel'
import { QuoteStrap } from './primitives'

export function EventsOverview() {
  return (
    <section id="events" className="parchment py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Our Events</p>
          <h2 className="font-display text-4xl uppercase leading-[0.95] text-balance md:text-6xl">
            A Festival of Ideas, People <span className="text-primary">and Possibilities</span>
          </h2>
          <p className="mt-4 font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Explore. Participate. Create a brighter tomorrow.
          </p>
        </div>

        <EventCarousel events={EVENT_TILES} />

        <QuoteStrap quote="Building a Brighter Bengal, Together." withRegister={false} />
      </div>
    </section>
  )
}
