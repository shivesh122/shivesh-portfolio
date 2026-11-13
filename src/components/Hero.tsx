import { featuredCert, profile, roles, stats } from "@/data/portfolio";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, ShieldCheck } from "@/components/icons";
import NetworkCanvas from "@/components/NetworkCanvas";
import Typewriter from "@/components/Typewriter";
import CountUp from "@/components/CountUp";

const Hero = () => (
  <section className="hero" id="top" aria-labelledby="hero-title">
    <NetworkCanvas />
    <div className="container">
      <div className="hero-grid">
        <div>
          <div className="badges hero-in" style={{ ["--d" as string]: "0s" }}>
            <span className="status">
              <span className="pulse" aria-hidden="true"></span>
              Open to Data Analyst &amp; ML Engineer roles
            </span>
            {featuredCert.url ? (
              <a className="cert-pill" href={featuredCert.url} target="_blank" rel="noopener noreferrer">
                <ShieldCheck size={15} /> Microsoft Certified · {featuredCert.code}
              </a>
            ) : (
              <span className="cert-pill">
                <ShieldCheck size={15} /> Microsoft Certified · {featuredCert.code}
              </span>
            )}
          </div>

          <h1 id="hero-title" className="hero-in" style={{ ["--d" as string]: "0.08s" }}>
            <span className="hi">Hi, I'm</span>
            <span className="grad-text shimmer">{profile.name}</span>
          </h1>

          <p className="role hero-in" style={{ ["--d" as string]: "0.16s" }}>
            <span className="sr-only">Data Analyst &amp; Machine Learning Engineer</span>
            <span className="role-lead" aria-hidden="true">Your next</span> <Typewriter words={roles} />
          </p>
          <p className="pitch hero-in" style={{ ["--d" as string]: "0.24s" }}>{profile.pitch}</p>

          <div className="hero-cta hero-in" style={{ ["--d" as string]: "0.32s" }}>
            <a className="btn btn-primary" href="#projects">
              View my work <ArrowRight size={17} />
            </a>
            <a className="btn btn-ghost" href={profile.resume} target="_blank" rel="noopener">
              <Download size={17} /> Download résumé
            </a>
          </div>

          <div className="hero-meta hero-in" style={{ ["--d" as string]: "0.4s" }}>
            <div className="socials">
              <a className="icon-btn" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                <Github />
              </a>
              <a className="icon-btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                <Linkedin />
              </a>
              <a className="icon-btn" href={`mailto:${profile.email}`} aria-label={`Email ${profile.email}`}>
                <Mail />
              </a>
            </div>
            <span className="where">
              <MapPin size={16} /> {profile.location}
            </span>
          </div>
        </div>

        <div className="portrait hero-in" style={{ ["--d" as string]: "0.2s" }}>
          <div className="portrait-glow" aria-hidden="true"></div>
          <div className="portrait-frame">
            <img
              src={profile.photo.src}
              srcSet={profile.photo.srcSet}
              sizes="(max-width: 920px) 320px, 380px"
              width={400}
              height={500}
              alt="Portrait of Shivesh Tiwari"
              {...({ fetchpriority: "high" } as Record<string, string>)}
            />
          </div>
          <div className="float-card one" aria-hidden="true">
            <span className="dot">ML</span>
            <div>
              <b>
                <CountUp value="82%" />
              </b>
              <span>fraud value caught</span>
            </div>
          </div>
          <div className="float-card two" aria-hidden="true">
            <span className="dot">BI</span>
            <div>
              <b>
                <CountUp value="86%" />
              </b>
              <span>forecast accuracy</span>
            </div>
          </div>
        </div>
      </div>

      <dl className="stats hero-in" style={{ ["--d" as string]: "0.5s" }}>
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <dt className="sr-only">{s.label}</dt>
            <dd>
              <b>
                <CountUp value={s.value} />
              </b>
              <span>{s.label}</span>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default Hero;
