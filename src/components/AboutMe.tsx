"use client";

import React from "react";
import styles from "./AboutMe.module.css";

export default function AboutMe() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Narrative Column */}
          <div className={styles.storyCol}>
            <span className={styles.subtitle}>Biography</span>
            <h2 className={styles.title}>About Me</h2>
            
            <p className={styles.paragraph}>
              For over 28 years, I have been deeply involved in leading, building, and transforming integrated steel plant operations across greenfield and brownfield projects in India&apos;s major steel manufacturing hubs.
            </p>
            <p className={styles.paragraph}>
              My professional journey began in 1998 during the greenfield erection, commissioning, and stabilization of Hospet Steels. Over nearly three decades, my roles evolved through managerial and executive leadership positions at JSW Steel Salem, BMM Ispat, SLR Metalliks, and Sunflag Iron &amp; Steel. This trajectory has built my end-to-end expertise covering Raw Material Processing, Sinter Plants, Mini Blast Furnaces, Steelmaking (EAF / EOF / DRI), Rolling Mill operations, and Finished Product Quality Management.
            </p>
            <p className={styles.paragraph}>
              I specialize in scaling operations (from 0.2 MTPA to 1.0 MTPA), stabilizing newly commissioned plants, optimizing charge mixes, and reducing production costs while maintaining zero-incident safety standards. By bridging advanced process metallurgy with hands-on shop-floor governance, I drive business transformation and operational excellence in integrated steel manufacturing.
            </p>
          </div>

          {/* Quick Facts Card Column */}
          <div className={styles.factsCol}>
            <div className={styles.factsCard}>
              <h3 className={styles.factsHeader}>Quick Facts</h3>
              
              <div className={styles.factsList}>
                <div className={styles.factItem}>
                  <span className={styles.factIcon}>📍</span>
                  <div className={styles.factText}>
                    <span className={styles.factLabel}>Location</span>
                    <span className={styles.factVal}>Hospet, Karnataka, India</span>
                  </div>
                </div>

                <div className={styles.factItem}>
                  <span className={styles.factIcon}>🎓</span>
                  <div className={styles.factText}>
                    <span className={styles.factLabel}>Education</span>
                    <span className={styles.factVal}>M.Tech Process Metallurgy (NITK)</span>
                  </div>
                </div>

                <div className={styles.factItem}>
                  <span className={styles.factIcon}>🏭</span>
                  <div className={styles.factText}>
                    <span className={styles.factLabel}>Experience</span>
                    <span className={styles.factVal}>28+ Years in Integrated Operations</span>
                  </div>
                </div>

                <div className={styles.factItem}>
                  <span className={styles.factIcon}>⚙️</span>
                  <div className={styles.factText}>
                    <span className={styles.factLabel}>Specialization</span>
                    <span className={styles.factVal}>Integrated Plant Operations Leader</span>
                  </div>
                </div>

                <div className={styles.factItem}>
                  <span className={styles.factIcon}>👥</span>
                  <div className={styles.factText}>
                    <span className={styles.factLabel}>Leadership</span>
                    <span className={styles.factVal}>COO / Plant Head (500+ Teams)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Target CXO Roles Section */}
        <div className={styles.cxoSection}>
          <span className={styles.subtitle}>Opportunities</span>
          <h2 className={styles.cxoTitle}>Target CXO Positions</h2>
          <p className={styles.cxoSub}>Ready to drive large-scale operations, capEx, and business transformation in the following roles:</p>
          <div className={styles.cxoGrid}>
            <div className={styles.cxoCard}>
              <div className={styles.cxoIcon}>🏢</div>
              <h4 className={styles.cxoRole}>Plant Head</h4>
              <p className={styles.cxoDesc}>Integrated Steel Plant</p>
            </div>
            <div className={styles.cxoCard}>
              <div className={styles.cxoIcon}>⚙️</div>
              <h4 className={styles.cxoRole}>Chief Operating Officer (COO)</h4>
              <p className={styles.cxoDesc}>Steel Division</p>
            </div>
            <div className={styles.cxoCard}>
              <div className={styles.cxoIcon}>📊</div>
              <h4 className={styles.cxoRole}>Executive Director</h4>
              <p className={styles.cxoDesc}>Operations</p>
            </div>
            <div className={styles.cxoCard}>
              <div className={styles.cxoIcon}>🤝</div>
              <h4 className={styles.cxoRole}>Vice President</h4>
              <p className={styles.cxoDesc}>Integrated Steel Operations</p>
            </div>
            <div className={styles.cxoCard}>
              <div className={styles.cxoIcon}>📈</div>
              <h4 className={styles.cxoRole}>Business Head</h4>
              <p className={styles.cxoDesc}>Steel Manufacturing</p>
            </div>
            <div className={styles.cxoCard}>
              <div className={styles.cxoIcon}>🛠️</div>
              <h4 className={styles.cxoRole}>Technical Director</h4>
              <p className={styles.cxoDesc}>Steel Operations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
