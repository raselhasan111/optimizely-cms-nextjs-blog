import { Fragment, ReactNode } from 'react'
import Image from 'next/image'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { optimizely } from '@/lib/optimizely/fetch'
import { getValidLocale } from '@/lib/optimizely/utils/language'
import { generateAlternates } from '@/lib/utils/metadata'
import { resolveImageSrc } from '@/lib/optimizely/resolve-content-url'

const ABOUT_URL = '/about'

// Bare domain-like tokens in the plain-text ContactBlock.description
// (e.g. "linkedin.com/in/raselhasan11") become real links; anything
// else renders as plain text. No third-party link parser needed for
// one short paragraph.
const URL_TOKEN = /\b[\w-]+\.[a-z]{2,}(?:\/[^\s,]*)?\b/gi

function linkifyText(text: string): ReactNode {
  const parts = text.split(URL_TOKEN)
  const matches = text.match(URL_TOKEN) ?? []

  return parts.map((part, index) => (
    <Fragment key={index}>
      {part}
      {matches[index] && (
        <a
          href={`https://${matches[index]}`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2"
        >
          {matches[index]}
        </a>
      )}
    </Fragment>
  ))
}

async function fetchAboutPage(locale: string) {
  const locales = getValidLocale(locale)
  const { data } = await optimizely.getAboutPage(
    {
      locales: [locales],
      slug: ABOUT_URL,
    },
    { cacheTag: 'optimizely-about' }
  )
  const item = data?.CMSPage?.item
  const found = (data?.CMSPage?.total ?? 0) > 0
  if (!found || !item) return null

  const blocks = item.blocks ?? []
  const profile = blocks.find((b) => b?.__typename === 'ProfileBlock') as
    | { imageSrc: string | null; bio: string | null; name: string | null; title: string | null }
    | undefined
  const story = blocks.find((b) => b?.__typename === 'StoryBlock') as
    | { story: string | null; highlights: (string | null)[] | null }
    | undefined
  const availability = blocks.find(
    (b) => b?.__typename === 'AvailabilityBlock'
  ) as
    | { availability: string | null; projectTypes: (string | null)[] | null }
    | undefined
  const contact = blocks.find((b) => b?.__typename === 'ContactBlock') as
    | { title: string | null; description: string | null }
    | undefined

  // ProfileBlock.imageSrc is a plain string field: it holds either a
  // real URL (pasted external link, e.g. the old Cloudinary photo) or a
  // "cms://content/<key>" reference (an asset picked from the CMS media
  // library) — resolve the latter to its actual delivery URL.
  if (profile) {
    profile.imageSrc = await resolveImageSrc(profile.imageSrc)
  }

  return { page: item, profile, story, availability, contact }
}

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await props.params
  const about = await fetchAboutPage(locale)
  if (!about) return {}

  return {
    title: about.page.title ?? 'About',
    description: about.page.shortDescription || about.profile?.bio || '',
    alternates: generateAlternates(locale, ABOUT_URL),
  }
}

export default async function AboutPage(props: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await props.params
  const about = await fetchAboutPage(locale)
  if (!about) return notFound()

  const { profile, story, availability, contact } = about
  const highlights = (story?.highlights ?? []).filter(
    (h): h is string => Boolean(h)
  )
  const projectTypes = (availability?.projectTypes ?? []).filter(
    (p): p is string => Boolean(p)
  )

  return (
    <div className="mx-auto max-w-2xl py-10">
      <header className="mb-12 flex items-start gap-6">
        {profile?.imageSrc && (
          <Image
            src={profile.imageSrc}
            alt={profile.name ?? ''}
            width={72}
            height={72}
            className="aspect-square rounded-full object-cover"
          />
        )}
        <div>
          <h1 className="text-3xl font-bold">{profile?.name}</h1>
          {profile?.title && (
            <p className="mt-1 text-muted-foreground">{profile.title}</p>
          )}
        </div>
      </header>

      {profile?.bio && <p className="text-lg leading-relaxed">{profile.bio}</p>}

      {story?.story && (
        <section className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Now
          </h2>
          <p className="mt-3 leading-relaxed">{story.story}</p>
          {highlights.length > 0 && (
            <ul className="mt-4 list-disc space-y-1 pl-6">
              {highlights.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      )}

      {availability?.availability && (
        <section className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Open to
          </h2>
          <p className="mt-3 leading-relaxed">{availability.availability}</p>
          {projectTypes.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {projectTypes.map((item, index) => (
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
      )}

      {contact?.description && (
        <section className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            {contact.title || 'Contact'}
          </h2>
          <p className="mt-3 leading-relaxed">
            {linkifyText(contact.description)}
          </p>
        </section>
      )}
    </div>
  )
}
