export const asset = (file) =>
  `${import.meta.env.BASE_URL}${String(file).replace(/^\//, '')}`

export const cvHref = encodeURI(asset('Anurag Kumar Web-Developer-CV.pdf'))

export const socials = {
  linkedin: 'https://www.linkedin.com/in/anurag-kumar-9a1bb7209/',
  github: 'https://github.com/Anuragkumar7',
  instagram: 'https://www.instagram.com/anurag._.kumar._/',
  twitter: 'https://twitter.com/PRONoob86488848',
  email: 'mailto:anurag.kum.135@gmail.com',
  phone: 'tel:+918957990220',
}

export const roles = [
  'Java Full Stack Developer',
  'MERN Stack Developer',
  'C# .NET Developer',
]

export const tech = [
  'Java',
  'Spring Boot',
  'React',
  'Node.js',
  'Express',
  'C#',
  '.NET',
  'MySQL',
  'MongoDB',
  'JavaScript',
  'HTML',
  'CSS',
]

export const skills = [
  { label: 'Java / Spring Boot', value: 90 },
  { label: 'React / JavaScript', value: 88 },
  { label: 'Node.js / Express', value: 85 },
  { label: 'C# / .NET', value: 80 },
  { label: 'MySQL / MongoDB', value: 86 },
]

export const chips = [
  'HTML',
  'CSS',
  'JavaScript',
  'React.js',
  'Java',
  'Spring Boot',
  'Node.js',
  'Express.js',
  'C#',
  '.NET',
  'MySQL',
  'MongoDB',
  'C++',
]

export const education = [
  {
    dates: '2024 — 2025',
    title: 'PG-DAC, C-DAC New Delhi',
    detail: 'Post Graduate Diploma in Advanced Computing',
  },
  {
    dates: '2020 — 2024',
    title: 'B.Tech. Computer Science',
    detail: 'I.K. Gujral Punjab Technical University (IKGPTU)',
  },
]

export const experience = [
  {
    dates: 'Apr 2025 — Present',
    title: 'Software Engineer',
    company: 'Amdocs — Airtel Project',
    location: 'Noida, Uttar Pradesh',
    detail:
      'Working on the Airtel project, automating manual processes to reduce repetitive effort and make day-to-day operations easier for the team.',
    bullets: [
      'Built dashboards to track and present operational data so teams can monitor work and take faster decisions.',
      'Converted time-consuming workflows into automated steps and self-serve reports used by the project team.',
      'Collaborated with stakeholders to identify process bottlenecks and deliver practical tools that simplify production work.',
    ],
  },
  {
    dates: 'Aug 2024 — Feb 2025',
    title: 'Full Stack Training',
    company: 'C-DAC New Delhi (PG-DAC)',
    location: 'New Delhi',
    detail:
      'Built production-style applications using Java, Spring Boot, React, Node.js, and relational/NoSQL databases through the PG-DAC program.',
  },
]

export const process = [
  {
    step: '01',
    title: 'Understand the problem',
    text: 'Clarify users, constraints, and what “done” looks like before writing code.',
  },
  {
    step: '02',
    title: 'Design the system',
    text: 'Map screens, APIs, and data so frontend and backend stay aligned.',
  },
  {
    step: '03',
    title: 'Build in slices',
    text: 'Ship working features with React, Spring Boot, Node, or .NET — not a big-bang drop.',
  },
  {
    step: '04',
    title: 'Harden and hand off',
    text: 'Tighten auth, performance, and docs so the product is ready to use and extend.',
  },
]

export const services = [
  {
    icon: 'fa-solid fa-code',
    title: 'Frontend development',
    text: 'Responsive React interfaces with component architecture, state management, REST integration, and accessibility-minded UI.',
    points: ['React component systems', 'Responsive layouts', 'API-driven UI', 'Performance and accessibility'],
  },
  {
    icon: 'fa-solid fa-server',
    title: 'Backend development',
    text: 'APIs and services with Spring Boot, Node.js, Express, Java, and C# .NET — plus MySQL, MongoDB, auth, and secure deployments.',
    points: ['REST APIs', 'Auth and security', 'MySQL and MongoDB', 'Cloud-ready services'],
  },
  {
    icon: 'fa-solid fa-layer-group',
    title: 'Full stack delivery',
    text: 'End-to-end applications that connect frontend and backend cleanly, with performance, security, and maintainability in mind.',
    points: ['Product-ready features', 'Role-based access', 'Clean architecture', 'Handoff-ready code'],
  },
]

