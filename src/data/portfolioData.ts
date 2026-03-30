/* ──────────────────────────  Types  ────────────────────────── */

export type TechSkill = {
  name: string
  icon: string // SVG inline or emoji fallback
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Mobile'
}

export type Service = {
  title: string
  summary: string
  icon: string
}

export type Project = {
  title: string
  description: string
  image: string
  tech: string[]
  liveUrl?: string
  demoUrl?: string
  githubUrl?: string
}

export type Certificate = {
  title: string
  issuer: string
  date: string
  image: string
  category: 'Development' | 'Technical' | 'Awards' 
  badge?: 'Verified' | 'Winner' | 'Top Performer'
  link?: string
}

export type TimelineItem = {
  title: string
  organization: string
  period: string
  description: string
  type: 'education' | 'experience'
}

export type Stat = {
  label: string
  value: string
}

export type SocialLink = {
  label: string
  href: string
  icon: string
}

/* ──────────────────────────  Profile  ────────────────────────── */

export const profile = {
  name: 'Deepanshu',
  roles: [
    'Full Stack Developer',
    'Frontend Developer',
    'Web Developer',
    'React Developer',
  ],
  location: 'Bareilly, Uttar Pradesh, India',
  email: 'rdeepanshu170@gmail.com',
  phone: '+91 9045744076',
  avatar: '/images/face.png',
  intro:
    'I build modern, responsive web applications with clean code and pixel-perfect design. I am passionate about creating digital experiences that make a difference.',
  about: [
    "I’m a dedicated Full Stack Developer passionate about building modern, responsive, and user-focused web applications.",
    "I enjoy turning ideas into real, functional products through clean code and thoughtful design. With hands-on experience in technologies like HTML, CSS, JavaScript, React, Next.js, Firebase, and Node.js.",
    " I focus on creating scalable solutions that deliver both performance and great user experience.",
  ],
  resumeUrl: '#',
  githubUsername: 'Deepanshu9045',
}

/* ──────────────────────────  Social Links  ────────────────────────── */

export const socials: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/Deepanshu9045',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/deepanshu-rajput',
    icon: 'linkedin',
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/dpanshurajput',
    icon: 'twitter',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/dpanshurajput/',
    icon: 'instagram',
  },
]

/* ──────────────────────────  Tech Stack  ────────────────────────── */

export const techStack: TechSkill[] = [
  { name: 'React', icon: '⚛️', level: 'Advanced', category: 'Frontend' },
  { name: 'Next.js', icon: '▲', level: 'Intermediate', category: 'Frontend' },
  { name: 'TypeScript', icon: '🔷', level: 'Intermediate', category: 'Frontend' },
  { name: 'JavaScript', icon: '🟨', level: 'Advanced', category: 'Frontend' },
  { name: 'HTML', icon: '🧱', level: 'Expert', category: 'Frontend' },
  { name: 'CSS', icon: '🎨', level: 'Advanced', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: '💨', level: 'Advanced', category: 'Frontend' },
  { name: 'Node.js', icon: '🟢', level: 'Intermediate', category: 'Backend' },
  { name: 'Firebase', icon: '🔥', level: 'Advanced', category: 'Backend' },
  { name: 'MongoDB', icon: '🍃', level: 'Intermediate', category: 'Database' },
  { name: 'MySQL', icon: '🐬', level: 'Intermediate', category: 'Database' },
  { name: 'Flutter', icon: '🦋', level: 'Beginner', category: 'Mobile' },
  { name: 'Git', icon: '📦', level: 'Advanced', category: 'Tools' },
  { name: 'Docker', icon: '🐳', level: 'Beginner', category: 'Tools' },
  { name: 'Java', icon: '☕', level: 'Intermediate', category: 'Backend' },
]

/* ──────────────────────────  Services  ────────────────────────── */

export const services: Service[] = [
  {
    title: 'Web Development',
    summary:
      'End-to-end web applications built with modern frameworks, optimized for performance and scalability.',
    icon: '🌐',
  },
  {
    title: 'Frontend Development',
    summary:
      'Pixel-perfect interfaces with React, responsive layouts, smooth animations, and component-driven architecture.',
    icon: '🎯',
  },
  {
    title: 'Full Stack Development',
    summary:
      'Complete solutions from database design to polished UI — APIs, authentication, real-time features, and deployment.',
    icon: '⚡',
  },
  {
    title: 'UI/UX Design',
    summary:
      'Thoughtful user experiences with clean visual design, intuitive navigation, and brand-aware presentation.',
    icon: '✨',
  },
]

/* ──────────────────────────  Projects  ────────────────────────── */

