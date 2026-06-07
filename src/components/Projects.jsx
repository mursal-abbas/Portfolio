// src/components/Projects.jsx
import React from "react";

const Projects = () => {
  const projects = [
    {
      num: "01",
      title: "Portfolio Website",
      desc: "A responsive personal portfolio website showcasing my projects, skills, and journey as a web developer. Built with modern web technologies.",
      techs: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://mursal-abbas.github.io/Portfolio",
      codeUrl: "https://github.com/mursal-abbas/Portfolio",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      ),
    },
    {
      num: "02",
      title: "Todo App",
      desc: "A simple and elegant dark-themed Todo app to add, delete, and manage daily tasks efficiently with a clean, minimal interface.",
      techs: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://mursal-abbas.github.io/Todo-App/",
      codeUrl: "https://github.com/mursal-abbas/Todo-App",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="9 11 12 14 22 4" />
          <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
        </svg>
      ),
    },
    {
      num: "03",
      title: "Recipe App",
      desc: "A modern recipe application with a stylish dark UI for exploring delicious dishes easily and beautifully.",
      techs: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://mursal-abbas.github.io/Recipe-App/",
      codeUrl: "https://github.com/mursal-abbas/Recipe-App",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M3 2l2 2-2 2" />
          <path d="M8 4h13" />
          <path d="M3 10l2 2-2 2" />
          <path d="M8 12h13" />
          <path d="M3 18l2 2-2 2" />
          <path d="M8 20h13" />
        </svg>
      ),
    },
    {
      num: "04",
      title: "Weather App",
      desc: "A simple weather application that lets users get real-time weather information about any location around the world.",
      techs: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://mursal-abbas.github.io/Weather-App/",
      codeUrl: "https://github.com/mursal-abbas/Weather-App",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="projects">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">&lt;projects /&gt;</span>
          <h2 className="section-title">My Projects</h2>
          <div className="section-line"></div>
        </div>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div
              className={`card reveal ${idx > 0 ? `reveal-delay-${idx}` : ""}`}
              key={idx}
            >
              <span className="proj-num">{project.num}</span>
              <div className="proj-icon">{project.icon}</div>
              <h3 className="proj-title">{project.title}</h3>
              <p className="proj-desc">{project.desc}</p>
              <div className="proj-techs">
                {project.techs.map((tech, tidx) => (
                  <span className="proj-tech" key={tidx}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className="proj-btns">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  className="proj-btn proj-btn-live"
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Live Demo
                </a>
                <a
                  href={project.codeUrl}
                  target="_blank"
                  className="proj-btn proj-btn-code"
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
