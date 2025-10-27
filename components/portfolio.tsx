import { ArrowUpRight } from "lucide-react";
import { projects } from "../lib/data";
import { SectionHeading } from "./section-heading";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="section portfolio">
      <div className="container">
        <SectionHeading eyebrow="Portfolio" title="Featured launches engineered for velocity and visibility">
          Every engagement aligns UX craft, performance, and SEO fidelity. Here are a few highlights showcasing how a
          dual-focus approach accelerates sustainable growth.
        </SectionHeading>

        <div className="portfolio__grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-card__visual" aria-hidden>
                <span className="project-card__glow" />
                <div className="project-card__badge">{project.tech.join(" · ")}</div>
              </div>
              <div className="project-card__body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-card__lists">
                  <div>
                    <span className="project-card__label">Deliverables</span>
                    <ul>
                      {project.deliverables.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="project-card__label">Impact</span>
                    <ul>
                      {project.results.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <a className="project-card__link" href={project.url} target="_blank" rel="noreferrer">
                  Explore case study <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
