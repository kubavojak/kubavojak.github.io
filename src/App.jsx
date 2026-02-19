import React, { useEffect } from 'react';

// --- DATA ---
const data = {
  name: "Jakub Šmejkal",
  title: "Software Developer & IT Specialist",
  summary: "Jsem student FIT ČVUT se zaměřením na vývoj softwaru. Mám zkušenosti s návrhem aplikací, automatizací procesů a prací v produkčních prostředích. Baví mě stavět věci, které fungují.",
  contact: {
    email: "jakoubek.smejkal@gmail.com",
    linkedin: "https://www.linkedin.com/in/jakub-Šmejkal-49b668292",
    discord: "kuba_vojak",
    github: "https://github.com/kubavojak",
  },
  mainSkills: ["C#", "C", "Java", "JavaScript", "Bash", "C++", "HTML", "CSS"],
  otherSkills: ["Git", "ASP.NET MVC", "SQL", "Unity", "Docker", "Automatizace"],
  
  experience: [
    {
      company: "Debatní deník",
      url: "https://debatnidenik.cz",
      role: "IT Specialist",
      period: "07/2024 – nyní",
      desc: "Kompletní IT podpora, správa webových služeb a technická optimalizace interních procesů organizace.",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.123456789!2d14.421!3d50.087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b9492167d4f9b%3A0x6b6387a329d4586d!2sPraha!5e0!3m2!1scs!2scz!4v1710000000000!5m2!1scs!2scz"
    },
    {
      company: "NEWTON Media",
      url: "https://www.newtonmedia.cz",
      role: "Stážista — SW Development",
      period: "04/2024",
      desc: "Vývoj C# nástrojů pro automatické filtrování mediálních dat. Tvorba unit testů pro klíčové moduly aplikace.",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.428459419137!2d14.4326521769188!3d50.06028881541818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b9459567c995d%3A0x58957827827f8a84!2sNEWTON%20Media%2C%20a.s.!5e0!3m2!1scs!2scz!4v1716300000000!5m2!1scs!2scz"
    },
    {
      company: "T-Mobile Czech Republic",
      url: "https://www.t-mobile.cz",
      role: "Stážista — Junior Software Engineer",
      period: "04/2023",
      desc: "Optimalizace databázových struktur, vývoj SQL skriptů pro automatizovanou údržbu a promazávání produkčních logů.",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.13847844619!2d14.48684717691819!3d50.04680481637142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b923ca55375c3%3A0x60037a505b2a0c64!2zVC1Nb2JpbGUgQ3plY2ggUmVwdWJsaWMsIGEocy4!5e0!3m2!1scs!2scz!4v1716300000000!5m2!1scs!2scz"
    }
  ],

  projects: [
    {
      title: "LogCleaner Pro",
      desc: "Automatizovaný nástroj pro správu serverových logů s integrací do Task Scheduleru.",
      tech: ["C#", ".NET", "XML"],
      link: "#"
    },
    {
      title: "MediaFilter API",
      desc: "RESTful rozhraní pro efektivní filtrování velkých datasetů z mediálních archivů.",
      tech: ["ASP.NET Core", "SQL Server"],
      link: "#"
    },
    {
      title: "Unity Pathfinding AI",
      desc: "Implementace A* algoritmu pro autonomní pohyb entit ve 2D prostředí.",
      tech: ["C#", "Unity", "Math"],
      link: "#"
    },
    {
      title: "Bash Deployment Scripts",
      desc: "Sada shell skriptů pro automatizaci nasazování webových aplikací na Linux servery.",
      tech: ["Bash", "Git", "Linux"],
      link: "#"
    }
  ],

  education: [
    {
      school: "FIT ČVUT v Praze",
      url: "https://fit.cvut.cz",
      degree: "Bc. — Fakulta informačních technologií",
      date: "2021 – 2025",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.54964646875!2d14.391157176920438!3d50.1022713142436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b951ec608665f%3A0x1994a4c6448373b9!2sFakulta%20informa%C3%8D%C3%ADch%20technologi%C3%AD%20%C4%8CVUT!5e0!3m2!1scs!2scz!4v1716300000000!5m2!1scs!2scz"
    },
    {
      school: "SSŠVT",
      url: "https://www.sssvt.cz",
      degree: "IT — Programování a databáze",
      date: "2021 – 2025",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.34964646875!2d14.501157176920438!3d50.1222713142436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470bec08665f%3A0x1994a4c6448373b9!2sSoukrom%C3%A1%20st%C5%99edn%C3%AD%20%C5%A1kola%20v%C3%BDpo%C4%8Detn%C3%AD%20techniky!5e0!3m2!1scs!2scz!4v1716300000000!5m2!1scs!2scz"
    }
  ]
};

