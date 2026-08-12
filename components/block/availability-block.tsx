import { AvailabilityBlock as AvailabilityBlockProps } from '@/lib/optimizely/types/generated'

export default function AvailabilityBlock({
  availability,
  projectTypes,
}: Pick<AvailabilityBlockProps, 'availability' | 'projectTypes'>) {
  const items = (projectTypes ?? []).filter((p): p is string => Boolean(p))

  return (
    <section className="mt-10">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        Open to
      </h2>
      {availability && (
        <p className="mt-3 leading-relaxed" data-epi-edit="availability">
          {availability}
        </p>
      )}
      {items.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2" data-epi-edit="projectTypes">
          {items.map((item, index) => (
            <span
              key={index}
              className="rounded-full border px-3 py-1 text-sm text-muted-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </section>
  )
}
