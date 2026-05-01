import { 
  Home, TrendingUp, Building2, LineChart, 
  Users, Wrench, Shield, Briefcase,
  BarChart, Target, Rocket 
} from 'lucide-react'
import Hero from '@/components/services/Hero'
import Section from '@/components/services/Section'
import ServiceCard from '@/components/services/ServiceCard'
import ServicesCTA from '@/components/services/CTA'

const servicePills = [
  { title: "Find Your Dream Home", icon: Home },
  { title: "Unlock Property Value", icon: TrendingUp },
  { title: "Effortless Property Management", icon: Building2 },
  { title: "Smart Investments", icon: LineChart },
]

// Helper component for Handshake icon
function HandshakeIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"/>
      <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.8-2.8L14 13"/>
      <path d="m2 13 6-6"/>
      <path d="M17 8 9 16"/>
    </svg>
  )
}

const valuationServices = [
  { title: "Valuation Mastery", icon: <BarChart size={32} />, description: "Accurate property valuations using market data" },
  { title: "Strategic Marketing", icon: <Target size={32} />, description: "Targeted campaigns to reach qualified buyers" },
  { title: "Negotiation Wizardry", icon: <HandshakeIcon size={32} />, description: "Expert negotiation for best deals" },
  { title: "Closing Success", icon: <Rocket size={32} />, description: "Smooth closing process from start to finish" },
]

const managementServices = [
  { title: "Tenant Harmony", icon: <Users size={32} />, description: "Quality tenant screening and relations" },
  { title: "Maintenance Ease", icon: <Wrench size={32} />, description: "24/7 maintenance and repair services" },
  { title: "Financial Peace", icon: <Briefcase size={32} />, description: "Transparent accounting and reporting" },
  { title: "Legal Guardian", icon: <Shield size={32} />, description: "Full legal compliance and protection" },
]

const investmentServices = [
  { title: "Market Insight", icon: <TrendingUp size={32} />, description: "In-depth market analysis and trends" },
  { title: "ROI Assessment", icon: <BarChart size={32} />, description: "Calculate potential returns on investments" },
  { title: "Customized Strategies", icon: <Target size={32} />, description: "Tailored investment plans for your goals" },
  { title: "Diversification Mastery", icon: <Briefcase size={32} />, description: "Portfolio diversification strategies" },
]

export default function ServicesPage() {
  return (
    <div>
      <Hero />

      {/* Service Pills */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {servicePills.map((item, i) => (
          <div
            key={i}
            className="border border-white/10 rounded-xl p-4 text-center hover:border-purple-500 transition-all duration-300 hover:scale-105 cursor-pointer group animate-fade-in"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <item.icon className="mx-auto mb-2 text-gray-400 group-hover:text-purple-500 transition" size={24} />
            <p className="text-sm text-gray-300 group-hover:text-white transition">{item.title}</p>
          </div>
        ))}
      </div>

      {/* Unlock Property Value */}
      <Section
        title="Unlock Property Value"
        description="Selling your property should be rewarding. Our services ensure you get the best deal possible with maximum returns."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valuationServices.map((service, i) => (
            <div key={i} className="animate-slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <ServiceCard title={service.title} icon={service.icon} description={service.description} />
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-white/10 rounded-xl p-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-300 text-sm">
            💡 Unlock the hidden value of your property with our expert guidance
          </p>
          <button className="text-purple-500 text-sm hover:gap-2 transition-all flex items-center gap-1">
            Learn More <Rocket size={14} />
          </button>
        </div>
      </Section>

      {/* Effortless Property Management */}
      <Section
        title="Effortless Property Management"
        description="We take the stress out of managing your property. From tenant screening to maintenance, we've got you covered."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {managementServices.map((service, i) => (
            <div key={i} className="animate-slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <ServiceCard title={service.title} icon={service.icon} description={service.description} />
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-white/10 rounded-xl p-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-300 text-sm">
            🏢 Experience hassle-free property management with our dedicated team
          </p>
          <button className="text-purple-500 text-sm hover:gap-2 transition-all flex items-center gap-1">
            Learn More <Rocket size={14} />
          </button>
        </div>
      </Section>

      {/* Smart Investments */}
      <Section
        title="Smart Investments, Informed Decisions"
        description="Make smarter investment decisions with expert insights and data-driven strategies for maximum returns."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {investmentServices.map((service, i) => (
            <div key={i} className="animate-slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <ServiceCard title={service.title} icon={service.icon} description={service.description} />
            </div>
          ))}
        </div>
      </Section>

      <ServicesCTA />
    </div>
  )
}