import { optimizely } from './fetch'

const CMS_CONTENT_URI_PREFIX = 'cms://content/'

// String fields that reference a CMS-native asset (picked from the
// media library, as opposed to an external URL pasted into the field)
// store a "cms://content/<key>" URI, not a fetchable URL — resolve it
// via the same content-by-key lookup the revalidate webhook already
// uses to get the real delivery URL.
export function isCmsContentReference(
  value: string | null | undefined
): value is string {
  return Boolean(value?.startsWith(CMS_CONTENT_URI_PREFIX))
}

export async function resolveCmsContentUrl(
  reference: string
): Promise<string | null> {
  const key = reference.slice(CMS_CONTENT_URI_PREFIX.length)
  const { data } = await optimizely.GetContentByGuid({ guid: key })
  return data?._Content?.item?._metadata?.url?.default ?? null
}

export async function resolveImageSrc(
  value: string | null | undefined
): Promise<string | null> {
  if (!value) return null
  if (!isCmsContentReference(value)) return value
  return resolveCmsContentUrl(value)
}