export const projects = [
  {
    slug: 'student-management-system',
    title: 'Student Management System',
    category: 'fullstack',
    tag: 'Full stack',
    image: asset('Student-Management-System.png'),
    summary: 'Real-time student administration with role-based access and automated records.',
    details:
      'A web application for managing student records, roles, and day-to-day administration. Built to keep data current and reduce manual work for staff.',
    stack: ['Java', 'Spring Boot', 'MySQL', 'Role-based access'],
    github: 'https://github.com/Anuragkumar7',
    live: '',
  },
  {
    slug: 'attendance-management-system',
    title: 'Attendance Management System',
    category: 'fullstack',
    tag: 'Full stack',
    image: asset('attendance_management-copy-2048x1188.png'),
    summary: 'Live attendance tracking, role-based permissions, and automated reporting.',
    details:
      'Tracks attendance in real time with permissioned views for staff and students, plus reporting that replaces paper registers.',
    stack: ['Java', 'Spring Boot', 'MySQL'],
    github: 'https://github.com/Anuragkumar7',
    live: '',
  },
  {
    slug: 'spotify-dashboard',
    title: 'Spotify Dashboard',
    category: 'fullstack',
    tag: 'Full stack',
    image: asset('Spotify.png'),
    summary: 'Personalized music analytics and a live dashboard for listening insights.',
    details:
      'A dashboard for music listening insights with a live preview. Focused on clear metrics and a familiar media-product layout.',
    stack: ['JavaScript', 'APIs', 'Dashboard UI'],
    github: 'https://github.com/Anuragkumar7/Spotify-web',
    live: 'https://web-spotify72.netlify.app/',
  },
  {
    slug: 'todo-list',
    title: 'To-Do List',
    category: 'frontend',
    tag: 'Frontend',
    image: asset('5665422.jpg'),
    summary: 'Task management with real-time updates, priorities, and a clean daily workflow.',
    details:
      'A lightweight task app for daily planning: add, prioritize, and keep a running list without clutter.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Anuragkumar7/todolist',
    live: '',
  },
  {
    slug: 'weather-app',
    title: 'Weather App',
    category: 'frontend',
    tag: 'Frontend',
    image: asset('weather.jpg'),
    summary: 'Live conditions and forecasts so people can plan the day with confidence.',
    details:
      'Pulls live weather data into a simple forecast view for quick planning.',
    stack: ['JavaScript', 'Weather API'],
    github: 'https://github.com/Anuragkumar7/CloudCraft',
    live: 'https://tubular-chimera-9f66bf.netlify.app/',
  },
  {
    slug: 'drum-kit',
    title: 'Drum Kit',
    category: 'frontend',
    tag: 'Frontend',
    image: asset('work-3.png'),
    summary: 'A keyboard-driven virtual kit for playing drums in the browser.',
    details:
      'Maps keyboard keys to drum sounds for an immediate, playful audio UI.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Anuragkumar7/Drum',
    live: '',
  },
  {
    slug: 'simon-game',
    title: 'Simon Game',
    category: 'frontend',
    tag: 'Frontend',
    image: asset('work-4.png'),
    summary: 'Classic lights-and-sounds memory game with sequenced pad challenges.',
    details:
      'A browser version of Simon: repeat growing sequences of lights and sounds.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Anuragkumar7/Simon-Game',
    live: 'https://simongame07.netlify.app/',
  },
  {
    slug: 'calculator',
    title: 'Calculator',
    category: 'frontend',
    tag: 'Frontend',
    image: asset('calculator.jpg'),
    summary: 'Keyboard-first calculator for fast, everyday arithmetic.',
    details:
      'Supports mouse and keyboard input for basic arithmetic in a compact interface.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Anuragkumar7/MyCalculator',
    live: 'https://simplecalculator7.netlify.app/',
  },
]

export const formEndpoint =
  'https://script.google.com/macros/s/AKfycbx3IJT_diXNnTtmY34oVcj_M8l-6qYhrGAu4jYHmPP8_CZ5kX5oJy9RTVOjVJjJRVf5Vg/exec'
