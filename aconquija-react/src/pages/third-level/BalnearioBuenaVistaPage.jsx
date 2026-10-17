import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import BalnearioBuenaVistaHero from '../../components/third-level/balneario-buena-vista/BalnearioBuenaVistaHero'
import BalnearioBuenaVistaContent from '../../components/third-level/balneario-buena-vista/BalnearioBuenaVistaContent'
import BalnearioBuenaVistaGallery from '../../components/third-level/balneario-buena-vista/BalnearioBuenaVistaGallery'
import BalnearioBuenaVistaInfoCard from '../../components/third-level/balneario-buena-vista/BalnearioBuenaVistaInfoCard'
import '../../components/third-level/balneario-buena-vista/BalnearioBuenaVista.css'

export default function BalnearioBuenaVistaPage() {
  return (
    <>
      <Header />
      <BalnearioBuenaVistaHero />
      <main className="lugar-body">
        <div className="container">
          <div className="lugar-layout">
            <div className="lugar-content">
              <BalnearioBuenaVistaContent />
              <BalnearioBuenaVistaGallery />
            </div>
            <aside className="lugar-sidebar">
              <BalnearioBuenaVistaInfoCard />
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
