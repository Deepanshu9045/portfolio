import type { NavSection } from '../data/portfolioData'

const navItems: { id: NavSection; label: string }[] = [
  { id: 'about', label: 'About' },
  { id: 'resume', label: 'Resume' },
  { id: 'projects', label: 'Projects' },
  { id: 'writing', label: 'Writing' },
  { id: 'contact', label: 'Contact' },
]

type TopNavProps = {
  activeSection: NavSection
  onSelect: (section: NavSection) => void
}

export function TopNav({ activeSection, onSelect }: TopNavProps) {
  return (
    <nav className="topnav panel" aria-label="Portfolio sections">
      {navItems.map((item) => (
        <button
          key={item.id}
          type="button"
          className={`topnav-link ${activeSection === item.id ? 'is-active' : ''}`}
          onClick={() => onSelect(item.id)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  )
}
