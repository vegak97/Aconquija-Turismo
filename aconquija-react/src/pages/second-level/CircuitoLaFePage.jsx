import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import '../../styles/circuito-la-fe.css'

const churches = [
  {
    id: 'alumbrera',
    locality: 'Alumbrera',
    title: 'Iglesia Nuestra Señora del Rosario',
    introduction:
      'Esta iglesia permite acercarnos a la historia de Alumbrera, que junto con El Suncho se destacaba entre los principales núcleos de población de Aconquija a fines del siglo XIX, según la reconstrucción histórica local reunida.',
    details: [
      {
        label: 'Origen',
        text: 'Los antecedentes recopilados sitúan la donación del terreno el 12 de agosto de 1883, realizada por Vicente Gutiérrez y María Natividad Perea. La capilla quedó terminada en 1884.',
      },
      {
        label: 'Patrimonio',
        text: 'En 2024 fue declarada Monumento Histórico de la Provincia de Catamarca mediante la Ley N.º 5867. La publicación en el Digesto provincial figura con fecha 8 de noviembre de 2024.',
      },
    ],
    note: 'Su historia vincula el origen de la capilla con la vida comunitaria de Alumbrera y la memoria de las familias del poblado.',
  },
  {
    id: 'charquiadero',
    locality: 'El Charquiadero',
    title: 'Capilla del Señor',
    introduction:
      'La historia de esta capilla reúne la fe, la organización vecinal y el trabajo artesanal. La memoria de la comunidad permite reconocer a las personas que aportaron el terreno, los materiales y sus oficios.',
    details: [
      {
        label: 'Origen comunitario',
        text: 'Hacia 1979, Marta Forté convocó a los vecinos a partir de un pedido de su tía Dora Córdoba Navarro y donó el terreno. Las familias colaboraron con adobes, materiales, trabajo y actividades para reunir fondos; también participaron veraneantes y la Municipalidad de Aconquija.',
      },
      {
        label: 'Materiales y obras',
        text: 'Se utilizaron adobe, barro y piedra; el piso es de lajas negras y la cubierta combina cañas con maderas de aliso y quebracho colorado. Marta Forté modeló el Cristo central y pintó los cuadros del Vía Crucis, tallados por Clemente Miranda. Julio Sáez realizó la campana.',
      },
      {
        label: 'Celebración y restauración',
        text: 'La primera celebración recordada por la comunidad fue la Misa de Gallo del 24 de diciembre de 1985. En 2015, una restauración impulsada por los vecinos incorporó trabajos en piedra tallados y donados por Ángel Espinosa.',
      },
    ],
    note: 'Cada elemento conserva la memoria de las personas que participaron en la construcción y el cuidado de la capilla.',
  },
]

function ChurchImagePlaceholder({ locality }) {
  return (
    <div
      className="la-fe-card__image-placeholder"
      role="img"
      aria-label={`Espacio reservado para una fotografía de la iglesia de ${locality}`}
    >
      <span className="la-fe-card__placeholder-mark" aria-hidden="true">
        <span />
        <span />
      </span>
      <span className="la-fe-card__placeholder-label">Fotografía de la iglesia</span>
    </div>
  )
}

function ChurchCard({ church, index }) {
  return (
    <article className={`la-fe-card la-fe-card--${church.id}`}>
      <ChurchImagePlaceholder locality={church.locality} />
      <div className="la-fe-card__content">
        <p className="la-fe-card__eyebrow">
          <span>0{index + 1}</span>
          {church.locality}
        </p>
        <h2>{church.title}</h2>
        <p className="la-fe-card__introduction">{church.introduction}</p>

        <div className="la-fe-card__details">
          {church.details.map((detail) => (
            <section className="la-fe-card__detail" key={detail.label}>
              <h3>{detail.label}</h3>
              <p>{detail.text}</p>
            </section>
          ))}
        </div>

        <p className="la-fe-card__note">{church.note}</p>
      </div>
    </article>
  )
}

export default function CircuitoLaFePage() {
  return (
    <>
      <Header />
      <main className="circuito-la-fe-page">
        <header className="la-fe-heading">
          <p className="la-fe-heading__eyebrow">Aconquija · Circuito de la Fe</p>
          <h1>Dos iglesias, dos historias</h1>
          <p className="la-fe-heading__description">
            Un recorrido por la memoria de las comunidades de Alumbrera y El Charquiadero,
            a través de sus iglesias y de las personas que ayudaron a construirlas y conservarlas.
          </p>
          <span className="la-fe-heading__rule" aria-hidden="true" />
        </header>

        <section className="la-fe-cards" aria-label="Iglesias del Circuito de la Fe">
          {churches.map((church, index) => (
            <ChurchCard church={church} index={index} key={church.id} />
          ))}
        </section>
        <p className="la-fe-source">
          Información basada en el cuadernillo de estudio y práctica para guías «Circuito de la Fe»,
          edición del 14 de octubre de 2026.
        </p>
      </main>
      <Footer />
    </>
  )
}
