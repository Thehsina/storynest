import type { ReactNode } from 'react'

type SectionContainerProps = {
  children: ReactNode
  className?: string
  id?: string
}

export function SectionContainer({
  children,
  className = '',
  id,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={['mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8', className]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </section>
  )
}
