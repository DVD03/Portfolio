import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section animate-fade-in delay-2">
      <div className="glass-panel about-panel">
        <h2 className="section-title">Professional Profile</h2>
        <div className="about-grid">
          <div className="about-item">
            <h3>🎓 Education</h3>
            <p>IT Undergraduate at Sri Lanka Institute of Information Technology (SLIIT)</p>
          </div>
          <div className="about-item">
            <h3>💻 Specialization</h3>
            <p>Development of scalable fullstack applications with a focus on modern UI/UX design and user-centric architecture.</p>
          </div>
          <div className="about-item">
            <h3>📞 Contact Details</h3>
            <p><strong>Phone:</strong> 0777498608</p>
            <p><strong>Email:</strong> dilumvishvajith18@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
