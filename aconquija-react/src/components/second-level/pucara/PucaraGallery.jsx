import { useEffect, useState } from 'react'
import ruinas3 from '../../../../../imagenes/ruinas_del_pucara/ruinas_3.webp'
import ruinas2 from '../../../../../imagenes/ruinas_del_pucara/ruinas_2.webp'
import ruina from '../../../../../imagenes/ruinas_del_pucara/ruina.webp'
import ruinas4 from '../../../../../imagenes/ruinas_del_pucara/ruinas_4.webp'

const photos = [
  {
    src: ruinas3,
    alt: 'Vista del Campo del Pucará y la Sierra de Aconquija',
    caption: 'Vista del Campo del Pucará y la Sierra de Aconquija',
  },
  {
    src: ruinas2,
    alt: 'Muralla de piedra incaica (imagen ilustrativa de arquitectura inca)',
    caption: 'Muralla de piedra incaica',
  },
  {
    src: ruina,
    alt: '',
    caption: 'Pucará de Aconquija',
  },
  {
    src: ruinas4,
    alt: 'Atardecer sobre las serranías del Aconquija',
    caption: 'Atardecer sobre las serranías del Aconquija',
  },
]

export default function PucaraGallery() {
  const [selectedIndex, setSelectedIndex] = useState(null)

  useEffect(() => {
    if (selectedIndex === null) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedIndex(null)
      if (event.key === 'ArrowRight') setSelectedIndex(index => (index + 1) % photos.length)
      if (event.key === 'ArrowLeft') setSelectedIndex(index => (index - 1 + photos.length) % photos.length)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedIndex])

  const showPrevious = () => setSelectedIndex(index => (index - 1 + photos.length) % photos.length)
  const showNext = () => setSelectedIndex(index => (index + 1) % photos.length)

  return (
    <>
      <section className="gallery-section reveal in" aria-labelledby="pucara-gallery-title">
        <div className="section-eyebrow">Galería</div>
        <h2 id="pucara-gallery-title">El sitio en imágenes</h2>
        <div className="gallery-grid">
          {photos.map((photo, index) => (
            <button
              className="gallery-item"
              type="button"
              key={photo.src}
              onClick={() => setSelectedIndex(index)}
              aria-label={`Ampliar fotografía ${index + 1}: ${photo.caption}`}
            >
              <img src={photo.src} alt={photo.alt} />
              <span className="gallery-overlay" aria-hidden="true">
                <span className="zoom-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
                  </svg>
                </span>
              </span>
            </button>
          ))}
        </div>
      </section>

      {selectedIndex !== null && (
        <div
          className="lightbox open"
          role="dialog"
          aria-modal="true"
          aria-label="Galería de fotografías del Pucará de Aconquija"
          onClick={(event) => {
            if (event.target === event.currentTarget) setSelectedIndex(null)
          }}
        >
          <button className="lightbox-nav prev" type="button" onClick={showPrevious} aria-label="Fotografía anterior">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <div className="lightbox-inner">
            <button className="lightbox-close" type="button" onClick={() => setSelectedIndex(null)} aria-label="Cerrar galería">✕</button>
            <img src={photos[selectedIndex].src} alt={photos[selectedIndex].alt} />
            <p className="lightbox-caption">{photos[selectedIndex].caption}</p>
          </div>
          <button className="lightbox-nav next" type="button" onClick={showNext} aria-label="Fotografía siguiente">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
          </button>
          <div className="lightbox-counter">{selectedIndex + 1} / {photos.length}</div>
        </div>
      )}
    </>
  )
}
