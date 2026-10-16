import { useState } from 'react'

const infoRows = [
  { label: 'Duración', value: '4 a 6 horas (ida y vuelta)', icon: 'time' },
  { label: 'Dificultad', value: 'Media-alta — sendero pedregoso y empinado', icon: 'activity' },
]

function InfoIcon({ type }) {
  if (type === 'time') return <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>
  if (type === 'activity') return <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  if (type === 'location') return <><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>
  return <><rect x="1" y="4" width="22" height="16" rx="2" /><line x1="1" y1="10" x2="23" y2="10" /></>
}

function ShareIcon({ type }) {
  if (type === 'facebook') return <path d="M15 4h-2a4 4 0 0 0-4 4v3H7v3h2v6h3v-6h2.5l.5-3H12V8a1 1 0 0 1 1-1h2V4z" />
  return <><path d="M20.52 3.48A11.8 11.8 0 0 0 12.03 0C5.4 0 .03 5.37.03 12c0 2.12.56 4.19 1.62 6.02L0 24l6.16-1.61A11.95 11.95 0 0 0 12.03 24C18.66 24 24 18.63 24 12c0-3.2-1.25-6.2-3.48-8.52ZM12.03 21.8a9.78 9.78 0 0 1-4.99-1.37l-.36-.21-3.65.95.98-3.56-.24-.37A9.78 9.78 0 1 1 12.03 21.8Z" /><path d="M17.42 14.47c-.29-.15-1.71-.84-1.98-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.22-.63.07-.29-.15-1.24-.46-2.36-1.48-.88-.79-1.47-1.77-1.64-2.07-.17-.29-.02-.45.13-.6.14-.14.29-.37.44-.56.15-.19.19-.33.29-.55.1-.22.05-.41-.02-.56-.07-.15-.64-1.55-.88-2.13-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.49.07-.74.33-.26.26-.99.97-.99 2.37 0 1.4 1.02 2.75 1.16 2.94.15.19 2.01 3.07 4.88 4.3.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.71-.7 1.95-1.38.24-.68.24-1.26.17-1.38Z" /></>
}

export default function PucaraInfoCard() {
  const [copied, setCopied] = useState(false)

  const shareUrl = window.location.href
  const shareTitle = 'Pucará de Aconquija — Aconquija Turismo'

  const shareFacebook = () => {
    window.open(`https://www.facebook.com/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank', 'width=600,height=400')
  }

  const shareWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(`${shareTitle} ${shareUrl}`)}`, '_blank', 'noopener,noreferrer')
  }

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <>
      <div className="info-card reveal in">
        <div className="info-card-header">
          <div className="eyebrow">Acerca de</div>
          <div className="season-badges">
            <span className="season-badge active">Otoño</span>
            <span className="season-badge active">Invierno</span>
            <span className="season-badge active">Primavera</span>
          </div>
          <h3 style={{ marginTop: 14, fontFamily: 'var(--ff-display)', fontWeight: 500 }}>Evitar días de lluvia</h3>
        </div>

        <div className="info-rows">
          {infoRows.map(row => (
            <div className="info-row" key={row.label}>
              <div className="info-row-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><InfoIcon type={row.icon} /></svg></div>
              <div><div className="info-row-label">{row.label}</div><div className="info-row-val">{row.value}</div></div>
            </div>
          ))}
          <div className="info-row">
            <div className="info-row-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><InfoIcon type="location" /></svg></div>
            <div>
              <div className="info-row-label">Punto de partida</div>
              <div className="info-row-val">
                Paraje Pucará<br />
                <a href="https://maps.app.goo.gl/bpQn3UqrJxXJkzuaA" target="_blank" rel="noreferrer">Ver en el mapa →</a>
              </div>
            </div>
          </div>
          <div className="info-row">
            <div className="info-row-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><InfoIcon type="price" /></svg></div>
            <div><div className="info-row-label">Precio</div><div className="info-row-val">Consultas disponibles</div></div>
          </div>
          <div className="info-row">
            <div className="info-row-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.28h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7a2 2 0 0 1 1.72 2.03z" /></svg></div>
            <div>
              <div className="info-row-label">Contacto</div>
              <div className="info-row-val">
                <a href="tel:+543834966977">+54 383 496-6977</a><br />
                <a href="mailto:Maxyz000@icloud.com">Maxyz000@icloud.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="info-card-footer">
          <a className="btn-contact" href="https://wa.me/543834966977?text=Hola%2C%20me%20interesa%20visitar%20el%20Pucar%C3%A1%20de%20Aconquija" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><ShareIcon type="whatsapp" /></svg>
            Reservar por WhatsApp
          </a>
        </div>
      </div>

      <div className="share-block reveal in">
        <h5>Compartir</h5>
        <div className="share-btns">
          <button className="share-btn fb" type="button" onClick={shareFacebook}>
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><ShareIcon type="facebook" /></svg>
            Facebook
          </button>
          <button className="share-btn wa" type="button" onClick={shareWhatsApp}>
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><ShareIcon type="whatsapp" /></svg>
            WhatsApp
          </button>
        </div>
        <button
          id="shareCopy"
          type="button"
          onClick={copyLink}
          style={{ marginTop: 10, background: 'none', border: '1px solid #e0ddd5', borderRadius: 6, width: '100%', padding: 10, cursor: 'pointer', fontSize: '.78rem', letterSpacing: 1, textTransform: 'uppercase', fontWeight: 600, color: '#8d9199', transition: 'all .25s' }}
        >
          {copied ? '¡Copiado!' : 'Copiar link'}
        </button>
      </div>
    </>
  )
}
