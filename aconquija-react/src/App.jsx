import { useEffect, useState } from 'react'
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
            <p className="lead">Aconquija es uno de esos lugares que sorprenden por su belleza y enamoran por su esencia. Un rincón privilegiado de Catamarca, donde las montañas, los bosques, los ríos y sus verdes paisajes crean postales únicas.<br /><br />Su riqueza no está solo en la naturaleza, sino también en su cultura, sus tradiciones y, sobre todo, en la calidez de su gente. Aconquija invita a conocer, recorrer y vivir cada paisaje, descubriendo un destino auténtico que guarda en cada rincón la esencia de Catamarca.</p>
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
            <div className="place-scroll reveal" id="placeScroll">
              {places.map((place, index) => (
                <article className="place-card" key={place.path}>
                  <div className="place-img">
                    <span className="place-num">{String(index + 1).padStart(2, '0')}</span>
                    <Link to={place.path} aria-label={place.name}><img src={place.image} alt={place.alt} /></Link>
                  </div>
                  <h3>{place.name}</h3>
                  <p>{place.description}</p>
                </article>
              ))}
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
              {seasons.map((season) => <button className={`est-tab${activeSeason === season.id ? ' active' : ''}`} type="button" role="tab" aria-selected={activeSeason === season.id} aria-controls={`panel-${season.id}`} key={season.id} onClick={() => setActiveSeason(season.id)}>{season.label}</button>)}
            </div>
            <div className="est-panels reveal">
              {seasons.map((season) => (
                <div className={`est-panel${activeSeason === season.id ? ' active' : ''}`} id={`panel-${season.id}`} role="tabpanel" key={season.id} hidden={activeSeason !== season.id}>
                  <div><div className="est-eyebrow">{season.dates}</div><h3>{season.title}</h3><p>{season.text}</p></div>
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
              <a className="serv-item" href="#sobre"><div className="num">01</div><h4>Dónde dormir</h4><p>Posadas de montaña, cabañas y hospedajes familiares con vista a la sierra.</p></a>
              <a className="serv-item" href="#sobre"><div className="num">02</div><h4>Dónde comer</h4><p>Cocina regional, cabrito de monte y productos de huerta de cercanía.</p></a>
              <a className="serv-item" href="#sobre"><div className="num">03</div><h4>Guías y excursiones</h4><p>Baqueanos certificados para trekking, cabalgatas y travesías de altura.</p></a>
              <a className="serv-item" href="#sobre"><div className="num">04</div><h4>Artesanías</h4><p>Tejidos en telar, cerámica y productos regionales hechos a mano.</p></a>
            </div>
          </div>
        </section>

        <section className="cta" id="sobre">
          <div className="cta-bg" style={{ backgroundImage: `url("${caballoImage}")` }} />
          <div className="cta-content">
            <div className="eyebrow">Sobre Aconquija</div>
            <h2>Un pueblo, una sierra, un mismo ritmo.</h2>
            <p>Aconquija no se visita rápido. Es un lugar para quedarse unos días, caminar despacio y dejar que la montaña marque el paso. Te esperamos al pie de los Nevados.</p>
            <a href="#servicios" className="btn-primary">Planeá tu visita</a>
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
