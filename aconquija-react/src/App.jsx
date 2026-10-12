import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

const approvedRoutes = [
  { path: '/', title: 'Inicio' },
  { path: '/circuitos/respira-verde', title: 'Aconquija Respira Verde' },
  { path: '/circuitos/cultiva-tradicion', title: 'Cultiva Tradición' },
  { path: '/lugares/planetario-janaxpacha-huasi', title: 'Planetario Janaxpacha Huasi' },
  { path: '/lugares/pucara-de-aconquija', title: 'Pucará de Aconquija' },
  { path: '/lugares/balneario-municipal-buena-vista', title: 'Balneario Municipal Buena Vista' },
  { path: '/lugares/bosque-de-alisos', title: 'Bosque de Alisos' },
  { path: '/lugares/cristo-redentor', title: 'Cristo Redentor de Aconquija' },
  { path: '/eventos/desfile-civico-escolar', title: 'Desfile Cívico Escolar' },
  { path: '/eventos/festival-mayor', title: 'Festival Mayor de Aconquija' },
  { path: '/eventos/fiesta-del-bandoneon', title: 'Festival Provincial del Bandoneón' },
  { path: '/lugares/rio-potrero', title: 'Río Potrero' },
  { path: '/lugares/tuneles-del-rio-potrero', title: 'Túneles del Río Potrero' },
  { path: '/lugares/virgen-del-valle', title: 'Virgen del Valle de Aconquija' },
  { path: '/lugares/yunka-suma', title: 'Yunka Suma' },
]

function PagePlaceholder({ title }) {
  return (
    <main className="page-placeholder" aria-labelledby="page-title">
      <p className="page-placeholder__eyebrow">Aconquija Turismo</p>
      <h1 id="page-title">{title}</h1>
      <p className="page-placeholder__message">
        Esta ruta forma parte del mapa aprobado. El contenido original de esta página
        se incorporará durante la etapa correspondiente de la migración.
      </p>
      <Link className="page-placeholder__link" to="/">
        Volver al inicio
      </Link>
    </main>
  )
}

function NotFound() {
  return (
    <main className="page-placeholder" aria-labelledby="page-title">
      <p className="page-placeholder__eyebrow">Aconquija Turismo</p>
      <h1 id="page-title">Página no encontrada</h1>
      <p className="page-placeholder__message">
        Esta dirección no forma parte del mapa aprobado de páginas.
      </p>
      <Link className="page-placeholder__link" to="/">
        Volver al inicio
      </Link>
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {approvedRoutes.map(({ path, title }) => (
          <Route key={path} path={path} element={<PagePlaceholder title={title} />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
