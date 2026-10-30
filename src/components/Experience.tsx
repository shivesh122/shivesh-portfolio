import SectionHead from "@/components/SectionHead";
import { experience } from "@/data/portfolio";

const Experience = () => (
  <section className="section alt" id="experience" aria-labelledby="experience-title">
    <div className="container">
      <SectionHead eyebrow="04 · Experience" title="Where I've put this to work" id="experience-title" />

      <ol className="timeline">
        {experience.map((j) => (
          <li className={`job ${j.current ? "current" : ""}`} key={j.role + j.org} data-reveal>
            <div className="job-when">
              <b>{j.period}</b>
              <span>{j.type}</span>
            </div>
            <div className="card card-pad">
              <h3>
                {j.role}
                {j.current && <span className="badge-now">Current</span>}
              </h3>
              <p className="org">{j.org}</p>
              <ul>
                {j.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <div className="chips">
                {j.tags.map((t) => (
                  <span className="chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
