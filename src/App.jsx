import { useState } from 'react'

const profile = {
  name: 'Bharath Kumar S',
  firstName: 'Bharath',
  role: 'Frontend Developer Intern',
  location: 'Vellore, India',
  email: 'bharathkumar.mech25@gmail.com',
  github: 'https://github.com/bharath1020',
  intro: 'I develop responsive, interactive web interfaces using React, JavaScript, HTML, and CSS. My mechanical engineering background contributes a structured approach to technical problem-solving and attention to detail.',
  about: 'I am transitioning from mechanical engineering to frontend development. Since August 2026, I have been undertaking a one-year frontend development internship at Genetrobyte. My work includes developing a dashboard interface, building React components, styling responsive layouts, and implementing interactive features. My engineering experience also includes technical drawings, CAD tools, maintenance, and systematic troubleshooting.',
}

const skills = [
  { title: 'Frontend development', items: ['React.js', 'JavaScript', 'HTML', 'CSS'] },
  { title: 'Additional study', items: ['Python · coursework / self-study', 'Java · coursework / self-study'] },
  { title: 'Engineering tools', items: ['Fusion 360', 'SolidWorks', 'AutoCAD', 'Troubleshooting'] },
]

const projects = [
  { number: '01', name: 'React.js Dashboard UI', type: 'Frontend development · In progress', description: 'Developing a responsive dashboard interface with React.js, HTML, CSS, and JavaScript. Responsibilities include building UI components, styling layouts, and implementing interactive features.', tags: ['React.js', 'JavaScript', 'HTML', 'CSS'] },
  { number: '02', name: 'Sentinel Care', type: 'Smart India Hackathon 2026 · Team project', description: 'Collaborating on a healthcare-focused wearable and AI-based solution as part of a Smart India Hackathon 2026 team project.', tags: ['Healthcare', 'Wearable', 'Team project'] },
]

const engineeringProjects = [
  { name: 'Portable Abrasive Belt Trimming Machine', type: 'DESIGN & DEVELOPMENT', description: 'Designed and developed a portable abrasive belt machine to improve surface finish. The design reduced operator effort and increased trimming efficiency compared with manual methods.' },
  { name: 'Variable-Head Solar Grass Cutter for Different Terrains', type: 'DESIGN & DEVELOPMENT', description: 'Designed and developed a solar-powered grass cutter with a variable-head mechanism for uneven terrain. The design reduced manual effort and improved cutting efficiency compared with conventional grass-cutting methods.' },
  { name: 'Evaluation of Material Removal Rate in Drilling Hybrid Epoxy Composite with and without Fly Ash Natural Filler', type: 'EXPERIMENTAL ANALYSIS', description: 'Conducted an experimental analysis of material removal rate (MRR) when drilling hybrid epoxy composites. Compared results with and without fly ash natural filler to assess its effect on machining performance and material behavior.' },
]

const education = [
  { period: 'BACHELOR’S DEGREE', title: 'B.E. in Mechanical Engineering', place: 'Saveetha School of Engineering', detail: 'Engineering education supporting a foundation in technical problem-solving and design.' },
  { period: 'DIPLOMA', title: 'Tool & Die Making', place: 'NTTF', detail: 'Technical diploma in tool and die making.' },
]

const certifications = [
  { level: 'LEVEL 5', title: 'Tool and Die Maker', detail: 'Competent in designing, fabricating, and maintaining tooling for precision manufacturing.' },
  { level: 'LEVEL 5', title: 'CNC Setter cum Operator (VMC)', detail: 'Proficient in CNC machine setup, operation, and troubleshooting to support production efficiency.' },
  { level: 'LEVEL 3', title: 'Fitter, Mechanical Assembly', detail: 'Experienced in precision assembly, fitting, and maintenance of mechanical components.' },
]

const navItems = [
  ['About', 'about'], ['Experience', 'experience'], ['Skills', 'skills'], ['Projects', 'projects'], ['Education', 'education'], ['Certs', 'certifications'], ['Contact', 'contact'],
]

