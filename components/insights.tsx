import { BarChart3, Cpu, Target } from "lucide-react";
import { SectionHeading } from "./section-heading";

const insightItems = [
  {
    icon: Target,
    title: "Intent-aligned journeys",
    summary:
      "Mapping keyword intent to UX pathways reveals where to streamline messaging and reduce friction across funnels.",
    takeaway: "Result: 19% improvement in conversion rate after aligning navigation with persona research.",
  },
  {
    icon: Cpu,
    title: "Automation for consistency",
    summary:
      "Reusable schema templates and automated audits keep teams shipping without sacrificing technical excellence.",
    takeaway: "Result: 120+ pages kept index-ready via GitHub action powered validation scripts.",
  },
  {
    icon: BarChart3,
    title: "Experiment-led growth",
    summary:
      "AB testing messaging, layout, and content depth surfaces quick wins while informing the long-term roadmap.",
    takeaway: "Result: 8-week CRO program producing 4 high-confidence wins with 28% lift in MQLs.",
  },
];

export function InsightsSection() {
  return (
    <section id="insights" className="section insights">
      <div className="container">
        <SectionHeading eyebrow="Insights" title="Where development and search strategy compound">
          A sample of the learnings and frameworks that guide each engagement—bridging audience intelligence with
          engineering craft.
        </SectionHeading>
        <div className="insights__grid">
          {insightItems.map((item) => (
            <article key={item.title} className="insight-card">
              <span className="insight-card__icon" aria-hidden>
                <item.icon size={24} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <span className="insight-card__takeaway">{item.takeaway}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
