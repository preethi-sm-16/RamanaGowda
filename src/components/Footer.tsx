"use client";

import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          <div className={styles.brandBox}>
            <div className={styles.logoText}>G K RAMANA GOUDA</div>
            <p className={styles.brandDesc}>
              Steel Industry Leader, Plant Builder &amp; Operations Executive. Dedicated to metallurgical excellence, process optimizations, and safety-focused execution.
            </p>
          </div>

          <nav className={styles.linksGrid}>
            <div className={styles.linksCol}>
              <h4 className={styles.colHeader}>Navigation</h4>
              <Link href="/" className={styles.footerLink}>Home</Link>
              <Link href="/about" className={styles.footerLink}>About Me</Link>
              <Link href="/experience" className={styles.footerLink}>Career Journey</Link>
            </div>
            
            <div className={styles.linksCol}>
              <h4 className={styles.colHeader}>Expertise</h4>
              <Link href="/experience" className={styles.footerLink}>What I Do</Link>
              <Link href="/" className={styles.footerLink}>Highlights</Link>
              <Link href="/skills" className={styles.footerLink}>Skills &amp; Tech</Link>
            </div>

            <div className={styles.linksCol}>
              <h4 className={styles.colHeader}>Showcase</h4>
              <Link href="/skills" className={styles.footerLink}>Gallery</Link>
              <Link href="/about" className={styles.footerLink}>Resume Preview</Link>
              <Link href="/contact" className={styles.footerLink}>Connect</Link>
            </div>
          </nav>
        </div>

        <div className={styles.bottomRow}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} G K Ramana Gouda. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
