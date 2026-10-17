const photos = [
  { label: 'Bosque nublado de montaña' },
  { label: 'Sierra de Aconquija' },
  { label: 'Trekking en el bosque' },
  { label: 'Río Las Chacras' },
]

export default function YunkaSumaGallery() {
  return (
    <section className="gallery-section reveal in yunka-suma-gallery" aria-label="Galería de Yunka Suma">
      <div className="section-eyebrow">Galería</div>
      <h2>Yunka Suma en imágenes</h2>
      <div className="gallery-grid yunka-suma-gallery-grid">
        {photos.map((photo, index) => (
          <div className={`gallery-item yunka-suma-gallery-item yunka-suma-gallery-item--${index + 1}`} key={photo.label}>
            <div className="yunka-suma-gallery-placeholder" aria-hidden="true" />
            <span className="yunka-suma-gallery-label">{photo.label}</span>
          </div>
        ))}
      </div>
      <p className="gallery-caption">
        Los espacios de la galería quedan reservados para incorporar las fotografías correspondientes.
      </p>
    </section>
  )
}
