import { useEffect, useState } from 'react'
import planetario3 from '../../../../../imagenes/planetario/planetario_3.webp'
import planetario4 from '../../../../../imagenes/planetario/planetario_4.webp'
import noche from '../../../../../imagenes/planetario/noche.webp'
import planetario2 from '../../../../../imagenes/planetario/planetario_2.webp'

const photos = [
  { src: planetario3, alt: 'Cielo estrellado sobre la Sierra de Narváez, junto al Planetario Janaxpacha Huasi' },
  { src: planetario4, alt: 'Telescopio profesional apuntando al cielo nocturno' },
  { src: noche, alt: 'Sierra de Narváez, entorno montañoso del planetario' },
  { src: planetario2, alt: 'Entorno del Planetario Janaxpacha Huasi en la Sierra de Narváez' },
]

export default function PlanetarioGallery() {
  const [activeIndex, setActiveIndex] = useState(null)
  const isOpen = activeIndex !== null

  const close = () => setActiveIndex(null)
  const showPrevious = () => setActiveIndex(index => (index - 1 + photos.length) % photos.length)
  const showNext = () => setActiveIndex(index => (index + 1) % photos.length)

  useEffect(() => {
    if (!isOpen) return undefined
    const onKeyDown = event => {
      if (event.key === 'Escape') setActiveIndex(null)
      if (event.key === 'ArrowLeft') setActiveIndex(index => (index - 1 + photos.length) % photos.length)
      if (event.key === 'ArrowRight') setActiveIndex(index => (index + 1) % photos.length)
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen])

  return (
    <>
      <section className="gallery-section reveal in" aria-labelledby="planetario-gallery-title">
        <div className="section-eyebrow">Galería</div>
        <h2 id="planetario-gallery-title">El cielo en imágenes</h2>
        <div className="gallery-grid">
          {photos.map((photo, index) => (
            <button className="gallery-item" type="button" key={photo.src} onClick={() => setActiveIndex(index)} aria-label={`Ampliar imagen: ${photo.alt}`} style={{ border: 0, padding: 0, background: 'transparent', display: 'block', textAlign: 'left' }}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <span className="gallery-overlay" aria-hidden="true">
                <span className="zoom-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35M11 8v6M8 11h6" /></svg></span>
              </span>
            </button>
          ))}
        </div>
        <p className="gallery-caption">Fotografías ilustrativas del cielo nocturno y el entorno de la Sierra de Narváez, donde se ubica el Planetario Janaxpacha Huasi.</p>
      </section>

      <div className={`lightbox${isOpen ? ' open' : ''}`} role="dialog" aria-modal="true" aria-label="Galería de imágenes" aria-hidden={!isOpen}>
        {isOpen && (
          <>
            <button className="lightbox-nav prev" type="button" onClick={showPrevious} aria-label="Imagen anterior">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <div className="lightbox-inner">
              <button className="lightbox-close" type="button" onClick={close} aria-label="Cerrar galería">✕</button>
              <img src={photos[activeIndex].src} alt={photos[activeIndex].alt} />
              <p className="lightbox-caption">{photos[activeIndex].alt}</p>
            </div>
            <button className="lightbox-nav next" type="button" onClick={showNext} aria-label="Imagen siguiente">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
            </button>
            <div className="lightbox-counter">{activeIndex + 1} / {photos.length}</div>
          </>
        )}
      </div>
    </>
  )
}
