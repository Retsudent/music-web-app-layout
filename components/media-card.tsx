import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"
import { cn } from "@/lib/utils"

type MediaCardProps = {
  title: string
  description?: string
  cover: string
  href?: string
  rounded?: boolean
  badge?: string
}

export function MediaCard({
  title,
  description,
  cover,
  href,
  rounded = false,
  badge,
}: MediaCardProps) {
  const content = (
    <article className="group cursor-pointer rounded-xl bg-card p-3 transition-colors hover:bg-secondary">
      <div
        className={cn(
          "relative mb-3 aspect-square overflow-hidden",
          rounded ? "rounded-full" : "rounded-lg",
        )}
      >
        <Image
          src={cover || "/placeholder.svg"}
          alt={`Sampul ${title}`}
          fill
          sizes="(max-width: 768px) 50vw, 200px"
          className="object-cover"
        />
        {badge ? (
          <span className="absolute left-2 top-2 rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
            {badge}
          </span>
        ) : null}
        <button
          className={cn(
            "absolute bottom-2 right-2 flex size-10 translate-y-2 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 shadow-lg transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100",
          )}
          aria-label={`Putar ${title}`}
        >
          <Play className="size-5 fill-current" />
        </button>
      </div>
      <h3
        className={cn(
          "truncate text-sm font-semibold",
          rounded && "text-center",
        )}
      >
        {title}
      </h3>
      {description ? (
        <p
          className={cn(
            "mt-0.5 line-clamp-2 text-xs text-muted-foreground",
            rounded && "text-center",
          )}
        >
          {description}
        </p>
      ) : null}
    </article>
  )

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    )
  }
  return content
}
