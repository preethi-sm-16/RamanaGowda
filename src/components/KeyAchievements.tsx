"use client";

import React from "react";
import styles from "./KeyAchievements.module.css";

interface AchievementCard {
  title: string;
  desc: string;
  metric: string;
  icon: React.ReactNode;
}

const achievements: AchievementCard[] = [
  {
    title: "Production Excellence",
    desc: "Achieved record production levels exceeding 44,500 MT per month. Directing operations, scheduling, and furnace maintenance strategies at Sunflag SMS plant.",
    metric: "44,500+ MT",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    title: "Productivity Improvement",
    desc: "Improved daily heats from 34 to over 40 heats. Redesigned oxygen blowing lances, reducing cycle times and increasing shift productivity at Hospet Steels.",
    metric: "40+ Heats",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Cost Optimization",
    desc: "Implemented key process modifications that reduced operational costs. Developed coke and lime injection systems in EOF, and cut back Argon gas and Aluminum consumption.",
    metric: "High Yielding",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
      </svg>
    )
  },
  {
    title: "Quality Improvement",
    desc: "Developed systems focused on consistent steel quality. Engineered processes to hit ultra-low Phosphorus levels (< 0.010%) and managed ISO TS16949 automotive steel requirements.",
    metric: "ISO Certified",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

export default function KeyAchievements() {
  return (
    <section id="achievements" className={styles.achievementsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.subtitle}>Projects</span>
          <h2 className={styles.title}>Key Achievements</h2>
          <p className={styles.headerDesc}>
            Detailed project cards highlighting specific process adjustments and the corresponding industrial results.
          </p>
        </div>

        <div className={styles.grid}>
          {achievements.map((ach, idx) => (
            <div key={idx} className={styles.achCard}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>{ach.icon}</div>
                <span className={styles.cardMetric}>{ach.metric}</span>
              </div>
              <h3 className={styles.cardTitle}>{ach.title}</h3>
              <p className={styles.cardDesc}>{ach.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
