import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import RioPotreroHero from '../../components/third-level/rio-potrero/RioPotreroHero'
import RioPotreroContent from '../../components/third-level/rio-potrero/RioPotreroContent'
import RioPotreroGallery from '../../components/third-level/rio-potrero/RioPotreroGallery'
import RioPotreroInfoCard from '../../components/third-level/rio-potrero/RioPotreroInfoCard'
import '../../components/third-level/rio-potrero/RioPotrero.css'

export default function RioPotreroPage() {
  return (
    <>
      <Header />
      <RioPotreroHero />
      <main className="lugar-body">
        <div className="container">
          <div className="lugar-layout">
            <div className="lugar-content">
              <RioPotreroContent />
              <RioPotreroGallery />
            </div>
            <aside className="lugar-sidebar">
              <RioPotreroInfoCard />
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
