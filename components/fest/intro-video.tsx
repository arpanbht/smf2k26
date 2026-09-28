'use client'

import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const EXIT_MS = 1400
const FADE_LEAD_S = 1.2

function revealSite() {
  document.documentElement.dataset.intro = 'done'
}

export function IntroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [visible, setVisible] = useState(true)
  const [leaving, setLeaving] = useState(false)
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    if (!visible) {
      revealSite()
      return
    }
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [visible])

  useEffect(() => {
    if (!visible) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  function close({ fromEnd = false } = {}) {
    if (leaving) return
    setLeaving(true)
    if (!fromEnd) videoRef.current?.pause()
    revealSite()
    window.setTimeout(() => setVisible(false), EXIT_MS)
  }

  function handleTimeUpdate() {
    const video = videoRef.current
    if (!video || !Number.isFinite(video.duration)) return
    // Start the crossfade before the final frame so the video's closing hero dissolves into the live hero.
    if (video.duration - video.currentTime <= FADE_LEAD_S) close({ fromEnd: true })
  }

  function toggleMute() {
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    setMuted(video.muted)
    if (!video.muted) void video.play()
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Smart Maker Fest 2026 intro video"
      className={cn(
        'parchment fixed inset-0 z-[100] flex items-center justify-center overflow-hidden transition-opacity ease-in-out',
        leaving && 'pointer-events-none opacity-0',
      )}
      style={{ transitionDuration: `${EXIT_MS}ms` }}
    >
      <video
        ref={videoRef}
        className={cn(
          'h-full w-full object-contain transition-transform ease-out md:object-cover',
          leaving && 'scale-[1.04]',
        )}
        style={{ transitionDuration: `${EXIT_MS}ms` }}
        src="/videos/intro.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => close({ fromEnd: true })}
        onError={() => close()}
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background/90 to-transparent" />

      <div
        className={cn(
          'absolute bottom-6 right-6 flex items-center gap-3 transition-opacity duration-300',
          leaving && 'opacity-0',
        )}
      >
        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? 'Unmute intro video' : 'Mute intro video'}
          className="flex size-11 items-center justify-center rounded-full border border-primary/30 bg-card/80 text-primary backdrop-blur transition-colors hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          {muted ? <VolumeX className="size-5" /> : <Volume2 className="size-5" />}
        </button>
        <button
          type="button"
          onClick={() => close()}
          className="flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-md shadow-primary/20 transition-colors hover:bg-maroon-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          Skip Intro
          <X className="size-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
