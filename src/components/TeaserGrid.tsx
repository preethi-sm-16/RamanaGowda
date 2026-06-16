import React from "react";
import Link from "next/link";
import styles from "./TeaserGrid.module.css";

const teaserCards = [
  {
    icon: "👤",
    title: "Executive Biography",
    desc: "Discover my 25+ years journey from Hospet Steels Executive to Head of Steel Melt Shop, NITK metallurgical research roots, and education credentials.",
    href: "/about",
    cta: "Read Biography",
  },
  {
    icon: "🏭",
    title: "Operations & Projects",
    desc: "Explore hands-on operations, greenfield plant commissionings, and scaling projects at JSW Salem, BMM Ispat, and SLR Metalliks.",
    href: "/experience",
    cta: "View Timeline & Achievements",
  },
  {
    icon: "⚙️",
    title: "Expertise & Process",
    desc: "Review steelmaking shop tool capabilities (EAF, EOF, VD, LRF), management systems, and the interactive metallurgical operations guide.",
    href: "/skills",
    cta: "Explore Skills & Process",
  },
];

export default function TeaserGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Explore Portfolio</span>
          <h2 className={styles.title}>Professional Journey Divisions</h2>
        </div>
        
        <div className={styles.grid}>
          {teaserCards.map((card, idx) => (
            <Link key={idx} href={card.href} className={styles.card}>
              <div className={styles.iconWrapper}>{card.icon}</div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.desc}</p>
              <div className={styles.learnMore}>
                <span>{card.cta}</span>
                <span className={styles.arrow}>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
