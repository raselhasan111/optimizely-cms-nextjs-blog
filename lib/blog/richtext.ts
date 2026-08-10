// Types for the Slate-style tree in BlogPost.body.json.
// Node types observed across all 4 migrated posts (see docs/blog-body-structure.md):
// paragraph, heading-two, heading-three, quote, code, bulleted-list,
// numbered-list, list-item, link (inline), plus text leaves with
// { bold?, code? } marks. No heading-one/image/table nodes exist yet.

export interface RichTextLeaf {
  text: string
  bold?: boolean
  code?: boolean
}

export interface RichTextElement {
  type: string
  url?: string
  children: RichTextNode[]
}

export type RichTextNode = RichTextLeaf | RichTextElement

export interface RichTextRoot {
  type: 'richText'
  children: RichTextElement[]
}

export function isLeaf(node: RichTextNode): node is RichTextLeaf {
  return typeof (node as RichTextLeaf).text === 'string'
}

export function extractText(node: RichTextNode): string {
  if (isLeaf(node)) return node.text
  return node.children.map(extractText).join('')
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

const NAMED_ENTITIES: Record<string, string> = {
  lt: '<',
  gt: '>',
  amp: '&',
  quot: '"',
  apos: "'",
  nbsp: ' ',
}

// Some migrated code-block text is HTML-entity-escaped (e.g. `&lt;div&gt;`
// instead of `<div>`). Decode before syntax highlighting so the rendered
// code shows the original characters, not literal entity text.
export function decodeHtmlEntities(text: string): string {
  return text.replace(/&(#x?[0-9a-fA-F]+|[a-zA-Z]+);/g, (match, entity) => {
    if (entity[0] === '#') {
      const codePoint =
        entity[1] === 'x' || entity[1] === 'X'
          ? parseInt(entity.slice(2), 16)
          : parseInt(entity.slice(1), 10)
      return Number.isNaN(codePoint) ? match : String.fromCodePoint(codePoint)
    }
    return NAMED_ENTITIES[entity] ?? match
  })
}

export function isRichTextRoot(value: unknown): value is RichTextRoot {
  if (!value || typeof value !== 'object') return false
  const candidate = value as { type?: unknown; children?: unknown }
  return candidate.type === 'richText' && Array.isArray(candidate.children)
}
