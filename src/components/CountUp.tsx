import { useEffect, useRef, useState } from "react";

/**
 * Counts the number inside a label ("150+", "Top 2%", "0.99") up from zero the first time it
 * scrolls into view. Labels without a number ("Daily") render as-is.
 */
const CountUp = ({ value, duration = 1400 }: { value: string; duration?: number }) => {
  const m = value.match(/^(\D*?)(\d+(?:\.\d+)?)(.*)$/);
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!m || !el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const target = parseFloat(m[2]);
    setN(0);
    let raf = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - t0) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(target * eased);
          if (p < 1) raf = requestAnimationFrame(tick);
          else setN(null);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration]);

  if (!m || n === null) return <span ref={ref} className="count">{value}</span>;
  const decimals = (m[2].split(".")[1] || "").length;
  return (
    <span ref={ref} className="count">
      {m[1]}
      {n.toFixed(decimals)}
      {m[3]}
    </span>
  );
};

export default CountUp;
