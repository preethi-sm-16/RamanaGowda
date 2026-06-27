"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./Gallery.module.css";

interface GalleryItem {
  category: string;
  title: string;
  desc: string;
  imageUrl: string;
  detailedDesc: string;
}

const items: GalleryItem[] = [
  {
    category: "Plant Operations",
    title: "Integrated Steel Operations",
    desc: "Overseeing sinter plant, blast furnace, steelmaking furnaces, and continuous casting lines.",
    imageUrl: "/steel_melt_shop.png",
    detailedDesc: "G K Ramana Gouda directing operational protocols across integrated plant zones, supervising raw material charge mixes, blast furnace runs, steel melting/refining, and rolling mill outputs. Focuses on productivity, quality standards, and energy optimization.",
  },
  {
    category: "Commissioning Projects",
    title: "Electric Arc Furnace Commissioning",
    desc: "Engineering plant floor layouts, organizing structural steel erections, and running hot test heats.",
    imageUrl: "/furnace_commissioning.png",
    detailedDesc: "Hands-on engineering and hot commissioning trials of steel melt shop equipment. Includes supervising electric arc furnace configurations, testing hydraulic tilting systems, and coordinating safety inspection walk-throughs prior to full-scale operations.",
  },
  {
    category: "Quality & Controls",
    title: "Metallurgical Testing & Review",
    desc: "Reviewing furnace refractory lifespans, checking gas piping networks, and leading safety walks.",
    imageUrl: "/quality_testing.png",
    detailedDesc: "Collaborating with lab technicians to verify chemistry controls, steel purity standards, and slag composition. Optimizing vacuum degassing (VD) and argon oxygen decarburization (AOD) refining parameters for special alloy steel grades.",
  },
  {
    category: "Team & Safety",
    title: "Integrated Plant Safety Training",
    desc: "Coordinating shift toolboxes, training technicians, and leading Kaizen optimization teams.",
    imageUrl: "/team_safety.png",
    detailedDesc: "Directing safety training drills and operational briefings with shift engineers. Fostering a zero-harm incident culture and supervising the implementation of 5S and Kaizen on the integrated steel plant floor.",
  }
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories = ["All", "Plant Operations", "Commissioning Projects", "Quality & Controls", "Team & Safety"];

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
            Explore operational zones, trial sites, and leadership conferences. Click on any card to view detailed descriptions and high-resolution visuals.
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
            <div 
              key={idx} 
              className={styles.galleryCard}
              onClick={() => setSelectedItem(item)}
            >
              <div className={styles.imageWrapper}>
                <Image 
                  src={item.imageUrl} 
                  alt={item.title} 
                  width={600}
                  height={400}
                  className={styles.cardImage}
                />
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

      {/* Interactive Lightbox/Modal Overlay */}
      {selectedItem && (
        <div 
          className={styles.modalOverlay} 
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className={styles.modalContent} 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className={styles.closeBtn} 
              onClick={() => setSelectedItem(null)}
              aria-label="Close Gallery Modal"
            >
              &times;
            </button>
            <div className={styles.modalGrid}>
              <div className={styles.modalImageWrapper}>
                <Image 
                  src={selectedItem.imageUrl} 
                  alt={selectedItem.title} 
                  width={800}
                  height={600}
                  className={styles.modalImage}
                />
              </div>
              <div className={styles.modalInfo}>
                <span className={styles.modalCat}>{selectedItem.category}</span>
                <h3 className={styles.modalTitle}>{selectedItem.title}</h3>
                <p className={styles.modalDetailedDesc}>{selectedItem.detailedDesc}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
