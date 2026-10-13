import { useEffect, useRef, useState } from 'react'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import heroBackgroundImage from '../../imagenes/fondo(1).webp'
import logoHeader from '../../imagenes/logo_aconquija(1).png'
import logoFooter from '../../imagenes/logo_aconquija(2).png'
import respiraVerdeImage from '../../imagenes/respira_verde_fondo.png'
import cultivaTradicionImage from '../../imagenes/cultiva_tradicion.webp'
import caballoImage from '../../imagenes/caballo.webp'
import nochesEstrelladasImage from '../../imagenes/cautiva_miradas.png'
import pucaraImage from '../../imagenes/respira_aconquija2.webp'
import cristoRedentorImage from '../../imagenes/cristo_redentor/cristo_redentor.webp'
import bosqueAlisosImage from '../../imagenes/bosque_de_alisos/bosque.webp'
import virgenValleImage from '../../imagenes/virgen_del_valle/virgen_del_valle.webp'
import balnearioImage from '../../imagenes/balneario_municipal/balneario_5.webp'
import tunelesImage from '../../imagenes/tuneles.webp'
import veranoImage from '../../imagenes/verano.webp'
import otonoImage from '../../imagenes/otoño.jpg'
import inviernoImage from '../../imagenes/invierno.webp'
import primaveraImage from '../../imagenes/primavera.webp'

const approvedRoutes = [
  { path: '/circuitos/respira-verde', title: 'Aconquija Respira Verde' },
  { path: '/circuitos/cultiva-tradicion', title: 'Cultiva Tradición' },
  { path: '/lugares/planetario-janaxpacha-huasi', title: 'Planetario Janaxpacha Huasi' },
  { path: '/lugares/pucara-de-aconquija', title: 'Pucará de Aconquija' },
  { path: '/lugares/balneario-municipal-buena-vista', title: 'Balneario Municipal Buena Vista' },
  { path: '/lugares/bosque-de-alisos', title: 'Bosque de Alisos' },
  { path: '/lugares/cristo-redentor', title: 'Cristo Redentor de Aconquija' },
  { path: '/eventos/desfile-civico-escolar', title: 'Desfile Cívico Escolar' },
  { path: '/eventos/festival-mayor', title: 'Festival Mayor de Aconquija' },
  { path: '/eventos/fiesta-del-bandoneon', title: 'Festival Provincial del Bandoneón' },
  { path: '/lugares/rio-potrero', title: 'Río Potrero' },
  { path: '/lugares/tuneles-del-rio-potrero', title: 'Túneles del Río Potrero' },
  { path: '/lugares/virgen-del-valle', title: 'Virgen del Valle de Aconquija' },
  { path: '/lugares/yunka-suma', title: 'Yunka Suma' },
]

function InstagramIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" /></svg>
}

function FacebookIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M15 4h-2a4 4 0 0 0-4 4v3H7v3h2v6h3v-6h2.5l.5-3H12V8a1 1 0 0 1 1-1h2V4z" /></svg>
}

function TikTokIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-3.77V2h-3.43v13.13a2.89 2.89 0 1 1-2.89-2.89c.3 0 .59.05.86.13V8.87a6.3 6.3 0 1 0 5.46 6.26V8.47a8.24 8.24 0 0 0 4.82 1.55V6.69h-1.05z" /></svg>
}

function WhatsAppIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.52 3.48A11.8 11.8 0 0 0 12.03 0C5.4 0 .03 5.37.03 12c0 2.12.56 4.19 1.62 6.02L0 24l6.16-1.61A11.95 11.95 0 0 0 12.03 24C18.66 24 24 18.63 24 12c0-3.2-1.25-6.2-3.48-8.52ZM12.03 21.8a9.78 9.78 0 0 1-4.99-1.37l-.36-.21-3.65.95.98-3.56-.24-.37A9.78 9.78 0 1 1 12.03 21.8Zm5.39-7.33c-.29-.15-1.71-.84-1.98-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.22-.63.07-.29-.15-1.24-.46-2.36-1.48-.88-.79-1.47-1.77-1.64-2.07-.17-.29-.02-.45.13-.6.14-.14.29-.37.44-.56.15-.19.19-.33.29-.55.1-.22.05-.41-.02-.56-.07-.15-.64-1.55-.88-2.13-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.49.07-.74.33-.26.26-.99.97-.99 2.37 0 1.4 1.02 2.75 1.16 2.94.15.19 2.01 3.07 4.88 4.3.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.71-.7 1.95-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.33Z" /></svg>
}

