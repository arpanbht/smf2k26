import {
  Atom,
  Award,
  Box,
  Brush,
  CakeSlice,
  Camera,
  Check,
  ChefHat,
  Clapperboard,
  Compass,
  Cpu,
  Eye,
  Film,
  Gem,
  Globe,
  GraduationCap,
  Hammer,
  History,
  Landmark,
  Lightbulb,
  MapPin,
  Music,
  Newspaper,
  Palette,
  PenTool,
  Rocket,
  Scissors,
  Settings,
  Soup,
  Sparkles,
  Target,
  TrendingUp,
  Trophy,
  Users,
  Utensils,
  Wand2,
  Wrench,
} from 'lucide-react'
import { EventSection } from './event-section'

export function MakersExhibition() {
  return (
    <EventSection
      id="makers-exhibition"
      name="Maker's Exhibition"
      title="Maker's Exhibition"
      subtitle="Ideas on Display"
      aboutHeading="About the Exhibition"
      description={
        <p>
          A grand showcase of student projects, creative works and innovative ideas across engineering, art, craft and
          design. Walk the aisles, meet the makers and see what Bengal&apos;s brightest minds have been building.
        </p>
      }
      chips={[
        { label: 'Technology', icon: Cpu },
        { label: 'Engineering', icon: Settings },
        { label: 'Art', icon: Palette },
        { label: 'Craft', icon: Scissors },
        { label: 'Design', icon: PenTool },
        { label: 'Creative Projects', icon: Lightbulb },
        { label: 'Handcrafted Work', icon: Hammer },
        { label: 'Prototypes', icon: Box },
      ]}
      image="/images/makers-exhibition.png"
      imageAlt="Students presenting a robotic arm and prototypes to visitors at an exhibition"
      sideBanner={['Different', 'Passions', 'One', 'Bengal']}
      quote="See Ideas. Meet Creators. Be Inspired."
    >
      <div className="rounded-2xl border-l-4 border-primary bg-card/80 p-5">
        <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary">
          <Users className="size-4" aria-hidden="true" />
          Who Can Participate
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Engineering students, project teams, makers, artists and innovators — anyone with an idea worth showing.
        </p>
      </div>
    </EventSection>
  )
}

export function MindSpark() {
  return (
    <EventSection
      id="mindspark"
      name="MindSpark"
      title="MindSpark"
      subtitle="A Quiz Beyond Boundaries"
      tone="alt"
      aboutHeading="About MindSpark"
      description={
        <p>
          A high-energy quiz competition that puts your curiosity to the test — spanning science, technology, history,
          pop culture, current affairs and general knowledge. Fast buzzers, sharp minds, big fun.
        </p>
      }
      chipsHeading="What to Expect"
      chips={[
        { label: 'Science', icon: Atom },
        { label: 'Technology', icon: Cpu },
        { label: 'History', icon: History },
        { label: 'Pop Culture', icon: Music },
        { label: 'Current Affairs', icon: Newspaper },
        { label: 'General Knowledge', icon: GraduationCap },
      ]}
      image="/images/mindspark.png"
      imageAlt="Silhouette of a head filled with gears, a lightbulb and books"
      sideBanner={['Curious', 'Minds', 'Brighter', 'Bengal']}
      quote="Curiosity Today. A Brighter Tomorrow."
    />
  )
}

const MAKEATHON_STEPS = [
  'Form a team',
  'Work on a real-world problem',
  'Brainstorm a solution',
  'Design your prototype',
  'Develop and test it',
  'Present it to experts',
]

