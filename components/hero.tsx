"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { highlightStats } from "../lib/data";
import { useParallax } from "../hooks/use-parallax";

export function Hero() {
  const parallaxOffset = useParallax(0.22);

  return (
    <section id="hero" className="section hero">
      <div className="hero__background" aria-hidden>
        <motion.div
          className="hero__gradient"
          style={{ y: parallaxOffset * -1 }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <motion.div
          className="hero__grid"
          style={{ y: parallaxOffset * 0.6 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.45 }}
          transition={{ duration: 1.4, delay: 0.2 }}
        />
      </div>
      <div className="container hero__content">
        <div className="hero__intro">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Web Developer · SEO Analyst
          </motion.span>
          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Building <span>obsessively-optimized</span> experiences that convert.
          </motion.h1>
          <motion.p
            className="hero__lead"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.32 }}
          >
            I merge modern web engineering with data-backed search strategy to ship lightning-fast websites
            that stand out visually and rank relentlessly. Let&apos;s turn your audience insights into high-impact
            digital journeys.
          </motion.p>
          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.42 }}
          >
            <a href="#portfolio" className="cta-button">
              View My Work
            </a>
            <a href="#contact" className="cta-button cta-button--ghost">
              Request an Audit
            </a>
          </motion.div>
        </div>
        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, x: 48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <div className="portrait-frame">
            <Image
              src="/images/profile-avatar.svg"
              alt="Portrait illustration of Avery Morgan"
              width={320}
              height={320}
              priority
            />
          </div>
          <div className="hero__metrics">
            {highlightStats.map((stat) => (
              <div key={stat.label} className="metric-card">
                <span className="metric-card__value">
                  {stat.value}
                  <small>{stat.suffix}</small>
                </span>
                <span className="metric-card__label">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
