import { useState } from 'react'
import { profile, socials } from '../data/portfolioData'

export function ContactSection() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const isValid =
    formData.fullname.trim().length > 1 &&
    /\S+@\S+\.\S+/.test(formData.email) &&
    formData.message.trim().length > 10

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!isValid) return

    const subject = encodeURIComponent(`Portfolio enquiry from ${formData.fullname}`)
    const body = encodeURIComponent(
      `Name: ${formData.fullname}\nEmail: ${formData.email}\n\n${formData.message}`,
    )

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

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
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Contact</span>
          <h2>Let's Work Together</h2>
          <p>Have a project in mind? Let's discuss how I can help bring your vision to life.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-info-text">
              <h3>Get in Touch</h3>
              <p>
                I'm always open to discussing new projects, creative ideas, or opportunities to
                be part of your vision. Drop me a message!
              </p>
            </div>

            <a href={`mailto:${profile.email}`} className="contact-link-card glass-card">
              <div className="contact-link-icon">📧</div>
              <div className="contact-link-content">
                <span className="contact-link-label">Email</span>
                <span className="contact-link-value">{profile.email}</span>
              </div>
            </a>

            <a href="tel:+919045744076" className="contact-link-card glass-card">
              <div className="contact-link-icon">📱</div>
              <div className="contact-link-content">
                <span className="contact-link-label">Phone</span>
                <span className="contact-link-value">{profile.phone}</span>
              </div>
            </a>

            <a
              href="https://maps.google.com/?q=Bareilly,Uttar Pradesh,India"
              target="_blank"
              rel="noreferrer"
              className="contact-link-card glass-card"
            >
              <div className="contact-link-icon">📍</div>
              <div className="contact-link-content">
                <span className="contact-link-label">Location</span>
                <span className="contact-link-value">{profile.location}</span>
              </div>
            </a>

            <div className="contact-social-row">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-social-btn glass-card"
                  title={social.label}
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>

            <a href={profile.resumeUrl} className="btn btn-primary" style={{ width: 'fit-content' }}>
              📄 Download Resume
            </a>
          </div>

          <div className="contact-form-wrapper glass-card">
            <h3>Send a Message</h3>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">Full Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.fullname}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, fullname: e.target.value }))
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, email: e.target.value }))
                    }
                  />
                </div>
              </div>

              <div className="form-group full">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  rows={6}
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, message: e.target.value }))
                  }
                />
              </div>

              <div className="form-actions">
                <button className="btn btn-primary" type="submit" disabled={!isValid}>
                  Send Message
                </button>
                {submitted && (
                  <p className="form-note">
                    Your email app should open with the message pre-filled. If it doesn't, use the email link above.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
