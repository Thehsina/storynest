import type { ReactNode } from 'react'

type EmptyStateProps = {
  icon: ReactNode
  title: string
  description: string
  action?: ReactNode
}

export function EmptyState({ icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl bg-white px-6 py-12 text-center shadow-md ring-1 ring-indigo-100">
      <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
        {icon}
      </div>
      <h2 className="font-display text-xl font-bold text-indigo-950">{title}</h2>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-indigo-900/70">
        {description}
      </p>
      {action ? <div className="mt-6">{action}</div> : null}
    </div>
  )
}
