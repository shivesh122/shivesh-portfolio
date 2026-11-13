import { useEffect, useRef } from "react";

/**
 * Animated "data constellation" behind the hero: drifting nodes that link up when close
 * and reach toward the cursor. Pauses when off-screen or the tab is hidden, draws a single
 * static frame for visitors who prefer reduced motion, and re-reads colours on theme change.
 */
const hexToRgb = (hex: string) => {
  const h = hex.replace("#", "").trim();
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const n = parseInt(full, 16);
  return Number.isNaN(n) ? [45, 212, 191] : [(n >> 16) & 255, (n >> 8) & 255, n & 255];
};

const NetworkCanvas = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const LINK = 135;
    const MOUSE = 190;
    let w = 0;
    let h = 0;
    let raf = 0;
    let visible = true;
    let colA = [45, 212, 191];
    let colB = [139, 147, 255];
    const mouse = { x: -9999, y: -9999 };
    type Pt = { x: number; y: number; vx: number; vy: number; r: number; b: boolean };
    let pts: Pt[] = [];

    const readColors = () => {
      const cs = getComputedStyle(document.documentElement);
      colA = hexToRgb(cs.getPropertyValue("--accent"));
      colB = hexToRgb(cs.getPropertyValue("--accent-2"));
    };

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.max(28, Math.min(95, Math.floor((w * h) / 15000)));
      pts = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.8,
        b: Math.random() > 0.6,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        if (!reduce) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > w) p.vx *= -1;
          if (p.y < 0 || p.y > h) p.vy *= -1;
          // gentle pull toward the cursor
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const d = Math.hypot(dx, dy);
          if (d < MOUSE && d > 1) {
            p.x += (dx / d) * 0.25;
            p.y += (dy / d) * 0.25;
          }
        }
      }
      ctx.lineWidth = 1;
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK) {
            ctx.strokeStyle = `rgba(${colA[0]},${colA[1]},${colA[2]},${(1 - d / LINK) * 0.28})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        const dm = Math.hypot(a.x - mouse.x, a.y - mouse.y);
        if (dm < MOUSE) {
          ctx.strokeStyle = `rgba(${colB[0]},${colB[1]},${colB[2]},${(1 - dm / MOUSE) * 0.55})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
      for (const p of pts) {
        const c = p.b ? colB : colA;
        ctx.fillStyle = `rgba(${c[0]},${c[1]},${c[2]},0.85)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = () => {
      draw();
      raf = visible && !document.hidden ? requestAnimationFrame(loop) : 0;
    };
    const start = () => {
      if (reduce) return draw();
      if (!raf && visible && !document.hidden) raf = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
      if (reduce) draw();
    };
    const onLeave = () => {
      mouse.x = mouse.y = -9999;
    };

    readColors();
    resize();
    start();

    const ro = new ResizeObserver(() => {
      resize();
      if (reduce) draw();
    });
    ro.observe(canvas);
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      start();
    });
    io.observe(canvas);
    const mo = new MutationObserver(() => {
      readColors();
      if (reduce) draw();
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    const onVis = () => start();
    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      mo.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={ref} className="net-canvas" aria-hidden="true" />;
};

export default NetworkCanvas;
