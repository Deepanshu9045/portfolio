import { profile } from '../data/portfolioData'

export function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">About Me</span>
          <h2>Who I Am</h2>
          <p>A developer who cares about code quality, user experience, and continuous learning.</p>
        </div>

        <div className="about-grid">
          <div className="about-text">
            {profile.about.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="about-highlights">
            <div className="about-highlight-card glass-card">
              <div className="about-highlight-icon">🎯</div>
              <div className="about-highlight-content">
                <h4>Clean Code Advocate</h4>
                <p>I prioritize readable, maintainable code with proper structure and documentation.</p>
              </div>
            </div>

            <div className="about-highlight-card glass-card">
              <div className="about-highlight-icon">🚀</div>
              <div className="about-highlight-content">
                <h4>Performance Focused</h4>
                <p>Every project is optimized for speed, accessibility, and smooth user interactions.</p>
              </div>
            </div>

            <div className="about-highlight-card glass-card">
              <div className="about-highlight-icon">🎨</div>
              <div className="about-highlight-content">
                <h4>Design Thinking</h4>
                <p>I bridge the gap between design and development with pixel-perfect implementations.</p>
              </div>
            </div>

            <div className="about-highlight-card glass-card">
              <div className="about-highlight-icon">📚</div>
              <div className="about-highlight-content">
                <h4>Continuous Learner</h4>
                <p>Always exploring new tools, frameworks, and best practices to stay current.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
