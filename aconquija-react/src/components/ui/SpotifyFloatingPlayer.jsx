import { useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function SpotifyFloatingPlayer() {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation()
  const isHomePage = pathname === '/'

  return (
    <div className={`spotify-float ${isOpen ? 'is-open' : ''} ${isHomePage ? 'is-home-intro' : ''}`}>
      <section
        id="spotify-player-panel"
        className={`spotify-panel ${isOpen ? 'is-visible' : 'is-hidden'}`}
        aria-label="Reproductor de música de Spotify"
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
          <div className="spotify-panel-header">
            <div>
              <span className="spotify-kicker">Música para el camino</span>
              <p className="spotify-title">Sonidos de Aconquija</p>
            </div>
            <button
              className="spotify-close"
              type="button"
              aria-label="Cerrar reproductor de Spotify"
              onClick={() => setIsOpen(false)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
          <iframe
            title="Álbum de Spotify compartido para Aconquija"
            src="https://open.spotify.com/embed/album/0reHM12gjxXyBRkBdfjoio?utm_source=generator&theme=0"
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            style={{ borderRadius: '12px', border: 0 }}
          />
          <p className="spotify-note">Elegí reproducir dentro del reproductor para comenzar.</p>
      </section>

      <button
        className="spotify-toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="spotify-player-panel"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="spotify-toggle-icon" aria-hidden="true">
          {isOpen ? (
            <svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" /></svg>
          ) : (
            <svg viewBox="0 0 24 24"><path d="M9 6v12l10-6z" /></svg>
          )}
        </span>
        <span>{isOpen ? 'Cerrar música' : 'Escuchar música'}</span>
      </button>
    </div>
  )
}
