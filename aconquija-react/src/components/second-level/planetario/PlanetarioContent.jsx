const features = [
  {
    title: 'Apto para todo público',
    text: 'No requiere experiencia previa ni preparación física especial: es una actividad para toda la familia.',
    icon: <><path d="M3 17l4-8 4 4 4-6 4 4" /></>,
  },
  {
    title: '2 a 3 horas',
    text: 'La visita combina una charla con proyección, recorrido por las instalaciones y observación con telescopios.',
    icon: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
  },
  {
    title: '1.882 msnm',
    text: 'Ubicado en la Sierra de Narváez, entre El Durazno y El Pantanito, lejos de la contaminación lumínica.',
    icon: <><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" /><circle cx="12" cy="10" r="3" /></>,
  },
  {
    title: 'Personal especializado',
    text: 'El equipo del planetario guía las charlas y la observación, explicando lo que se ve en el cielo cada noche.',
    icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
  },
  {
    title: 'Mejor en noches despejadas',
    text: 'Abre desde las 21 h en verano. Se recomienda consultar el pronóstico, ya que las nubes impiden la observación.',
    icon: <><path d="M12 3v1m0 16v1M4.22 4.22l.7.7M19.07 4.22l-.7.7M1 12h1m20 0h1M4.22 19.78l.7-.7M19.07 19.78l-.7-.7" /><circle cx="12" cy="12" r="4" /></>,
  },
  {
    title: 'Telescopios profesionales',
    text: 'Cuatro telescopios permiten observar planetas como Venus y Júpiter, cráteres lunares, galaxias y nebulosas.',
    icon: <><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35M11 8v6M8 11h6" /></>,
  },
]

function FeatureIcon({ children }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">{children}</svg>
}

export default function PlanetarioContent() {
  return (
    <>
      <section className="content-section reveal in">
        <div className="section-eyebrow">Descripción</div>
        <h2>La Casa del Cielo</h2>
        <p>
          El Planetario Municipal Janaxpacha Huasi —«Casa del Cielo» en quechua— fue construido en 2011 entre los
          parajes de El Durazno y El Pantanito, en plena Sierra de Narváez, a unos 1.882 metros sobre el nivel del
          mar. Fue el primer planetario del país en llevar un nombre en una lengua originaria, un homenaje a los
          pueblos que habitan estas montañas desde hace siglos.
        </p>
        <p>
          El edificio se distribuye en varios niveles: una sala de proyección con capacidad para unas 60 personas
          donde el equipo del planetario explica los fenómenos del cielo nocturno, una planta con telescopios
          profesionales y, en lo más alto, una cúpula que se abre hacia el cielo para la observación directa.
          Gracias a la altura y a la escasa contaminación lumínica de la zona, Janaxpacha Huasi figura entre los
          diez destinos del país más recomendados para la observación astronómica.
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
          El planetario se encuentra a unos 150 km de San Fernando del Valle de Catamarca. Se toma la Ruta
          Provincial N° 1 hacia el norte, con asfalto hasta la localidad de Singuil, y luego se asciende por la
          cuesta de Las Chacritas, un camino de tierra sinuoso pero de buen paisaje. Al empalmar con la Ruta
          Provincial N° 48, ya pavimentada, se continúa hacia el norte hasta Buena Vista.
        </p>
        <p>
          Desde Buena Vista, un desvío de pocos kilómetros por camino provincial lleva directamente hasta la cúpula
          del planetario, en la Sierra de Narváez. Incluso desde el valle se puede distinguir su silueta al levantar
          la vista hacia la montaña.
        </p>
      </section>

      <div className="section-divider" />

      <section className="content-section reveal in">
        <div className="section-eyebrow">Equipamiento</div>
        <h2>Qué llevar para la visita</h2>
        <p>
          Como la actividad es nocturna y en altura, recomendamos abrigo en capas —las noches en la Sierra de
          Narváez son frías incluso en verano—, calzado cómodo y una linterna con luz roja para no afectar la
          adaptación de la vista a la oscuridad. Una cámara de fotos con trípode permite llevarse un recuerdo del
          cielo estrellado.
        </p>
      </section>
    </>
  )
}
