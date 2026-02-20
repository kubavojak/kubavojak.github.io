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
  otherSkills: ["Git", "Linux","Windows","AI","Entity Framework", "ASP.NET MVC", "SQL", "Unity", "Docker", "Automatizace"],

  experience: [
    {
      company: "Debatní spolek DD",
      url: "https://debatnispolek.debatnidenik.cz/",
      role: "IT Specialist",
      period: "07/2024 – nyní",
      desc: "Kompletní IT podpora, správa webových služeb a technická optimalizace interních procesů organizace.",
      map: "https://www.openstreetmap.org/export/embed.html?bbox=14.386%2C50.052%2C14.456%2C50.122&layer=mapnik&marker=50.087%2C14.421"
    },
    {
      company: "NEWTON Media",
      url: "https://www.newtonmedia.cz",
      role: "Stážista — SW Development",
      period: "04/2024",
      desc: "Vývoj C# nástrojů pro automatické filtrování mediálních dat. Tvorba unit testů pro klíčové moduly aplikace.",
      map: "https://www.openstreetmap.org/export/embed.html?bbox=14.397%2C50.025%2C14.468%2C50.095&layer=mapnik&marker=50.060289%2C14.432652"
    },
    {
      company: "T-Mobile Czech Republic",
      url: "https://www.t-mobile.cz",
      role: "Stážista — Junior Software Engineer",
      period: "04/2023",
      desc: "Optimalizace databázových struktur, vývoj SQL skriptů pro automatizovanou údržbu a promazávání produkčních logů.",
      map: "https://www.openstreetmap.org/export/embed.html?bbox=14.452%2C50.012%2C14.522%2C50.082&layer=mapnik&marker=50.046805%2C14.486847"
    }
  ],

  projects: [
    {
      title: "System Bublinka",
      desc: "System pro správu a evidenci debatních zápasů, včetně plánování, výsledků a statistik účastníků.",
      tech: ["C#", ".NET", "ASP.NET MVC ", "PostgreSQL"],
      link: "https://github.com/kubavojak/Bublinka"
    },
    {
      title: "UMLDiagram_Editor",
      desc: "Nástroj pro tvorbu UML diagramů s podporou tříd, sekvenčních diagramů a generování kódu z diagramů.",
      tech: ["C#", "WinForms", "OOP"],
      link: "#"
    },
    {
      title: "Debate Timer App",
      desc: "Webová aplikace pro měření času v debatních zápasech.",
      tech: ["dart", "Flutter", "android studio"],
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
      map: "https://www.openstreetmap.org/export/embed.html?bbox=14.356%2C50.067%2C14.426%2C50.137&layer=mapnik&marker=50.102271%2C14.391157"
    },
    {
      school: "SSŠVT",
      url: "https://www.sssvt.cz",
      degree: "IT — Programování a databáze",
      date: "2021 – 2025",
      map: "https://www.openstreetmap.org/export/embed.html?bbox=14.466%2C50.087%2C14.536%2C50.157&layer=mapnik&marker=50.122271%2C14.501157"
    }
  ],

  achievements: [
    {
      title: "FIKS — Programovací soutěž ČVUT",
      result: "22. místo",
      desc: "Fakultní Individuální Korespondenční Soutěž organizovaná FIT ČVUT v Praze zaměřená na algoritmické a programátorské úlohy.",
      url: "https://fiks.fit.cvut.cz"
    },
    {
      title: "Unity Essentials",
      result: "Certifikát",
      desc: "Certifikace od Unity Technologies pokrývající základy vývoje her a interaktivních aplikací v Unity enginu.",
      url: "https://unity.com/learn"
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
    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
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
            <li><a href="#achievements">Úspěchy</a></li>
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

          {/* ACHIEVEMENTS */}
          <section id="achievements">
            <p className="section-label">Úspěchy</p>
            <div>
              {data.achievements.map((ach, i) => (
                <div key={i} className="edu-item js-fade">
                  <div className="edu-header">
                    <a href={ach.url} target="_blank" rel="noreferrer" className="edu-school">
                      {ach.title} <ArrowUpRight />
                    </a>
                    <span className="edu-date">{ach.result}</span>
                  </div>
                  <p className="edu-degree">{ach.desc}</p>
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