"use client";

import React, { useEffect, useState, useRef } from "react";
import styles from "./Highlights.module.css";

interface HighlightItemProps {
  end: number;
  suffix: string;
  label: string;
}

const HighlightCounter: React.FC<HighlightItemProps> = ({ end, suffix, label }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const blockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentBlock = blockRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number | null = null;
          const duration = 2000; // 2 seconds

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const progressPercentage = Math.min(progress / duration, 1);
            
            // Easing function
            const easeOutQuad = (t: number) => t * (2 - t);
            setCount(Math.floor(easeOutQuad(progressPercentage) * end));

            if (progress < duration) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (currentBlock) {
      observer.observe(currentBlock);
    }

    return () => {
      if (currentBlock) {
        observer.unobserve(currentBlock);
      }
    };
  }, [end, hasAnimated]);

  return (
    <div className={styles.highlightBlock} ref={blockRef}>
      <div className={styles.numberRow}>
        <span className={styles.numberVal}>{count}</span>
        <span className={styles.numberSuffix}>{suffix}</span>
      </div>
      <div className={styles.numberLabel}>{label}</div>
    </div>
  );
};

export default function Highlights() {
  return (
    <section id="highlights" className={styles.highlightsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.subtitle}>Records</span>
          <h2 className={styles.title}>Career Highlights</h2>
          <p className={styles.headerDesc}>
            Summary metrics documenting G K Ramana Gouda&apos;s metallurgical throughput capabilities and organizational achievements.
          </p>
        </div>

        <div className={styles.grid}>
          <HighlightCounter end={25} suffix="+" label="Years of Industry Experience" />
          <HighlightCounter end={44500} suffix="+" label="MT Monthly Production" />
          <HighlightCounter end={42} suffix="" label="Heats Per Day Record" />
          
          <div className={styles.highlightBlock}>
            <div className={styles.numberRow}>
              <span className={styles.numberVal}>Multiple</span>
            </div>
            <div className={styles.numberLabel}>Plant Commissioning Projects</div>
          </div>

          <div className={styles.highlightBlock}>
            <div className={styles.numberRow}>
              <span className={styles.numberVal}>Head SMS</span>
            </div>
            <div className={styles.numberLabel}>Current Position at Sunflag</div>
          </div>
        </div>
      </div>
    </section>
  );
}
