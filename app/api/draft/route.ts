import { draftMode } from 'next/headers'
import { notFound, redirect } from 'next/navigation'
import { NextRequest, NextResponse } from 'next/server'

import { optimizely } from '@/lib/optimizely/fetch'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const token = searchParams.get('preview_token')
  const key = searchParams.get('key')
  const ver = searchParams.get('ver')
  const loc = searchParams.get('loc')

  if (!ver || !token || !key) {
    return notFound()
  }

  const response = await optimizely.GetContentByKeyAndVersion(
    { key, ver },
    { preview: true }
  )

  if (response.errors) {
    const errorsMessage = response.errors
      .map((error) => error.message)
      .join(', ')

    return new NextResponse(errorsMessage, { status: 401 })
  }

  const content = response.data?._Content?.item
  if (!content) {
    return new NextResponse('Bad Request', { status: 400 })
  }
  ;(await draftMode()).enable()
  let newUrl = ''
  if (content.__typename === '_Experience') {
    newUrl = `/${loc}/draft/${ver}/experience/${key}`
  } else if (content.__typename === '_Component') {
    newUrl = `/${loc}/draft/${ver}/block/${key}`
  } else {
    // In hierarchical routing, the Start Page in Optimizely does not use "/" as its URL
    // but instead has a path like "/start-page". To normalize the URL and make it relative
    // to the Start Page, we remove the OPTIMIZELY_START_PAGE_URL prefix from the hierarchical URL.
    const hierarchicalUrl = content?._metadata?.url?.hierarchical?.replace(
      process.env.OPTIMIZELY_START_PAGE_URL ?? '',
      ''
    )

    const hierarchicalUrlWithoutLocale = hierarchicalUrl?.replace(
      `/${loc}/`,
      ''
    )
    newUrl = `/${loc}/draft/${ver}/${hierarchicalUrlWithoutLocale}`
  }

  redirect(`${newUrl}`)
}
