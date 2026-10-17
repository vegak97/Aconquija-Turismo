import { Link } from 'react-router-dom'
import heroImage from '../../../../../imagenes/Cultiva_tradiciones/desfiles.webp'

const tags = ['Agenda de verano', 'Comunidad', 'Enero en Aconquija']

const metadata = [
  {
    label: 'Un día, dentro de la agenda de verano de enero',
    icon: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
  },
  {
    label: 'Entrada libre y gratuita',
    icon: <path d="M3 17l4-8 4 4 4-6 4 4" />,
  },
  {
    label: 'Complejo Municipal, El Lindero, Aconquija',
    icon: <><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>,
  },
  {
    label: 'Apto para toda la familia',
    icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
  },
]

export default function DesfileCivicoHero() {
  return (
    <section className="lugar-hero desfile-civico-hero">
      <div className="lugar-hero-img desfile-civico-hero-img" style={{ backgroundImage: `url("${heroImage}")` }} />
      <div className="lugar-hero-content">
        <nav className="breadcrumb" aria-label="Ruta de navegación">
          <Link to="/">Inicio</Link>
          <span aria-hidden="true">›</span>
          <Link to="/#explorar">Explorar</Link>
          <span aria-hidden="true">›</span>
          <span aria-current="page">Agenda y Eventos</span>
        </nav>
        <div className="lugar-tags">
          {tags.map(tag => <span className="lugar-tag" key={tag}>{tag}</span>)}
        </div>
        <h1>Desfile Cívico Escolar</h1>
        <div className="lugar-meta">
          {metadata.map(item => (
            <div className="meta-item" key={item.label}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                {item.icon}
              </svg>
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
