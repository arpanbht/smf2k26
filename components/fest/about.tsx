import Image from 'next/image'
import { BookOpen, FlaskConical, Handshake, Hammer, Share2 } from 'lucide-react'
import { QuoteStrap, TagChipList } from './primitives'

const PILLARS = [
  { label: 'Build', icon: Hammer },
  { label: 'Experiment', icon: FlaskConical },
  { label: 'Collaborate', icon: Handshake },
  { label: 'Learn', icon: BookOpen },
  { label: 'Share', icon: Share2 },
]

export function About() {
  return (
    <section id="about" className="parchment-alt overflow-x-clip py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">About Us</p>
            <h2 className="font-display text-5xl uppercase leading-[0.95] text-balance md:text-6xl">
              About <span className="text-primary">Smart Maker Fest 2026</span>
            </h2>
            <p className="mt-3 font-display text-lg uppercase tracking-[0.2em] text-primary">
              {"Bengal's Soul. Ideas Without Borders."}
            </p>
            <div className="mt-6 flex flex-col gap-4 leading-relaxed text-muted-foreground">
              <p>
                Smart Maker Fest 2026 is a two-day festival that brings together students, innovators, entrepreneurs,
                artists, creators and technology enthusiasts under one roof — organised by{' '}
                <strong className="text-foreground">Smart Society USA &amp; Canada</strong> in collaboration with the{' '}
                <strong className="text-foreground">IEM-UEM Group</strong>.
              </p>
              <p>
                Rooted in the spirit of Bengal&apos;s <em>bhraatri-gaana</em> — the song of togetherness — the fest
                blends maker culture with our heritage: ideas, creativity, technology and tradition sharing the same
                stage, just like the pandals of Durga Puja bring a whole city together.
              </p>
            </div>
            <div className="mt-8">
              <TagChipList chips={PILLARS} />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 -z-0 rotate-2 rounded-3xl border-2 border-dashed border-primary/30" aria-hidden="true" />
            <Image
              src="/images/about.png"
              alt="Robot mascot in a traditional dhoti holding a scroll by the Kolkata riverfront with Victoria Memorial"
              width={1024}
              height={1024}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-xl lg:aspect-square"
            />
          </div>
        </div>
        <QuoteStrap quote="A Maker Mindset. A Brighter Bengal." withRegister={false} />
      </div>
    </section>
  )
}
