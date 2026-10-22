import { Link } from 'react-router-dom'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import laFeHeroImage from '../../../imagenes/camino_la_fe.webp'
import '../../styles/circuito-la-fe.css'

const churchDetails = {
  alumbrera: {
    locality: 'Alumbrera',
    title: 'Iglesia Nuestra Señora del Rosario',
    introduction:
      'Los antecedentes reunidos en el cuadernillo sitúan a Alumbrera, junto con El Suncho, entre los principales núcleos de población de Aconquija hacia fines del siglo XIX.',
    sections: [
      {
        title: 'Origen de la capilla',
        text: 'El terreno fue donado el 12 de agosto de 1883 por Vicente Gutiérrez y María Natividad Perea. La capilla quedó terminada en 1884.',
      },
      {
        title: 'Reconocimiento patrimonial',
        text: 'En 2024 fue declarada Monumento Histórico de la Provincia de Catamarca mediante la Ley N.º 5867. La publicación en el Digesto provincial figura con fecha 8 de noviembre de 2024.',
      },
    ],
  },
  charquiadero: {
    locality: 'El Charquiadero',
    title: 'Capilla del Señor',
    introduction:
      'La historia de esta capilla está ligada a la iniciativa de Marta Forté, la colaboración vecinal y los aportes de personas que participaron en la construcción y en su ornamentación.',
    sections: [
      {
        title: 'Construcción comunitaria',
        text: 'Hacia 1979, Marta Forté convocó a los vecinos a partir de un pedido de su tía Dora Córdoba Navarro y donó el terreno. Las familias colaboraron con adobes, materiales, trabajo y actividades para reunir fondos; también participaron veraneantes y la Municipalidad de Aconquija.',
      },
      {
        title: 'Materiales y detalles artesanales',
        text: 'Se utilizaron adobe, barro y piedra; el piso es de lajas negras y la cubierta combina cañas con maderas de aliso y quebracho colorado. Marta Forté modeló el Cristo central y pintó los cuadros del Vía Crucis, tallados por Clemente Miranda. Julio Sáez realizó la campana.',
      },
      {
        title: 'Celebración y restauración',
        text: 'La primera celebración recordada por la comunidad fue la Misa de Gallo del 24 de diciembre de 1985. En 2015, una restauración impulsada por los vecinos incorporó trabajos en piedra tallados y donados por Ángel Espinosa.',
      },
    ],
  },
}

export default function CircuitoLaFeChurchPage({ churchKey }) {
  const church = churchDetails[churchKey]

  if (!church) return null

  return (
    <>
      <Header />
      <section className="lugar-hero la-fe-hero">
        <div
          className="lugar-hero-img"
          style={{ backgroundImage: `url("${laFeHeroImage}")` }}
          aria-hidden="true"
        />
        <div className="lugar-hero-content">
          <p className="la-fe-hero__eyebrow">Circuito de la Fe · {church.locality}</p>
          <h1>{church.title}</h1>
        </div>
      </section>
      <main className="circuito-la-fe-page la-fe-detail-page">
        <div className="la-fe-detail-content">
          <Link className="la-fe-back-link" to="/circuitos/la-fe">← Volver al Circuito de la Fe</Link>
          <p className="la-fe-heading__eyebrow">{church.locality}</p>
          <p className="la-fe-detail-introduction">{church.introduction}</p>
          <div className="la-fe-detail-sections">
            {church.sections.map((section) => (
              <section className="la-fe-detail-section" key={section.title}>
                <h2>{section.title}</h2>
                <p>{section.text}</p>
              </section>
            ))}
          </div>
          <div className="la-fe-detail-photo-placeholder">
            Fotografía de la iglesia pendiente de incorporar
          </div>
          <p className="la-fe-source">
            Información basada en el cuadernillo de estudio y práctica para guías «Circuito de la Fe»,
            edición del 14 de octubre de 2026.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
