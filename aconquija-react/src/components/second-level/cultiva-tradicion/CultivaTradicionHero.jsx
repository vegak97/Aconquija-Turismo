import { Link } from 'react-router-dom'
import heroImage from '../../../../imagenes/Cultiva_tradiciones/fondo.webp'

export default function CultivaTradicionHero() {
  return (
    <section className="cultiva-hero">
      <div className="cultiva-hero__background" style={{ backgroundImage: `url("${heroImage}")` }} aria-hidden="true" />
      <div className="cultiva-hero__content">
        <nav className="cultiva-breadcrumb" aria-label="Ruta de navegación">
          <Link to="/">Inicio</Link>
          <span aria-hidden="true">›</span>
          <span aria-current="page">Cultiva Tradición</span>
        </nav>
        <p className="cultiva-eyebrow">Aconquija · Catamarca</p>
        <h1>Cultiva Tradición</h1>
        <p className="cultiva-lead">Un recorrido turístico donde la naturaleza, las costumbres y el trabajo de nuestra gente se unen para ofrecerte una experiencia auténtica. ¡Viví Aconquija de una manera diferente!.</p>
      </div>
    </section>
  )
}
