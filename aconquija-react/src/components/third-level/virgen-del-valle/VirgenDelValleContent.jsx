const features = [
  { title: 'Frente al Cristo Redentor', text: 'Se encuentra al otro lado del Río del Campo, en la lomada opuesta a la del Cristo Redentor.', icon: <path d="M3 17l4-8 4 4 4-6 4 4" /> },
  { title: 'El Lindero, 1.565 msnm', text: 'Muy cerca del Complejo Habitacional Municipal y del Destacamento Policial, el centro estratégico de Aconquija.', icon: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></> },
  { title: 'Patrona de Catamarca', text: 'La Virgen del Valle es la patrona de la provincia; su fiesta se celebra cada 8 de diciembre.', icon: <><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" /><circle cx="12" cy="10" r="3" /></> },
  { title: 'Parte de la Semana Santa', text: 'La capilla de El Lindero es escenario de celebraciones y adoraciones durante la Semana Santa en Aconquija.', icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></> },
  { title: 'Entre barrancas', text: 'La escultura está próxima al borde de las barrancas que el Río del Campo fue esculpiendo con su erosión.', icon: <><path d="M12 3v1m0 16v1M4.22 4.22l.7.7M19.07 4.22l-.7.7M1 12h1m20 0h1M4.22 19.78l.7-.7M19.07 19.78l-.7-.7" /><circle cx="12" cy="12" r="4" /></> },
  { title: 'Combinable con el Cristo Redentor', text: 'Muchos visitantes recorren ambas imágenes religiosas en la misma jornada, cruzando el río entre una y otra.', icon: <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" /></> },
]

function FeatureIcon({ children }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">{children}</svg>
}

export default function VirgenDelValleContent() {
  return (
    <>
      <section className="content-section reveal in">
        <div className="section-eyebrow">Descripción</div>
        <h2>La otra imagen que mira al valle</h2>
        <p>Cruzando el Río del Campo, justo enfrente del Cristo Redentor y muy cerca del Complejo Habitacional Municipal de El Lindero, se levanta una gran escultura de la Virgen del Valle, construida sobre otra lomada del mismo valle. Junto con el Cristo, forma parte del paisaje religioso que “custodia” a El Lindero, la localidad considerada el centro estratégico de Aconquija.</p>
        <p>La Virgen del Valle es, además, la patrona de la provincia de Catamarca: su devoción se celebra cada 8 de diciembre en la catedral de la capital provincial, y también forma parte de las festividades de Semana Santa que se viven en las distintas capillas de Aconquija, incluida la de El Lindero. Visitarla implica una breve caminata cruzando el río desde el pueblo, entre las barrancas que el propio Río del Campo fue esculpiendo con los años, y es un paseo que suele combinarse con la subida al Cristo Redentor en la misma jornada.</p>
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
        <h2>Acceso a la Virgen del Valle</h2>
        <p>La escultura se encuentra en El Lindero, muy cerca del Complejo Habitacional Municipal y del Cristo Redentor. Se llega tomando la Ruta Provincial N.º 1 hacia el norte desde San Fernando del Valle de Catamarca, o por la Cuesta del Clavillo desde Concepción, Tucumán, para quienes vienen desde el norte.</p>
        <p>Desde el pueblo hay que cruzar el Río del Campo para llegar a la lomada donde está emplazada la imagen, un trayecto corto que muchos visitantes combinan con la caminata al Cristo Redentor, ubicado justo enfrente.</p>
      </section>
      <div className="section-divider" />
      <section className="content-section reveal in">
        <div className="section-eyebrow">Recomendaciones</div>
        <h2>Qué llevar a la Virgen del Valle</h2>
        <p>Al cruzar el río y caminar cerca de las barrancas conviene llevar calzado cerrado y con buen agarre, además de agua y protector solar si se hace durante el día. Como el paseo suele combinarse con la subida al Cristo Redentor, una cámara de fotos es una buena compañía para aprovechar las vistas de ambos puntos del valle.</p>
      </section>
    </>
  )
}
