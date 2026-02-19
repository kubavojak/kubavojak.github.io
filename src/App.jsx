import React from 'react';
import './App.css';

const data = {
  [cite_start]name: "Jakub Šmejkal", [cite: 12]
  title: "IT Specialist & Software Developer",
  [cite_start]summary: "Jsem student IT se zaměřením na vývoj softwaru. [cite: 16] [cite_start]Mám zkušenosti s návrhem a tvorbou aplikací i automatizací procesů. [cite: 17] [cite_start]Rád se učím nové technologie a tvořím chytrá řešení. [cite: 13, 18]",
  contact: {
    [cite_start]email: "jakoubek.smejkal@gmail.com", [cite: 2]
    [cite_start]linkedin: "https://www.linkedin.com/in/jakub-Šmejkal-49b668292", [cite: 3, 4]
    discord: "kuba_vojak",
    instagram: "https://instagram.com/kuba_vojak_"
  },
  // Vyzdvižené dovednosti podle tvého požadavku
  mainSkills: ["C#", "C", "Java", "JavaScript", "Bash", "C++", "HTML", "CSS"],
  [cite_start]otherSkills: ["Git", "ASP.NET MVC", "SQL", "Unity", "Automatizace"], [cite: 6, 7, 10]
  experience: [
    {
      [cite_start]company: "Debatní spolek Debatního deníku", [cite: 20]
      [cite_start]role: "IT Specialist", [cite: 21]
      [cite_start]period: "červenec 2024 - Současnost", [cite: 22]
      desc: "Zajištění IT podpory a správa technických řešení."
    },
    {
      [cite_start]company: "NEWTON Media", [cite: 23]
      [cite_start]role: "Stážista IT", [cite: 24]
      [cite_start]period: "duben 2024", [cite: 25]
      [cite_start]desc: "Vývoj programu pro automatické filtrování dat a nástroje pro testování funkčnosti klíčových funkcí aplikace. [cite: 27, 28]"
    },
    {
      [cite_start]company: "T-Mobile Czech Republic", [cite: 29]
      [cite_start]role: "Junior softwarový inženýr", [cite: 30]
      [cite_start]period: "duben 2023", [cite: 30]
      [cite_start]desc: "Tvorba nástroje pro automatické mazání zastaralých záznamů z databáze pro zajištění přehlednosti a snazší správy dat. [cite: 31, 32]"
    }
  ],
  education: [
    [cite_start]{ school: "FIT ČVUT v Praze", degree: "Fakulta informačních technologií", date: "očekávané ukončení 2025" }, [cite: 35]
    [cite_start]{ school: "Soukromá střední škola výpočetní techniky", degree: "C#, Computer Programming", date: "absolvováno 2021" } [cite: 36, 37]
  ]
};

function App() {
  return (
    <div className="portfolio">
      <header className="hero-section">
        <h1>{data.name}</h1>
        <p className="subtitle">{data.title}</p>
        <div className="social-links">
          <a href={`mailto:${data.contact.email}`}>Email</a>
          <a href={data.contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={data.contact.instagram} target="_blank" rel="noreferrer">Instagram</a>
          <span className="discord-tag">Discord: {data.contact.discord}</span>
        </div>
      </header>

      <section className="section">
        <h2>O mně</h2>
        <p className="bio">{data.summary}</p>
      </section>

      <section className="section">
        <h2>Klíčové technologie</h2>
        <div className="skills-grid primary">
          {data.mainSkills.map(skill => (
            <div key={skill} className="skill-card highlight">{skill}</div>
          ))}
        </div>
        <div className="skills-grid secondary">
          {data.otherSkills.map(skill => (
            <span key={skill} className="skill-badge">{skill}</span>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Pracovní zkušenosti</h2>
        {data.experience.map((exp, i) => (
          <div key={i} className="exp-item">
            <div className="exp-header">
              <h3>{exp.role} <span>@ {exp.company}</span></h3>
              <span className="date">{exp.period}</span>
            </div>
            <p>{exp.desc}</p>
          </div>
        ))}
      </section>

      <section className="section">
        <h2>Vzdělání</h2>
        {data.education.map((edu, i) => (
          <div key={i} className="edu-item">
            <p><strong>{edu.school}</strong> – {edu.degree} ({edu.date})</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;