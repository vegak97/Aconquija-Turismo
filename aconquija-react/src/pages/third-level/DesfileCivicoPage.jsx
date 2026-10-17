import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import DesfileCivicoHero from '../../components/third-level/desfile-civico/DesfileCivicoHero'
import DesfileCivicoContent from '../../components/third-level/desfile-civico/DesfileCivicoContent'
import DesfileCivicoGallery from '../../components/third-level/desfile-civico/DesfileCivicoGallery'
import DesfileCivicoInfoCard from '../../components/third-level/desfile-civico/DesfileCivicoInfoCard'
import '../../components/third-level/desfile-civico/DesfileCivico.css'

export default function DesfileCivicoPage() {
  return (
    <>
      <Header />
      <DesfileCivicoHero />
      <main className="lugar-body">
        <div className="container">
          <div className="lugar-layout">
            <div className="lugar-content">
              <DesfileCivicoContent />
              <DesfileCivicoGallery />
            </div>
            <aside className="lugar-sidebar">
              <DesfileCivicoInfoCard />
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
