import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import TunelesRioPotreroHero from '../../components/third-level/tuneles-rio-potrero/TunelesRioPotreroHero'
import TunelesRioPotreroContent from '../../components/third-level/tuneles-rio-potrero/TunelesRioPotreroContent'
import TunelesRioPotreroGallery from '../../components/third-level/tuneles-rio-potrero/TunelesRioPotreroGallery'
import TunelesRioPotreroInfoCard from '../../components/third-level/tuneles-rio-potrero/TunelesRioPotreroInfoCard'
import '../../components/third-level/tuneles-rio-potrero/TunelesRioPotrero.css'

export default function TunelesRioPotreroPage() {
  return (
    <>
      <Header />
      <TunelesRioPotreroHero />
      <main className="lugar-body">
        <div className="container">
          <div className="lugar-layout">
            <div className="lugar-content">
              <TunelesRioPotreroContent />
              <TunelesRioPotreroGallery />
            </div>
            <aside className="lugar-sidebar">
              <TunelesRioPotreroInfoCard />
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
