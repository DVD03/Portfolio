import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      {/* Background decoration */}
      <div className="footer-glow" aria-hidden="true" />
      
      <div className="container footer-container reveal">
        <div className="footer-main">
          {/* Brand block */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span className="footer-logo__mark">DV</span>
              <span className="footer-logo__dot">.</span>
            </a>
            <p className="footer-tagline">
              Crafting premium digital experiences through elite UI/UX design and 
              robust fullstack engineering.
            </p>
            <div className="footer-status">
              <span className="status-dot" />
              Available for new opportunities
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-nav">
            <h4 className="footer-nav__title">Navigation</h4>
            <ul className="footer-nav__list">
              <li><a href="#home" className="footer-nav__link">Home</a></li>
              <li><a href="#projects" className="footer-nav__link">Selected Work</a></li>
              <li><a href="#vision" className="footer-nav__link">My Vision</a></li>
              <li><a href="#about" className="footer-nav__link">About Me</a></li>
            </ul>
          </div>

          {/* Social / Connect */}
          <div className="footer-social">
            <h4 className="footer-nav__title">Connect</h4>
            <div className="footer-social__grid">
              <a href="https://github.com/DVD03" target="_blank" rel="noreferrer" className="footer-social__pill">
                GitHub
              </a>
              <a href="https://linkedin.com/in" target="_blank" rel="noreferrer" className="footer-social__pill">
                LinkedIn
              </a>
              <a href="mailto:dilumvishvajith18@gmail.com" className="footer-social__pill">
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} Dilum Vishvajith Dehideniya. All rights reserved.</p>
          </div>
          <div className="footer-legal">
            <span>Built with React & Passion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
