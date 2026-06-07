// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = [
        "hero",
        "about",
        "skills",
        "projects",
        "certificates",
        "contact",
      ];
      let current = "hero";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 120) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={scrolled ? "scrolled" : ""}>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("hero");
          }}
          className="nav-logo"
        >
          Mursal<span>.</span>
        </a>
        <ul className="nav-links">
          <li>
            <a
              onClick={() => scrollTo("about")}
              className={activeSection === "about" ? "active" : ""}
            >
              About
            </a>
          </li>
          <li>
            <a
              onClick={() => scrollTo("skills")}
              className={activeSection === "skills" ? "active" : ""}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              onClick={() => scrollTo("projects")}
              className={activeSection === "projects" ? "active" : ""}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              onClick={() => scrollTo("certificates")}
              className={activeSection === "certificates" ? "active" : ""}
            >
              Certs
            </a>
          </li>
          <li>
            <a
              onClick={() => scrollTo("contact")}
              className={activeSection === "contact" ? "active" : ""}
            >
              Contact
            </a>
          </li>
        </ul>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("contact");
          }}
          className="nav-cta"
        >
          Hire Me
        </a>
        <div className="hamburger" onClick={() => setMobileMenuOpen(true)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <button
          className="mobile-close"
          onClick={() => setMobileMenuOpen(false)}
        >
          ✕
        </button>
        <a onClick={() => scrollTo("about")}>About</a>
        <a onClick={() => scrollTo("skills")}>Skills</a>
        <a onClick={() => scrollTo("projects")}>Projects</a>
        <a onClick={() => scrollTo("certificates")}>Certs</a>
        <a onClick={() => scrollTo("contact")}>Contact</a>
      </div>
    </>
  );
};

export default Navbar;
