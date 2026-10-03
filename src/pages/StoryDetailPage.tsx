import { Navigate, useParams } from 'react-router-dom'

export function StoryDetailPage() {
  const { storyId } = useParams<{ storyId: string }>()
  return <Navigate to={storyId ? `/reader/${storyId}` : '/'} replace />
}
