// src/components/Hero.jsx
import React, { useState, useEffect } from "react";
import profileImage from "../assets/profile.jpg"; // Import your image

const Hero = () => {
  const [typewriterText, setTypewriterText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const texts = [
    "11th Grade Student",
    "React Developer",
    "Passionate Coder",
    "Front-End Developer",
  ];

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const currentText = texts[index];

        if (!deleting && charIndex <= currentText.length) {
          setTypewriterText(currentText.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else if (!deleting && charIndex > currentText.length) {
          setDeleting(true);
        } else if (deleting && charIndex >= 0) {
          setTypewriterText(currentText.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else if (deleting && charIndex < 0) {
          setDeleting(false);
          setIndex((index + 1) % texts.length);
          setCharIndex(0);
        }
      },
      deleting ? 50 : 90,
    );

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, index, texts]);

  useEffect(() => {
    const elements = [
      ".hero-badge",
      ".hero-avatar-wrap",
      ".hero-name",
      ".hero-title",
      ".hero-typewriter",
      ".hero-btns",
      ".hero-socials",
    ];

    elements.forEach((selector, i) => {
      const el = document.querySelector(selector);
      if (el) {
        el.style.animation = `fadeUp 0.8s var(--ease-out-expo) ${0.2 + i * 0.15}s forwards`;
        el.style.opacity = "0";
      }
    });
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero">
      <div>
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>Available for Projects
        </div>
        <div className="hero-avatar-wrap">
          <div className="hero-glow"></div>
          <div className="hero-avatar-ring"></div>
          <div className="hero-avatar-inner">
            <img
              src={profileImage}
              alt="Mursal Abbas"
              onError={(e) => {
                e.target.src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 160'%3E%3Crect width='160' height='160' fill='%230a1628'/%3E%3Ctext y='90' x='80' text-anchor='middle' font-size='60'%3E👤%3C/text%3E%3C/svg%3E";
              }}
            />
          </div>
        </div>
        <h1 className="hero-name">Mursal Abbas</h1>
        <p className="hero-title">Front-End Web Developer</p>
        <div className="hero-typewriter">
          <span>{typewriterText}</span>
        </div>
        <div className="hero-btns">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("projects");
            }}
            className="btn-primary"
          >
            View My Work ↗
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("contact");
            }}
            className="btn-outline"
          >
            Get In Touch
          </a>
        </div>
        <div className="hero-socials">
          <a
            href="https://github.com/mursal-abbas/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            aria-label="GitHub"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/mursal-abbas-8b5710369"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            aria-label="LinkedIn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/itz.mursal.abbas"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            aria-label="Facebook"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
            </svg>
          </a>
          <a
            href="https://instagram.com/itz.mursal.abbas/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            aria-label="Instagram"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
