import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import YunkaSumaHero from '../../components/third-level/yunka-suma/YunkaSumaHero'
import YunkaSumaContent from '../../components/third-level/yunka-suma/YunkaSumaContent'
import YunkaSumaGallery from '../../components/third-level/yunka-suma/YunkaSumaGallery'
import YunkaSumaInfoCard from '../../components/third-level/yunka-suma/YunkaSumaInfoCard'
import '../../components/third-level/yunka-suma/YunkaSuma.css'

export default function YunkaSumaPage() {
  return (
    <>
      <Header />
      <YunkaSumaHero />
      <main className="lugar-body">
        <div className="container">
          <div className="lugar-layout">
            <div className="lugar-content">
              <YunkaSumaContent />
              <YunkaSumaGallery />
            </div>
            <aside className="lugar-sidebar">
              <YunkaSumaInfoCard />
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
