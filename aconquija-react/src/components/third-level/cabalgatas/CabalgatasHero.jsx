import { Link } from 'react-router-dom'
import cabalgataImage from '../../../../imagenes/cabalgata.webp'

const tags = ['Aventura', 'Recorrido a caballo', 'Circuito Respira Verde']

const metadata = [
  { label: '2 a 4 horas', icon: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></> },
  { label: 'Con baqueanos locales', icon: <><circle cx="12" cy="8" r="4" /><path d="M4 21v-2a8 8 0 0 1 16 0v2" /></> },
  { label: 'Aconquija, Catamarca', icon: <><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></> },
]

export default function CabalgatasHero() {
  return (
    <section className="lugar-hero cabalgatas-hero">
      <div className="lugar-hero-img cabalgatas-hero-img" style={{ backgroundImage: `url("${cabalgataImage}")` }} aria-hidden="true" />
      <div className="lugar-hero-content">
        <nav className="breadcrumb" aria-label="Ruta de navegación">
          <Link to="/">Inicio</Link>
          <span aria-hidden="true">›</span>
          <Link to="/circuitos/respira-verde">Respira Verde</Link>
          <span aria-hidden="true">›</span>
          <span aria-current="page">Cabalgatas</span>
        </nav>
        <div className="lugar-tags">
          {tags.map(tag => <span className="lugar-tag" key={tag}>{tag}</span>)}
        </div>
        <h1>Cabalgatas en Aconquija</h1>
        <div className="lugar-meta">
          {metadata.map(item => (
            <div className="meta-item" key={item.label}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">{item.icon}</svg>
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
