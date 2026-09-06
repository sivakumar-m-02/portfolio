// All portfolio content lives here — edit this file to update the site.
// Nothing in the components below is hardcoded content; it's all read from this object.

export const profile = {
  name: 'Sivakumar M',
  initials: 'SM',
  role: 'Full Stack Developer & React Native Developer',
  roles: [
    'React Native Developer',
    'Full Stack Developer',
    'Cross-Platform App Builder',
  ],
  location: 'Sivakasi, Tamil Nadu, India',
  email: 'sivakumarmariappan30@gmail.com',
  phone: '+91 93607 63552',
  tagline:
    'I build cross-platform mobile apps and scalable backend services — from TypeScript, Node.js, and Redis caching to AI-powered features and offline sync, shipped to thousands of real users.',
  summary:
    'Full Stack Developer with 3+ years of experience building cross-platform mobile applications and scalable backend services using React Native and Node.js. Skilled in designing secure, high-performance API endpoints, applying foundational system design principles, and shipping production-ready applications used by thousands of users. Adept at improving application efficiency and collaborating within Agile, cross-functional teams across the full development lifecycle.',
  resumeFile: '/Sivakumar_M_Resume.pdf',
  portfolioUrl: 'https://sivakumar-dev.vercel.app',
  socials: [
    { label: 'Email', href: 'mailto:sivakumarmariappan30@gmail.com', kind: 'email' },
    // { label: 'GitHub', href: 'https://github.com/', kind: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/siva-kumar-m-594a09238/', kind: 'linkedin' },
  ],
};

export const strengths = [
  { label: 'Cross-platform mobile', detail: 'React Native, React Navigation, Native Modules, EAS Build, Expo' },
  { label: 'API architecture', detail: 'Node.js, Express.js, TypeScript, RESTful API design, JWT & RBAC' },
  { label: 'Database & Caching', detail: 'MongoDB schema design, Redis caching, MySQL/SQL query optimization' },
  { label: 'AI & Performance', detail: 'Natural-language parsing, WebView AI assistants, memoization & lazy loading' },
];

