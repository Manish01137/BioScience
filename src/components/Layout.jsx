import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar   from './Navbar'
import Footer   from './Footer'
import WhatsApp from './WhatsApp'

export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  return (
    <div className="font-body bg-body-bg text-b-text overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsApp />
    </div>
  )
}
