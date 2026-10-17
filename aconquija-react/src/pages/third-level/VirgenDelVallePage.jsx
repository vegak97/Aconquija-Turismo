import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import VirgenDelValleHero from '../../components/third-level/virgen-del-valle/VirgenDelValleHero'
import VirgenDelValleContent from '../../components/third-level/virgen-del-valle/VirgenDelValleContent'
import VirgenDelValleGallery from '../../components/third-level/virgen-del-valle/VirgenDelValleGallery'
import VirgenDelValleInfoCard from '../../components/third-level/virgen-del-valle/VirgenDelValleInfoCard'
import '../../components/third-level/virgen-del-valle/VirgenDelValle.css'

export default function VirgenDelVallePage() {
  return (
    <>
      <Header />
      <VirgenDelValleHero />
      <main className="lugar-body">
        <div className="container">
          <div className="lugar-layout">
            <div className="lugar-content">
              <VirgenDelValleContent />
              <VirgenDelValleGallery />
            </div>
            <aside className="lugar-sidebar">
              <VirgenDelValleInfoCard />
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
