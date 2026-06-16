"use client";

import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          <div className={styles.brandBox}>
            <div className={styles.logoText}>G K RAMANA GOUDA</div>
            <p className={styles.brandDesc}>
              Steel Industry Leader, Plant Builder & Operations Executive. Dedicated to metallurgical excellence, process optimizations, and safety-focused execution.
            </p>
          </div>

          <nav className={styles.linksGrid}>
            <div className={styles.linksCol}>
              <h4 className={styles.colHeader}>Navigation</h4>
              <a href="#home" onClick={(e) => handleScrollTo(e, "home")} className={styles.footerLink}>Home</a>
              <a href="#about" onClick={(e) => handleScrollTo(e, "about")} className={styles.footerLink}>About Me</a>
              <a href="#journey" onClick={(e) => handleScrollTo(e, "journey")} className={styles.footerLink}>Career Journey</a>
            </div>
            
            <div className={styles.linksCol}>
              <h4 className={styles.colHeader}>Expertise</h4>
              <a href="#what-do" onClick={(e) => handleScrollTo(e, "what-do")} className={styles.footerLink}>What I Do</a>
              <a href="#highlights" onClick={(e) => handleScrollTo(e, "highlights")} className={styles.footerLink}>Highlights</a>
              <a href="#skills" onClick={(e) => handleScrollTo(e, "skills")} className={styles.footerLink}>Skills &amp; Tech</a>
            </div>

            <div className={styles.linksCol}>
              <h4 className={styles.colHeader}>Showcase</h4>
              <a href="#gallery" onClick={(e) => handleScrollTo(e, "gallery")} className={styles.footerLink}>Gallery</a>
              <a href="#resume" onClick={(e) => handleScrollTo(e, "resume")} className={styles.footerLink}>Resume Preview</a>
              <a href="#contact" onClick={(e) => handleScrollTo(e, "contact")} className={styles.footerLink}>Connect</a>
            </div>
          </nav>
        </div>

        <div className={styles.bottomRow}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} G K Ramana Gouda. All Rights Reserved.
          </p>
          <div className={styles.techStackTag}>
            Built with Next.js & Custom Vanilla CSS
          </div>
        </div>
      </div>
    </footer>
  );
}
