"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
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
  ChevronDown,
  Plus,
  Mic2,
} from "lucide-react"
import { cn } from "@/lib/utils"
import {
  durationToSeconds,
  getLyrics,
  type Track,
} from "@/lib/music-data"

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, "0")}`
}

export function NowPlaying({
  track,
  queue,
}: {
  track: Track
  queue: Track[]
}) {
  const total = durationToSeconds(track.duration)
  const lyrics = useMemo(() => getLyrics(track.id), [track.id])

  const [isPlaying, setIsPlaying] = useState(true)
  const [liked, setLiked] = useState(false)
  const [shuffle, setShuffle] = useState(false)
  const [repeat, setRepeat] = useState(false)
  const [progress, setProgress] = useState(0)
  const barRef = useRef<HTMLButtonElement>(null)

  // Simulasi pemutaran
  useEffect(() => {
    if (!isPlaying) return
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= total) return repeat ? 0 : total
        return p + 1
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [isPlaying, total, repeat])

  // Tentukan baris lirik aktif berdasarkan waktu
  const activeLyricIndex = useMemo(() => {
    let idx = 0
    for (let i = 0; i < lyrics.length; i++) {
      if (progress >= lyrics[i].time) idx = i
    }
    return idx
  }, [progress, lyrics])

  function seek(e: React.MouseEvent<HTMLButtonElement>) {
    const el = barRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const ratio = (e.clientX - rect.left) / rect.width
    setProgress(Math.max(0, Math.min(total, Math.round(ratio * total))))
  }

  const percent = total > 0 ? (progress / total) * 100 : 0

  return (
    <div className="mx-auto max-w-6xl px-4 pb-6 pt-4 md:px-8">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <Link
          href="/"
          className="flex size-9 items-center justify-center rounded-full bg-secondary text-foreground transition-colors hover:bg-muted"
          aria-label="Tutup layar lagu"
        >
          <ChevronDown className="size-5" />
        </Link>
        <div className="text-center">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">
            Sedang Diputar
          </p>
          <p className="truncate text-sm font-medium">{track.album}</p>
        </div>
        <div className="size-9" aria-hidden />
      </div>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
        {/* Kolom kiri: cover, info, progress, kontrol */}
        <div className="flex flex-col">
          {/* Cover Album */}
          <div className="mx-auto w-full max-w-md">
            <Image
              src={track.cover || "/placeholder.svg"}
              alt={`Sampul album ${track.album}`}
              width={640}
              height={640}
              priority
              className="aspect-square w-full rounded-2xl object-cover shadow-2xl shadow-black/40"
            />
          </div>

          {/* Judul & Artist */}
          <div className="mt-8 flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h1 className="text-balance text-2xl font-bold md:text-3xl">
                {track.title}
              </h1>
              <p className="mt-1 text-base text-muted-foreground">
                {track.artist}
              </p>
            </div>
            <button
              onClick={() => setLiked((v) => !v)}
              className="mt-1 shrink-0 text-muted-foreground transition-colors hover:text-primary"
              aria-label={liked ? "Hapus dari favorit" : "Tambah ke favorit"}
            >
              <Heart
                className={cn("size-7", liked && "fill-primary text-primary")}
              />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <button
              ref={barRef}
              onClick={seek}
              className="group relative block h-2 w-full rounded-full bg-secondary"
              aria-label="Geser posisi lagu"
            >
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-primary"
                style={{ width: `${percent}%` }}
              />
              <div
                className="absolute top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground opacity-0 shadow transition-opacity group-hover:opacity-100"
                style={{ left: `${percent}%` }}
              />
            </button>
            <div className="mt-2 flex justify-between text-xs tabular-nums text-muted-foreground">
              <span>{formatTime(progress)}</span>
              <span>{track.duration}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-4 flex items-center justify-center gap-6">
            <button
              onClick={() => setShuffle((v) => !v)}
              className={cn(
                "transition-colors hover:text-foreground",
                shuffle ? "text-primary" : "text-muted-foreground",
              )}
              aria-label="Acak"
              aria-pressed={shuffle}
            >
              <Shuffle className="size-5" />
            </button>
            <button
              onClick={() => setProgress(0)}
              className="text-foreground transition-transform hover:scale-105"
              aria-label="Sebelumnya"
            >
              <SkipBack className="size-7 fill-current" />
            </button>
            <button
              onClick={() => setIsPlaying((v) => !v)}
              className="flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
              aria-label={isPlaying ? "Jeda" : "Putar"}
            >
              {isPlaying ? (
                <Pause className="size-7 fill-current" />
              ) : (
                <Play className="size-7 translate-x-0.5 fill-current" />
              )}
            </button>
            <button
              className="text-foreground transition-transform hover:scale-105"
              aria-label="Berikutnya"
            >
              <SkipForward className="size-7 fill-current" />
            </button>
            <button
              onClick={() => setRepeat((v) => !v)}
              className={cn(
                "transition-colors hover:text-foreground",
                repeat ? "text-primary" : "text-muted-foreground",
              )}
              aria-label="Ulangi"
              aria-pressed={repeat}
            >
              <Repeat className="size-5" />
            </button>
          </div>

          {/* Volume */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <Volume2 className="size-4 text-muted-foreground" />
            <div className="relative h-1 w-40 rounded-full bg-secondary">
              <div className="absolute inset-y-0 left-0 w-2/3 rounded-full bg-foreground" />
            </div>
          </div>
        </div>

        {/* Kolom kanan: Lirik & Antrean */}
        <div className="flex flex-col gap-6">
          {/* Lyrics */}
          <section className="rounded-2xl bg-card p-5">
            <div className="mb-4 flex items-center gap-2">
              <Mic2 className="size-4 text-primary" />
              <h2 className="text-sm font-semibold uppercase tracking-wider">
                Lirik
              </h2>
            </div>
            <div className="max-h-72 space-y-3 overflow-y-auto pr-1">
              {lyrics.map((line, i) => (
                <p
                  key={i}
                  className={cn(
                    "text-pretty text-base leading-relaxed transition-colors",
                    i === activeLyricIndex
                      ? "font-semibold text-foreground"
                      : i < activeLyricIndex
                        ? "text-muted-foreground"
                        : "text-muted-foreground/50",
                  )}
                >
                  {line.text}
                </p>
              ))}
            </div>
          </section>

          {/* Up Next (Queue) */}
          <section className="rounded-2xl bg-card p-5">
            <div className="mb-4 flex items-center gap-2">
              <ListMusic className="size-4 text-primary" />
              <h2 className="text-sm font-semibold uppercase tracking-wider">
                Selanjutnya
              </h2>
            </div>
            <ul className="flex flex-col">
              {queue.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/lagu/${item.id}`}
                    className="group flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-secondary"
                  >
                    <Image
                      src={item.cover || "/placeholder.svg"}
                      alt={`Sampul ${item.title}`}
                      width={48}
                      height={48}
                      className="size-12 rounded-md object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium">
                        {item.title}
                      </p>
                      <p className="truncate text-xs text-muted-foreground">
                        {item.artist}
                      </p>
                    </div>
                    <span className="text-xs tabular-nums text-muted-foreground">
                      {item.duration}
                    </span>
                    <span
                      className="text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                      aria-hidden
                    >
                      <Plus className="size-4" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
