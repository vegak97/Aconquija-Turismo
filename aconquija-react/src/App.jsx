import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PagePlaceholder from './pages/PagePlaceholder'
import NotFound from './pages/NotFound'
import SpotifyFloatingPlayer from './components/ui/SpotifyFloatingPlayer'
import { approvedRoutes } from './data/routes'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {approvedRoutes.map(({ path, title }) => <Route key={path} path={path} element={<PagePlaceholder title={title} />} />)}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <SpotifyFloatingPlayer />
    </BrowserRouter>
  )
}
