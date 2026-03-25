import { useEffect, useState } from 'react'

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'tech', label: 'Tech Stack' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)

      // Scroll spy
      const sections = navItems.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[]
      const scrollPos = window.scrollY + 150

      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPos >= sections[i].offsetTop) {
          setActiveSection(sections[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (id: string) => {
    setMobileOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="nav-inner">
          <a href="#hero" className="nav-logo" onClick={(e) => { e.preventDefault(); handleClick('hero') }}>
            {'<'}
            <span>Deepanshu</span>
            {' />'}
          </a>

          <div className="nav-links">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  handleClick(item.id)
                }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="nav-cta"
              onClick={(e) => {
                e.preventDefault()
                handleClick('contact')
              }}
            >
              Hire Me
            </a>
          </div>

          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault()
              handleClick(item.id)
            }}
          >
            {item.label}
          </a>
        ))}
        <a
          href="#contact"
          className="nav-cta"
          onClick={(e) => {
            e.preventDefault()
            handleClick('contact')
          }}
        >
          Hire Me
        </a>
      </div>
    </>
  )
}
