// src/App.jsx
import React, { useEffect, useState, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackgroundCanvas from "./components/BackgroundCanvas";
import "./App.css";

function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [ringPos, setRingPos] = useState({ x: 0, y: 0 });
  const ringRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Cursor movement
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", handleMouseMove);

    // Ring animation with smooth follow
    let animationId;
    const animateRing = () => {
      ringRef.current.x += (cursorPos.x - ringRef.current.x) * 0.12;
      ringRef.current.y += (cursorPos.y - ringRef.current.y) * 0.12;
      setRingPos({ x: ringRef.current.x, y: ringRef.current.y });
      animationId = requestAnimationFrame(animateRing);
    };
    animateRing();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [cursorPos]);

  return (
    <>
      {/* Custom Cursor */}
      <div
        id="cursor"
        style={{ left: cursorPos.x + "px", top: cursorPos.y + "px" }}
      />
      <div
        id="cursor-ring"
        style={{ left: ringPos.x + "px", top: ringPos.y + "px" }}
      />

      {/* Background Canvas */}
      <BackgroundCanvas />
      <div className="noise"></div>

      {/* Main Content */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
