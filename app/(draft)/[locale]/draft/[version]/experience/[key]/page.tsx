import OnPageEdit from '@/components/draft/on-page-edit'
import VisualBuilderExperienceWrapper from '@/components/visual-builder/wrapper'
import { optimizely } from '@/lib/optimizely/fetch'
import { SafeVisualBuilderExperience } from '@/lib/optimizely/types/experience'
import { getValidLocale } from '@/lib/optimizely/utils/language'
import { checkDraftMode } from '@/lib/utils/draft-mode'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

export const revalidate = 0
export const dynamic = 'force-dynamic'

export default async function Page(props: {
  params: Promise<{ key: string; locale: string; version: string }>
}) {
  const isDraftModeEnabled = await checkDraftMode()
  if (!isDraftModeEnabled) {
    return notFound()
  }

  const { locale, version, key } = await props.params
  const locales = getValidLocale(locale)

  const experienceData = await optimizely.VisualBuilder(
    { key, version, locales },
    { preview: true }
  )
  const experience = experienceData.data?.SEOExperience?.item as
    | SafeVisualBuilderExperience
    | undefined

  if (!experience) {
    return notFound()
  }

  return (
    <Suspense>
      <OnPageEdit
        version={version}
        currentRoute={`/${locale}/draft/${version}/experience/${key}`}
      />
      <VisualBuilderExperienceWrapper experience={experience} />
    </Suspense>
  )
}
