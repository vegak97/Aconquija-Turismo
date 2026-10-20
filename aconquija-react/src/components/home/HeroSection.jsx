import { useEffect, useRef } from 'react'
import heroBackgroundImage from '../../../imagenes/fondo(1).webp'

export default function HeroSection() {
  const heroRef = useRef(null)
  const backgroundRef = useRef(null)
  const contentRef = useRef(null)
  const cueRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    const background = backgroundRef.current
    const content = contentRef.current
    const cue = cueRef.current
    if (!hero || !background || !content || !cue) return undefined

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0

    const updateScrollEffect = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const heroHeight = hero.offsetHeight || window.innerHeight
        const progress = Math.min(Math.max(window.scrollY / heroHeight, 0), 1)

        if (reducedMotion.matches) {
          content.style.removeProperty('transform')
          content.style.removeProperty('opacity')
          cue.style.removeProperty('transform')
          cue.style.removeProperty('opacity')
          background.style.removeProperty('--hero-scroll-shift')
          return
        }

        // El contenido avanza hacia arriba algo más rápido que el paisaje,
        // reforzando la transición cinematográfica hacia la sección histórica.
        content.style.transform = `translate3d(0, ${-progress * 105}px, 0)`
        content.style.opacity = String(1 - progress * 1.25)
        cue.style.transform = `translate3d(-50%, ${-progress * 52}px, 0)`
        cue.style.opacity = String(Math.max(0, 0.85 - progress * 2.2))
        background.style.setProperty('--hero-scroll-shift', `${progress * 34}px`)
      })
    }

    updateScrollEffect()
    window.addEventListener('scroll', updateScrollEffect, { passive: true })
    window.addEventListener('resize', updateScrollEffect)
    reducedMotion.addEventListener?.('change', updateScrollEffect)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', updateScrollEffect)
      window.removeEventListener('resize', updateScrollEffect)
      reducedMotion.removeEventListener?.('change', updateScrollEffect)
    }
  }, [])

  return (
    <section ref={heroRef} className="hero" aria-label="Presentación de Aconquija">
      <div
        ref={backgroundRef}
        className="hero-bg"
        style={{ backgroundImage: `url("${heroBackgroundImage}")` }}
      />
      <div ref={contentRef} className="hero-content">
        <h1>Aconquija</h1>
        <div className="hero-sub">Naturaleza que inspira</div>
        <div className="hero-divider" />
      </div>
      <div ref={cueRef} className="scroll-cue">
        Deslizá para explorar
        <div className="chev" />
      </div>
    </section>
  )
}
