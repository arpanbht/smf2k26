import { CalendarDays, Mail, MapPin } from 'lucide-react'
import { CONTACT_EMAIL, EVENT_DATES, NAV_LINKS, VENUE_ADDRESS, VENUE_NAME } from '@/lib/site'
import { SocialLinks } from './social-links'

export function SiteFooter() {
  return (
    <footer className="bg-maroon-deep text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-3 md:px-6">
        <div>
          <p className="font-display text-2xl uppercase leading-none">
            Smart Maker Fest <span className="text-accent">2026</span>
          </p>
          <p className="mt-2 text-sm opacity-80">{"Bengal's Soul · Ideas Without Borders"}</p>
          <p className="mt-4 text-xs opacity-70">
            Organised by Smart Society USA &amp; Canada in collaboration with IEM-UEM Group.
          </p>
        </div>
        <ul className="flex flex-col gap-3 text-sm">
          <li className="flex items-start gap-3">
            <CalendarDays className="size-4 shrink-0 text-accent" aria-hidden="true" />
            {EVENT_DATES}
          </li>
          <li className="flex items-start gap-3">
            <MapPin className="size-4 shrink-0 text-accent" aria-hidden="true" />
            <span>
              {VENUE_NAME}, {VENUE_ADDRESS}
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Mail className="size-4 shrink-0 text-accent" aria-hidden="true" />
            <a href={`mailto:${CONTACT_EMAIL}`} className="break-all hover:underline">
              {CONTACT_EMAIL}
            </a>
          </li>
        </ul>
        <div className="flex flex-col gap-4 md:items-end">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="opacity-90 hover:text-accent">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <SocialLinks inverted />
        </div>
      </div>
      <p className="border-t border-primary-foreground/15 py-4 text-center text-xs opacity-70">
        © 2026 Smart Maker Fest. A maker mindset. A brighter Bengal.
      </p>
    </footer>
  )
}
