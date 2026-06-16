"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import CareerJourney from "@/components/CareerJourney";
import WhatIDo from "@/components/WhatIDo";
import Highlights from "@/components/Highlights";
import KeyAchievements from "@/components/KeyAchievements";
import SkillsExpertise from "@/components/SkillsExpertise";
import Philosophy from "@/components/Philosophy";
import Gallery from "@/components/Gallery";
import ResumeSection from "@/components/ResumeSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <CareerJourney />
        <WhatIDo />
        <Highlights />
        <KeyAchievements />
        <SkillsExpertise />
        <Philosophy />
        <Gallery />
        <ResumeSection />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
