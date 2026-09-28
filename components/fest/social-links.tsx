import { SOCIAL_LINKS } from '@/lib/site'
import { cn } from '@/lib/utils'

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-3.5" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

const LINKS = [
  { href: SOCIAL_LINKS.instagram, label: 'Instagram', Icon: InstagramIcon },
  { href: SOCIAL_LINKS.x, label: 'X (Twitter)', Icon: XIcon },
  { href: SOCIAL_LINKS.linkedin, label: 'LinkedIn', Icon: LinkedInIcon },
]

export function SocialLinks({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <ul className={cn('flex items-center gap-2', className)}>
      {LINKS.map(({ href, label, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={cn(
              'flex size-8 items-center justify-center rounded-full border transition-colors',
              inverted
                ? 'border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary'
                : 'border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground',
            )}
          >
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  )
}
