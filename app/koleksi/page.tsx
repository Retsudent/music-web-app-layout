"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import {
  userPlaylistData,
  recentAlbums,
  artists,
} from "@/lib/music-data"
import { PageHeader } from "@/components/page-header"
import { CardGrid } from "@/components/card-grid"

const filters = ["Semua", "Playlist", "Album", "Artis"] as const
type Filter = (typeof filters)[number]

export default function KoleksiPage() {
  const [active, setActive] = useState<Filter>("Semua")

  const showPlaylists = active === "Semua" || active === "Playlist"
  const showAlbums = active === "Semua" || active === "Album"
  const showArtists = active === "Semua" || active === "Artis"

  return (
    <div className="px-4 pb-8 md:px-6">
      <div className="mt-4">
        <PageHeader
          title="Koleksimu"
          subtitle="Semua playlist, album, dan artis yang kamu simpan di satu tempat."
        />
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
              active === f
                ? "bg-primary text-primary-foreground"
                : "bg-card text-muted-foreground hover:text-foreground",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      {showPlaylists ? (
        <CardGrid
          title="Playlist"
          items={userPlaylistData.map((p) => ({
            ...p,
            href: `/playlist/${p.id}`,
          }))}
        />
      ) : null}

      {showAlbums ? (
        <CardGrid
          title="Album Tersimpan"
          items={recentAlbums.map((a) => ({
            ...a,
            href: `/playlist/${a.id}`,
          }))}
        />
      ) : null}

      {showArtists ? (
        <CardGrid
          title="Artis yang Diikuti"
          rounded
          items={artists.map((a) => ({
            id: a.id,
            title: a.name,
            description: `${a.followers} pengikut`,
            cover: a.cover,
          }))}
        />
      ) : null}
    </div>
  )
}
