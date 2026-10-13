// Datos iniciales del mapa turístico de Aconquija.
// IMPORTANTE: x/y son posiciones esquemáticas para el primer borrador visual,
// no una proyección cartográfica ni coordenadas para navegación.
// Las coordenadas se guardan solo cuando se encontró una referencia preliminar.
// Las rutas secundarias se dibujan como hipótesis de trabajo para que puedan corregirse.

export const aconquijaLocalities = [
  {
    id: 'agua-palomas',
    name: 'Agua de las Palomas',
    x: 236, y: 396,
    coordinates: { lat: -27.62044, lon: -66.12383 },
    coordinateStatus: 'Referencia cartográfica preliminar; punto exacto por confirmar',
    access: 'RP 48 y conexión referenciada con RP 114; geometría exacta por revisar',
    description: 'Punto de referencia del recorrido de Aconquija. Estamos contrastando su ubicación y las conexiones con los caminos secundarios para completar una ficha local fiable.',
    route: 'RP 48'
  },
  {
    id: 'barranca-molle',
    name: 'Barranca Molle',
    x: 314, y: 540,
    coordinates: { lat: -27.68012, lon: -66.09303 },
    coordinateStatus: 'Referencia cartográfica preliminar; verificar que corresponda al paraje buscado y quede dentro del municipio',
    access: 'Acceso rural pendiente de confirmar en cartografía y con referencias locales',
    description: 'Localidad incorporada al mapa de trabajo. Su posición y el camino rural de acceso necesitan una comprobación específica antes de usar el mapa para orientarse.',
    route: 'Camino rural por verificar'
  },
  {
    id: 'espinillo',
    name: 'Espinillo',
    x: 204, y: 473,
    coordinates: { lat: -27.55736, lon: -66.13979 },
    coordinateStatus: 'Referencia cartográfica preliminar; punto exacto por confirmar',
    access: 'Conexión secundaria asociada a la zona de la RP 114; trazado por revisar',
    description: 'Estamos verificando el punto que representa a Espinillo y el recorrido secundario para llegar. El trazado del mapa es provisional y queda abierto a tus correcciones.',
    route: 'RP 114 / camino secundario por verificar'
  },
  {
    id: 'pampita',
    name: 'Pampita',
    x: 278, y: 450,
    coordinates: null,
    coordinateStatus: 'Ubicación esquemática; falta confirmar el punto exacto y la variante del nombre',
    access: 'Conexión secundaria hacia la zona de Agua de las Palomas; recorrido por verificar',
    description: 'Pampita está incluida según la lista que confirmaste. Falta contrastar su ubicación exacta y si la cartografía la registra también como Las Pampitas.',
    route: 'Camino secundario por verificar'
  },
  {
    id: 'pucara',
    name: 'Pucará',
    x: 128, y: 306,
    coordinates: null,
    coordinateStatus: 'Ubicación esquemática; distinguir la localidad del sitio arqueológico Pucará del Aconquija',
    access: 'Referencia del acceso por la Cuesta de la Chilca y la RP 48; punto exacto por confirmar',
    description: 'Pucará se muestra como referencia del sector de acceso por la Cuesta de la Chilca. Tenemos que confirmar que el punto del mapa represente la localidad que querés y no solamente el sitio arqueológico.',
    route: 'RP 48 / Cuesta de la Chilca'
  },
  {
    id: 'condor-huasi',
    name: 'Cóndor Huasi',
    x: 645, y: 340,
    coordinates: { lat: -27.58179, lon: -65.98134 },
    coordinateStatus: 'Referencia cartográfica preliminar; punto exacto por confirmar',
    access: 'Ramal secundario pendiente de validar',
    description: 'El punto de Cóndor Huasi se incorporó a partir de una referencia cartográfica preliminar. Falta comprobar la ubicación precisa y el camino que conecta con la red principal.',
    route: 'Camino secundario por verificar'
  },
  {
    id: 'alumbrera',
    name: 'Alumbrera',
    x: 444, y: 462,
    coordinates: null,
    coordinateStatus: 'Ubicación esquemática; falta localizar un punto cartográfico fiable',
    access: 'Ramal rural pendiente de verificar',
    description: 'Alumbrera figura en la lista de localidades confirmada. Su punto y la conexión vial deben contrastarse con datos cartográficos y referencias locales antes de cerrar el recorrido.',
    route: 'Camino rural por verificar'
  },
  {
    id: 'buena-vista',
    name: 'Buena Vista',
    x: 394, y: 392,
    coordinates: { lat: -27.50396, lon: -66.02311 },
    coordinateStatus: 'Referencia cartográfica preliminar; punto exacto por confirmar',
    access: 'RP 48; la fuente consultada indica pavimento desde Buena Vista hacia Río Potrero',
    description: 'Buena Vista es una referencia del corredor principal de la RP 48. Estamos usando el punto cartográfico como orientación inicial y revisaremos la posición exacta junto con el trazado de la ruta.',
    route: 'RP 48'
  },
  {
    id: 'el-alamito',
    name: 'El Alamito',
    x: 454, y: 349,
    coordinates: { lat: -27.49176, lon: -66.02048 },
    coordinateStatus: 'Referencia cartográfica preliminar; punto exacto por confirmar',
    access: 'Sobre el corredor de la RP 48 según referencias consultadas',
    description: 'El Alamito aparece sobre el corredor de la RP 48 en las referencias cartográficas consultadas. La posición dibujada es orientativa y se ajustará al contrastar la geometría vial.',
    route: 'RP 48'
  },
  {
    id: 'el-lindero',
    name: 'El Lindero',
    x: 492, y: 311,
    coordinates: null,
    coordinateStatus: 'Posición esquemática basada en su relación con localidades cercanas; coordenada por confirmar',
    access: 'Sobre el corredor de la RP 48 según referencias consultadas',
    description: 'El Lindero se representa en el corredor de la RP 48. Falta fijar una coordenada de referencia consistente y ajustar el camino con cartografía de mayor detalle.',
    route: 'RP 48'
  },
  {
    id: 'alto-juntas',
    name: 'Alto de las Juntas',
    x: 535, y: 270,
    coordinates: { lat: -27.45445, lon: -66.00549 },
    coordinateStatus: 'Referencia cartográfica preliminar; punto exacto por confirmar',
    access: 'Sobre el corredor de la RP 48 según referencias consultadas',
    description: 'Alto de las Juntas se incorpora como parte del recorrido principal. El punto y la continuidad de los caminos secundarios todavía deben contrastarse con la cartografía local.',
    route: 'RP 48'
  },
  {
    id: 'rio-pisavil',
    name: 'Río Pisavil',
    x: 410, y: 271,
    coordinates: null,
    coordinateStatus: 'Ubicación esquemática; falta confirmar si el punto representa la localidad, el río o un paraje',
    access: 'Camino de acceso pendiente de identificar',
    description: 'Río Pisavil se muestra como punto provisional. Antes de fijarlo necesitamos confirmar la referencia local exacta para no confundir el asentamiento con el curso de agua.',
    route: 'Camino secundario por verificar'
  },
  {
    id: 'las-rosas',
    name: 'Las Rosas',
    x: 572, y: 235,
    coordinates: { lat: -27.44562, lon: -66.00269 },
    coordinateStatus: 'Referencia cartográfica preliminar; punto exacto por confirmar',
    access: 'Ramal secundario dibujado de forma esquemática; recorrido por verificar',
    description: 'Las Rosas cuenta con una referencia cartográfica preliminar. El camino que la conecta con la red principal está dibujado de forma orientativa y debe verificarse.',
    route: 'Camino secundario por verificar'
  },
  {
    id: 'rio-potrero',
    name: 'Río Potrero',
    x: 600, y: 197,
    coordinates: { lat: -27.40028, lon: -65.97958 },
    coordinateStatus: 'Referencia cartográfica preliminar; punto exacto por confirmar',
    access: 'RP 48; la fuente consultada indica pavimento en el tramo desde Buena Vista hasta Río Potrero',
    description: 'Río Potrero es una referencia del corredor de la RP 48. La fuente consultada describe pavimento entre Buena Vista y Río Potrero; el trazado fino y los accesos locales quedan pendientes de comprobación.',
    route: 'RP 48'
  },
  {
    id: 'yunka-suma',
    name: 'Yunka Suma',
    x: 650, y: 164,
    coordinates: { lat: -27.39232, lon: -65.98418 },
    coordinateStatus: 'Referencia cartográfica preliminar; punto exacto por confirmar',
    access: 'Continuación referenciada de la RP 48; superficie y geometría exacta por verificar',
    description: 'Yunka Suma se incorpora como referencia del sector oriental del recorrido. Estamos verificando el punto exacto y el estado de los caminos de acceso más allá del tramo pavimentado documentado.',
    route: 'RP 48 / conexión por verificar'
  },
  {
    id: 'la-quinta',
    name: 'La Quinta',
    x: 548, y: 120,
    coordinates: null,
    coordinateStatus: 'Ubicación esquemática; falta confirmar el punto exacto',
    access: 'Ramal rural dibujado como hipótesis para revisar',
    description: 'La Quinta está incluida según tu lista. Falta identificar un punto cartográfico fiable y confirmar qué camino permite llegar desde la red principal.',
    route: 'Camino rural por verificar'
  }
];

