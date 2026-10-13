import caballoImage from '../../../../imagenes/caballo.webp'

export default function AboutSection() {
  return (
<section className="cta" id="sobre">
          <div className="cta-bg" style={{ backgroundImage: `url("${caballoImage}")` }} />
          <div className="cta-content">
            <div className="eyebrow">Sobre Aconquija</div>
            <h2>Un pueblo, una sierra, un mismo ritmo.</h2>
            <p>Aconquija no se visita rápido. Es un lugar para quedarse unos días, caminar despacio y dejar que la montaña marque el paso. Te esperamos al pie de los Nevados.</p>
            <a href="#" className="btn-primary">Planeá tu visita</a>
          </div>
        </section>
  )
}
