import { contactLinks, profile, socials } from '../data/portfolioData'

type SidebarProps = {
  contactsOpen: boolean
  onToggleContacts: () => void
}

export function Sidebar({ contactsOpen, onToggleContacts }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="profile-card panel">
        <div className="profile-head">
          <img className="profile-avatar" src={profile.avatar} alt={profile.name} />
          <div>
            <p className="eyebrow">Available for work</p>
            <h1>{profile.name}</h1>
            <p className="profile-role">{profile.role}</p>
          </div>
        </div>

        <p className="profile-intro">{profile.intro}</p>

        <button className="toggle-button" type="button" onClick={onToggleContacts}>
          {contactsOpen ? 'Hide contacts' : 'Show contacts'}
        </button>

        <div className={`contact-stack ${contactsOpen ? 'is-open' : ''}`}>
          {contactLinks.map((item) => (
            <a
              key={item.label}
              className="contact-row"
              href={item.href}
              target={item.label === 'Location' ? '_blank' : undefined}
              rel={item.label === 'Location' ? 'noreferrer' : undefined}
            >
              <span className="contact-label">{item.label}</span>
              <span className="contact-value">{item.value}</span>
            </a>
          ))}
        </div>

        <div className="social-row">
          {socials.map((item) => (
            <a key={item.label} className="social-link" href={item.href} target="_blank" rel="noreferrer">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </aside>
  )
}
