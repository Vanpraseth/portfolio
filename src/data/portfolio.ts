export type Experience = {
  role: string
  organisation: string
  companyUrl: string
  location: string
  period: string
  status: 'Ongoing' | 'Completed'
  contributions: string[]
  technologies: string[]
}

export type Project = {
  slug: string
  name: string
  type: string
  year: string
  overview: string
  image: string
  imageAlt: string
  featureTitles: string[]
  contributions: string[]
  stack: string[]
  source: string
  live?: string
  evidence?: string
}

export const profile = {
  name: 'Vanpraseth Tuy',
  shortName: 'VT',
  headline: 'Computer Science Graduate | Cybersecurity Major | Full-Stack Developer',
  location: 'Melbourne, VIC, Australia',
  email: 'vanprasethtuy@gmail.com',
  github: 'https://github.com/Vanpraseth',
  linkedin: 'https://www.linkedin.com/in/vanpraseth-tuy-553621327/',
  cv: '/Vanpraseth_Tuy_Resume.pdf',
  intro:
    'I connect cybersecurity fundamentals with practical full-stack development, building reliable web applications, data-driven tools and clear technical interfaces.',
  availabilityTitle: 'Open to full-time opportunities across',
  availability:
    'Cybersecurity, information technology, software development, software engineering, full-stack development and related technical roles.',
  about: [
    'I am a Bachelor of Computer Science graduate from Swinburne University of Technology, majoring in Cybersecurity. Across three software development internships, I have worked with full-stack web applications, Python simulations and computer vision interfaces.',
    'I enjoy turning technical requirements into practical solutions that are reliable, maintainable and easy to use. I am particularly interested in work that brings together software development, cybersecurity and thoughtful user experience.',
  ],
}

export const experiences: Experience[] = [
  {
    role: 'Full-Stack Developer Intern',
    organisation: 'Superbolt Pty Ltd',
    companyUrl: 'https://www.linkedin.com/company/superboltsignage/posts/?feedView=all',
    location: 'Melbourne, Australia',
    period: 'June 2026 - Present',
    status: 'Ongoing',
    contributions: [
      'Developed and tested responsive web applications using Laravel, React, TypeScript, Tailwind CSS and MySQL to meet business requirements.',
      'Configured Docker environments and resolved application, migration and seeding issues to help the team run and test features consistently.',
      'Tracked tasks in Jira and managed branches and pull requests through Git and Bitbucket to support code reviews and team integration.',
      'Used AI tools to assist development and debugging, checking generated code for correctness and maintainability.',
    ],
    technologies: ['Laravel', 'React', 'TypeScript', 'Tailwind CSS', 'MySQL', 'Docker', 'Kiro', 'Bitbucket'],
  },
  {
    role: 'Software Developer Intern',
    organisation: 'Shaping STEM Futures',
    companyUrl: 'https://www.linkedin.com/company/shaping-stem-futures/posts/?feedView=all',
    location: 'Melbourne, Australia',
    period: 'August 2026 - November 2026',
    status: 'Completed',
    contributions: [
      'Developed and tested a Python simulation to predict biogas production from food waste.',
      'Implemented pretreatment scenarios using literature-based inputs and stakeholder requirements.',
      'Reviewed model outputs and investigated differences in methane yield and process stability.',
      'Created data visualisations and collaborated using GitHub branches, testing and code reviews.',
    ],
    technologies: ['Python', 'Simulation', 'Data visualisation', 'GitHub'],
  },
  {
    role: 'Software Developer (Capstone Project)',
    organisation: 'Swinburne University of Technology',
    companyUrl: 'https://www.linkedin.com/school/swinburne-university-of-technology/posts/?feedView=all',
    location: 'Melbourne, Australia',
    period: 'February 2026 - October 2026',
    status: 'Completed',
    contributions: [
      'Developed a real-time computer vision interface using Python, OpenCV and NumPy.',
      'Built health-monitoring and presentation dashboards for optical-flow and divergence analysis.',
      'Translated complex vision data into clear proximity, tilt and system-health indicators.',
      'Integrated features into an existing codebase using Git and GitHub.',
    ],
    technologies: ['Python', 'OpenCV', 'NumPy', 'Computer vision', 'Git', 'GitHub'],
  },
]

