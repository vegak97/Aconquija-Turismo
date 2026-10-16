import heroImage from '../../../../../imagenes/ruinas_del_pucara/ruinas.webp'

const tags = [
  'Patrimonio Mundial UNESCO',
  'Arqueología Inca',
  'Monumento Histórico Nacional',
]

export default function PucaraHero() {
  return (
    <section className="lugar-hero pucara-hero">
      <div className="lugar-hero-img" style={{ backgroundImage: `url("${heroImage}")` }} />
      <div className="lugar-hero-content">
        <h1>Pucará de Aconquija</h1>
        <div className="lugar-tags">
          {tags.map(tag => <span className="lugar-tag" key={tag}>{tag}</span>)}
        </div>
      </div>
    </section>
  )
}