export const skillGroups = [
  {
    id: 'mobile',
    title: 'Mobile Development',
    accent: 'signal',
    skills: [
      'React Native',
      'React Navigation',
      'Native Modules',
      'EAS Build',
      'Expo',
      'Android Development',
      'iOS Development',
      'Cross-Platform App Development',
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    accent: 'signal',
    skills: [
      'React.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'Responsive UI Design',
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    accent: 'mint',
    skills: [
      'Node.js',
      'Express.js',
      'RESTful API Design',
      'API Security',
      'JWT Authentication',
      'Middleware Development',
    ],
  },
  {
    id: 'database',
    title: 'Database Management',
    accent: 'amber',
    skills: [
      'MongoDB',
      'Mongoose',
      'MySQL',
      'SQL',
      'Redis',
      'Database Schema Design',
    ],
  },
  {
    id: 'state',
    title: 'State Management',
    accent: 'mint',
    skills: ['Redux', 'Redux Toolkit', 'Context API', 'MobX'],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    accent: 'amber',
    skills: [
      'AWS S3',
      'AWS EC2',
      'CloudWatch',
      'CI/CD Fundamentals',
      'Version Control (Git & GitHub)',
    ],
  },
  {
    id: 'testing',
    title: 'Testing & Quality',
    accent: 'mint',
    skills: ['Jest', 'Unit Testing', 'API Validation'],
  },
  {
    id: 'languages',
    title: 'Programming Languages',
    accent: 'signal',
    skills: ['JavaScript', 'TypeScript', 'Core Java', 'C'],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    accent: 'amber',
    skills: ['Git', 'GitHub', 'Android Studio', 'Xcode', 'VS Code', 'Postman'],
  },
];

export const projects = [
  {
    id: 'conference',
    name: 'Conference Management System',
    role: 'Full Stack Developer',
    accent: 'amber',
    frame: 'event',
    description:
      'A full-stack event management platform enabling real-time scheduling, session tracking, and participant management for large-scale conferences with thousands of attendees, backed by 20+ well-structured API endpoints.',
    features: [
      'Built a full-stack event platform enabling real-time scheduling, session tracking, and participant management backed by 20+ API endpoints',
      'Optimized MongoDB schemas and query patterns to improve data retrieval speed by up to 25%, with Redis caching for real-time session updates',
      'Added Native Module-based camera access for QR check-in and offline sync, cutting attendee check-in time by ~40%',
      'Strengthened platform security with JWT authentication and role-based access control (RBAC), reducing API errors by ~30%',
      'Integrated real-time AI-assisted conference query resolution via WebView for attendee support',
    ],
    stack: ['React Native', 'Node.js', 'Express.js', 'TypeScript', 'MongoDB', 'Redis', 'JWT', 'REST APIs', 'AWS'],
  },
  {
    id: 'expense',
    name: 'AI-Powered Expense Tracker Application',
    role: 'React Native Developer',
    accent: 'mint',
    frame: 'finance',
    description:
      'An AI-powered personal finance app with natural-language expense entry, smart budgeting tools, and automated financial analytics for end users.',
    features: [
      'Developed natural-language expense entry allowing users to log spending conversationally, with budgeting tools and financial analytics',
      'Implemented React Navigation for streamlined routing and improved load time by approximately 35% through memoization and lazy loading',
      'Ensured release quality with Jest unit tests and automated iOS/Android deployments via EAS Build',
      'Extended product functionality with push notifications, digital wallet integration, and categorised transaction insights',
      'Applied performance-focused engineering practices to keep mobile experiences fast, responsive, and reliable',
    ],
    stack: ['React Native', 'React Navigation', 'TypeScript', 'Node.js', 'AI / NLP', 'Jest', 'EAS Build', 'Redux'],
  },
];

export const experience = [
  {
    id: 'mitrahsoft',
    company: 'MitrahSoft',
    location: 'Kovilpatti',
    title: 'Associate Software Developer',
    period: 'October 2023 — Present',
    points: [
      'Collaborate across the full stack to design, build, and maintain cross-platform mobile applications and backend services for enterprise clients',
      'Design and implement secure API endpoints, authentication flows, and role-based access control to safeguard user data across multiple products',
      'Architect and optimize database schemas and caching strategies to support scalable, high-performance applications under growing user load',
      'Apply foundational system design principles to structure modular services, integrations, and real-time data flows',
      'Partner with Agile, cross-functional teams to plan sprints, review deliverables, and ship consistent production releases',
      'Use AI-assisted development tools and native mobile integrations to speed up delivery while maintaining code quality',
    ],
  },
];

export const achievements = [
  {
    stat: '1000s',
    label: 'End users served',
    detail: 'Delivered production-ready applications adopted by thousands of end users, maintaining reliability under real-world scale.',
  },
  {
    stat: '~35%',
    label: 'Load time improved',
    detail: 'Applied performance practices including memoization, lazy loading, and caching to boost mobile responsiveness.',
  },
  {
    stat: '~40%',
    label: 'Faster check-in speed',
    detail: 'Engineered Native Module camera access for QR check-in and offline sync, drastically cutting queue times.',
  },
  {
    stat: '3 yrs',
    label: 'Production experience',
    detail: 'Full lifecycle delivery across cross-platform mobile apps and scalable backend services with Agile teams.',
  },
];

export const education = [
  {
    course: 'B.E., Computer Science & Engineering',
    institution: 'K.L.N College of Engineering, Pottapalayam',
    year: '2019 – 2023',
    score: '8.5 CGPA',
  },
  {
    course: 'HSC',
    institution: 'Kalaimagal Hr. Sec. School, Thiruthangal',
    year: '2018 – 2019',
    score: '83.17%',
  },
  {
    course: 'SSLC',
    institution: 'Kalaimagal Hr. Sec. School, Thiruthangal',
    year: '2016 – 2017',
    score: '94%',
  },
];

export const certifications = [
  'Certified in C and C++ Programming',
  'Completed a three-day Cyber Security workshop conducted by Sankar Raj Subramanian, CEO, Prompt InfoTech',
  'Certified Training, Microsoft Dynamics 365 Business Central – Great Innovus Company',
  'Awarded highest marks in Mathematics, 12th Board Examination',
];

export const languagesKnown = ['English (Read, Write, Speak)', 'Tamil (Read, Write, Speak)'];
