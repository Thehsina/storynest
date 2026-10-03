import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { PageContainer } from './PageContainer'

export function AppLayout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const isReader = pathname.startsWith('/reader')

  if (isReader) {
    return <Outlet />
  }

  return (
    <div className="min-h-screen bg-[#faf6f0] text-[#2f2840]">
      <Navbar />
      {isHome ? (
        <Outlet />
      ) : (
        <>
          <PageContainer>
            <Outlet />
          </PageContainer>
          <Footer />
        </>
      )}
    </div>
  )
}
