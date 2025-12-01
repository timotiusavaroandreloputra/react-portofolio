import { useEffect, useRef } from "react";

export default function SplashCursor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const scale = window.devicePixelRatio || 1;
    canvas.width = width * scale;
    canvas.height = height * scale;
    ctx.scale(scale, scale);

    const particles = [];
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    const colors = ["#7f5af0", "#2cb67d", "#00aaff", "#ff6b6b"];

    const spawn = (x, y) => {
      // Di HP dikurangi agar lebih ringan
      const count = isMobile ? 6 : 12;

      for (let i = 0; i < count; i++) {
        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * (isMobile ? 3 : 6),
          vy: (Math.random() - 0.5) * (isMobile ? 3 : 6),
          size: Math.random() * (isMobile ? 5 : 8) + 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          life: 1,
        });
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        p.life -= 0.02;
        p.size *= 0.96;

        if (p.life <= 0 || p.size <= 0.5) {
          particles.splice(i, 1);
        } else {
          ctx.globalAlpha = p.life;
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      requestAnimationFrame(render);
    };
    render();

    // === LISTENER UNTUK MOUSE ===
    const handleMouse = (e) => spawn(e.clientX, e.clientY);
    window.addEventListener("mousemove", handleMouse);

    // === LISTENER UNTUK HP (TOUCH) ===
    const handleTouch = (e) => {
      const t = e.touches[0];
      spawn(t.clientX, t.clientY);
    };
    window.addEventListener("touchmove", handleTouch, { passive: true });

    // Resize agar canvas tetap fullscreen
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * scale;
      canvas.height = height * scale;
      ctx.scale(scale, scale);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("touchmove", handleTouch);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 99999,
      }}
    />
  );
}
