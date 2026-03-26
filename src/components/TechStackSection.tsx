import { useEffect, useState } from 'react'
import { Cloud, fetchSimpleIcons, type ICloud, renderSimpleIcon, type SimpleIcon } from 'react-icon-cloud'
import { techStack, type TechSkill } from '../data/portfolioData'

const categories = [ 'Frontend', 'Backend', 'Database', 'Mobile', 'Tools'] as const

const cloudProps: Omit<ICloud, 'children'> = {
  containerProps: {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      paddingBottom: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: 'default',
    tooltip: 'native',
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: '#0000',
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
}

const slugs = [
  'react',
  'nextdotjs',
  'typescript',
  'javascript',
  'html5',
  'css3',
  'tailwindcss',
  'nodedotjs',
  'firebase',
  'mongodb',
  'mysql',
  'flutter',
  'git',
  'docker',
  'github',
  'vercel',
  'visualstudiocode',
  'figma',
  'python',
  'openjdk',
]

function IconCloud() {
  const [data, setData] = useState<{ simpleIcons: Record<string, SimpleIcon> } | null>(null)

  useEffect(() => {
    fetchSimpleIcons({ slugs }).then(setData)
  }, [])

  if (!data) {
    return <div style={{ minHeight: '300px' }} />
  }

  const renderedIcons = Object.values(data.simpleIcons).map((icon) =>
    renderSimpleIcon({
      icon,
      size: 42,
      aProps: {
        href: undefined,
        target: undefined,
        rel: undefined,
        onClick: (e: any) => e.preventDefault(),
      },
    })
  )

  return <Cloud {...cloudProps}>{renderedIcons}</Cloud>
}

export function TechStackSection() {
  const [activeFilter, setActiveFilter] = useState<string>('Frontend')

  const filtered: TechSkill[] =
    activeFilter === ''
      ? techStack
      : techStack.filter((t) => t.category === activeFilter)

  return (
    <section className="section tech-section" id="tech">
      <div className="container">
        <div className="tech-shell">
          <div className="tech-content">
            <div className="section-header tech-header">
              <span className="eyebrow">Tech Stack</span>
              <h2>Technologies I Work With</h2>
              <p>My toolkit spans the full stack and here's what I build with daily.</p>
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

          <div className="tech-cloud">
            <IconCloud />
          </div>
        </div>
      </div>
    </section>
  )
}
