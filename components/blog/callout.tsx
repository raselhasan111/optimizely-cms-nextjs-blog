import { ReactNode } from 'react'

export function Callout({ children }: { children: ReactNode }) {
  return (
    <blockquote className="my-6 border-l-4 border-primary bg-muted/50 px-4 py-2 italic">
      {children}
    </blockquote>
  )
}
