import { Link } from 'react-router-dom'
import heroImage from '../../../../../imagenes/ruinas_del_pucara/ruinas.webp'

const tags = [
  'Patrimonio Mundial UNESCO',
  'Arqueología Inca',
  'Monumento Histórico Nacional',
]

function MetaIcon({ type }) {
  if (type === 'time') return <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>
  if (type === 'difficulty') return <path d="M3 17l4-8 4 4 4-6 4 4" />
  if (type === 'location') return <><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>
  return <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>
}

function MetaItem({ type, children }) {
  return (
    <div className="meta-item">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <MetaIcon type={type} />
      </svg>
      {children}
    </div>
  )
}

export default function PucaraHero() {
  return (
    <section className="lugar-hero pucara-hero">
      <div className="lugar-hero-img" style={{ backgroundImage: `url("${heroImage}")` }} />
      <div className="lugar-hero-content">
        <nav className="breadcrumb" aria-label="Ruta de navegación">
          <Link to="/">Inicio</Link>
          <span>›</span>
          <Link to="/#explorar">Explorar</Link>
          <span>›</span>
          <span>Sitio Arqueológico</span>
        </nav>
        <div className="lugar-tags">
          {tags.map(tag => <span className="lugar-tag" key={tag}>{tag}</span>)}
        </div>
        <h1>Pucará de Aconquija</h1>
        <div className="lugar-meta">
          <MetaItem type="time">Medio día (4 a 6 h)</MetaItem>
          <MetaItem type="difficulty">Dificultad media-alta</MetaItem>
          <MetaItem type="location">Aconquija, Catamarca</MetaItem>
          <MetaItem type="visitors">Ingreso registrado</MetaItem>
        </div>
      </div>
    </section>
  )
}
