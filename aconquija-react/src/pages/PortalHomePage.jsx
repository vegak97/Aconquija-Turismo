import { useState } from 'react'
import { Link } from 'react-router-dom'
import tourismImage from '../../imagenes/fondo(1).webp'
import municipalLogo from '../../imagenes/logo_aconquija(1).png'
import governmentImage from '../../imagenes/linea_del_tiempo/pueblo.webp'
import '../styles/portal.css'

function PortalHomePage() {
  const [isDark, setIsDark] = useState(false)

  return (
    <main className={`portal-page${isDark ? ' portal-page--dark' : ''}`} data-theme={isDark ? 'dark' : 'light'}>
      <div className="portal-orb portal-orb--one" aria-hidden="true" />
      <div className="portal-orb portal-orb--two" aria-hidden="true" />

      <header className="portal-header">
        <Link to="/" className="portal-wordmark" aria-label="Aconquija, portal institucional">
          <img src={municipalLogo} alt="Escudo municipal de Aconquija" className="portal-wordmark__logo" />
          <span className="portal-wordmark__text">
            <span className="portal-wordmark__name">ACONQUIJA</span>
            <span className="portal-wordmark__caption">PORTAL INSTITUCIONAL</span>
          </span>
        </Link>
        <button
          type="button"
          className="portal-theme-toggle"
          onClick={() => setIsDark((current) => !current)}
          aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
          aria-pressed={isDark}
        >
          {isDark ? (
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 15.5A8.5 8.5 0 0 1 8.5 3.5 8.5 8.5 0 1 0 20.5 15.5Z" /></svg>
          )}
          <span>{isDark ? 'Modo claro' : 'Modo oscuro'}</span>
        </button>
      </header>

      <section className="portal-main" aria-labelledby="portal-title">
        <div className="portal-intro">
          <span className="portal-eyebrow">BIENVENIDOS</span>
          <h1 id="portal-title">Aconquija, Catamarca</h1>
          <p>Conocé nuestro municipio y accedé a sus espacios institucionales.</p>
        </div>

        <div className="portal-cards">
          <Link to="/turismo" className="portal-card portal-card--tourism">
            <div className="portal-card__image-wrap">
              <img src={tourismImage} alt="Paisaje natural de Aconquija" className="portal-card__image" />
              <span className="portal-card__number">01</span>
              <span className="portal-card__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none"><path d="M3 19 9.2 8.5l3.7 5.7 2.4-3.4L21 19H3Z" /><path d="m8 10 1.2-2 1.2 2" /></svg>
              </span>
            </div>
            <div className="portal-card__body">
              <span className="portal-card__category">01 · DESCUBRIR</span>
              <div className="portal-card__heading">
                <h2>Turismo</h2>
                <span className="portal-card__arrow" aria-hidden="true">↗</span>
              </div>
              <p>Naturaleza, cultura y experiencias.</p>
              <span className="portal-card__action">Ingresar <span aria-hidden="true">→</span></span>
            </div>
          </Link>

          <Link to="/gobierno" className="portal-card portal-card--government">
            <div className="portal-card__image-wrap">
              <img src={governmentImage} alt="Vista del pueblo de Aconquija" className="portal-card__image" />
              <span className="portal-card__number">02</span>
              <span className="portal-card__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none"><path d="M3 9h18L12 4 3 9Z" /><path d="M5 10v8m4-8v8m6-8v8m4-8v8M3 20h18" /></svg>
              </span>
            </div>
            <div className="portal-card__body">
              <span className="portal-card__category">02 · MUNICIPIO</span>
              <div className="portal-card__heading">
                <h2>Gobierno</h2>
                <span className="portal-card__arrow" aria-hidden="true">↗</span>
              </div>
              <p>Gestión e información municipal.</p>
              <span className="portal-card__action">En desarrollo <span aria-hidden="true">→</span></span>
            </div>
          </Link>
        </div>
      </section>

    </main>
  )
}

export default PortalHomePage
