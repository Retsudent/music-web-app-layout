import Image from "next/image"
import { Play } from "lucide-react"
import {
  featuredPlaylists,
  popularTracks,
  recentAlbums,
} from "@/lib/music-data"
import { CardGrid } from "@/components/card-grid"
import { TrackList } from "@/components/track-list"

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

      <CardGrid
        title="Playlist Pilihan"
        showSeeAll
        items={featuredPlaylists.map((p) => ({
          ...p,
          href: `/playlist/${p.id}`,
        }))}
      />

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
        <TrackList tracks={popularTracks.slice(0, 6)} />
      </section>

      <CardGrid
        title="Baru Dirilis"
        showSeeAll
        items={recentAlbums.map((a) => ({ ...a, href: `/playlist/${a.id}` }))}
      />
    </div>
  )
}
