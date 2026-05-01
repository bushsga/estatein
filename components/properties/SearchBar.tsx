'use client'

import { Search, MapPin, Home, DollarSign, Ruler, Calendar } from 'lucide-react'
import { useState } from 'react'

export default function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-[#111116] border border-white/10 rounded-xl p-4">
      <div className="flex gap-3">
        <div className="flex-1 flex items-center gap-2 bg-black/50 px-3 rounded-lg border border-white/10">
          <Search size={18} className="text-gray-400" />
          <input
            placeholder="Search For A Property"
            className="flex-1 bg-transparent outline-none text-sm py-3"
          />
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-purple-600 px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition"
        >
          {isExpanded ? 'Simple Search' : 'Advanced Search'}
        </button>
      </div>

      {isExpanded && (
        <div className="grid md:grid-cols-5 gap-3 mt-4 pt-4 border-t border-white/10 animate-slide-down">
          <div className="flex items-center gap-2 bg-black/50 px-3 rounded-lg border border-white/10">
            <MapPin size={16} className="text-gray-400" />
            <select className="bg-transparent py-2 text-sm outline-none w-full">
              <option>Location</option>
              <option>New York</option>
              <option>California</option>
              <option>Florida</option>
            </select>
          </div>
          <div className="flex items-center gap-2 bg-black/50 px-3 rounded-lg border border-white/10">
            <Home size={16} className="text-gray-400" />
            <select className="bg-transparent py-2 text-sm outline-none w-full">
              <option>Property Type</option>
              <option>House</option>
              <option>Apartment</option>
              <option>Condo</option>
            </select>
          </div>
          <div className="flex items-center gap-2 bg-black/50 px-3 rounded-lg border border-white/10">
            <DollarSign size={16} className="text-gray-400" />
            <select className="bg-transparent py-2 text-sm outline-none w-full">
              <option>Pricing Range</option>
              <option>$0 - $500k</option>
              <option>$500k - $1M</option>
              <option>$1M+</option>
            </select>
          </div>
          <div className="flex items-center gap-2 bg-black/50 px-3 rounded-lg border border-white/10">
            <Ruler size={16} className="text-gray-400" />
            <select className="bg-transparent py-2 text-sm outline-none w-full">
              <option>Property Size</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>
          <div className="flex items-center gap-2 bg-black/50 px-3 rounded-lg border border-white/10">
            <Calendar size={16} className="text-gray-400" />
            <select className="bg-transparent py-2 text-sm outline-none w-full">
              <option>Build Year</option>
              <option>2020+</option>
              <option>2015-2020</option>
              <option>2010-2015</option>
            </select>
          </div>
        </div>
      )}
    </div>
  )
}