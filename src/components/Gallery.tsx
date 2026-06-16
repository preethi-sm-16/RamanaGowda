"use client";

import React, { useState } from "react";
import styles from "./Gallery.module.css";

interface GalleryItem {
  category: string;
  title: string;
  desc: string;
  iconSvg: React.ReactNode;
}

const items: GalleryItem[] = [
  {
    category: "Plant Operations",
    title: "SMS Melt Shop Operations",
    desc: "Overseeing primary EAF/EOF furnaces, refining ladles, and continuous billet casters.",
    iconSvg: (
      <svg viewBox="0 0 100 100" className={styles.vectorIllustration}>
        <rect x="25" y="45" width="50" height="35" rx="5" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
        <ellipse cx="50" cy="45" rx="20" ry="10" fill="#ffedd5" stroke="#ea580c" strokeWidth="2" />
        <path d="M40 20 L40 40 M60 20 L60 40" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
        <path d="M35 60 L65 60 M35 70 L65 70" stroke="#cbd5e1" strokeWidth="2" />
      </svg>
    )
  },
  {
    category: "Commissioning Projects",
    title: "Steel Plant Commissioning",
    desc: "Engineering plant floor layouts, organizing structural steel erections, and running hot test heats.",
    iconSvg: (
      <svg viewBox="0 0 100 100" className={styles.vectorIllustration}>
        <path d="M15 80 L35 40 L55 80 Z" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" />
        <path d="M45 80 L65 30 L85 80 Z" fill="#ffedd5" stroke="#ea580c" strokeWidth="2" />
        <line x1="10" y1="80" x2="90" y2="80" stroke="#475569" strokeWidth="3" />
        <circle cx="35" cy="40" r="4" fill="#64748b" />
        <circle cx="65" cy="30" r="4" fill="#ea580c" />
      </svg>
    )
  },
  {
    category: "Site Visits",
    title: "Project Inspections & Reviews",
    desc: "Reviewing furnace refractory lifespans, checking gas piping networks, and leading safety walks.",
    iconSvg: (
      <svg viewBox="0 0 100 100" className={styles.vectorIllustration}>
        <circle cx="50" cy="50" r="30" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" />
        <circle cx="50" cy="50" r="12" fill="#ffedd5" stroke="#ea580c" strokeWidth="2" />
        <line x1="50" y1="10" x2="50" y2="30" stroke="#475569" strokeWidth="2" />
        <line x1="50" y1="70" x2="50" y2="90" stroke="#475569" strokeWidth="2" />
        <line x1="10" y1="50" x2="30" y2="50" stroke="#475569" strokeWidth="2" />
        <line x1="70" y1="50" x2="90" y2="50" stroke="#475569" strokeWidth="2" />
      </svg>
    )
  },
  {
    category: "Team Activities",
    title: "Melt Shop Safety Training",
    desc: "Coordinating shift toolboxes, training technicians, and leading Kaizen optimization teams.",
    iconSvg: (
      <svg viewBox="0 0 100 100" className={styles.vectorIllustration}>
        <circle cx="50" cy="35" r="12" fill="#ffedd5" stroke="#ea580c" strokeWidth="2" />
        <path d="M30 75 C30 55 70 55 70 75" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" />
        <circle cx="25" cy="45" r="8" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2" />
        <circle cx="75" cy="45" r="8" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2" />
      </svg>
    )
  },
  {
    category: "Industry Events",
    title: "Metallurgy Conferences",
    desc: "Presenting kaizen results, discussing alloy steel specifications, and sharing EHS guidelines.",
    iconSvg: (
      <svg viewBox="0 0 100 100" className={styles.vectorIllustration}>
        <rect x="20" y="25" width="60" height="40" rx="3" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" />
        <line x1="50" y1="65" x2="50" y2="85" stroke="#475569" strokeWidth="3" />
        <line x1="30" y1="85" x2="70" y2="85" stroke="#475569" strokeWidth="3" />
        <path d="M35 45 L45 35 L55 45 M45 35 L45 55" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const categories = ["All", "Plant Operations", "Commissioning Projects", "Site Visits", "Team Activities", "Industry Events"];

  const filteredItems = activeTab === "All" 
    ? items 
    : items.filter(item => item.category === activeTab);

  return (
    <section id="gallery" className={styles.gallerySection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.subtitle}>Media Showcase</span>
          <h2 className={styles.title}>Gallery</h2>
          <p className={styles.headerDesc}>
            Stylized vector layouts representing operational segments, project trial sites, and leadership conferences.
          </p>
        </div>

        {/* Categories Tab Navigation */}
        <div className={styles.tabBar}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`${styles.tabBtn} ${activeTab === cat ? styles.activeTab : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Items Grid */}
        <div className={styles.grid}>
          {filteredItems.map((item, idx) => (
            <div key={idx} className={styles.galleryCard}>
              <div className={styles.illustrationWrapper}>
                {item.iconSvg}
              </div>
              <div className={styles.cardInfo}>
                <span className={styles.cardCat}>{item.category}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
