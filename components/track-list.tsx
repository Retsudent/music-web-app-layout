import Image from "next/image"
import Link from "next/link"
import { Play, Clock, MoreHorizontal } from "lucide-react"
import type { Track } from "@/lib/music-data"

type TrackListProps = {
  tracks: Track[]
  showHeader?: boolean
}

export function TrackList({ tracks, showHeader = true }: TrackListProps) {
  return (
    <div className="overflow-hidden rounded-xl bg-card">
      {showHeader ? (
        <div className="hidden grid-cols-[2rem_1fr_1fr_5rem_3rem] items-center gap-4 border-b border-border px-4 py-2 text-xs font-medium uppercase tracking-wider text-muted-foreground md:grid">
          <span className="text-center">#</span>
          <span>Judul</span>
          <span>Album</span>
          <span className="text-right">
            <Clock className="ml-auto size-4" />
          </span>
          <span />
        </div>
      ) : null}

      {tracks.map((track, index) => (
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
              <Link
                href={`/lagu/${track.id}`}
                className="truncate text-sm font-medium hover:underline"
              >
                {track.title}
              </Link>
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
  )
}
