export default function ServicesSection() {
  return (
    <section className="servicios" id="servicios">
      <div className="container">
        <div className="section-head reveal">
          <div><div className="eyebrow">Servicios</div><h2>Todo lo que necesitás para tu visita</h2></div>
          <p>Alojamientos, gastronomía y comercios locales para acompañarte durante tu estadía.</p>
        </div>
        <div className="serv-grid reveal">
          <a className="serv-item" href="/servicios">
            <div className="num">01</div><h4>Dónde dormir</h4>
            <p>Cabañas, hoteles, hospedajes, hosterías y alquileres en Aconquija.</p>
            <div className="serv-icon" aria-hidden="true"><svg viewBox="0 0 48 48" fill="none"><path d="M6 22.5 24 8l18 14.5M11 20v20h26V20M20 40V27h8v13" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
          </a>
          <a className="serv-item" href="/servicios">
            <div className="num">02</div><h4>Dónde comer</h4>
            <p>Restaurantes, bares, sandwicherías, pizzerías y lugares de comida.</p>
            <div className="serv-icon" aria-hidden="true"><svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="17" stroke="currentColor" strokeWidth="1.7"/><circle cx="24" cy="24" r="12.5" stroke="currentColor" strokeWidth="1.4"/><path d="M11 10v8M8.5 10v5.5a2.5 2.5 0 0 0 5 0V10M11 18v19M37 10c-3.1 2.8-4 6.2-4 10v4h4V10ZM37 24v13" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
          </a>
          <a className="serv-item" href="/servicios">
            <div className="num">03</div><h4>Comercios y compras</h4>
            <p>Tiendas, artesanías, productos regionales y comercios de la zona.</p>
            <div className="serv-icon" aria-hidden="true"><svg viewBox="0 0 48 48" fill="none"><path d="M7 18h34l-3-10H10L7 18ZM10 18v22h28V18M18 40V27h12v13M7 18c0 4 6 5 8 1 2 4 8 4 10 0 2 4 8 4 10 0 2 4 6 3 6-1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
          </a>
        </div>
      </div>
    </section>
  )
}
