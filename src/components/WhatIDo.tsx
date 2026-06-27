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
    title: "Integrated Steel Plant Operations",
    desc: "End-to-end plant operations management covering raw material processing, iron making, steel making, and rolling operations to maximize yield.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: "Iron Making & Metallurgy",
    desc: "In-depth understanding of Sinter Plant and Mini Blast Furnace (MBF) operations, charge mix optimization, and raw materials processing.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Steel Making & Casting",
    desc: "Expertise in DRI / EAF / EOF metallurgy, secondary refining (LRF, VD, AOD), slag engineering, and continuous caster yield optimization.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "Rolling & Downstream Operations",
    desc: "Overseeing rolling mill operations, post-rolling heat treatment processes, special alloy steel quality control, and grade development.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
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
