import { useState } from 'react'
import { aconquijaLocalities, aconquijaRoadSegments } from '../../data/aconquijaMapData'

const mapRoadClass = {
  'principal-tierra': 'map-road map-road--dirt',
  'principal-revisar': 'map-road map-road--review',
  'principal-pavimento': 'map-road map-road--paved',
  secundario: 'map-road map-road--secondary',
  rural: 'map-road map-road--rural'
}

function LocalityMarker({ locality, selected, hovered, onSelect, onHover }) {
  const active = selected || hovered
  const labelWidth = Math.max(82, locality.name.length * 6.4 + 20)
  const labelX = locality.x > 555 ? locality.x - labelWidth - 13 : locality.x + 13
  const labelY = Math.max(32, locality.y - 30)
  return (
    <g
      className={`map-locality-marker ${selected ? 'is-selected' : ''} ${hovered ? 'is-hovered' : ''}`}
      role="button"
      tabIndex="0"
      aria-label={`Explorar localidad: ${locality.name}`}
      aria-pressed={selected}
      onClick={() => onSelect(locality.id)}
      onMouseEnter={() => onHover(locality.id)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(locality.id)}
      onBlur={() => onHover(null)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onSelect(locality.id)
        }
      }}
    >
      <circle className="map-marker-hit-area" cx={locality.x} cy={locality.y} r="17" />
      <circle className="map-marker-halo" cx={locality.x} cy={locality.y} r={selected ? 13 : 10} />
      <circle className="map-marker-dot" cx={locality.x} cy={locality.y} r={selected ? 5.5 : 4.5} />
      {active && (
        <g className="map-marker-label">
          <rect x={labelX} y={labelY} width={labelWidth} height="27" rx="8" />
          <text x={labelX + 10} y={labelY + 17.5}>{locality.name}</text>
        </g>
      )}
    </g>
  )
}

