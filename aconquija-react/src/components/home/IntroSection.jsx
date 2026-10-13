import { useState } from 'react'
import { aconquijaLocalities } from '../../data/aconquijaMapData'
import AconquijaInteractiveMap from './AconquijaInteractiveMap'

const generalDescription = 'Aconquija es uno de esos lugares que sorprenden por su belleza y enamoran por su esencia. Un rincón privilegiado de Catamarca, donde las montañas, los bosques, los ríos y sus verdes paisajes crean postales únicas. Su riqueza no está solo en la naturaleza, sino también en su cultura, sus tradiciones y, sobre todo, en la calidez de su gente. Aconquija invita a conocer, recorrer y vivir cada paisaje, descubriendo un destino auténtico que guarda en cada rincón la esencia de Catamarca.'

export default function IntroSection() {
  const [selectedLocalityId, setSelectedLocalityId] = useState(null)
  const selectedLocality = aconquijaLocalities.find((locality) => locality.id === selectedLocalityId)

  return (
    <section className="intro">
      <div className="container intro-map-layout">
        <div className="intro-copy reveal">
          <div className="eyebrow">Aconquija - Catamarca - Argentina</div>
          <h2>{selectedLocality ? selectedLocality.name : '"La luz de la luna sobre la nieve en las alturas"'}</h2>
          <p className="lead reveal">
            {selectedLocality ? selectedLocality.description : generalDescription}
          </p>

          {selectedLocality && (
            <div className="locality-access-card" key={selectedLocality.id}>
              <span className="locality-access-label">ACCESO · DATO EN REVISIÓN</span>
              <p>{selectedLocality.access}</p>
              <small>{selectedLocality.coordinateStatus}</small>
              <button type="button" onClick={() => setSelectedLocalityId(null)}>
                Volver a la presentación general
              </button>
            </div>
          )}

          {!selectedLocality && (
            <div className="intro-stats">
              <div className="stat"><b>+5.500m</b><span>Altura de los Nevados</span></div>
              <div className="stat"><b>3.165</b><span>Habitantes</span></div>
              <div className="stat"><b>22</b><span>Localidades</span></div>
            </div>
          )}
        </div>

        <div className="intro-map-column reveal">
          <AconquijaInteractiveMap
            selectedLocalityId={selectedLocalityId}
            onSelect={setSelectedLocalityId}
          />
        </div>
      </div>
    </section>
  )
}
