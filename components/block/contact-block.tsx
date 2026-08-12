import { Fragment, ReactNode } from 'react'
import { ContactBlock as ContactBlockProps } from '@/lib/optimizely/types/generated'

// Bare domain-like tokens in the plain-text description
// (e.g. "linkedin.com/in/raselhasan11") become real links; anything
// else renders as plain text. No third-party link parser needed for
// one short paragraph.
const URL_TOKEN = /\b[\w-]+\.[a-z]{2,}(?:\/[^\s,]*)?\b/gi

function linkifyText(text: string): ReactNode {
  const parts = text.split(URL_TOKEN)
  const matches = text.match(URL_TOKEN) ?? []

  return parts.map((part, index) => (
    <Fragment key={index}>
      {part}
      {matches[index] && (
        <a
          href={`https://${matches[index]}`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2"
        >
          {matches[index]}
        </a>
      )}
    </Fragment>
  ))
}

export default function ContactBlock({
  title,
  description,
}: Pick<ContactBlockProps, 'title' | 'description'>) {
  if (!description) return null

  return (
    <section className="mt-10">
      <h2
        className="text-sm font-semibold uppercase tracking-wide text-muted-foreground"
        data-epi-edit="title"
      >
        {title || 'Contact'}
      </h2>
      <p className="mt-3 leading-relaxed" data-epi-edit="description">
        {linkifyText(description)}
      </p>
    </section>
  )
}
