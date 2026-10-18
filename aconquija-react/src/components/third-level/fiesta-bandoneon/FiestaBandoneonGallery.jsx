import AccordionGallery from '../../ui/AccordionGallery'
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
      <AccordionGallery
        items={photos}
        ariaLabel="Galería de imágenes del Festival Provincial del Bandoneón"
      />
      <p className="gallery-caption">Los espacios de la galería quedan reservados para incorporar las fotografías correspondientes.</p>
    </section>
  )
}
