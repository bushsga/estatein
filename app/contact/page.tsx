'use client'

import { useState } from "react";
import ContactCards from "@/components/contact/ContactCards";
import ContactFormComponent from "@/components/contact/ContactFormComponent";
import OfficeLocations from "@/components/contact/OfficeLocations";
import GallerySection from "@/components/contact/GallerySection";
import CTASection from "@/components/contact/CTASection";

// ─── Hero Section ────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Get in Touch with Estatein
      </h1>
      <p className="text-gray-400 max-w-2xl text-base leading-relaxed">
        Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. 
        Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, 
        we're just a message away. Reach out to us, and let's start a conversation.
      </p>
    </section>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ContactPage() {
  return (
    <div className="bg-black min-h-screen text-white">
      <HeroSection />
      <ContactCards />
      <ContactFormComponent />
      <OfficeLocations />
      <GallerySection />
      <CTASection />
    </div>
  );
}