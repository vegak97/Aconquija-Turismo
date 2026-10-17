import './App.css'
import { useLayoutEffect, useRef } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PlanetarioPage from './pages/second-level/PlanetarioPage'
import PucaraPage from './pages/second-level/PucaraPage'
import CultivaTradicionPage from './pages/second-level/CultivaTradicionPage'
import RespiraVerdePage from './pages/second-level/RespiraVerdePage'
import TunelesRioPotreroPage from './pages/third-level/TunelesRioPotreroPage'
import BosqueDeAlisosPage from './pages/third-level/BosqueDeAlisosPage'
import RioPotreroPage from './pages/third-level/RioPotreroPage'
import YunkaSumaPage from './pages/third-level/YunkaSumaPage'
import PagePlaceholder from './pages/PagePlaceholder'
import NotFound from './pages/NotFound'
import SpotifyFloatingPlayer from './components/ui/SpotifyFloatingPlayer'
import { approvedRoutes } from './data/routes'

const planetarioPath = '/lugares/planetario-janaxpacha-huasi'
const pucaraPath = '/lugares/pucara-de-aconquija'
const cultivaTradicionPath = '/circuitos/cultiva-tradicion'
const respiraVerdePath = '/circuitos/respira-verde'
const tunelesRioPotreroPath = '/lugares/tuneles-del-rio-potrero'
const bosqueDeAlisosPath = '/lugares/bosque-de-alisos'
const rioPotreroPath = '/lugares/rio-potrero'
const yunkaSumaPath = '/lugares/yunka-suma'

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
        <Route path={cultivaTradicionPath} element={<CultivaTradicionPage />} />
        <Route path={respiraVerdePath} element={<RespiraVerdePage />} />
        <Route path={tunelesRioPotreroPath} element={<TunelesRioPotreroPage />} />
        <Route path={bosqueDeAlisosPath} element={<BosqueDeAlisosPage />} />
        <Route path={rioPotreroPath} element={<RioPotreroPage />} />
        <Route path={yunkaSumaPath} element={<YunkaSumaPage />} />
        {approvedRoutes
          .filter(({ path }) => path !== planetarioPath && path !== pucaraPath && path !== cultivaTradicionPath && path !== respiraVerdePath && path !== tunelesRioPotreroPath && path !== bosqueDeAlisosPath && path !== rioPotreroPath && path !== yunkaSumaPath)
          .map(({ path, title }) => <Route key={path} path={path} element={<PagePlaceholder title={title} />} />)}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <SpotifyFloatingPlayer />
    </BrowserRouter>
  )
}
