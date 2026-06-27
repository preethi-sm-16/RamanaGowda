"use client";

import React, { useState } from "react";
import styles from "./LeadershipEvolution.module.css";

interface CareerStep {
  title: string;
  span: string;
  scope: string;
  scopeDetail: string;
  metric: string;
  desc: string;
}

const careerSteps: CareerStep[] = [
  {
    title: "Executive SMS-EOF",
    span: "1998 – 2005",
    scope: "Shift Operations & Erection",
    scopeDetail: "Supervising EOF shifts and commissioning",
    metric: "3.5 Lakh Tons Plant Capacity",
    desc: "Learned core process metallurgy on the shop floor. Led Greenfield commissioning and stabilized standard furnace operating metrics."
  },
  {
    title: "Manager - SMS",
    span: "2005 – 2010",
    scope: "Project Erection & Upgrades",
    scopeDetail: "EOF up-gradations, Danieli LRF & VD commissionings",
    metric: "1.0 MTPA Plant Scaling",
    desc: "Transitioned to engineering leadership, orchestrating 5x plant capacity scaling and multiple metallurgical unit integrations."
  },
  {
    title: "General Manager",
    span: "2010 – 2015",
    scope: "Integrated Steel Operations",
    scopeDetail: "Managing full plant cycle (Blast Furnace to Caster)",
    metric: "2x Productivity (0.3 to 0.6 MT)",
    desc: "Took over integrated plant management, introducing cost savings (lime & coke injection system) and achieving record heat counts."
  },
  {
    title: "Senior General Manager",
    span: "2016 – 2017",
    scope: "Plant Commissioning & EHS",
    scopeDetail: "Stabilization of alloy steels facility",
    metric: "24 Heats/Day Peak Milestone",
    desc: "Commanded the setup, trial runs, and rapid commercial stabilization of a new 0.3 MT capacity SMS complex."
  },
  {
    title: "Vice President - SMS",
    span: "2021 – 2023",
    scope: "Executive Operations & CapEx",
    scopeDetail: "Overall mechanical, electrical, and greenfield planning",
    metric: "Multi-Million CapEx & 0 accident EHS",
    desc: "Directed site-wide executive goals, managing multi-department engineering teams, capital budgets, and zero-incident operations."
  },
  {
    title: "Head - SMS",
    span: "2023 – Present",
    scope: "Super Alloy Operations",
    scopeDetail: "Induction, EAF, LRF, VD, AOD and continuous ingot casting",
    metric: "500+ Manpower & 44,500+ MT Record",
    desc: "Directing Sunflag's premium special steels melt shop, manufacturing high-grade alloys for defense, aerospace, and high-performance sectors."
  }
];

export default function LeadershipEvolution() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="evolution" className={styles.evolutionSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.subtitle}>Progression</span>
          <h2 className={styles.title}>From Executive To Industry Leader</h2>
          <p className={styles.headerDesc}>
            A visualization of G K Ramana Gouda&apos;s climbing operational scope, from shift-level supervision to site-wide integrated plant governance.
          </p>
        </div>

        {/* Career Growth Graph */}
        <div className={styles.graphWrapper}>
          <div className={styles.stepsContainer}>
            {careerSteps.map((step, idx) => {
              const isActive = hoveredIdx === idx;
              // Calculate width/scaling representation of executive authority
              const scopeScale = 60 + (idx * 8); // represents growth in responsibility area
              
              return (
                <div 
                  key={idx}
                  className={`${styles.stepCard} ${isActive ? styles.stepActive : ""}`}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  <div className={styles.connectorLine}></div>
                  <div className={styles.stepHeader}>
                    <span className={styles.stepSpan}>{step.span}</span>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                  </div>

                  <div className={styles.scopeScaleBar}>
                    <div className={styles.scopeBarLabel}>Authority & Team Scope</div>
                    <div className={styles.barTrack}>
                      <div 
                        className={styles.barFill} 
                        style={{ width: `${scopeScale}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className={styles.stepDetails}>
                    <div className={styles.detailRow}>
                      <span className={styles.detailLabel}>Focus:</span>
                      <span className={styles.detailValue}>{step.scope}</span>
                    </div>
                    <div className={styles.detailRow}>
                      <span className={styles.detailLabel}>Impact Metric:</span>
                      <span className={styles.detailValueHighlight}>{step.metric}</span>
                    </div>
                    <p className={styles.stepDesc}>{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
