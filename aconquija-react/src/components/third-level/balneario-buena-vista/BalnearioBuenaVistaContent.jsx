const features = [
  {
    title: 'Pileta con tres sectores',
    text: 'Distintas profundidades para chicos y grandes, con un tobogán en una de las esquinas del predio.',
    icon: <path d="M3 17l4-8 4 4 4-6 4 4" />,
  },
  {
    title: 'Abierto en temporada de verano',
    text: 'El balneario funciona sobre todo en los meses cálidos, cuando llegan familias de Aconquija y de localidades cercanas.',
    icon: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
  },
  {
    title: 'Aprox. 1.650 msnm',
    text: 'Buena Vista se ubica en el Valle del Suncho, entre la Sierra de Aconquija y la Sierra de Narváez.',
    icon: <><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" /><circle cx="12" cy="10" r="3" /></>,
  },
  {
    title: 'Quinchos y asadores',
    text: 'Alrededor de la pileta hay espacios cubiertos con mesadas y parrillas para pasar el día en grupo.',
    icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 0 0 7.75" /></>,
  },
  {
    title: 'Cerca del planetario',
    text: 'El Observatorio Janaxpacha Wasi se encuentra a pocos kilómetros de Buena Vista, ascendiendo hacia la Sierra de Narváez.',
    icon: <><path d="M12 3v1m0 16v1M4.22 4.22l.7.7M19.07 4.22l-.7.7M1 12h1m20 0h1M4.22 19.78l.7-.7M19.07 19.78l-.7-.7" /><circle cx="12" cy="12" r="4" /></>,
  },
  {
    title: 'En pleno centro de servicios',
    text: 'A metros de la ruta principal, del hotel Pucará y de la zona comercial de Buena Vista.',
    icon: <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" /></>,
  },
]

function FeatureIcon({ children }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">{children}</svg>
}

export default function BalnearioBuenaVistaContent() {
  return (
    <>
      <section className="content-section reveal in">
        <div className="section-eyebrow">Descripción</div>
        <h2>La pileta que refresca el corazón de Aconquija</h2>
        <p>
          En Buena Vista, la localidad más importante del distrito de Aconquija y puerta de entrada al valle del
          Suncho, el municipio administra un balneario con una gran pileta dividida en tres sectores de distinta
          profundidad, pensada tanto para el chapoteo de los más chicos como para nadar. En una de las esquinas del
          predio hay un tobogán, y alrededor de la pileta se distribuyen quinchos con asadores, mesadas y espacios
          de sombra para pasar el día en familia.
        </p>
        <p>
          Buena Vista se encuentra a unos 1.650 msnm en el Valle del Suncho, entre la Sierra de Aconquija al oeste y
          la Sierra de Narváez al este, y funciona como centro de servicios de la zona: allí están el hotel Pucará,
          la estación de servicio y la entrada hacia el Planetario Janaxpacha Wasi, a pocos kilómetros de distancia.
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
          Desde San Fernando del Valle de Catamarca se toma la Ruta Provincial N° 1 hacia el norte, con tramo
          pavimentado hasta Singuil. Luego se asciende por la cuesta de Las Chacritas, un camino de tierra sinuoso
          pero con paisajes destacados, hasta el empalme con la Ruta Nacional N° 48 (ex Ruta Provincial N° 48).
          Tomando esa ruta hacia el norte se llega a Buena Vista, recorriendo en total unos 152 kilómetros desde la
          capital.
        </p>
        <p>
          El balneario municipal se encuentra a pocos metros del centro comercial de Buena Vista y de la ruta
          principal, por lo que es fácil de ubicar apenas se llega a la localidad.
        </p>
      </section>

      <div className="section-divider" />

      <section className="content-section reveal in">
        <div className="section-eyebrow">Equipamiento</div>
        <h2>Qué llevar para el día de pileta</h2>
        <p>
          Traje de baño, toalla, protector solar y calzado cómodo para las zonas de césped y cemento alrededor de la
          pileta. Si vas a usar los quinchos, conviene sumar carbón, utensilios para el asado y una heladerita para
          las bebidas, ya que el balneario ofrece el espacio pero no siempre los insumos.
        </p>
      </section>
    </>
  )
}
