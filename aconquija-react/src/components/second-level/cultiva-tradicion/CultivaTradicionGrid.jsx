import { Link } from 'react-router-dom'
import bandoneonImage from '../../../../../imagenes/Cultiva_tradiciones/images.jpg'
import festivalImage from '../../../../../imagenes/Cultiva_tradiciones/720x405_121220_20250123110656.jpg'
import tradicionImage from '../../../../../imagenes/Cultiva_tradiciones/IMG_7775.webp'
import fogonImage from '../../../../../imagenes/Cultiva_tradiciones/fogon.webp'
import desfileImage from '../../../../../imagenes/Cultiva_tradiciones/desfiles.webp'

const cards = [
  { title: 'El Bandoneón', category: 'Festival', description: '🎶 ¡Dejá que el sonido del bandoneón te emocione! Viví una noche llena de música, tradición y cultura en el Festival Provincial del Bandoneón de Aconquija. ¡Te esperamos!', metadata: ['Día completo'], image: bandoneonImage, alt: 'Festival Provincial del Bandoneón de Aconquija', href: '/eventos/fiesta-del-bandoneon', featured: true },
  { title: 'Festival Mayor de Aconquija', category: 'Festival', description: 'El Festival Mayor de Aconquija te espera con noches llenas de música, cultura y tradición. Vení a disfrutar de una de las celebraciones más importantes de nuestra tierra.', metadata: ['Nocturno'], image: festivalImage, alt: 'Festival Mayor de Aconquija', href: '/eventos/festival-mayor' },
  { title: 'Día de la Tradición', category: 'Festival', description: 'Viví la esencia de Aconquija en el Festival del Día de la Tradición, una celebración que une cultura, música y costumbres en un entorno único.', metadata: ['Día completo'], image: tradicionImage, alt: 'Celebración del Día de la Tradición' },
  { title: 'El Fogón', category: 'Peña', description: 'Descubrí la magia de los fogones de Aconquija, donde el calor del fuego y el folclore hacen de cada encuentro una experiencia única.', metadata: ['Nocturno'], image: fogonImage, alt: 'El Fogón de Aconquija' },
  { title: 'Desfiles de Aconquija', category: 'Cultura', description: 'Viví el desfile de Aconquija, una celebración que llena las calles de color, tradición y el orgullo de nuestra comunidad.', metadata: ['Día completo'], image: desfileImage, alt: 'Desfiles de Aconquija', href: '/eventos/desfile-civico-escolar' },
  { title: 'Quebrada del Arenal', category: 'Trekking', difficulty: 'Media dificultad', description: 'Formaciones rocosas talladas por siglos de viento y agua entre paredes de más de 80 metros.', metadata: ['4 hs'], alt: 'Espacio reservado para una imagen de la Quebrada del Arenal' },
  { title: 'Cocina de la Sierra', category: 'Gastronomía', description: 'Cabrito de monte, locro de altura y productos de huerta, preparados por los propios vecinos.', metadata: ['Mediodía / noche'], alt: 'Espacio reservado para una imagen de gastronomía regional' },
  { title: 'Bosque de Altura', category: 'Naturaleza', difficulty: 'Baja dificultad', description: 'Senderos entre vegetación nativa de yungas, arroyos de montaña y aves endémicas de la sierra.', metadata: ['2 hs'], alt: 'Espacio reservado para una imagen del bosque de altura' },
  { title: 'Artesanías en Telar', category: 'Cultura', description: 'Tejidos en telar criollo, cerámica y productos regionales hechos a mano por artesanos del pueblo.', metadata: ['Libre'], alt: 'Espacio reservado para una imagen de artesanías en telar' },
  { title: 'Laguna del Viento', category: 'Trekking', difficulty: 'Alta dificultad', description: 'Laguna de origen glaciario a 4.200 metros, con el reflejo de los picos nevados en el agua.', metadata: ['6 hs', '4.200 m'], alt: 'Espacio reservado para una imagen de la Laguna del Viento' },
  { title: 'Filo del Amanecer', category: 'Aventura', description: 'El punto donde el sol asoma primero. Campamento nocturno y amanecer en el filo de la cumbre.', metadata: ['Overnight'], alt: 'Espacio reservado para una imagen del Filo del Amanecer' },
  { title: 'Mirador del Aconquija', category: 'Naturaleza', description: 'Vista panorámica de 360° sobre el valle y los nevados. El mejor punto para fotografiar la sierra.', metadata: ['1 hs'], alt: 'Espacio reservado para una imagen del Mirador del Aconquija' },
]

function CardContent({ card }) {
  return (
    <>
      <div className={`cultiva-card__image${card.image ? '' : ' cultiva-card__image--empty'}`}>
        {card.image ? <img src={card.image} alt={card.alt} loading="lazy" /> : <span className="cultiva-card__image-placeholder" aria-hidden="true" />}
      </div>
      <div className="cultiva-card__body">
        <div className="cultiva-card__top">
          <span className="cultiva-card__badge">{card.category}</span>
          {card.difficulty && <span className="cultiva-card__difficulty">{card.difficulty}</span>}
        </div>
        <h2 className="cultiva-card__title">{card.title}</h2>
        <p className="cultiva-card__description">{card.description}</p>
        <div className="cultiva-card__metadata">{card.metadata.map(item => <span key={item}>{item}</span>)}</div>
      </div>
      {card.href && <span className="cultiva-card__arrow" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M9 7h8v8" /></svg></span>}
    </>
  )
}

export default function CultivaTradicionGrid() {
  return (
    <main className="cultiva-main">
      <div className="container">
        <div className="cultiva-grid">
          {cards.map(card => card.href ? (
            <Link className={`cultiva-card${card.featured ? ' cultiva-card--featured' : ''}`} to={card.href} key={card.title}>
              <CardContent card={card} />
            </Link>
          ) : (
            <article className={`cultiva-card cultiva-card--inactive${card.featured ? ' cultiva-card--featured' : ''}`} key={card.title}>
              <CardContent card={card} />
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
