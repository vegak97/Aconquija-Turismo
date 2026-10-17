import { Link } from 'react-router-dom'
import heroImage from '../../../../../imagenes/bosque_de_alisos/bosque_de_alisos_2.webp'

const tags = [
  'Bosque de Yungas',
  'Flora y Fauna',
  'Circuito Respira Verde',
]

const metadata = [
  {
    label: '2 a 3 horas',
    icon: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
  },
  {
    label: 'Dificultad baja',
    icon: <path d="M3 17l4-8 4 4 4-6 4 4" />,
  },
  {
    label: 'Yunka Suma, Aconquija',
    icon: <><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>,
  },
  {
    label: 'Senderismo y observación de flora',
    icon: <><path d="M12 22V12" /><path d="M12 16c-5 0-8-3-8-8 5 0 8 3 8 8Z" /><path d="M12 13c0-5 3-8 8-8 0 5-3 8-8 8Z" /></>,
  },
]

export default function BosqueDeAlisosHero() {
  return (
    <section className="lugar-hero bosque-alisos-hero">
      <div className="lugar-hero-img bosque-alisos-hero-img" style={{ backgroundImage: `url("${heroImage}")` }} />
      <div className="lugar-hero-content">
        <nav className="breadcrumb" aria-label="Ruta de navegación">
          <Link to="/">Inicio</Link>
          <span aria-hidden="true">›</span>
          <Link to="/#explorar">Explorar</Link>
          <span aria-hidden="true">›</span>
          <span aria-current="page">Patrimonio Natural</span>
        </nav>

        <div className="lugar-tags">
          {tags.map(tag => <span className="lugar-tag" key={tag}>{tag}</span>)}
        </div>

        <h1>Bosque de Alisos</h1>

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
