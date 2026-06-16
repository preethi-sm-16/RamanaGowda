"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import AboutMe from "@/components/AboutMe";
import ResumeSection from "@/components/ResumeSection";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px" }}>
        <AboutMe />
        <ResumeSection />
      </main>
      <Footer />
    </>
  );
}
