"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
  Heart,
  Volume2,
  ListMusic,
  Maximize2,
} from "lucide-react"
import { cn } from "@/lib/utils"

export function PlayerBar() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [liked, setLiked] = useState(false)

  return (
    <footer className="flex items-center justify-between gap-4 border-t border-border bg-card px-3 py-3 md:px-6">
      {/* Now playing info */}
      <div className="flex min-w-0 items-center gap-3 md:w-1/4">
        <Image
          src="/albums/album-1.png"
          alt="Sampul album Sorot"
          width={56}
          height={56}
          className="size-12 rounded-md object-cover md:size-14"
        />
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">Cahaya Terakhir</p>
          <p className="truncate text-xs text-muted-foreground">
            Maya Anindita
          </p>
        </div>
        <button
          onClick={() => setLiked((v) => !v)}
          className="hidden shrink-0 text-muted-foreground transition-colors hover:text-primary sm:block"
          aria-label="Suka lagu ini"
        >
          <Heart
            className={cn("size-4", liked && "fill-primary text-primary")}
          />
        </button>
      </div>

      {/* Controls */}
      <div className="flex flex-1 flex-col items-center gap-2">
        <div className="flex items-center gap-4">
          <button
            className="hidden text-muted-foreground transition-colors hover:text-foreground sm:block"
            aria-label="Acak"
          >
            <Shuffle className="size-4" />
          </button>
          <button
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Sebelumnya"
          >
            <SkipBack className="size-5" />
          </button>
          <button
            onClick={() => setIsPlaying((v) => !v)}
            className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
            aria-label={isPlaying ? "Jeda" : "Putar"}
          >
            {isPlaying ? (
              <Pause className="size-5 fill-current" />
            ) : (
              <Play className="size-5 fill-current" />
            )}
          </button>
          <button
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Berikutnya"
          >
            <SkipForward className="size-5" />
          </button>
          <button
            className="hidden text-muted-foreground transition-colors hover:text-foreground sm:block"
            aria-label="Ulangi"
          >
            <Repeat className="size-4" />
          </button>
        </div>

        <div className="hidden w-full max-w-md items-center gap-2 md:flex">
          <span className="text-xs tabular-nums text-muted-foreground">
            1:24
          </span>
          <div className="group relative h-1 flex-1 rounded-full bg-secondary">
            <div className="absolute inset-y-0 left-0 w-1/3 rounded-full bg-primary" />
            <div className="absolute left-1/3 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
          <span className="text-xs tabular-nums text-muted-foreground">
            3:42
          </span>
        </div>
      </div>

      {/* Volume + extras */}
      <div className="hidden items-center justify-end gap-3 md:flex md:w-1/4">
        <button
          className="text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Antrean"
        >
          <ListMusic className="size-4" />
        </button>
        <div className="flex items-center gap-2">
          <Volume2 className="size-4 text-muted-foreground" />
          <div className="group relative h-1 w-24 rounded-full bg-secondary">
            <div className="absolute inset-y-0 left-0 w-2/3 rounded-full bg-foreground" />
          </div>
        </div>
        <button
          className="text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Layar penuh"
        >
          <Maximize2 className="size-4" />
        </button>
      </div>
    </footer>
  )
}
