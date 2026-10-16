import { useCallback, useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import './AccordionGallery.css'

export default function AccordionGallery({
  items,
  defaultIndex = 0,
  accentColor = '#cdaa78',
  overlayColor = '#1c222c',
  textColor = '#ffffff',
  height = 440,
  gap = 10,
  radius = 16,
  expandRatio = 0.52,
  duration = 0.6,
  ease = 'power3.out',
  parallax = 0.5,
  tilt = 5,
  stagger = 0.06,
  showLabels = true,
  grayscale = true,
  className = '',
}) {
  const rootRef = useRef(null)
  const panelRefs = useRef([])
  const mediaRefs = useRef([])
  const barRefs = useRef([])
  const textRefs = useRef([])
  const timelineRef = useRef(null)
  const firstRunRef = useRef(true)
  const mediaSizeRef = useRef(320)
  const count = items.length
  const [active, setActive] = useState(() => Math.min(Math.max(defaultIndex, 0), Math.max(count - 1, 0)))
  const [prefersReduced, setPrefersReduced] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setPrefersReduced(query.matches)
    update()
    query.addEventListener?.('change', update)
    return () => query.removeEventListener?.('change', update)
  }, [])

  const applyLayout = useCallback((animate) => {
    const panels = panelRefs.current
    if (!panels.length || !count) return

    const ratio = Math.min(Math.max(expandRatio, 0.2), 0.9)
    const grow = count > 1 ? (ratio * (count - 1)) / (1 - ratio) : 1
    const mediaSize = mediaSizeRef.current
    timelineRef.current?.kill()
    const dur = animate && !prefersReduced ? duration : 0
    const timeline = gsap.timeline()

    panels.forEach((panel, index) => {
      if (!panel) return
      const isActive = index === active
      const media = mediaRefs.current[index]
      const bar = barRefs.current[index]
      const text = textRefs.current[index]
      const shiftDirection = Math.max(-1.5, Math.min(1.5, active - index))
      const shift = shiftDirection * parallax * mediaSize * 0.06

      timeline.to(panel, {
        flexGrow: isActive ? grow : 1,
        rotateY: isActive ? 0 : (index < active ? tilt : -tilt),
        duration: dur,
        ease,
      }, 0)

      if (media) {
        timeline.to(media, {
          xPercent: -50,
          yPercent: -50,
          x: isActive ? 0 : shift,
          '--ag-gray': grayscale && !isActive ? 1 : 0,
          '--ag-dim': isActive ? 0 : 0.34,
          duration: dur,
          ease,
        }, 0)
      }

      if (showLabels && bar && text) {
        timeline.to([bar, text], {
          opacity: isActive ? 1 : 0,
          x: isActive ? 0 : -12,
          duration: dur * (isActive ? 1 : 0.6),
          ease,
          stagger: prefersReduced ? 0 : stagger,
        }, 0)
      }
    })

    timelineRef.current = timeline
  }, [active, count, expandRatio, duration, ease, tilt, parallax, grayscale, showLabels, stagger, prefersReduced])

  useEffect(() => {
    const root = rootRef.current
    if (!root) return undefined

    const measure = () => {
      const width = root.getBoundingClientRect().width
      const size = Math.max(150, width * Math.min(Math.max(expandRatio, 0.2), 0.9) * 1.2)
      mediaSizeRef.current = size
      root.style.setProperty('--ag-media-size', `${size}px`)
      applyLayout(!firstRunRef.current)
    }

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(root)
    return () => observer.disconnect()
  }, [applyLayout, expandRatio])

  useEffect(() => {
    applyLayout(!firstRunRef.current)
    firstRunRef.current = false
  }, [applyLayout])

  useEffect(() => () => timelineRef.current?.kill(), [])

  const handleKeyDown = (index, event) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault()
      setActive((index + 1) % count)
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault()
      setActive((index - 1 + count) % count)
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      setActive(index)
    }
  }

  if (!count) return null

  return (
    <div
      ref={rootRef}
      className={`accordion-gallery ${className}`}
      style={{
        '--ag-accent': accentColor,
        '--ag-overlay': overlayColor,
        '--ag-text': textColor,
        '--ag-gap': `${gap}px`,
        '--ag-radius': `${radius}px`,
        height: `${height}px`,
      }}
      role="list"
      aria-label="Galería de imágenes del Planetario Janaxpacha Huasi"
    >
      {items.map((item, index) => {
        const isActive = index === active
        return (
          <div
            key={item.src || item.label}
            ref={(element) => { panelRefs.current[index] = element }}
            className={`ag-panel${isActive ? ' ag-panel--active' : ''}`}
            onClick={() => setActive(index)}
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            onKeyDown={(event) => handleKeyDown(index, event)}
            role="listitem"
            tabIndex={0}
            aria-current={isActive ? 'true' : undefined}
            aria-label={item.label}
            style={{ borderRadius: `${radius}px` }}
          >
            <span className="ag-panel__frame">
              <span className="ag-panel__media" ref={(element) => { mediaRefs.current[index] = element }}>
                <img src={item.src} alt={item.alt || item.label} loading="lazy" draggable="false" />
              </span>
              <span className="ag-panel__overlay" aria-hidden="true" />
            </span>
            {showLabels && (
              <span className="ag-panel__label" aria-hidden="true">
                <span className="ag-panel__bar" ref={(element) => { barRefs.current[index] = element }} />
                <span className="ag-panel__text" ref={(element) => { textRefs.current[index] = element }}>{item.label}</span>
              </span>
            )}
          </div>
        )
      })}
    </div>
  )
}
