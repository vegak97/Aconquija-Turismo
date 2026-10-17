const features = [
  {
    title: 'Bosque de aliso de cerro',
    text: 'El Alnus acuminata es la especie dominante, acompañada de sauco y helechos propios del sotobosque húmedo de yungas.',
    icon: <path d="M3 17l4-8 4 4 4-6 4 4" />,
  },
  {
    title: '2 a 3 horas',
    text: 'Recorrido de baja dificultad por senderos del bosque montano, apto para toda la familia.',
    icon: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
  },
  {
    title: 'Gradiente de humedad',
    text: 'La vegetación se vuelve más densa a medida que se avanza desde Buena Vista hacia Yunka Suma, el tramo más húmedo del valle.',
    icon: <><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" /><circle cx="12" cy="10" r="3" /></>,
  },
  {
    title: 'Fauna de altura',
    text: 'En la Sierra de Aconquija conviven guanacos, pumas, gatos onza, osos meleros y la perdiz colorada conocida como guaipo.',
    icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
  },
  {
    title: 'Parte del circuito Respira Verde',
    text: 'El recorrido conecta con Charqueadero y Río Potrero dentro de la propuesta de senderismo del municipio de Aconquija.',
    icon: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M2 12h2m16 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></>,
  },
  {
    title: 'Puerta de entrada a Río Potrero',
    text: 'El sendero conecta con el camping y los túneles de Río Potrero, ideal para combinar en una misma salida.',
    icon: <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4 12 14.01l-3-3" /></>,
  },
]

function FeatureIcon({ children }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">{children}</svg>
}

export default function BosqueDeAlisosContent() {
  return (
    <>
      <section className="content-section reveal in">
        <div className="section-eyebrow">Descripción</div>
        <h2>El bosque montano que respira las yungas</h2>
        <p>
          En el extremo norte del valle de Aconquija, entre las localidades de Río Potrero y Yunka Suma, crece uno
          de los rincones más húmedos de todo el departamento Andalgalá: el bosque de aliso de cerro (Alnus
          acuminata), acompañado de ejemplares de sauco (Sambucus peruviana) y otras especies propias del distrito
          de Bosque Montano de las Yungas. Es el resultado de un fenómeno geográfico particular: la ladera oriental
          de la Sierra de Aconquija actúa como una gran pared que intercepta los vientos húmedos que llegan desde el
          Atlántico, obligándolos a ascender y condensarse en forma de niebla y lluvia.
        </p>
        <p>
          El propio paisaje cambia a la vista del visitante: quien recorre el valle desde Buena Vista hacia el norte
          nota cómo la vegetación se vuelve cada vez más verde y frondosa a medida que se acerca a Yunka Suma, el
          último poblado antes del límite con Tucumán. Este tramo forma parte del circuito turístico "Respira Verde"
          que el municipio de Aconquija organiza junto a Charqueadero y Río Potrero, con senderos para caminata y
          cabalgata entre el bosque.
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
          Desde San Fernando del Valle de Catamarca se toma la Ruta Provincial N° 1 hacia el norte. El camino
          asciende por la cuesta de Las Chacritas hasta el empalme con la Ruta Nacional N° 48, que conduce a Buena
          Vista, la localidad principal de Aconquija. Desde allí, siguiendo el valle hacia el norte, se llega a Río
          Potrero y finalmente a Yunka Suma, donde se concentran los senderos que atraviesan el bosque de aliso.
        </p>
        <p>
          El acceso a los senderos puede coordinarse con el municipio de Aconquija o con guías locales de la zona,
          que también organizan las visitas a los túneles del Río Potrero y a Charqueadero dentro del mismo circuito
          "Respira Verde".
        </p>
      </section>

      <div className="section-divider" />

      <section className="content-section reveal in">
        <div className="section-eyebrow">Equipamiento</div>
        <h2>Qué llevar para la caminata</h2>
        <p>
          Al tratarse de un bosque húmedo de yungas, conviene llevar calzado de trekking, ropa de abrigo liviana y
          una campera impermeable, porque la niebla y las lluvias son frecuentes incluso fuera del verano. No debe
          faltar el repelente de insectos, agua potable y una cámara o binoculares para observar la variedad de
          flora y aves del sotobosque.
        </p>
      </section>
    </>
  )
}
