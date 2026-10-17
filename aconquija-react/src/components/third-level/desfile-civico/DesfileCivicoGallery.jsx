import mountainImage from '../../../../imagenes/montaña.png'
import riverImage from '../../../../imagenes/rio.jpeg'

const photos = [
  { alt: 'Actividad comunitaria al aire libre (espacio reservado para imagen del desfile)', label: 'Desfile Cívico Escolar' },
  { src: mountainImage, alt: 'Entorno de El Lindero, Aconquija', label: 'Entorno de El Lindero' },
  { alt: 'Actividades de verano para chicos en Aconquija (espacio reservado para imagen)', label: 'Actividades de verano' },
  { src: riverImage, alt: 'Entorno de Aconquija en temporada de verano', label: 'Verano en Aconquija' },
]

export default function DesfileCivicoGallery() {
  return (
    <section className="gallery-section reveal in desfile-civico-gallery" aria-label="Galería del Desfile Cívico Escolar">
      <div className="section-eyebrow">Galería</div>
      <h2>La agenda de verano en imágenes</h2>
      <div className="gallery-grid desfile-civico-gallery-grid">
        {photos.map((photo, index) => (
          <div className={`gallery-item desfile-civico-gallery-item desfile-civico-gallery-item--${index + 1}`} key={photo.label}>
            {photo.src ? <img src={photo.src} alt={photo.alt} loading="lazy" /> : <div className="desfile-civico-gallery-placeholder" aria-hidden="true" />}
            <span className="desfile-civico-gallery-label">{photo.label}</span>
          </div>
        ))}
      </div>
      <p className="gallery-caption">
        Las fotos disponibles muestran el entorno de Aconquija; los espacios restantes quedan reservados para fotografías del desfile.
      </p>
    </section>
  )
}
