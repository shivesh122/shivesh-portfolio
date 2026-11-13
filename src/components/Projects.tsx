import { useState, type PointerEvent as RPointerEvent, type SyntheticEvent } from "react";
import SectionHead from "@/components/SectionHead";
import CountUp from "@/components/CountUp";
import { ArrowUpRight, Github } from "@/components/icons";
import { featuredProjects, moreProjects, profile, type Category } from "@/data/portfolio";
import { useReveal } from "@/hooks/useReveal";

const FILTERS: Array<"All" | Category> = ["All", "Machine Learning", "Data Analytics", "Full-Stack"];

const host = (url: string) => {
  try {
    return new URL(url).host;
  } catch {
    return url;
  }
};

// If a remotely hosted screenshot fails to load, show a neat placeholder instead of broken alt text
const onImgError = (e: SyntheticEvent<HTMLImageElement>) => {
  const img = e.currentTarget;
  const box = document.createElement("div");
  box.className = "thumb-fallback";
  box.textContent = img.dataset.title ?? "";
  img.replaceWith(box);
};

// 3D tilt for featured screenshots: writes CSS variables only, so React never re-renders
const tilt = (e: RPointerEvent<HTMLDivElement>) => {
  if (e.pointerType !== "mouse") return;
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width - 0.5;
  const y = (e.clientY - r.top) / r.height - 0.5;
  el.style.setProperty("--ry", `${x * 10}deg`);
  el.style.setProperty("--rx", `${-y * 8}deg`);
  el.style.setProperty("--gx", `${(x + 0.5) * 100}%`);
  el.style.setProperty("--gy", `${(y + 0.5) * 100}%`);
};
const untilt = (e: RPointerEvent<HTMLDivElement>) => {
  const el = e.currentTarget;
  el.style.setProperty("--ry", "0deg");
  el.style.setProperty("--rx", "0deg");
};

const Projects = () => {
  const [filter, setFilter] = useState<"All" | Category>("All");
  const shown = moreProjects.filter((p) => filter === "All" || p.category === filter);
  useReveal(); // reveal cards that appear after a filter change

  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionHead eyebrow="03 · Projects" title="Selected work, live and open source" id="projects-title">
          Every featured project is deployed: open the live demo, then read the code.
        </SectionHead>

        <div className="featured">
          {featuredProjects.map((p) => (
            <article className="card feature" key={p.title} data-reveal>
              <div className="shot" onPointerMove={tilt} onPointerLeave={untilt}>
                <div className="window">
                  <span className="glare" aria-hidden="true"></span>
                  <div className="window-bar" aria-hidden="true">
                    <i></i>
                    <i></i>
                    <i></i>
                    <span>{p.live ? host(p.live) : host(p.github)}</span>
                  </div>
                  <img src={p.image} alt={`${p.title} dashboard screenshot`} width={960} height={540} loading="lazy" decoding="async" />
                </div>
              </div>

              <div className="feature-body">
                <span className="tag">{p.category}</span>
                <h3>{p.title}</h3>
                <p>{p.description}</p>

                {p.metrics && (
                  <div className="metrics">
                    {p.metrics.map((m) => (
                      <div className="metric" key={m.label}>
                        <b className="grad-text">
                          <CountUp value={m.value} />
                        </b>
                        <span>{m.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="chips">
                  {p.tech.map((t) => (
                    <span className="chip" key={t}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="links">
                  {p.live && (
                    <a className="btn btn-primary btn-sm" href={p.live} target="_blank" rel="noopener noreferrer">
                      Live demo <ArrowUpRight size={16} />
                    </a>
                  )}
                  <a className="btn btn-ghost btn-sm" href={p.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} /> Source code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="more-head" data-reveal>
          <h3>More projects</h3>
          <div className="filters" role="group" aria-label="Filter projects">
            {FILTERS.map((f) => (
              <button key={f} className="filter" aria-pressed={filter === f} onClick={() => setFilter(f)}>
                {f}
                <small>{f === "All" ? moreProjects.length : moreProjects.filter((p) => p.category === f).length}</small>
              </button>
            ))}
          </div>
        </div>

        <div className="mini-grid">
          {shown.map((p) => (
            <article className="card card-hover mini" key={p.title} data-reveal>
              <div className="thumb">
                <img src={p.image} alt={`${p.title} screenshot`} data-title={p.title} onError={onImgError} width={640} height={360} loading="lazy" decoding="async" />
              </div>
              <div className="mini-body">
                <span className="tag">{p.category}</span>
                <h4>{p.title}</h4>
                <p>{p.description}</p>
                <div className="chips">
                  {p.tech.map((t) => (
                    <span className="chip" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mini-links">
                  {p.live && (
                    <a className="live" href={p.live} target="_blank" rel="noopener noreferrer">
                      {p.liveLabel ?? "Live demo"} <ArrowUpRight size={15} />
                    </a>
                  )}
                  <a href={p.github} target="_blank" rel="noopener noreferrer">
                    <Github size={15} /> Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="see-all">
          <a className="btn btn-ghost" href={`${profile.github}?tab=repositories`} target="_blank" rel="noopener noreferrer">
            <Github size={17} /> See everything on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
