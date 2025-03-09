import React, { useState } from "react";
import './App.css';
import IntroAnimation from "./Components/IntroAnimation";
import Navigation from "./Components/Navigation";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Background from "./Components/Background";
import Home from "./Components/Home";
import Recommendations from "./Components/Recommendations";
import AboutMe from "./Components/AboutMe";

const AppContent = () => {
  const [showContent, setShowContent] = useState(false);
  const navigate = useNavigate();

  const handleAnimationComplete = () => {
    setShowContent(true);
    navigate('/');
  };

  return (
    <>
      {!showContent && <IntroAnimation onComplete={handleAnimationComplete} />}
      <div className={`main-content ${showContent ? 'visible' : 'hidden'}`}>
        <Background />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recommendations" element={<Recommendations />} />
        </Routes>
        <Footer className="section" id="footer" />
      </div>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
