import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import SocialLinks from './SocialLinks'
import WeatherBadge from '../ui/WeatherBadgeView'
import logoHeader from '../../../imagenes/logo_aconquija(1).png'

function Header({ animateOnLoad = false }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  // Mantiene el mismo estado visual de la navegación en todas las rutas.
  useEffect(() => {
    const nav = document.getElementById('siteNav')
    if (!nav) return undefined

    const updateScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 60)
    }

    updateScroll()
    window.addEventListener('scroll', updateScroll, { passive: true })
    return () => window.removeEventListener('scroll', updateScroll)
  }, [])

  // Los enlaces de secciones también funcionan cuando se llega desde una página secundaria.
  useEffect(() => {
    if (location.pathname !== '/' || !location.hash) return undefined
    const sectionId = decodeURIComponent(location.hash.slice(1))
    const scrollToSection = () => {
      const section = document.getElementById(sectionId)
      if (!section) return
      const top = section.getBoundingClientRect().top + window.scrollY - 90
      window.scrollTo({ top, behavior: 'smooth' })
    }
    const frame = window.requestAnimationFrame(scrollToSection)
    return () => window.cancelAnimationFrame(frame)
  }, [location.pathname, location.hash])

  const handleSectionClick = (event, sectionId) => {
    setMenuOpen(false)
    if (location.pathname !== '/') return
    event.preventDefault()
    const section = document.getElementById(sectionId)
    if (!section) return
    const top = section.getBoundingClientRect().top + window.scrollY - 90
    window.scrollTo({ top, behavior: 'smooth' })
  }


  return (
    <>
      <header className={`nav${animateOnLoad ? ' nav-intro' : ''}`} id="siteNav">
        <Link to="/" className="logo" aria-label="Aconquija Turismo, inicio" onClick={() => setMenuOpen(false)}>
          <img src={logoHeader} alt="Aconquija Turismo" />
        </Link>
        <nav className={`links${menuOpen ? ' open' : ''}`} id="navLinks" aria-label="Navegación principal">
          <button className="nav-close" type="button" aria-label="Cerrar menú" onClick={() => setMenuOpen(false)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </button>
          <Link to={location.pathname === '/' ? '#explorar' : '/#explorar'} onClick={(event) => handleSectionClick(event, 'explorar')}>Explorar</Link>
          <Link to={location.pathname === '/' ? '#lugares' : '/#lugares'} onClick={(event) => handleSectionClick(event, 'lugares')}>Lugares</Link>
          <Link to={location.pathname === '/' ? '#estaciones' : '/#estaciones'} onClick={(event) => handleSectionClick(event, 'estaciones')}>Estaciones</Link>
          <Link to={location.pathname === '/' ? '#servicios' : '/#servicios'} onClick={(event) => handleSectionClick(event, 'servicios')}>Servicios</Link>
          <Link to={location.pathname === '/' ? '#sobre' : '/#sobre'} onClick={(event) => handleSectionClick(event, 'sobre')}>Sobre Aconquija</Link>
          <SocialLinks mobile />
        </nav>
        <div className="nav-actions">
          <WeatherBadge />
          <SocialLinks />
          <button className="icon-circle menu-trigger" id="menuBtn" type="button" aria-label="Abrir menú" aria-expanded={menuOpen} onClick={() => setMenuOpen(true)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" /></svg>
          </button>
        </div>
      </header>
      <button className={`nav-overlay${menuOpen ? ' open' : ''}`} type="button" aria-label="Cerrar menú" onClick={() => setMenuOpen(false)} tabIndex={menuOpen ? 0 : -1} />
    </>
  )
}
export default Header
