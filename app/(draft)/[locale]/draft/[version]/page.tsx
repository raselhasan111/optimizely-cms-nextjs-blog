import ContentAreaMapper from '@/components/content-area/mapper'
import OnPageEdit from '@/components/draft/on-page-edit'
import { optimizely } from '@/lib/optimizely/fetch'
import { getValidLocale } from '@/lib/optimizely/utils/language'
import { checkDraftMode } from '@/lib/utils/draft-mode'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

export const revalidate = 0
export const dynamic = 'force-dynamic'

export default async function HomePage(props: {
  params: Promise<{ locale: string; version: string }>
}) {
  const isDraftModeEnabled = await checkDraftMode()
  if (!isDraftModeEnabled) {
    return notFound()
  }

  const { locale, version } = await props.params
  const locales = getValidLocale(locale)
  const pageResponse = await optimizely.GetPreviewStartPage(
    { locales, version },
    { preview: true }
  )
  const startPage = pageResponse.data?.StartPage?.item
  const blocks = (startPage?.blocks ?? []).filter(
    (block) => block !== null && block !== undefined
  )

  return (
    <div data-epi-edit="blocks">
      <OnPageEdit
        version={version}
        currentRoute={`/${locale}/draft/${version}`}
      />
      <Suspense>
        <ContentAreaMapper blocks={blocks} preview />
      </Suspense>
    </div>
  )
}
