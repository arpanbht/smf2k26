import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Anton, Caveat_Brush, Poppins } from 'next/font/google'
import './globals.css'

const anton = Anton({ subsets: ['latin'], weight: '400', variable: '--font-anton' })
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})
const caveatBrush = Caveat_Brush({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-caveat-brush',
})

export const metadata: Metadata = {
  title: 'Smart Maker Fest 2026 | Bengal’s Soul, Ideas Without Borders',
  description:
    'Smart Maker Fest 2026 — a two-day innovation festival on 3rd & 4th October 2026 at IEM Management Building, Sector V, Kolkata. Exhibitions, Make-a-Thon, quizzes, gaming, food and craft.',
  generator: 'v0.app',
  openGraph: {
    title: 'Smart Maker Fest 2026',
    description: 'Innovation meets tradition. 3rd & 4th October 2026, Kolkata.',
    images: [{ url: '/images/hero.png', width: 1536, height: 864, alt: 'Smart Maker Fest 2026 hero art' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', images: ['/images/hero.png'] },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#8b2323',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      data-intro="playing"
      suppressHydrationWarning
      className={`${anton.variable} ${poppins.variable} ${caveatBrush.variable}`}
    >
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
