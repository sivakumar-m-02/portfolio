// All portfolio content lives here — edit this file to update the site.
// Nothing in the components below is hardcoded content; it's all read from this object.

export const profile = {
  name: 'Sivakumar M',
  initials: 'SM',
  role: 'Associate Software Developer',
  roles: [
    'React Native Developer',
    'Full-Stack Engineer',
    'Mobile App Builder',
  ],
  location: 'Kovilpatti, Tamil Nadu, India',
  email: 'sivakumarmariappan30@gmail.com',
  phone: '+91 93607 63552',
  tagline:
    'I build cross-platform mobile apps and the backends behind them — from JWT auth and real-time sync to AI-powered natural language features, shipped to thousands of real users.',
  summary:
    'Full-stack developer with 3 years of experience building cross-platform mobile and backend applications using React Native, Node.js, and Express.js. Strong expertise in REST APIs, authentication, and AI integration, with a track record of shipping scalable, production-ready applications used by thousands of people.',
  resumeFile: '/Sivakumar_M_Resume.pdf',
  socials: [
    { label: 'Email', href: 'mailto:sivakumarmariappan30@gmail.com', kind: 'email' },
    { label: 'GitHub', href: 'https://github.com/', kind: 'github' },
    { label: 'LinkedIn', href: 'https://linkedin.com/', kind: 'linkedin' },
  ],
};

export const strengths = [
  { label: 'Cross-platform mobile', detail: 'React Native, Expo, native iOS/Android builds' },
  { label: 'API architecture', detail: 'Node.js + Express REST APIs, JWT auth, RBAC' },
  { label: 'AI integration', detail: 'Natural-language parsing, WebView AI assistants' },
  { label: 'Performance', detail: 'Memoization, lazy loading, offline sync' },
];

export const skillGroups = [
  {
    id: 'mobile',
    title: 'Mobile Development',
    accent: 'signal',
    skills: ['React Native', 'Expo', 'Android Development', 'iOS Development'],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    accent: 'signal',
    skills: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3'],
  },
  {
    id: 'state',
    title: 'State Management',
    accent: 'mint',
    skills: ['Redux', 'Redux Toolkit', 'Context API', 'MobX'],
  },
  {
    id: 'backend',
    title: 'Backend & API',
    accent: 'mint',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Axios', 'JSON'],
  },
  {
    id: 'database',
    title: 'Database',
    accent: 'amber',
    skills: ['MongoDB', 'Mongoose', 'MySQL', 'SQL'],
  },
  {
    id: 'cloud',
    title: 'Cloud & Infrastructure',
    accent: 'amber',
    skills: ['AWS S3', 'AWS EC2', 'AWS ECS', 'AWS ECR', 'CloudWatch'],
  },
  {
    id: 'languages',
    title: 'Languages',
    accent: 'signal',
    skills: ['Core Java', 'C'],
  },
  {
    id: 'tools',
    title: 'Tools & Version Control',
    accent: 'mint',
    skills: ['Git', 'GitHub', 'GitKraken', 'Android Studio', 'Xcode', 'VS Code'],
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
      'An enterprise event-platform app used by thousands of conference attendees and organizers — covering authentication, live sessions, participant management, and real-time updates.',
    features: [
      'JWT-based authentication with role-based access control',
      'Session, schedule, and participant management APIs',
      'Real-time updates, discussions, and notifications',
      'Offline data sync and QR-based attendee check-in',
      'Real-time AI-assisted conference query resolution via WebView',
    ],
    stack: ['React Native', 'Node.js', 'Express.js', 'JWT', 'MongoDB', 'REST APIs'],
  },
  {
    id: 'expense',
    name: 'Expense Tracker Application',
    role: 'React Native Developer',
    accent: 'mint',
    frame: 'finance',
    description:
      'An AI-powered personal finance app that lets people log expenses in plain language, then tracks budgets and surfaces spending insights automatically.',
    features: [
      'Natural language-based expense entry',
      'Budgeting and financial analytics dashboards',
      'Transaction management with search, filtering, and reporting',
      'Digital wallet integrations',
      'UI performance tuning for a smooth day-to-day experience',
    ],
    stack: ['React Native', 'AI / NLP', 'REST APIs', 'Redux', 'MongoDB'],
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
      'Built full-stack mobile applications end to end using React Native, Node.js, and Express.js',
      'Designed database schemas and REST APIs for authentication, sessions, and participants',
      'Implemented offline sync, QR check-in, and measurable performance optimizations',
      'Contributed across multiple production releases in Agile, cross-functional teams',
    ],
  },
];

export const achievements = [
  {
    stat: '1000s',
    label: 'Attendees & organizers served',
    detail: 'Enterprise-level mobile applications delivered to a large, active user base.',
  },
  {
    stat: '2',
    label: 'AI integrations shipped',
    detail: 'Natural-language expense entry and real-time AI-assisted conference query resolution.',
  },
  {
    stat: '3+',
    label: 'Core platform features',
    detail: 'Push notifications, QR code scanning, offline storage, and digital wallet integration.',
  },
  {
    stat: '3 yrs',
    label: 'Production experience',
    detail: 'Continuous feature delivery and optimization across live, in-production apps.',
  },
];

export const education = [
  {
    course: 'B.E. Computer Science & Engineering',
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
  'Certified in C and C++ programming',
  'Three-day Cyber Security workshop conducted by Sankar Raj Subramanian (CEO, Prompt InfoTech)',
  'Certified training on Microsoft Dynamics 365 Business Central, Great Innovus Company',
  'Highest mark in Mathematics — 12th board examination',
];

export const languagesKnown = ['English', 'Tamil'];