export default function AconquijaInteractiveMap({ selectedLocalityId, onSelect }) {
  const [hoveredId, setHoveredId] = useState(null)
  const activeId = hoveredId || selectedLocalityId

  return (
    <div className="aconquija-map-panel">
      <div className="aconquija-map-topline">
        <div>
          <span className="aconquija-map-eyebrow">MAPA DE LOCALIDADES</span>
          <p>Explorá los caminos de Aconquija</p>
        </div>
        <span className="aconquija-map-count">16 localidades</span>
      </div>

      <svg
        className="aconquija-map-svg"
        viewBox="0 0 760 620"
        role="group"
        aria-label="Mapa esquemático interactivo de Aconquija. Seleccioná uno de los puntos para ver la ficha de la localidad."
      >
        <defs>
          <clipPath id="aconquija-map-clip">
            <path d="M 347 42 C 395 28 444 48 479 70 C 521 88 554 118 578 157 C 606 192 642 223 664 263 C 685 301 690 337 673 373 C 659 407 635 438 609 466 C 583 494 568 532 532 557 C 498 581 458 575 421 565 C 379 555 349 580 312 572 C 275 565 251 544 225 520 C 194 493 159 484 137 455 C 111 421 114 390 101 358 C 85 321 75 291 91 261 C 107 229 129 203 154 179 C 177 151 188 122 224 105 C 260 88 296 58 347 42 Z" />
          </clipPath>
        </defs>

        <path
          className="map-boundary-shadow"
          d="M 347 42 C 395 28 444 48 479 70 C 521 88 554 118 578 157 C 606 192 642 223 664 263 C 685 301 690 337 673 373 C 659 407 635 438 609 466 C 583 494 568 532 532 557 C 498 581 458 575 421 565 C 379 555 349 580 312 572 C 275 565 251 544 225 520 C 194 493 159 484 137 455 C 111 421 114 390 101 358 C 85 321 75 291 91 261 C 107 229 129 203 154 179 C 177 151 188 122 224 105 C 260 88 296 58 347 42 Z"
        />
        <path
          className="map-boundary"
          d="M 347 42 C 395 28 444 48 479 70 C 521 88 554 118 578 157 C 606 192 642 223 664 263 C 685 301 690 337 673 373 C 659 407 635 438 609 466 C 583 494 568 532 532 557 C 498 581 458 575 421 565 C 379 555 349 580 312 572 C 275 565 251 544 225 520 C 194 493 159 484 137 455 C 111 421 114 390 101 358 C 85 321 75 291 91 261 C 107 229 129 203 154 179 C 177 151 188 122 224 105 C 260 88 296 58 347 42 Z"
        />

        <g clipPath="url(#aconquija-map-clip)">
          <path className="map-contour" d="M 76 170 C 180 110 252 126 325 100 S 482 87 602 145" />
          <path className="map-contour" d="M 72 192 C 174 132 258 147 326 121 S 486 109 623 166" />
          <path className="map-contour" d="M 72 215 C 177 154 259 171 335 144 S 499 135 647 190" />
          <path className="map-contour" d="M 80 245 C 177 186 270 197 345 170 S 508 165 672 218" />
          <path className="map-contour" d="M 78 290 C 181 233 274 238 357 214 S 523 215 686 270" />
          <path className="map-contour" d="M 80 324 C 181 267 278 276 366 247 S 534 254 692 304" />
          <path className="map-contour" d="M 86 359 C 190 302 284 311 373 284 S 539 292 690 342" />
          <path className="map-contour" d="M 105 397 C 204 341 298 346 386 321 S 543 329 677 380" />
          <path className="map-contour" d="M 124 433 C 220 380 310 382 397 356 S 542 365 656 415" />
          <path className="map-contour" d="M 154 469 C 244 419 323 416 409 392 S 535 401 626 448" />
          <path className="map-contour" d="M 197 505 C 268 462 345 453 420 430 S 524 435 592 480" />
          <path className="map-contour" d="M 241 535 C 305 500 369 488 435 469 S 510 475 560 515" />
          <path className="map-river" d="M 168 150 C 203 190 188 223 220 257 S 256 324 285 349 S 320 414 352 435 S 396 496 438 530" />
          <path className="map-river-secondary" d="M 584 155 C 555 192 552 224 570 251 S 584 301 615 326" />
        </g>

        <g aria-hidden="true">
          {aconquijaRoadSegments.map((road) => (
            <g key={road.id} className={mapRoadClass[road.category]}>
              <path className="map-road-casing" d={road.d} />
              <path className="map-road-line" d={road.d} />
            </g>
          ))}
          <g className="map-road-label" transform="translate(300 369) rotate(-2)">
            <rect width="63" height="23" rx="7" />
            <text x="31.5" y="15.2" textAnchor="middle">RP 48</text>
          </g>
          <g className="map-road-label map-road-label--secondary" transform="translate(213 428) rotate(32)">
            <rect width="67" height="22" rx="7" />
            <text x="33.5" y="14.5" textAnchor="middle">RP 114*</text>
          </g>
          <text className="map-north" x="696" y="72">N</text>
          <path className="map-north-arrow" d="M 696 82 L 696 104 M 690 91 L 696 82 L 702 91" />
        </g>

        {aconquijaLocalities.map((locality) => (
          <LocalityMarker
            key={locality.id}
            locality={locality}
            selected={selectedLocalityId === locality.id}
            hovered={activeId === locality.id}
            onSelect={onSelect}
            onHover={setHoveredId}
          />
        ))}
      </svg>

      <div className="aconquija-map-legend" aria-label="Referencias del mapa">
        <span><i className="legend-line legend-line--main" /> Ruta principal</span>
        <span><i className="legend-line legend-line--secondary" /> Camino secundario</span>
        <span><i className="legend-line legend-line--rural" /> Ramal rural en revisión</span>
      </div>
      <div className="aconquija-map-disclaimer">
        <span className="map-status-dot" />
        <p><strong>Borrador cartográfico.</strong> El contorno y los caminos secundarios son esquemáticos y deben corregirse con fuentes locales. No usar como GPS.</p>
      </div>
    </div>
  )
}
