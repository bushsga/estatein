'use client'

import { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const thumbnails = [
  { id: 1, src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=200", label: "Living Room" },
  { id: 2, src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=200", label: "Kitchen" },
  { id: 3, src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=200", label: "Bedroom" },
  { id: 4, src: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=200", label: "Bathroom" },
  { id: 5, src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=200", label: "Pool" },
  { id: 6, src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=200", label: "Garden" },
  { id: 7, src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=200", label: "Dining Room" },
  { id: 8, src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=200", label: "Office" },
  { id: 9, src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=200", label: "Terrace" },
]

const mainImages = [
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
  "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
]

export default function PropertyGallery() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const handleThumbnailClick = (index: number) => {
    setSelectedIndex(index)
  }

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + thumbnails.length) % thumbnails.length)
  }

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % thumbnails.length)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX
    const diff = touchStartX.current - touchEndX.current
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext()
      } else {
        handlePrev()
      }
    }
  }

  return (
    <div className="mb-8 sm:mb-12">
      {/* Thumbnails - Horizontal scroll on mobile with custom scrollbar */}
      <div 
        className="flex gap-2 sm:gap-3 mb-4 sm:mb-6 overflow-x-auto pb-2 scrollbar-thin"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {thumbnails.map((thumb, index) => (
          <div
            key={thumb.id}
            onClick={() => handleThumbnailClick(index)}
            className={`relative cursor-pointer rounded-lg overflow-hidden transition-all duration-300 flex-shrink-0 w-16 sm:w-20 h-12 sm:h-16 ${
              selectedIndex === index ? 'ring-2 ring-purple-500' : 'opacity-60 hover:opacity-100'
            }`}
          >
            <img src={thumb.src} alt={thumb.label} className="w-full h-full object-cover" />
            {selectedIndex !== index && (
              <div className="absolute inset-0 bg-black/40" />
            )}
          </div>
        ))}
      </div>

      {/* Main Images - Stack on mobile, side by side on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden">
          <img 
            src={mainImages[selectedIndex]} 
            alt="Main property view 1" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden hidden sm:block">
          <img 
            src={mainImages[(selectedIndex + 1) % mainImages.length]} 
            alt="Main property view 2" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex items-center justify-center gap-3 sm:gap-4">
        <button 
          onClick={handlePrev}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-purple-600 transition flex items-center justify-center"
        >
          <ChevronLeft size={18} className="sm:w-5 sm:h-5 text-white" />
        </button>
        <div className="flex gap-1 sm:gap-2">
          {thumbnails.map((_, i) => (
            <div 
              key={i}
              className={`h-0.5 rounded-full transition-all duration-300 ${
                selectedIndex === i ? 'bg-purple-500 w-4 sm:w-8' : 'bg-white/30 w-2 sm:w-4'
              }`}
            />
          ))}
        </div>
        <button 
          onClick={handleNext}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-purple-600 transition flex items-center justify-center"
        >
          <ChevronRight size={18} className="sm:w-5 sm:h-5 text-white" />
        </button>
      </div>
    </div>
  )
}