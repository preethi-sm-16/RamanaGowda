"use client";

import React from "react";
import styles from "./SkillsExpertise.module.css";

const skillsList = [
  "Integrated Steel Operations",
  "Iron Making Operations",
  "Sinter Plant Management",
  "Mini Blast Furnace (MBF)",
  "Steel Melt Shop Operations",
  "Rolling Mill Process Control",
  "Special Alloy Metallurgy",
  "Finished Product Quality",
  "Plant Commissioning & Scaling",
  "CapEx & EHS Governance",
  "Operational Cost Leadership",
  "TPM & Business Transformation"
];

const technologiesList = [
  "Sinter Plant Operations",
  "Mini Blast Furnace (MBF)",
  "EAF (Electric Arc Furnace)",
  "EOF (Energy Optimizing Furnace)",
  "LRF (Ladle Refining Furnace)",
  "VD (Vacuum Degassing)",
  "AOD (Argon Oxygen Decarburization)",
  "CCM (Continuous Casting Caster)",
  "Rolling Mill & Reheating",
  "Post-Rolling Heat Treatment"
];

interface CapabilityGroup {
  title: string;
  items: string[];
}

const capabilities: CapabilityGroup[] = [
  {
    title: "Integrated Steel Plant Operations",
    items: [
      "End-to-end plant operations management",
      "Iron making & steel making coordination",
      "Production planning and capacity utilization",
      "Raw material optimization",
      "Plant performance improvement"
    ]
  },
  {
    title: "Iron Making Expertise",
    items: [
      "Sinter plant process understanding",
      "Mini Blast Furnace operations exposure",
      "Metallics & charge mix optimization",
      "Charge mix improvement",
      "Productivity enhancement"
    ]
  },
  {
    title: "Steel Making & Metallurgy",
    items: [
      "EAF / EOF / IF operations",
      "LRF / VD / AOD secondary refining",
      "Alloy steel grade development",
      "Yield & refractory life improvement",
      "Slag engineering & chemical optimization"
    ]
  },
  {
    title: "Rolling & Downstream Operations",
    items: [
      "Rolling mill operations & layouts",
      "Process control and productivity improvement",
      "Post rolling quality & heat treatment",
      "Special alloy steel long products",
      "Customer-specific grade development"
    ]
  }
];

export default function SkillsExpertise() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.subtitle}>Capabilities</span>
          <h2 className={styles.title}>Skills &amp; Expertise</h2>
          <p className={styles.headerDesc}>
            Summary of metallurgical disciplines, operating tools, and managerial systems handled by G K Ramana Gouda.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Skills Column */}
          <div className={styles.column}>
            <h3 className={styles.colHeader}>
              <span className={styles.colIndex}>07</span>
              Skills &amp; Expertise
            </h3>
            <div className={styles.tagsContainer}>
              {skillsList.map((skill, idx) => (
                <div key={idx} className={styles.skillTag}>
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Column */}
          <div className={styles.column}>
            <h3 className={styles.colHeader}>
              <span className={styles.colIndex}>08</span>
              Technologies Worked With
            </h3>
            <div className={styles.tagsContainer}>
              {technologiesList.map((tech, idx) => (
                <div key={idx} className={styles.techTag}>
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leadership Capabilities Section */}
        <div className={styles.capabilitiesSection}>
          <h3 className={styles.capabilitiesHeader}>Core Leadership Capabilities</h3>
          <div className={styles.capabilitiesGrid}>
            {capabilities.map((cap, idx) => (
              <div key={idx} className={styles.capabilityCard}>
                <h4 className={styles.capabilityTitle}>{cap.title}</h4>
                <ul className={styles.capabilityList}>
                  {cap.items.map((item, itemIdx) => (
                    <li key={itemIdx} className={styles.capabilityItem}>
                      <span className={styles.bullet}>&bull;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
