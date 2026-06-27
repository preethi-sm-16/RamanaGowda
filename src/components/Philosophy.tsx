"use client";

import React from "react";
import styles from "./Philosophy.module.css";

export default function Philosophy() {
  return (
    <section id="philosophy" className={styles.philSection}>
      <div className={styles.container}>
        <div className={styles.innerBox}>
          <div className={styles.quoteIcon}>&ldquo;</div>
          <blockquote className={styles.quoteText}>
            I believe sustainable success in steel manufacturing comes from three fundamentals: <strong>Safety, Discipline, and Continuous Improvement</strong>. Technology and production targets matter, but people and processes remain the foundation of long-term operational excellence.
          </blockquote>
          <cite className={styles.citeAuthor}>G K Ramana Gouda</cite>
          <div className={styles.citeTitle}>Integrated Steel Plant Operations Leader | Plant Head</div>
        </div>
      </div>
    </section>
  );
}
