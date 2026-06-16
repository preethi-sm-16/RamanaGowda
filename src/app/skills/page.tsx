"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import SkillsExpertise from "@/components/SkillsExpertise";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function SkillsPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px" }}>
        <SkillsExpertise />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
