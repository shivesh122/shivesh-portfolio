import SectionHead from "@/components/SectionHead";
import { focusAreas } from "@/data/portfolio";

const facts = [
  ["Based in", "Gorakhpur, India"],
  ["Studying", "B.Tech CSE (AI & ML), 2026"],
  ["Currently", "AI/ML Developer at Effling Kids"],
  ["Open to", "Data Analyst · ML Engineer roles"],
];

const About = () => (
  <section className="section" id="about" aria-labelledby="about-title">
    <div className="container">
      <SectionHead eyebrow="01 · About" title="Turning raw data into decisions people can act on" id="about-title" />

      <div className="about-grid">
        <div className="about-copy" data-reveal>
          <p>
            I'm a final-year <strong>Computer Science (AI &amp; ML)</strong> student and a working{" "}
            <strong>Data Analyst and ML developer</strong>. At Effling Kids I own the Power BI KPI dashboard built on
            Google Analytics 4 data in BigQuery, and present what the numbers mean to management.
          </p>
          <p>
            I like projects that go end to end: cleaning messy data, modelling it properly in SQL, building a model or
            dashboard, and <strong>shipping it live</strong> so people can actually use it. Recent examples are a
            fraud-detection system that catches 82% of fraud value and a supply-chain pipeline with 86% forecast
            accuracy.
          </p>
          <p>
            I care about honest evaluation and clear communication as much as the code, and I've mentored Python
            developers through GirlScript Summer of Code.
          </p>
        </div>

        <dl className="card card-pad facts" data-reveal data-reveal-delay="1">
          {facts.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="focus-grid">
        {focusAreas.map((f, i) => (
          <article className="card card-pad card-hover focus" key={f.title} data-reveal data-reveal-delay={String(i + 1)}>
            <span className="num">0{i + 1}</span>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
            <div className="chips">
              {f.tags.map((t) => (
                <span className="chip" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default About;
