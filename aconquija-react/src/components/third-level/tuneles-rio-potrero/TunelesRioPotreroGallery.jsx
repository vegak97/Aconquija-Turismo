import AccordionGallery from '../../ui/AccordionGallery'
const reservedPhotos = [
  { label: 'Río Potrero, en el valle entre la Sierra de Aconquija y la Sierra de Narváez' },
  { label: 'Entrada de túnel cubierta de vegetación (imagen ilustrativa de estructura abandonada)' },
  { label: 'Bosque montano de yungas cubierto de neblina' },
  { label: 'Sierra de Aconquija, entorno del Cerro de Las Cañas' },
]

export default function TunelesRioPotreroGallery() {
  return (
    <section className="gallery-section reveal in tuneles-gallery-section" aria-label="Galería de los Túneles del Río Potrero">
      <div className="section-eyebrow">Galería</div>
      <h2>El paisaje en imágenes</h2>
      <AccordionGallery
        items={reservedPhotos}
        ariaLabel="Galería de imágenes de los Túneles del Río Potrero"
      />
      <p className="gallery-caption">La imagen del túnel es ilustrativa de una estructura abandonada cubierta de vegetación; el resto corresponde al entorno real de Río Potrero.</p>
    </section>
  )
}
