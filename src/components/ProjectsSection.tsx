import { projectCategories, projects, type ProjectCategory } from '../data/portfolioData'

type ProjectsSectionProps = {
  activeCategory: ProjectCategory
  onCategoryChange: (category: ProjectCategory) => void
}

export function ProjectsSection({ activeCategory, onCategoryChange }: ProjectsSectionProps) {
  const visibleProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  return (
    <div className="section-stack">
      <section className="panel">
        <div className="section-heading">
          <p className="eyebrow">Portfolio</p>
          <h2>Selected projects</h2>
        </div>

        <div className="filter-row" role="tablist" aria-label="Project filters">
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              className={`filter-chip ${activeCategory === category ? 'is-active' : ''}`}
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {visibleProjects.map((project) => (
            <article key={project.title} className="project-card">
              <img src={project.image} alt={project.title} />
              <div className="project-copy">
                <p className="card-kicker">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.href} className="text-link" target={project.href === '#' ? undefined : '_blank'} rel="noreferrer">
                  View project
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
