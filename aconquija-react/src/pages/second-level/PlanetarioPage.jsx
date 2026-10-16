import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import PlanetarioHero from '../../components/second-level/planetario/PlanetarioHero'
import PlanetarioContent from '../../components/second-level/planetario/PlanetarioContent'
import PlanetarioGallery from '../../components/second-level/planetario/PlanetarioGallery'
import PlanetarioInfoCard from '../../components/second-level/planetario/PlanetarioInfoCard'

export default function PlanetarioPage() {
  return (
    <>
      <Header />
      <PlanetarioHero />
      <main className="lugar-body">
        <div className="container">
          <div className="lugar-layout">
            <div className="lugar-content">
              <PlanetarioContent />
              <PlanetarioGallery />
            </div>
            <aside className="lugar-sidebar">
              <PlanetarioInfoCard />
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
