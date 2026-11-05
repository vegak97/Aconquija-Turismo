/*
 * Transición de entrada a Turismo: la fotografía de la tarjeta se expande desde su
 * posición real hasta cubrir toda la ventana y recién entonces se navega.
 *
 * Por qué una capa temporal fuera de React:
 * la tarjeta de Turismo tiene transform (animación de entrada y :hover), backdrop-filter y
 * overflow: hidden, y su contenedor tiene perspective. Cualquiera de esas propiedades convierte
 * al padre en el bloque contenedor de un descendiente con position: fixed (el elemento deja de
 * medirse contra la ventana y se desplaza hacia abajo) y overflow: hidden lo recorta (la
 * animación "desaparece"). Por eso la imagen no se anima dentro de la tarjeta: se coloca una
 * copia exacta del contenedor de imagen directamente en <body>, donde ningún ancestro
 * interfiere, justo encima de la original.
 *
 * La copia es un cloneNode del propio contenedor (.portal-card__image-wrap), dentro de una
 * capa con las mismas clases de tema que la portada, así que conserva fotografía, recorte,
 * degradado, filtros, tema claro/oscuro, número e icono sin reescribir ningún estilo.
 */

const DURATION = 1100
const DURATION_REDUCED = 320
const EASING = 'cubic-bezier(.76, 0, .24, 1)'
const EASING_REDUCED = 'cubic-bezier(.25, .1, .25, 1)'
const FADE_OUT = 650
const FADE_OUT_REDUCED = 220
const DECODE_TIMEOUT = 600
const Z_INDEX = '2147483000'
const SCROLL_KEYS = new Set([' ', 'PageUp', 'PageDown', 'Home', 'End', 'ArrowUp', 'ArrowDown'])

let running = false

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
const nextFrame = () => new Promise((resolve) => requestAnimationFrame(() => resolve()))
const timeout = (ms) => wait(ms).then(() => { throw new Error('timeout') })

async function ensureDecoded(img) {
  if (!img) return true
  try {
    if (!img.complete) {
      await Promise.race([
        new Promise((resolve, reject) => {
          img.addEventListener('load', resolve, { once: true })
          img.addEventListener('error', reject, { once: true })
        }),
        timeout(DECODE_TIMEOUT),
      ])
    }
    if (typeof img.decode === 'function') await Promise.race([img.decode(), timeout(DECODE_TIMEOUT)])
    return img.naturalWidth > 0
  } catch {
    return false
  }
}

function copyImageTreatment(source, target) {
  // Valores calculados en este instante (incluye el estado :hover en curso).
  const computed = window.getComputedStyle(source)
  target.style.transition = 'none'
  target.style.animation = 'none'
  target.style.transform = computed.transform
  target.style.transformOrigin = computed.transformOrigin
  target.style.filter = computed.filter
  target.style.opacity = computed.opacity
  target.style.objectFit = computed.objectFit
  target.style.objectPosition = computed.objectPosition
}

function startRadius(imageWrap, rect) {
  const owner = imageWrap.closest('.portal-card') || imageWrap
  const computed = window.getComputedStyle(owner)
  const border = parseFloat(computed.borderTopWidth) || 0
  const scale = imageWrap.offsetWidth ? rect.width / imageWrap.offsetWidth : 1
  const radius = Math.max(0, ((parseFloat(computed.borderTopLeftRadius) || 0) - border) * scale)
  // La tarjeta recorta solo las esquinas superiores de la imagen.
  return `${radius}px ${radius}px 0px 0px`
}

/**
 * Inicia la transición. Devuelve true si se hizo cargo del clic (el llamador debe llamar a
 * preventDefault) y false si no puede animar (el enlace debe seguir su curso normal).
 * onCovered se invoca una sola vez, cuando la imagen ya cubre toda la pantalla.
 */
export function enterTourismTransition(imageWrap, { reduceMotion = false, onCovered } = {}) {
  if (running) return true
  if (!imageWrap || typeof onCovered !== 'function') return false
  if (typeof imageWrap.animate !== 'function' || !document.body) return false
  const rect = imageWrap.getBoundingClientRect()
  if (rect.width < 2 || rect.height < 2) return false

  running = true
  run(imageWrap, reduceMotion, onCovered)
  return true
}

