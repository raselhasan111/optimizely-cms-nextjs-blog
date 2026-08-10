import { isRichTextRoot } from '@/lib/blog/richtext'
import { RichTextBody } from './rich-text'

// All 4 migrated posts have a usable body.json tree (see
// docs/blog-body-structure.md) — render from it directly. Text leaves
// become React text nodes (auto-escaped) and shiki/DOMPurify are the
// only dangerouslySetInnerHTML sinks in this component tree, so no
// html+sanitize-html fallback is wired up until a future post actually
// needs it.
export function PostBody({ json }: { json: unknown }) {
  if (!isRichTextRoot(json)) {
    return null
  }

  return <RichTextBody content={json} />
}
