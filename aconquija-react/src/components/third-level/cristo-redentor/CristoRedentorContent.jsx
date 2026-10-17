const features = [
  { title: 'Sendero fácil y corto', text: '1,3 km ida y vuelta, con 78 metros de desnivel positivo: entre 30 y 60 minutos de caminata.', icon: <path d="M3 17l4-8 4 4 4-6 4 4" /> },
  { title: 'El Lindero, 1.565 msnm', text: 'Considerado el centro estratégico de Aconquija, con destacamento policial y club deportivo.', icon: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></> },
  { title: 'Vista a los Nevados del Aconquija', text: 'Desde la cima se ven las cumbres y las mesadas cultivadas del valle.', icon: <><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" /><circle cx="12" cy="10" r="3" /></> },
  { title: 'Apto para toda la familia', text: 'Recorrido corto y señalizado, ideal para hacer en familia o con poca experiencia en trekking.', icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></> },
  { title: 'Cerca de la Virgen del Valle', text: 'Al otro lado del río se encuentra esta segunda imagen religiosa, otra caminata posible en la zona.', icon: <><path d="M12 3v1m0 16v1M4.22 4.22l.7.7M19.07 4.22l-.7.7M1 12h1m20 0h1M4.22 19.78l.7-.7M19.07 19.78l-.7-.7" /><circle cx="12" cy="12" r="4" /></> },
  { title: 'Bueno para fotografía nocturna', text: 'La escasa contaminación lumínica puede favorecer la observación del cielo estrellado.', icon: <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" /></> },
]

function FeatureIcon({ children }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">{children}</svg>
}

export default function CristoRedentorContent() {
  return (
    <>
      <section className="content-section reveal in">
        <div className="section-eyebrow">Descripción</div>
        <h2>El mirador que custodia el valle</h2>
        <p>En lo alto de una lomada en El Lindero —considerado el centro estratégico de Aconquija, a 1.565 metros sobre el nivel del mar— se encuentra el Cristo Redentor, una de las imágenes religiosas más visitadas de la zona y uno de los miradores naturales más completos del valle. Desde su cima se aprecian los Nevados del Aconquija, junto al verde de las mesadas donde se cultiva la tierra.</p>
        <p>El sendero sale cerca del centro cívico de El Lindero y sube zigzagueando hasta el mirador. Aunque la subida es constante, se trata de un recorrido corto que puede hacerse en familia. Al otro lado del río también se puede ver la Virgen del Valle. Por su altura y la ausencia de luces, el lugar puede ser un buen punto para la fotografía nocturna y observar el cielo sobre la Sierra de Narváez.</p>
      </section>
      <div className="feature-list reveal in">
        {features.map(feature => <article className="feature-item" key={feature.title}><div className="feature-icon"><FeatureIcon>{feature.icon}</FeatureIcon></div><div><h4>{feature.title}</h4><p>{feature.text}</p></div></article>)}
      </div>
      <div className="section-divider" />
      <section className="content-section reveal in">
        <div className="section-eyebrow">Cómo llegar</div>
        <h2>Acceso al Cristo Redentor</h2>
        <p>El Cristo Redentor se encuentra en El Lindero, una de las localidades centrales de Aconquija, a orillas del Río del Campo. Desde San Fernando del Valle de Catamarca se toma la Ruta Provincial N.º 1 hacia el norte; también se puede acceder por la Cuesta del Clavillo desde Concepción, Tucumán, si se llega desde el norte.</p>
        <p>El sendero sale cerca del centro cívico de El Lindero y asciende por la lomada hasta el mirador donde se encuentra la imagen. Es un trayecto corto y señalizado que no requiere experiencia previa en trekking.</p>
      </section>
      <div className="section-divider" />
      <section className="content-section reveal in">
        <div className="section-eyebrow">Recomendaciones</div>
        <h2>Qué llevar al Cristo Redentor</h2>
        <p>Como la subida es corta pero constante, conviene llevar calzado cómodo, agua y protector solar, sobre todo al mediodía. Una cámara permite disfrutar de las vistas panorámicas; si planeás quedarte hasta la noche, sumá abrigo y una linterna.</p>
      </section>
    </>
  )
}
