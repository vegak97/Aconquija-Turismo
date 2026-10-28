const infoRows = [
  { label: 'Duración orientativa', value: '2 a 4 horas', icon: 'time' },
  { label: 'Experiencia', value: 'Recorrido a caballo con baqueanos locales', icon: 'activity' },
  { label: 'Circuito', value: 'Respira Verde, Aconquija', icon: 'location' },
]

function InfoIcon({ type }) {
  if (type === 'time') return <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>
  if (type === 'activity') return <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  return <><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>
}

export default function CabalgatasInfoCard() {
  return (
    <div className="info-card reveal in">
      <div className="info-card-header"><h3>Acerca de</h3></div>
      <div className="info-rows">
        {infoRows.map(row => (
          <div className="info-row" key={row.label}>
            <div className="info-row-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <InfoIcon type={row.icon} />
              </svg>
            </div>
            <div>
              <div className="info-row-label">{row.label}</div>
              <div className="info-row-val">{row.value}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="info-card-footer">
        <a className="btn-directions cabalgatas-contact" href="https://wa.me/5493834966977" target="_blank" rel="noreferrer">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
            <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20l1.2-5.2A8.4 8.4 0 1 1 21 11.5Z" />
            <path d="M8.5 9.2c.4 2 2 3.7 4.1 4.3l1.2-1.1 2 .9c-.1 1-.8 1.7-1.8 1.8-3.8-.3-6.7-3.3-7-7 .1-.9.8-1.6 1.8-1.7l.9 2Z" />
          </svg>
          Consultar por WhatsApp
        </a>
      </div>
    </div>
  )
}
