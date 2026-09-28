'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight, Cog, X } from 'lucide-react'
import { useRef, useState } from 'react'
import { cn } from '@/lib/utils'

const PHOTOS = [
  { src: '/images/gallery-music.png', alt: 'Folk band performing on the festival stage', tall: true },
  { src: '/images/gallery-crowd.png', alt: 'Students gathered around a drone demonstration', tall: false },
  { src: '/images/makers-exhibition.png', alt: 'Maker exhibition hall with a robotic arm on display', tall: false },
  { src: '/images/level-up.png', alt: 'Gamer competing in the Level Up tournament', tall: true },
  { src: '/images/flavour-fiesta.png', alt: 'Food stalls at Flavour Fiesta', tall: false },
  { src: '/images/artisans-alley.png', alt: 'Artisan painting a Durga idol', tall: true },
  { src: '/images/power-talk.png', alt: 'Panel discussion at Smart Power Talk', tall: false },
  { src: '/images/workshop.png', alt: 'Hands-on soldering at the Maker’s Workshop', tall: false },
  { src: '/images/reel.png', alt: 'Filming a reel at a Durga Puja pandal', tall: true },
]

export function Gallery() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [index, setIndex] = useState(0)

  const openAt = (i: number) => {
    setIndex(i)
    dialogRef.current?.showModal()
  }
  const step = (delta: number) => setIndex((i) => (i + delta + PHOTOS.length) % PHOTOS.length)
  const current = PHOTOS[index]

  return (
    <section id="gallery" className="parchment py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Moments & Memories</p>
          <h2 className="font-display text-5xl uppercase md:text-7xl">Gallery</h2>
        </div>

        <ul className="columns-2 gap-4 md:columns-3 [&>li]:mb-4">
          {PHOTOS.map((photo, i) => (
            <li key={photo.src} className="break-inside-avoid">
              <button
                type="button"
                onClick={() => openAt(i)}
                className="group relative block w-full overflow-hidden rounded-2xl border-4 border-card bg-maroon-deep shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                aria-label={`Enlarge photo: ${photo.alt}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={800}
                  height={photo.tall ? 1000 : 600}
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className={cn(
                    'w-full object-cover transition-transform duration-500 group-hover:scale-105',
                    photo.tall ? 'aspect-[4/5]' : 'aspect-[4/3]',
                  )}
                />
                <Cog className="absolute left-2 top-2 size-5 text-accent drop-shadow" aria-hidden="true" />
                <Cog className="absolute bottom-2 right-2 size-5 text-accent drop-shadow" aria-hidden="true" />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialogRef}
        aria-label="Photo viewer"
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current?.close()
        }}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') step(1)
          if (e.key === 'ArrowLeft') step(-1)
        }}
        className="m-auto w-[min(94vw,1100px)] overflow-visible bg-transparent p-0 backdrop:bg-foreground/85"
      >
        <figure className="relative">
          <Image
            src={current.src}
            alt={current.alt}
            width={1400}
            height={1000}
            sizes="94vw"
            className="max-h-[80vh] w-full rounded-2xl border-4 border-card object-contain bg-maroon-deep"
          />
          <figcaption className="mt-3 text-center text-sm text-primary-foreground">{current.alt}</figcaption>
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Close photo viewer"
            className="absolute -top-4 -right-2 flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg"
          >
            <X className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Previous photo"
            className="absolute left-2 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-card/90 text-primary"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Next photo"
            className="absolute right-2 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-card/90 text-primary"
          >
            <ChevronRight className="size-5" />
          </button>
        </figure>
      </dialog>
    </section>
  )
}
