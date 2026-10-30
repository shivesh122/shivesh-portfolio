import { profile, stats } from "@/data/portfolio";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "@/components/icons";

const Hero = () => (
  <section className="hero" id="top" aria-labelledby="hero-title">
    <div className="container">
      <div className="hero-grid">
        <div>
          <span className="status">
            <span className="pulse" aria-hidden="true"></span>
            Open to Data Analyst &amp; ML Engineer roles
          </span>

          <h1 id="hero-title">
            <span className="hi">Hi, I'm</span>
            <span className="grad-text">{profile.name}</span>
          </h1>

          <p className="role">
            Data Analyst <span className="amp">&amp;</span> Machine Learning Engineer
          </p>
          <p className="pitch">{profile.pitch}</p>

          <div className="hero-cta">
            <a className="btn btn-primary" href="#projects">
              View my work <ArrowRight size={17} />
            </a>
            <a className="btn btn-ghost" href={profile.resume} target="_blank" rel="noopener">
              <Download size={17} /> Download résumé
            </a>
          </div>

          <div className="hero-meta">
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

        <div className="portrait">
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
              <b>82%</b>
              <span>fraud value caught</span>
            </div>
          </div>
          <div className="float-card two" aria-hidden="true">
            <span className="dot">BI</span>
            <div>
              <b>86%</b>
              <span>forecast accuracy</span>
            </div>
          </div>
        </div>
      </div>

      <dl className="stats">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <dt className="sr-only">{s.label}</dt>
            <dd>
              <b>{s.value}</b>
              <span>{s.label}</span>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default Hero;
