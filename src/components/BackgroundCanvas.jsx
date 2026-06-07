// src/components/BackgroundCanvas.jsx
import React, { useEffect, useRef } from "react";

const BackgroundCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let W, H, animationId;
    let mouse = { x: -9999, y: -9999 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    document.addEventListener("mousemove", handleMouseMove);

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    // Particles
    const N = Math.min(120, Math.floor((W * H) / 9000));
    const particles = [];
    const colors = [
      "rgba(0,245,255,",
      "rgba(124,58,237,",
      "rgba(0,200,220,",
      "rgba(100,80,220,",
    ];

    const mkParticle = () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      bx: Math.random() * W,
      by: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 2 + 0.4,
      op: Math.random() * 0.5 + 0.2,
      col: colors[Math.floor(Math.random() * colors.length)],
      phase: Math.random() * Math.PI * 2,
    });

    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < N; i++) particles.push(mkParticle());
    };
    initParticles();

    // Mesh nodes
    const NODES = 6;
    const meshNodes = [];
    for (let i = 0; i < NODES; i++) {
      meshNodes.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 180 + 120,
        hue: Math.random() < 0.5 ? 188 : 260,
        op: Math.random() * 0.08 + 0.04,
      });
    }

    let frame = 0;
    const REPEL = 110;
    const RETURN = 0.045;

    const draw = () => {
      animationId = requestAnimationFrame(draw);
      ctx.clearRect(0, 0, W, H);
      frame++;

      // Mesh blobs
      meshNodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -n.r) n.x = W + n.r;
        if (n.x > W + n.r) n.x = -n.r;
        if (n.y < -n.r) n.y = H + n.r;
        if (n.y > H + n.r) n.y = -n.r;
        const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r);
        const pulse = n.op + Math.sin(frame * 0.008 + n.x * 0.005) * 0.02;
        g.addColorStop(0, `hsla(${n.hue},100%,60%,${Math.min(pulse, 0.12)})`);
        g.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      });

      // Grid lines
      ctx.strokeStyle = "rgba(0,245,255,0.025)";
      ctx.lineWidth = 0.5;
      const step = 80;
      for (let x = 0; x < W; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
        ctx.stroke();
      }
      for (let y = 0; y < H; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.stroke();
      }

      // Particles
      particles.forEach((p) => {
        p.bx += p.vx;
        p.by += p.vy;
        if (p.bx < 0) p.bx = W;
        if (p.bx > W) p.bx = 0;
        if (p.by < 0) p.by = H;
        if (p.by > H) p.by = 0;

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < REPEL && d > 0) {
          const f = (REPEL - d) / REPEL;
          const a = Math.atan2(dy, dx);
          p.x += Math.cos(a) * f * 5;
          p.y += Math.sin(a) * f * 5;
        }
        p.x += (p.bx - p.x) * RETURN;
        p.y += (p.by - p.y) * RETURN;

        const tw = p.op + Math.sin(frame * 0.022 + p.phase) * 0.12;
        const gp = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6);
        gp.addColorStop(0, `${p.col}${Math.min(tw, 1)})`);
        gp.addColorStop(0.5, `${p.col}${Math.min(tw * 0.3, 1)})`);
        gp.addColorStop(1, `${p.col}0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2);
        ctx.fillStyle = gp;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `${p.col}${Math.min(tw * 1.3, 1)})`;
        ctx.fill();
      });

      // Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0,245,255,${0.07 * (1 - d / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Mouse glow
      if (mouse.x > 0 && mouse.x < W) {
        const mg = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          160,
        );
        mg.addColorStop(0, "rgba(0,245,255,0.06)");
        mg.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 160, 0, Math.PI * 2);
        ctx.fillStyle = mg;
        ctx.fill();
      }
    };

    draw();

    // Handle window resize for particles reinitialization
    const handleResizeParticles = () => {
      resize();
      initParticles();
      // Update mesh nodes positions
      meshNodes.forEach((n) => {
        if (n.x > W) n.x = W - 100;
        if (n.y > H) n.y = H - 100;
      });
    };
    window.addEventListener("resize", handleResizeParticles);

    return () => {
      cancelAnimationFrame(animationId);
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
      window.removeEventListener("resize", handleResizeParticles);
    };
  }, []);

  return (
    <canvas
      id="bg-canvas"
      ref={canvasRef}
      style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}
    />
  );
};

export default BackgroundCanvas;
