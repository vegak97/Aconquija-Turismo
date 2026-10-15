import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PlanetarioPage from './pages/second-level/PlanetarioPage'
import PagePlaceholder from './pages/PagePlaceholder'
import NotFound from './pages/NotFound'
import SpotifyFloatingPlayer from './components/ui/SpotifyFloatingPlayer'
import { approvedRoutes } from './data/routes'

const planetarioPath = '/lugares/planetario-janaxpacha-huasi'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={planetarioPath} element={<PlanetarioPage />} />
        {approvedRoutes
          .filter(({ path }) => path !== planetarioPath)
          .map(({ path, title }) => <Route key={path} path={path} element={<PagePlaceholder title={title} />} />)}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <SpotifyFloatingPlayer />
    </BrowserRouter>
  )
}
