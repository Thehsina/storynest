import { useContinueReading } from '../../hooks/useContinueReading'
import { ContinueReadingCard } from './ContinueReadingCard'
import { SectionContainer } from './SectionContainer'
import { SectionHeader } from './SectionHeader'

export function ContinueReadingSection() {
  const { items } = useContinueReading()

  if (items.length === 0) return null

  return (
    <SectionContainer className="py-16 md:py-24">
      <SectionHeader
        eyebrow="Continue reading"
        title="Pick up where you left off"
        description="Your in-progress stories stay on this device—ready for one more chapter before lights out."
      />
      <div className="grid gap-5 lg:grid-cols-2">
        {items.map(({ story, entry }) => (
          <ContinueReadingCard key={story.id} story={story} entry={entry} />
        ))}
      </div>
    </SectionContainer>
  )
}
