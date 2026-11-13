import type { ReactNode } from "react";
import SectionHead from "@/components/SectionHead";
import CountUp from "@/components/CountUp";
import { BarChart, Rocket, ShieldCheck, Target } from "@/components/icons";
import { highlights } from "@/data/portfolio";

const ICONS: Record<(typeof highlights)[number]["icon"], ReactNode> = {
  rocket: <Rocket size={20} />,
  chart: <BarChart size={20} />,
  shield: <ShieldCheck size={20} />,
  target: <Target size={20} />,
};

const Highlights = () => (
  <section className="section highlights" id="why" aria-labelledby="why-title">
    <div className="container">
      <SectionHead eyebrow="Why hire me" title={<>Four reasons I'd be a <span className="grad-text">strong addition</span> to your team</>} id="why-title">
        No buzzwords: each point links back to live work you can open and verify below.
      </SectionHead>

      <div className="hl-grid">
        {highlights.map((h, i) => (
          <article className="hl" key={h.title} data-reveal data-reveal-delay={String((i % 3) + 1)}>
            <span className="hl-ic">{ICONS[h.icon]}</span>
            <b className="hl-value">
              <CountUp value={h.value} />
            </b>
            <h3>{h.title}</h3>
            <p>{h.text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Highlights;
