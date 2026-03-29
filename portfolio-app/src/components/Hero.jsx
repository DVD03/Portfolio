import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section animate-fade-in">
      <div className="hero-content">
        <h1 className="hero-title animate-fade-in">Dilum Vishvajith Dehideniya</h1>
        <h2 className="hero-subtitle delay-1">Fullstack Developer & UI/UX Enthusiast</h2>
        <p className="hero-text delay-2">
          Crafting premium, dynamic, and intuitive web experiences.
        </p>
        <div className="hero-actions delay-3">
          <a href="#about" className="btn">More About Me</a>
          <a href="#contact" className="btn btn-outline">Let's Connect</a>
        </div>
      </div>
      <div className="hero-image-wrapper delay-2">
        <div className="hero-image-glow"></div>
        <img src="/profile.jpeg" alt="Dilum Vishvajith" className="hero-image" />
      </div>
    </section>
  );
};

export default Hero;
