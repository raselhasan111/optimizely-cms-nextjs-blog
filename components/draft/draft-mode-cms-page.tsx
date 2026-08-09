import { optimizely } from '@/lib/optimizely/fetch'
import { Locales } from '@/lib/optimizely/types/generated'
import { Suspense } from 'react'
import VisualBuilderExperienceWrapper from '../visual-builder/wrapper'
import { notFound } from 'next/navigation'
import { SafeVisualBuilderExperience } from '@/lib/optimizely/types/experience'
import ContentAreaMapper from '../content-area/mapper'

export default async function DraftModeCmsPage({
  locales,
  slug,
}: {
  locales: Locales
  slug: string
}) {
  const { data, errors } = await optimizely.GetAllPagesVersionByURL(
    { locales: [locales], slug },
    { preview: true }
  )
  const cmsPageItems = data?.CMSPage?.items

  if (errors || !cmsPageItems?.length) {
    const experiencesData = await optimizely.GetAllVisualBuilderVesrionsBySlug(
      { locales: [locales], slug },
      { preview: true }
    )

    const experiences = experiencesData?.data?.SEOExperience?.items as
      | SafeVisualBuilderExperience[]
      | undefined

    const maxExperienceVersion = experiences
      ? Math.max(
          ...experiences.map((item) =>
            parseInt(item?._metadata?.version || '0', 10)
          )
        )
      : -1

    const experience = experiences?.find(
      (experience) =>
        parseInt(experience?._metadata?.version || '0', 10) ===
        maxExperienceVersion
    )

    if (experience) {
      return (
        <Suspense>
          <VisualBuilderExperienceWrapper experience={experience} />
        </Suspense>
      )
    }

    return notFound()
  }

  const maxCmsPageVersion = cmsPageItems
    ? Math.max(
        ...cmsPageItems.map((item) =>
          parseInt(item?._metadata?.version || '0', 10)
        )
      )
    : -1

  const page = cmsPageItems?.find(
    (page) =>
      parseInt(page?._metadata?.version || '0', 10) === maxCmsPageVersion
  )

  const blocks = (page?.blocks ?? []).filter(
    (block) => block !== null && block !== undefined
  )

  return (
    <>
      <Suspense>
        <ContentAreaMapper blocks={blocks} />
      </Suspense>
    </>
  )
}