function SectionHeading({ eyebrow, title, note }) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {note && <p>{note}</p>}
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label={`${profile.name}, home`} onClick={closeMenu}>
          <span className="wordmark-mark"><img src="/bharath-kumar-portrait.jpeg" alt="" /></span>
          <span>{profile.name}<small>PORTFOLIO / 2026</small></span>
        </a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="sr-only">{menuOpen ? 'Close navigation' : 'Open navigation'}</span>
          <span></span><span></span>
        </button>
        <nav id="primary-navigation" className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Main navigation">
          {navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>)}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Contact <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="availability-dot"></span> FRONTEND INTERN · AUG 2026 — PRESENT</div>
            <p className="hero-kicker">FRONTEND DEVELOPMENT · REACT.JS</p>
            <h1 className="hero-name"><span>{profile.firstName}</span> <span className="hero-name-last">Kumar S</span><span className="hero-period">.</span></h1>
            <p className="hero-role">{profile.role}<span className="role-divider">/</span>{profile.location}</p>
            <p className="hero-intro">{profile.intro}</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#projects">View selected projects <span aria-hidden="true">↘</span></a>
              <a className="text-link" href="#contact">Contact me <span aria-hidden="true">↗</span></a>
            </div>
            <div className="hero-index"><span>01 — 09</span><span>SCROLL TO EXPLORE <span aria-hidden="true">↓</span></span></div>
          </div>
          <figure className="hero-portrait">
            <img src={`${import.meta.env.BASE_URL}bharath-kumar-portrait.jpeg`} alt="Portrait of Bharath Kumar S" />
            <span className="portrait-badge">ENGINEERING<br />PRECISION <span aria-hidden="true">×</span> FRONTEND</span>
            <figcaption>BHARATH KUMAR S <span>·</span> FRONTEND DEVELOPMENT</figcaption>
          </figure>
        </section>

        <div className="ticker" aria-label="Areas of interest">
          <div className="ticker-track"><span>REACT.JS</span><i>✳</i><span>RESPONSIVE INTERFACES</span><i>✳</i><span>THOUGHTFUL INTERACTIONS</span><i>✳</i><span>REACT.JS</span><i>✳</i><span>RESPONSIVE INTERFACES</span><i>✳</i><span>THOUGHTFUL INTERACTIONS</span><i>✳</i></div>
        </div>

        <section className="content-section section-wrap about-section" id="about">
          <SectionHeading eyebrow="PROFILE" title={<>Engineering foundation.<br /><em>Frontend focus.</em></>} note="MECHANICAL ENGINEERING → FRONTEND DEVELOPMENT" />
          <div className="about-grid">
            <p className="about-lead">Combining engineering experience with hands-on frontend development.</p>
            <div className="about-body"><p>{profile.about}</p><a className="text-link" href="#experience">View professional experience <span aria-hidden="true">↘</span></a></div>
          </div>
          <div className="about-facts"><div><span className="fact-index">01</span><span>Current role</span><strong>Frontend Development Intern</strong></div><div><span className="fact-index">02</span><span>Based in</span><strong>{profile.location}</strong></div><div><span className="fact-index">03</span><span>Building with</span><strong>React · JavaScript · CSS</strong></div></div>
        </section>

        <section className="content-section experience-section" id="experience">
          <div className="section-wrap">
            <SectionHeading eyebrow="PROFESSIONAL EXPERIENCE" title={<>Frontend development<br /><em>internship.</em></>} note="GENETROBYTE · AUGUST 2026 — PRESENT" />
            <article className="experience-card">
              <div className="experience-date">AUG 2026 — PRESENT<span>ONE-YEAR INTERNSHIP · IN PROGRESS</span></div>
              <div className="experience-details"><span className="project-meta">GENETROBYTE</span><h3>Frontend Development Intern</h3><p>Developing a responsive dashboard interface using React.js, HTML, CSS, and JavaScript. Responsibilities include building UI components, styling layouts, and implementing interactive features.</p><div className="project-tags"><span>React.js</span><span>JavaScript</span><span>HTML</span><span>CSS</span></div></div>
            </article>
          </div>
        </section>

        <section className="content-section skills-section" id="skills">
          <div className="section-wrap">
            <SectionHeading eyebrow="TECHNICAL SKILLS" title={<>Core competencies<span className="hero-period">.</span></>} note="FRONTEND DEVELOPMENT & ENGINEERING TOOLS" />
            <div className="skills-grid">{skills.map((group, index) => <article className="skill-card" key={group.title}><span className="skill-number">0{index + 1} / 03</span><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}><span aria-hidden="true">↗</span>{item}</li>)}</ul></article>)}</div>
            <p className="skills-footnote"><span aria-hidden="true">✳</span> Python and Java: coursework and self-study. Frontend technologies: applied in projects and internship work.</p>
          </div>
        </section>

        <section className="content-section section-wrap projects-section" id="projects">
          <SectionHeading eyebrow="PROJECT EXPERIENCE" title={<>Selected projects<span className="hero-period">.</span></>} note="FRONTEND, TEAM & ENGINEERING PROJECTS" />
          <div className="projects-list">{projects.map((project) => <article className="project-card" key={project.number}><div className="project-number">/{project.number}</div><div className="project-main"><div className="project-meta">{project.type}</div><h3>{project.name}</h3><p>{project.description}</p><div className="project-tags">{project.tags.map((tag, index) => <span key={`${tag}-${index}`}>{tag}</span>)}</div></div><a className="project-arrow" href="#contact" aria-label={`Ask me about ${project.name}`}>↗</a></article>)}</div>
          <div className="engineering-projects">
            <div className="engineering-projects-heading"><h3>Mechanical Engineering Projects</h3><p>Design and experimental work from my engineering background.</p></div>
            <div className="engineering-projects-list">{engineeringProjects.map((project, index) => <article className="engineering-project-card" key={project.name}><span className="project-number">/0{index + 1}</span><div><p className="project-meta">{project.type}</p><h4>{project.name}</h4><p className="engineering-project-description">{project.description}</p></div></article>)}</div>
          </div>
        </section>

        <section className="content-section education-section" id="education">
          <div className="section-wrap">
            <SectionHeading eyebrow="EDUCATION" title={<>Academic<br /><em>background.</em></>} note="MECHANICAL ENGINEERING & TOOL AND DIE MAKING" />
            <div className="education-grid"><div className="timeline">{education.map((item) => <article className="timeline-item" key={item.title}><span className="timeline-period">{item.period}</span><div className="timeline-entry"><span className="timeline-dot"></span><h3>{item.title}</h3><p className="timeline-place">{item.place}</p><p>{item.detail}</p></div></article>)}</div><aside className="foundation-card"><span className="eyebrow">ENGINEERING EXPERIENCE</span><h3>Technical design and maintenance.</h3><p>Experience includes mechanical drawing, CAD design, preventive and corrective maintenance, and troubleshooting.</p><div className="project-tags"><span>Fusion 360</span><span>SolidWorks</span><span>AutoCAD</span></div></aside></div>
          </div>
        </section>

        <section className="content-section certifications-section" id="certifications">
          <div className="section-wrap">
            <SectionHeading eyebrow="PROFESSIONAL CREDENTIALS" title={<>NSDC certifications<span className="hero-period">.</span></>} note="NATIONAL SKILL DEVELOPMENT CORPORATION" />
            <div className="certifications-grid">
              {certifications.map((certification, index) => (
                <article className="certification-card" key={certification.title}>
                  <div className="certification-top"><span className="skill-number">0{index + 1} / 03</span><span className="certification-level">{certification.level}</span></div>
                  <p className="certification-issuer">NSDC CERTIFICATION</p>
                  <h3>{certification.title}</h3>
                  <p className="certification-detail">{certification.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="resume-band section-wrap" id="resume">
          <div className="resume-icon" aria-hidden="true">↓</div><div><span className="eyebrow">RESUME</span><h2>Download my resume.</h2><p>This document focuses on my mechanical engineering education and experience. My frontend internship is outlined on this portfolio.</p></div><a className="button button-light" href={`${import.meta.env.BASE_URL}BharathKumar_S_Resume.pdf`} download>Download PDF <span aria-hidden="true">↗</span></a>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner"><span className="eyebrow">CONTACT</span><h2>Professional<br /><em>enquiries welcome.</em></h2><p>I welcome enquiries regarding frontend development opportunities and professional collaboration.</p><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<span aria-hidden="true">↗</span></a><div className="contact-bottom"><span>{profile.location}</span><div><a href="#projects">Projects</a><a href="#resume">Resume</a><a href={`mailto:${profile.email}`}>Email</a><a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a></div><a href="#home">BACK TO TOP ↑</a></div></div>
        </section>
      </main>

      <footer className="site-footer"><a className="wordmark" href="#home"><span className="wordmark-mark"><img src={`${import.meta.env.BASE_URL}bharath-kumar-portrait.jpeg`} alt="" /></span><span>{profile.name}<small>FRONTEND DEVELOPER</small></span></a><span>© {new Date().getFullYear()} {profile.name}. Built with React.</span><a href="#home">↑</a></footer>
    </>
  )
}

export default App
