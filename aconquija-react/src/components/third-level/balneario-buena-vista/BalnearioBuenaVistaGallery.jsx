import AccordionGallery from '../../ui/AccordionGallery'
import balnearioImage from '../../../../imagenes/balneario_municipal/balneario.webp'
import slideImage from '../../../../imagenes/balneario_municipal/balneario_2.webp'
import quinchosImage from '../../../../imagenes/balneario_municipal/balneario_5.webp'
import sierraImage from '../../../../imagenes/balneario_municipal/balneario_4.webp'

const photos = [
  { src: balnearioImage, alt: 'Pileta municipal con sectores de distinta profundidad', label: 'Pileta municipal' },
  { src: slideImage, alt: 'Tobogán de pileta al aire libre', label: 'Tobogán' },
  { src: quinchosImage, alt: 'Quinchos y parrillas junto a la pileta', label: 'Quinchos y asadores' },
  { src: sierraImage, alt: 'Sierra de Aconquija, entorno de Buena Vista', label: 'Sierra de Aconquija' },
]

export default function BalnearioBuenaVistaGallery() {
  return (
    <section className="gallery-section reveal in balneario-buena-vista-gallery" aria-label="Galería del Balneario Municipal Buena Vista">
      <div className="section-eyebrow">Galería</div>
      <h2>El paisaje en imágenes</h2>
      <AccordionGallery
        items={photos}
        ariaLabel="Galería de imágenes del Balneario Municipal Buena Vista"
      />
    </section>
  )
}
