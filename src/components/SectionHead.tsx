import type { ReactNode } from "react";

const SectionHead = ({ eyebrow, title, children, id }: { eyebrow: string; title: ReactNode; children?: ReactNode; id?: string }) => (
  <div className="section-head" data-reveal>
    <span className="eyebrow">{eyebrow}</span>
    <h2 id={id}>{title}</h2>
    {children && <p>{children}</p>}
  </div>
);

export default SectionHead;