// --- SCROLL ANIMATION HOOK ---
function useFadeIn() {
  useEffect(() => {
    const els = document.querySelectorAll('.js-fade');
    if (!els.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// --- ARROW ICON ---
const ArrowUpRight = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// --- APP ---
function App() {
  useFadeIn();

  return (
    <>
      {/* NAVIGATION */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="#" className="nav-logo">JS</a>
          <ul className="nav-links">
            <li><a href="#experience">Zkušenosti</a></li>
            <li><a href="#projects">Projekty</a></li>
            <li><a href="#education">Vzdělání</a></li>
            <li><a href="#skills">Technologie</a></li>
          </ul>
        </div>
      </nav>

      <div className="site-wrapper">
        <main>

          {/* HERO */}
          <section className="hero">
            <p className="hero-eyebrow">Dostupný pro spolupráci</p>
            <h1>{data.name}</h1>
            <p className="hero-subtitle">{data.summary}</p>
            <div className="hero-links">
              <a href={`mailto:${data.contact.email}`} className="btn-primary">
                Napište mi
              </a>
              <a href={data.contact.github} target="_blank" rel="noreferrer" className="btn-secondary">
                GitHub <ArrowUpRight />
              </a>
              <a href={data.contact.linkedin} target="_blank" rel="noreferrer" className="btn-secondary">
                LinkedIn <ArrowUpRight />
              </a>
              <span className="btn-ghost">discord: {data.contact.discord}</span>
            </div>
          </section>

          {/* EXPERIENCE */}
          <section id="experience">
            <p className="section-label">Pracovní zkušenosti</p>
            <div className="timeline">
              {data.experience.map((exp, i) => (
                <div key={i} className="timeline-item js-fade">
                  <span className="timeline-date">{exp.period}</span>
                  <div className="timeline-content">
                    <p className="timeline-role">{exp.role}</p>
                    <a href={exp.url} target="_blank" rel="noreferrer" className="timeline-company">
                      {exp.company} <ArrowUpRight />
                    </a>
                    <p className="timeline-desc">{exp.desc}</p>
                    <div className="timeline-map">
                      <iframe title={exp.company} src={exp.map} loading="lazy" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* PROJECTS */}
          <section id="projects">
            <p className="section-label">Projekty</p>
            <div className="projects-grid">
              {data.projects.map((proj, i) => (
                <a key={i} href={proj.link} className="project-card js-fade">
                  <span className="project-number">0{i + 1}</span>
                  <p className="project-title">{proj.title}</p>
                  <p className="project-desc">{proj.desc}</p>
                  <div className="tech-stack">
                    {proj.tech.map(t => (
                      <span key={t} className="tech-badge">{t}</span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* EDUCATION */}
          <section id="education">
            <p className="section-label">Vzdělání</p>
            <div>
              {data.education.map((edu, i) => (
                <div key={i} className="edu-item js-fade">
                  <div className="edu-header">
                    <a href={edu.url} target="_blank" rel="noreferrer" className="edu-school">
                      {edu.school}
                    </a>
                    <span className="edu-date">{edu.date}</span>
                  </div>
                  <p className="edu-degree">{edu.degree}</p>
                  <div className="edu-map">
                    <iframe title={edu.school} src={edu.map} loading="lazy" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SKILLS */}
          <section id="skills">
            <p className="section-label">Technologie</p>
            <div className="skills-section">
              <div className="skills-group js-fade">
                <p className="skills-group-label">Jazyky</p>
                <div className="skills-list">
                  {data.mainSkills.map(s => (
                    <span key={s} className="skill-tag">{s}</span>
                  ))}
                </div>
              </div>
              <div className="skills-group js-fade">
                <p className="skills-group-label">Nástroje &amp; Frameworky</p>
                <div className="skills-list">
                  {data.otherSkills.map(s => (
                    <span key={s} className="skill-tag-dim">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

        </main>

        {/* FOOTER */}
        <footer className="footer">
          <span>© 2025 Jakub Šmejkal</span>
          <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
        </footer>
      </div>
    </>
  );
}

export default App;