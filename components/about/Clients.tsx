'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Globe, FolderKanban, Smile } from 'lucide-react'
import Button from '../ui/Button'

const clients = [
  {
    id: 1,
    since: "since 2019",
    name: "ABC Corporation",
    domain: "Commercial Real Estate",
    category: "Luxury Home Development",
    text: "Estatein expertise helped us expand operations globally. Their team provided invaluable insights into emerging markets and helped us secure prime locations for our expansion.",
  },
  {
    id: 2,
    since: "since 2020",
    name: "GreenTech Enterprises",
    domain: "Sustainable Properties",
    category: "Eco-Friendly Development",
    text: "They identified prime retail locations for our expansion. The attention to detail and market knowledge made all the difference in our investment decisions.",
  },
  {
    id: 3,
    since: "since 2018",
    name: "Horizon Group",
    domain: "Mixed-Use Developments",
    category: "Urban Planning",
    text: "Working with Estatein has been transformative for our portfolio. Their market analysis and property recommendations consistently exceed expectations.",
  },
  {
    id: 4,
    since: "since 2021",
    name: "Summit Realty",
    domain: "Residential Properties",
    category: "Luxury Estates",
    text: "The team at Estatein understands the luxury market perfectly. They helped us acquire properties that doubled in value within two years.",
  },
  {
    id: 5,
    since: "since 2017",
    name: "Pinnacle Investments",
    domain: "Commercial Real Estate",
    category: "Office Spaces",
    text: "Estatein's comprehensive approach to property management has streamlined our operations significantly. Highly recommended for serious investors.",
  },
  {
    id: 6,
    since: "since 2022",
    name: "Bluewave Properties",
    domain: "Waterfront Properties",
    category: "Coastal Real Estate",
    text: "Their knowledge of waterfront properties is unmatched. They found us the perfect beachfront investment at an incredible value.",
  },
  {
    id: 7,
    since: "since 2019",
    name: "Metropolitan Group",
    domain: "Urban Development",
    category: "City Centers",
    text: "Estatein helped us navigate complex urban development projects. Their local expertise saved us time and money.",
  },
  {
    id: 8,
    since: "since 2020",
    name: "Nexus Capital",
    domain: "Investment Properties",
    category: "Multi-Family Units",
    text: "The ROI analysis provided by Estatein was instrumental in our decision-making. We've seen consistent returns on all properties purchased through them.",
  },
  {
    id: 9,
    since: "since 2018",
    name: "Sterling Partners",
    domain: "Industrial Real Estate",
    category: "Warehouse & Logistics",
    text: "Finding industrial space was challenging until we found Estatein. They connected us with prime locations that fit our logistics needs perfectly.",
  },
  {
    id: 10,
    since: "since 2021",
    name: "Apex Development",
    domain: "Land Development",
    category: "Subdivision Projects",
    text: "Estatein's land acquisition expertise helped us secure prime development sites. Their due diligence process is thorough and reliable.",
  },
]

export default function Clients() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 2
  const totalPages = Math.ceil(clients.length / itemsPerPage)
  
  const currentClients = clients.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  )

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Valued Clients</h2>
      <p className="text-gray-400 mb-10 max-w-2xl">
        We take pride in our long-standing relationships with industry leaders. 
        Here's what some of our valued clients have to say about working with Estatein.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {currentClients.map((client) => (
          <div key={client.id} className="bg-white/5 border border-white/10 rounded-xl p-6">
            <p className="text-purple-400 text-xs mb-3">{client.since}</p>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-white font-bold text-xl">{client.name}</h3>
              <Button variant="secondary" size="sm">View Details</Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="border border-white/10 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Globe size={14} className="text-purple-500" />
                  <span className="text-gray-400 text-xs">Domain</span>
                </div>
                <p className="text-white text-sm">{client.domain}</p>
              </div>
              <div className="border border-white/10 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <FolderKanban size={14} className="text-purple-500" />
                  <span className="text-gray-400 text-xs">Category</span>
                </div>
                <p className="text-white text-sm">{client.category}</p>
              </div>
            </div>

            <div className="border border-white/10 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Smile size={14} className="text-purple-500" />
                <span className="text-gray-400 text-xs">What they said</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{client.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination - Shows current page number like "01 of 10" */}
      <div className="flex justify-between items-center">
        <p className="text-gray-400 text-sm">
          {String(currentIndex + 1).padStart(2, '0')} of {String(totalPages).padStart(2, '0')}
        </p>
        <div className="flex gap-2">
          <button
            onClick={prev}
            className="p-2 rounded-lg border border-white/10 hover:border-purple-500 transition"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="p-2 rounded-lg border border-white/10 hover:border-purple-500 transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}