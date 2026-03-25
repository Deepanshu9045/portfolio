import { timeline } from '../data/portfolioData'

export function ExperienceSection() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Journey</span>
          <h2>Experience & Education</h2>
          <p>My path from learning to building — a timeline of growth and milestones.</p>
        </div>

        <div className="timeline">
          {timeline.map((item, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-card glass-card">
                <div className="timeline-meta">
                  <span className="timeline-period">{item.period}</span>
                  <span className="timeline-type">{item.type}</span>
                </div>
                <h3>{item.title}</h3>
                <p className="timeline-org">{item.organization}</p>
                <p className="desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
