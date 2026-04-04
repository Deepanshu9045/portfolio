import { useState } from 'react'
import { projects } from '../data/portfolioData'

const categories = ['Big Project', 'Small Project'] as const
 
export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string>('Big Project')

  const filteredProjects = projects.filter((project) => project.category === activeFilter)

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Portfolio</span>
          <h2>Featured Projects</h2>
          <p>A selection of projects that showcase my skills and approach to problem-solving.</p>
        </div>

        <div className="cert-filter-row">
          {categories.map((category) => (
            <button
              key={category}
              className={`cert-filter ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.title} className="project-card glass-card">
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-overlay-links">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="project-overlay-link"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="project-overlay-link outline"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
