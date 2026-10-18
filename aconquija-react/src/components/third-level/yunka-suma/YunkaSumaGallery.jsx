import AccordionGallery from '../../ui/AccordionGallery'
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
      <AccordionGallery
        items={photos}
        ariaLabel="Galería de imágenes de Yunka Suma"
      />
      <p className="gallery-caption">Los espacios de la galería quedan reservados para incorporar las fotografías correspondientes.</p>
    </section>
  )
}
