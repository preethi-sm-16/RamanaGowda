"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Skills & Process", href: "/skills" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      } else {
        setScrollProgress(0);
      }

      // Check if scrolled past threshold for styling
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
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
          <Link href="/" onClick={handleLinkClick}>
            <span className={styles.logoText}>G K R</span>
            <span className={styles.logoSubtext}>GOUDA</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.navDesktop}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${
                pathname === link.href ? styles.active : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className={styles.ctaButton}
          >
            Connect
          </Link>
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
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.mobileNavLink} ${
                pathname === link.href ? styles.active : ""
              }`}
              onClick={handleLinkClick}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className={styles.mobileCtaButton}
            onClick={handleLinkClick}
          >
            Connect Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
