import Image from 'next/image'
import { ProfileBlock as ProfileBlockProps } from '@/lib/optimizely/types/generated'
import { resolveImageSrc } from '@/lib/optimizely/resolve-content-url'

export default async function ProfileBlock({
  imageSrc,
  bio,
  name,
  title,
}: Pick<ProfileBlockProps, 'imageSrc' | 'bio' | 'name' | 'title'>) {
  // imageSrc may be a "cms://content/<key>" media-library reference
  // rather than a fetchable URL — resolve before rendering.
  const resolvedImageSrc = await resolveImageSrc(imageSrc)

  return (
    <section>
      <header className="mb-12 flex items-start gap-6">
        {resolvedImageSrc && (
          <Image
            src={resolvedImageSrc}
            alt={name ?? ''}
            width={72}
            height={72}
            className="aspect-square rounded-full object-cover"
          />
        )}
        <div>
          <h1 className="text-3xl font-bold" data-epi-edit="name">
            {name}
          </h1>
          {title && (
            <p className="mt-1 text-muted-foreground" data-epi-edit="title">
              {title}
            </p>
          )}
        </div>
      </header>
      {bio && (
        <p className="text-lg leading-relaxed" data-epi-edit="bio">
          {bio}
        </p>
      )}
    </section>
  )
}
