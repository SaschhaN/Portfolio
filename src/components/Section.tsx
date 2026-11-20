import type { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

interface SectionProps {
  id: string
  title: string
  children: ReactNode
  className?: string
}

export function Section({ id, title, children, className = '' }: SectionProps) {
  const ref = useReveal<HTMLElement>()

  return (
    <section id={id} ref={ref} aria-labelledby={`${id}-title`} className={`reveal py-16 sm:py-20 ${className}`}>
      <h2 id={`${id}-title`} className="mb-10 flex items-center gap-4 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
        {title}
        <span aria-hidden className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
      </h2>
      {children}
    </section>
  )
}
