import { Link } from 'react-router-dom'
import { circuitCards } from '../../data/homeData'

export default function ExploreSection() {
  return (
    <section className="explorar" id="explorar">
      <div className="container">
        <div className="section-head reveal">
          <div><div className="eyebrow">Qué hacer</div><h2>Explorá Aconquija a tu manera</h2></div>
          <p>Recorré Aconquija a través de nuestros circuitos turísticos, diseñados para que vivas una experiencia inolvidable.</p>
        </div>
        <div className="card-grid reveal">
          {circuitCards.map((card) => (
            <Link className="exp-card" to={card.path} key={card.path}>
              <img src={card.image} alt={card.alt} />
              <div className="overlay" />
              <div className="arrow" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M7 17L17 7M9 7h8v8" /></svg></div>
              <div className="text"><div className="tag" /><h3 /><p /></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
