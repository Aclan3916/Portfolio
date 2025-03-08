import React from "react";
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="section" id="contact">
      <h2>Let's Connect</h2>
      <div className="contact-container">
        <div className="contact-links">
          <a href="mailto:aclan3916@gmail.com" className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>Email Me</span>
          </a>

          <a href="tel:678-332-8851" className="contact-item">
            <FaPhone className="contact-icon" />
            <span>678-332-8851</span>
          </a>

          <a 
            href="https://www.linkedin.com/in/audreyclanton/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-item"
          >
            <FaLinkedin className="contact-icon" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;