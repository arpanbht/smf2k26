'use client'

import { Play, X } from 'lucide-react'
import { useRef, useState } from 'react'
import { TRAILER_EMBED_URL } from '@/lib/site'

export function TrailerButton() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [open, setOpen] = useState(false)

  const show = () => {
    setOpen(true)
    dialogRef.current?.showModal()
  }
  const close = () => dialogRef.current?.close()

  return (
    <>
      <button
        type="button"
        onClick={show}
        className="inline-flex items-center gap-2 rounded-full border-2 border-foreground/80 bg-card/70 px-6 py-2.5 font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
      >
        <Play className="size-4 fill-current" aria-hidden="true" />
        Watch Trailer
      </button>

      <dialog
        ref={dialogRef}
        onClose={() => setOpen(false)}
        onClick={(e) => {
          if (e.target === dialogRef.current) close()
        }}
        aria-label="Smart Maker Fest 2026 trailer"
        className="m-auto w-[min(92vw,960px)] rounded-2xl bg-maroon-deep p-0 backdrop:bg-foreground/80"
      >
        <div className="flex items-center justify-between px-4 py-3 text-primary-foreground">
          <p className="font-display uppercase tracking-wider">Official Trailer</p>
          <button type="button" onClick={close} aria-label="Close trailer" className="rounded-full p-1 hover:bg-primary">
            <X className="size-5" />
          </button>
        </div>
        <div className="aspect-video w-full bg-foreground">
          {open && (
            <iframe
              src={`${TRAILER_EMBED_URL}?autoplay=1`}
              title="Smart Maker Fest 2026 trailer"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              className="size-full"
            />
          )}
        </div>
      </dialog>
    </>
  )
}
