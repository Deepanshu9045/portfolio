export type NavSection = 'about' | 'resume' | 'projects' | 'writing' | 'contact'

export type Service = {
  title: string
  summary: string
}

export type Skill = {
  name: string
  detail: string
  image: string
}

export type Certificate = {
  title: string
  image: string
  href: string
}

export type TimelineItem = {
  title: string
  period: string
  detail: string
}

export type Capability = {
  name: string
  level: number
}

export type ProjectCategory = 'all' | 'web design' | 'web development'

export type Project = {
  title: string
  category: Exclude<ProjectCategory, 'all'>
  image: string
  href: string
  description: string
}

export type Post = {
  title: string
  category: string
  date: string
  summary: string
  image: string
}

export const profile = {
  name: 'Deepanshu',
  role: 'Web Developer',
  location: 'Bareilly, Uttar Pradesh, India',
  email: 'rdeepanshu170@gmail.com',
  phone: '+91 9045744076',
  birthday: '2003-10-25',
  avatar: '/src/assets/images/face.png',
  intro:
    "BCA graduate focused on building clean, useful websites with strong fundamentals in frontend development, problem-solving, and user-friendly design.",
  about: [
    "I'm a recent Bachelor of Computer Applications graduate who enjoys turning ideas into polished digital experiences. I care about clear structure, dependable code, and interfaces that feel easy to use.",
    "My work blends frontend development, design thinking, and practical implementation. I like simplifying complex problems and shaping them into websites that look professional and communicate clearly.",
  ],
}

export const socials = [
  { label: 'Freelancer', href: 'https://www.freelancer.in/u/Deepanshu7500' },
  { label: 'Twitter', href: 'https://twitter.com/dpanshurajput' },
  { label: 'Instagram', href: 'https://www.instagram.com/dpanshurajput/' },
]

export const services: Service[] = [
  {
    title: 'Web Design',
    summary: 'Modern interface design with strong visual hierarchy, clean spacing, and thoughtful presentation.',
  },
  {
    title: 'Web Development',
    summary: 'Responsive websites built with maintainable structure, reusable components, and fast-loading layouts.',
  },
  {
    title: 'Frontend Systems',
    summary: 'Interactive UI work using HTML, CSS, JavaScript, and modern app structure for smoother iteration.',
  },
  {
    title: 'Creative Direction',
    summary: 'Brand-aware presentation, portfolio storytelling, and polished visual choices that feel intentional.',
  },
]

export const skills: Skill[] = [
  {
    name: 'HTML',
    image: '/images/html.png',
    detail: 'Strong semantic structure for accessible, scalable page layouts.',
  },
  {
    name: 'CSS',
    image: '/images/css.png',
    detail: 'Comfortable building responsive layouts, card systems, and custom visual design.',
  },
  {
    name: 'JavaScript',
    image: '/images/js.png',
    detail: 'Used for interactive UI behavior, component logic, and client-side problem solving.',
  },
  {
    name: 'Java',
    image: '/images/Javalogo.png',
    detail: 'Solid foundation in programming logic, OOP concepts, and structured thinking.',
  },
]

export const certificates: Certificate[] = [
  {
    title: 'C Programming',
    image: '/images/c.png',
    href: 'https://www.sololearn.com/certificates/CC-97YFY9DP',
  },
  {
    title: 'Java',
    image: '/images/java.png',
    href: 'https://www.sololearn.com/certificates/CC-OFTTVSJ3',
  },
  {
    title: 'C#',
    image: '/images/c1.png',
    href: 'https://www.sololearn.com/certificates/CC-MUIVYMVP',
  },
  {
    title: 'Python',
    image: '/images/python.png',
    href: 'https://www.sololearn.com/certificates/CC-RPGN1U1A',
  },
  {
    title: 'C++',
    image: '/images/c++.png',
    href: 'https://www.sololearn.com/certificates/CC-J0XXVSIX',
  },
  {
    title: 'SQL',
    image: '/images/sql.png',
    href: 'https://www.sololearn.com/certificates/CC-JTF5VRU1',
  },
  {
    title: 'Technology Basics',
    image: '/images/tech.png',
    href: 'https://www.sololearn.com/certificates/CC-KK7SR896',
  },
]