export const projects: Project[] = [
  {
    title: 'Zest CRM',
    description:
      'A full-featured CRM dashboard with drag-and-drop pipelines, invoice generation, Google OAuth, and real-time Firestore data sync.',
    image: '/images/zestcrm.png',
    tech: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    liveUrl: 'https://zestcrm.vercel.app/',
    githubUrl: 'https://github.com/Deepanshu9045/ZestCRM',
  },
  {
    title: 'React Tutorial',
    description:
      'A react tutorial project focused on learning react and its features. This project is a work in progress.',
    image: '/images/react-tutorial.png',
    tech: ['React', 'CSS', 'Firebase', 'Node.js'],
    liveUrl: 'https://react-tutorial-deepanshu9045.vercel.app/',
    githubUrl: 'https://github.com/Deepanshu9045/react-tutorial',
  },
  {
    title: 'Structure of Universe',
    description:
      'An information-driven page showcasing rich content organization with engaging visual presentation.',
    image: '/images/pro-2.png',
    tech: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/Deepanshu9045/Universe-Structure',
  },
  {
    title: 'Travel India', 
    description:
      'A travel-themed project with destination pages, gallery sections, and responsive design for all devices.',
    image: '/images/TravellIndia.png',
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://travel-india-ivory.vercel.app/',
    githubUrl: 'https://github.com/Deepanshu9045/TravelIndia',
  },
  {
    title: 'DSM Design System',
    description:
      'A design-focused concept page with strong visual framing, brand-led styling, and modular components.',
    image: '/images/project-5.png',
    tech: ['React', 'CSS', 'Figma'],
    githubUrl: '#',
  },
  {
    title: 'Portfolio v1',
    description:
      'Personal portfolio exploring modern section flows, glassmorphism effects, and landing-page rhythm.',
    image: '/images/project-9.png',
    tech: ['React', 'TypeScript', 'Vite'],
    liveUrl: '#',
    githubUrl: '#',
  },
]

/* ──────────────────────────  Timeline  ────────────────────────── */

export const timeline: TimelineItem[] = [
  {
    title: 'MCA Postgraduate',
    organization: 'MJPRU University',
    period: '2024 – 2026',
    description:
      'Master of Computer Applications with focus on software engineering, web development, and database systems.',
    type: 'education',
  },
  {
    title: 'BCA Graduate',
    organization: 'MJPRU University',
    period: '2021 – 2024',
    description:
      'Bachelor of Computer Applications with focus on software engineering, web development, and database systems.',
    type: 'education',
  },
]

/* ──────────────────────────  Stats  ────────────────────────── */

export const stats: Stat[] = [
  { label: 'Projects Built', value: '10+' },
  { label: 'Technologies', value: '15+' },
  { label: 'Certificates', value: '10+' },
  { label: 'Years Coding', value: '3+' },
]

/* ──────────────────────────  Certifications & Awards  ────────────────────────── */

export const certificates: Certificate[] = [
  {
    title: 'Web Development',
    issuer: 'Sololearn',
    date: 'July 2024',
    image: '/images/Web Development.jpg',
    category: 'Development',
    badge: 'Verified',
  },
  {
    title: 'PostgreSQL Fundamentals',
    issuer: 'Amazon Web Services',
    date: 'Mar 2026',
    image: '/images/PostgreSQL.png',
    category: 'Development',
    badge: 'Verified',
  },  
  {
    title: 'Professional Exposure',
    issuer: 'ISO 9001 Foundation - Quality Certification',
    date: 'Mar 2026',
    image: '/images/PROFESSIONAL EXPOSURE.png',
    category: 'Technical',
    badge: 'Top Performer',
  },
  {
    title: 'AWS Fundamental',
    issuer: 'Amazon Web Services',
    date: 'Mar 2026',
    image: '/images/AWSFundamental.png',
    category: 'Technical',
    badge: 'Verified',
  },  
  {
    title: 'AWS System Manager',
    issuer: 'Amazon Web Services',
    date: 'Mar 2026',
    image: '/images/SystemManager.png',
    category: 'Technical',
    badge: 'Verified',
  },  
  {
    title: 'GoldMedalist 2023',
    issuer: 'MJPRU University',
    date: '2023 - 2024',
    image: '/images/GoldMedalist 2023.jpg',
    category: 'Awards',
    badge: 'Winner',
  },
  {
    title: 'GoldMedalist 2024',
    issuer: 'MJPRU University',
    date: '2024 - 2025',
    image: '/images/GoldMedalist 2024.jpg',
    category: 'Awards',
    badge: 'Winner',
  },
  {
    title: 'Awarded',
    issuer: 'MJPRU University',
    date: '2023',
    image: '/images/Awarded.jpg',
    category: 'Awards',
    badge: 'Winner',
  },
  {
    title: 'Poster Competition',
    issuer: 'MJPRU University',
    date: '2022 -2023',
    image: '/images/Poster Competition.jpg',
    category: 'Awards',
    badge: 'Winner',
  },
]
