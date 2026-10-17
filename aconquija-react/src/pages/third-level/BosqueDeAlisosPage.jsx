import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import BosqueDeAlisosHero from '../../components/third-level/bosque-de-alisos/BosqueDeAlisosHero'
import BosqueDeAlisosContent from '../../components/third-level/bosque-de-alisos/BosqueDeAlisosContent'
import BosqueDeAlisosGallery from '../../components/third-level/bosque-de-alisos/BosqueDeAlisosGallery'
import BosqueDeAlisosInfoCard from '../../components/third-level/bosque-de-alisos/BosqueDeAlisosInfoCard'
import '../../components/third-level/bosque-de-alisos/BosqueDeAlisos.css'

export default function BosqueDeAlisosPage() {
  return (
    <>
      <Header />
      <BosqueDeAlisosHero />
      <main className="lugar-body">
        <div className="container">
          <div className="lugar-layout">
            <div className="lugar-content">
              <BosqueDeAlisosContent />
              <BosqueDeAlisosGallery />
            </div>
            <aside className="lugar-sidebar">
              <BosqueDeAlisosInfoCard />
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
