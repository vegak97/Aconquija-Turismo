import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import CristoRedentorHero from '../../components/third-level/cristo-redentor/CristoRedentorHero'
import CristoRedentorContent from '../../components/third-level/cristo-redentor/CristoRedentorContent'
import CristoRedentorGallery from '../../components/third-level/cristo-redentor/CristoRedentorGallery'
import CristoRedentorInfoCard from '../../components/third-level/cristo-redentor/CristoRedentorInfoCard'
import '../../components/third-level/cristo-redentor/CristoRedentor.css'

export default function CristoRedentorPage() {
  return (
    <>
      <Header />
      <CristoRedentorHero />
      <main className="lugar-body">
        <div className="container">
          <div className="lugar-layout">
            <div className="lugar-content">
              <CristoRedentorContent />
              <CristoRedentorGallery />
            </div>
            <aside className="lugar-sidebar">
              <CristoRedentorInfoCard />
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
