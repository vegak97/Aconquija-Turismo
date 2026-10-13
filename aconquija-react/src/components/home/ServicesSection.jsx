export default function ServicesSection() {
  return (
    <section className="servicios" id="servicios">
      <div className="container">
        <div className="section-head reveal">
          <div><div className="eyebrow">Servicios</div><h2>Todo lo que necesitás para quedarte</h2></div>
          <p>Alojamiento, gastronomía y guías locales para armar tu estadía sin vueltas.</p>
        </div>
        <div className="serv-grid reveal">
          <a className="serv-item" href="#sobre">
            <div className="num">01</div><h4>Dónde dormir</h4>
            <p>Posadas de montaña, cabañas y hospedajes familiares con vista a la sierra.</p>
            <div className="serv-icon" aria-hidden="true"><svg viewBox="0 0 48 48" fill="none"><path d="M6 22.5 24 8l18 14.5M11 20v20h26V20M20 40V27h8v13" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
          </a>
          <a className="serv-item" href="#sobre">
            <div className="num">02</div><h4>Dónde comer</h4>
            <p>Cocina regional, cabrito de monte y productos de huerta de cercanía.</p>
            <div className="serv-icon" aria-hidden="true"><svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="17" stroke="currentColor" strokeWidth="1.7"/><circle cx="24" cy="24" r="12.5" stroke="currentColor" strokeWidth="1.4"/><path d="M11 10v8M8.5 10v5.5a2.5 2.5 0 0 0 5 0V10M11 18v19M37 10c-3.1 2.8-4 6.2-4 10v4h4V10ZM37 24v13" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
          </a>
          <a className="serv-item" href="#sobre">
            <div className="num">03</div><h4>Guías y excursiones</h4>
            <p>Baqueanos certificados para trekking, cabalgatas y travesías de altura.</p>
            <div className="serv-icon" aria-hidden="true"><svg viewBox="0 0 48 48" fill="none"><path d="M5 17 14 7l8 10 7-7 14 12-2 17H7L5 17Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/><path d="m5 17 9-3 8 3 7-7M7 39l9-9 6 3 8-7 11 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M13 23c4-3 7-2 10 1s5 5 8 2 3-5 7-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2.2 2.8"/><path d="m34 19 4 3-1 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
          </a>
          <a className="serv-item" href="#sobre">
            <div className="num">04</div><h4>Artesanías</h4>
            <p>Tejidos en telar, cerámica y productos regionales hechos a mano.</p>
            <div className="serv-icon" aria-hidden="true"><svg viewBox="0 0 48 48" fill="none"><path d="M16 9h16l-2 7 5 6-3 15H16l-3-15 5-6-2-7ZM18 16h12M17 25h14M20 31h8M9 12l4 4M39 12l-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
          </a>
        </div>
      </div>
    </section>
  )
}
