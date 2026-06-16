"use client";

import React from "react";
import styles from "./AboutMe.module.css";

export default function AboutMe() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Narrative Column */}
          <div className={styles.storyCol}>
            <span className={styles.subtitle}>Biography</span>
            <h2 className={styles.title}>About Me</h2>
            
            <p className={styles.paragraph}>
              For more than two decades, I have been deeply involved in building, improving, and leading steel manufacturing operations across some of India&apos;s leading steel complexes.
            </p>
            <p className={styles.paragraph}>
              My journey began in 1998 as an Executive in a greenfield steel project at Hospet Steels. Over the years, this path evolved through managership and general management roles at JSW Steel Salem, BMM Ispat, and SLR Metalliks, culminating in directing entire Steel Melt Shop operations as Head SMS.
            </p>
            <p className={styles.paragraph}>
              Throughout my career, I have dedicated myself to four key pillars: safety, steel quality, operational excellence, and continuous process improvement. By combining process metallurgy research with practical shop-floor execution, I specialize in stabilizing newly commissioned plants, scaling throughputs, and optimizing refractory and gas consumption.
            </p>
          </div>

          {/* Quick Facts Card Column */}
          <div className={styles.factsCol}>
            <div className={styles.factsCard}>
              <h3 className={styles.factsHeader}>Quick Facts</h3>
              
              <div className={styles.factsList}>
                <div className={styles.factItem}>
                  <span className={styles.factIcon}>📍</span>
                  <div className={styles.factText}>
                    <span className={styles.factLabel}>Location</span>
                    <span className={styles.factVal}>Karnataka, India</span>
                  </div>
                </div>

                <div className={styles.factItem}>
                  <span className={styles.factIcon}>🎓</span>
                  <div className={styles.factText}>
                    <span className={styles.factLabel}>Education</span>
                    <span className={styles.factVal}>M.Tech Process Metallurgy (NITK)</span>
                  </div>
                </div>

                <div className={styles.factItem}>
                  <span className={styles.factIcon}>🏭</span>
                  <div className={styles.factText}>
                    <span className={styles.factLabel}>Experience</span>
                    <span className={styles.factVal}>25+ Years in Metallurgy Operations</span>
                  </div>
                </div>

                <div className={styles.factItem}>
                  <span className={styles.factIcon}>⚙️</span>
                  <div className={styles.factText}>
                    <span className={styles.factLabel}>Specialization</span>
                    <span className={styles.factVal}>Steel Melt Shop (SMS) Specialist</span>
                  </div>
                </div>

                <div className={styles.factItem}>
                  <span className={styles.factIcon}>👥</span>
                  <div className={styles.factText}>
                    <span className={styles.factLabel}>Leadership</span>
                    <span className={styles.factVal}>Operations Director (500+ Teams)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
