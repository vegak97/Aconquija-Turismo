const infoRows = [
  { label: 'Duración', value: '1 a 2 horas por visita', icon: 'time' },
  { label: 'Dificultad', value: 'Sin dificultad — apto para todo público', icon: 'activity' },
]

function InfoIcon({ type }) {
  if (type === 'time') return <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>
  if (type === 'activity') return <><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></>
  if (type === 'location') return <><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>
  return <><rect x="1" y="4" width="22" height="16" rx="2" /><line x1="1" y1="10" x2="23" y2="10" /></>
}

export default function PlanetarioInfoCard() {
  return (
    <div className="info-card reveal in">
      <div className="info-card-header">
        <h3>Acerca de</h3>
      </div>
      <div className="info-rows">
        {infoRows.map(row => (
          <div className="info-row" key={row.label}>
            <div className="info-row-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><InfoIcon type={row.icon} /></svg></div>
            <div><div className="info-row-label">{row.label}</div><div className="info-row-val">{row.value}</div></div>
          </div>
        ))}
        <div className="info-row">
          <div className="info-row-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><InfoIcon type="location" /></svg></div>
          <div>
            <div className="info-row-label">Ubicación</div>
            <div className="info-row-val">
              Sierra de Narváez, entre El Durazno y El Pantanito<br />
              <a href="https://maps.app.goo.gl/46QQFjyDLjUptVsn8" target="_blank" rel="noreferrer">Ver en el mapa →</a>
            </div>
          </div>
        </div>
        <div className="info-row">
          <div className="info-row-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.28h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7a2 2 0 0 1 1.72 2.03z" /></svg></div>
          <div>
            <div className="info-row-label">Contacto</div>
            <div className="info-row-val"><a href="tel:+543834966977">+54 383 496-6977</a><br /><a href="mailto:Maxyz000@icloud.com">Maxyz000@icloud.com</a></div>
          </div>
        </div>
      </div>

      <div className="info-card-footer">
        <a className="btn-directions" href="https://www.google.com/maps/dir/?api=1&origin=-27.48365%2C-66.01757&destination=Planetario%20Janaxpacha%20Huasi%2C%20Sierra%20de%20Narv%C3%A1ez%2C%20Aconquija%2C%20Catamarca%2C%20Argentina&travelmode=driving" target="_blank" rel="noreferrer">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><polygon points="3 11 22 2 13 21 11 13 3 11" /></svg>
          Cómo llegar
        </a>
      </div>
    </div>
  )
}
