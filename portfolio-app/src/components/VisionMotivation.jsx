import React from 'react';
import './VisionMotivation.css';

const visions = [
  {
    title: 'Engineering Excellence',
    description: 'I build robust, scalable architectures that prioritize performance without compromising on the aesthetic quality of the user interface.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'User-Centric Design',
    description: 'Every interaction is crafted to be intuitive, accessible, and delightful, ensuring that technology serves the human experience.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: 'Continuous Innovation',
    description: 'I stay at the forefront of modern web technologies, constantly experimenting to push the boundaries of what is possible on the web.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

const VisionMotivation = () => {
  return (
    <section id="vision" className="vision-section section-padding">
      <div className="container">
        <div className="section-header reveal">
          <p className="eyebrow">Vision &amp; Philosophy</p>
          <h2 className="title-secondary shimmer-text">Beyond Just Code</h2>
        </div>

        <div className="vision-grid">
          {visions.map((v, i) => (
            <div key={v.title} className={`vision-card reveal reveal-delay-${i + 1}`}>
              <div className="vision-card__icon">{v.icon}</div>
              <h3 className="vision-card__title">{v.title}</h3>
              <p className="vision-card__text">{v.description}</p>
            </div>
          ))}
        </div>

        <div className="vision-quote-container reveal">
          <div className="vision-glow" aria-hidden="true" />
          <p className="vision-quote">
            "Design is not just what it looks like and feels like. Design is how it works."
          </p>
          <div className="vision-author">
            <span className="vision-author__name">Steve Jobs</span>
            <span className="vision-author__title">Apple Inc.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMotivation;
