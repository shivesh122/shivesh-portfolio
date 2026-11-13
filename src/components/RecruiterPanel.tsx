import { useEffect, useRef, useState } from "react";
import { Briefcase, Check, Close, Copy, Download, Linkedin, Mail, ShieldCheck } from "@/components/icons";
import { featuredCert, featuredProjects, profile } from "@/data/portfolio";

const CORE = ["Python", "SQL", "Power BI", "DAX", "Microsoft Fabric", "BigQuery", "Scikit-learn", "React"];

/**
 * "Hiring? 30-second summary": a floating button that opens a native <dialog> with everything a
 * recruiter needs to shortlist me without scrolling: role fit, proof, stack and one-click contact.
 */
const RecruiterPanel = () => {
  const ref = useRef<HTMLDialogElement>(null);
  const [copied, setCopied] = useState(false);
  const [show, setShow] = useState(false);

  // Slide the button in once the visitor has scrolled past the first screen
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.55);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const open = () => ref.current?.showModal();
  const close = () => ref.current?.close();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <>
      <button className={`hire-fab ${show ? "is-shown" : ""}`} onClick={open} aria-haspopup="dialog">
        <span className="pulse" aria-hidden="true"></span>
        Hiring? <b>30-sec summary</b>
      </button>

      <dialog
        ref={ref}
        className="recruiter"
        aria-labelledby="recruiter-title"
        onClick={(e) => e.target === e.currentTarget && close()}
      >
        <div className="recruiter-inner">
          <button className="icon-btn recruiter-close" onClick={close} aria-label="Close summary">
            <Close size={18} />
          </button>

          <div className="recruiter-head">
            <img src={profile.photo.src} alt="" width={64} height={64} />
            <div>
              <span className="eyebrow">The 30-second version</span>
              <h2 id="recruiter-title">{profile.name}</h2>
              <p>{profile.role}</p>
            </div>
          </div>

          <ul className="recruiter-facts">
            <li>
              <Briefcase size={17} />
              <span>
                <b>Open to:</b> Data Analyst · ML Engineer · MLOps roles
              </span>
            </li>
            <li>
              <ShieldCheck size={17} />
              <span>
                <b>{featuredCert.code}:</b> {featuredCert.name} ({featuredCert.date})
              </span>
            </li>
            <li>
              <Check size={17} />
              <span>
                <b>Now:</b> AI/ML Developer at Effling Kids, owning their GA4 + BigQuery KPI dashboard in Power BI
              </span>
            </li>
          </ul>

          <h3>Proof, in numbers</h3>
          <div className="recruiter-proof">
            {featuredProjects.map((p) => (
              <a key={p.title} href={p.live ?? p.github} target="_blank" rel="noopener noreferrer">
                <b className="grad-text">{p.metrics?.[0].value}</b>
                <span>{p.metrics?.[0].label}</span>
                <small>{p.title.split(":")[0]}</small>
              </a>
            ))}
          </div>

          <h3>Core stack</h3>
          <div className="chips">
            {CORE.map((c) => (
              <span className="chip" key={c}>
                {c}
              </span>
            ))}
          </div>

          <div className="recruiter-cta">
            <a className="btn btn-primary" href={profile.resume} target="_blank" rel="noopener">
              <Download size={17} /> Résumé (PDF)
            </a>
            <button className="btn btn-ghost" onClick={copyEmail}>
              {copied ? <Check size={17} /> : <Copy size={17} />} {copied ? "Email copied" : "Copy email"}
            </button>
            <a className="icon-btn" href={`mailto:${profile.email}`} aria-label="Email me">
              <Mail size={18} />
            </a>
            <a className="icon-btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default RecruiterPanel;
