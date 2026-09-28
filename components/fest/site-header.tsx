'use client'

import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { EVENT_SECTION_IDS, NAV_LINKS } from '@/lib/site'
import { cn } from '@/lib/utils'
import { Logo, RegisterButton } from './primitives'
import { SocialLinks } from './social-links'

const TRACKED_IDS = ['home', 'about', 'events', ...EVENT_SECTION_IDS, 'gallery', 'contact']

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const id = entry.target.id
          setActive(EVENT_SECTION_IDS.includes(id) ? 'events' : id)
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    for (const id of TRACKED_IDS) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-40 border-b transition-all duration-300',
        scrolled ? 'border-border bg-card/95 shadow-sm backdrop-blur' : 'border-transparent bg-card/80',
      )}
    >
      <div
        className={cn(
          'mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 transition-all duration-300 md:px-6',
          scrolled ? 'py-2' : 'py-3 md:py-4',
        )}
      >
        <Logo compact={scrolled} />

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={active === link.id ? 'true' : undefined}
                  className={cn(
                    'relative rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    active === link.id ? 'bg-primary/10 text-primary' : 'text-foreground hover:text-primary',
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <SocialLinks className="hidden lg:flex" />
          <RegisterButton size="sm" />
        </div>

        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-full border border-primary/30 text-primary md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border bg-card px-4 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'block border-b border-border/60 py-3 font-medium',
                    active === link.id ? 'text-primary' : 'text-foreground',
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center justify-between">
            <SocialLinks />
            <RegisterButton size="sm" />
          </div>
        </nav>
      )}
    </header>
  )
}
