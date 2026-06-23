import Image from "next/image"
import { notFound } from "next/navigation"
import { Play, Heart, MoreHorizontal, Clock3 } from "lucide-react"
import { getPlaylistById, popularTracks } from "@/lib/music-data"
import { TrackList } from "@/components/track-list"

export default async function PlaylistPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const playlist = getPlaylistById(id)

  if (!playlist) {
    notFound()
  }

  const tracks = popularTracks
  const totalMinutes = 24

  return (
    <div className="pb-8">
      {/* Header */}
      <section className="relative">
        <div className="absolute inset-0 -z-0 bg-gradient-to-b from-secondary to-background" />
        <div className="relative flex flex-col items-center gap-5 p-6 sm:flex-row sm:items-end md:p-8">
          <div className="relative size-44 shrink-0 overflow-hidden rounded-xl shadow-2xl md:size-52">
            <Image
              src={playlist.cover || "/placeholder.svg"}
              alt={`Sampul ${playlist.title}`}
              fill
              sizes="220px"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col items-center gap-3 sm:items-start">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Playlist
            </span>
            <h1 className="text-center font-heading text-3xl font-bold tracking-tight text-balance sm:text-left md:text-5xl">
              {playlist.title}
            </h1>
            <p className="max-w-md text-center text-sm text-muted-foreground sm:text-left">
              {playlist.description}
            </p>
            <p className="text-xs text-muted-foreground">
              Resonance &middot; {tracks.length} lagu &middot; sekitar{" "}
              {totalMinutes} menit
            </p>
          </div>
        </div>
      </section>

      {/* Actions */}
      <div className="flex items-center gap-4 px-6 py-4 md:px-8">
        <button
          className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
          aria-label={`Putar ${playlist.title}`}
        >
          <Play className="size-6 fill-current" />
        </button>
        <button
          className="text-muted-foreground transition-colors hover:text-primary"
          aria-label="Suka playlist ini"
        >
          <Heart className="size-7" />
        </button>
        <button
          className="text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Opsi lainnya"
        >
          <MoreHorizontal className="size-7" />
        </button>
        <span className="ml-auto flex items-center gap-1 text-xs text-muted-foreground">
          <Clock3 className="size-4" />
          {totalMinutes} mnt
        </span>
      </div>

      {/* Tracks */}
      <div className="px-4 md:px-8">
        <TrackList tracks={tracks} />
      </div>
    </div>
  )
}
