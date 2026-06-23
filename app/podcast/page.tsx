import Image from "next/image"
import { Play, Mic2 } from "lucide-react"
import { podcasts } from "@/lib/music-data"
import { PageHeader } from "@/components/page-header"

export default function PodcastPage() {
  const featured = podcasts[0]

  return (
    <div className="px-4 pb-8 md:px-6">
      <div className="mt-4">
        <PageHeader
          title="Podcast"
          subtitle="Cerita, obrolan, dan wawasan untuk menemani harimu."
        />
      </div>

      {/* Featured podcast */}
      <section className="mt-6 overflow-hidden rounded-2xl bg-card">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative aspect-square w-full shrink-0 sm:size-52">
            <Image
              src={featured.cover || "/placeholder.svg"}
              alt={`Sampul ${featured.title}`}
              fill
              sizes="220px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 p-5 sm:p-6">
            <span className="flex w-fit items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
              <Mic2 className="size-3.5" />
              Episode Terbaru
            </span>
            <h2 className="font-heading text-2xl font-bold md:text-3xl">
              {featured.title}
            </h2>
            <p className="text-sm text-muted-foreground">
              {featured.host} &middot; {featured.episodes} episode
            </p>
            <p className="max-w-md text-sm text-muted-foreground">
              {featured.description}
            </p>
            <button className="mt-2 flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105">
              <Play className="size-4 fill-current" />
              Putar Episode
            </button>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-4 font-heading text-xl font-bold tracking-tight md:text-2xl">
          Acara Pilihan
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {podcasts.map((podcast) => (
            <article
              key={podcast.id}
              className="group flex cursor-pointer gap-4 rounded-xl bg-card p-3 transition-colors hover:bg-secondary"
            >
              <div className="relative size-24 shrink-0 overflow-hidden rounded-lg sm:size-28">
                <Image
                  src={podcast.cover || "/placeholder.svg"}
                  alt={`Sampul ${podcast.title}`}
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </div>
              <div className="flex min-w-0 flex-col justify-center gap-1">
                <h3 className="truncate font-heading text-base font-bold">
                  {podcast.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {podcast.host} &middot; {podcast.episodes} episode
                </p>
                <p className="line-clamp-2 text-sm text-muted-foreground">
                  {podcast.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
