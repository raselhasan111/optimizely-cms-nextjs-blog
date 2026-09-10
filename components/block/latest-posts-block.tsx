// Latest Posts — a Visual Builder element (CMS type `LatestPostsElement`,
// field `count`) that lists the blog's published posts (pinned first) inside
// an Experience, so the homepage keeps showing posts while being fully
// editable in Visual Builder. Wired via the fragment/registry trio:
// LatestPostsElementFragment in fragments/Block.graphql and the registry entry
// in content-area/block.tsx — all three must stay together, or Graph returns
// the abstract `_Component` with zero fields and this renders blank (6921dbb).
//
// The CMS `heading` field is intentionally NOT rendered: the homepage matches
// the pre-Experience blog index, which had no section heading. The fragment
// still selects it so it stays available — to show a heading, restore the
// `heading` prop + an <h2> here (see git history).

import { PinnedPostCard } from '@/components/blog/pinned-post-card'
import { PostCard } from '@/components/blog/post-card'
import { getAllPublishedPosts, splitPinned } from '@/lib/blog/posts'
import type { BlockBase } from '@/lib/optimizely/types/block'

interface LatestPostsBlockProps extends Partial<BlockBase> {
  // Max number of posts to list (excluding the pinned one). Shows all when unset.
  count?: number | null
}

export default async function LatestPostsBlock({ count }: LatestPostsBlockProps) {
  // Single-locale blog: fetch the default locale. If this site becomes
  // multi-locale, thread `locale` from the experience wrapper through the
  // content-area mapper to here.
  const posts = await getAllPublishedPosts()
  const { pinned, rest } = splitPinned(posts)
  const visible =
    typeof count === 'number' && count > 0 ? rest.slice(0, count) : rest

  return (
    // No self-centering/width: the homepage constrains the whole experience to
    // a max-w-2xl column. `mt-12` reproduces the old header-to-posts gap.
    <section className="mt-12">
      {pinned && (
        <PinnedPostCard
          slug={pinned.slug}
          title={pinned.title}
          subheading={pinned.subheading}
          publishedDate={pinned.publishedDate}
        />
      )}

      {visible.length === 0 ? (
        <p className="text-muted-foreground">No posts published yet.</p>
      ) : (
        <div>
          {visible.map((post) => (
            <PostCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              subheading={post.subheading}
              publishedDate={post.publishedDate}
            />
          ))}
        </div>
      )}
    </section>
  )
}
