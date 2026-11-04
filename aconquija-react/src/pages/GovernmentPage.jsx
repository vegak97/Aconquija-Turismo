import { Link } from 'react-router-dom'
import '../styles/portal.css'

function GovernmentPage() {
  return (
    <main className="portal-page portal-page--government">
      <div className="portal-orb portal-orb--one" aria-hidden="true" />
      <div className="portal-orb portal-orb--two" aria-hidden="true" />

      <header className="portal-header">
        <Link to="/" className="portal-wordmark" aria-label="Volver al portal institucional">
          <span className="portal-wordmark__name">ACONQUIJA</span>
          <span className="portal-wordmark__caption">PORTAL INSTITUCIONAL</span>
        </Link>
      </header>

      <section className="government-message" aria-labelledby="government-title">
        <div className="government-message__symbol" aria-hidden="true">
          <svg viewBox="0 0 48 48" fill="none">
            <path d="M5 18h38L24 7 5 18Z" />
            <path d="M9 20v17m10-17v17m10-17v17m10-17v17M5 41h38" />
          </svg>
        </div>
        <span className="portal-eyebrow">ACONQUIJA · CATAMARCA</span>
        <h1 id="government-title">Gobierno</h1>
        <p>Estamos preparando este espacio para acercarte información y contenidos institucionales del municipio.</p>
        <span className="government-status">Sección en desarrollo</span>
        <Link to="/" className="government-back">Volver al portal <span aria-hidden="true">→</span></Link>
      </section>

      <footer className="portal-footer">
        <span>ACONQUIJA · CATAMARCA · ARGENTINA</span>
      </footer>
    </main>
  )
}

export default GovernmentPage
