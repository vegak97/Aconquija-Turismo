import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <main className="page-placeholder" aria-labelledby="page-title">
      <p className="page-placeholder__eyebrow">Aconquija Turismo</p>
      <h1 id="page-title">Página no encontrada</h1>
      <p className="page-placeholder__message">Esta dirección no forma parte del mapa aprobado de páginas.</p>
      <Link className="page-placeholder__link" to="/">Volver al inicio</Link>
    </main>
  )
}
export default NotFound
