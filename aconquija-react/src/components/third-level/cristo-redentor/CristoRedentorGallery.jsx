import AccordionGallery from '../../ui/AccordionGallery'
import cristoImage from '../../../../imagenes/cristo_redentor/cristo_redentor.webp'
import cristoImageThree from '../../../../imagenes/cristo_redentor/cristo_redentor_3.webp'

const photos = [
  { src: cristoImage, alt: 'Cristo Redentor de Aconquija', label: 'Cristo Redentor' },
  { src: cristoImageThree, alt: 'Vista del mirador y su entorno natural', label: 'El mirador' },
]

export default function CristoRedentorGallery() {
  return (
    <section className="gallery-section reveal in cristo-redentor-gallery" aria-label="Galería del Cristo Redentor de Aconquija">
      <div className="section-eyebrow">Galería</div>
      <h2>El Cristo Redentor en imágenes</h2>
      <AccordionGallery
        items={photos}
        ariaLabel="Galería de imágenes del Cristo Redentor de Aconquija"
      />
      <p className="gallery-caption">Imágenes locales del Cristo Redentor y su entorno en Aconquija.</p>
    </section>
  )
}
