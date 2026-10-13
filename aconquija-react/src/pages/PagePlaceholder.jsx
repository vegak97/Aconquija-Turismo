import { Link } from 'react-router-dom'

function PagePlaceholder({ title }) {
  return (
    <main className="page-placeholder" aria-labelledby="page-title">
      <p className="page-placeholder__eyebrow">Aconquija Turismo</p>
      <h1 id="page-title">{title}</h1>
      <p className="page-placeholder__message">Esta ruta forma parte del mapa aprobado. El contenido original de esta página se incorporará durante la etapa correspondiente de la migración.</p>
      <Link className="page-placeholder__link" to="/">Volver al inicio</Link>
    </main>
  )
}
export default PagePlaceholder
