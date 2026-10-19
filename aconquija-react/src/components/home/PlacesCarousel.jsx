import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { places } from '../../data/homeData'

export default function PlacesCarousel() {
  const placeScrollRef = useRef(null)
  const placeLoopWidthRef = useRef(0)
  const placePausedRef = useRef(false)
  const placeResumeTimerRef = useRef(null)
  const placeSnapTimerRef = useRef(null)

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

    let autoplayTimeout = null

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
    scheduleNextCard()
    const handleResize = () => {
      positionAtMiddleSet()
      updateCenterCard()
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
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
                // Primero termina el desplazamiento y el centrado; la elevación
                // se activa en el siguiente ciclo de reposo del scroll.
                track.scrollTo({ left: targetLeft, behavior: 'smooth' })
                return
              }

              // Aplicar la elevación recién cuando la tarjeta ya quedó centrada.
              updateCenterCard()
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
  )
}
