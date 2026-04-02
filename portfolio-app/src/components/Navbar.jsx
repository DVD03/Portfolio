import React, { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  { label: 'Home',    href: '#home' },
  { label: 'Work',    href: '#projects' },
  { label: 'Vision',  href: '#vision' },
  { label: 'About',   href: '#about' },
];

const Navbar = () => {
  const [scrolled, setScrolled]           = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen]       = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['home', 'projects', 'vision', 'about'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setMobileOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} aria-label="Primary navigation">
      <div className="nav-inner container">

        {/* Logo */}
        <a href="#home" className="nav-logo" onClick={close} aria-label="Back to top">
          DV<span>.</span>
        </a>

        {/* Desktop Links */}
        <ul className="nav-links" role="list">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={`nav-link ${activeSection === href.slice(1) ? 'nav-link--active' : ''}`}
                onClick={close}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className={`nav-hamburger ${mobileOpen ? 'nav-hamburger--open' : ''}`}
          onClick={() => setMobileOpen(v => !v)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`nav-drawer ${mobileOpen ? 'nav-drawer--open' : ''}`} aria-hidden={!mobileOpen}>
        <ul role="list">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="nav-drawer__link" onClick={close}>{label}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Backdrop */}
      {mobileOpen && <div className="nav-backdrop" onClick={close} aria-hidden="true" />}
    </nav>

  );
};

export default Navbar;
