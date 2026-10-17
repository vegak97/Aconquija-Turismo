const features = [
  {
    title: 'Camping a la orilla del río',
    text: 'Un camping instalado junto al río Potrero es ideal para pasar la tarde o quedarse a acampar.',
    icon: <path d="M3 17l4-8 4 4 4-6 4 4" />,
  },
  {
    title: '1.400 msnm',
    text: 'Se ubica en el valle entre la Sierra de Aconquija y la Sierra de Narváez, con clima templado.',
    icon: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
  },
  {
    title: 'Bosques de aliso de cerro',
    text: 'Parte del bosque montano de las Yungas catamarqueñas, entre los más densos de todo Aconquija.',
    icon: <><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" /><circle cx="12" cy="10" r="3" /></>,
  },
  {
    title: 'Confluencia de tres ríos',
    text: 'Aquí se juntan el Río del Campo, el río Potrero y el Río Las Chacras, dando inicio a la Quebrada de las Cañas.',
    icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
  },
  {
    title: 'Vestigios de un proyecto hidroeléctrico',
    text: 'Aún se conservan restos del histórico Proyecto Hidroeléctrico Potrero del Clavillo, como túneles en el cerro Las Cañas.',
    icon: <><path d="M12 3v1m0 16v1M4.22 4.22l.7.7M19.07 4.22l-.7.7M1 12h1m20 0h1M4.22 19.78l.7-.7M19.07 19.78l-.7-.7" /><circle cx="12" cy="12" r="4" /></>,
  },
  {
    title: 'Senderismo y trekking',
    text: 'Circuitos como Campo de Azucena/Río Potrero permiten recorrer a pie el entorno del río y sus puentes.',
    icon: <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4 12 14.01l-3-3" /></>,
  },
]

function FeatureIcon({ children }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">{children}</svg>
}

export default function RioPotreroContent() {
  return (
    <>
      <section className="content-section reveal in">
        <div className="section-eyebrow">Descripción</div>
        <h2>Uno de los rincones más verdes de Aconquija</h2>
        <p>
          Río Potrero es una localidad del departamento Andalgalá que forma parte del conjunto de poblados conocido
          como Aconquija o Las Estancias, ubicada en el valle que se forma entre la Sierra de Aconquija al oeste y
          la Sierra de Narváez al este, a unos 1.400 metros sobre el nivel del mar. Es parada obligada para quien
          recorre la zona norte de Aconquija, y debe su nombre al río homónimo que la atraviesa, un afluente
          importante del Río del Campo, el cauce principal que recorre todo el valle de sur a norte.
        </p>
        <p>
          Lo que distingue a Río Potrero es su vegetación: aquí se conservan bosques de aliso de cerro, parte del
          bosque montano de las Yungas catamarqueñas, mucho más densos y verdes que en otras localidades de
          Aconquija. A esto se suma un dato geográfico único: en las cercanías se produce la confluencia de tres
          ríos —el Río del Campo, el río Potrero y el Río Las Chacras—, un punto de encuentro de aguas que da inicio
          a la Quebrada de las Cañas.
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
        <h2>Acceso a Río Potrero</h2>
        <p>
          Río Potrero se encuentra dentro del municipio de Aconquija, departamento Andalgalá, a unos 150 kilómetros
          de San Fernando del Valle de Catamarca. Se llega tomando la Ruta Provincial N° 1 hacia el norte desde la
          capital provincial, o bien desde Concepción, Tucumán, ascendiendo por la Cuesta del Clavillo (Ruta
          Provincial N° 365 de esa provincia), un camino que atraviesa la Selva de las Yungas.
        </p>
        <p>
          El camino de acceso es de ripio y en varios tramos vadea el propio río Potrero, por lo que conviene
          consultar el estado del camino antes de viajar, especialmente después de lluvias.
        </p>
      </section>

      <div className="section-divider" />

      <section className="content-section reveal in">
        <div className="section-eyebrow">Recomendaciones</div>
        <h2>Qué llevar a Río Potrero</h2>
        <p>
          Si vas a pasar el día en el camping conviene llevar reposera, protector solar, agua y algo de dinero en
          efectivo, ya que los servicios en la zona son limitados. Para quienes eligen los senderos de trekking,
          calzado cerrado y de buen agarre es fundamental, dado que el terreno vadea el río en varios puntos. Como
          el clima cambia rápido en la montaña, un abrigo liviano nunca está de más, incluso en verano.
        </p>
      </section>
    </>
  )
}
