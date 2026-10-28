import AccordionGallery from '../../ui/AccordionGallery'
import cabalgataImage from '../../../../imagenes/cabalgata.webp'

const photos = [
  { src: cabalgataImage, alt: 'Cabalgatas en el circuito Respira Verde de Aconquija', label: 'Cabalgatas en Aconquija' },
  { label: 'Caminos rurales del circuito Respira Verde' },
  { label: 'Paisaje serrano de Aconquija' },
  { label: 'Recorrido a caballo entre los parajes de la zona' },
]

export default function CabalgatasGallery() {
  return (
    <section className="gallery-section reveal in cabalgatas-gallery" aria-label="Galería de Cabalgatas">
      <div className="section-eyebrow">Galería</div>
      <h2>El recorrido en imágenes</h2>
      <AccordionGallery items={photos} ariaLabel="Galería de Cabalgatas en Aconquija" />
      <p className="gallery-caption">Los espacios sin fotografía quedan reservados para incorporar imágenes específicas del recorrido.</p>
    </section>
  )
}