export const aconquijaRoadSegments = [
  {
    id: 'rp48-cu esta',
    label: 'RP 48 · Cuesta de la Chilca / Pucará',
    category: 'principal-tierra',
    surface: 'La Cuesta de la Chilca se describe como camino sin pavimentar; la geometría exacta de este tramo debe comprobarse.',
    verification: 'Referencia documental parcial; traza esquemática',
    d: 'M 74 260 C 94 270 108 288 128 306'
  },
  {
    id: 'rp48-descenso',
    label: 'RP 48 · hacia Agua de las Palomas',
    category: 'principal-revisar',
    surface: 'Superficie y traza fina por verificar en este borrador.',
    verification: 'Conexión general documentada; geometría esquemática',
    d: 'M 128 306 C 164 326 196 366 236 396'
  },
  {
    id: 'rp48-valle-oeste',
    label: 'RP 48 · Agua de las Palomas–Buena Vista',
    category: 'principal-revisar',
    surface: 'Estado del pavimento por verificar.',
    verification: 'Conexión general referenciada; geometría esquemática',
    d: 'M 236 396 C 282 389 338 386 394 392'
  },
  {
    id: 'rp48-valle-pavimentado',
    label: 'RP 48 · Buena Vista–Río Potrero',
    category: 'principal-pavimento',
    surface: 'La fuente consultada describe este tramo como pavimentado; la línea del dibujo no reproduce la traza GPS exacta.',
    verification: 'Superficie referenciada; geometría esquemática',
    d: 'M 394 392 C 420 385 441 368 454 349 C 468 333 480 322 492 311 C 509 296 520 283 535 270 C 558 245 577 218 600 197'
  },
  {
    id: 'rp48-yunka',
    label: 'RP 48 · Río Potrero–Yunka Suma',
    category: 'principal-revisar',
    surface: 'Continuidad y superficie del tramo por verificar.',
    verification: 'Conexión general referenciada; geometría esquemática',
    d: 'M 600 197 C 616 186 631 174 650 164'
  },
  {
    id: 'rp114',
    label: 'RP 114 · conexión hacia Pampita y Espinillo',
    category: 'secundario',
    surface: 'Trazado exacto, denominación local y superficie por verificar.',
    verification: 'Conexión general mencionada en referencias; geometría esquemática',
    d: 'M 236 396 C 244 423 265 439 278 450 C 254 456 230 465 204 473'
  },
  {
    id: 'ramal-barranca-molle',
    label: 'Ramal rural hacia Barranca Molle',
    category: 'rural',
    surface: 'Camino y superficie pendientes de confirmación local.',
    verification: 'Hipótesis visual para revisión; no usar como navegación',
    d: 'M 236 396 C 258 448 290 498 314 540'
  },
  {
    id: 'ramal-alumbrera-condor',
    label: 'Ramal rural hacia Alumbrera y Cóndor Huasi',
    category: 'rural',
    surface: 'Conexiones, trazado y superficie pendientes de confirmación local.',
    verification: 'Hipótesis visual para revisión; no usar como navegación',
    d: 'M 394 392 C 410 421 428 445 444 462 C 502 444 585 399 645 340'
  },
  {
    id: 'ramal-pisavil',
    label: 'Ramal rural hacia Río Pisavil',
    category: 'rural',
    surface: 'Trazado y superficie pendientes de confirmación local.',
    verification: 'Hipótesis visual para revisión; no usar como navegación',
    d: 'M 492 311 C 462 300 435 287 410 271'
  },
  {
    id: 'ramal-las-rosas',
    label: 'Ramal rural hacia Las Rosas',
    category: 'rural',
    surface: 'Trazado y superficie pendientes de confirmación local.',
    verification: 'Hipótesis visual para revisión; no usar como navegación',
    d: 'M 535 270 C 548 255 560 244 572 235'
  },
  {
    id: 'ramal-la-quinta',
    label: 'Ramal rural hacia La Quinta',
    category: 'rural',
    surface: 'Trazado y superficie pendientes de confirmación local.',
    verification: 'Hipótesis visual para revisión; no usar como navegación',
    d: 'M 600 197 C 584 173 566 145 548 120'
  }
];

export const aconquijaMapSources = [
  {
    name: 'IGN — Capas SIG',
    url: 'https://www.ign.gob.ar/NuestrasActividades/InformacionGeoespacial/CapasSIG',
    use: 'Fuente prevista para contrastar límite municipal, red vial provincial, terciaria, huellas y sendas rurales.'
  },
  {
    name: 'Georef — base de gobiernos locales',
    url: 'https://www.argentina.gob.ar/georef/descarga-de-la-base-completa',
    use: 'Fuente prevista para contrastar geometrías de gobiernos locales y referencias territoriales.'
  },
  {
    name: 'OpenStreetMap',
    url: 'https://www.openstreetmap.org/',
    use: 'Contraste de caminos, cruces y nombres geográficos.'
  },
  {
    name: 'Referencia de la RP 48',
    url: 'https://es.wikipedia.org/wiki/Ruta_Provincial_48_(Catamarca)',
    use: 'Referencia secundaria para el recorrido de la RP 48 y el tramo descrito como pavimentado.'
  }
];
