import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer-section animate-fade-in delay-3">
      <div className="glass-panel footer-panel">
        <h2 className="section-title">Let's Connect</h2>
        <p>Feel free to reach out for collaborations or just a friendly chat.</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/dilum-vishvajith-28a03135b" target="_blank" rel="noopener noreferrer" className="btn">
            LinkedIn
          </a>
          <a href="https://github.com/DVD03" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            GitHub
          </a>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Dilum Vishvajith Dehideniya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
