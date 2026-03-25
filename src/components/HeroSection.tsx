import { useEffect, useState } from 'react'
import { profile, socials, stats } from '../data/portfolioData'

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = profile.roles[roleIndex]
    let timeout: number

    if (!isDeleting && text === currentRole) {
      timeout = window.setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && text === '') {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % profile.roles.length)
    } else {
      const speed = isDeleting ? 40 : 80
      timeout = window.setTimeout(() => {
        setText(
          isDeleting
            ? currentRole.substring(0, text.length - 1)
            : currentRole.substring(0, text.length + 1),
        )
      }, speed)
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, roleIndex])

  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case 'github': return '📦'
      case 'linkedin': return '💼'
      case 'twitter': return '🐦'
      case 'instagram': return '📸'
      default: return '🔗'
    }
  }

  return (
    <section className="hero section" id="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="pulse" />
              Available for work
            </div>

            <h1>
              <span className="line">Hi, I'm</span>
              <span className="line gradient-text">{profile.name}</span>
            </h1>

            <div className="typing-wrapper">
              <span className="prefix">I'm a</span>
              <span className="typing-text">{text}</span>
            </div>

            <p className="hero-description">{profile.intro}</p>

            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
                Get In Touch
              </a>
              <a href="#projects" className="btn btn-outline" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
                View Projects
              </a>
            </div>

            <div className="hero-socials">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hero-social-link"
                  title={social.label}
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-avatar-wrapper">
              <div className="hero-avatar-ring" />
              <img
                className="hero-avatar"
                src={profile.avatar}
                alt={profile.name}
              />
            </div>
          </div>
        </div>

        <div className="hero-stats">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card glass-card">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
