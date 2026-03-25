import { useState } from 'react'
import { techStack, type TechSkill } from '../data/portfolioData'

const categories = ['All', 'Frontend', 'Backend', 'Database', 'Mobile', 'Tools'] as const

const marqueeItems = [
  'React', '•', 'Next.js', '•', 'TypeScript', '•', 'JavaScript', '•',
  'HTML', '•', 'CSS', '•', 'Tailwind', '•', 'Node.js', '•',
  'Firebase', '•', 'MongoDB', '•', 'MySQL', '•', 'Flutter', '•',
  'Git', '•', 'Docker', '•', 'Java', '•',
]

export function TechStackSection() {
  const [activeFilter, setActiveFilter] = useState<string>('All')

  const filtered: TechSkill[] =
    activeFilter === 'All'
      ? techStack
      : techStack.filter((t) => t.category === activeFilter)

  return (
    <section className="section tech-section" id="tech">
      <div className="container">
        {/* Scrolling marquee */}
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className={item === '•' ? 'dot' : ''}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="section-header">
          <span className="eyebrow">Tech Stack</span>
          <h2>Technologies I Work With</h2>
          <p>My toolkit spans the full stack — here's what I build with daily.</p>
        </div>

        <div className="tech-filter-row">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`tech-filter ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="tech-grid">
          {filtered.map((skill) => (
            <div key={skill.name} className="tech-card glass-card">
              <span className="tech-icon">{skill.icon}</span>
              <div className="tech-name">{skill.name}</div>
              <span className={`tech-level ${skill.level}`}>{skill.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
