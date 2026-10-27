import { Link } from 'react-router-dom'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import laFeHeroImage from '../../../imagenes/camino_la_fe.webp'
import cristoRedentorImage from '../../../imagenes/cristo_redentor/cristo_redentor.webp'
import '../../styles/circuito-la-fe.css'

const churches = [
  {
    id: 'alumbrera',
    locality: 'Alumbrera',
    title: 'Iglesia Nuestra Señora del Rosario',
    description:
      'Una capilla vinculada a la historia de Alumbrera, con antecedentes que se remontan a 1883 y un importante reconocimiento patrimonial.',
    path: '/lugares/iglesia-nuestra-senora-del-rosario',
  },
  {
    id: 'charquiadero',
    locality: 'El Charquiadero',
    title: 'Capilla del Señor',
    description:
      'Una capilla levantada con la participación de vecinos, el trabajo artesanal y materiales propios de la construcción tradicional.',
    path: '/lugares/capilla-del-senor',
  },
  {
    id: 'cristo-redentor',
    locality: 'El Lindero',
    title: 'Cristo Redentor de Aconquija',
    description:
      'Un sendero corto conduce hasta el mirador, con vistas a los Nevados del Aconquija y al valle.',
    path: '/lugares/cristo-redentor',
    image: cristoRedentorImage,
    imageAlt: 'Cristo Redentor en el mirador de El Lindero',
  },
]

function CardImage({ locality, image, imageAlt }) {
  if (image) {
    return <img className="la-fe-card__image" src={image} alt={imageAlt} />
  }

  return (
    <div
      className="la-fe-card__image-placeholder"
      role="img"
      aria-label={`Espacio reservado para una fotografía de la iglesia de ${locality}`}
    >
      <span className="la-fe-card__placeholder-mark" aria-hidden="true">
        <span />
        <span />
      </span>
      <span className="la-fe-card__placeholder-label">Fotografía de la iglesia</span>
    </div>
  )
}

export default function CircuitoLaFePage() {
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
          <p className="la-fe-hero__eyebrow">Aconquija · Circuito de la Fe</p>
          <h1>Dos iglesias, dos historias</h1>
        </div>
      </section>

      <main className="circuito-la-fe-page">
        <header className="la-fe-heading">
          <p className="la-fe-heading__eyebrow">Patrimonio y memoria comunitaria</p>
          <p className="la-fe-heading__description">
            Conocé las historias de las comunidades de Alumbrera y El Charquiadero a través de sus iglesias.
            Seleccioná una tarjeta para conocer más.
          </p>
          <span className="la-fe-heading__rule" aria-hidden="true" />
        </header>

        <section className="la-fe-cards" aria-label="Iglesias del Circuito de la Fe">
          {churches.map((church, index) => (
            <Link className="la-fe-card-link" to={church.path} key={church.id}>
              <article className={`la-fe-card la-fe-card--${church.id}`}>
                <CardImage locality={church.locality} image={church.image} imageAlt={church.imageAlt} />
                <div className="la-fe-card__content">
                  <p className="la-fe-card__eyebrow">
                    <span>0{index + 1}</span>
                    {church.locality}
                  </p>
                  <h2>{church.title}</h2>
                  <p className="la-fe-card__introduction">{church.description}</p>
                  <span className="la-fe-card__cta">
                    Conocer su historia <span aria-hidden="true">↗</span>
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </section>
        <p className="la-fe-source">
          Información basada en el cuadernillo de estudio y práctica para guías «Circuito de la Fe»,
          edición del 14 de octubre de 2026.
        </p>
      </main>
      <Footer />
    </>
  )
}
