import AccordionGallery from '../../ui/AccordionGallery'
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
      <AccordionGallery
        items={photos}
        ariaLabel="Galería de imágenes de Río Potrero"
      />
      <p className="gallery-caption">Los espacios de la galería quedan reservados para incorporar las fotografías correspondientes.</p>
    </section>
  )
}
