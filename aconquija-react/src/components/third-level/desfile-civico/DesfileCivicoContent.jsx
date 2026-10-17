const features = [
  {
    title: 'Participan todas las escuelas',
    text: 'Desfilan las escuelas primarias de los distintos poblados de Aconquija y los secundarios de El Alamito y Yunka Suma.',
    icon: <path d="M3 17l4-8 4 4 4-6 4 4" />,
  },
  {
    title: 'Vecinos a caballo',
    text: 'Miembros de la comunidad se suman al desfile montados a caballo, sumando color a la jornada.',
    icon: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
  },
  {
    title: 'Con presencia policial',
    text: 'Contingentes de la policía también forman parte del desfile, junto a las instituciones educativas.',
    icon: <><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" /><circle cx="12" cy="10" r="3" /></>,
  },
  {
    title: 'Feria al terminar el desfile',
    text: 'Después del recorrido se arma una pequeña feria con puestos de comida donde quedarse un rato más.',
    icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
  },
  {
    title: 'Fecha variable',
    text: 'Al ser parte de la agenda de verano, la fecha exacta cambia cada año; conviene confirmarla antes de viajar.',
    icon: <><path d="M12 3v1m0 16v1M4.22 4.22l.7.7M19.07 4.22l-.7.7M1 12h1m20 0h1M4.22 19.78l.7-.7M19.07 19.78l-.7-.7" /><circle cx="12" cy="12" r="4" /></>,
  },
  {
    title: 'Una mirada a la vida del pueblo',
    text: 'Un buen momento para conocer la faceta más comunitaria de Aconquija, más allá de sus paisajes.',
    icon: <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4 12 14.01l-3-3" /></>,
  },
]

function FeatureIcon({ children }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">{children}</svg>
}

export default function DesfileCivicoContent() {
  return (
    <>
      <section className="content-section reveal in">
        <div className="section-eyebrow">Descripción</div>
        <h2>Un clásico de la agenda veraniega</h2>
        <p>
          Cada enero, mientras el pueblo se llena de turistas y las familias de la zona reciben las vacaciones de
          verano, la explanada frente al Complejo Municipal de Aconquija —en El Lindero— es escenario del Desfile
          Cívico Escolar. Se trata de uno de los puntos fijos dentro de la agenda de actividades de verano que
          organiza el municipio, y de los más convocantes: participan todas las escuelas de Aconquija, desde las
          primarias de los distintos poblados hasta los secundarios, como el de El Alamito y el de Yunka Suma. La
          fecha exacta varía según el año, así que conviene confirmarla antes de viajar.
        </p>
        <p>
          Además de las instituciones educativas, del desfile también forman parte vecinos de la comunidad que
          participan a caballo, y contingentes de la policía. Al terminar el recorrido, en el mismo predio se arma
          una pequeña feria donde se puede comer algo y quedarse un rato más, en un cierre distendido para una
          mañana que combina lo cívico con el encuentro vecinal.
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

      <div className="section-divider reveal in" />

      <section className="content-section reveal in">
        <div className="section-eyebrow">Cómo llegar</div>
        <h2>Dónde y cuándo verlo</h2>
        <p>
          El Complejo Municipal de Aconquija se encuentra en El Lindero, sobre la Ruta Provincial N° 48, en el
          corazón del pueblo. Se llega tomando la Ruta Provincial N° 1 hacia el norte desde San Fernando del Valle
          de Catamarca, o desde Andalgalá subiendo la Cuesta de La Chilca.
        </p>
        <p>
          Como el desfile se ubica dentro de la agenda de verano del municipio, la fecha exacta puede variar de un
          año a otro (suele caer hacia fines de enero). Conviene confirmarla con anticipación en la agenda oficial
          de Turismo Catamarca o en las redes de la Municipalidad de Aconquija antes de organizar el viaje.
        </p>
      </section>

      <div className="section-divider reveal in" />

      <section className="content-section reveal in">
        <div className="section-eyebrow">Recomendaciones</div>
        <h2>Qué llevar al Desfile Cívico</h2>
        <p>
          Como se trata de una actividad al aire libre y de día, conviene sombrero o gorra, protector solar y algo
          de agua. Llevá también algo de dinero en efectivo para la feria que se arma al terminar el desfile, donde
          se puede comer algo y quedarse un rato más disfrutando del ambiente.
        </p>
      </section>
    </>
  )
}
