import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppLayout } from '../components/layout/AppLayout'
import { FavoritesPage } from '../pages/FavoritesPage'
import { HomePage } from '../pages/HomePage'
import { ReaderPage } from '../pages/ReaderPage'
import { StoriesPage } from '../pages/StoriesPage'
import { StoryDetailPage } from '../pages/StoryDetailPage'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="stories" element={<StoriesPage />} />
          <Route path="stories/:storyId" element={<StoryDetailPage />} />
          <Route path="reader/:storyId" element={<ReaderPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
