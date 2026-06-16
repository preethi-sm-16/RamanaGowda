"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import WhatIDo from "@/components/WhatIDo";
import CareerJourney from "@/components/CareerJourney";
import KeyAchievements from "@/components/KeyAchievements";
import Footer from "@/components/Footer";

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px" }}>
        <WhatIDo />
        <CareerJourney />
        <KeyAchievements />
      </main>
      <Footer />
    </>
  );
}
