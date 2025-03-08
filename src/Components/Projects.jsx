import React from "react";
import { FaGithub } from 'react-icons/fa';
import FigmaWedding from '../assets/FigmaWedding.png';
import ProjectTwoImage from '../assets/ProjectTwoImage.jpg';

const Projects = () => {
  const projects = [
    {
      title: "Wedding Photography App",
      description: "A Figma Prototype for a wedding photography app that allows users to book photographers, view portfolios, and manage their wedding day timeline.",
      image: FigmaWedding,
      technologies: ["Figma"],
      githubLink: "https://www.figma.com/proto/omsZjCecE6lhQfyLYzxNVX/Photography-Page?node-id=3-28&t=PkLKkT9Ffsil1zKl-1" // Add your GitHub link when available
    },
    {
      title: "AI Chatbot",
      description: "Working with OpenAI to create a chatbot",
      image: ProjectTwoImage,
      technologies: ["Python", "OpenAI"],
      githubLink: "#" // Add your GitHub link when available
    }
  ];

  return (
    <section className="section" id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.githubLink} className="github-link" target="_blank" rel="noopener noreferrer">
                <FaGithub /> View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;