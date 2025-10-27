import { Lightbulb, LineChart, Rocket } from "lucide-react";
import { SectionHeading } from "./section-heading";

const services = [
  {
    icon: Rocket,
    title: "End-to-end product launches",
    description:
      "From discovery sprints to post-launch iteration, I handle UX, engineering, and growth loops to get your idea live fast.",
    bullets: ["Component architecture", "Design system ops", "Performance budgets"],
  },
  {
    icon: LineChart,
    title: "Technical SEO retainer",
    description:
      "Monthly programs that pair crawl health monitoring with experimentation to relentlessly grow qualified traffic.",
    bullets: ["Core Web Vitals", "Structured data", "Experiment design"],
  },
  {
    icon: Lightbulb,
    title: "Growth workshops",
    description:
      "Train internal teams on building search-first experiences, instrumenting analytics, and prioritizing backlogs.",
    bullets: ["SEO playbooks", "Roadmap facilitation", "Capability building"],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <SectionHeading eyebrow="Services" title="Flexible partnerships tailored to your growth stage">
          Choose a collaborative model that matches your internal resources. I embed with teams to orchestrate the
          right blend of build, optimize, and educate.
        </SectionHeading>
        <div className="services__grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <span className="service-card__icon" aria-hidden>
                <service.icon size={22} />
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
