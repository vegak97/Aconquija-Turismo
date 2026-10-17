import { Link } from 'react-router-dom'
import tunnelsImage from '../../../../imagenes/respira_verde/tuneles/IMG_1886.jpg'
import bosqueImage from '../../../../imagenes/bosque_de_alisos/bosque_de_alisos.webp'
import cabalgataImage from '../../../../imagenes/cabalgata.webp'

const cards = [
  {
    title: 'Túneles Quebrada de las cañas',
    category: 'Trekking',
    difficulty: 'Media dificultad',
    description: 'Antiguas construcciones tomadas por la vegetación de yungas, ideales para una caminata de aventura entre montaña, humedad y verde. Se llega en excursión guiada desde los parajes del circuito, combinando tramos en vehículo y a pie; te recomendamos coordinar la salida con un guía local para conocer el estado del camino.',
    metadata: ['Medio día'],
    image: tunnelsImage,
    alt: 'Túneles de Yunca',
    href: '/lugares/tuneles-del-rio-potrero',
    featured: true,
  },
  {
    title: 'Bosque de Alisos',
    category: 'Naturaleza',
    description: 'Vegetación nativa de yungas, arroyos de montaña y una fauna variada como parte del paisaje que envuelve a todo el circuito. El microclima fresco de la zona la hace ideal para el descanso.',
    metadata: ['Libre'],
    image: bosqueImage,
    alt: 'Charqueadero',
    href: '/lugares/bosque-de-alisos',
  },
  {
    title: 'Cabalgatas',
    category: 'Aventura',
    description: 'Recorré los caminos entre los parajes del circuito a caballo, guiado por baqueanos de la zona. Una forma tradicional de conocer la sierra al ritmo de la montaña.',
    metadata: ['2 a 4 hs'],
    image: cabalgataImage,
    alt: 'Cabalgatas en Aconquija',
  },
  {
    title: 'Río Potrero',
    category: 'Naturaleza',
    description: 'El paraje más al norte del circuito, a orillas del Río del Campo. Un lugar de aguas frescas de montaña, perfecto para refrescarse después de una jornada de trekking o cabalgata.',
    metadata: ['Libre'],
    alt: 'Espacio reservado para una imagen del Río Potrero',
    href: '/lugares/rio-potrero',
  },
  {
    title: 'Yunca Suma',
    category: 'Naturaleza',
    description: 'Uno de los parajes con más oferta de alojamiento del circuito, con cabañas y complejos rodeados de vegetación de yungas. Buen punto de partida para las excursiones hacia los túneles y los senderos cercanos.',
    metadata: ['Libre'],
    alt: 'Espacio reservado para una imagen de Yunca Suma',
    href: '/lugares/yunka-suma',
  },
  {
    title: 'La Cruz',
    category: 'Trekking',
    difficulty: 'Media dificultad',
    description: 'La Cruz de Aconquija es un atractivo turístico de Catamarca, ideal para disfrutar de hermosos paisajes, respirar aire puro y apreciar la belleza de nuestras montañas.',
    metadata: ['2 a 6 hs'],
    alt: 'Espacio reservado para una imagen de trekking en Aconquija',
  },
  {
    title: '',
    category: 'Senderismo',
    difficulty: 'Baja dificultad',
    description: 'Caminatas suaves entre los parajes del circuito, ideales para hacer en familia o sin experiencia previa, con vistas al valle y al Río del Campo.',
    metadata: ['1 a 2 hs'],
    alt: 'Espacio reservado para una imagen de senderismo en Aconquija',
  },
  {
    title: 'Bosque De Alisos',
    category: 'Naturaleza',
    difficulty: 'Baja dificultad',
    description: 'Vegetación nativa de yungas, arroyos de montaña y una fauna variada como parte del paisaje que envuelve a todo el circuito. El microclima fresco de la zona la hace ideal para el descanso.',
    metadata: ['Libre'],
    image: bosqueImage,
    alt: 'Naturaleza de Aconquija',
    href: '/lugares/bosque-de-alisos',
  },
]

function CardContent({ card }) {
  return (
    <>
      <div className={`respira-card__image${card.image ? '' : ' respira-card__image--empty'}`}>
        {card.image ? <img src={card.image} alt={card.alt} loading="lazy" /> : <span className="respira-card__image-placeholder" aria-hidden="true" />}
      </div>
      <div className="respira-card__body">
        <div className="respira-card__top">
          <span className="respira-card__badge">{card.category}</span>
          {card.difficulty && <span className="respira-card__difficulty">{card.difficulty}</span>}
        </div>
        {card.title && <h2 className="respira-card__title">{card.title}</h2>}
        <p className="respira-card__description">{card.description}</p>
        <div className="respira-card__metadata">
          {card.metadata.map((item) => <span key={item}>{item}</span>)}
        </div>
      </div>
      {card.href && (
        <span className="respira-card__arrow" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M9 7h8v8" /></svg>
        </span>
      )}
    </>
  )
}

export default function RespiraVerdeGrid() {
  return (
    <>
      <main className="respira-main">
        <div className="container">
          <div className="respira-grid">
            {cards.map((card, index) => card.href ? (
              <Link className={`respira-card${card.featured ? ' respira-card--featured' : ''}`} to={card.href} key={`${card.title}-${index}`}>
                <CardContent card={card} />
              </Link>
            ) : (
              <article className="respira-card respira-card--inactive" key={`${card.title || 'senderismo'}-${index}`}>
                <CardContent card={card} />
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
