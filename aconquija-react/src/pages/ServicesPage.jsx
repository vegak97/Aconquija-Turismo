import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { serviceCategories, serviceProviders } from '../data/serviceProviders'

function WhatsAppLink({ phone }) {
  const digits = phone.replace(/\D/g, '')
  const whatsappNumber = `549${digits}`
  if (digits.length !== 10) return <a className="service-contact" href={`tel:${digits}`}>☎ {phone}</a>
  return (
    <a className="service-contact service-contact--whatsapp" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.8a8.6 8.6 0 0 1-12.7 7.5L3 20.5l1.3-4.6a8.6 8.6 0 1 1 16.2-4.1Z" /><path d="M8.2 7.8c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.2 0 .4-.1.6l-.5.6c-.2.2-.2.4 0 .7.5.9 1.2 1.6 2.1 2.1.3.2.5.2.7 0l.7-.8c.2-.2.4-.2.6-.1l1.6.8c.2.1.3.3.3.5 0 .3-.2 1-.6 1.3-.4.4-1 .6-1.6.5-1-.1-2.2-.7-3.4-1.7-1.4-1.2-2.3-2.6-2.6-3.5-.3-.8-.2-1.7.4-2.7Z" /></svg>
      WhatsApp
    </a>
  )
}

function ServiceCard({ provider }) {
  const [expanded, setExpanded] = useState(false)
  const hasDescription = Boolean(provider.description)
  const hasImage = Boolean(provider.image)
  const hasMap = Boolean(provider.mapUrl)

  return (
    <article className={`service-provider-card${expanded ? ' is-expanded' : ''}`}>
      <div className="service-provider-image">
        {hasImage
          ? <img src={provider.image} alt={provider.name} loading="lazy" />
          : <div className="service-image-placeholder"><span>Fotografía pendiente</span></div>}
      </div>
      <div className="service-provider-content">
        <span className="service-provider-locality">{provider.locality}</span>
        <h3>{provider.name}</h3>
        <p className={`service-provider-description${expanded ? ' is-expanded' : ''}`}>
          {hasDescription ? provider.description : 'Descripción pendiente de incorporar.'}
        </p>
        {hasDescription && provider.description.length > 145 && (
          <button className="service-read-more" type="button" onClick={() => setExpanded(value => !value)} aria-expanded={expanded}>
            {expanded ? 'Leer menos' : 'Leer más'}
            <span aria-hidden="true">{expanded ? '−' : '+'}</span>
          </button>
        )}
        <div className="service-provider-actions">
          <div className="service-contacts">
            {provider.phones.map(phone => <WhatsAppLink key={phone} phone={phone} />)}
          </div>
          {provider.instagram && (
            <a className="service-social-link service-social-link--instagram" href={provider.instagramUrl || `https://www.instagram.com/${provider.instagram.replace(/^@/, '')}/`} target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle className="service-instagram-dot" cx="17.6" cy="6.7" r="1" /></svg>
              Instagram
            </a>
          )}
          {provider.bookingUrl && <a className="service-booking-link" href={provider.bookingUrl} target="_blank" rel="noreferrer">Alquiler Argentina</a>}
          {provider.facebook && <a className="service-social-link" href={provider.facebook.startsWith('http') ? provider.facebook : `https://www.facebook.com/search/top?q=${encodeURIComponent(provider.facebook)}`} target="_blank" rel="noreferrer">Facebook</a>}
          {hasMap
            ? <a className="service-map-link service-map-link--google" href={provider.mapUrl} target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#34A853" d="M12 2.2a8.1 8.1 0 0 0-7.1 12l5.8 7.1c.6.8 1.9.8 2.5 0l1.2-1.5-4.2-5.1a4.8 4.8 0 0 1 1.8-8.1V2.2Z" />
                  <path fill="#4285F4" d="M12 2.2v4.4a4.8 4.8 0 0 1 4.8 4.8c0 1.1-.4 2.1-1 2.9l2.9 3.5 2.4-3.6A8.1 8.1 0 0 0 12 2.2Z" />
                  <path fill="#FBBC04" d="m10.2 14.7 4.2 5.1 4.3-5.2-2.9-3.5a4.8 4.8 0 0 1-5.6 3.6Z" />
                  <circle cx="12" cy="11.4" r="2.1" fill="#EA4335" />
                </svg>
                Cómo llegar
              </a>
            : <span className="service-map-link is-pending" aria-disabled="true" title="Ubicación pendiente de confirmar"><span aria-hidden="true">⌖</span> Ubicación pendiente</span>}
        </div>
      </div>
    </article>
  )
}

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0].id)
  const [activeLocality, setActiveLocality] = useState('Todas')
  const [search, setSearch] = useState('')
  const localities = useMemo(() => [...new Set(serviceProviders.filter(item => item.category === activeCategory).map(item => item.locality))].sort((a, b) => a.localeCompare(b, 'es')), [activeCategory])
  const filteredProviders = useMemo(() => serviceProviders.filter(item => {
    const matchesCategory = item.category === activeCategory
    const matchesLocality = activeLocality === 'Todas' || item.locality === activeLocality
    const matchesSearch = item.name.toLocaleLowerCase('es').includes(search.toLocaleLowerCase('es'))
    return matchesCategory && matchesLocality && matchesSearch
  }), [activeCategory, activeLocality, search])
  const selectedCategory = serviceCategories.find(item => item.id === activeCategory)

  const changeCategory = (id) => {
    setActiveCategory(id)
    setActiveLocality('Todas')
    setSearch('')
  }

  return (
    <>
      <Header />
      <main className="services-page">
        <div className="container services-directory">
          <aside className="services-sidebar" aria-label="Categorías de servicios">
            <p className="services-sidebar-title">Categorías</p>
            {serviceCategories.map(category => (
              <button key={category.id} type="button" className={`services-category-button${activeCategory === category.id ? ' is-active' : ''}`} onClick={() => changeCategory(category.id)} aria-pressed={activeCategory === category.id}>
                <span>{category.label}</span><span className="services-category-count">{serviceProviders.filter(item => item.category === category.id).length}</span>
              </button>
            ))}
          </aside>

          <section className="services-results" aria-live="polite">
            <div className="services-results-heading">
              <div>
                <span className="services-eyebrow">Descubrí Aconquija</span>
                <h2>{selectedCategory.label}</h2>
                <p>{selectedCategory.description}</p>
              </div>
              <span className="services-total">{filteredProviders.length} prestadores</span>
            </div>
            <div className="services-filters">
              <label className="services-locality-filter">
                <span>Filtrar por localidad</span>
                <select value={activeLocality} onChange={event => setActiveLocality(event.target.value)}>
                  <option value="Todas">Todas las localidades</option>
                  {localities.map(locality => <option key={locality} value={locality}>{locality}</option>)}
                </select>
              </label>
              <label className="services-search">
                <span>Buscar prestador</span>
                <input type="search" value={search} onChange={event => setSearch(event.target.value)} placeholder="Escribí un nombre..." />
              </label>
            </div>

            {filteredProviders.length > 0 ? (
              <div className="services-provider-grid">
                {filteredProviders.map(provider => <ServiceCard key={provider.id} provider={provider} />)}
              </div>
            ) : (
              <div className="services-empty-state">
                <h3>No encontramos prestadores</h3>
                <p>Probá con otra localidad o modificá la búsqueda.</p>
                <button type="button" onClick={() => { setActiveLocality('Todas'); setSearch('') }}>Limpiar filtros</button>
              </div>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
