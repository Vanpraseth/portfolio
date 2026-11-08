import { useEffect, useState } from 'react'
import {
  Activity,
  Atom,
  ArrowLeft,
  ArrowRight,
  Binary,
  BrainCircuit,
  BriefcaseBusiness,
  Braces,
  ChartNoAxesCombined,
  Check,
  CloudSun,
  Code2,
  Database,
  Download,
  ExternalLink,
  Eye,
  GitMerge,
  Github,
  GraduationCap,
  HardDrive,
  KeyRound,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Network,
  Radar,
  Settings2,
  Share2,
  ShieldCheck,
  Sparkles,
  Wrench,
  X,
} from 'lucide-react'
import {
  SiBitbucket,
  SiDocker,
  SiCss,
  SiFastapi,
  SiFlask,
  SiGit,
  SiGnubash,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiKalilinux,
  SiLaravel,
  SiMysql,
  SiNumpy,
  SiOpencv,
  SiPandas,
  SiPhp,
  SiPlotly,
  SiPython,
  SiReact,
  SiRender,
  SiSharp,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiWireshark,
} from 'react-icons/si'
import {
  certificates,
  education,
  experiences,
  profile,
  projects,
  skillGroups,
  type Project,
} from './data/portfolio'

const navItems = [
  ['About', '#about'],
  ['Experience', '#experience'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Education', '#education'],
]

function ExternalAnchor({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a href={href} className={className} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

function SectionHeading({ index, eyebrow, title }: { index: string; eyebrow?: string; title: string }) {
  return (
    <div className="section-heading reveal">
      <span className="section-index">{index}</span>
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2>{title}</h2>
      </div>
    </div>
  )
}

const technologyIcons: Record<string, React.ReactNode> = {
  Laravel: <SiLaravel aria-hidden="true" />,
  React: <SiReact aria-hidden="true" />,
  TypeScript: <SiTypescript aria-hidden="true" />,
  'Tailwind CSS': <SiTailwindcss aria-hidden="true" />,
  MySQL: <SiMysql aria-hidden="true" />,
  Docker: <SiDocker aria-hidden="true" />,
  Kiro: <Sparkles aria-hidden="true" />,
  Python: <SiPython aria-hidden="true" />,
  'C#': <SiSharp aria-hidden="true" />,
  JavaScript: <SiJavascript aria-hidden="true" />,
  PHP: <SiPhp aria-hidden="true" />,
  SQL: <Database aria-hidden="true" />,
  HTML: <SiHtml5 aria-hidden="true" />,
  CSS: <SiCss aria-hidden="true" />,
  Bash: <SiGnubash aria-hidden="true" />,
  GitHub: <SiGithub aria-hidden="true" />,
  OpenCV: <SiOpencv aria-hidden="true" />,
  NumPy: <SiNumpy aria-hidden="true" />,
  Simulation: <Atom aria-hidden="true" />,
  'Data visualisation': <ChartNoAxesCombined aria-hidden="true" />,
  'Computer vision': <Eye aria-hidden="true" />,
  FastAPI: <SiFastapi aria-hidden="true" />,
  'scikit-learn': <BrainCircuit aria-hidden="true" />,
  'TF-IDF': <Binary aria-hidden="true" />,
  Flask: <SiFlask aria-hidden="true" />,
  Pandas: <SiPandas aria-hidden="true" />,
  Plotly: <SiPlotly aria-hidden="true" />,
  'REST APIs': <Braces aria-hidden="true" />,
  'REST API': <Braces aria-hidden="true" />,
  'Open-Meteo APIs': <CloudSun aria-hidden="true" />,
  'Local storage': <HardDrive aria-hidden="true" />,
  SQLite: <SiSqlite aria-hidden="true" />,
  'Database design': <Database aria-hidden="true" />,
  'Entity relationship diagrams': <Share2 aria-hidden="true" />,
  Git: <SiGit aria-hidden="true" />,
  Bitbucket: <SiBitbucket aria-hidden="true" />,
  Jira: <SiJira aria-hidden="true" />,
  'CI/CD workflows': <GitMerge aria-hidden="true" />,
  Vercel: <SiVercel aria-hidden="true" />,
  Render: <SiRender aria-hidden="true" />,
  'Kali Linux': <SiKalilinux aria-hidden="true" />,
  Wireshark: <SiWireshark aria-hidden="true" />,
  Nmap: <Radar aria-hidden="true" />,
  'IDA Freeware': <Binary aria-hidden="true" />,
  'Process Monitor': <Activity aria-hidden="true" />,
  'TCP/IP': <Network aria-hidden="true" />,
  'Network troubleshooting': <Wrench aria-hidden="true" />,
  'Access control': <KeyRound aria-hidden="true" />,
  'Network configuration': <Settings2 aria-hidden="true" />,
}

const technologyColours: Record<string, string> = {
  Laravel: '#ff2d20',
  React: '#087ea4',
  TypeScript: '#3178c6',
  'Tailwind CSS': '#06b6d4',
  MySQL: '#00758f',
  Docker: '#2496ed',
  Kiro: '#7c3aed',
  Python: '#3776ab',
  'C#': '#512bd4',
  JavaScript: '#d4b600',
  PHP: '#777bb4',
  SQL: '#336791',
  HTML: '#e34f26',
  CSS: '#663399',
  Bash: '#4eaa25',
  GitHub: '#181717',
  OpenCV: '#5c3ee8',
  NumPy: '#4d77cf',
  Simulation: '#8b5cf6',
  'Data visualisation': '#e48a27',
  'Computer vision': '#16856c',
  FastAPI: '#009688',
  'scikit-learn': '#f7931e',
  'TF-IDF': '#7c3aed',
  Flask: '#222222',
  Pandas: '#150458',
  Plotly: '#3f4f75',
  'REST APIs': '#5b6476',
  'REST API': '#5b6476',
  'Open-Meteo APIs': '#168aad',
  'Local storage': '#64748b',
  SQLite: '#0f80cc',
  'Database design': '#336791',
  'Entity relationship diagrams': '#6b7280',
  Git: '#f05032',
  Bitbucket: '#0052cc',
  Jira: '#0052cc',
  'CI/CD workflows': '#7c3aed',
  Vercel: '#111111',
  Render: '#0b8f72',
  'Kali Linux': '#557c94',
  Wireshark: '#1679a7',
  Nmap: '#31599b',
  'IDA Freeware': '#8844cc',
  'Process Monitor': '#2563eb',
  'TCP/IP': '#0f766e',
  'Network troubleshooting': '#d97706',
  'Access control': '#be123c',
  'Network configuration': '#475569',
}

function TechnologyBadge({ name }: { name: string }) {
  return (
    <li>
      <span className="technology-icon" style={{ color: technologyColours[name] ?? 'var(--accent)' }}>
        {technologyIcons[name] ?? <Code2 aria-hidden="true" />}
      </span>
      <span>{name}</span>
    </li>
  )
}

function getProjectFromLocation() {
  const querySlug = new URLSearchParams(window.location.search).get('project')
  const legacySlug = window.location.hash.startsWith('#project-')
    ? window.location.hash.replace('#project-', '')
    : null
  const slug = querySlug ?? legacySlug
  return projects.find((project) => project.slug === slug) ?? null
}

function ProjectPage({ project, onBack }: { project: Project; onBack: () => void }) {
  useEffect(() => {
    const previousTitle = document.title
    document.title = `${project.name} | ${profile.name}`
    window.scrollTo({ top: 0, left: 0 })
    return () => { document.title = previousTitle }
  }, [project])

  return (
    <div className="project-page-shell">
      <a className="skip-link" href="#project-content">Skip to project content</a>
      <header className="project-page-header">
        <button className="project-page-back" type="button" onClick={onBack}>
          <ArrowLeft size={17} aria-hidden="true" /> Portfolio
        </button>
        <span className="project-page-brand">Vanpraseth Tuy</span>
        <span className="project-page-label">Project · {project.name}</span>
      </header>

      <main id="project-content" className="project-page-main">
        <section className="project-page-hero" aria-labelledby="project-page-title">
          <div className="project-page-copy">
            <p className="project-page-kicker"><span aria-hidden="true" />{project.type} · {project.year}</p>
            <h1 id="project-page-title">{project.name}</h1>
            <p className="project-page-lede">{project.overview}</p>
            <ul className="tag-list project-page-stack-preview" aria-label="Core technologies">
              {project.stack.slice(0, 4).map((item) => <TechnologyBadge name={item} key={item} />)}
            </ul>
            <div className="detail-actions project-page-actions">
              <ExternalAnchor href={project.source} className="button button-dark">
                Source code <Github size={17} aria-hidden="true" />
              </ExternalAnchor>
              {project.live && (
                <ExternalAnchor href={project.live} className="button button-outline">
                  Live demo <ExternalLink size={17} aria-hidden="true" />
                </ExternalAnchor>
              )}
            </div>
          </div>
          <div className="project-page-image">
            <img src={project.image} alt={project.imageAlt} />
          </div>
        </section>

        <section className="project-page-section project-features" aria-labelledby="project-features-title">
          <div className="project-features-intro">
            <div>
              <p className="eyebrow">Core functionality</p>
              <h2 id="project-features-title">What it does</h2>
              <p className="project-features-summary">A closer look at the main capabilities and engineering work behind {project.name}.</p>
            </div>
            <div className="project-feature-count" aria-label={`${project.contributions.length} core features`}>
              <strong>0{project.contributions.length}</strong>
              <span>Core features</span>
            </div>
          </div>
          <ol className="project-feature-list">
            {project.contributions.map((item, index) => (
              <li key={item}>
                <span className="project-feature-number">0{index + 1}</span>
                <span className="project-feature-icon"><Check size={21} aria-hidden="true" /></span>
                <div>
                  <h3>{project.featureTitles[index]}</h3>
                  <p>{item}</p>
                </div>
                <ArrowRight className="project-feature-arrow" size={22} aria-hidden="true" />
              </li>
            ))}
          </ol>
        </section>

        <section className="project-page-section project-technology" aria-labelledby="project-technology-title">
          <div className="project-page-section-heading">
            <p className="eyebrow">Technology</p>
            <h2 id="project-technology-title">Built with</h2>
          </div>
          <div className="project-technology-content">
            <ul className="tag-list project-technology-list">
              {project.stack.map((item) => <TechnologyBadge name={item} key={item} />)}
            </ul>
            {project.evidence && <p className="evidence-note">{project.evidence}</p>}
          </div>
        </section>
      </main>

      <footer className="project-page-footer">
        <button type="button" onClick={onBack}><ArrowLeft size={15} aria-hidden="true" /> Back to projects</button>
        <span>{project.name} · {project.year}</span>
      </footer>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [headerHidden, setHeaderHidden] = useState(false)
  const [headerExpanded, setHeaderExpanded] = useState(() => window.scrollY > 120)
  const [selectedProject, setSelectedProject] = useState<Project | null>(() => getProjectFromLocation())

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      document.querySelectorAll('.reveal').forEach((item) => item.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal').forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [selectedProject])

  useEffect(() => {
    const syncProjectFromUrl = () => setSelectedProject(getProjectFromLocation())
    window.addEventListener('popstate', syncProjectFromUrl)
    return () => window.removeEventListener('popstate', syncProjectFromUrl)
  }, [])

  useEffect(() => {
    if (selectedProject) return
    let lastScrollY = window.scrollY
    let frameRequested = false

    const updateHeader = () => {
      const currentScrollY = window.scrollY
      const movement = currentScrollY - lastScrollY

      setHeaderExpanded(currentScrollY > 120)

      if (menuOpen || currentScrollY < 80) {
        setHeaderHidden(false)
      } else if (Math.abs(movement) > 6) {
        setHeaderHidden(movement > 0)
      }

      lastScrollY = currentScrollY
      frameRequested = false
    }

    const handleScroll = () => {
      if (frameRequested) return
      frameRequested = true
      window.requestAnimationFrame(updateHeader)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [menuOpen, selectedProject])

  useEffect(() => {
    if (!menuOpen) return

    document.body.classList.add('nav-is-open')
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.classList.remove('nav-is-open')
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [menuOpen])

  const openProject = (project: Project) => {
    const url = new URL(window.location.href)
    url.searchParams.set('project', project.slug)
    url.hash = ''
    window.history.pushState({ portfolioProject: true }, '', `${url.pathname}${url.search}`)
    setSelectedProject(project)
    window.scrollTo({ top: 0, left: 0 })
  }

  const closeProject = () => {
    if (window.history.state?.portfolioProject) {
      window.history.back()
      return
    }
    const url = new URL(window.location.href)
    url.searchParams.delete('project')
    url.hash = 'projects'
    window.history.replaceState(null, '', `${url.pathname}${url.search}${url.hash}`)
    setSelectedProject(null)
  }

  const toggleExperienceCard = (card: HTMLElement) => {
    const shouldActivate = !card.classList.contains('is-active')
    document.querySelectorAll<HTMLElement>('.experience-card.is-active').forEach((item) => item.classList.remove('is-active'))
    if (shouldActivate) card.classList.add('is-active')
  }

  const toggleProjectCard = (card: HTMLElement) => {
    const shouldActivate = !card.classList.contains('is-active')
    document.querySelectorAll<HTMLElement>('.project-card.is-active').forEach((item) => item.classList.remove('is-active'))
    if (shouldActivate) card.classList.add('is-active')
  }

  if (selectedProject) return <ProjectPage project={selectedProject} onBack={closeProject} />

  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <header className={`site-header${headerHidden ? ' is-hidden' : ''}${headerExpanded ? ' is-expanded' : ''}${menuOpen ? ' menu-open' : ''}`}>
        <nav id="mobile-menu" className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Main navigation">
          <a className="mobile-menu-brand" href="#top" onClick={() => setMenuOpen(false)}>Vanpraseth Tuy</a>
          <div className="nav-links">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
          </div>
          <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Contact <ArrowRight size={15} aria-hidden="true" /></a>
        </nav>
        <button className="menu-button" type="button" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="hero-name reveal">
              <h1 id="hero-title"><span>Vanpraseth</span><span>Tuy</span></h1>
            </div>
            <div className="hero-details reveal">
              <ul className="hero-facts" aria-label="Profile summary">
                <li><MapPin size={16} aria-hidden="true" /> {profile.location}</li>
                <li><GraduationCap size={16} aria-hidden="true" /> Computer Science · Cybersecurity</li>
                <li><Code2 size={16} aria-hidden="true" /> Full-stack & software development</li>
              </ul>
              <p className="hero-summary">{profile.intro}</p>
              <a className="current-role" href="https://superbolt.com.au" target="_blank" rel="noreferrer" aria-label="Visit Superbolt Pty Ltd website"><span className="status-dot" aria-hidden="true" /><span className="current-role-copy">Currently working as a Full-Stack Developer Intern at <strong>Superbolt Pty Ltd</strong>.</span></a>
              <div className="hero-actions">
                <a className="button button-dark" href="#projects">View projects <ArrowRight size={17} aria-hidden="true" /></a>
                <a className="button button-outline" href={profile.cv} download="Vanpraseth_Tuy_Resume.pdf">Download CV <Download size={17} aria-hidden="true" /></a>
                <div className="hero-socials" aria-label="Social profiles">
                  <a className="hero-social-link" href={profile.github} target="_blank" rel="noreferrer" aria-label="Visit Vanpraseth Tuy on GitHub" title="GitHub">
                    <Github size={20} aria-hidden="true" />
                  </a>
                  <a className="hero-social-link hero-social-linkedin" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="Visit Vanpraseth Tuy on LinkedIn" title="LinkedIn">
                    <Linkedin size={20} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="portrait-frame reveal">
            <img src="/vanpraseth-formal-cutout.webp" alt="Vanpraseth Tuy wearing a black suit, white shirt and black tie" fetchPriority="high" />
          </div>
        </section>

        <section className="section about-section" id="about">
          <SectionHeading index="01" title="About" />
          <div className="about-grid">
            <div className="about-copy reveal">
              {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <dl className="about-points reveal">
              <div><dt>Education</dt><dd>Bachelor of Computer Science</dd></div>
              <div><dt>Major</dt><dd>Cybersecurity</dd></div>
              <div><dt>Based in</dt><dd>Melbourne, Australia</dd></div>
              <div><dt>Interested in</dt><dd>Reliable software & secure systems</dd></div>
            </dl>
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <SectionHeading index="02" title="Experience" />
          <div className="experience-list">
            {experiences.map((experience) => {
              const experienceKey = `${experience.organisation}-${experience.period}`

              return (
                <article
                  className="experience-card reveal"
                  key={experienceKey}
                  tabIndex={0}
                  onClick={(event) => {
                    if (event.target instanceof Element && event.target.closest('a, button')) return
                    toggleExperienceCard(event.currentTarget)
                  }}
                  onKeyDown={(event) => {
                    if (event.target !== event.currentTarget || (event.key !== 'Enter' && event.key !== ' ')) return
                    event.preventDefault()
                    toggleExperienceCard(event.currentTarget)
                  }}
                >
                  <div className="experience-summary">
                    <div className="experience-title-row">
                      <span className="experience-sequence">Software internship</span>
                      <span className={`status ${experience.status.toLowerCase()}`}>{experience.status}</span>
                    </div>
                    <h3>{experience.role}</h3>
                    <div className="experience-company-block">
                      <p>Company</p>
                      <ExternalAnchor href={experience.companyUrl} className="experience-company">
                        {experience.organisation} <ExternalLink size={18} aria-hidden="true" />
                      </ExternalAnchor>
                    </div>
                    <dl className="experience-facts">
                      <div><dt>Period</dt><dd>{experience.period}</dd></div>
                      <div><dt>Location</dt><dd>{experience.location}</dd></div>
                    </dl>
                    <ExternalAnchor href={experience.companyUrl} className="experience-profile-link">
                      Company profile <ExternalLink size={15} aria-hidden="true" />
                    </ExternalAnchor>
                  </div>
                  <div className="experience-detail">
                    <p className="eyebrow">Key contributions</p>
                    <ul className="contribution-list">
                      {experience.contributions.map((item) => <li key={item}><span>{item}</span></li>)}
                    </ul>
                    <ul className="tag-list">
                      {experience.technologies.map((item) => <TechnologyBadge key={item} name={item} />)}
                    </ul>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <SectionHeading index="03" title="Technical skills" />
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className={`skill-card reveal ${group.featured ? 'skill-card-featured' : ''}`} key={group.title}>
                <div className="skill-card-copy">
                  <p className="eyebrow">{group.label}</p>
                  <h3>{group.title}</h3>
                  {group.description && <p>{group.description}</p>}
                </div>
                <ul className="tag-list">
                  {group.skills.map((skill) => <TechnologyBadge key={skill} name={skill} />)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <SectionHeading index="04" title="Personal projects" />
          <div className="project-grid">
            {projects.map((project) => (
              <article
                className="project-card reveal"
                key={project.slug}
                tabIndex={0}
                onClick={(event) => {
                  if ((event.target as HTMLElement).closest('a, button')) return
                  toggleProjectCard(event.currentTarget)
                }}
                onKeyDown={(event) => {
                  if (event.target !== event.currentTarget || (event.key !== 'Enter' && event.key !== ' ')) return
                  event.preventDefault()
                  toggleProjectCard(event.currentTarget)
                }}
              >
                <div className="project-image-wrap">
                  <img src={project.image} alt={project.imageAlt} loading="lazy" />
                </div>
                <p className="eyebrow">{project.type} · {project.year}</p>
                <h3>{project.name}</h3>
                <p>{project.overview}</p>
                <ul className="project-links">
                  <li><button className="project-action-primary" type="button" onClick={() => openProject(project)}>Details <ArrowRight size={16} aria-hidden="true" /></button></li>
                  {project.live && <li><ExternalAnchor href={project.live} className="project-action-live">Live site <ExternalLink size={16} aria-hidden="true" /></ExternalAnchor></li>}
                  <li><ExternalAnchor href={project.source} className="project-action-source">Source code <Github size={16} aria-hidden="true" /></ExternalAnchor></li>
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section education-section" id="education">
          <SectionHeading index="05" title="Education" />
          <div className="education-layout">
            <section className="education-timeline reveal" aria-labelledby="academic-path-title">
              <div className="education-panel-heading">
                <div><h3 id="academic-path-title">Swinburne University of Technology</h3></div>
                <span className="education-heading-icon"><GraduationCap aria-hidden="true" /></span>
              </div>
              <div className="education-list">
              {education.map((item, index) => (
                <article key={item.qualification}>
                  <span className="education-marker">0{index + 1}</span>
                  <div>
                    <div className="education-meta"><p className="eyebrow">{item.period}</p><span>Qualification</span></div>
                    <h3>{item.qualification}</h3>
                    {item.detail && <p className="education-detail">{item.detail}</p>}
                    <p className="education-institution"><MapPin size={15} aria-hidden="true" />{item.institution} · {item.location}</p>
                  </div>
                </article>
              ))}
              </div>
            </section>
            <aside className="certificates reveal" aria-labelledby="certificates-title">
              <div className="certificate-heading">
                <div><p className="eyebrow">Professional learning</p><h3 id="certificates-title">Certificates</h3></div>
                <span className="certificate-count">0{certificates.length}</span>
              </div>
              <ul>
                {certificates.map((certificate, index) => (
                  <li key={certificate.name}>
                    <span className="certificate-index"><ShieldCheck size={18} aria-hidden="true" /><small>0{index + 1}</small></span>
                    <div><strong>{certificate.name}</strong><span>{certificate.issuer}</span></div>
                    <span className="certificate-year">{certificate.year}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-copy reveal">
            <p className="contact-opportunity-title">{profile.availabilityTitle}</p>
            <p className="contact-opportunity-detail">{profile.availability}</p>
          </div>
          <div className="contact-links reveal">
            <a href={`mailto:${profile.email}`}><Mail aria-hidden="true" /><span><small>Email</small>{profile.email}</span><ArrowRight aria-hidden="true" /></a>
            <ExternalAnchor href={profile.github}><Github aria-hidden="true" /><span><small>GitHub</small>github.com/Vanpraseth</span><ArrowRight aria-hidden="true" /></ExternalAnchor>
            <ExternalAnchor href={profile.linkedin}><Linkedin aria-hidden="true" /><span><small>LinkedIn</small>Vanpraseth Tuy</span><ArrowRight aria-hidden="true" /></ExternalAnchor>
          </div>

          <footer className="contact-footer">
            <span>Vanpraseth Tuy</span>
            <span><BriefcaseBusiness size={15} aria-hidden="true" /> Melbourne, Australia · 2026</span>
          </footer>
        </section>
      </main>

    </>
  )
}

export default App

