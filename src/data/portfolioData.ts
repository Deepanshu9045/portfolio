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
  avatar: '/src/assets/images/face.png',
  intro:
    'I build modern, responsive web applications with clean code and pixel-perfect design. BCA graduate passionate about creating digital experiences that make a difference.',
  about: [
    "I'm a recent Bachelor of Computer Applications graduate who thrives on turning ideas into polished digital products. With a strong foundation in frontend development and growing full-stack capabilities, I craft applications that are both beautiful and functional.",
    "My approach combines design thinking with practical engineering. I focus on clean architecture, reusable components, and user experiences that feel intuitive. Whether it's a dynamic SPA, a business dashboard, or an API-driven application — I bring the same attention to detail and code quality.",
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
    image: '/images/pro-1.png',
    tech: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Deepanshu9045',
  },
  {
    title: 'Amazon Clone',
    description:
      'A commerce-inspired UI project focused on familiar layout patterns, auth flows, and responsive product sections.',
    image: '/images/pro-1.png',
    tech: ['React', 'CSS', 'Firebase', 'Node.js'],
    githubUrl: '#',
  },
  {
    title: 'Structure of Universe',
    description:
      'An information-driven page showcasing rich content organization with engaging visual presentation.',
    image: '/images/pro-2.png',
    tech: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: '#',
  },
  {
    title: 'Travel India',
    description:
      'A travel-themed project with destination pages, gallery sections, and responsive design for all devices.',
    image: '/images/pro-3.png',
    tech: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: '#',
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
    title: 'BCA Graduate',
    organization: 'MJPRU University',
    period: '2021 – 2024',
    description:
      'Bachelor of Computer Applications with focus on software engineering, web development, and database systems.',
    type: 'education',
  },
  {
    title: 'Intermediate (PCM)',
    organization: 'Wood Row Senior Secondary School (CBSE)',
    period: '2020 – 2021',
    description: 'Completed intermediate with Physics, Chemistry, and Mathematics.',
    type: 'education',
  },
  {
    title: 'Freelance Web Developer',
    organization: 'Self-employed',
    period: '2024 – Present',
    description:
      'Building custom web applications for clients using React, Next.js, and Firebase. Focus on CRM tools, dashboards, and business websites.',
    type: 'experience',
  },
  {
    title: 'Personal Projects & Open Source',
    organization: 'GitHub',
    period: '2023 – Present',
    description:
      'Actively building and shipping projects — from e-commerce clones to full CRM systems with real-time features.',
    type: 'experience',
  },
]

/* ──────────────────────────  Stats  ────────────────────────── */

export const stats: Stat[] = [
  { label: 'Projects Built', value: '10+' },
  { label: 'Technologies', value: '15+' },
  { label: 'Certificates', value: '7' },
  { label: 'Years Coding', value: '3+' },
]
