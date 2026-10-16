import { useEffect } from 'react'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import PucaraHero from '../../components/second-level/pucara/PucaraHero'
import PucaraContent from '../../components/second-level/pucara/PucaraContent'
import PucaraGallery from '../../components/second-level/pucara/PucaraGallery'
import PucaraInfoCard from '../../components/second-level/pucara/PucaraInfoCard'

export default function PucaraPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  return (
    <>
      <Header />
      <PucaraHero />
      <main className="lugar-body">
        <div className="container">
          <div className="lugar-layout">
            <div className="lugar-content">
              <PucaraContent />
              <PucaraGallery />
            </div>
            <aside className="lugar-sidebar">
              <PucaraInfoCard />
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
