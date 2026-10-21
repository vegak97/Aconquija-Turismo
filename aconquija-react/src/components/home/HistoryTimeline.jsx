import { useEffect, useRef, useState } from 'react'
import mountainImage from '../../../imagenes/montaña.png'
import lineaChilcaImage from '../../../imagenes/linea_del_tiempo/linea-chilca.webp'
import lineaClavilloImage from '../../../imagenes/linea_del_tiempo/linea-clavillo.webp'

const milestones = [
  {
    date: '1632',
    short: 'Antiguas sendas',
    eyebrow: 'Contexto histórico',
    title: 'Mucho antes de las carreteras',
    paragraphs: [
      'Los acontecimientos vinculados al Gran Alzamiento Diaguita en la zona de Singuil muestran que este territorio ya formaba parte de una historia de desplazamientos y conexiones anteriores a las rutas modernas.',
      'Las comunidades aprovechaban quebradas y pasos naturales para moverse, intercambiar productos y mantener el contacto con otros pueblos.'
    ],
    note: 'Este antecedente no demuestra que los caminos actuales siguieran exactamente los mismos trazados.'
  },
  {
    date: '1886',
    short: 'El territorio',
    eyebrow: 'Mapas y caminos',
    title: 'Un territorio conectado',
    paragraphs: [
      'Un mapa del Instituto Geográfico Argentino de 1886 representa un camino por el corredor de Narváez y Singuil, un antecedente territorial de la actual Ruta Provincial 1.',
      'Los mapas antiguos ayudan a reconocer cómo se conectaban los valles y las poblaciones antes de la infraestructura vial moderna.'
    ],
    note: 'La presencia de un camino en el mapa es una referencia histórica, no una prueba de que coincida con la traza actual.'
  },
  {
    date: '1894–1909',
    short: 'Cuesta de la Chilca',
    eyebrow: 'Obras y comunicación',
    title: 'La Cuesta de la Chilca',
    image: lineaChilcaImage,
    imageAlt: 'Camino histórico de la Cuesta de la Chilca',
    paragraphs: [
      'En 1894 se registraron estudios y fondos para conectar Concepción con Andalgalá. El proyecto fue avanzando por etapas, en una época en que los viajes por las sierras dependían de caminos difíciles.',
      'Según la reseña histórica de Turismo Andalgalá, la Cuesta de la Chilca fue inaugurada en 1909, consolidando una conexión importante entre la región y Tucumán.'
    ],
    note: 'La fecha de inauguración se atribuye a la reseña histórica turística citada en el material.'
  },
  {
    date: '1905–1923',
    short: 'El Clavillo',
    eyebrow: 'Huellas de arrieros',
    title: 'Del huellón al camino de montaña',
    image: lineaClavilloImage,
    imageAlt: 'Camino histórico del Clavillo',
    paragraphs: [
      'En 1905 aparecen proyectos para construir puentes sobre el arroyo Chirimayo y el río Cochuna. Las antiguas huellas de arrieros convivieron con las nuevas obras para atravesar la montaña.',
      'Un recuerdo publicado por Eduardo Conrado Vela menciona el “Huellón de los Burros” y el encuentro de frentes de obra cerca de 1920 en El Corte del Anta. La carta topográfica de Aconquija de 1923 aporta otra referencia documental de aquel territorio.'
    ],
    note: 'Aquí se combinan documentos históricos y memoria local; no tienen el mismo tipo de evidencia.'
  },
  {
    date: '1972',
    short: 'Ruta 1',
    eyebrow: 'Cambios en el recorrido',
    title: 'La ruta y el Valle Central',
    paragraphs: [
      'Durante el siglo XX, el camino figuró en la red nacional como RN64 y luego RN62. En 1972 pasó a jurisdicción provincial.',
      'Los testimonios locales sitúan alrededor de ese período un cambio importante en la traza. En Cóndor Huasi, Los Narváez y La Atravesada todavía se reconocen referencias a antiguos recorridos.'
    ],
    note: 'El cambio exacto del trazado se presenta como memoria local recogida en el material, no como una conclusión cartográfica definitiva.'
  },
  {
    date: 'HOY',
    short: 'Conocé lo actual',
    eyebrow: 'Una historia que continúa',
    title: 'Los caminos siguen contando',
    paragraphs: [
      'Las rutas actuales forman parte de una historia mucho más larga de viajes, encuentros y vínculos entre comunidades. Cada recorrido permite descubrir otra parte de Aconquija.',
      'Ahora te invitamos a seguir explorando sus paisajes, lugares y experiencias turísticas.'
    ],
    note: 'Deslizá y sé parte de nuestra historia ↓'
  }
]

