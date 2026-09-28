import { About } from '@/components/fest/about'
import { Contact } from '@/components/fest/contact'
import {
  ArtisansAlley,
  FlavourFiesta,
  LevelUp,
  MakersExhibition,
  MakersWorkshop,
  MindSpark,
  ReElVolution,
  SmartMakeAThon,
  SmartPowerTalk,
  VisualVortex,
} from '@/components/fest/event-sections'
import { EventsOverview } from '@/components/fest/events-overview'
import { Gallery } from '@/components/fest/gallery'
import { Hero } from '@/components/fest/hero'
import { IntroVideo } from '@/components/fest/intro-video'
import { SiteFooter } from '@/components/fest/site-footer'
import { SiteHeader } from '@/components/fest/site-header'

export default function HomePage() {
  return (
    <>
      <IntroVideo />
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <EventsOverview />
        <MakersExhibition />
        <MindSpark />
        <SmartMakeAThon />
        <SmartPowerTalk />
        <MakersWorkshop />
        <LevelUp />
        <ReElVolution />
        <VisualVortex />
        <FlavourFiesta />
        <ArtisansAlley />
        <Gallery />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
