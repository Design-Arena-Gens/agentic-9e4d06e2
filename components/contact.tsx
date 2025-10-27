import { Mail, MessageSquare } from "lucide-react";
import { SectionHeading } from "./section-heading";

export function ContactSection() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <SectionHeading eyebrow="Let’s Collaborate" title="Ready to build what your audience is searching for?">
          Share a bit about your project and I&apos;ll respond within two business days with a tailored approach and
          potential kickoff timeline.
        </SectionHeading>
        <div className="contact__grid">
          <div className="contact__card">
            <h3>Project Snapshot</h3>
            <p>
              Outline your goals, current hurdles, and what success looks like. I&apos;ll follow up with a discovery call
              to align scope and expectations.
            </p>
            <ul>
              <li>Technical audits & roadmaps</li>
              <li>Full-stack development retainers</li>
              <li>Growth and CRO experiments</li>
            </ul>
          </div>
          <form className="contact__form" aria-label="Project inquiry form">
            <div className="contact__row">
              <label>
                Name
                <input type="text" name="name" placeholder="Jordan Lee" required />
              </label>
              <label>
                Email
                <input type="email" name="email" placeholder="hello@example.com" required />
              </label>
            </div>
            <label>
              Project Type
              <select name="project" defaultValue="launch">
                <option value="launch">Full website launch</option>
                <option value="seo">SEO program</option>
                <option value="audit">Technical audit</option>
                <option value="workshop">Workshop / training</option>
              </select>
            </label>
            <label>
              Budget Range
              <select name="budget" defaultValue="20-40">
                <option value="10-20">$10k - $20k</option>
                <option value="20-40">$20k - $40k</option>
                <option value="40-60">$40k - $60k</option>
                <option value="60+">$60k+</option>
              </select>
            </label>
            <label>
              Project Brief
              <textarea name="message" rows={4} placeholder="Share timelines, KPIs, and dream outcomes." />
            </label>
            <div className="contact__actions">
              <button type="submit" className="cta-button">
                <Mail size={18} />
                Send Inquiry
              </button>
              <a className="cta-button cta-button--ghost" href="https://cal.com" target="_blank" rel="noreferrer">
                <MessageSquare size={18} />
                Book a call
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
