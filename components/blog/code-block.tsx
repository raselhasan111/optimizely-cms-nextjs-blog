import { codeToHtml } from 'shiki'
import { decodeHtmlEntities } from '@/lib/blog/richtext'
import { CopyCodeButton } from './copy-code-button'

// Allowlisted shiki bundled languages; anything else (or missing lang
// metadata, which is the case for all 4 migrated posts today — see
// docs/blog-body-structure.md) falls back to plain text, never guessed.
const ALLOWED_LANGS = new Set([
  'javascript',
  'typescript',
  'jsx',
  'tsx',
  'json',
  'bash',
  'css',
  'html',
  'text',
])

export async function CodeBlock({
  code,
  lang,
}: {
  code: string
  lang?: string
}) {
  const decoded = decodeHtmlEntities(code)
  const safeLang = lang && ALLOWED_LANGS.has(lang) ? lang : 'text'

  const html = await codeToHtml(decoded, {
    lang: safeLang,
    theme: 'github-dark',
  })

  return (
    <div className="group relative my-6">
      <CopyCodeButton code={decoded} />
      <div
        className="overflow-x-auto rounded-lg text-sm [&_pre]:p-4"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}
