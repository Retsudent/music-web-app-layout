"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { Search } from "lucide-react"
import { genres, artists, popularTracks } from "@/lib/music-data"
import { CardGrid } from "@/components/card-grid"
import { TrackList } from "@/components/track-list"

export default function CariPage() {
  const [query, setQuery] = useState("")
  const q = query.trim().toLowerCase()

  const filteredGenres = useMemo(
    () => (q ? genres.filter((g) => g.name.toLowerCase().includes(q)) : genres),
    [q],
  )

  const matchedTracks = useMemo(
    () =>
      q
        ? popularTracks.filter(
            (t) =>
              t.title.toLowerCase().includes(q) ||
              t.artist.toLowerCase().includes(q) ||
              t.album.toLowerCase().includes(q),
          )
        : [],
    [q],
  )

  const matchedArtists = useMemo(
    () =>
      q ? artists.filter((a) => a.name.toLowerCase().includes(q)) : artists,
    [q],
  )

  return (
    <div className="px-4 pb-8 md:px-6">
      <div className="mt-4 md:hidden">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari lagu, artis, atau genre"
            className="w-full rounded-full border border-border bg-card py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>

      <div className="mt-4 hidden max-w-xl md:block">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Apa yang ingin kamu dengar?"
            className="w-full rounded-full border border-border bg-card py-3 pl-12 pr-4 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>

      {q && matchedTracks.length > 0 ? (
        <section className="mt-8">
          <h2 className="mb-4 font-heading text-xl font-bold tracking-tight md:text-2xl">
            Lagu
          </h2>
          <TrackList tracks={matchedTracks} />
        </section>
      ) : null}

      {q && matchedArtists.length > 0 ? (
        <CardGrid
          title="Artis"
          rounded
          items={matchedArtists.map((a) => ({
            id: a.id,
            title: a.name,
            description: `${a.followers} pengikut`,
            cover: a.cover,
          }))}
        />
      ) : null}

      {q &&
      matchedTracks.length === 0 &&
      matchedArtists.length === 0 &&
      filteredGenres.length === 0 ? (
        <div className="mt-16 text-center">
          <p className="font-heading text-lg font-semibold">
            Tidak ada hasil untuk &ldquo;{query}&rdquo;
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Coba kata kunci lain atau periksa ejaannya.
          </p>
        </div>
      ) : null}

      <section className="mt-8">
        <h2 className="mb-4 font-heading text-xl font-bold tracking-tight md:text-2xl">
          {q ? "Genre terkait" : "Jelajahi semua genre"}
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filteredGenres.map((genre) => (
            <article
              key={genre.id}
              className="relative aspect-[16/10] cursor-pointer overflow-hidden rounded-xl p-4"
              style={{ backgroundColor: genre.color }}
            >
              <h3 className="font-heading text-lg font-bold text-primary-foreground">
                {genre.name}
              </h3>
              <Image
                src={genre.cover || "/placeholder.svg"}
                alt=""
                width={96}
                height={96}
                className="absolute -bottom-2 -right-3 size-24 rotate-[25deg] rounded-lg object-cover shadow-xl"
              />
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
