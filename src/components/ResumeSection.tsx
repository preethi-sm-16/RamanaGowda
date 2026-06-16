"use client";

import React from "react";
import styles from "./ResumeSection.module.css";

export default function ResumeSection() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className={styles.resumeSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.subtitle}>Dossier</span>
          <h2 className={styles.title}>Resume</h2>
          <p className={styles.headerDesc}>
            View qualifications overview and download G K Ramana Gouda&apos;s complete print-ready curriculum vitae.
          </p>
        </div>

        <div className={styles.resumeCard}>
          {/* Resume Header Preview */}
          <div className={styles.cardHeader}>
            <div className={styles.nameBlock}>
              <h3 className={styles.name}>G K Ramana Gouda</h3>
              <span className={styles.titleText}>Head SMS / Metallurgical Executive</span>
            </div>
            <div className={styles.actionBlock}>
              <a 
                href="/G K RAMANAGOUDA.pdf" 
                download="G_K_Ramana_Gouda_Resume.pdf"
                className={styles.downloadBtn}
              >
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download My Resume
              </a>
              <button onClick={handlePrint} className={styles.printBtn}>
                Print Brief
              </button>
            </div>
          </div>

          {/* Resume Content Preview */}
          <div className={styles.cardBody}>
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Academic Credentials</h4>
              <div className={styles.educationItem}>
                <span className={styles.eduYear}>1998</span>
                <div className={styles.eduDetails}>
                  <div className={styles.eduDegree}>M.Tech in Process Metallurgy</div>
                  <div className={styles.eduInst}>Karnataka Regional Engineering College (KREC/NITK) Surathkal</div>
                </div>
              </div>

              <div className={styles.educationItem}>
                <span className={styles.eduYear}>1996</span>
                <div className={styles.eduDetails}>
                  <div className={styles.eduDegree}>M.Tech in Mineral Processing</div>
                  <div className={styles.eduInst}>Gulbarga University Nandihalli (Sandur)</div>
                </div>
              </div>

              <div className={styles.educationItem}>
                <span className={styles.eduYear}>1993</span>
                <div className={styles.eduDetails}>
                  <div className={styles.eduDegree}>B.Sc (Physics, Chemistry, Maths)</div>
                  <div className={styles.eduInst}>SES College Sandur, Gulbarga University</div>
                </div>
              </div>
            </div>

            <div className={styles.col}>
              <h4 className={styles.colTitle}>Major Organizations Handled</h4>
              <ul className={styles.orgList}>
                <li>
                  <strong>SUNFLAG Iron &amp; Steel Co.</strong> - Head SMS (2023 - Present)
                </li>
                <li>
                  <strong>SLR Metalliks Ltd.</strong> - Vice President / SGM - SMS (2021 - 2023 / 2016 - 2017)
                </li>
                <li>
                  <strong>Hospet Steels Ltd.</strong> - General Manager - Head SMS (2010 - 2015 / 2017 - 2021)
                </li>
                <li>
                  <strong>BMM Ispat Ltd.</strong> - General Manager (2015 - 2016)
                </li>
                <li>
                  <strong>JSW Steel Salem</strong> - Manager SMS (2005 - 2010)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
