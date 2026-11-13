import SectionHead from "@/components/SectionHead";
import { Award, ArrowUpRight, ShieldCheck } from "@/components/icons";
import { achievements, certifications, education, featuredCert } from "@/data/portfolio";

const Education = () => (
  <section className="section" id="education" aria-labelledby="education-title">
    <div className="container">
      <SectionHead eyebrow="05 · Education & achievements" title="Foundations and recognition" id="education-title" />

      <div className="edu-grid">
        <div className="card card-pad panel" data-reveal>
          <h3>Education</h3>
          {education.map((e) => (
            <div className="edu" key={e.title}>
              <b>{e.title}</b>
              <span className="score">{e.score}</span>
              <span className="place">{e.place}</span>
              <span className="period">{e.period}</span>
            </div>
          ))}
        </div>

        <div className="card card-pad panel" data-reveal data-reveal-delay="1">
          <h3>Achievements</h3>
          <ul className="wins">
            {achievements.map((a) => (
              <li key={a}>
                <span className="ic">
                  <Award size={17} />
                </span>
                <span>{a}</span>
              </li>
            ))}
          </ul>
          <div className="certs">
            <h4>Certifications · click to verify</h4>
            {(() => {
              const inner = (
                <>
                  <span className="cert-seal" aria-hidden="true">
                    <ShieldCheck size={22} />
                  </span>
                  <span className="cert-text">
                    <small>
                      {featuredCert.issuer} · {featuredCert.date} · ID {featuredCert.credentialId}
                    </small>
                    <b>{featuredCert.name}</b>
                  </span>
                  <span className="cert-code">{featuredCert.code}</span>
                </>
              );
              return featuredCert.url ? (
                <a className="cert-feature" href={featuredCert.url} target="_blank" rel="noopener noreferrer">
                  {inner}
                </a>
              ) : (
                <div className="cert-feature">{inner}</div>
              );
            })()}
            <div className="chips">
              {certifications.map((c) => (
                <a className="chip" key={c.name} href={c.url} target="_blank" rel="noopener noreferrer">
                  {c.name} <ArrowUpRight size={13} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