function SocialLinks({ mobile = false }) {
  return (
    <div className={mobile ? 'nav-mobile-social' : 'nav-icons'}>
      <a href="https://www.instagram.com/turismo_aconquijacat?igsh=MTJxOGR2NWd3aWZqOA==" target="_blank" rel="noreferrer" className="icon-circle" title="Instagram" aria-label="Instagram"><InstagramIcon /></a>
      <a href="https://www.facebook.com/share/1M1xpsvGS9/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="icon-circle" title="Facebook" aria-label="Facebook"><FacebookIcon /></a>
      <a href="https://www.tiktok.com/@turismo_aconquija?_r=1&_t=ZS-99ETmiaC097" target="_blank" rel="noreferrer" className="icon-circle" title="TikTok" aria-label="TikTok"><TikTokIcon /></a>
      <a href="https://wa.me/5493834966977" target="_blank" rel="noreferrer" className="icon-circle" title="WhatsApp" aria-label="WhatsApp"><WhatsAppIcon /></a>
    </div>
  )
}

function WeatherBadge() {
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

  const weatherCode = weather?.code
  let icon = '⛅'
  if (weatherCode === 0) icon = '☀️'
  else if ([1, 2].includes(weatherCode)) icon = '🌤️'
  else if (weatherCode === 3) icon = '☁️'
  else if ([45, 48].includes(weatherCode)) icon = '🌫️'
  else if ([51, 53, 55, 56, 57].includes(weatherCode)) icon = '🌦️'
  else if ([61, 63, 65, 66, 67, 80, 81, 82].includes(weatherCode)) icon = '🌧️'
  else if ([71, 73, 75, 77, 85, 86].includes(weatherCode)) icon = '🌨️'
  else if ([95, 96, 99].includes(weatherCode)) icon = '⛈️'

  return (
    <div className="weather-badge" title="Clima actual en Aconquija, Catamarca" aria-label={`Clima actual en Aconquija: ${weather ? `${weather.temperature} grados` : 'sin datos'}`}>
      <span className="weather-icon" aria-hidden="true">{icon}</span>
      <span className="weather-temp">{weather ? `${weather.temperature}°` : '—°'}</span>
      <span className="weather-location">Aconquija</span>
    </div>
  )
}

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

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-top">
          <div className="foot-brand">
            <Link to="/" className="logo" aria-label="Volver al inicio"><img src={logoFooter} alt="Aconquija Turismo" /></Link>
            <p>Ente de Turismo de Aconquija, Catamarca. A los pies de los Nevados, naturaleza que inspira.</p>
          </div>
          <div className="foot-cols">
            <div className="foot-col">
              <h5>Explorar</h5>
              <a href="#explorar">Excursiones</a>
              <a href="#lugares">Lugares</a>
              <a href="#estaciones">Estaciones</a>
            </div>
            <div className="foot-col">
              <h5>Servicios</h5>
              <a href="#servicios">Dónde dormir</a>
              <a href="#servicios">Dónde comer</a>
              <a href="#servicios">Guías locales</a>
            </div>
            <div className="foot-col">
              <h5>Contacto</h5>
              <p>Ruta Provincial N°48, Aconquija, Catamarca</p>
              <a href="mailto:Maxyz000@icloud.com">Maxyz000@icloud.com</a>
              <a href="tel:+543834966977">+54 383 496-6977</a>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <p>© 2026 Aconquija Turismo — Todos los derechos reservados</p>
          <div className="foot-social">
            <a className="icon-circle" href="https://www.instagram.com/turismo_aconquijacat?igsh=MTJxOGR2NWd3aWZqOA==" target="_blank" rel="noreferrer" title="Instagram" aria-label="Instagram"><InstagramIcon /></a>
            <a className="icon-circle" href="https://www.facebook.com/share/1M1xpsvGS9/?mibextid=wwXIfr" target="_blank" rel="noreferrer" title="Facebook" aria-label="Facebook"><FacebookIcon /></a>
            <a className="icon-circle" href="https://www.tiktok.com/@turismo_aconquija?_r=1&_t=ZS-99ETmiaC097" target="_blank" rel="noreferrer" title="TikTok" aria-label="TikTok"><TikTokIcon /></a>
            <a className="icon-circle" href="https://wa.me/5493834966977" target="_blank" rel="noreferrer" title="WhatsApp" aria-label="WhatsApp"><WhatsAppIcon /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function HomePage() {
  const [activeSeason, setActiveSeason] = useState('verano')
  const placeScrollRef = useRef(null)
  const placeLoopWidthRef = useRef(0)
  const placePausedRef = useRef(false)
  const placeResumeTimerRef = useRef(null)
  const placeSnapTimerRef = useRef(null)

  useEffect(() => {
    const updateScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      const percentage = total > 0 ? (window.scrollY / total) * 100 : 0
      const progress = document.getElementById('readProgress')
      if (progress) progress.style.width = percentage + '%'
      const nav = document.getElementById('siteNav')
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 60)
    }

    updateScroll()
    window.addEventListener('scroll', updateScroll, { passive: true })
    const revealElements = document.querySelectorAll('.reveal')
    let observer = null
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            if (observer) observer.unobserve(entry.target)
          }
        })
      }, { threshold: 0.12 })
    }

    revealElements.forEach((element) => {
      if (observer) observer.observe(element)
      else element.classList.add('in')
    })

    return () => {
      window.removeEventListener('scroll', updateScroll)
      if (observer) observer.disconnect()
    }
  }, [])

  const seasons = [
    { id: 'verano', label: 'Verano', dates: 'Diciembre — Marzo', title: 'Días largos', text: 'Ríos cristalinos, montañas imponentes, senderos que invitan a descubrir la naturaleza y paisajes que renuevan el alma. Un destino donde cada rincón se convierte en una experiencia inolvidable.', image: veranoImage, alt: 'Verano en Aconquija' },
    { id: 'otono', label: 'Otoño', dates: 'Abril — Junio', title: 'El bosque se enciende', text: 'Los colores ocres y rojizos cubren las laderas. Las noches empiezan a refrescar y el cielo se vuelve más nítido para mirar estrellas.', image: otonoImage, alt: 'Otoño en Aconquija' },
    { id: 'invierno', label: 'Invierno', dates: 'Julio — Septiembre', title: 'Picos nevados, aire quieto', text: 'La nieve cubre las cumbres y el silencio se hace total. Ideal para fotografía de paisaje y para quienes buscan desconectar de verdad.', image: inviernoImage, alt: 'Invierno en Aconquija' },
    { id: 'primavera', label: 'Primavera', dates: 'Septiembre — Noviembre', title: 'La sierra florece', text: 'El deshielo despierta arroyos y la vegetación de altura vuelve a brotar. Días templados, perfectos para los senderos más largos.', image: primaveraImage, alt: 'Primavera en Aconquija' },
  ]

  const circuitCards = [
    { path: '/circuitos/respira-verde', image: respiraVerdeImage, alt: 'Nevados del Aconquija' },
    { path: '/circuitos/cultiva-tradicion', image: cultivaTradicionImage, alt: 'Cabalgatas' },
    { path: '/lugares/planetario-janaxpacha-huasi', image: nochesEstrelladasImage, alt: 'Cielo estrellado' },
    { path: '/lugares/pucara-de-aconquija', image: pucaraImage, alt: 'Paisajes de Aconquija' },
  ]

  const places = [
    { path: '/lugares/cristo-redentor', name: 'Cristo Redentor', image: cristoRedentorImage, alt: 'Mirador del Aconquija', description: '' },
    { path: '/lugares/bosque-de-alisos', name: 'Bosque de Alisos', image: bosqueAlisosImage, alt: 'Bosque andino', description: 'Deja que la naturaleza te sorprenda en cada sendero de Los Alisos.' },
    { path: '/lugares/virgen-del-valle', name: 'Virgen Del Valle', image: virgenValleImage, alt: 'Virgen', description: '' },
    { path: '/lugares/balneario-municipal-buena-vista', name: 'Balneario Municipal', image: balnearioImage, alt: 'Pueblo', description: '' },
    { path: '/lugares/tuneles-del-rio-potrero', name: 'Los tuneles', image: tunelesImage, alt: 'Amanecer en la sierra', description: 'Adentrate en los tuneles de Yunca y descubrí un recirrido único, donde la naturaleza y el misterio se encuntran.' },
  ]

  useEffect(() => {
    const track = placeScrollRef.current
    if (!track) return

    const positionAtMiddleSet = () => {
      const firstCard = track.children[0]
      const secondSetFirstCard = track.children[places.length]
      if (!firstCard || !secondSetFirstCard) return

      const loopWidth = secondSetFirstCard.offsetLeft - firstCard.offsetLeft
      if (loopWidth <= 0) return

      placeLoopWidthRef.current = loopWidth
      track.scrollLeft = loopWidth
    }

    const updateCenterCard = () => {
      // Calcular el centro con medidas de layout, no con getBoundingClientRect:
      // este último incluye el transform de elevación/escala y puede hacer oscilar
      // la selección de la tarjeta central mientras el carrusel se desplaza.
      const centerX = track.scrollLeft + track.clientWidth / 2
      let closestCard = null
      let closestDistance = Infinity

      Array.from(track.querySelectorAll('.place-card')).forEach((card) => {
        const cardCenterX = card.offsetLeft + card.offsetWidth / 2
        const distance = Math.abs(cardCenterX - centerX)
        if (distance < closestDistance) {
          closestDistance = distance
          closestCard = card
        }
      })

      track.querySelectorAll('.place-card.is-center').forEach((card) => {
        if (card !== closestCard) card.classList.remove('is-center')
      })
      if (closestCard) closestCard.classList.add('is-center')
    }

    let centerUpdateTimer = null
    let autoplayTimeout = null

    const updateCenterPeriodically = () => {
      updateCenterCard()
      centerUpdateTimer = window.setTimeout(updateCenterPeriodically, 120)
    }

    const getCardStep = () => {
      const firstCard = track.querySelector('.place-card')
      const secondCard = track.children[1]
      if (!firstCard || !secondCard) return 0
      return secondCard.getBoundingClientRect().left - firstCard.getBoundingClientRect().left
    }

    // Avanza una tarjeta, como el botón de siguiente, y deja tiempo para mirar.
    const scheduleNextCard = () => {
      autoplayTimeout = window.setTimeout(() => {
        if (!placePausedRef.current) {
          const step = getCardStep()
          if (step > 0) track.scrollBy({ left: step, behavior: 'smooth' })
        }
        scheduleNextCard()
      }, 2500)
    }

    positionAtMiddleSet()
    updateCenterCard()
    updateCenterPeriodically()
    scheduleNextCard()
    window.addEventListener('resize', positionAtMiddleSet)

    return () => {
      window.removeEventListener('resize', positionAtMiddleSet)
      if (centerUpdateTimer) window.clearTimeout(centerUpdateTimer)
      if (autoplayTimeout) window.clearTimeout(autoplayTimeout)
      if (placeResumeTimerRef.current) window.clearTimeout(placeResumeTimerRef.current)
      if (placeSnapTimerRef.current) window.clearTimeout(placeSnapTimerRef.current)
    }
  }, [places.length])

  const pausePlaceCarousel = () => {
    placePausedRef.current = true
    if (placeResumeTimerRef.current) window.clearTimeout(placeResumeTimerRef.current)
    placeResumeTimerRef.current = window.setTimeout(() => {
      placePausedRef.current = false
    }, 4000)
  }

  return (
    <>
      <div id="readProgress" aria-hidden="true" />
      <Header />
      <main>
        <section className="hero" aria-label="Presentación de Aconquija">
          <div className="hero-bg" style={{ backgroundImage: `url("${heroBackgroundImage}")` }} />
          <div className="hero-content">
            <h1>Aconquija</h1>
            <div className="hero-sub">Naturaleza que inspira</div>
            <div className="hero-divider" />
          </div>
          <div className="scroll-cue">Deslizá para explorar<div className="chev" /></div>
        </section>

        <section className="intro">
          <div className="container reveal">
            <div className="eyebrow">Aconquija - Catamarca - Argentina</div>
            <h2>&quot;La luz de la luna sobre la nieve en las alturas&quot;</h2>
            <p className="lead reveal">Aconquija es uno de esos lugares que sorprenden por su belleza y enamoran por su esencia. Un rincón privilegiado de Catamarca, donde las montañas, los bosques, los ríos y sus verdes paisajes crean postales únicas.Su riqueza no está solo en la naturaleza, sino también en su cultura, sus tradiciones y, sobre todo, en la calidez de su gente. Aconquija invita a conocer, recorrer y vivir cada paisaje, descubriendo un destino auténtico que guarda en cada rincón la esencia de Catamarca.</p>
            <div className="intro-stats">
              <div className="stat"><b>+5.500m</b><span>Altura de los Nevados</span></div>
              <div className="stat"><b>3.165</b><span>Habitantes</span></div>
              <div className="stat"><b>22</b><span>Localidades</span></div>
            </div>
          </div>
        </section>

        <section className="explorar" id="explorar">
          <div className="container">
            <div className="section-head reveal">
              <div><div className="eyebrow">Qué hacer</div><h2>Explorá Aconquija a tu manera</h2></div>
              <p>Recorré Aconquija a través de nuestros circuitos turísticos, diseñados para que vivas una experiencia inolvidable.</p>
            </div>
            <div className="card-grid reveal">
              {circuitCards.map((card) => (
                <Link className="exp-card" to={card.path} key={card.path}>
                  <img src={card.image} alt={card.alt} />
                  <div className="overlay" />
                  <div className="arrow" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M7 17L17 7M9 7h8v8" /></svg></div>
                  <div className="text"><div className="tag" /><h3 /><p /></div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="lugares" id="lugares">
          <div className="container">
            <div className="section-head reveal">
              <div><div className="eyebrow">Recorridos</div><h2>Lugares para no dejar de ver</h2></div>
              <p>Una selección de rincones de Aconquija y sus alrededores, pensada para armar tu propio recorrido.</p>
            </div>
            <div className="place-carousel" onPointerDown={pausePlaceCarousel} onPointerUp={pausePlaceCarousel} onPointerCancel={pausePlaceCarousel}>
              <button className="place-carousel-arrow place-carousel-arrow--prev" type="button" aria-label="Ver lugares anteriores" aria-controls="placeScroll" onClick={() => {
                const track = placeScrollRef.current
                const firstCard = track?.querySelector('.place-card')
                const secondCard = track?.children[1]
                if (track && firstCard && secondCard) {
                  const step = secondCard.getBoundingClientRect().left - firstCard.getBoundingClientRect().left
                  track.scrollBy({ left: -step, behavior: 'smooth' })
                }
              }}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18l-6-6 6-6" /></svg>
              </button>
              <div className="place-scroll reveal" id="placeScroll" ref={placeScrollRef} onScroll={() => {
                const track = placeScrollRef.current
                const loopWidth = placeLoopWidthRef.current
                if (!track || !loopWidth) return

                // Mantener el bucle infinito sin interrumpir el gesto manual.
                if (track.scrollLeft < loopWidth * 0.5) track.scrollLeft += loopWidth
                else if (track.scrollLeft >= loopWidth * 2) track.scrollLeft -= loopWidth

                // Cuando el trackpad deja de mover el carrusel, alinear la tarjeta
                // más cercana al centro para que no queden imágenes a medio camino.
                if (placeSnapTimerRef.current) window.clearTimeout(placeSnapTimerRef.current)
                placeSnapTimerRef.current = window.setTimeout(() => {
                  const cards = Array.from(track.querySelectorAll('.place-card'))
                  if (!cards.length) return

                  const centerX = track.scrollLeft + track.clientWidth / 2
                  let closestCard = null
                  let closestDistance = Infinity
                  cards.forEach((card) => {
                    const cardCenterX = card.offsetLeft + card.offsetWidth / 2
                    const distance = Math.abs(cardCenterX - centerX)
                    if (distance < closestDistance) {
                      closestDistance = distance
                      closestCard = card
                    }
                  })

                  if (!closestCard) return
                  const targetLeft = closestCard.offsetLeft + closestCard.offsetWidth / 2 - track.clientWidth / 2
                  if (Math.abs(targetLeft - track.scrollLeft) > 2) {
                    track.scrollTo({ left: targetLeft, behavior: 'smooth' })
                  }
                }, 180)
              }}>
                {[...places, ...places, ...places].map((place, index) => (
                  <article className="place-card" key={`${Math.floor(index / places.length)}-${place.path}`}>
                    <div className="place-img">
                      <span className="place-num">{String((index % places.length) + 1).padStart(2, '0')}</span>
                      <Link to={place.path} aria-label={place.name}><img src={place.image} alt={place.alt} /></Link>
                    </div>
                    <h3>{place.name}</h3>
                    <p>{place.description}</p>
                  </article>
                ))}
              </div>
              <button className="place-carousel-arrow place-carousel-arrow--next" type="button" aria-label="Ver lugares siguientes" aria-controls="placeScroll" onClick={() => {
                const track = placeScrollRef.current
                const firstCard = track?.querySelector('.place-card')
                const secondCard = track?.children[1]
                if (track && firstCard && secondCard) {
                  const step = secondCard.getBoundingClientRect().left - firstCard.getBoundingClientRect().left
                  track.scrollBy({ left: step, behavior: 'smooth' })
                }
              }}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18l6-6-6-6" /></svg>
              </button>
            </div>
            <div className="scroll-hint reveal">Deslizá hacia la derecha →</div>
          </div>
        </section>

        <section className="estaciones" id="estaciones">
          <div className="container">
            <div className="section-head reveal">
              <div><div className="eyebrow">Cuándo venir</div><h2>Aconquija cambia con cada estación</h2></div>
              <p>Cada momento del año tiene su propia versión. Elegí la que te llama.</p>
            </div>
            <div className="est-tabs reveal" role="tablist" aria-label="Estaciones del año">
              {seasons.map((season) => <button className={`est-tab${activeSeason === season.id ? ' active' : ''}`} type="button" role="tab" aria-selected={activeSeason === season.id} aria-controls={`panel-${season.id}`} key={season.id} onClick={() => setActiveSeason(season.id)}>{season.label}<span className="est-tab-underline" aria-hidden="true" /></button>)}
            </div>
            <div className="est-panels reveal">
              {seasons.map((season) => (
                <div className={`est-panel${activeSeason === season.id ? ' active' : ''}`} id={`panel-${season.id}`} role="tabpanel" key={season.id} hidden={activeSeason !== season.id}>
                  <div><div className={`est-eyebrow${season.id === 'verano' ? ' season-date--summer' : ''}`}>{season.dates}</div><h3 className={season.id === 'verano' ? 'season-title--summer' : undefined}>{season.title}</h3><p>{season.text}</p></div>
                  <img src={season.image} alt={season.alt} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="servicios" id="servicios">
          <div className="container">
            <div className="section-head reveal">
              <div><div className="eyebrow">Servicios</div><h2>Todo lo que necesitás para quedarte</h2></div>
              <p>Alojamiento, gastronomía y guías locales para armar tu estadía sin vueltas.</p>
            </div>
            <div className="serv-grid reveal">
              <a className="serv-item" href="#sobre">
                <div className="num">01</div><h4>Dónde dormir</h4>
                <p>Posadas de montaña, cabañas y hospedajes familiares con vista a la sierra.</p>
                <div className="serv-icon" aria-hidden="true"><svg viewBox="0 0 48 48" fill="none"><path d="M6 22.5 24 8l18 14.5M11 20v20h26V20M20 40V27h8v13M17 22h.01M31 22h.01" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
              </a>
              <a className="serv-item" href="#sobre">
                <div className="num">02</div><h4>Dónde comer</h4>
                <p>Cocina regional, cabrito de monte y productos de huerta de cercanía.</p>
                <div className="serv-icon" aria-hidden="true"><svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="17" stroke="currentColor" strokeWidth="1.7"/><circle cx="24" cy="24" r="12.5" stroke="currentColor" strokeWidth="1.4"/><path d="M11 10v8M8.5 10v5.5a2.5 2.5 0 0 0 5 0V10M11 18v19M37 10c-3.1 2.8-4 6.2-4 10v4h4V10ZM37 24v13" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
              </a>
              <a className="serv-item" href="#sobre">
                <div className="num">03</div><h4>Guías y excursiones</h4>
                <p>Baqueanos certificados para trekking, cabalgatas y travesías de altura.</p>
                <div className="serv-icon" aria-hidden="true"><svg viewBox="0 0 48 48" fill="none"><path d="M5 17 14 7l8 10 7-7 14 12-2 17H7L5 17Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/><path d="m5 17 9-3 8 3 7-7M7 39l9-9 6 3 8-7 11 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M13 23c4-3 7-2 10 1s5 5 8 2 3-5 7-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2.2 2.8"/><path d="m34 19 4 3-1 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
              </a>
              <a className="serv-item" href="#sobre">
                <div className="num">04</div><h4>Artesanías</h4>
                <p>Tejidos en telar, cerámica y productos regionales hechos a mano.</p>
                <div className="serv-icon" aria-hidden="true"><svg viewBox="0 0 48 48" fill="none"><path d="M16 9h16l-2 7 5 6-3 15H16l-3-15 5-6-2-7ZM18 16h12M17 25h14M20 31h8M9 12l4 4M39 12l-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
              </a>
            </div>
          </div>
        </section>

        <section className="cta" id="sobre">
          <div className="cta-bg" style={{ backgroundImage: `url("${caballoImage}")` }} />
          <div className="cta-content">
            <div className="eyebrow">Sobre Aconquija</div>
            <h2>Un pueblo, una sierra, un mismo ritmo.</h2>
            <p>Aconquija no se visita rápido. Es un lugar para quedarse unos días, caminar despacio y dejar que la montaña marque el paso. Te esperamos al pie de los Nevados.</p>
            <a href="#" className="btn-primary">Planeá tu visita</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function PagePlaceholder({ title }) {
  return (
    <main className="page-placeholder" aria-labelledby="page-title">
      <p className="page-placeholder__eyebrow">Aconquija Turismo</p>
      <h1 id="page-title">{title}</h1>
      <p className="page-placeholder__message">Esta ruta forma parte del mapa aprobado. El contenido original de esta página se incorporará durante la etapa correspondiente de la migración.</p>
      <Link className="page-placeholder__link" to="/">Volver al inicio</Link>
    </main>
  )
}

function NotFound() {
  return (
    <main className="page-placeholder" aria-labelledby="page-title">
      <p className="page-placeholder__eyebrow">Aconquija Turismo</p>
      <h1 id="page-title">Página no encontrada</h1>
      <p className="page-placeholder__message">Esta dirección no forma parte del mapa aprobado de páginas.</p>
      <Link className="page-placeholder__link" to="/">Volver al inicio</Link>
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {approvedRoutes.map(({ path, title }) => <Route key={path} path={path} element={<PagePlaceholder title={title} />} />)}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
