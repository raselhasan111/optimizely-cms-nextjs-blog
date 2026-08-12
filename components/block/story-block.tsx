import { StoryBlock as StoryBlockProps } from '@/lib/optimizely/types/generated'

export default function StoryBlock({
  story,
  highlights,
}: Pick<StoryBlockProps, 'story' | 'highlights'>) {
  const items = (highlights ?? []).filter((h): h is string => Boolean(h))

  return (
    <section className="mt-10">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        Now
      </h2>
      {story && (
        <p className="mt-3 leading-relaxed" data-epi-edit="story">
          {story}
        </p>
      )}
      {items.length > 0 && (
        <ul className="mt-4 list-disc space-y-1 pl-6" data-epi-edit="highlights">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  )
}
