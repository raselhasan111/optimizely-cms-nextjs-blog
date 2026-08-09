import { optimizely } from '@/lib/optimizely/fetch'
import { Locales } from '@/lib/optimizely/types/generated'
import { Suspense } from 'react'
import ContentAreaMapper from '../content-area/mapper'

export default async function DraftModeHomePage({
  locales,
}: {
  locales: Locales
}) {
  const { data } = await optimizely.GetAllStartPageVersions(
    { locales: [locales] },
    { preview: true }
  )
  const startPageItems = data?.StartPage?.items

  const maxStartPageVersion = startPageItems
    ? Math.max(
        ...startPageItems.map((item) =>
          parseInt(item?._metadata?.version || '0', 10)
        )
      )
    : -1

  const page = startPageItems?.find(
    (page) =>
      parseInt(page?._metadata?.version || '0', 10) === maxStartPageVersion
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
