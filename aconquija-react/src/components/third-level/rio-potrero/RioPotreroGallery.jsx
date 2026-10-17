const photos = [
  { alt: 'Río de montaña entre bosques (imagen ilustrativa de Río Potrero)', label: 'Río de montaña' },
  { alt: 'Sierra de Aconquija, entorno de Río Potrero', label: 'Sierra de Aconquija' },
  { alt: 'Actividades de trekking y campo en Aconquija', label: 'Trekking y campo' },
  { alt: 'Río Potrero, Aconquija', label: 'Río Potrero' },
]

export default function RioPotreroGallery() {
  return (
    <section className="gallery-section reveal in rio-potrero-gallery" aria-label="Galería de Río Potrero">
      <div className="section-eyebrow">Galería</div>
      <h2>Río Potrero en imágenes</h2>
      <div className="gallery-grid rio-potrero-gallery-grid">
        {photos.map((photo, index) => (
          <div className={`gallery-item rio-potrero-gallery-item rio-potrero-gallery-item--${index + 1}`} key={photo.label}>
            <div className="rio-potrero-gallery-placeholder" aria-hidden="true" />
            <span className="rio-potrero-gallery-label">{photo.label}</span>
          </div>
        ))}
      </div>
      <p className="gallery-caption">
        Los espacios de la galería quedan reservados para incorporar las fotografías correspondientes.
      </p>
    </section>
  )
}
