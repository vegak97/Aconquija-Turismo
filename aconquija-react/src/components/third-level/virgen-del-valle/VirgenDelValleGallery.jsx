import virgenImage from '../../../../imagenes/virgen_del_valle/virgen_del_valle.webp'
import virgenImageTwo from '../../../../imagenes/virgen_del_valle/virgen_del_valle_2.webp'

const photos = [
  { src: virgenImage, alt: 'Virgen del Valle de Aconquija', label: 'Virgen del Valle' },
  { src: virgenImageTwo, alt: 'Entorno de la Virgen del Valle en El Lindero', label: 'El Lindero' },
]

export default function VirgenDelValleGallery() {
  return (
    <section className="gallery-section reveal in virgen-del-valle-gallery" aria-label="Galería de la Virgen del Valle de Aconquija">
      <div className="section-eyebrow">Galería</div>
      <h2>La Virgen del Valle en imágenes</h2>
      <div className="gallery-grid virgen-del-valle-gallery-grid">
        {photos.map((photo, index) => (
          <div className={`gallery-item virgen-del-valle-gallery-item virgen-del-valle-gallery-item--${index + 1}`} key={photo.label}>
            <img src={photo.src} alt={photo.alt} loading="lazy" />
            <span className="virgen-del-valle-gallery-label">{photo.label}</span>
          </div>
        ))}
      </div>
      <p className="gallery-caption">Imágenes locales de la Virgen del Valle y su entorno en El Lindero, Aconquija.</p>
    </section>
  )
}
