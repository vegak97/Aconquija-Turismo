import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SocialLinks from './SocialLinks'
import WeatherBadge from '../ui/WeatherBadgeView'
import logoHeader from '../../../../imagenes/logo_aconquija(1).png'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

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

  return (
    <>
      <header className="nav" id="siteNav">
        <Link to="/" className="logo" aria-label="Aconquija Turismo, inicio" onClick={() => setMenuOpen(false)}>
          <img src={logoHeader} alt="Aconquija Turismo" />
        </Link>
        <nav className={`links${menuOpen ? ' open' : ''}`} id="navLinks" aria-label="Navegación principal">
          <button className="nav-close" type="button" aria-label="Cerrar menú" onClick={() => setMenuOpen(false)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </button>
          <a href="#explorar" onClick={() => setMenuOpen(false)}>Explorar</a>
          <a href="#lugares" onClick={() => setMenuOpen(false)}>Lugares</a>
          <a href="#estaciones" onClick={() => setMenuOpen(false)}>Estaciones</a>
          <a href="#servicios" onClick={() => setMenuOpen(false)}>Servicios</a>
          <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre Aconquija</a>
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
