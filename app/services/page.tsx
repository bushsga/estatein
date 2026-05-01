'use client'

import React from "react";
import Link from "next/link";
import Button from '@/components/ui/Button'
import { Home, Camera, Building2, Sun, ArrowUpRight } from 'lucide-react'
import ScrollAnimation from '@/components/ui/ScrollAnimation'

// ─── Icons (inline SVGs to avoid extra deps) ────────────────────────────────

const ChartIcon = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
);

const BuildingIcon = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
  </svg>
);

const StarIcon = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.499z" />
  </svg>
);

const MegaphoneIcon = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);

const KeyIcon = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
  </svg>
);

const WrenchIcon = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
  </svg>
);

const CurrencyIcon = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253M3 12a8.959 8.959 0 01.284-2.253" />
  </svg>
);

// ─── Types ───────────────────────────────────────────────────────────────────

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

// Service tabs using same style as homepage
const serviceTabs = [
  { title: "Find Your Dream Home", icon: Home },
  { title: "Unlock Property Value", icon: Camera },
  { title: "Effortless Property Management", icon: Building2 },
  { title: "Smart Investment, Informed Decisions", icon: Sun },
];

const sellingCards: ServiceCard[] = [
  {
    icon: <ChartIcon />,
    title: "Valuation Mastery",
    description: "Discover the true worth of your property with our expert valuation services.",
  },
  {
    icon: <MegaphoneIcon />,
    title: "Strategic Marketing",
    description: "Selling a property requires more than just a listing; it demands a strategic marketing approach.",
  },
  {
    icon: <StarIcon />,
    title: "Negotiation Wizardry",
    description: "Negotiating the best deal is an art, and our negotiation experts are masters of it.",
  },
  {
    icon: <KeyIcon />,
    title: "Closing Success",
    description: "A successful sale is not complete until the closing. We guide you through the intricate closing process.",
  },
];

const managementCards: ServiceCard[] = [
  {
    icon: <BuildingIcon />,
    title: "Tenant Harmony",
    description: "Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.",
  },
  {
    icon: <WrenchIcon />,
    title: "Maintenance Ease",
    description: "Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.",
  },
  {
    icon: <CurrencyIcon />,
    title: "Financial Peace of Mind",
    description: "Managing property finances can be complex. Our financial experts take care of rent collection.",
  },
  {
    icon: <ShieldIcon />,
    title: "Legal Guardian",
    description: "Stay compliant with property laws and regulations effortlessly.",
  },
];

const investmentCards: ServiceCard[] = [
  {
    icon: <ChartIcon />,
    title: "Market Insight",
    description: "Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions.",
  },
  {
    icon: <StarIcon />,
    title: "ROI Assessment",
    description: "Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments.",
  },
  {
    icon: <MegaphoneIcon />,
    title: "Customized Strategies",
    description: "Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs.",
  },
  {
    icon: <GlobeIcon />,
    title: "Diversification Mastery",
    description: "Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations.",
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

const IconBox: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-12 h-12 rounded-lg bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
    {children}
  </div>
);

const ServiceCardComponent: React.FC<ServiceCard> = ({ icon, title, description }) => (
  <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-purple-500 transition-all duration-300 group cursor-pointer">
    <div className="mb-3">
      <IconBox>{icon}</IconBox>
    </div>
    <h4 className="text-white font-semibold text-base mb-2">{title}</h4>
    <p className="text-gray-400 text-xs leading-relaxed">{description}</p>
  </div>
);

// ─── Main Page ────────────────────────────────────────────────────────────────

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white">

      {/* ── Hero ── */}
      <ScrollAnimation direction="left">
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
          <h1 className="text-4xl md:text-5xl font-medium text-white mb-4 max-w-xl leading-tight">
            Elevate Your <span className="text-white">Real Estate Experience</span>
          </h1>
          <p className="text-gray-400 text-sm max-w-lg leading-relaxed">
            Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our
            comprehensive range of services, each designed to cater to your unique needs and dreams.
          </p>
        </section>
      </ScrollAnimation>

      {/* ── Service Tabs (Same as homepage style) ── */}
      <ScrollAnimation direction="up">
        <section className="max-w-7xl mx-auto px-6 md:px-12 pb-20">
          <div className="grid md:grid-cols-4 gap-5">
            {serviceTabs.map((service, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl p-5 text-center hover:border-purple-500 transition-all duration-300 group cursor-pointer relative"
              >
                <ArrowUpRight className="w-5 h-5 text-gray-400 absolute top-4 right-4 group-hover:text-purple-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                <service.icon className="w-12 h-12 text-purple-500 mx-auto mb-3 mt-6" />
                <h3 className="text-white font-semibold text-base">{service.title}</h3>
              </div>
            ))}
          </div>
        </section>
      </ScrollAnimation>

      {/* ── Section: Unlock Property Value ── */}
      <ScrollAnimation direction="right">
        <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
            <div className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Unlock Property Value</h2>
          <p className="text-gray-400 text-sm max-w-2xl leading-relaxed mb-10">
            Selling your property should be a rewarding experience, and at Estatein, we make sure it is.
            Our Property Selling Service is designed to maximize the value of your property, ensuring you
            get the best deal possible. Explore the categories below to see how we can help you at every
            step of your selling journey.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {sellingCards.map((card) => (
              <ServiceCardComponent key={card.title} {...card} />
            ))}
          </div>
        </section>
      </ScrollAnimation>

      {/* ── Section: Effortless Property Management ── */}
      <ScrollAnimation direction="left">
        <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
            <div className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Effortless Property Management
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl leading-relaxed mb-10">
            Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service
            takes the stress out of property ownership, offering comprehensive solutions tailored to your
            needs. Explore the categories below to see how we can make property management effortless for you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {managementCards.map((card) => (
              <ServiceCardComponent key={card.title} {...card} />
            ))}
          </div>
        </section>
      </ScrollAnimation>

      {/* ── Section: Smart Investments ── */}
      <ScrollAnimation direction="right">
        <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
            <div className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left column: title + CTA card */}
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
                  Smart Investments,<br />Informed Decisions
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Building a real estate portfolio requires a strategic approach. Estatein's Investment
                  Advisory Service empowers you to make smart investments and informed decisions.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col gap-4 mt-auto">
                <h4 className="text-sm font-semibold text-white">Unlock Your Investment Potential</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Explore our Property Management Service categories and let us handle the complexities
                  while you enjoy the benefits of property ownership.
                </p>
                <button className="text-xs text-white bg-purple-600 hover:bg-purple-700 rounded-lg px-4 py-2 w-fit transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right column: 2x2 grid with icon and heading on top */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {investmentCards.map((card) => (
                <div key={card.title} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-purple-500 transition-all duration-300">
                  <div className="mb-3">
                    <IconBox>{card.icon}</IconBox>
                  </div>
                  <h4 className="text-white font-semibold text-base mb-2">{card.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* ── CTA Banner ── */}
      <ScrollAnimation direction="zoom">
        <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-white/10 rounded-2xl px-8 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Start Your Real Estate Journey Today
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                Your dream property is just a click away. Whether you're looking for a new home, a
                strategic investment, or expert real estate advice, Estatein is here to assist you every
                step of the way. Take the first step towards your real estate goals and explore our
                available properties or get in touch with our team for personalized assistance.
              </p>
            </div>
            <Link href="/properties">
              <Button variant="primary" size="lg">Explore Properties</Button>
            </Link>
          </div>
        </section>
      </ScrollAnimation>

    </div>
  );
};

export default ServicesPage;