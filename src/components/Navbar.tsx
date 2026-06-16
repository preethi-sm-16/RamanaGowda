"use client";

import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "What I Do", href: "#what-do" },
  { label: "Highlights", href: "#highlights" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Check if scrolled past threshold for styling
      setIsScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      let currentSection = "home";

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the section top is above or near the middle of the viewport
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const el = document.getElementById(targetId);
    if (el) {
      const offset = 80; // height of floating navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      {/* Scroll Progress Bar */}
      <div 
        className={styles.progressBar} 
        style={{ width: `${scrollProgress}%` }}
      />
      
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <a href="#home" onClick={(e) => handleLinkClick(e, "#home")}>
            <span className={styles.logoText}>G K R</span>
            <span className={styles.logoSubtext}>GOUDA</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.navDesktop}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${
                activeSection === link.href.substring(1) ? styles.active : ""
              }`}
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#contact" 
            className={styles.ctaButton}
            onClick={(e) => handleLinkClick(e, "#contact")}
          >
            Connect
          </a>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          className={`${styles.hamburger} ${mobileMenuOpen ? styles.hamburgerOpen : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`${styles.navMobile} ${mobileMenuOpen ? styles.mobileOpen : ""}`}>
        <nav className={styles.mobileLinks}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${styles.mobileNavLink} ${
                activeSection === link.href.substring(1) ? styles.active : ""
              }`}
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#contact" 
            className={styles.mobileCtaButton}
            onClick={(e) => handleLinkClick(e, "#contact")}
          >
            Connect Now
          </a>
        </nav>
      </div>
    </header>
  );
}
