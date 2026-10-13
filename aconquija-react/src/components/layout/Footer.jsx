import { Link } from 'react-router-dom'
import { InstagramIcon, FacebookIcon, TikTokIcon, WhatsAppIcon } from './SocialLinks'
import logoFooter from '../../../../imagenes/logo_aconquija(2).png'

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-top">
          <div className="foot-brand">
            <Link to="/" className="logo" aria-label="Volver al inicio"><img src={logoFooter} alt="Aconquija Turismo" /></Link>
            <p>Ente de Turismo de Aconquija, Catamarca. A los pies de los Nevados, naturaleza que inspira.</p>
          </div>
          <div className="foot-cols">
            <div className="foot-col">
              <h5>Explorar</h5>
              <a href="#explorar">Excursiones</a>
              <a href="#lugares">Lugares</a>
              <a href="#estaciones">Estaciones</a>
            </div>
            <div className="foot-col">
              <h5>Servicios</h5>
              <a href="#servicios">Dónde dormir</a>
              <a href="#servicios">Dónde comer</a>
              <a href="#servicios">Guías locales</a>
            </div>
            <div className="foot-col">
              <h5>Contacto</h5>
              <p>Ruta Provincial N°48, Aconquija, Catamarca</p>
              <a href="mailto:Maxyz000@icloud.com">Maxyz000@icloud.com</a>
              <a href="tel:+543834966977">+54 383 496-6977</a>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <p>© 2026 Aconquija Turismo — Todos los derechos reservados</p>
          <div className="foot-social">
            <a className="icon-circle" href="https://www.instagram.com/turismo_aconquijacat?igsh=MTJxOGR2NWd3aWZqOA==" target="_blank" rel="noreferrer" title="Instagram" aria-label="Instagram"><InstagramIcon /></a>
            <a className="icon-circle" href="https://www.facebook.com/share/1M1xpsvGS9/?mibextid=wwXIfr" target="_blank" rel="noreferrer" title="Facebook" aria-label="Facebook"><FacebookIcon /></a>
            <a className="icon-circle" href="https://www.tiktok.com/@turismo_aconquija?_r=1&_t=ZS-99ETmiaC097" target="_blank" rel="noreferrer" title="TikTok" aria-label="TikTok"><TikTokIcon /></a>
            <a className="icon-circle" href="https://wa.me/5493834966977" target="_blank" rel="noreferrer" title="WhatsApp" aria-label="WhatsApp"><WhatsAppIcon /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
