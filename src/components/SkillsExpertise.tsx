"use client";

import React from "react";
import styles from "./SkillsExpertise.module.css";

const skillsList = [
  "Steel Melt Shop Operations",
  "Production Planning",
  "Plant Commissioning",
  "Project Management",
  "Safety Management",
  "Quality Control",
  "Cost Optimization",
  "Inventory Management",
  "Leadership",
  "Team Building"
];

const technologiesList = [
  "EAF (Electric Arc Furnace)",
  "EOF (Energy Optimizing Furnace)",
  "LRF (Ladle Refining Furnace)",
  "VD (Vacuum Degassing)",
  "AOD (Argon Oxygen Decarburization)",
  "CCM (Continuous Casting)",
  "Vacuum Degassing System",
  "Continuous Casting Caster"
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
      </div>
    </section>
  );
}
