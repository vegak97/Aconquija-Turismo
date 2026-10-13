import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import HeroSection from '../components/home/HeroSection'
import IntroSection from '../components/home/IntroSection'
import ExploreSection from '../components/home/ExploreSection'
import SeasonsSection from '../components/home/SeasonsSection'
import ServicesSection from '../components/home/ServicesSection'
import AboutSection from '../components/home/AboutSection'
import { places } from '../data/homeData'

function HomePage() {
  const [activeSeason, setActiveSeason] = useState('verano')
  const placeScrollRef = useRef(null)
  const placeLoopWidthRef = useRef(0)
  const placePausedRef = useRef(false)
  const placeResumeTimerRef = useRef(null)
  const placeSnapTimerRef = useRef(null)

  useEffect(() => {
    const updateScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      const percentage = total > 0 ? (window.scrollY / total) * 100 : 0
      const progress = document.getElementById('readProgress')
      if (progress) progress.style.width = percentage + '%'
      const nav = document.getElementById('siteNav')
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 60)

      // Reutiliza el listener de scroll existente para marcar la sección visible en el menú.
      const navLinks = document.querySelectorAll('#navLinks > a[href^="#"]')
      let activeId = ''
      navLinks.forEach((link) => {
        const section = document.getElementById(link.getAttribute('href').slice(1))
        if (section && section.getBoundingClientRect().top <= 150) activeId = section.id
      })
      navLinks.forEach((link) => {
        const isActive = link.getAttribute('href') === `#${activeId}`
        link.classList.toggle('is-active', Boolean(activeId) && isActive)
        if (isActive && activeId) link.setAttribute('aria-current', 'location')
        else link.removeAttribute('aria-current')
      })
    }

    updateScroll()
    window.addEventListener('scroll', updateScroll, { passive: true })
    const revealElements = document.querySelectorAll('.reveal')
    let observer = null
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            // Servicios vuelve a animarse cada vez que entra en la zona visible.
            if (observer && !entry.target.closest('.servicios')) observer.unobserve(entry.target)
          } else if (entry.target.closest('.servicios')) {
            entry.target.classList.remove('in')
          }
        })
      }, { threshold: 0.12 })
    }

    revealElements.forEach((element) => {
      if (observer) observer.observe(element)
      else element.classList.add('in')
    })

    return () => {
      window.removeEventListener('scroll', updateScroll)
      if (observer) observer.disconnect()
    }
  }, [])

  useEffect(() => {
    const track = placeScrollRef.current
    if (!track) return

    const positionAtMiddleSet = () => {
      const firstCard = track.children[0]
      const secondSetFirstCard = track.children[places.length]
      if (!firstCard || !secondSetFirstCard) return

      const loopWidth = secondSetFirstCard.offsetLeft - firstCard.offsetLeft
      if (loopWidth <= 0) return

      placeLoopWidthRef.current = loopWidth
      track.scrollLeft = loopWidth
    }

    const updateCenterCard = () => {
      // Calcular el centro con medidas de layout, no con getBoundingClientRect:
      // este último incluye el transform de elevación/escala y puede hacer oscilar
      // la selección de la tarjeta central mientras el carrusel se desplaza.
      const centerX = track.scrollLeft + track.clientWidth / 2
      let closestCard = null
      let closestDistance = Infinity

      Array.from(track.querySelectorAll('.place-card')).forEach((card) => {
        const cardCenterX = card.offsetLeft + card.offsetWidth / 2
        const distance = Math.abs(cardCenterX - centerX)
        if (distance < closestDistance) {
          closestDistance = distance
          closestCard = card
        }
      })

      track.querySelectorAll('.place-card.is-center').forEach((card) => {
        if (card !== closestCard) card.classList.remove('is-center')
      })
      if (closestCard) closestCard.classList.add('is-center')
    }

    let centerUpdateTimer = null
    let autoplayTimeout = null

    const updateCenterPeriodically = () => {
      updateCenterCard()
      centerUpdateTimer = window.setTimeout(updateCenterPeriodically, 120)
    }

    const getCardStep = () => {
      const firstCard = track.querySelector('.place-card')
      const secondCard = track.children[1]
      if (!firstCard || !secondCard) return 0
      return secondCard.getBoundingClientRect().left - firstCard.getBoundingClientRect().left
    }

    // Avanza una tarjeta, como el botón de siguiente, y deja tiempo para mirar.
    const scheduleNextCard = () => {
      autoplayTimeout = window.setTimeout(() => {
        if (!placePausedRef.current) {
          const step = getCardStep()
          if (step > 0) track.scrollBy({ left: step, behavior: 'smooth' })
        }
        scheduleNextCard()
      }, 2500)
    }

    positionAtMiddleSet()
    updateCenterCard()
    updateCenterPeriodically()
    scheduleNextCard()
    window.addEventListener('resize', positionAtMiddleSet)

    return () => {
      window.removeEventListener('resize', positionAtMiddleSet)
      if (centerUpdateTimer) window.clearTimeout(centerUpdateTimer)
      if (autoplayTimeout) window.clearTimeout(autoplayTimeout)
      if (placeResumeTimerRef.current) window.clearTimeout(placeResumeTimerRef.current)
      if (placeSnapTimerRef.current) window.clearTimeout(placeSnapTimerRef.current)
    }
  }, [places.length])

  const pausePlaceCarousel = () => {
    placePausedRef.current = true
    if (placeResumeTimerRef.current) window.clearTimeout(placeResumeTimerRef.current)
    placeResumeTimerRef.current = window.setTimeout(() => {
      placePausedRef.current = false
    }, 4000)
  }

  return (
    <>
      <div id="readProgress" aria-hidden="true" />
      <Header />
      <main>
                <HeroSection />

                <IntroSection />

                <ExploreSection />

        <section className="lugares" id="lugares">
          <div className="container">
            <div className="section-head reveal">
              <div><div className="eyebrow">Recorridos</div><h2>Lugares para no dejar de ver</h2></div>
              <p>Una selección de rincones de Aconquija y sus alrededores, pensada para armar tu propio recorrido.</p>
            </div>
            <div className="place-carousel" onPointerDown={pausePlaceCarousel} onPointerUp={pausePlaceCarousel} onPointerCancel={pausePlaceCarousel}>
              <button className="place-carousel-arrow place-carousel-arrow--prev" type="button" aria-label="Ver lugares anteriores" aria-controls="placeScroll" onClick={() => {
                const track = placeScrollRef.current
                const firstCard = track?.querySelector('.place-card')
                const secondCard = track?.children[1]
                if (track && firstCard && secondCard) {
                  const step = secondCard.getBoundingClientRect().left - firstCard.getBoundingClientRect().left
                  track.scrollBy({ left: -step, behavior: 'smooth' })
                }
              }}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18l-6-6 6-6" /></svg>
              </button>
              <div className="place-scroll reveal" id="placeScroll" ref={placeScrollRef} onScroll={() => {
                const track = placeScrollRef.current
                const loopWidth = placeLoopWidthRef.current
                if (!track || !loopWidth) return

                // Mantener el bucle infinito sin interrumpir el gesto manual.
                if (track.scrollLeft < loopWidth * 0.5) track.scrollLeft += loopWidth
                else if (track.scrollLeft >= loopWidth * 2) track.scrollLeft -= loopWidth

                // Cuando el trackpad deja de mover el carrusel, alinear la tarjeta
                // más cercana al centro para que no queden imágenes a medio camino.
                if (placeSnapTimerRef.current) window.clearTimeout(placeSnapTimerRef.current)
                placeSnapTimerRef.current = window.setTimeout(() => {
                  const cards = Array.from(track.querySelectorAll('.place-card'))
                  if (!cards.length) return

                  const centerX = track.scrollLeft + track.clientWidth / 2
                  let closestCard = null
                  let closestDistance = Infinity
                  cards.forEach((card) => {
                    const cardCenterX = card.offsetLeft + card.offsetWidth / 2
                    const distance = Math.abs(cardCenterX - centerX)
                    if (distance < closestDistance) {
                      closestDistance = distance
                      closestCard = card
                    }
                  })

                  if (!closestCard) return
                  const targetLeft = closestCard.offsetLeft + closestCard.offsetWidth / 2 - track.clientWidth / 2
                  if (Math.abs(targetLeft - track.scrollLeft) > 2) {
                    track.scrollTo({ left: targetLeft, behavior: 'smooth' })
                  }
                }, 180)
              }}>
                {[...places, ...places, ...places].map((place, index) => (
                  <article className="place-card" key={`${Math.floor(index / places.length)}-${place.path}`}>
                    <div className="place-img">
                      <span className="place-num">{String((index % places.length) + 1).padStart(2, '0')}</span>
                      <Link to={place.path} aria-label={place.name}><img src={place.image} alt={place.alt} /></Link>
                    </div>
                    <h3>{place.name}</h3>
                    <p>{place.description}</p>
                  </article>
                ))}
              </div>
              <button className="place-carousel-arrow place-carousel-arrow--next" type="button" aria-label="Ver lugares siguientes" aria-controls="placeScroll" onClick={() => {
                const track = placeScrollRef.current
                const firstCard = track?.querySelector('.place-card')
                const secondCard = track?.children[1]
                if (track && firstCard && secondCard) {
                  const step = secondCard.getBoundingClientRect().left - firstCard.getBoundingClientRect().left
                  track.scrollBy({ left: step, behavior: 'smooth' })
                }
              }}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18l6-6-6-6" /></svg>
              </button>
            </div>
            <div className="scroll-hint reveal">Deslizá hacia la derecha →</div>
          </div>
        </section>

                <SeasonsSection />

                <ServicesSection />

                <AboutSection />
      </main>
      <Footer />
    </>
  )
}
export default HomePage
