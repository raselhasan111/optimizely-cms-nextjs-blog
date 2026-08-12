import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { optimizely } from '@/lib/optimizely/fetch'
import { getValidLocale } from '@/lib/optimizely/utils/language'
import { generateAlternates } from '@/lib/utils/metadata'
import ProfileBlock from '@/components/block/profile-block'
import StoryBlock from '@/components/block/story-block'
import AvailabilityBlock from '@/components/block/availability-block'
import ContactBlock from '@/components/block/contact-block'

const ABOUT_URL = '/about'

async function fetchAboutPage(locale: string) {
  const locales = getValidLocale(locale)
  const { data, errors } = await optimizely.getAboutPage(
    {
      locales: [locales],
      slug: ABOUT_URL,
    },
    { cacheTag: 'optimizely-about' }
  )

  // A failed request is not the same as "the page doesn't exist":
  // returning null here would notFound() the route, and during static
  // generation that 404 gets baked into the prerendered HTML (and then
  // carried across deploys by the restored build cache). Throw instead
  // so a transient Graph failure fails the build loudly.
  if (errors?.length) {
    throw new Error(
      `getAboutPage failed: ${errors.map((e) => e.message).join('; ')}`
    )
  }

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

  return (
    <div className="mx-auto max-w-2xl py-10">
      {profile && <ProfileBlock {...profile} />}
      {story?.story && <StoryBlock {...story} />}
      {availability?.availability && <AvailabilityBlock {...availability} />}
      {contact && <ContactBlock {...contact} />}
    </div>
  )
}
