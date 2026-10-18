import AccordionGallery from '../../ui/AccordionGallery'

import planetario3 from '../../../../imagenes/planetario/planetario_3.webp'
import planetario4 from '../../../../imagenes/planetario/planetario_4.webp'
import noche from '../../../../imagenes/planetario/noche.webp'
import planetario2 from '../../../../imagenes/planetario/planetario_2.webp'

const photos = [
  {
    src: planetario3,
    alt: 'Cielo estrellado sobre la Sierra de Narváez, junto al Planetario Janaxpacha Huasi',
    label: 'Cielo estrellado',
  },
  {
    src: planetario4,
    alt: 'Telescopio profesional apuntando al cielo nocturno',
    label: 'Observación con telescopio',
  },
  {
    src: noche,
    alt: 'Sierra de Narváez, entorno montañoso del planetario',
    label: 'Sierra de Narváez',
  },
  {
    src: planetario2,
    alt: 'Entorno del Planetario Janaxpacha Huasi en la Sierra de Narváez',
    label: 'Planetario Janaxpacha Huasi',
  },
]

export default function PlanetarioGallery() {
  return (
    <section className="gallery-section reveal in planetario-gallery-section" aria-label="Galería del Planetario Janaxpacha Huasi">
      <div className="section-eyebrow">Galería</div>
      <AccordionGallery
        items={photos}
        ariaLabel="Galería de imágenes del Planetario Janaxpacha Huasi"
      />
    </section>
  )
}
