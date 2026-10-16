import AccordionGallery from '../planetario/AccordionGallery'
import './PucaraGallery.css'

import ruinas3 from '../../../../../imagenes/ruinas_del_pucara/ruinas_3.webp'
import ruinas2 from '../../../../../imagenes/ruinas_del_pucara/ruinas_2.webp'
import ruina from '../../../../../imagenes/ruinas_del_pucara/ruina.webp'
import ruinas4 from '../../../../../imagenes/ruinas_del_pucara/ruinas_4.webp'

const photos = [
  {
    src: ruinas3,
    alt: 'Vista del Campo del Pucará y la Sierra de Aconquija',
    label: 'Campo del Pucará',
  },
  {
    src: ruinas2,
    alt: 'Muralla de piedra incaica del Pucará de Aconquija',
    label: 'Muralla incaica',
  },
  {
    src: ruina,
    alt: 'Ruinas del Pucará de Aconquija',
    label: 'Ruinas del Pucará',
  },
  {
    src: ruinas4,
    alt: 'Atardecer sobre las serranías del Aconquija',
    label: 'Serranías al atardecer',
  },
]

export default function PucaraGallery() {
  return (
    <section className="gallery-section reveal in pucara-gallery-section" aria-label="Galería del Pucará de Aconquija">
      <div className="section-eyebrow">Galería</div>
      <AccordionGallery
        items={photos}
        ariaLabel="Galería de imágenes del Pucará de Aconquija"
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
