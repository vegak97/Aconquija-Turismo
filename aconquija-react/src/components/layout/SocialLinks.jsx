export function InstagramIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" /></svg>
}

function FacebookIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M15 4h-2a4 4 0 0 0-4 4v3H7v3h2v6h3v-6h2.5l.5-3H12V8a1 1 0 0 1 1-1h2V4z" /></svg>
}

function TikTokIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-3.77V2h-3.43v13.13a2.89 2.89 0 1 1-2.89-2.89c.3 0 .59.05.86.13V8.87a6.3 6.3 0 1 0 5.46 6.26V8.47a8.24 8.24 0 0 0 4.82 1.55V6.69h-1.05z" /></svg>
}

function WhatsAppIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.52 3.48A11.8 11.8 0 0 0 12.03 0C5.4 0 .03 5.37.03 12c0 2.12.56 4.19 1.62 6.02L0 24l6.16-1.61A11.95 11.95 0 0 0 12.03 24C18.66 24 24 18.63 24 12c0-3.2-1.25-6.2-3.48-8.52ZM12.03 21.8a9.78 9.78 0 0 1-4.99-1.37l-.36-.21-3.65.95.98-3.56-.24-.37A9.78 9.78 0 1 1 12.03 21.8Zm5.39-7.33c-.29-.15-1.71-.84-1.98-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.22-.63.07-.29-.15-1.24-.46-2.36-1.48-.88-.79-1.47-1.77-1.64-2.07-.17-.29-.02-.45.13-.6.14-.14.29-.37.44-.56.15-.19.19-.33.29-.55.1-.22.05-.41-.02-.56-.07-.15-.64-1.55-.88-2.13-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.49.07-.74.33-.26.26-.99.97-.99 2.37 0 1.4 1.02 2.75 1.16 2.94.15.19 2.01 3.07 4.88 4.3.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.71-.7 1.95-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.33Z" /></svg>
}

function SocialLinks({ mobile = false }) {
  return (
    <div className={mobile ? 'nav-mobile-social' : 'nav-icons'}>
      <a href="https://www.instagram.com/turismo_aconquijacat?igsh=MTJxOGR2NWd3aWZqOA==" target="_blank" rel="noreferrer" className="icon-circle" title="Instagram" aria-label="Instagram"><InstagramIcon /></a>
      <a href="https://www.facebook.com/share/1M1xpsvGS9/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="icon-circle" title="Facebook" aria-label="Facebook"><FacebookIcon /></a>
      <a href="https://www.tiktok.com/@turismo_aconquija?_r=1&_t=ZS-99ETmiaC097" target="_blank" rel="noreferrer" className="icon-circle" title="TikTok" aria-label="TikTok"><TikTokIcon /></a>
      <a href="https://wa.me/5493834966977" target="_blank" rel="noreferrer" className="icon-circle" title="WhatsApp" aria-label="WhatsApp"><WhatsAppIcon /></a>
    </div>
  )
}
