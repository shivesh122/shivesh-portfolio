import SectionHead from "@/components/SectionHead";
import { skillGroups } from "@/data/portfolio";

const Skills = () => (
  <section className="section alt" id="skills" aria-labelledby="skills-title">
    <div className="container">
      <SectionHead eyebrow="02 · Skills" title="Tools I use to get from data to decisions" id="skills-title">
        From SQL and Power BI to scikit-learn and React, the stack behind the projects below.
      </SectionHead>

      <div className="skills-grid">
        {skillGroups.map((g, i) => (
          <div className="card card-pad skill" key={g.title} data-reveal data-reveal-delay={String((i % 3) + 1)}>
            <h3>{g.title}</h3>
            <div className="chips">
              {g.items.map((s) => (
                <span className="chip" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
