import cristoImage from '../../../../../imagenes/cristo_redentor/cristo_redentor.webp'
import cristoImageThree from '../../../../../imagenes/cristo_redentor/cristo_redentor_3.webp'

const photos = [
  { src: cristoImage, alt: 'Cristo Redentor de Aconquija', label: 'Cristo Redentor' },
  { src: cristoImageThree, alt: 'Vista del mirador y su entorno natural', label: 'El mirador' },
]

export default function CristoRedentorGallery() {
  return (
    <section className="gallery-section reveal in cristo-redentor-gallery" aria-label="Galería del Cristo Redentor de Aconquija">
      <div className="section-eyebrow">Galería</div>
      <h2>El Cristo Redentor en imágenes</h2>
      <div className="gallery-grid cristo-redentor-gallery-grid">
        {photos.map((photo, index) => (
          <div className={`gallery-item cristo-redentor-gallery-item cristo-redentor-gallery-item--${index + 1}`} key={photo.label}>
            <img src={photo.src} alt={photo.alt} loading="lazy" />
            <span className="cristo-redentor-gallery-label">{photo.label}</span>
          </div>
        ))}
      </div>
      <p className="gallery-caption">Imágenes locales del Cristo Redentor y su entorno en Aconquija.</p>
    </section>
  )
}