export const education: TimelineItem[] = [
  {
    title: 'MJPRU University',
    period: '2021 - 2024',
    detail: "Bachelor of Computer Applications (BCA) with focus on software and web fundamentals.",
  },
  {
    title: 'Wood Row Senior Secondary School (CBSE)',
    period: '2020 - 2021',
    detail: 'Intermediate with Physics, Chemistry, and Mathematics.',
  },
  {
    title: 'Wood Row Senior Secondary School (CBSE)',
    period: '2018 - 2019',
    detail: 'High School curriculum with science, mathematics, language, and social studies.',
  },
]

export const experienceHighlights: TimelineItem[] = [
  {
    title: 'Programming Languages',
    period: 'Core foundation',
    detail: 'Hands-on knowledge of Java, C, C++, and Visual Basic for structured problem-solving.',
  },
  {
    title: 'Web Development',
    period: 'Frontend focus',
    detail: 'Experience working with HTML, CSS, JavaScript, and Bootstrap to build responsive pages.',
  },
  {
    title: 'Database Management',
    period: 'Practical knowledge',
    detail: 'Comfortable with SQL, MySQL, and SQLite for storing and querying application data.',
  },
  {
    title: 'Software Workflow',
    period: 'Delivery mindset',
    detail: 'Familiar with Git, SDLC basics, and iterative project development.',
  },
]

export const capabilities: Capability[] = [
  { name: 'Frontend Development', level: 86 },
  { name: 'Responsive Web Design', level: 82 },
  { name: 'Problem Solving', level: 88 },
  { name: 'Visual Communication', level: 76 },
]

export const projectCategories: ProjectCategory[] = ['all', 'web design', 'web development']

export const projects: Project[] = [
  {
    title: 'Amazon Clone',
    category: 'web development',
    image: '/images/pro-1.png',
    href: '#',
    description: 'A commerce-inspired UI project focused on familiar layout patterns and responsive sections.',
  },
  {
    title: 'Structure of Universe',
    category: 'web development',
    image: '/images/pro-2.png',
    href: '#',
    description: 'An information-driven page showcasing content organization and engaging presentation.',
  },
  {
    title: 'Travel India',
    category: 'web development',
    image: '/images/pro-3.png',
    href: '#',
    description: 'A travel-themed project built to present destinations with clear sections and visuals.',
  },
  {
    title: 'DSM',
    category: 'web design',
    image: '/images/project-5.png',
    href: '#',
    description: 'A design-focused concept page with stronger visual framing and brand-led styling.',
  },
  {
    title: 'Background Study',
    category: 'web design',
    image: '/images/pro-4.png',
    href: '#',
    description: 'A layout exercise centered on visual composition, spacing, and background treatment.',
  },
  {
    title: 'Arrival',
    category: 'web development',
    image: '/images/project-9.png',
    href: '#',
    description: 'A project page exploring section flow, image framing, and modern landing-page rhythm.',
  },
]

export const posts: Post[] = [
  {
    title: 'How I Approach Clean Portfolio Layouts',
    category: 'Design',
    date: 'March 2026',
    summary: 'Thoughts on spacing, clear storytelling, and making a portfolio feel confident instead of cluttered.',
    image: '/images/blog-1.jpg',
  },
  {
    title: 'Why Simple UI Usually Wins',
    category: 'Frontend',
    date: 'February 2026',
    summary: 'A short note on reducing visual noise and building interfaces people understand quickly.',
    image: '/images/blog-2.jpg',
  },
  {
    title: 'Projects That Taught Me the Most',
    category: 'Learning',
    date: 'January 2026',
    summary: 'Lessons from practice work, portfolio experiments, and strengthening development fundamentals.',
    image: '/images/blog-3.jpg',
  },
]

export const contactLinks = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'Phone', value: profile.phone, href: 'tel:+919045744076' },
  { label: 'Location', value: profile.location, href: 'https://maps.google.com/?q=Bareilly,Uttar Pradesh,India' },
]
