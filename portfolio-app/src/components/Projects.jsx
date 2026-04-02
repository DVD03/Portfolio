import React from 'react';
import './Projects.css';

const projectList = [
  {
    id: 'jewelora',
    number: '01',
    title: 'Jewelora Jewelry',
    category: 'E-Commerce Platform',
    description:
      'A premium fine jewelry e-commerce platform engineered with a sleek checkout flow, secure user auth, and a highly intuitive product catalogue experience.',
    image: '/projects/Jewelora.png',
    link: 'https://github.com/DVD03/Jewelora-Jewelry',
    tags: ['React', 'Express', 'MongoDB'],
    accent: 'amber',
  },
  {
    id: 'hoorawa',
    number: '02',
    title: 'Hoorawa Watches',
    category: 'Luxury Retail Experience',
    description:
      'A sophisticated dark-themed luxury watch store built with Next.js. Features rapid multi-channel verification via NextAuth and immersive product presentation.',
    image: '/projects/hoorawa.png',
    link: 'https://github.com/DVD03/Hoorawa-Watches',
    tags: ['Next.js', 'NextAuth', 'Tailwind CSS'],
    accent: 'indigo',
  },
  {
    id: 'airballoon',
    number: '03',
    title: 'Air Balloon Reservation',
    category: 'Travel Booking System',
    description:
      'A dynamic scenic travel booking interface optimised for visual storytelling, real-time seat availability, and frictionless Stripe-powered checkout.',
    image: '/projects/Air baloon.png',
    link: 'https://github.com/DVD03/Air-Balloon-Reservation',
    tags: ['React', 'PostgreSQL', 'Stripe'],
    accent: 'cyan',
  },
];

const ExternalLinkIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const Projects = () => {
  return (
    <section id="projects" className="projects-section section-padding">
      <div className="container">
        {/* Header */}
        <div className="projects-header reveal">
          <p className="eyebrow">Portfolio</p>
          <h2 className="title-secondary shimmer-text">Featured Projects</h2>
        </div>
        
        <div className="projects-list">
          {projectList.map((project, index) => (
            <article
              key={project.id}
              className={`project-item reveal reveal-delay-${(index % 3) + 1}`}
            >
              {/* Visual - Aura Card */}
              <div className="project-visual">
                <div className="project-aura-card">
                  <div className="project-img-container">
                    <img src={project.image} alt={project.title} loading="lazy" />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="project-tag" key={tag}>{tag}</span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link btn-aura btn-aura--outline"
                >
                  View Case Study
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

  );
};

export default Projects;
