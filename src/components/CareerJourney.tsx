"use client";

import React from "react";
import styles from "./CareerJourney.module.css";

interface MilestoneCard {
  span: string;
  company: string;
  role: string;
  story: string;
  bulletMetric?: string;
}

const milestones: MilestoneCard[] = [
  {
    span: "1998 – 2005",
    company: "Hospet Steels Ltd.",
    role: "Executive SMS-EOF",
    story: "Started my professional journey during the greenfield erection, commissioning, and stabilization of a 3 Lakh Tons per annum steel plant, helping Hospet Steels achieve India's first ISO TS16949 certification.",
    bulletMetric: "First ISO TS16949 in India"
  },
  {
    span: "2005 – 2010",
    company: "JSW Steel Salem",
    role: "Manager - SMS",
    story: "Contributed to large-scale expansion projects, scaling production from 0.2 MTPA to 1.0 MTPA in 3 years. Supervised multiple Danieli LRF & VD commissionings and upgraded EOF#1 to 45T per heat.",
    bulletMetric: "Scaled 0.2 to 1.0 MTPA"
  },
  {
    span: "2010 – 2015",
    company: "Hospet Steels Ltd.",
    role: "General Manager",
    story: "Led integrated steel operations, doubling overall production from 0.3 to 0.6 Million Tons. Developed an indigenous lime-coke injection system and set a peak record of 42 heats in a single day.",
    bulletMetric: "Peak 42 heats/day record"
  },
  {
    span: "2015 – 2016",
    company: "BMM Ispat Ltd.",
    role: "General Manager",
    story: "Spearheaded the greenfield engineering, dry testing, and stabilization of a 1.2 MTPA Melt Shop, managing high-yield smelting operations utilizing a 100% DRI charge mix in a 120T Siemens VAI EAF.",
    bulletMetric: "1.2 MTPA Greenfield SMS"
  },
  {
    span: "2016 – 2017",
    company: "SLR Metalliks Ltd.",
    role: "Senior General Manager",
    story: "Managed the erection, dry runs, and commercial stabilization of the alloy steel melt shop (EOF-LRF-VD-CCM), reaching commercial benchmarks and sustained peak outputs of 24 heats/day.",
    bulletMetric: "Alloy SMS Commissioning"
  },
  {
    span: "2017 – 2021",
    company: "Hospet Steels Ltd.",
    role: "General Manager - Head SMS",
    story: "Returned to Hospet Steels to guide overall melt shop operations, serving as TPM KK Pillar Chairman. Modified the oxygen blowing system and extended furnace refractory campaign life to over 2000 heats.",
    bulletMetric: "Refractory Life >2000 Heats"
  },
  {
    span: "2021 – 2023",
    company: "SLR Metalliks Ltd.",
    role: "Vice President - SMS",
    story: "Held executive control over operations, engineering maintenance, safety, and capital budgeting (CapEx). Successfully introduced special steel grades for automotive, forging, and heavy machinery markets.",
    bulletMetric: "Executive CapEx & EHS Control"
  },
  {
    span: "2023 – Present",
    company: "Sunflag Iron & Steel Co.",
    role: "Head - SMS",
    story: "Currently leading Sunflag's premium special steels melt shop. Directing double induction furnaces, 55T EAF, LRF, VD, AOD, and casting units, achieving a highest monthly output record of 44,500+ MT.",
    bulletMetric: "Record 44.5k+ MT / Month"
  }
];

export default function CareerJourney() {
  return (
    <section id="journey" className={styles.journeySection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.subtitle}>Timeline</span>
          <h2 className={styles.title}>Career Journey</h2>
          <p className={styles.headerDesc}>
            A structured chronicle of G K Ramana Gouda&apos;s professional progression, representing 28+ years of leadership and plant engineering success.
          </p>
        </div>

        <div className={styles.grid}>
          {milestones.map((milestone, idx) => (
            <div key={idx} className={styles.journeyCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardSpan}>{milestone.span}</span>
                <span className={styles.cardIndex}>Role 0{idx + 1}</span>
              </div>
              <h3 className={styles.cardCompany}>{milestone.company}</h3>
              <div className={styles.cardRole}>{milestone.role}</div>
              <p className={styles.cardStory}>{milestone.story}</p>
              
              {milestone.bulletMetric && (
                <div className={styles.metricBadgeRow}>
                  <span className={styles.metricBadge}>
                    <span className={styles.badgeIndicator}></span>
                    {milestone.bulletMetric}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
