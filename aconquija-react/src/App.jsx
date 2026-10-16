import './App.css'
import { useLayoutEffect, useRef } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PlanetarioPage from './pages/second-level/PlanetarioPage'
import PucaraPage from './pages/second-level/PucaraPage'
import PagePlaceholder from './pages/PagePlaceholder'
import NotFound from './pages/NotFound'
import SpotifyFloatingPlayer from './components/ui/SpotifyFloatingPlayer'
import { approvedRoutes } from './data/routes'

const planetarioPath = '/lugares/planetario-janaxpacha-huasi'
const pucaraPath = '/lugares/pucara-de-aconquija'

function ScrollToTop() {
  const { pathname } = useLocation()
  const previousPathname = useRef(pathname)

  useLayoutEffect(() => {
    // En la primera carga no se toca el scroll: así el navegador puede conservar
    // la posición al recargar. Solo se sube al principio al cambiar de ruta.
    if (previousPathname.current === pathname) return

    previousPathname.current = pathname
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])


  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={planetarioPath} element={<PlanetarioPage />} />
        <Route path={pucaraPath} element={<PucaraPage />} />
        {approvedRoutes
          .filter(({ path }) => path !== planetarioPath && path !== pucaraPath)
          .map(({ path, title }) => <Route key={path} path={path} element={<PagePlaceholder title={title} />} />)}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <SpotifyFloatingPlayer />
    </BrowserRouter>
  )
}
