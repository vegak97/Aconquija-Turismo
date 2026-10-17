const features = [
  {
    title: 'Tradición de más de 17 años',
    text: 'El festival ya lleva más de diecisiete ediciones consecutivas realizadas en Aconquija.',
    icon: <path d="M3 17l4-8 4 4 4-6 4 4" />,
  },
  {
    title: 'Un día completo',
    text: 'Se realiza durante una jornada, generalmente un sábado o domingo de mediados de enero.',
    icon: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
  },
  {
    title: 'Finca La Victoria',
    text: 'El escenario se monta en Cóndor Huasi, dentro del municipio de Aconquija.',
    icon: <><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" /><circle cx="12" cy="10" r="3" /></>,
  },
  {
    title: 'Grandes figuras del folclore',
    text: 'Artistas como el Chaqueño Palavecino compartieron escenario con referentes locales como Kaly Barrionuevo.',
    icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
  },
  {
    title: 'Todos los eneros',
    text: 'Abre la temporada de festivales de Aconquija, antes del Festival Mayor de fines de mes.',
    icon: <><path d="M12 3v1m0 16v1M4.22 4.22l.7.7M19.07 4.22l-.7.7M1 12h1m20 0h1M4.22 19.78l.7-.7M19.07 19.78l-.7-.7" /><circle cx="12" cy="12" r="4" /></>,
  },
  {
    title: 'Artesanías y gastronomía',
    text: 'Puestos de artesanos y comidas regionales acompañan la jornada musical.',
    icon: <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4 12 14.01l-3-3" /></>,
  },
]

function FeatureIcon({ children }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">{children}</svg>
}

export default function FiestaBandoneonContent() {
  return (
    <>
      <section className="content-section reveal in">
        <div className="section-eyebrow">Descripción</div>
        <h2>El fuelle catamarqueño tiene su fiesta</h2>
        <p>
          Cada mes de enero, la Finca La Victoria —en el paraje de Cóndor Huasi, municipio de Aconquija— se
          convierte en el escenario del Festival Provincial del Bandoneón, uno de los eventos folclóricos más
          esperados del verano catamarqueño. Con ediciones que ya superan las diecisiete convocatorias, la fiesta
          reúne a miles de personas en torno al bandoneón, instrumento central del folclore y el tango, y a lo que
          en la zona se conoce cariñosamente como "el fuelle catamarqueño".
        </p>
        <p>
          Por su escenario pasaron nombres consagrados del folclore nacional, como el Chaqueño Palavecino, junto a
          referentes locales como Kaly Barrionuevo, además de academias de danza y artistas de la región. La jornada
          combina música en vivo, artesanías y gastronomía típica, en un marco natural que le da identidad propia
          dentro de la temporada de festivales de Catamarca.
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
          El festival se realiza en la Finca La Victoria, en el paraje de Cóndor Huasi, dentro del municipio de
          Aconquija, departamento Andalgalá. Se llega tomando la Ruta Provincial N° 1 desde San Fernando del Valle
          de Catamarca hacia el norte, en dirección a Aconquija; desde el centro del pueblo hay cartelería y
          transporte organizado por la municipalidad hacia la finca durante la jornada del festival.
        </p>
        <p>
          La fecha exacta varía cada año (suele ser un fin de semana de mediados de enero), así que conviene
          confirmarla en la agenda oficial de turismo de Catamarca o en las redes del municipio antes de viajar.
        </p>
      </section>

      <div className="section-divider" />

      <section className="content-section reveal in">
        <div className="section-eyebrow">Recomendaciones</div>
        <h2>Qué llevar al festival</h2>
        <p>
          Como se trata de un evento al aire libre y de día, conviene sombrero o gorra, protector solar y agua.
          Muchas familias llevan reposera o manta para instalarse cómodas frente al escenario, y algo de dinero en
          efectivo para los puestos de artesanías y comidas típicas. Si vas a quedarte también para el atardecer,
          sumá un abrigo liviano para cuando refresca.
        </p>
      </section>
    </>
  )
}
