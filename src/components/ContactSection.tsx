import { useState } from 'react'

import { contactLinks, profile } from '../data/portfolioData'

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

    if (!isValid) {
      return
    }

    const subject = encodeURIComponent(`Portfolio enquiry from ${formData.fullname}`)
    const body = encodeURIComponent(
      `Name: ${formData.fullname}\nEmail: ${formData.email}\n\n${formData.message}`,
    )

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <div className="section-stack">
      <section className="panel contact-panel">
        <div className="section-heading">
          <p className="eyebrow">Contact</p>
          <h2>Let&apos;s build something thoughtful</h2>
          <p>
            Reach out for freelance work, collaboration, or a portfolio review conversation.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-card">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                className="contact-row"
                href={item.href}
                target={item.label === 'Location' ? '_blank' : undefined}
                rel={item.label === 'Location' ? 'noreferrer' : undefined}
              >
                <span className="contact-label">{item.label}</span>
                <span className="contact-value">{item.value}</span>
              </a>
            ))}

            <div className="map-frame">
              <iframe
                title="Bareilly map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28091.099697877562!2d79.40400003476564!3d28.34713319963663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a000da1f058f65%3A0x23a3031c2956371e!2sCivil%20Lines%2C%20Bareilly%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1713730962726!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="input-grid">
              <label>
                <span>Full name</span>
                <input
                  type="text"
                  value={formData.fullname}
                  onChange={(event) =>
                    setFormData((current) => ({ ...current, fullname: event.target.value }))
                  }
                />
              </label>

              <label>
                <span>Email</span>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(event) =>
                    setFormData((current) => ({ ...current, email: event.target.value }))
                  }
                />
              </label>
            </div>

            <label>
              <span>Message</span>
              <textarea
                rows={7}
                value={formData.message}
                onChange={(event) =>
                  setFormData((current) => ({ ...current, message: event.target.value }))
                }
              />
            </label>

            <button className="primary-button" type="submit" disabled={!isValid}>
              Send message
            </button>

            {submitted ? (
              <p className="form-note">
                Your email app should open with the message prefilled. If it doesn&apos;t, use the email link in the contact card.
              </p>
            ) : (
              <p className="form-note">The button enables once the form looks complete enough to send.</p>
            )}
          </form>
        </div>
      </section>
    </div>
  )
}
