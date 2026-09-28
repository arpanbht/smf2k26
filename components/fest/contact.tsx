import Image from 'next/image'
import { CalendarDays, Mail, MapPin, Phone, UserRound } from 'lucide-react'
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  COORDINATOR,
  EVENT_DATES,
  VENUE_ADDRESS,
  VENUE_NAME,
} from '@/lib/site'
import { QuoteStrap } from './primitives'
import { SocialLinks } from './social-links'

export function Contact() {
  return (
    <section id="contact" className="relative isolate overflow-hidden parchment-alt pt-20 md:pt-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Contact</p>
            <h2 className="font-display text-5xl uppercase leading-[0.9] md:text-7xl">Get in Touch</h2>
            <p className="mt-3 font-display text-lg uppercase tracking-[0.2em] text-primary md:text-xl">
              {"Let's Build Together"}
            </p>
          </div>
          <p lang="bn" className="text-3xl font-bold leading-snug text-primary md:text-5xl lg:text-right">
            আনন্দ, আয়োজন,
            <br />
            যাত্রা।
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-primary p-6 text-primary-foreground shadow-xl md:p-8">
            <div className="flex items-center gap-4">
              <span className="flex size-14 items-center justify-center rounded-full bg-primary-foreground/10 ring-2 ring-accent">
                <UserRound className="size-7 text-accent" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest opacity-80">Point of Contact</p>
                <p className="font-display text-2xl uppercase">{COORDINATOR}</p>
                <p className="text-sm opacity-90">Faculty Coordinator</p>
              </div>
            </div>
            <ul className="mt-6 flex flex-col gap-3">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 break-all hover:underline">
                  <Mail className="size-5 shrink-0 text-accent" aria-hidden="true" />
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="flex items-center gap-3 hover:underline">
                  <Phone className="size-5 shrink-0 text-accent" aria-hidden="true" />
                  {CONTACT_PHONE}
                </a>
              </li>
            </ul>
            <SocialLinks inverted className="mt-6" />
          </div>

          <div className="grid gap-6">
            <div className="flex items-start gap-4 rounded-3xl border border-border bg-card/90 p-6 shadow-md">
              <CalendarDays className="size-8 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Save the Date</p>
                <p className="font-display text-3xl uppercase">{EVENT_DATES}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-3xl border border-border bg-card/90 p-6 shadow-md">
              <MapPin className="size-8 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Location</p>
                <address className="not-italic">
                  <span className="block font-display text-2xl uppercase">{VENUE_NAME}</span>
                  <span className="text-muted-foreground">{VENUE_ADDRESS}</span>
                </address>
              </div>
            </div>
          </div>
        </div>

        <QuoteStrap quote="Ideas Today. A Brighter Tomorrow." />
      </div>

      <div className="relative mt-12 h-48 md:h-72">
        <Image
          src="/images/tram.png"
          alt="Illustration of a classic yellow Kolkata tram on a heritage street"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-secondary to-transparent" />
      </div>
    </section>
  )
}
