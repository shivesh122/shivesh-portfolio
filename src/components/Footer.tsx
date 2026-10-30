import { ArrowUp, Github, Linkedin, Mail } from "@/components/icons";
import { profile } from "@/data/portfolio";

const Footer = () => (
  <footer className="footer">
    <div className="container footer-inner">
      <span>
        © {new Date().getFullYear()} {profile.fullName} · Built with React &amp; Vite
      </span>
      <div className="socials">
        <a className="icon-btn" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <Github size={17} />
        </a>
        <a className="icon-btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin size={17} />
        </a>
        <a className="icon-btn" href={`mailto:${profile.email}`} aria-label="Email">
          <Mail size={17} />
        </a>
        <a className="icon-btn" href="#top" aria-label="Back to top">
          <ArrowUp size={17} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
