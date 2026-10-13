import heroBackgroundImage from '../../../../imagenes/fondo(1).webp'

export default function HeroSection() {
  return (
    <section className="hero" aria-label="Presentación de Aconquija">
      <div className="hero-bg" style={{ backgroundImage: `url("${heroBackgroundImage}")` }} />
      <div className="hero-content">
        <h1>Aconquija</h1>
        <div className="hero-sub">Naturaleza que inspira</div>
        <div className="hero-divider" />
      </div>
      <div className="scroll-cue">Deslizá para explorar<div className="chev" /></div>
    </section>
  )
}
