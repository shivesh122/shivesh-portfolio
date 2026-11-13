import { marquee } from "@/data/portfolio";

/** Infinite tool strip: the list is rendered twice and slid by -50% so the loop is seamless. */
const Marquee = () => (
  <div className="marquee" aria-label="Tools I work with">
    <div className="marquee-track">
      {[0, 1].map((copy) => (
        <ul key={copy} aria-hidden={copy === 1 ? true : undefined}>
          {marquee.map((t) => (
            <li key={t}>
              <span className="spark" aria-hidden="true">✦</span>
              {t}
            </li>
          ))}
        </ul>
      ))}
    </div>
  </div>
);

export default Marquee;
