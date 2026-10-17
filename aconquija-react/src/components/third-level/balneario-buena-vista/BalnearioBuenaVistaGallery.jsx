import balnearioImage from '../../../../imagenes/balneario_municipal/balneario.webp'
import slideImage from '../../../../imagenes/balneario_municipal/balneario_2.webp'
import quinchosImage from '../../../../imagenes/balneario_municipal/balneario_5.webp'
import sierraImage from '../../../../imagenes/balneario_municipal/balneario_4.webp'

const photos = [
  { src: balnearioImage, alt: 'Pileta municipal con sectores de distinta profundidad', label: 'Pileta municipal' },
  { src: slideImage, alt: 'Tobogán de pileta al aire libre', label: 'Tobogán' },
  { src: quinchosImage, alt: 'Quinchos y parrillas junto a la pileta', label: 'Quinchos y asadores' },
  { src: sierraImage, alt: 'Sierra de Aconquija, entorno de Buena Vista', label: 'Sierra de Aconquija' },
]

export default function BalnearioBuenaVistaGallery() {
  return (
    <section className="gallery-section reveal in balneario-buena-vista-gallery" aria-label="Galería del Balneario Municipal Buena Vista">
      <div className="section-eyebrow">Galería</div>
      <h2>El paisaje en imágenes</h2>
      <div className="gallery-grid balneario-buena-vista-gallery-grid">
        {photos.map((photo, index) => (
          <div className={`gallery-item balneario-buena-vista-gallery-item balneario-buena-vista-gallery-item--${index + 1}`} key={photo.label}>
            <img src={photo.src} alt={photo.alt} loading="lazy" />
            <span className="balneario-buena-vista-gallery-label">{photo.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
