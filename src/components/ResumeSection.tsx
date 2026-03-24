import { capabilities, education, experienceHighlights } from '../data/portfolioData'

export function ResumeSection() {
  return (
    <div className="section-stack">
      <section className="panel">
        <div className="section-heading">
          <p className="eyebrow">Resume</p>
          <h2>Education and strengths</h2>
        </div>
        <div className="timeline-grid">
          <div>
            <h3 className="subheading">Education</h3>
            <div className="timeline-list">
              {education.map((item) => (
                <article key={`${item.title}-${item.period}`} className="timeline-card">
                  <span className="timeline-period">{item.period}</span>
                  <h4>{item.title}</h4>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h3 className="subheading">Highlights</h3>
            <div className="timeline-list">
              {experienceHighlights.map((item) => (
                <article key={`${item.title}-${item.period}`} className="timeline-card">
                  <span className="timeline-period">{item.period}</span>
                  <h4>{item.title}</h4>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="panel">
        <div className="section-heading">
          <p className="eyebrow">Capabilities</p>
          <h3>Current confidence areas</h3>
        </div>
        <div className="capability-list">
          {capabilities.map((capability) => (
            <div key={capability.name} className="capability-card">
              <div className="capability-meta">
                <h4>{capability.name}</h4>
                <span>{capability.level}%</span>
              </div>
              <div className="capability-track">
                <span style={{ width: `${capability.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
