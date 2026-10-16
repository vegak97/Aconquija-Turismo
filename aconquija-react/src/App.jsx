import './App.css'
import { useLayoutEffect } from 'react'
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

  useLayoutEffect(() => {
    const root = document.documentElement
    const previousScrollBehavior = root.style.scrollBehavior

    // Anula temporalmente el scroll suave para evitar una subida animada.
    root.style.scrollBehavior = 'auto'
    window.scrollTo(0, 0)
    root.style.scrollBehavior = previousScrollBehavior
  }, [pathname])

  useLayoutEffect(() => {
    // Evita que el navegador restaure la posición anterior al cambiar de página.
    const previousRestoration = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'

    return () => {
      window.history.scrollRestoration = previousRestoration
    }
  }, [])

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
