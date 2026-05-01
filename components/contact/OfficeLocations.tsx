'use client'

import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

interface Office {
  type: string;
  name: string;
  description: string;
  email: string;
  phone: string;
  location: string;
  category: "all" | "regional" | "international";
}

const offices: Office[] = [
  {
    type: "Main Headquarters",
    name: "123 Estatein Plaza, City Center, Metropolis",
    description: "Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.",
    email: "info@estatein.com",
    phone: "+1 (123) 456-7890",
    location: "Metropolis",
    category: "all",
  },
  {
    type: "Regional Offices",
    name: "456 Urban Avenue, Downtown District, Metropolis",
    description: "Estatein's presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets.",
    email: "regional@estatein.com",
    phone: "+1 (123) 628-7890",
    location: "Metropolis",
    category: "regional",
  },
  {
    type: "International Office",
    name: "789 Global Tower, Financial District, London",
    description: "Our international headquarters serving clients across Europe, Asia, and beyond. We provide global real estate solutions with local expertise.",
    email: "international@estatein.com",
    phone: "+44 (20) 1234-5678",
    location: "London, UK",
    category: "international",
  },
];

const tabs = [
  { id: "all" as const, label: "All" },
  { id: "regional" as const, label: "Regional" },
  { id: "international" as const, label: "International" },
];

export default function OfficeLocations() {
  const [activeTab, setActiveTab] = useState<"all" | "regional" | "international">("all");

  const filtered = offices.filter((o) => activeTab === "all" || o.category === activeTab);

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-white/10">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-purple-400 text-xs">✦</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Discover Our Office Locations</h2>
      <p className="text-gray-400 max-w-2xl text-sm leading-relaxed mb-8">
        Estatein is here to serve you across multiple locations. Whether you're looking to meet our team, discuss real estate opportunities, 
        or simply drop by for a chat, we have offices conveniently located to serve your needs.
      </p>

      {/* Tabs */}
      <div className="flex gap-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors border ${
              activeTab === tab.id
                ? "bg-purple-600 border-purple-600 text-white"
                : "border-white/10 text-gray-400 hover:border-purple-500 hover:text-gray-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Office cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filtered.map((office, i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 hover:border-purple-500 transition-all duration-300">
            <span className="text-purple-400 text-xs uppercase tracking-wider">{office.type}</span>
            <h3 className="text-white font-semibold text-lg leading-snug">{office.name}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{office.description}</p>

            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1.5">
                <Mail size={14} />
                {office.email}
              </span>
              <span className="flex items-center gap-1.5">
                <Phone size={14} />
                {office.phone}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={14} />
                {office.location}
              </span>
            </div>

            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium py-3 rounded-lg transition-colors mt-2 flex items-center justify-center gap-2">
              Get Direction <ArrowRight size={14} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}