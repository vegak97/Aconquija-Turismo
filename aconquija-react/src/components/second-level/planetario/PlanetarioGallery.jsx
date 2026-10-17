import AccordionGallery from './AccordionGallery'

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
    <section className="gallery-section reveal in planetario-gallery-section" aria-labelledby="planetario-gallery-title">
      <div className="section-eyebrow">Galería</div>
      <AccordionGallery
        items={photos}
        defaultIndex={0}
        expandRatio={0.52}
        accentColor="#cdaa78"
        overlayColor="#1c222c"
        textColor="#ffffff"
        grayscale
        showLabels
        duration={0.6}
        ease="power3.out"
        parallax={0.5}
        tilt={5}
        stagger={0.06}
        height={440}
        gap={10}
        radius={16}
      />
    </section>
  )
}
