import { useEffect } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import HeroSection from '../components/home/HeroSection'
import IntroSection from '../components/home/IntroSection'
import ExploreSection from '../components/home/ExploreSection'
import SeasonsSection from '../components/home/SeasonsSection'
import ServicesSection from '../components/home/ServicesSection'
import AboutSection from '../components/home/AboutSection'
import PlacesCarousel from '../components/home/PlacesCarousel'

function HomePage() {
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

  return (
    <>
      <div id="readProgress" aria-hidden="true" />
      <Header />
      <main>
                <HeroSection />

                <IntroSection />

                <ExploreSection />

        <PlacesCarousel />

                <SeasonsSection />

                <ServicesSection />

                <AboutSection />
      </main>
      <Footer />
    </>
  )
}
export default HomePage
