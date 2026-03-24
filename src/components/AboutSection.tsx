import { certificates, profile, services, skills } from '../data/portfolioData'

export function AboutSection() {
  return (
    <div className="section-stack">
      <section className="hero-panel panel">
        <div className="hero-copy">
          <p className="eyebrow">About me</p>
          <h2>Building polished websites with clear structure and practical thinking.</h2>
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="hero-highlights">
          <div className="metric-card">
            <strong>2024</strong>
            <span>BCA graduate</span>
          </div>
          <div className="metric-card">
            <strong>4+</strong>
            <span>Core services</span>
          </div>
          <div className="metric-card">
            <strong>7</strong>
            <span>Certificates earned</span>
          </div>
        </div>
      </section>

      <section className="panel">
        <div className="section-heading">
          <p className="eyebrow">What I do</p>
          <h3>Services</h3>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <p className="card-kicker">Service</p>
              <h4>{service.title}</h4>
              <p>{service.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel">
        <div className="section-heading">
          <p className="eyebrow">Core skills</p>
          <h3>Technical focus</h3>
        </div>
        <div className="skill-grid">
          {skills.map((skill) => (
            <article key={skill.name} className="skill-card">
              <img src={skill.image} alt={skill.name} />
              <div>
                <h4>{skill.name}</h4>
                <p>{skill.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="panel">
        <div className="section-heading">
          <p className="eyebrow">Certificates</p>
          <h3>Learning in motion</h3>
        </div>
        <div className="certificate-grid">
          {certificates.map((certificate) => (
            <a key={certificate.title} className="certificate-card" href={certificate.href} target="_blank" rel="noreferrer">
              <img src={certificate.image} alt={certificate.title} />
              <span>{certificate.title}</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
