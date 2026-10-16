import { Link } from 'react-router-dom'
import heroImage from '../../../../../imagenes/bosque_de_alisos/bosque_de_alisos.webp'

export default function RespiraVerdeHero() {
  return (
    <section className="respira-hero">
      <div className="respira-hero__background" style={{ backgroundImage: `url("${heroImage}")` }} aria-hidden="true" />
      <div className="respira-hero__content">
        <nav className="respira-breadcrumb" aria-label="Ruta de navegación">
          <Link to="/">Inicio</Link>
          <span aria-hidden="true">›</span>
          <span aria-current="page">Respira Verde</span>
        </nav>
        <p className="respira-eyebrow">Aconquija · Catamarca</p>
        <h1>Respira Verde</h1>
        <p className="respira-lead">Aconquija es naturaleza que se recorre y se siente. Sus senderos de montaña, cabalgatas, ríos, campos de azucenas y bosques de alisos ofrecen paisajes únicos y aventuras inolvidables. Cada rincón invita a descubrir la belleza de nuestra tierra y conectar con la naturaleza.</p>
      </div>
    </section>
  )
}
