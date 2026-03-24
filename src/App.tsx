import { useState } from 'react'

import './App.css'
import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { ProjectsSection } from './components/ProjectsSection'
import { ResumeSection } from './components/ResumeSection'
import { Sidebar } from './components/Sidebar'
import { TopNav } from './components/TopNav'
import { WritingSection } from './components/WritingSection'
import { type NavSection, type ProjectCategory } from './data/portfolioData'

function App() {
  const [activeSection, setActiveSection] = useState<NavSection>('about')
  const [contactsOpen, setContactsOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all')

  return (
    <div className="app-shell">
      <Sidebar
        contactsOpen={contactsOpen}
        onToggleContacts={() => setContactsOpen((current) => !current)}
      />

      <main className="content-shell">
        <TopNav activeSection={activeSection} onSelect={setActiveSection} />

        <section className="content-stage">
          {activeSection === 'about' && <AboutSection />}
          {activeSection === 'resume' && <ResumeSection />}
          {activeSection === 'projects' && (
            <ProjectsSection
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          )}
          {activeSection === 'writing' && <WritingSection />}
          {activeSection === 'contact' && <ContactSection />}
        </section>
      </main>
    </div>
  )
}

export default App