export const projects: Project[] = [
  {
    slug: 'spamchecker',
    name: 'SpamChecker',
    type: 'Machine Learning Spam Detection',
    year: '2026',
    overview:
      'A full-stack web application that classifies messages as spam or safe through a React interface and FastAPI service.',
    image: '/project-spamchecker.webp',
    imageAlt: 'SpamChecker project cover with email envelopes and a blue security shield',
    featureTitles: ['Analyze at scale', 'Machine-learning pipeline', 'Measured evaluation'],
    contributions: [
      'Built single-message and batch analysis flows with confidence visualisations, risk summaries and CSV or JSON exports.',
      'Connected TF-IDF features to saved Logistic Regression and Random Forest models through a FastAPI backend.',
      'Trained on 123,673 deduplicated labelled messages; recorded 97.34% and 98.64% accuracy respectively on one held-out test split.',
    ],
    stack: ['Python', 'FastAPI', 'React', 'scikit-learn', 'TF-IDF', 'Pandas', 'Plotly'],
    source: 'https://github.com/Vanpraseth/SpamChecker',
    live: 'https://spamchecker-demo.onrender.com/',
    evidence:
      'Evaluation figures describe one held-out test split and do not guarantee performance on every message. This is an educational classifier, not professional security tooling.',
  },
  {
    slug: 'bookshop',
    name: 'BookShop',
    type: 'Full-Stack E-Commerce Application',
    year: '2026',
    overview:
      'A responsive online bookstore with catalogue discovery, persistent carts, checkout, order history, shipment tracking and administrator tools.',
    image: '/project-bookshop.webp',
    imageAlt: 'BookShop project cover with colourful books and an open book',
    featureTitles: ['Structured backend', 'Secure access', 'Store operations'],
    contributions: [
      'Structured the Flask backend with controllers, services, repositories and models connected to SQLite.',
      'Implemented password hashing, token-based authentication and role-based access for customer and administrator experiences.',
      'Built inventory, shipment, sales-reporting and low-stock tools for administrators.',
    ],
    stack: ['Python', 'Flask', 'SQLite', 'JavaScript', 'HTML', 'CSS', 'REST API'],
    source: 'https://github.com/Vanpraseth/BookShop',
    live: 'https://vanpraseth.github.io/BookShop/',
  },
  {
    slug: 'weatherwise',
    name: 'WeatherWise',
    type: 'Responsive Forecast Dashboard',
    year: '2026',
    overview:
      'A responsive weather dashboard that turns Open-Meteo forecast data into a practical view of current conditions and the week ahead.',
    image: '/project-weatherwise.webp',
    imageAlt: 'WeatherWise project cover with sun, clouds and weather symbols',
    featureTitles: ['Find any location', 'Forecast at a glance', 'Plan outdoor time'],
    contributions: [
      'Added city and postcode search, browser geolocation and saved locations using local storage.',
      'Presented current conditions, seven-day and 24-hour forecasts with Celsius and Fahrenheit switching.',
      'Created outdoor activity scoring and best-time recommendations from temperature, wind and rain data.',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Open-Meteo APIs', 'Local storage'],
    source: 'https://github.com/Vanpraseth/WeatherWise',
    live: 'https://vanpraseth.github.io/WeatherWise/',
  },
]

export const skillGroups = [
  {
    label: '01 / Languages',
    title: 'Programming languages',
    featured: true,
    description: '',
    skills: ['Python', 'C#', 'TypeScript', 'JavaScript', 'PHP', 'SQL', 'HTML', 'CSS', 'Bash'],
  },
  {
    label: '02 / Build',
    title: 'Frameworks & libraries',
    description: 'Tools for developing full-stack applications, simulations and computer vision interfaces.',
    skills: ['Laravel', 'React', 'FastAPI', 'Flask', 'Pandas', 'NumPy', 'OpenCV', 'Plotly', 'Tailwind CSS', 'REST APIs'],
  },
  {
    label: '03 / Data',
    title: 'Databases',
    description: 'Relational data modelling and persistence for web applications.',
    skills: ['MySQL', 'SQLite', 'Database design', 'Entity relationship diagrams'],
  },
  {
    label: '04 / Workflow',
    title: 'Development, delivery & hosting',
    description: 'Day-to-day development, collaboration, deployment and web-hosting workflows.',
    skills: ['Docker', 'Git', 'GitHub', 'Bitbucket', 'Jira', 'CI/CD workflows', 'Vercel', 'Render', 'Kali Linux'],
  },
  {
    label: '05 / Security',
    title: 'Cybersecurity & networking',
    description: 'Academic tools and foundational networking knowledge from a Cybersecurity major.',
    skills: ['Wireshark', 'Nmap', 'IDA Freeware', 'Process Monitor', 'TCP/IP', 'Network troubleshooting', 'Access control', 'Network configuration'],
  },
]

export const education = [
  {
    qualification: 'Bachelor of Computer Science',
    detail: 'Major in Cybersecurity',
    institution: 'Swinburne University of Technology',
    location: 'Melbourne, VIC',
    period: 'February 2024 - October 2026',
  },
  {
    qualification: 'Foundation of Science and Engineering',
    detail: '',
    institution: 'Swinburne University of Technology',
    location: 'Melbourne, VIC',
    period: 'February 2023 - October 2023',
  },
]

export const certificates = [
  { name: 'Introduction to Cybersecurity', issuer: 'Cisco Networking Academy', year: '2026' },
  { name: 'Introduction to Networks', issuer: 'Cisco Networking Academy', year: '2024' },
  { name: 'Switching, Routing and Wireless Essentials', issuer: 'Cisco Networking Academy', year: '2024' },
]