export function SmartMakeAThon() {
  return (
    <EventSection
      id="smart-make-a-thon"
      name="Smart Make-a-Thon"
      title="Smart Make-a-Thon"
      subtitle="Ideate. Design. Prototype. Build."
      description={
        <p>
          An intensive, hackathon-style challenge where teams develop solutions to real-world problems with guidance
          from mentors, build working prototypes, and present them live to a panel of experts.
        </p>
      }
      image="/images/make-a-thon.png"
      imageAlt="A student team building a robot prototype with laptops and circuit boards"
      sideBanner={['Solve.', 'Build.', 'Innovate.', 'For a Better Bengal']}
      quote="Real Problems. Bolder Solutions."
    >
      <div className="grid gap-4 sm:grid-cols-[auto_1fr]">
        <div className="flex flex-row gap-3 sm:flex-col">
          <div className="flex-1 rounded-2xl bg-primary p-4 text-primary-foreground">
            <Users className="size-5 text-accent" aria-hidden="true" />
            <p className="mt-2 text-xs uppercase tracking-widest opacity-80">Team Size</p>
            <p className="font-display text-xl uppercase">Up to 6 members</p>
          </div>
          <div className="flex-1 rounded-2xl bg-maroon-deep p-4 text-primary-foreground">
            <GraduationCap className="size-5 text-accent" aria-hidden="true" />
            <p className="mt-2 text-xs uppercase tracking-widest opacity-80">Guidance</p>
            <p className="font-display text-xl uppercase">Expert mentors</p>
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-card/80 p-5">
          <h3 className="text-sm font-bold uppercase tracking-widest text-primary">{"What You'll Do"}</h3>
          <ol className="mt-3 flex flex-col gap-2">
            {MAKEATHON_STEPS.map((step) => (
              <li key={step} className="flex items-center gap-3 text-sm font-medium">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-3" aria-hidden="true" />
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </EventSection>
  )
}

export function SmartPowerTalk() {
  return (
    <EventSection
      id="smart-power-talk"
      name="Smart Power Talk"
      title="Smart Power Talk"
      subtitle="Ideas That Shape Tomorrow"
      tone="alt"
      description={
        <p>
          A panel of thought leaders and industry experts discuss technology, innovation, future trends, industry
          changes and strategies — candid conversations that help you see where the world is heading next.
        </p>
      }
      chips={[
        { label: 'Technology', icon: Cpu },
        { label: 'Innovation', icon: Lightbulb },
        { label: 'Future Trends', icon: TrendingUp },
        { label: 'Industry Insights', icon: Eye },
        { label: 'Strategies', icon: Target },
        { label: 'New Developments', icon: Rocket },
      ]}
      image="/images/power-talk.png"
      imageAlt="Silhouettes of panel speakers on a stage under warm spotlights"
      imageOverlay={
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-maroon-deep via-maroon-deep/70 to-transparent p-6 pt-16">
          <p className="font-display text-2xl uppercase leading-tight text-primary-foreground">
            Ideas · People · Perspectives
          </p>
          <p className="font-script text-2xl text-accent">A Brighter Bengal</p>
        </div>
      }
      quote="Conversations Today. A Brighter Tomorrow."
    />
  )
}

export function MakersWorkshop() {
  return (
    <EventSection
      id="makers-workshop"
      name="Maker's Workshop"
      title="Maker's Workshop"
      subtitle="Learn. Make. Grow."
      aboutHeading="About the Event"
      description={
        <p>
          Hands-on workshops conducted by industry professionals. Gain practical experience, explore new tools and
          techniques, and walk away with real skills you can build on.
        </p>
      }
      chips={[
        { label: 'Practical Learning', icon: Wrench },
        { label: 'Industry Professionals', icon: Users },
        { label: 'New Tools', icon: Hammer },
        { label: 'New Techniques', icon: Wand2 },
        { label: 'Skill Development', icon: TrendingUp },
      ]}
      image="/images/workshop.png"
      imageAlt="Close-up of hands soldering an electronics kit on a workbench"
      sideBanner={['Hands On.', 'Minds On.', 'Brighter', 'Bengal']}
      quote="Learn Today. Lead Tomorrow."
    />
  )
}

const GAMES = [
  { name: 'BGMI', note: 'Battlegrounds Mobile India' },
  { name: 'PES', note: 'eFootball' },
  { name: 'Call of Duty', note: 'Mobile' },
]

export function LevelUp() {
  return (
    <EventSection
      id="level-up"
      name="Level Up"
      title="Level Up"
      subtitle="Play. Compete. Connect."
      tone="alt"
      description={
        <p>
          Be part of Smart Maker Fest with tournaments, exciting prizes and a vibrant gaming community. Squad up for
          BGMI, PES (eFootball) and Call of Duty Mobile — and prove your team is the best in Bengal.
        </p>
      }
      chips={[
        { label: 'Exciting Prizes', icon: Trophy },
        { label: 'Team Recognition', icon: Award },
        { label: 'Competitive Community', icon: Users },
      ]}
      image="/images/level-up.png"
      imageAlt="Gamer with headphones facing a glowing monitor in a dark red room"
      sideBanner={['Games', 'People', 'Passion', 'A Brighter Bengal']}
      quote="Team Together. Greater Tomorrow."
    >
      <ul className="flex flex-wrap gap-3" aria-label="Featured games">
        {GAMES.map((game) => (
          <li
            key={game.name}
            className="flex min-w-32 flex-col rounded-xl bg-foreground px-5 py-3 text-primary-foreground shadow-md"
          >
            <span className="font-display text-2xl uppercase leading-none">{game.name}</span>
            <span className="mt-1 text-[11px] uppercase tracking-widest text-accent">{game.note}</span>
          </li>
        ))}
      </ul>
    </EventSection>
  )
}

export function ReElVolution() {
  return (
    <EventSection
      id="re-el-volution"
      name="Re-el-volution"
      title="Re-el-volution"
      subtitle="Tell a Story in a Reel"
      description={
        <p>
          A reel-making competition to showcase your creativity, storytelling and cinematographic vision through
          short-form video. Express ideas with filters, transitions and visual flair — and capture Bengal through your
          own lens.
        </p>
      }
      chips={[
        { label: 'Creativity', icon: Sparkles },
        { label: 'Storytelling', icon: Film },
        { label: 'Editing', icon: Scissors },
        { label: 'Cinematography', icon: Clapperboard },
        { label: 'Visual Presentation', icon: Eye },
        { label: 'Social Media Content', icon: Globe },
      ]}
      image="/images/reel.png"
      imageAlt="Young woman filming a reel of a Durga Puja pandal on her phone"
      sideBanner={['Every', 'Story', 'A Brighter Bengal']}
      quote="Small Videos. Big Ideas."
    />
  )
}

export function VisualVortex() {
  return (
    <EventSection
      id="visual-vortex"
      name="Visual Vortex"
      title="Visual Vortex"
      subtitle="See the Extraordinary"
      tone="alt"
      description={
        <p>
          A photography competition that challenges you to capture ordinary things from unique perspectives. Tell
          stories through people, places, moments, emotions and everyday life.
        </p>
      }
      chips={[
        { label: 'People', icon: Users },
        { label: 'Places', icon: MapPin },
        { label: 'Everyday Life', icon: Camera },
        { label: 'Unexplored Perspectives', icon: Compass },
      ]}
      image="/images/visual-vortex.png"
      imageAlt="Camera lens framing Victoria Memorial in a swirling vortex of light"
      imageShape="circle"
      sideBanner={['Different', 'Perspectives', 'Same', 'Bengal']}
      quote="Ideas. Perspective. A Brighter Bengal."
    />
  )
}

export function FlavourFiesta() {
  return (
    <EventSection
      id="flavour-fiesta"
      name="Flavour Fiesta"
      title="Flavour Fiesta"
      subtitle="A Culinary Journey"
      description={
        <p>
          A food festival bringing together diverse cuisines and street food. Explore local flavours, international
          dishes, street food, gourmet creations and sweet, spicy and savoury delights.
        </p>
      }
      chips={[
        { label: 'Local Food', icon: Soup },
        { label: 'International Food', icon: Globe },
        { label: 'Street Food', icon: Utensils },
        { label: 'Gourmet Food', icon: ChefHat },
        { label: 'Sweet, Tasty & Savoury', icon: CakeSlice },
      ]}
      image="/images/flavour-fiesta.png"
      imageAlt="Festival food stalls with biryani, rasgulla, jalebi and phuchka under lanterns"
      sideBanner={['Good', 'Food', 'Brings', 'People Together']}
      quote="Ideas Today. Greater Connect."
    />
  )
}

export function ArtisansAlley() {
  return (
    <EventSection
      id="artisans-alley"
      name="Artisan's Alley"
      title="Artisan's Alley"
      subtitle="Tradition Meets Creativity"
      tone="alt"
      description={
        <p>
          An art and craft gallery exhibiting traditional and contemporary artistic pieces. Meet artisans, explore
          unique creations and celebrate Bengal&apos;s rich heritage.
        </p>
      }
      chips={[
        { label: 'Handcrafted Jewellery', icon: Gem },
        { label: 'Sculptures', icon: Landmark },
        { label: 'Traditional Craftsmanship', icon: Brush },
        { label: 'Contemporary Designs', icon: PenTool },
      ]}
      image="/images/artisans-alley.png"
      imageAlt="An artisan painting the eye of a traditional Durga clay idol"
      sideBanner={['Crafted', 'With', 'Heart']}
      quote="Tradition Today. A Brighter Tomorrow."
    />
  )
}
