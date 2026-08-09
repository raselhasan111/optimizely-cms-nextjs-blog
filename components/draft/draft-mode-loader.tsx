import { Loader2 } from 'lucide-react'

export function DraftModeLoader() {
  return (
    <div className="flex min-h-[50vh] w-full flex-col items-center justify-center space-y-6 p-8">
      <div className="flex items-center justify-center gap-3">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <h3 className="text-xl font-semibold">Loading Latest Draft Content</h3>
      </div>

      <div className="w-full max-w-3xl space-y-4">
        {/* Skeleton for page title */}
        <div className="h-10 w-3/4 animate-pulse rounded-md bg-gray-200 dark:bg-gray-800" />

        {/* Skeleton for content blocks */}
        <div className="mt-6 space-y-6">
          {/* Content block skeleton 1 */}
          <div className="space-y-3">
            <div className="h-4 w-1/2 animate-pulse rounded-md bg-gray-200 dark:bg-gray-800" />
            <div className="h-4 w-full animate-pulse rounded-md bg-gray-200 dark:bg-gray-800" />
            <div className="h-4 w-4/5 animate-pulse rounded-md bg-gray-200 dark:bg-gray-800" />
          </div>

          {/* Content block skeleton 2 */}
          <div className="space-y-3">
            <div className="h-4 w-2/3 animate-pulse rounded-md bg-gray-200 dark:bg-gray-800" />
            <div className="h-4 w-full animate-pulse rounded-md bg-gray-200 dark:bg-gray-800" />
            <div className="h-4 w-3/4 animate-pulse rounded-md bg-gray-200 dark:bg-gray-800" />
          </div>

          {/* Image placeholder */}
          <div className="h-48 w-full animate-pulse rounded-md bg-gray-200 dark:bg-gray-800" />

          {/* Content block skeleton 3 */}
          <div className="space-y-3">
            <div className="h-4 w-full animate-pulse rounded-md bg-gray-200 dark:bg-gray-800" />
            <div className="h-4 w-5/6 animate-pulse rounded-md bg-gray-200 dark:bg-gray-800" />
          </div>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        Fetching the latest draft content from Optimizely CMS
      </p>
    </div>
  )
}
