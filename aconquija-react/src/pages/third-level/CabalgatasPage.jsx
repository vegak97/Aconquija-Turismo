import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import CabalgatasHero from '../../components/third-level/cabalgatas/CabalgatasHero'
import CabalgatasContent from '../../components/third-level/cabalgatas/CabalgatasContent'
import CabalgatasGallery from '../../components/third-level/cabalgatas/CabalgatasGallery'
import CabalgatasInfoCard from '../../components/third-level/cabalgatas/CabalgatasInfoCard'
import '../../components/third-level/cabalgatas/Cabalgatas.css'

export default function CabalgatasPage() {
  return (
    <>
      <Header />
      <CabalgatasHero />
      <main className="lugar-body">
        <div className="container">
          <div className="lugar-layout">
            <div className="lugar-content">
              <CabalgatasContent />
              <CabalgatasGallery />
            </div>
            <aside className="lugar-sidebar">
              <CabalgatasInfoCard />
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
