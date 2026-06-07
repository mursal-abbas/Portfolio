// src/components/Skills.jsx
import React, { useEffect, useRef, useState } from "react";

const Skills = () => {
  const [skillsAnimated, setSkillsAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !skillsAnimated) {
          setSkillsAnimated(true);
          document.querySelectorAll(".skill-fill").forEach((el) => {
            const pct = el.getAttribute("data-pct");
            if (pct) el.style.width = pct + "%";
          });
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [skillsAnimated]);

  const skills = [
    { name: "HTML", pct: 90, color: "#ff6b35" },
    { name: "CSS", pct: 85, color: "#00d9f5" },
    { name: "JavaScript", pct: 80, color: "#f7df1e" },
    { name: "React", pct: 75, color: "#61dafb" },
    { name: "Tailwind CSS", pct: 85, color: "#06b6d4" },
    { name: "Git & GitHub", pct: 70, color: "#f05032" },
    { name: "Redux Toolkit", pct: 65, color: "#764abc" },
  ];

  const learningTags = [
    "React",
    "Tailwind CSS",
    "ES6+",
    "Responsive Design",
    "Redux Toolkit",
  ];

  return (
    <section id="skills" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">&lt;skills /&gt;</span>
          <h2 className="section-title">My Skills</h2>
          <div className="section-line"></div>
        </div>
        <div className="skills-grid">
          <div className="card reveal">
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1rem",
                marginBottom: "1.5rem",
                color: "#fff",
              }}
            >
              Technical Skills
            </h3>
            <div id="skills-bars">
              {skills.map((skill, idx) => (
                <div className="skill-item" key={idx}>
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-pct" style={{ color: skill.color }}>
                      {skill.pct}%
                    </span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-fill"
                      data-pct={skill.pct}
                      style={{
                        background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})`,
                        width: skillsAnimated ? `${skill.pct}%` : "0%",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            <div className="card reveal reveal-delay-1">
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1rem",
                  marginBottom: "1.25rem",
                  color: "#fff",
                }}
              >
                Currently Learning
              </h3>
              <div className="learning-tags">
                {learningTags.map((tag, idx) => (
                  <span className="learning-tag" key={idx}>
                    <span className="learning-dot"></span>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="card reveal reveal-delay-2">
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1rem",
                  marginBottom: "1rem",
                  color: "#fff",
                }}
              >
                Education
              </h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <p style={{ color: "#fff", fontWeight: "600" }}>11th Grade</p>
                  <p
                    style={{
                      color: "var(--c-muted)",
                      fontSize: ".85rem",
                      marginTop: ".25rem",
                    }}
                  >
                    Sindh Textbook Board
                  </p>
                </div>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: ".4rem",
                    fontFamily: "var(--font-mono)",
                    fontSize: ".68rem",
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    padding: ".3rem .75rem",
                    borderRadius: "100px",
                    background: "rgba(0,245,255,.08)",
                    border: "1px solid rgba(0,245,255,.2)",
                    color: "var(--c-cyan)",
                  }}
                >
                  <span
                    style={{
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      background: "var(--c-cyan)",
                      animation: "pulse 2s infinite",
                    }}
                  ></span>
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
