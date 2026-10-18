import AccordionGallery from '../../ui/AccordionGallery'
import bosqueImage from '../../../../imagenes/bosque_de_alisos/bosque.webp'
import sierraImage from '../../../../imagenes/bosque_de_alisos/bosque_de_alisos_2.webp'

const photos = [
  { src: bosqueImage, alt: 'Bosque de aliso de cerro entre Río Potrero y Yunka Suma, Aconquija', label: 'Bosque de alisos' },
  { alt: 'Bosque nuboso de yungas cubierto de niebla (espacio reservado para imagen)', label: 'Bosque nuboso de yungas' },
  { alt: 'Sotobosque húmedo con helechos, típico del bosque montano de yungas (espacio reservado para imagen)', label: 'Sotobosque húmedo' },
  { src: sierraImage, alt: 'Sierra de Aconquija, entorno de Yunka Suma y Río Potrero', label: 'Sierra de Aconquija' },
]

export default function BosqueDeAlisosGallery() {
  return (
    <section className="gallery-section reveal in bosque-alisos-gallery" aria-label="Galería del Bosque de Alisos">
      <div className="section-eyebrow">Galería</div>
      <h2>El paisaje en imágenes</h2>
      <AccordionGallery
        items={photos}
        ariaLabel="Galería de imágenes del Bosque de Alisos"
      />
      <p className="gallery-caption">Las imágenes de bosque nuboso son ilustrativas del tipo de vegetación de yungas; el resto corresponde al entorno real de Aconquija.</p>
    </section>
  )
}
