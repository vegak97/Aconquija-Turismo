const photos = [
  { label: 'Músicos en vivo con bandoneón' },
  { label: 'Sierra de Aconquija, entorno de Cóndor Huasi' },
  { label: 'Actividades folclóricas y de campo' },
  { label: 'Entorno natural de Cóndor Huasi' },
]

export default function FiestaBandoneonGallery() {
  return (
    <section className="gallery-section reveal in fiesta-bandoneon-gallery" aria-label="Galería del Festival Provincial del Bandoneón">
      <div className="section-eyebrow">Galería</div>
      <h2>La fiesta en imágenes</h2>
      <div className="gallery-grid fiesta-bandoneon-gallery-grid">
        {photos.map((photo, index) => (
          <div className={`gallery-item fiesta-bandoneon-gallery-item fiesta-bandoneon-gallery-item--${index + 1}`} key={photo.label}>
            <div className="fiesta-bandoneon-gallery-placeholder" aria-hidden="true" />
            <span className="fiesta-bandoneon-gallery-label">{photo.label}</span>
          </div>
        ))}
      </div>
      <p className="gallery-caption">
        Los espacios de la galería quedan reservados para incorporar las fotografías correspondientes.
      </p>
    </section>
  )
}
