import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import tourismImage from '../../imagenes/fondo(1).webp'
import municipalLogo from '../../imagenes/logo_aconquija(1).png'
import governmentImage from '../../imagenes/linea_del_tiempo/pueblo.webp'
import PortalMountainScene from '../components/portal/PortalMountainScene'
import '../styles/portal.css'


function PortalWeatherMark({ code }) {
  const common = {
    viewBox: '0 0 40 40',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.65,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
    focusable: 'false',
  }

  if (code === 0) return <svg {...common}><circle cx="20" cy="17" r="6" /><path d="M20 3v4M20 27v3M6 17h4m20 0h4M10 7l3 3m14 14 3 3M30 7l-3 3M13 24l-3 3" /><path d="M8 34h24" opacity=".55" /></svg>
  if ([1, 2].includes(code)) return <svg {...common}><path d="M24 7a8 8 0 0 0-11 10" /><path d="M11 28h18a6 6 0 0 0 0-12 9 9 0 0 0-17-1 6.5 6.5 0 0 0-1 13Z" /><path d="M8 34h24" opacity=".5" /></svg>
  if (code === 3) return <svg {...common}><path d="M8 25h23a6 6 0 0 0 0-12 9 9 0 0 0-17-1 6.5 6.5 0 0 0-6 13Z" /><path d="M11 32h18M16 36h10" opacity=".65" /></svg>
  if ([45, 48].includes(code)) return <svg {...common}><path d="M7 13h26M10 20h20M6 27h28M12 34h16" /><path d="m12 7 3-3m10 3 3-3" opacity=".55" /></svg>
  if ([95, 96, 99].includes(code)) return <svg {...common}><path d="M8 24h23a6 6 0 0 0 0-12 9 9 0 0 0-17-1 6.5 6.5 0 0 0-6 13Z" /><path d="m22 23-6 8h5l-2 6 8-10h-5l2-4" /></svg>
  if ([71, 73, 75, 77, 85, 86].includes(code)) return <svg {...common}><path d="M8 23h23a6 6 0 0 0 0-12 9 9 0 0 0-17-1 6.5 6.5 0 0 0-6 13Z" /><path d="M14 29v7m-3.5-3.5h7m-5-2 3 4m0-4-3 4M27 29v7m-3.5-3.5h7" /></svg>
  if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return <svg {...common}><path d="M8 22h23a6 6 0 0 0 0-12 9 9 0 0 0-17-1 6.5 6.5 0 0 0-6 13Z" /><path d="m13 27-2 5m11-5-2 5m11-5-2 5" /></svg>
  return <svg {...common}><circle cx="20" cy="19" r="9" /><path d="M20 10v18M11 19h18m-15.4-6.4 12.8 12.8m0-12.8L13.6 25.4" /></svg>
}

function PortalWeather() {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    let cancelled = false
    const loadWeather = async () => {
      try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=-27.9&longitude=-65.8&current=temperature_2m,weather_code&timezone=America%2FArgentina%2FCatamarca')
        if (!response.ok) throw new Error('No se pudo consultar el clima')
        const data = await response.json()
        if (!cancelled && data.current) {
          setWeather({
            temperature: Math.round(data.current.temperature_2m),
            code: data.current.weather_code,
          })
        }
      } catch {
        if (!cancelled) setWeather(null)
      }
    }

    loadWeather()
    const refreshId = window.setInterval(loadWeather, 15 * 60 * 1000)
    return () => {
      cancelled = true
      window.clearInterval(refreshId)
    }
  }, [])

  const code = weather?.code
  let condition = 'Consultando clima'
  if (weather) {
    if (code === 0) condition = 'Despejado'
    else if ([1, 2].includes(code)) condition = 'Algo nublado'
    else if (code === 3) condition = 'Nublado'
    else if ([45, 48].includes(code)) condition = 'Neblina'
    else if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(code)) condition = 'Lluvia'
    else if ([71, 73, 75, 77, 85, 86].includes(code)) condition = 'Nieve'
    else if ([95, 96, 99].includes(code)) condition = 'Tormenta'
    else condition = 'Clima variable'
  }

  return (
    <div className="portal-weather" aria-label={`Clima actual en Aconquija: ${weather ? `${weather.temperature} grados, ${condition}` : 'datos no disponibles'}`}>
      <span className="portal-weather__mark"><PortalWeatherMark code={code} /></span>
      <span className="portal-weather__details">
        <span className="portal-weather__place">ACONQUIJA · CLIMA</span>
        <span className="portal-weather__reading">
          <strong>{weather ? `${weather.temperature}°` : '—°'}</strong>
          <span>{weather ? condition : 'Sin datos'}</span>
        </span>
      </span>
    </div>
  )
}

function PortalHomePage() {
  const [isDark, setIsDark] = useState(true)
  return (
    <main className={`portal-page${isDark ? ' portal-page--dark' : ''}`} data-theme={isDark ? 'dark' : 'light'}>
      <PortalMountainScene />
      <header className="portal-header">
        <Link to="/" className="portal-wordmark" aria-label="Aconquija, portal institucional">
          <img src={municipalLogo} alt="Escudo municipal de Aconquija" className="portal-wordmark__logo" />
          <span className="portal-wordmark__text">
            <span className="portal-wordmark__name">ACONQUIJA</span>
            <span className="portal-wordmark__caption">PORTAL INSTITUCIONAL</span>
          </span>
        </Link>
        <div className="portal-header__actions">
          <PortalWeather />
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
        </div>
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
