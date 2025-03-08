import React, { useState, useEffect } from 'react';

const IntroAnimation = ({ onComplete }) => {
  const [visible, setVisible] = useState(true);
  const words = [
    'Developer', 
    'Designer', 
    'Creator', 
    'Innovator',
     'UI/UX Designer', 
     'Problem Solver',
    'Full Stack Developer'];
  const [backgroundWords, setBackgroundWords] = useState([]);

  useEffect(() => {
// Add background words with random positions
    const interval = setInterval(() => {
      if (backgroundWords.length < words.length) {
        setBackgroundWords(prev => [...prev, {
          word: words[prev.length],
          top: Math.random() * 80 + 10 + '%',
          left: Math.random() * 80 + 10 + '%',
          opacity: 0.6  // Increased opacity for better visibility
        }]);
      }
    }, 400);

// Fade out animation after 4 seconds
    const timeout = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 1000); // Call onComplete after fade out
    }, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className={`intro-animation ${visible ? 'visible' : 'hidden'}`}>
      <h1 className="main-name"> {'< Audrey Clanton />'} </h1>
      {backgroundWords.map((item, index) => (
        <span
          key={index}
          className="background-word"
          style={{
            top: item.top,
            left: item.left,
            opacity: item.opacity,
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'  // Added text shadow
          }}
        >
          {item.word}
        </span>
      ))}
    </div>
  );
};

export default IntroAnimation;