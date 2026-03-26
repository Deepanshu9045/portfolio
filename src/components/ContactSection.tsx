import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { profile, socials } from '../data/portfolioData'
import { SocialIcon } from './SocialIcons'

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim()
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim()
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim()

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: '',
  })
  const [hasTriedSubmit, setHasTriedSubmit] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error'
    message: string
  } | null>(null)

  const updateField = (field: 'fullname' | 'email' | 'message', value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (submitStatus) {
      setSubmitStatus(null)
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setHasTriedSubmit(true)

    const currentForm = event.currentTarget
    const currentName = String(new FormData(currentForm).get('from_name') ?? '').trim()
    const currentEmail = String(new FormData(currentForm).get('from_email') ?? '').trim()
    const currentMessage = String(new FormData(currentForm).get('message') ?? '').trim()

    if (currentName.length < 2) {
      setSubmitStatus({
        type: 'error',
        message: 'Please enter your full name.',
      })
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(currentEmail)) {
      setSubmitStatus({
        type: 'error',
        message: 'Please enter a valid email address.',
      })
      return
    }

    if (currentMessage.length < 10) {
      setSubmitStatus({
        type: 'error',
        message: 'Please enter a message longer than 10 characters.',
      })
      return
    }

    if (isSending) return

    if (!serviceId || !templateId || !publicKey) {
      setSubmitStatus({
        type: 'error',
        message:
          'EmailJS is not configured yet. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to your .env file.',
      })
      return
    }

    try {
      setIsSending(true)
      setSubmitStatus(null)

      if (!formRef.current) {
        throw new Error('Form is not ready. Please refresh and try again.')
      }

      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        { publicKey },
      )

      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully. I will get back to you soon.',
      })
      setFormData({
        fullname: '',
        email: '',
        message: '',
      })
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : typeof error === 'object' &&
              error !== null &&
              'text' in error &&
              typeof error.text === 'string'
            ? error.text
            : 'Something went wrong while sending your message. Please try again.'

      setSubmitStatus({
        type: 'error',
        message,
      })
    } finally {
      setIsSending(false)
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
              <div className="contact-link-icon">@</div>
              <div className="contact-link-content">
                <span className="contact-link-label">Email</span>
                <span className="contact-link-value">{profile.email}</span>
              </div>
            </a>

            <a href="tel:+919045744076" className="contact-link-card glass-card">
              <div className="contact-link-icon">+</div>
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
              <div className="contact-link-icon">#</div>
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
                  <SocialIcon name={social.icon} />
                </a>
              ))}
            </div>

            <a href={profile.resumeUrl} className="btn btn-primary" style={{ width: 'fit-content' }}>
              PDF Download Resume
            </a>
          </div>

          <div className="contact-form-wrapper glass-card">
            <h3>Send a Message</h3>

            <form ref={formRef} onSubmit={handleSubmit}>
              <input type="hidden" name="to_email" value={profile.email} />
              <input type="hidden" name="to_name" value={profile.name} />
              <input type="hidden" name="time" value={new Date().toLocaleString()} />
              <input
                type="hidden"
                name="subject"
                value={`Portfolio enquiry from ${formData.fullname || 'Website visitor'}`}
              />

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">Full Name</label>
                  <input
                    id="contact-name"
                    name="from_name"
                    type="text"
                    required
                    minLength={2}
                    placeholder="John Doe"
                    value={formData.fullname}
                    onChange={(e) => updateField('fullname', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    name="from_email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group full">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  required
                  minLength={10}
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => updateField('message', e.target.value)}
                />
              </div>

              <div className="form-actions">
                <button className="btn btn-primary" type="submit" disabled={isSending}>
                  {isSending ? 'Sending...' : 'Send Message'}
                </button>
                {hasTriedSubmit && submitStatus && (
                  <p className={`form-note ${submitStatus.type === 'error' ? 'error' : 'success'}`}>
                    {submitStatus.message}
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
