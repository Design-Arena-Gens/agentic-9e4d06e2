import { skillGroups, timeline } from "../lib/data";
import { SectionHeading } from "./section-heading";

export function AboutSection() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <SectionHeading eyebrow="About" title="Strategy-led engineering for measurable outcomes">
          I partner with founders, marketing leads, and product teams to craft digital ecosystems that feel beautiful,
          perform effortlessly, and convert traffic into business momentum.
        </SectionHeading>

        <div className="about__grid">
          <div className="about__bio">
            <h3>Hybrid specialist with a maker&apos;s mindset</h3>
            <p>
              From semantic markup to schema markup, I treat each project as a system where design, development, and
              discoverability reinforce one another. My toolkit blends rapid prototyping, scalable component design,
              and continuous SEO experimentation to deliver compounding value.
            </p>
            <ul className="about__list">
              <li>Certified in Google Analytics 4, Semrush, and Advanced Technical SEO</li>
              <li>Contributor to open-source accessibility tooling and performance audits</li>
              <li>Coach and speaker on bridging product discovery with organic growth</li>
            </ul>
          </div>
          <div className="about__skills">
            {skillGroups.map((group) => (
              <div key={group.title} className="skill-group">
                <h4>{group.title}</h4>
                <ul>
                  {group.skills.map((skill) => (
                    <li key={skill.name}>
                      <div className="skill-meter">
                        <div className="skill-meter__header">
                          <span>{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="skill-meter__track" role="progressbar" aria-valuenow={skill.level} aria-valuemin={0} aria-valuemax={100}>
                          <div className="skill-meter__fill" style={{ width: `${skill.level}%` }} />
                        </div>
                        <p>{skill.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="timeline">
          <h3>Career Momentum</h3>
          <div className="timeline__track">
            {timeline.map((entry, index) => (
              <article key={entry.year} className="timeline__item">
                <div className="timeline__badge">
                  <span>{entry.year}</span>
                </div>
                <div className="timeline__content">
                  <h4>{entry.role}</h4>
                  <span className="timeline__org">{entry.organisation}</span>
                  <p>{entry.summary}</p>
                  <ul>
                    {entry.achievements.map((achievement) => (
                      <li key={achievement}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                {index !== timeline.length - 1 ? <div className="timeline__connector" aria-hidden /> : null}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
