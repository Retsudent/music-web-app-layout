import { MediaCard } from "@/components/media-card"

type CardItem = {
  id: string
  title: string
  description?: string
  cover: string
  href?: string
  badge?: string
}

type CardGridProps = {
  title?: string
  items: CardItem[]
  rounded?: boolean
  showSeeAll?: boolean
}

export function CardGrid({
  title,
  items,
  rounded = false,
  showSeeAll = false,
}: CardGridProps) {
  return (
    <section className="mt-8">
      {title ? (
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-heading text-xl font-bold tracking-tight md:text-2xl">
            {title}
          </h2>
          {showSeeAll ? (
            <button className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Lihat semua
            </button>
          ) : null}
        </div>
      ) : null}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {items.map((item) => (
          <MediaCard
            key={item.id}
            title={item.title}
            description={item.description}
            cover={item.cover}
            href={item.href}
            rounded={rounded}
            badge={item.badge}
          />
        ))}
      </div>
    </section>
  )
}
