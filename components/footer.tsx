import { Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__identity">
          <span className="brand__mark">AM</span>
          <div>
            <strong>Avery Morgan</strong>
            <p>Web Developer & SEO Analyst</p>
          </div>
        </div>
        <p className="site-footer__note">
          Purpose-built web experiences backed by search intelligence. Currently booking for Q1 product and growth engagements.
        </p>
        <div className="site-footer__links">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
