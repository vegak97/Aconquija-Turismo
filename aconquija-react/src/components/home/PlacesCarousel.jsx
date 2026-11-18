import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { places } from '../../data/homeData'

export default function PlacesCarousel() {
  const placeScrollRef = useRef(null)
  const placeLoopWidthRef = useRef(0)
  const placePausedRef = useRef(false)
  const placeResumeTimerRef = useRef(null)
  const placeSnapTimerRef = useRef(null)
  const placeTouchStartRef = useRef(null)
  const placeSwipedRef = useRef(false)

  // Esta función debe vivir en el alcance del componente: también la usa
  // el onScroll del JSX para sincronizar la elevación durante el movimiento.
  const updateCenterCard = () => {
    const track = placeScrollRef.current
    if (!track) return

    // Usar medidas de layout evita que el transform de elevación altere el cálculo.
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

    positionAtMiddleSet()
    updateCenterCard()
    const handleResize = () => {
      positionAtMiddleSet()
      updateCenterCard()
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (placeResumeTimerRef.current) window.clearTimeout(placeResumeTimerRef.current)
      if (placeSnapTimerRef.current) window.clearTimeout(placeSnapTimerRef.current)
    }
  }, [places.length])

  const movePlaceByOne = (direction) => {
    const track = placeScrollRef.current
    const firstCard = track?.querySelector('.place-card')
    const secondCard = track?.children[1]
    if (!track || !firstCard || !secondCard) return

    const step = secondCard.getBoundingClientRect().left - firstCard.getBoundingClientRect().left
    if (step > 0) track.scrollBy({ left: step * direction, behavior: 'smooth' })
  }

  const handlePlaceTouchStart = (event) => {
    placeSwipedRef.current = false
    const touch = event.touches[0]
    if (!touch) return
    placeTouchStartRef.current = { x: touch.clientX, y: touch.clientY }
    pausePlaceCarousel()
  }

  const handlePlaceTouchEnd = (event) => {
    const start = placeTouchStartRef.current
    const touch = event.changedTouches[0]
    placeTouchStartRef.current = null
    if (!start || !touch) return

    const deltaX = touch.clientX - start.x
    const deltaY = touch.clientY - start.y
    if (Math.abs(deltaX) < 40 || Math.abs(deltaX) < Math.abs(deltaY) * 1.15) return

    // Un gesto completo equivale siempre a una sola tarjeta, aunque el dedo
    // recorra mucha distancia o el movimiento haya sido muy rápido.
    placeSwipedRef.current = true
    movePlaceByOne(deltaX < 0 ? 1 : -1)
    pausePlaceCarousel()
  }

  function pausePlaceCarousel() {
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
          <div className="place-scroll reveal" id="placeScroll" ref={placeScrollRef} onTouchStart={handlePlaceTouchStart} onTouchEnd={handlePlaceTouchEnd} onTouchCancel={() => { placeTouchStartRef.current = null }} onClickCapture={(event) => { if (placeSwipedRef.current) { event.preventDefault(); event.stopPropagation(); placeSwipedRef.current = false } }} onScroll={() => {
            const track = placeScrollRef.current
            const loopWidth = placeLoopWidthRef.current
            if (!track || !loopWidth) return
    
            // Mantener el bucle infinito sin interrumpir el gesto manual.
            if (track.scrollLeft < loopWidth * 0.5) track.scrollLeft += loopWidth
            else if (track.scrollLeft >= loopWidth * 2) track.scrollLeft -= loopWidth

            // Acompañar el desplazamiento: la tarjeta que sale del centro baja
            // y la que entra se eleva, sin esperar al final del movimiento.
            updateCenterCard()

            // En teléfonos, cada gesto ya solicita un paso exacto; no aplicar
            // el ajuste libre del trackpad mientras termina la animación.
            if (window.matchMedia('(max-width: 520px)').matches) return

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
                // Ajustar suavemente el centrado; onScroll sincroniza la elevación
                // de la tarjeta nueva y el descenso de la anterior durante el trayecto.
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
  )
}
