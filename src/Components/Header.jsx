import React, { useState } from "react";

const Header = () => {
  const [activeLink, setActiveLink] = useState('header');

  const handleClick = (id) => {
    setActiveLink(id);
  };

  return (
    <header className="header">
      <h3>{'< Audrey />'}</h3>
      <nav className="nav-container">
        {['about', 'projects', 'contact'].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className={`nav-link ${activeLink === item ? 'active' : ''}`}
            onClick={() => handleClick(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
