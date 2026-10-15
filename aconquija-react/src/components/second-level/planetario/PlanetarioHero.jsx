import heroImage from '../../../../../imagenes/fondo_prueba.png'
import { Link } from 'react-router-dom'

const tags = ['Astroturismo', 'Observación de estrellas', 'Noches despejadas']

function MetaIcon({ type }) {
  if (type === 'time') return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
  if (type === 'landscape') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 17l4-8 4 4 4-6 4 4" /></svg>
  if (type === 'location') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
}

export default function PlanetarioHero() {
  return (
    <section className="lugar-hero">
      <div className="lugar-hero-img" style={{ backgroundImage: `url("${heroImage}")` }} />
      <div className="lugar-hero-content">
        <nav className="breadcrumb" aria-label="Ruta de navegación">
          <Link to="/">Inicio</Link><span>›</span>
          <Link to="/#explorar">Explorar</Link><span>›</span>
          <span>Turismo Astronómico</span>
        </nav>
        <div className="lugar-tags">
          {tags.map(tag => <span className="lugar-tag" key={tag}>{tag}</span>)}
        </div>
        <h1>Planetario Janaxpacha Huasi</h1>
        <div className="lugar-meta">
          <div className="meta-item"><MetaIcon type="time" />Menos de 30 min</div>
          <div className="meta-item"><MetaIcon type="landscape" />Apto para todo público</div>
          <div className="meta-item"><MetaIcon type="location" />Aconquija, Catamarca</div>
          <div className="meta-item"><MetaIcon type="people" />Desde 1 persona</div>
        </div>
      </div>
    </section>
  )
}
