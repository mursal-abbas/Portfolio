// src/components/About.jsx
import React, { useEffect, useRef } from "react";

const About = () => {
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">&lt;about /&gt;</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-line"></div>
        </div>
        <div className="about-grid">
          <div className="card reveal">
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1rem",
                marginBottom: "1rem",
                color: "#fff",
              }}
            >
              Who I Am
            </h3>
            <p className="about-text">
              I'm a motivated 11th-grade student with a deep passion for
              programming and web development. Currently mastering React JS and
              JavaScript, I'm on a journey to become a skilled front-end
              developer. Beyond coding, I maintain discipline through running
              and cricket, believing that a healthy body fuels a sharp mind.
            </p>
            <div className="interest-tags">
              <span className="tag">Programming</span>
              <span className="tag">Coding</span>
              <span className="tag">Running</span>
              <span className="tag">Cricket</span>
              <span className="tag">Discipline</span>
              <span className="tag">Health</span>
            </div>
          </div>
          <div className="about-right">
            <div className="card reveal reveal-delay-1">
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1rem",
                  marginBottom: "1rem",
                  color: "#fff",
                }}
              >
                Goals
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: ".75rem",
                }}
              >
                <li
                  style={{
                    display: "flex",
                    gap: ".75rem",
                    alignItems: "flex-start",
                    fontSize: ".85rem",
                    color: "var(--c-muted)",
                  }}
                >
                  <span
                    style={{
                      background: "rgba(0,245,255,.1)",
                      border: "1px solid rgba(0,245,255,.2)",
                      borderRadius: "5px",
                      width: "22px",
                      height: "22px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: ".65rem",
                      fontFamily: "var(--font-mono)",
                      color: "var(--c-cyan)",
                      flexShrink: 0,
                      marginTop: "1px",
                    }}
                  >
                    01
                  </span>
                  Maintain discipline in life
                </li>
                <li
                  style={{
                    display: "flex",
                    gap: ".75rem",
                    alignItems: "flex-start",
                    fontSize: ".85rem",
                    color: "var(--c-muted)",
                  }}
                >
                  <span
                    style={{
                      background: "rgba(0,245,255,.1)",
                      border: "1px solid rgba(0,245,255,.2)",
                      borderRadius: "5px",
                      width: "22px",
                      height: "22px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: ".65rem",
                      fontFamily: "var(--font-mono)",
                      color: "var(--c-cyan)",
                      flexShrink: 0,
                      marginTop: "1px",
                    }}
                  >
                    02
                  </span>
                  Improve coding skills daily
                </li>
                <li
                  style={{
                    display: "flex",
                    gap: ".75rem",
                    alignItems: "flex-start",
                    fontSize: ".85rem",
                    color: "var(--c-muted)",
                  }}
                >
                  <span
                    style={{
                      background: "rgba(0,245,255,.1)",
                      border: "1px solid rgba(0,245,255,.2)",
                      borderRadius: "5px",
                      width: "22px",
                      height: "22px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: ".65rem",
                      fontFamily: "var(--font-mono)",
                      color: "var(--c-cyan)",
                      flexShrink: 0,
                      marginTop: "1px",
                    }}
                  >
                    03
                  </span>
                  Become a professional front-end developer
                </li>
              </ul>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "1rem",
              }}
            >
              <div
                className="card stat-card reveal reveal-delay-2"
                style={{ padding: "1.25rem" }}
              >
                <div className="stat-num">7+</div>
                <div className="stat-label">Technologies</div>
              </div>
              <div
                className="card stat-card reveal reveal-delay-3"
                style={{ padding: "1.25rem" }}
              >
                <div className="stat-num">4+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div
                className="card stat-card reveal reveal-delay-4"
                style={{ padding: "1.25rem" }}
              >
                <div className="stat-num">2</div>
                <div className="stat-label">Certificates</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
