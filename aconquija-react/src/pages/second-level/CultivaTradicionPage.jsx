import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import CultivaTradicionHero from '../../components/second-level/cultiva-tradicion/CultivaTradicionHero'
import CultivaTradicionGrid from '../../components/second-level/cultiva-tradicion/CultivaTradicionGrid'
import '../../components/second-level/cultiva-tradicion/CultivaTradicion.css'

export default function CultivaTradicionPage() {
  return (
    <>
      <Header />
      <CultivaTradicionHero />
      <CultivaTradicionGrid />
      <section className="cultiva-cta">
        <div className="cultiva-cta__background" aria-hidden="true" />
        <div className="cultiva-cta__content">
          <p className="cultiva-eyebrow">¿Necesitás ayuda?</p>
          <h2>Armamos el recorrido con vos</h2>
          <p>Consultá con nuestros guías locales para planificar la mejor visita según tu tiempo y experiencia.</p>
          <a className="cultiva-cta__button" href="https://wa.me/5493834966977" target="_blank" rel="noreferrer">
            Consultar por WhatsApp
          </a>
        </div>
      </section>
      <Footer />
    </>
  )
}
