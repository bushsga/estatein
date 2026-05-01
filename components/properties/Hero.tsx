'use client'

import { useState } from 'react'
import { MapPin, Home, DollarSign, Ruler, Calendar, ChevronDown, Search } from 'lucide-react'
import Button from '../ui/Button'

export default function Hero() {
  const [isLocationOpen, setIsLocationOpen] = useState(false)
  const [isPropertyTypeOpen, setIsPropertyTypeOpen] = useState(false)
  const [isPriceRangeOpen, setIsPriceRangeOpen] = useState(false)
  const [isPropertySizeOpen, setIsPropertySizeOpen] = useState(false)
  const [isBuildYearOpen, setIsBuildYearOpen] = useState(false)

  const locations = ['New York', 'California', 'Florida', 'Texas', 'Illinois']
  const propertyTypes = ['House', 'Apartment', 'Condo', 'Villa', 'Land']
  const priceRanges = ['$0 - $500k', '$500k - $1M', '$1M - $2M', '$2M+']
  const propertySizes = ['Small (500-1000 sqft)', 'Medium (1000-2000 sqft)', 'Large (2000-3000 sqft)', 'Estate (3000+ sqft)']
  const buildYears = ['2020+', '2015-2020', '2010-2015', '2000-2010', 'Before 2000']

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
      {/* Heading - Left Aligned */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Find Your Dream Property</h1>
        <p className="text-gray-400 max-w-2xl text-sm">
          Discover your perfect home with our extensive collection of properties. 
          From luxury estates to cozy apartments, we have something for everyone.
        </p>
      </div>

      {/* Search Input */}
      <div className="bg-[#111116] border border-white/10 rounded-xl p-4 mb-4">
        <div className="flex gap-3">
          <div className="flex-1 flex items-center gap-2 bg-black/50 px-3 rounded-lg border border-white/10">
            <Search size={18} className="text-gray-400" />
            <input
              placeholder="Search For A Property"
              className="flex-1 bg-transparent outline-none text-sm py-3"
            />
          </div>
          <Button variant="primary" size="md">Find Property</Button>
        </div>
      </div>

      {/* Filter Selects - 5 items */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {/* Location Select */}
        <div className="relative">
          <button
            onClick={() => setIsLocationOpen(!isLocationOpen)}
            className="w-full flex items-center justify-between bg-[#111116] border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white"
          >
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-gray-400" />
              <span>Location</span>
            </div>
            <ChevronDown size={16} className="text-gray-400" />
          </button>
          {isLocationOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-[#111116] border border-white/10 rounded-lg z-10">
              {locations.map((loc) => (
                <div key={loc} className="px-3 py-2 text-sm text-gray-300 hover:bg-white/10 cursor-pointer">
                  {loc}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Property Type Select */}
        <div className="relative">
          <button
            onClick={() => setIsPropertyTypeOpen(!isPropertyTypeOpen)}
            className="w-full flex items-center justify-between bg-[#111116] border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white"
          >
            <div className="flex items-center gap-2">
              <Home size={16} className="text-gray-400" />
              <span>Property Type</span>
            </div>
            <ChevronDown size={16} className="text-gray-400" />
          </button>
          {isPropertyTypeOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-[#111116] border border-white/10 rounded-lg z-10">
              {propertyTypes.map((type) => (
                <div key={type} className="px-3 py-2 text-sm text-gray-300 hover:bg-white/10 cursor-pointer">
                  {type}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Price Range Select */}
        <div className="relative">
          <button
            onClick={() => setIsPriceRangeOpen(!isPriceRangeOpen)}
            className="w-full flex items-center justify-between bg-[#111116] border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white"
          >
            <div className="flex items-center gap-2">
              <DollarSign size={16} className="text-gray-400" />
              <span>Price Range</span>
            </div>
            <ChevronDown size={16} className="text-gray-400" />
          </button>
          {isPriceRangeOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-[#111116] border border-white/10 rounded-lg z-10">
              {priceRanges.map((range) => (
                <div key={range} className="px-3 py-2 text-sm text-gray-300 hover:bg-white/10 cursor-pointer">
                  {range}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Property Size Select */}
        <div className="relative">
          <button
            onClick={() => setIsPropertySizeOpen(!isPropertySizeOpen)}
            className="w-full flex items-center justify-between bg-[#111116] border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white"
          >
            <div className="flex items-center gap-2">
              <Ruler size={16} className="text-gray-400" />
              <span>Property Size</span>
            </div>
            <ChevronDown size={16} className="text-gray-400" />
          </button>
          {isPropertySizeOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-[#111116] border border-white/10 rounded-lg z-10">
              {propertySizes.map((size) => (
                <div key={size} className="px-3 py-2 text-sm text-gray-300 hover:bg-white/10 cursor-pointer">
                  {size}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Build Year Select */}
        <div className="relative">
          <button
            onClick={() => setIsBuildYearOpen(!isBuildYearOpen)}
            className="w-full flex items-center justify-between bg-[#111116] border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white"
          >
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-gray-400" />
              <span>Build Year</span>
            </div>
            <ChevronDown size={16} className="text-gray-400" />
          </button>
          {isBuildYearOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-[#111116] border border-white/10 rounded-lg z-10">
              {buildYears.map((year) => (
                <div key={year} className="px-3 py-2 text-sm text-gray-300 hover:bg-white/10 cursor-pointer">
                  {year}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}