'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

type Event = {
  id: string
  title: string
  image: string
}

export function EventCarousel({ events }: { events: readonly Event[] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeEvent = events[activeIndex]

  const showPrevious = () => setActiveIndex((index) => (index - 1 + events.length) % events.length)
  const showNext = () => setActiveIndex((index) => (index + 1) % events.length)

  return (
    <div className="event-carousel mt-10" role="region" aria-label="Smart Maker Fest events">
      <div className="event-carousel-stage mx-auto h-[29rem] max-w-6xl sm:h-[34rem]">
        <div
          className="event-carousel-track"
          onClick={(clickEvent) => {
            if (clickEvent.target instanceof Element && clickEvent.target.closest('a')) return

            let nearestIndex = -1
            let nearestDistance = Number.POSITIVE_INFINITY

            for (const slide of clickEvent.currentTarget.querySelectorAll<HTMLElement>('.event-carousel-slide')) {
              if (getComputedStyle(slide).visibility === 'hidden') continue

              const face = slide.querySelector('a')
              const bounds = face?.getBoundingClientRect()
              if (!bounds) continue

              const isInside =
                clickEvent.clientX >= bounds.left &&
                clickEvent.clientX <= bounds.right &&
                clickEvent.clientY >= bounds.top &&
                clickEvent.clientY <= bounds.bottom
              if (!isInside) continue

              const distance = Math.abs(clickEvent.clientX - (bounds.left + bounds.width / 2))
              if (distance < nearestDistance) {
                nearestDistance = distance
                nearestIndex = Number(slide.dataset.index)
              }
            }

            if (nearestIndex >= 0) setActiveIndex(nearestIndex)
          }}
        >
          {events.map((event, index) => {
            const isActive = index === activeIndex
            let offset = index - activeIndex
            if (offset > events.length / 2) offset -= events.length
            if (offset < -events.length / 2) offset += events.length

            return (
              <div
                key={event.id}
                className="event-carousel-slide"
                data-offset={Math.abs(offset) > 2 ? 'far' : offset}
                data-index={index}
                aria-hidden={!isActive}
              >
                <a
                  href={`#${event.id}`}
                  tabIndex={isActive ? 0 : -1}
                  aria-label={`${event.title}, view event details`}
                  onClick={(clickEvent) => {
                    if (!isActive) {
                      clickEvent.preventDefault()
                      setActiveIndex(index)
                    }
                  }}
                  className="event-carousel-face group focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  <Image
                    src={event.image}
                    alt={`${event.title} event poster`}
                    fill
                    sizes="(min-width: 768px) 300px, 224px"
                    className="rounded-xl object-contain shadow-2xl"
                  />
                </a>
              </div>
            )
          })}
        </div>
      </div>

      <div className="mx-auto mt-5 flex max-w-xl items-center justify-between gap-4 px-4">
        <button
          type="button"
          onClick={showPrevious}
          aria-label="Previous event"
          className="flex size-11 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-card text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <ChevronLeft className="size-5" aria-hidden="true" />
        </button>

        <div className="min-w-0 flex-1 text-center" aria-live="polite" aria-atomic="true">
          <p className="font-display text-2xl uppercase leading-tight text-primary sm:text-3xl">{activeEvent.title}</p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {String(activeIndex + 1).padStart(2, '0')} / {String(events.length).padStart(2, '0')}
          </p>
        </div>

        <button
          type="button"
          onClick={showNext}
          aria-label="Next event"
          className="flex size-11 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-card text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <ChevronRight className="size-5" aria-hidden="true" />
        </button>
      </div>

      <div className="mt-5 flex justify-center gap-2" aria-label="Choose an event">
        {events.map((event, index) => (
          <button
            key={event.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Show ${event.title}`}
            aria-current={index === activeIndex ? 'true' : undefined}
            className={`size-2.5 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${index === activeIndex ? 'bg-primary' : 'bg-primary/25 hover:bg-primary/60'}`}
          />
        ))}
      </div>
    </div>
  )
}