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
            
            <p className={styles.subheading}>
              Steel Industry Professional with <strong>25+ Years of Experience</strong> in Steel Melt Shop Operations, Plant Commissioning and Leadership.
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
