import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import RespiraVerdeHero from '../../components/second-level/respira-verde/RespiraVerdeHero'
import RespiraVerdeGrid from '../../components/second-level/respira-verde/RespiraVerdeGrid'
import '../../components/second-level/respira-verde/RespiraVerde.css'
import caballoImage from '../../../../imagenes/caballo.webp'

export default function RespiraVerdePage() {
  return (
    <>
      <Header />
      <RespiraVerdeHero />
      <RespiraVerdeGrid />
      <section className="respira-cta">
        <div className="respira-cta__background" style={{ backgroundImage: `linear-gradient(120deg, rgba(22,27,34,.94), rgba(35,43,56,.82)), url("${caballoImage}")` }} aria-hidden="true" />
        <div className="respira-cta__content">
          <p className="respira-eyebrow">¿Necesitás ayuda?</p>
          <h2>Armamos el recorrido con vos</h2>
          <p>Consultá con nuestros guías locales para planificar la mejor visita según tu tiempo y experiencia.</p>
          <a className="respira-cta__button" href="https://wa.me/5493834966977" target="_blank" rel="noreferrer">
            Consultar por WhatsApp
          </a>
        </div>
      </section>
      <Footer />
    </>
  )
}
