"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px" }}>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
