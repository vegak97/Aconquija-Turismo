const features = [
  {
    title: 'La fiesta más grande del año',
    text: 'Es el evento cultural de mayor convocatoria del calendario de Aconquija, con décadas de trayectoria.',
    icon: <path d="M3 17l4-8 4 4 4-6 4 4" />,
  },
  {
    title: 'Tres noches consecutivas',
    text: 'Viernes, sábado y domingo, cada una con una grilla de artistas diferente, desde las 21 h.',
    icon: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
  },
  {
    title: 'Escenario Lindor Núñez Piosek',
    text: 'En el Complejo Polideportivo Municipal Juan Higinio Vedia, en el centro de Aconquija.',
    icon: <><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" /><circle cx="12" cy="10" r="3" /></>,
  },
  {
    title: 'Artistas nacionales y locales',
    text: 'Cada edición combina figuras consagradas del folclore con artistas regionales y locales.',
    icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
  },
  {
    title: 'Fines de enero',
    text: 'Cierra la temporada de verano de Aconquija, tras el Festival del Bandoneón.',
    icon: <><path d="M12 3v1m0 16v1M4.22 4.22l.7.7M19.07 4.22l-.7.7M1 12h1m20 0h1M4.22 19.78l.7-.7M19.07 19.78l-.7-.7" /><circle cx="12" cy="12" r="4" /></>,
  },
  {
    title: 'Entradas y abonos',
    text: 'Se venden anticipadas y abonos para las tres noches en la boletería y puntos de venta oficiales.',
    icon: <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4 12 14.01l-3-3" /></>,
  },
]

function FeatureIcon({ children }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">{children}</svg>
}

export default function FestivalMayorContent() {
  return (
    <>
      <section className="content-section reveal in">
        <div className="section-eyebrow">Descripción</div>
        <h2>Tres noches que cierran el verano</h2>
        <p>
          El Festival Mayor de Aconquija es la fiesta popular más importante del municipio, con décadas de historia
          ininterrumpida. Se desarrolla durante tres noches consecutivas —viernes, sábado y domingo, hacia fines de
          enero— en el Complejo Polideportivo Municipal Juan Higinio Vedia, sobre el escenario Lindor Núñez Piosek,
          y reúne a artistas nacionales, regionales y locales del folclore y la música popular.
        </p>
        <p>
          Cada noche tiene su propia cartelera: en ediciones recientes se presentaron figuras como el Indio Lucio
          Rojas, Lázaro Caballero, Los Guaraníes, Destino San Javier y Dale Q' Va, entre muchos otros. Más allá de
          los shows, el festival funciona como un punto de encuentro para vecinos y visitantes, con un fuerte
          sentido de identidad y pertenencia para la comunidad de Aconquija.
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
        <h2>Punto de encuentro y acceso</h2>
        <p>
          El festival se desarrolla en el Complejo Polideportivo Municipal Juan Higinio Vedia, en el centro de
          Aconquija (también conocida como Las Estancias), a la que se llega por la Ruta Provincial N° 1 desde San
          Fernando del Valle de Catamarca, hacia el norte. El predio está a pocos minutos a pie del centro cívico
          del pueblo.
        </p>
        <p>
          Las entradas anticipadas y los abonos para las tres noches suelen conseguirse en la Oficina de Información
          Turística de El Alamito y en puntos de venta habilitados por la municipalidad; conviene consultar las
          fechas y precios de la edición del año en curso en la agenda oficial de turismo de Catamarca.
        </p>
      </section>

      <div className="section-divider" />

      <section className="content-section reveal in">
        <div className="section-eyebrow">Recomendaciones</div>
        <h2>Qué llevar al festival</h2>
        <p>
          Las noches de verano en Aconquija pueden refrescar bastante después de las 21 h, así que conviene un
          abrigo liviano. También suma llevar reposera o manta si preferís mirar el show desde más atrás, calzado
          cómodo para estar de pie, y efectivo para los puestos de comida y bebida del predio. Si vas con niños, el
          festival es un evento familiar, pero las noches suelen extenderse hasta tarde.
        </p>
      </section>
    </>
  )
}
