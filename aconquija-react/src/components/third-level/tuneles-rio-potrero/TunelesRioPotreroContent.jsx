const features = [
  {
    title: 'Vestigio de los años 70',
    text: 'Los túneles son restos del proyecto hidroeléctrico Potrero del Clavillo, detenido en 1976 por la dictadura militar.',
    icon: <path d="M3 17l4-8 4 4 4-6 4 4" />,
  },
  {
    title: '40 a 1,20 horas',
    text: 'Recorrido de dificultad media por sendero de yungas, apto para caminata o cabalgata.',
    icon: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
  },
  {
    title: 'Aprox. 1.400 msnm',
    text: 'Río Potrero se ubica en el valle entre la Sierra de Aconquija y la Sierra de Narváez.',
    icon: <><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" /><circle cx="12" cy="10" r="3" /></>,
  },
  {
    title: 'Visita guiada',
    text: 'El circuito "Respira Verde" del municipio de Aconquija incluye guías locales hasta los túneles.',
    icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
  },
  {
    title: 'Confluencia de tres ríos',
    text: 'En Río Potrero,Río del Campo y el rio Las Chacras.',
    icon: <><path d="M3 6c3 0 3 4 6 4s3-4 6-4 3 4 6 4" /><path d="M3 14c3 0 3 4 6 4s3-4 6-4 3 4 6 4" /></>,
  },
  {
    title: 'Camping a la orilla del río',
    text: 'Río Potrero cuenta con un camping junto al río, ideal para pasar la tarde antes o después de la caminata.',
    icon: <><path d="M3 20 12 4l9 16z" /><path d="M12 20v-7" /></>,
  },
]

function FeatureIcon({ children }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">{children}</svg>
}

export default function TunelesRioPotreroContent() {
  return (
    <>
      <section className="content-section reveal in">
        <div className="section-eyebrow">Descripción</div>
        <h2>Donde la montaña guarda sus secretos</h2>
        <p>
          En las montañas de Río Potrero, la historia parece haberse detenido entre la vegetación y el silencio.
          Sobre la ladera de la montaña se encuentran antiguos túneles, vestigios de una obra que quedó inconclusa y
          que, con el paso de los años, se convirtió en parte del paisaje. Nadie puede recorrerlos sin preguntarse
          qué propósito tuvieron, quiénes los construyeron y cuál fue la razón que dejó esta obra suspendida en el
          tiempo.
        </p>
        <p>
          El camino hacia ellos es una experiencia en sí misma: senderos que serpentean por la montaña, atraviesan
          ríos y se internan en el verde profundo de las yungas. Desde las alturas, el paisaje revela la unión de
          los principales afluentes de Aconquija, cuyas aguas convergen para formar la Garganta de la Quebrada de
          Las Cañas, un espectáculo natural imponente donde el agua esculpe la montaña. Aquí, la naturaleza y la
          historia conviven. Las yungas cubren las laderas, los ríos acompañan el recorrido y los túneles aparecen
          entre la montaña como puertas hacia un pasado que todavía guarda secretos.
        </p>
        <p>
          Un paisaje para contemplar, un sendero para recorrer y una historia inconclusa que despierta la
          imaginación. Río Potrero es de esos lugares donde no solo se visita un paisaje: se descubre un misterio.
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
          Desde San Fernando del Valle de Catamarca se toma la Ruta Provincial N° 1 hacia el norte, en dirección a
          Aconquija (también conocida como Las Estancias). El camino conduce hasta la localidad de Río Potrero,
          punto de paso obligado para quienes visitan la zona y lugar donde se organizan las visitas guiadas hacia
          los túneles, en el Cerro de Las Cañas.
        </p>
        <p>
          El circuito puede solicitarse a través del municipio de Aconquija o de los guías locales, que también
          ofrecen recorridos por Charqueadero y Yunka Suma, la última localidad antes del límite con Tucumán.
        </p>
      </section>

      <div className="section-divider" />

      <section className="content-section reveal in">
        <div className="section-eyebrow">Equipamiento</div>
        <h2>Qué llevar para la caminata</h2>
        <p>
          El sendero atraviesa bosque húmedo de yungas, así que conviene llevar calzado de trekking con buen agarre,
          repelente de insectos y ropa liviana de manga larga. No falta el agua potable ni la cámara de fotos: entre
          la vegetación y los túneles de piedra hay buenas postales para el recuerdo. Si vas a bañarte en el río,
          sumá cambio de ropa y protector solar.
        </p>
      </section>
    </>
  )
}
