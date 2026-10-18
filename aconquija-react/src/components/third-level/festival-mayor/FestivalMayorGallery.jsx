import AccordionGallery from '../../ui/AccordionGallery'
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
      <AccordionGallery
        items={photos}
        ariaLabel="Galería de imágenes del Festival Mayor de Aconquija"
      />
      <p className="gallery-caption">Los espacios de la galería quedan reservados para incorporar las fotografías correspondientes.</p>
    </section>
  )
}
