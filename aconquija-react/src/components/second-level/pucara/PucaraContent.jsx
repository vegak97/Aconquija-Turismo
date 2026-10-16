const features = [
  {
    title: 'Patrimonio Mundial UNESCO',
    text: 'Desde 2014 integra el Qhapaq Ñan (Camino Andino del Inca), junto a un tramo de 800 m que lo une con el sitio del Bajo.',
    icon: <path d="M3 17l4-8 4 4 4-6 4 4" />,
  },
  {
    title: 'Monumento Histórico Nacional',
    text: 'Recibió esta declaración en 1998 por parte de la Comisión Nacional de Monumentos y Lugares Históricos.',
    icon: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
  },
  {
    title: '2.100 msnm',
    text: 'Ubicado en el Campo del Pucará, sobre un cerro de acceso empinado que domina toda la altiplanicie.',
    icon: <><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" /><circle cx="12" cy="10" r="3" /></>,
  },
  {
    title: 'Más de 3.000 m de murallas',
    text: 'Muros simples y dobles, algunos de más de 5 m de altura, con troneras defensivas junto a los accesos.',
    icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
  },
  {
    title: 'Más de un centenar de estructuras',
    text: 'Viviendas, barracas y collcas (silos de almacenamiento) distribuidas en tres grupos principales.',
    icon: <><path d="M12 3v1m0 16v1M4.22 4.22l.7.7M19.07 4.22l-.7.7M1 12h1m20 0h1M4.22 19.78l.7-.7M19.07 19.78l-.7-.7" /><circle cx="12" cy="12" r="4" /></>,
  },
  {
    title: 'Ingreso controlado',
    text: 'El cuidador del sitio registra a cada visitante y verifica su regreso antes de la caída del sol.',
    icon: <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" /></>,
  },
]

function FeatureIcon({ children }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">{children}</svg>
}

export default function PucaraContent() {
  return (
    <>
      <section className="content-section reveal in">
        <div className="section-eyebrow">Descripción</div>
        <h2>La mayor fortaleza inca del sur</h2>
        <p>
          En la altiplanicie conocida como Campo del Pucará, a unos 2.100 metros sobre el nivel del mar, se
          despliega la fortaleza incaica más importante del extremo sur del Tahuantinsuyo. El Pucará de Aconquija
          —también llamado Pucará de Andalgalá o de Ambato— conserva más de 3.000 metros de murallas perimetrales,
          muchas de ellas dobles, con troneras defensivas, muros de varios metros de altura y más de un centenar de
          estructuras entre viviendas, barracas y collcas o depósitos de almacenamiento.
        </p>
        <p>
          Se estima que el sitio tiene unos 500 años y que fue levantado por los incas como bastión militar de
          frontera, sin continuidad de ocupación posterior: no se hallaron enterratorios ni gran cantidad de
          cerámica en su interior, lo que sugiere un uso breve y estrictamente defensivo, probablemente abandonado
          con la llegada de los españoles. Forma parte de un sistema de sitios incaicos junto con el Potrero de
          Chaquiago (de carácter administrativo) y La Ciudacita, un santuario ceremonial de altura en las laderas
          del Aconquija.
        </p>
      </section>

      <div className="feature-list reveal in">
        {features.map(feature => (
          <article className="feature-item" key={feature.title}>
            <div className="feature-icon"><FeatureIcon>{feature.icon}</FeatureIcon></div>
            <div><h4>{feature.title}</h4><p>{feature.text}</p></div>
          </article>
        ))}
      </div>

      <div className="section-divider" />

      <section className="content-section reveal in">
        <div className="section-eyebrow">Cómo llegar</div>
        <h2>Punto de partida y acceso</h2>
        <p>
          El sitio se encuentra en el paraje Pucará, junto al arroyo del mismo nombre, a unos 240 km de San Fernando
          del Valle de Catamarca y a unos 17 km del empalme con la Ruta N° 62. Al llegar, hay que registrarse en la
          casa del cuidador del sitio arqueológico, quien controla el ingreso y verifica el regreso de cada
          visitante antes de la caída del sol.
        </p>
        <p>
          Las ruinas están sobre un cerro de difícil acceso, unos 300 metros por encima del arroyo. El ascenso se
          hace por senderos pedregosos, resbaladizos y sinuosos, por lo que suele tomar más tiempo y esfuerzo que
          muchas caminatas de menor altura; se recomienda salir temprano para tener margen de sobra antes del
          atardecer.
        </p>
      </section>

      <div className="section-divider" />

      <section className="content-section reveal in">
        <div className="section-eyebrow">Equipamiento</div>
        <h2>Qué llevar para la visita</h2>
        <p>
          El ascenso es corto pero exigente, por senderos de piedra sueltos y resbaladizos, así que recomendamos
          calzado de trekking con buen agarre, agua abundante, protector solar y sombrero —la caminata se hace a
          pleno sol y sin sombra en la mayor parte del recorrido—. Una cámara de fotos permite registrar las
          murallas y la vista panorámica del Campo del Pucará sin necesidad de tocar las estructuras.
        </p>
      </section>
    </>
  )
}
