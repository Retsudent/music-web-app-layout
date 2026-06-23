import Image from "next/image"
import { Play, Radio as RadioIcon } from "lucide-react"
import { radioStations, artists } from "@/lib/music-data"
import { PageHeader } from "@/components/page-header"
import { CardGrid } from "@/components/card-grid"

export default function RadioPage() {
  const featured = radioStations[1]

  return (
    <div className="px-4 pb-8 md:px-6">
      <div className="mt-4">
        <PageHeader
          title="Radio"
          subtitle="Setel dan dengarkan aliran tanpa henti yang dikurasi untuk setiap suasana."
        />
      </div>

      {/* Featured station */}
      <section className="mt-6 overflow-hidden rounded-2xl bg-card">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative aspect-square w-full shrink-0 sm:size-48">
            <Image
              src={featured.cover || "/placeholder.svg"}
              alt={`Sampul ${featured.title}`}
              fill
              sizes="200px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 p-5 sm:p-6">
            <span className="flex w-fit items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
              <RadioIcon className="size-3.5" />
              Sedang Populer
            </span>
            <h2 className="font-heading text-2xl font-bold md:text-3xl">
              {featured.title}
            </h2>
            <p className="text-sm text-muted-foreground">
              {featured.description} &middot; {featured.listeners} pendengar
            </p>
            <button className="mt-2 flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105">
              <Play className="size-4 fill-current" />
              Setel Sekarang
            </button>
          </div>
        </div>
      </section>

      <CardGrid
        title="Stasiun Populer"
        items={radioStations.map((r) => ({
          id: r.id,
          title: r.title,
          description: `${r.listeners} pendengar`,
          cover: r.cover,
        }))}
      />

      <CardGrid
        title="Radio Berdasarkan Artis"
        rounded
        items={artists.map((a) => ({
          id: a.id,
          title: `Radio ${a.name}`,
          description: "Berdasarkan artis ini",
          cover: a.cover,
        }))}
      />
    </div>
  )
}
