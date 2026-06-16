"use client";

import React from "react";
import styles from "./WhatIDo.module.css";

interface FocusCard {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const focuses: FocusCard[] = [
  {
    title: "Steel Melt Shop Operations",
    desc: "Directing day-to-day melting, secondary refining, and casting operations to sustain consistent high-volume outputs.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Plant Commissioning",
    desc: "Overseeing layout drafts, electrical and mechanical erection review, dry trials, and rapid commercial scale-up.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: "Team Leadership",
    desc: "Assembling, mentoring, and managing multi-department engineering and operations teams of 500+ professionals.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: "Quality & Productivity",
    desc: "Employing TPM KK-pillar kaizens to systematically reduce waste, cost, relining shutdowns, and improve daily heats.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

export default function WhatIDo() {
  return (
    <section id="what-do" className={styles.whatSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.subtitle}>Services</span>
          <h2 className={styles.title}>What I Do</h2>
          <p className={styles.headerDesc}>
            Primary vectors of professional consulting and executive leadership offered in heavy metallurgy and plant operations.
          </p>
        </div>

        <div className={styles.grid}>
          {focuses.map((focus, idx) => (
            <div key={idx} className={styles.focusCard}>
              <div className={styles.iconWrapper}>{focus.icon}</div>
              <h3 className={styles.focusTitle}>{focus.title}</h3>
              <p className={styles.focusDesc}>{focus.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
