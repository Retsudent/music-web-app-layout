"use client"

import Image from "next/image"
import { Play, Clock, MoreHorizontal } from "lucide-react"
import {
  featuredPlaylists,
  popularTracks,
  recentAlbums,
} from "@/lib/music-data"

function CardGrid({
  title,
  items,
}: {
  title: string
  items: typeof featuredPlaylists
}) {
  return (
    <section className="mt-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-heading text-xl font-bold tracking-tight md:text-2xl">
          {title}
        </h2>
        <button className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
          Lihat semua
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {items.map((item) => (
          <article
            key={item.id}
            className="group cursor-pointer rounded-xl bg-card p-3 transition-colors hover:bg-secondary"
          >
            <div className="relative mb-3 aspect-square overflow-hidden rounded-lg">
              <Image
                src={item.cover || "/placeholder.svg"}
                alt={`Sampul ${item.title}`}
                fill
                sizes="(max-width: 768px) 50vw, 200px"
                className="object-cover"
              />
              <button
                className="absolute bottom-2 right-2 flex size-10 translate-y-2 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 shadow-lg transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100"
                aria-label={`Putar ${item.title}`}
              >
                <Play className="size-5 fill-current" />
              </button>
            </div>
            <h3 className="truncate text-sm font-semibold">{item.title}</h3>
            <p className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export function MainContent() {
  return (
    <div className="px-4 pb-8 md:px-6">
      {/* Hero */}
      <section className="relative mt-4 overflow-hidden rounded-2xl">
        <Image
          src="/albums/album-6.png"
          alt="Sampul playlist unggulan"
          width={1200}
          height={400}
          className="h-56 w-full object-cover md:h-72"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center gap-3 p-6 md:p-10">
          <span className="w-fit rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
            Pilihan Editor
          </span>
          <h1 className="max-w-md font-heading text-3xl font-bold leading-tight text-balance md:text-5xl">
            Beat Jalanan Minggu Ini
          </h1>
          <p className="max-w-sm text-sm text-muted-foreground md:text-base">
            Kumpulan hip hop dan groove paling segar, diperbarui setiap Jumat.
          </p>
          <button className="mt-2 flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105">
            <Play className="size-4 fill-current" />
            Putar Sekarang
          </button>
        </div>
      </section>

      <CardGrid title="Playlist Pilihan" items={featuredPlaylists} />

      {/* Popular tracks */}
      <section className="mt-10">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-heading text-xl font-bold tracking-tight md:text-2xl">
            Lagu Populer
          </h2>
          <button className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Lihat semua
          </button>
        </div>

        <div className="overflow-hidden rounded-xl bg-card">
          <div className="hidden grid-cols-[2rem_1fr_1fr_5rem_3rem] items-center gap-4 border-b border-border px-4 py-2 text-xs font-medium uppercase tracking-wider text-muted-foreground md:grid">
            <span className="text-center">#</span>
            <span>Judul</span>
            <span>Album</span>
            <span className="text-right">
              <Clock className="ml-auto size-4" />
            </span>
            <span />
          </div>

          {popularTracks.map((track, index) => (
            <div
              key={track.id}
              className="group grid grid-cols-[2rem_1fr_3rem] items-center gap-4 px-4 py-2.5 transition-colors hover:bg-secondary md:grid-cols-[2rem_1fr_1fr_5rem_3rem]"
            >
              <span className="relative text-center text-sm text-muted-foreground">
                <span className="tabular-nums group-hover:opacity-0">
                  {index + 1}
                </span>
                <Play className="absolute inset-0 m-auto size-4 fill-current text-foreground opacity-0 group-hover:opacity-100" />
              </span>

              <div className="flex min-w-0 items-center gap-3">
                <Image
                  src={track.cover || "/placeholder.svg"}
                  alt={`Sampul ${track.album}`}
                  width={40}
                  height={40}
                  className="size-10 shrink-0 rounded object-cover"
                />
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{track.title}</p>
                  <p className="truncate text-xs text-muted-foreground">
                    {track.artist}
                  </p>
                </div>
              </div>

              <span className="hidden truncate text-sm text-muted-foreground md:block">
                {track.album}
              </span>
              <span className="hidden text-right text-sm tabular-nums text-muted-foreground md:block">
                {track.duration}
              </span>

              <button
                className="text-muted-foreground opacity-0 transition-opacity hover:text-foreground group-hover:opacity-100"
                aria-label={`Opsi untuk ${track.title}`}
              >
                <MoreHorizontal className="size-5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      <CardGrid title="Baru Dirilis" items={recentAlbums} />
    </div>
  )
}
