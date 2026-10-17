import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import FestivalMayorHero from '../../components/third-level/festival-mayor/FestivalMayorHero'
import FestivalMayorContent from '../../components/third-level/festival-mayor/FestivalMayorContent'
import FestivalMayorGallery from '../../components/third-level/festival-mayor/FestivalMayorGallery'
import FestivalMayorInfoCard from '../../components/third-level/festival-mayor/FestivalMayorInfoCard'
import '../../components/third-level/festival-mayor/FestivalMayor.css'

export default function FestivalMayorPage() {
  return (
    <>
      <Header />
      <FestivalMayorHero />
      <main className="lugar-body">
        <div className="container">
          <div className="lugar-layout">
            <div className="lugar-content">
              <FestivalMayorContent />
              <FestivalMayorGallery />
            </div>
            <aside className="lugar-sidebar">
              <FestivalMayorInfoCard />
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
