const infoRows = [
  { label: 'Duración', value: 'Caminata corta (15 a 30 minutos)', icon: 'time' },
  { label: 'Entrada', value: 'Libre y gratuita', icon: 'activity' },
]

function InfoIcon({ type }) {
  if (type === 'time') return <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>
  if (type === 'activity') return <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  if (type === 'location') return <><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>
  return <><rect x="1" y="4" width="22" height="16" rx="2" /><line x1="1" y1="10" x2="23" y2="10" /></>
}

export default function VirgenDelValleInfoCard() {
  const mapUrl = 'https://maps.google.com/?q=Virgen+del+Valle+Aconquija+Catamarca'
  return (
    <div className="info-card reveal in">
      <div className="info-card-header">
        <h3>Acerca de</h3>
      </div>
      <div className="info-rows">
        <div className="info-row info-season-row">
          <div className="info-row-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg></div>
          <div>
            <div className="info-row-label">Cuándo ir</div>
            <div className="info-row-val">
              <div className="season-badges">
          {['Verano', 'Otoño', 'Invierno', 'Primavera'].map(season => <span className="season-badge active" key={season}>{season}</span>)}
        </div>
              <div className="info-season-note">Todo el año</div>
            </div>
          </div>
        </div>
        
        {infoRows.map(row => (
          <div className="info-row" key={row.label}>
            <div className="info-row-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><InfoIcon type={row.icon} /></svg></div>
            <div><div className="info-row-label">{row.label}</div><div className="info-row-val">{row.value}</div></div>
          </div>
        ))}
        <div className="info-row">
          <div className="info-row-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><InfoIcon type="location" /></svg></div>
          <div><div className="info-row-label">Ubicación</div><div className="info-row-val">El Lindero, municipio de Aconquija<br /><a href={mapUrl} target="_blank" rel="noreferrer">Ver en el mapa →</a></div></div>
        </div>
        <div className="info-row">
          <div className="info-row-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><InfoIcon type="price" /></svg></div>
          <div><div className="info-row-label">Precio</div><div className="info-row-val">Sin costo</div></div>
        </div>
      </div>
      <div className="info-card-footer">
        <a className="btn-directions" href={mapUrl} target="_blank" rel="noreferrer">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><polygon points="3 11 22 2 13 21 11 13 3 11" /></svg>
          Cómo llegar
        </a>
      </div>
    </div>
  )
}
