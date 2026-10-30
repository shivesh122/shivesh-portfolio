import { useEffect, useState } from "react";
import { nav, profile } from "@/data/portfolio";
import { Close, Download, Menu, Moon, Sun } from "@/components/icons";

type Theme = "dark" | "light";

const readTheme = (): Theme => (document.documentElement.dataset.theme === "light" ? "light" : "dark");

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [theme, setTheme] = useState<Theme>(readTheme);

  // Background appears after scrolling: passive listener, state only changes when the value flips
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view
  useEffect(() => {
    const sections = nav.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    if (!("IntersectionObserver" in window) || !sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage unavailable */
    }
    setTheme(next);
  };

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <header className={`nav ${scrolled || open ? "scrolled" : ""}`}>
        <div className="container nav-inner">
          <a href="#top" className="brand" aria-label="Shivesh Tiwari, back to top">
            <span className="brand-mark" aria-hidden="true">ST</span>
            <span className="brand-name">Shivesh Tiwari</span>
          </a>

          <nav className="nav-links" aria-label="Primary">
            {nav.map((n) => (
              <a key={n.id} href={`#${n.id}`} className={active === n.id ? "active" : ""} aria-current={active === n.id ? "true" : undefined}>
                {n.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <button className="icon-btn" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
              {theme === "dark" ? <Sun /> : <Moon />}
            </button>
            <a className="btn btn-ghost btn-sm resume-btn" href={profile.resume} target="_blank" rel="noopener">
              <Download size={16} /> Résumé
            </a>
            <button className="icon-btn menu-btn" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>
              {open ? <Close /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        {nav.map((n) => (
          <a key={n.id} href={`#${n.id}`} className={active === n.id ? "active" : ""} onClick={() => setOpen(false)}>
            {n.label}
          </a>
        ))}
        <a className="btn btn-primary" href={profile.resume} target="_blank" rel="noopener" onClick={() => setOpen(false)}>
          <Download size={16} /> Download résumé
        </a>
      </div>
    </>
  );
};

export default Navigation;
