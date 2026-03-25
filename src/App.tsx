import { useEffect, useState } from 'react'

import './App.css'
import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { ExperienceSection } from './components/ExperienceSection'
import { GitHubSection } from './components/GitHubSection'
import { HeroSection } from './components/HeroSection'
import { Navbar } from './components/Navbar'
import { ProjectsSection } from './components/ProjectsSection'
import { ServicesSection } from './components/ServicesSection'
import { TechStackSection } from './components/TechStackSection'

function App() {
  const [showTopBtn, setShowTopBtn] = useState(false)

  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    )

    document.querySelectorAll('.section').forEach((el) => {
      el.classList.add('reveal')
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  // Back to top button visibility
  useEffect(() => {
    const onScroll = () => setShowTopBtn(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Animated background */}
      <div className="bg-glow" />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <HeroSection />
        <TechStackSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ServicesSection />
        <GitHubSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-links">
            <a href="https://github.com/Deepanshu9045" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/deepanshu-rajput" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://twitter.com/dpanshurajput" target="_blank" rel="noreferrer">Twitter</a>
            <a href="mailto:rdeepanshu170@gmail.com">Email</a>
          </div>
          <p className="footer-copy">
            © 2026 <span>Deepanshu</span>. Built with React & passion.
          </p>
        </div>
      </footer>

      {/* Back to top */}
      <button
        className={`back-to-top ${showTopBtn ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        ↑
      </button>
    </>
  )
}

export default App
