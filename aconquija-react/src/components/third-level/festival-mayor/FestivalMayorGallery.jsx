const photos = [
  { label: 'Público disfrutando de un recital nocturno (imagen ilustrativa)' },
  { label: 'Música en vivo (imagen ilustrativa de folclore)' },
  { label: 'Sierra de Aconquija, marco natural del festival' },
  { label: 'Actividades culturales y familiares en Aconquija' },
]

export default function FestivalMayorGallery() {
  return (
    <section className="gallery-section reveal in festival-mayor-gallery" aria-label="Galería del Festival Mayor de Aconquija">
      <div className="section-eyebrow">Galería</div>
      <h2>El festival en imágenes</h2>
      <div className="gallery-grid festival-mayor-gallery-grid">
        {photos.map((photo, index) => (
          <div className={`gallery-item festival-mayor-gallery-item festival-mayor-gallery-item--${index + 1}`} key={photo.label}>
            <div className="festival-mayor-gallery-placeholder" aria-hidden="true" />
            <span className="festival-mayor-gallery-label">{photo.label}</span>
          </div>
        ))}
      </div>
      <p className="gallery-caption">
        Los espacios de la galería quedan reservados para incorporar las fotografías correspondientes.
      </p>
    </section>
  )
}
