"use client";

import { useEffect, useState } from "react";
import { navigation } from "../lib/data";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="site-header__inner">
        <a href="#hero" className="brand" aria-label="Avery Morgan home link">
          <span className="brand__mark">AM</span>
          <span className="brand__text">
            Avery <span>Morgan</span>
          </span>
        </a>
        <nav className="site-nav" aria-label="Primary">
          <ul>
            {navigation.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="site-nav__link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="site-header__actions">
          <ThemeToggle />
          <a href="#contact" className="cta-button cta-button--ghost">
            Get a Quote
          </a>
        </div>
      </div>
    </header>
  );
}
