import { profile } from '../data/portfolioData'

export function GitHubSection() {
  return (
    <section className="section" id="github">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">GitHub</span>
          <h2>Coding Activity</h2>
          <p>A glimpse into my open-source contributions and coding habits.</p>
        </div>

        <div className="github-grid">
          <div className="github-stat-card glass-card">
            <span className="stat-icon">📊</span>
            <h3>Active Repositories</h3>
            <p>Building and maintaining projects across web and mobile development.</p>
          </div>

          <div className="github-stat-card glass-card">
            <span className="stat-icon">🔥</span>
            <h3>Contribution Streak</h3>
            <p>Consistent commits pushing code and improving projects every week.</p>
          </div>

          <div className="github-stat-card glass-card">
            <span className="stat-icon">⭐</span>
            <h3>Open Source</h3>
            <p>Contributing to and learning from the open-source community.</p>
          </div>
        </div>

        <div className="github-profile-link">
          <a
            href={`https://github.com/${profile.githubUsername}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            📦 View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  )
}
