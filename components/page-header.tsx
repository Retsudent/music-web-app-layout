export function PageHeader({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  return (
    <div className="mb-2">
      <h1 className="font-heading text-2xl font-bold tracking-tight text-balance md:text-4xl">
        {title}
      </h1>
      {subtitle ? (
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground md:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
