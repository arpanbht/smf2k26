export const REGISTER_URL = '#contact'
export const TRAILER_EMBED_URL = 'https://www.youtube-nocookie.com/embed/ScMzIvxBSi4'

export const EVENT_DATES = '3rd & 4th October 2026'
export const VENUE_NAME = 'IEM Management Building'
export const VENUE_ADDRESS = 'EP Block, Sector V, Bidhannagar, Kolkata – 700091'
export const CONTACT_EMAIL = 'smartmakerfest2k26@gmail.com'
export const CONTACT_PHONE = '+91 95478 78521'
export const COORDINATOR = 'Prof. Dr. Animesh Kundu'

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/',
  x: 'https://x.com/',
  linkedin: 'https://linkedin.com/',
}

export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'events', label: 'Events' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
] as const

export const EVENT_TILES = [
  { id: 'makers-exhibition', title: "Maker's Exhibition", image: '/webpic%20smf/6178943705734124712%20(1).jpg', flagship: true },
  { id: 'mindspark', title: 'MindSpark', image: '/webpic%20smf/6178943705734124813.jpg', flagship: true },
  { id: 'smart-make-a-thon', title: 'Smart Make-a-Thon', image: '/webpic%20smf/6178943705734124814.jpg', flagship: true },
  { id: 'smart-power-talk', title: 'Smart Power Talk', image: '/webpic%20smf/6178943705734124815.jpg', flagship: true },
  { id: 'makers-workshop', title: "Maker's Workshop", image: '/webpic%20smf/6178943705734124816.jpg', flagship: false },
  { id: 'level-up', title: 'Level Up', image: '/webpic%20smf/6178943705734124817.jpg', flagship: false },
  { id: 're-el-volution', title: 'Re-el-volution', image: '/webpic%20smf/6178943705734124818.jpg', flagship: false },
  { id: 'visual-vortex', title: 'Visual Vortex', image: '/webpic%20smf/6178943705734124826.jpg', flagship: false },
  { id: 'flavour-fiesta', title: 'Flavour Fiesta', image: '/webpic%20smf/6178943705734124827.jpg', flagship: false },
  { id: 'artisans-alley', title: "Artisan's Alley", image: '/webpic%20smf/6178943705734124828.jpg', flagship: false },
] as const

export const EVENT_SECTION_IDS: string[] = EVENT_TILES.map((t) => t.id)
