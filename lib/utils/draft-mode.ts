import { draftMode } from 'next/headers'

export async function checkDraftMode() {
  const { isEnabled: isDraftModeEnabled } = await draftMode()
  const isDevEnvironment = process.env.NODE_ENV !== 'production'

  // In development, allow access even if draft mode is not enabled
  // In production, enforce the draft mode check
  if (!isDraftModeEnabled && isDevEnvironment) {
    console.log('Draft mode is disabled in development, but allowing access')
    return true
  }

  return isDraftModeEnabled
}
