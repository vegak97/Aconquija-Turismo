import { useState } from 'react'
import { seasons } from '../../data/homeData'

export default function SeasonsSection() {
  const [activeSeason, setActiveSeason] = useState('verano')

  return (
    <section className="estaciones" id="estaciones">
      <div className="container">
        <div className="section-head reveal">
          <div><div className="eyebrow">Cuándo venir</div><h2>Aconquija cambia con cada estación</h2></div>
          <p>Cada momento del año tiene su propia versión. Elegí la que te llama.</p>
        </div>
        <div className="est-tabs reveal" role="tablist" aria-label="Estaciones del año">
          {seasons.map((season) => <button className={`est-tab${activeSeason === season.id ? ' active' : ''}`} type="button" role="tab" aria-selected={activeSeason === season.id} aria-controls={`panel-${season.id}`} key={season.id} onClick={() => setActiveSeason(season.id)}>{season.label}<span className="est-tab-underline" aria-hidden="true" /></button>)}
        </div>
        <div className="est-panels reveal">
          {seasons.map((season) => (
            <div className={`est-panel${activeSeason === season.id ? ' active' : ''}`} id={`panel-${season.id}`} role="tabpanel" key={season.id} hidden={activeSeason !== season.id}>
              <div><div className={`est-eyebrow${season.id === 'verano' ? ' season-date--summer' : ''}`}>{season.dates}</div><h3 className={season.id === 'verano' ? 'season-title--summer' : undefined}>{season.title}</h3><p>{season.text}</p></div>
              <img src={season.image} alt={season.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
