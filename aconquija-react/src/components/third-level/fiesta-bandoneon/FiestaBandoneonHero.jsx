import { Link } from 'react-router-dom'

const tags = ['Folclore', 'Música en vivo', 'Verano en Aconquija']

const metadata = [
  {
    label: 'Finca La Victoria, Cóndor Huasi',
    icon: <><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>,
  },
  {
    label: 'Apto para toda la familia',
    icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
  },
]

export default function FiestaBandoneonHero() {
  return (
    <section className="lugar-hero fiesta-bandoneon-hero">
      <div className="lugar-hero-img fiesta-bandoneon-hero-img" aria-hidden="true" />
      <div className="lugar-hero-content">
        <nav className="breadcrumb" aria-label="Ruta de navegación">
          <Link to="/">Inicio</Link>
          <span aria-hidden="true">›</span>
          <Link to="/#explorar">Explorar</Link>
          <span aria-hidden="true">›</span>
          <span aria-current="page">Fiestas y Festivales</span>
        </nav>

        <div className="lugar-tags">
          {tags.map(tag => <span className="lugar-tag" key={tag}>{tag}</span>)}
        </div>

        <h1>Festival Provincial del Bandoneón</h1>

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
