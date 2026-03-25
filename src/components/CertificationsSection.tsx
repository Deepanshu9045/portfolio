import { useState } from 'react'
import { certificates, type Certificate } from '../data/portfolioData'

const categories = ['All', 'Web Development', 'Java', 'React', 'Awards'] as const

export function CertificationsSection() {
  const [activeFilter, setActiveFilter] = useState<string>('All')
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null)

  const filtered =
    activeFilter === 'All'
      ? certificates
      : certificates.filter((c) => c.category === activeFilter)

  return (
    <section className="section cert-section" id="certifications">
      <div className="container">
        
        <div className="cert-stats-row">
          <div className="cert-stat-badge"><span>🏆</span> 10+ Certificates</div>
          <div className="cert-stat-badge"><span>🌟</span> 3 Awards</div>
          <div className="cert-stat-badge"><span>💻</span> 2 Hackathons</div>
        </div>

        <div className="section-header">
          <span className="eyebrow">Achievements</span>
          <h2>Certifications & Awards</h2>
          <p>Recognitions and credentials that reflect my continuous learning and achievements.</p>
        </div>

        <div className="cert-filter-row">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`cert-filter ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="cert-grid">
          {filtered.map((cert) => (
            <div 
              key={cert.title} 
              className="cert-card glass-card"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="cert-image-wrapper">
                <img src={cert.image} alt={cert.title} loading="lazy" />
                {cert.badge && (
                  <span className={`cert-badge ${cert.badge.toLowerCase().replace(' ', '-')}`}>
                    {cert.badge}
                  </span>
                )}
                <div className="cert-overlay-icon">🔍</div>
              </div>
              <div className="cert-info">
                <h3>{cert.title}</h3>
                <div className="cert-meta">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <span className="cert-date">{cert.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedCert && (
        <div className="cert-modal" onClick={() => setSelectedCert(null)}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={() => setSelectedCert(null)}>✕</button>
            <img src={selectedCert.image} alt={selectedCert.title} />
            <div className="cert-modal-info">
              <h3>{selectedCert.title}</h3>
              <p>{selectedCert.issuer} • {selectedCert.date}</p>
              {selectedCert.link && (
                <a href={selectedCert.link} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ marginTop: '16px', display: 'inline-block' }}>
                  Verify Credential
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