async function run(imageWrap, reduceMotion, onCovered) {
  let navigated = false
  const goToDestination = () => {
    if (navigated) return
    navigated = true
    onCovered()
  }

  let layer = null
  const preventScroll = (event) => event.preventDefault()
  const preventScrollKeys = (event) => {
    if (SCROLL_KEYS.has(event.key)) event.preventDefault()
  }

  try {
    const sourceImage = imageWrap.querySelector('img')
    const clone = imageWrap.cloneNode(true)
    const cloneImage = clone.querySelector('img')

    // La copia debe estar decodificada antes de mostrarse: si no, aparecería un destello plano.
    if (!(await ensureDecoded(cloneImage))) {
      goToDestination()
      return
    }

    // Se mide justo antes de crear la capa para partir de la posición real del momento.
    const rect = imageWrap.getBoundingClientRect()
    const radius = startRadius(imageWrap, rect)

    const scope = imageWrap.closest('.portal-page')
    layer = document.createElement('div')
    layer.className = scope ? scope.className : 'portal-page'
    if (scope && scope.dataset.theme) layer.dataset.theme = scope.dataset.theme
    layer.setAttribute('aria-hidden', 'true')
    layer.setAttribute('data-portal-transition', '')
    Object.assign(layer.style, {
      position: 'fixed',
      inset: '0',
      zIndex: Z_INDEX,
      display: 'block',
      minHeight: '0',
      margin: '0',
      padding: '0',
      overflow: 'hidden',
      background: 'none',
      animation: 'none',
      pointerEvents: 'auto',
    })
    layer.addEventListener('wheel', preventScroll, { passive: false })
    layer.addEventListener('touchmove', preventScroll, { passive: false })
    window.addEventListener('keydown', preventScrollKeys, true)

    const frame = document.createElement('div')
    frame.setAttribute('data-portal-transition-frame', '')
    Object.assign(frame.style, {
      position: 'absolute',
      margin: '0',
      padding: '0',
      overflow: 'hidden',
    })

    Object.assign(clone.style, {
      position: 'absolute',
      inset: '0',
      width: '100%',
      height: '100%',
      margin: '0',
      borderRadius: '0',
      transition: 'none',
      animation: 'none',
    })
    if (sourceImage && cloneImage) copyImageTreatment(sourceImage, cloneImage)

    frame.appendChild(clone)
    layer.appendChild(frame)
    document.body.appendChild(layer)

    // El tamaño real del bloque fijo (la ventana) se mide en lugar de suponerlo.
    const viewport = layer.getBoundingClientRect()
    const from = {
      top: `${rect.top - viewport.top}px`,
      left: `${rect.left - viewport.left}px`,
      width: `${rect.width}px`,
      height: `${rect.height}px`,
      borderRadius: radius,
    }
    const to = {
      top: '0px',
      left: '0px',
      width: `${viewport.width}px`,
      height: `${viewport.height}px`,
      borderRadius: '0px 0px 0px 0px',
    }
    Object.assign(frame.style, from)

    const duration = reduceMotion ? DURATION_REDUCED : DURATION
    const expansion = frame.animate([from, to], {
      duration,
      easing: reduceMotion ? EASING_REDUCED : EASING,
      fill: 'forwards',
    })

    // El número y el icono de la tarjeta se desvanecen al inicio, antes de alejarse de su esquina.
    const chrome = Array.from(frame.querySelectorAll('.portal-card__number, .portal-card__icon'))
    const chromeFades = chrome.map((element) => element.animate(
      [{ opacity: 1 }, { opacity: 0 }],
      { duration: duration * 0.3, easing: 'ease-out', fill: 'forwards' },
    ))

    await Promise.race([expansion.finished.catch(() => {}), wait(duration + 1500)])

    // Garantiza la cobertura total: se fija el estado final con inset: 0 (no depende de medidas
    // ni de redondeos) y recién después se descartan las animaciones, sin parpadeo.
    Object.assign(frame.style, {
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      width: 'auto',
      height: 'auto',
      borderRadius: '0',
    })
    chrome.forEach((element) => { element.style.opacity = '0' })
    expansion.cancel()
    chromeFades.forEach((fade) => fade.cancel())
    window.removeEventListener('keydown', preventScrollKeys, true)

    await nextFrame()
    goToDestination()

    // Se deja que la nueva ruta se monte y pinte antes de disolver la capa sobre ella.
    await nextFrame()
    await nextFrame()
    await wait(60)
    const fade = layer.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: reduceMotion ? FADE_OUT_REDUCED : FADE_OUT,
      easing: 'ease-out',
      fill: 'forwards',
    })
    await Promise.race([fade.finished.catch(() => {}), wait(FADE_OUT + 1000)])
  } catch {
    // Cualquier fallo inesperado nunca debe dejar al usuario sin entrar a Turismo.
    goToDestination()
  } finally {
    window.removeEventListener('keydown', preventScrollKeys, true)
    if (layer) layer.remove()
    running = false
  }
}
