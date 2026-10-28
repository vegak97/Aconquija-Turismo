const features = [
  {
    title: 'Una forma tradicional de recorrer la sierra',
    text: 'Las cabalgatas permiten conocer los caminos y parajes del circuito Respira Verde a caballo, acompañados por baqueanos de la zona.',
    icon: <path d="M3 17l4-8 4 4 4-6 4 4" />,
  },
  {
    title: 'Recorridos de 2 a 4 horas',
    text: 'La duración orientativa indicada para esta experiencia es de dos a cuatro horas. El trayecto concreto se coordina antes de salir.',
    icon: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
  },
  {
    title: 'Paisajes de Respira Verde',
    text: 'El circuito reúne caminos de montaña, vegetación de yungas y parajes rurales que invitan a descubrir el entorno con otro ritmo.',
    icon: <><path d="M3 20 9 8l4 7 3-5 5 10Z" /><path d="M3 20h18" /></>,
  },
  {
    title: 'Acompañamiento local',
    text: 'La propuesta contempla el acompañamiento de baqueanos locales, que conocen los caminos de la zona.',
    icon: <><circle cx="12" cy="8" r="4" /><path d="M4 21v-2a8 8 0 0 1 16 0v2" /></>,
  },
]

function FeatureIcon({ children }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">{children}</svg>
}

export default function CabalgatasContent() {
  return (
    <>
      <section className="content-section reveal in">
        <div className="section-eyebrow">Descripción</div>
        <h2>La sierra, al ritmo del caballo</h2>
        <p>
          En el circuito Respira Verde, las cabalgatas ofrecen una manera tradicional de recorrer los caminos
          entre los parajes de Aconquija. Acompañado por baqueanos de la zona, el paseo permite disfrutar el
          paisaje de montaña y la vegetación que caracteriza a este sector del valle.
        </p>
        <p>
          La duración orientativa es de dos a cuatro horas. El recorrido específico y la salida deben coordinarse
          con los guías locales, según la propuesta disponible y las condiciones del camino.
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
        <div className="section-eyebrow">Organizá la salida</div>
        <h2>Consultá antes de partir</h2>
        <p>
          Para conocer los recorridos disponibles, el punto de encuentro y las condiciones de la salida,
          coordiná previamente con los guías locales. Así podrás elegir una propuesta adecuada para tu visita.
        </p>
      </section>
    </>
  )
}
