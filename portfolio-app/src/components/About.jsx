import React from 'react';
import './About.css';

const skillGroups = {
  'Design': [
    { name: 'Figma' },
    { name: 'Wireframing' },
    { name: 'Prototyping' },
    { name: 'User Research' },
    { name: 'Design Systems' },
    { name: 'Adobe XD' }
  ],
  'Development': [
    { name: 'React & Next.js' },
    { name: 'Node & Express' },
    { name: 'MongoDB & SQL' },
    { name: 'Tailwind CSS' },
    { name: 'REST APIs' },
    { name: 'Git & CI/CD' }
  ]
};

const About = () => {
  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <div className="section-header reveal">
          <p className="eyebrow">About Me</p>
          <h2 className="title-secondary shimmer-text">Who I Am</h2>
        </div>

        <div className="about-grid">
          {/* Bio Side */}
          <div className="about-bio reveal">
            <p className="about-bio__text">
              I am a passionate <strong>Fullstack Developer &amp; UI/UX Designer</strong> with a 
              deep commitment to creating digital experiences that are as functional as they are 
              beautiful. My journey in tech is driven by an insatiable curiosity and a desire 
              to solve complex problems through elegant code.
            </p>
            <p className="about-bio__text">
              I specialize in building premium, scalable web applications that leverage 
              modern frameworks like React and Node.js, always with an eye for 
              pixel-perfect design and seamless user interactions.
            </p>

            <div className="glass-panel contact-card">
              <h3 className="contact-card__title">Get In Touch</h3>
              <div className="contact-links">
                <a href="mailto:dilumvishvajith18@gmail.com" className="contact-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
                  </svg>
                  dilumvishvajith18@gmail.com
                </a>
                <a href="tel:0777498608" className="contact-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  0777498608
                </a>
                <a href="https://github.com/DVD03" target="_blank" rel="noreferrer" className="contact-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                  GitHub Profile
                </a>
                <a href="https://www.linkedin.com/in/dilum-vishvajith-28a03135b" target="_blank" rel="noreferrer" className="contact-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          {/* Skills Side */}
          <div className="about-skills">
            {Object.entries(skillGroups).map(([group, skills], idx) => (
              <div key={group} className={`skills-group reveal reveal-delay-${idx + 1}`}>
                <h4 className="skills-group__title">{group}</h4>
                <div className="skills-grid">
                  {skills.map((skill) => (
                    <div className="skill-item" key={skill.name}>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
