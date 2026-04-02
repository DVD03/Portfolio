import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import VisionMotivation from './components/VisionMotivation';
import About from './components/About';
import './App.css';
import './index.css';

function App() {
  // Intersection Observer for scroll-reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const revealEls = document.querySelectorAll('.reveal');
    revealEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-main-container">
      {/* Dynamic Aura Background */}
      <div className="aura-container" aria-hidden="true">
        <div className="aura-sphere aura-sphere--1" />
        <div className="aura-sphere aura-sphere--2" />
        <div className="aura-sphere aura-sphere--3" />
      </div>

      <Navbar />
      <br></br>
      <main>
        <Hero />
        <Projects />
        <VisionMotivation />
        <About />
      </main>
    </div>
  );
}

export default App;