export default function HistoryTimeline() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [titleStarted, setTitleStarted] = useState(false)
  const [typedTitle, setTypedTitle] = useState('')
  const titleText = 'Un destino. Muchas historias.'
  const sectionRef = useRef(null)
  const active = milestones[activeIndex]

  useEffect(() => {
    if (!titleStarted) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTypedTitle(titleText)
      return undefined
    }
    let index = 0
    setTypedTitle('')
    const typing = window.setInterval(() => {
      index += 1
      setTypedTitle(titleText.slice(0, index))
      if (index >= titleText.length) window.clearInterval(typing)
    }, 58)
    return () => window.clearInterval(typing)
  }, [titleStarted])

  useEffect(() => {
    const section = sectionRef.current
    const nav = document.getElementById('siteNav')
    if (!section || !nav || !('IntersectionObserver' in window)) return undefined

    const observer = new IntersectionObserver(([entry]) => {
      const mobile = window.matchMedia('(max-width: 880px)').matches
      nav.classList.toggle('history-reading', mobile && entry.isIntersecting)
      if (entry.isIntersecting) setTitleStarted(true)
    }, { threshold: 0.12 })

    observer.observe(section)
    return () => {
      observer.disconnect()
      nav.classList.remove('history-reading')
    }
  }, [])

  return (
    <section className="history-section" id="historia" ref={sectionRef} aria-labelledby="history-title">
      <div className="history-torn-edge" aria-hidden="true">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,12 C75,20 95,4 165,18 S280,32 355,16 S465,8 535,22 S655,34 730,14 S850,3 920,20 S1035,31 1110,15 S1240,4 1305,19 S1390,25 1440,12 L1440,100 L0,100 Z" />
        </svg>
      </div>
      <div className="container history-container">
        <header className="history-intro">
          <p className="history-eyebrow">Aconquija · Historia y territorio</p>
          <h2 id="history-title" aria-label={titleText} className={titleStarted ? 'is-typing' : ''}>
            {typedTitle}
          </h2>
          <span className="history-title-rule" aria-hidden="true" />
          <p className="history-subtitle">De las antiguas sendas a los caminos que hicieron historia.</p>
          <div className="history-intro-copy">
            <h3>Hay historias que comienzan mucho antes de las rutas.</h3>
            <p> Aconquija estuvo conectado con otros pueblos mucho antes de los caminos modernos. Por estas sierras circularon arrieros, comerciantes y familias que viajaban a pie o a caballo, transportando mercancías, ganado, noticias y costumbres.</p>
            <p>Con el tiempo, aquellas sendas y los nuevos caminos fueron transformando la manera de viajar, comerciar y encontrarse. Esta línea de tiempo recorre algunos de esos momentos, desde los antecedentes históricos hasta las rutas que conocemos hoy.</p>
          </div>
          <p className="history-prompt">Explorá las fechas y descubrí cómo fue cambiando nuestro territorio <span aria-hidden="true">↓</span></p>
        </header>

        <div className="history-panel">
          <div className="history-panel-heading">
            <span className="history-map-icon" aria-hidden="true">
              <svg viewBox="0 0 32 32" fill="none"><path d="M4 8.5 11 5l10 3.5L28 5v18.5L21 27l-10-3.5L4 27V8.5Z" /><path d="M11 5v18.5M21 8.5V27" /></svg>
            </span>
            <div>
              <h3>Los caminos que hicieron historia</h3>
              <p>Seleccioná una fecha para comenzar el recorrido.</p>
            </div>
          </div>

          <div className="history-panel-body">
            <nav className="history-timeline" aria-label="Fechas de la historia de los caminos">
              {milestones.map((item, index) => (
                <button
                  className={`history-date${activeIndex === index ? ' active' : ''}`}
                  key={item.date}
                  type="button"
                  aria-current={activeIndex === index ? 'step' : undefined}
                  onClick={() => setActiveIndex(index)}
                >
                  <span className="history-dot" aria-hidden="true" />
                  <span className="history-date-text">
                    <strong>{item.date}</strong>
                    <small>{item.short}</small>
                  </span>
                </button>
              ))}
            </nav>

            <article className="history-detail" aria-live="polite" key={active.date}>
              <img src={active.image || mountainImage} alt={active.imageAlt || "Paisaje serrano de Aconquija"} />
              <p className="history-detail-eyebrow">{active.date} · {active.eyebrow}</p>
              <h3>{active.title}</h3>
              {active.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <p className="history-note">{active.note}</p>
            </article>
          </div>
          <div className="history-bottom-prompt">Deslizá y sé parte de nuestra historia <span aria-hidden="true">↓</span></div>
        </div>
      </div>
      <div className="history-mountain-line" aria-hidden="true">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none"><path d="M0 72 70 48 105 62 158 20 207 63 248 44 290 70 365 28 410 64 465 48 515 73 580 31 630 66 695 46 744 72 810 18 865 61 930 43 980 72 1045 29 1100 64 1165 45 1210 72 1278 23 1330 61 1385 43 1440 68" /></svg>
      </div>
    </section>
  )
}
