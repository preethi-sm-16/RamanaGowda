"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Hero Left Content Column */}
          <div className={styles.contentCol}>
            <span className={styles.greeting}>Hello, I&apos;m</span>
            <h1 className={styles.title}>G K Ramana Gouda</h1>
            
            <div className={styles.taglineBlock}>
              <div className={styles.mainRole}>Integrated Steel Plant Operations Leader | Plant Head</div>
              <div className={styles.experienceLine}>28+ Years of Experience &bull; Iron Making &bull; Steel Making &bull; Rolling &bull; Special Alloy Steels</div>
            </div>

            <p className={styles.subheading}>
              Driving operational excellence and business transformation across the complete steel manufacturing value chain. Seasoned in scaling operations from 0.2 MTPA to 1.0 MTPA, greenfield facilities commissioning, productivity gains, and cost-leadership.
            </p>
            
            <div className={styles.ctaGroup}>
              <Link href="/experience" className={styles.primaryBtn}>
                View Journey
              </Link>
              <a 
                href="/G K RAMANAGOUDA.pdf" 
                download="G_K_Ramana_Gouda_Resume.pdf"
                className={styles.secondaryBtn}
              >
                Download Resume
              </a>
              <Link 
                href="/contact" 
                className={styles.tertiaryBtn}
              >
                Contact Me
              </Link>
            </div>

            <div className={styles.targetRolesContainer}>
              <span className={styles.targetLabel}>Target CXO Roles:</span>
              <div className={styles.rolesGrid}>
                <span className={styles.rolePill}>Plant Head</span>
                <span className={styles.rolePill}>Chief Operating Officer (COO)</span>
                <span className={styles.rolePill}>Executive Director - Operations</span>
                <span className={styles.rolePill}>VP - Integrated Operations</span>
                <span className={styles.rolePill}>Business Head</span>
                <span className={styles.rolePill}>Technical Director</span>
              </div>
            </div>
          </div>

          {/* Hero Right Image Column */}
          <div className={styles.imageCol}>
            <div className={styles.imageFrame}>
              <div className={styles.imageBackdrop}></div>
              <Image 
                src="/executive_portrait.png" 
                alt="G K Ramana Gouda Portrait" 
                width={400} 
                height={500} 
                className={styles.portrait}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
