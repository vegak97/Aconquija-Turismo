const features = [
  {
    title: 'El mejor alojamiento de Aconquija',
    text: 'Yunka Suma es reconocida por ofrecer las comodidades de hospedaje más completas de toda la zona.',
    icon: <path d="M3 17l4-8 4 4 4-6 4 4" />,
  },
  {
    title: '1.470 msnm',
    text: 'Se ubica en el valle entre la Sierra de Aconquija y la Sierra de Narváez, a la vera del Río Las Chacras.',
    icon: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
  },
  {
    title: 'Bosques nublados de montaña',
    text: 'Densos bosques de aliso de cerro (Alnus acuminata), entre los más verdes de todo Aconquija.',
    icon: <><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" /><circle cx="12" cy="10" r="3" /></>,
  },
  {
    title: 'Última parada antes de Tucumán',
    text: 'Desde aquí se emprende el ascenso por la Cuesta del Clavillo, cruzando la Selva de las Yungas hacia Tucumán.',
    icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
  },
  {
    title: 'Complejo Valle Hermoso',
    text: 'Cabañas provinciales en comodato con el municipio, equipadas y para grupos de hasta 8 personas.',
    icon: <><path d="M12 3v1m0 16v1M4.22 4.22l.7.7M19.07 4.22l-.7.7M1 12h1m20 0h1M4.22 19.78l.7-.7M19.07 19.78l-.7-.7" /><circle cx="12" cy="12" r="4" /></>,
  },
  {
    title: 'Desconexión total',
    text: 'Silencio, aire fresco de montaña y una inmersión profunda en la naturaleza, ideal para trekking y descanso.',
    icon: <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4 12 14.01l-3-3" /></>,
  },
]

function FeatureIcon({ children }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">{children}</svg>
}

export default function YunkaSumaContent() {
  return (
    <>
      <section className="content-section reveal in">
        <div className="section-eyebrow">Descripción</div>
        <h2>El refugio de montaña al final del camino</h2>
        <p>
          Yunka Suma es una localidad del departamento Andalgalá que forma parte del conjunto de poblados conocido
          como Aconquija o Las Estancias, y es la última parada de la zona norte antes de cruzar hacia Tucumán por
          la Cuesta del Clavillo. Se ubica a unos 1.470 metros sobre el nivel del mar, en el valle formado por la
          Sierra de Aconquija al oeste y la Sierra de Narváez al este, a la vera del Río Las Chacras, afluente del
          Río del Campo.
        </p>
        <p>
          Es, según coinciden los propios pobladores de Aconquija, la localidad con mejores comodidades de
          alojamiento de toda la zona. Sus atractivos naturales son menos conocidos que los de otros parajes, pero
          no por eso menos valiosos: estar en Yunka Suma es sumergirse de lleno en los bosques nublados de montaña,
          al pie de los Nevados del Aconquija, en pleno bosque de aliso de cerro (Alnus acuminata). Por estar más
          expuesta a los vientos húmedos que llegan desde el noreste, es una de las zonas con mayor nivel de
          precipitaciones de todo Aconquija, lo que explica lo denso y verde de su vegetación.
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
        <h2>Acceso a Yunka Suma</h2>
        <p>
          Desde San Fernando del Valle de Catamarca se toma la Ruta Provincial N° 1 hacia el norte. El camino está
          pavimentado hasta la localidad de Singuil; desde ahí comienza la Cuesta de Las Chacritas, un sinuoso
          camino de tierra con paisajes de montaña hasta llegar a Yunka Suma, la última localidad de Aconquija antes
          del límite con Tucumán.
        </p>
        <p>
          Quienes vienen desde Tucumán pueden acceder por la Cuesta del Clavillo (Ruta Provincial N° 365), un
          trayecto que atraviesa la Selva de las Yungas y conecta directamente con esta zona.
        </p>
      </section>

      <div className="section-divider" />

      <section className="content-section reveal in">
        <div className="section-eyebrow">Recomendaciones</div>
        <h2>Qué llevar a Yunka Suma</h2>
        <p>
          Por ser una zona de bosque nublado con altas precipitaciones, conviene llevar ropa de abrigo y campera
          impermeable incluso en verano, además de calzado de trekking con buen agarre para los senderos húmedos. Si
          te alojás en las cabañas, alcanza con traer lo esencial, ya que cuentan con cocina, heladera y
          calefacción; para estadías más largas es recomendable llevar provisiones desde Catamarca o Tucumán, dado
          que los comercios en la zona son escasos.
        </p>
      </section>
    </>
  )
}
