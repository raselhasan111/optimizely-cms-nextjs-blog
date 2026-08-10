// The CMS BlogPost type has no canonicalUrl field; map slug -> original
// Medium post for the "Originally published on Medium" attribution link.
export const MEDIUM_LINKS: Record<string, string> = {
  'javascript-garbage-collection-interview-guide':
    'https://medium.com/@raselhasan11/javascript-garbage-collection-a-complete-interview-guide-93e50a2489cd',
  'ai-first-interview-optimizely':
    'https://medium.com/@raselhasan11/notes-from-an-ai-first-interview-how-i-got-hired-as-a-demo-engineer-ii-at-optimizely-72a290232a9c',
  'use-server-doesnt-mean-private':
    'https://medium.com/@raselhasan11/use-server-doesn-t-mean-private-fbffbca20ea3',
  'llm-markdown-prompt-injection-xss':
    'https://medium.com/@raselhasan11/stop-trusting-your-llms-markdown-prompt-injection-is-the-new-xss-ecfaa4481780',
}

export function getMediumUrl(slug: string): string | undefined {
  return MEDIUM_LINKS[slug]
}

// Posts self-canonicalize by default (this site is the canonical URL,
// with a visible "Originally published on Medium" attribution link).
// Add a slug here to flip that post's <link rel="canonical"> to Medium
// instead — e.g. if Medium's copy should be treated as the original.
export const MEDIUM_CANONICAL_SLUGS = new Set<string>([])

export function isMediumCanonical(slug: string): boolean {
  return MEDIUM_CANONICAL_SLUGS.has(slug)
}
