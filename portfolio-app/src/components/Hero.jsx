import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section" aria-label="Introduction">
      <div className="container hero-container float-anim">
        
        {/* Centered Portrait with Orbital Rings */}
        <div className="hero-portrait-wrapper reveal">
          <div className="hero-portrait">
            <div className="hero-portrait__inner">
              <img src="/profile.jpeg" alt="Dilum Vishvajith" loading="lazy" />
            </div>
            {/* Orbital Rings */}
            <div className="portrait-orbit portrait-orbit--1" aria-hidden="true" />
            <div className="portrait-orbit portrait-orbit--2" aria-hidden="true" />
          </div>
        </div>

        {/* Headline with shimmer */}
        <h1 className="hero-headline reveal reveal-delay-1">
          <span className="shimmer-text">Crafting Future</span><br />
          Digital Experiences.
        </h1>

        {/* Sub-headline */}
        <p className="hero-subheadline reveal reveal-delay-2">
          I'm <strong>Dilum Vishvajith</strong>, a fullstack engineer &amp; UI designer 
          specializing in premium products that leave a lasting impression.
        </p>

        {/* Primary CTAs */}
        <div className="hero-cta reveal reveal-delay-3">
          <a href="#projects" className="btn-aura btn-aura--primary">
            Explore Work
          </a>
        </div>

        {/* Social Links - Integrated */}
        <div className="hero-social reveal reveal-delay-4">
          <a href="https://github.com/DVD03" target="_blank" rel="noreferrer" className="hero-social__link" aria-label="GitHub">
            GitHub
          </a>
          <a href="mailto:dilumvishvajith18@gmail.com" className="hero-social__link" aria-label="Email">
            Email
          </a>
          <a href="https://www.linkedin.com/in/dilum-vishvajith-28a03135b" target="_blank" rel="noreferrer" className="hero-social__link" aria-label="LinkedIn Profile">
            LinkedIn
          </a>
          <a href="tel:0777498608" className="hero-social__link" aria-label="Phone">
            0777498608
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator reveal reveal-delay-5">
        <div className="indicator-aura">
          <span></span>
        </div>
      </div>
    </section>

  );
};

export default Hero;
