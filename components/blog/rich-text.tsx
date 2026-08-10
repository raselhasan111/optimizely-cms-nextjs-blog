import { Fragment, ReactNode } from 'react'
import {
  RichTextElement,
  RichTextNode,
  RichTextRoot,
  decodeHtmlEntities,
  extractText,
  isLeaf,
  slugify,
} from '@/lib/blog/richtext'
import { CodeBlock } from './code-block'
import { Callout } from './callout'

function renderLeaf(leaf: RichTextNode, key: number): ReactNode {
  if (!isLeaf(leaf)) return null
  let content: ReactNode = leaf.text
  if (leaf.code) {
    content = (
      <code className="rounded bg-muted px-1.5 py-0.5 text-sm">
        {decodeHtmlEntities(leaf.text)}
      </code>
    )
  }
  if (leaf.bold) {
    content = <strong>{content}</strong>
  }
  return <Fragment key={key}>{content}</Fragment>
}

function renderInline(nodes: RichTextNode[]): ReactNode {
  return nodes.map((node, index) => {
    if (isLeaf(node)) return renderLeaf(node, index)

    if (node.type === 'link') {
      const isExternal = /^https?:\/\//.test(node.url ?? '')
      return (
        <a
          key={index}
          href={node.url ?? '#'}
          className="underline underline-offset-2"
          {...(isExternal
            ? { target: '_blank', rel: 'noopener noreferrer' }
            : {})}
        >
          {renderInline(node.children)}
        </a>
      )
    }

    return <Fragment key={index}>{renderInline(node.children)}</Fragment>
  })
}

function renderBlock(node: RichTextElement, key: number): ReactNode {
  switch (node.type) {
    case 'heading-two': {
      const id = slugify(extractText(node))
      return (
        <h2 key={key} id={id}>
          {renderInline(node.children)}
        </h2>
      )
    }
    case 'heading-three': {
      const id = slugify(extractText(node))
      return (
        <h3 key={key} id={id}>
          {renderInline(node.children)}
        </h3>
      )
    }
    case 'quote':
      return (
        <Callout key={key}>
          <p>{renderInline(node.children)}</p>
        </Callout>
      )
    case 'code':
      return <CodeBlock key={key} code={extractText(node)} />
    case 'bulleted-list':
      return (
        <ul key={key} className="list-disc pl-6">
          {node.children.map((child, index) =>
            isLeaf(child) ? null : renderBlock(child, index)
          )}
        </ul>
      )
    case 'numbered-list':
      return (
        <ol key={key} className="list-decimal pl-6">
          {node.children.map((child, index) =>
            isLeaf(child) ? null : renderBlock(child, index)
          )}
        </ol>
      )
    case 'list-item':
      return <li key={key}>{renderInline(node.children)}</li>
    case 'paragraph':
    default:
      return <p key={key}>{renderInline(node.children)}</p>
  }
}

export function RichTextBody({ content }: { content: RichTextRoot }) {
  return (
    <div className="prose prose-neutral max-w-none dark:prose-invert">
      {content.children.map((node, index) => renderBlock(node, index))}
    </div>
  )
}
