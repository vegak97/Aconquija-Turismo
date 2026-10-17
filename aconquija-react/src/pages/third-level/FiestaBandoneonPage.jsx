import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import FiestaBandoneonHero from '../../components/third-level/fiesta-bandoneon/FiestaBandoneonHero'
import FiestaBandoneonContent from '../../components/third-level/fiesta-bandoneon/FiestaBandoneonContent'
import FiestaBandoneonGallery from '../../components/third-level/fiesta-bandoneon/FiestaBandoneonGallery'
import FiestaBandoneonInfoCard from '../../components/third-level/fiesta-bandoneon/FiestaBandoneonInfoCard'
import '../../components/third-level/fiesta-bandoneon/FiestaBandoneon.css'

export default function FiestaBandoneonPage() {
  return (
    <>
      <Header />
      <FiestaBandoneonHero />
      <main className="lugar-body">
        <div className="container">
          <div className="lugar-layout">
            <div className="lugar-content">
              <FiestaBandoneonContent />
              <FiestaBandoneonGallery />
            </div>
            <aside className="lugar-sidebar">
              <FiestaBandoneonInfoCard />
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
