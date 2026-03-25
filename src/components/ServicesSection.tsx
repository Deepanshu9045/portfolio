import { services } from '../data/portfolioData'

export function ServicesSection() {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Services</span>
          <h2>What I Offer</h2>
          <p>End-to-end development services tailored to bring your ideas to life.</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.title} className="service-card glass-card">
              <span className="service-icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
