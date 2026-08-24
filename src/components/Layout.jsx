import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { useSiteEffects } from '../hooks/useSiteEffects'

export default function Layout() {
  const location = useLocation()
  useSiteEffects()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <div className="cursor" aria-hidden="true" />
      <div className="cursor-dot" aria-hidden="true" />
      <div className="scroll-progress" aria-hidden="true" />
      <canvas id="constellation" aria-hidden="true" />
      <div className="orb orb-a" aria-hidden="true" />
      <div className="orb orb-b" aria-hidden="true" />
      <div className="orb orb-c" aria-hidden="true" />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
