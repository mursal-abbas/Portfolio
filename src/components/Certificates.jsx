// src/components/Certificates.jsx
import React from "react";

const Certificates = () => {
  const certificates = [
    {
      title: "JavaScript",
      subtitle: "Learn JavaScript · Scrimba on Coursera",
      desc: "Mastered core JavaScript concepts, DOM manipulation, event handling, and building interactive web applications from the ground up.",
      color: "#f7df1e",
      url: "https://coursera.org/share/9fe32dd5f58778752141a304abdba09b",
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#f7df1e"
          strokeWidth="2"
        >
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      ),
    },
    {
      title: "React JS",
      subtitle: "Learn React · Scrimba on Coursera",
      desc: "Focused on modern React with hooks, component architecture, props, state management, and building real-world applications.",
      color: "#61dafb",
      url: "https://coursera.org/share/339de87dfee9b7fcf145066f2f0c9164",
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#61dafb"
          strokeWidth="2"
        >
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      ),
    },
  ];

  return (
    <section id="certificates">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">&lt;certificates /&gt;</span>
          <h2 className="section-title">My Certificates</h2>
          <div className="section-line"></div>
        </div>
        <div className="certs-grid">
          {certificates.map((cert, idx) => (
            <div
              className={`card reveal ${idx === 1 ? "reveal-delay-2" : ""}`}
              key={idx}
            >
              <div
                className="cert-icon-wrap"
                style={{
                  background: `rgba(${cert.title === "JavaScript" ? "247,223,30" : "97,218,251"},.08)`,
                  borderColor: `rgba(${cert.title === "JavaScript" ? "247,223,30" : "97,218,251"},.25)`,
                  boxShadow: `0 0 20px rgba(${cert.title === "JavaScript" ? "247,223,30" : "97,218,251"},.1)`,
                }}
              >
                {cert.icon}
              </div>
              <h3 className="cert-title" style={{ color: cert.color }}>
                {cert.title}
              </h3>
              <p className="cert-sub">{cert.subtitle}</p>
              <p className="cert-desc">{cert.desc}</p>
              <a
                href={cert.url}
                target="_blank"
                className="cert-link"
                style={{
                  borderColor: `rgba(${cert.title === "JavaScript" ? "247,223,30" : "97,218,251"},.35)`,
                  color: cert.color,
                  background: `rgba(${cert.title === "JavaScript" ? "247,223,30" : "97,218,251"},.06)`,
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
