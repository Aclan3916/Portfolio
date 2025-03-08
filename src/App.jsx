import React, { useState, useEffect } from "react";
import './App.css';
import IntroAnimation from "./Components/IntroAnimation";
import Header from "./Components/Header";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Background from "./Components/Background";

const App = () => {
  const [showContent, setShowContent] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      const scrollPosition = window.scrollY;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight - 100) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView();
  };

  return (
    <div className="app">
        <Background />
      {!showContent && <IntroAnimation onComplete={() => setShowContent(true)} />}
      <div className={`main-content ${showContent ? 'visible' : 'hidden'}`}>
        <Header className="section" id="header" activeSection={activeSection} onNavClick={handleNavClick} />
        <About className="section" id="about" />
        <Projects className="section" id="projects" />
        <Contact className="section" id="contact" />
        <Footer className="section" id="footer" />
      </div>
    </div>
  );
};

export default App;
