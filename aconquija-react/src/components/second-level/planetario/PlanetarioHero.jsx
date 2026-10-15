import heroImage from '../../../../../imagenes/fondo_prueba.png'

const tags = ['Astroturismo', 'Observación de estrellas', 'Noches despejadas']

export default function PlanetarioHero() {
  return (
    <section className="lugar-hero planetario-hero">
      <div className="lugar-hero-img" style={{ backgroundImage: `url("${heroImage}")` }} />
      <div className="lugar-hero-content">
        <h1>Planetario Janaxpacha Huasi</h1>
        <div className="lugar-tags">
          {tags.map(tag => <span className="lugar-tag" key={tag}>{tag}</span>)}
        </div>
      </div>
    </section>
  )
}
