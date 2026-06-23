import { notFound } from "next/navigation"
import { NowPlaying } from "@/components/now-playing"
import { getTrackById, popularTracks } from "@/lib/music-data"

export default async function LaguPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const track = getTrackById(id)

  if (!track) {
    notFound()
  }

  // Antrean = lagu populer lainnya setelah lagu ini
  const index = popularTracks.findIndex((t) => t.id === id)
  const queue = [
    ...popularTracks.slice(index + 1),
    ...popularTracks.slice(0, index),
  ]

  return <NowPlaying track={track} queue={queue} />
}
