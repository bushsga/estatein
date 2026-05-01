'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Bed, Bath, Home as HomeIcon } from 'lucide-react'
import Button from '../ui/Button'
import ScrollAnimation from '../ui/ScrollAnimation'

const properties = [
  {
    id: 1,
    name: 'Seaside Serenity Villa',
    description: 'Experience luxury living in this stunning seaside villa featuring modern architecture, breathtaking ocean views, and high-end finishes throughout. Perfect for those seeking tranquility and elegance.',
    beds: 4,
    baths: 3,
    type: 'Villa',
    price: '$1,250,000',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500'
  },
  {
    id: 2,
    name: 'Metropolitan Haven',
    description: 'Modern apartment in the heart of the city with smart home features, stunning skyline views, and access to premium amenities including a fitness center and rooftop lounge.',
    beds: 3,
    baths: 2,
    type: 'Apartment',
    price: '$950,000',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500'
  },
  {
    id: 3,
    name: 'Rustic Retreat Cottage',
    description: 'Charming cottage nestled in nature with modern amenities, peaceful surroundings, and a beautiful garden. Ideal for those looking to escape the city hustle.',
    beds: 3,
    baths: 2,
    type: 'Cottage',
    price: '$750,000',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500'
  },
  {
    id: 4,
    name: 'Urban Loft Downtown',
    description: 'Stylish loft with industrial design, high ceilings, large windows, and amazing city access. Located in the heart of the entertainment district.',
    beds: 2,
    baths: 2,
    type: 'Loft',
    price: '$550,000',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500'
  },
  {
    id: 5,
    name: 'Lakeside Paradise',
    description: 'Beautiful lakeside property with private dock, stunning water views, and spacious outdoor entertaining areas. Perfect for water enthusiasts.',
    beds: 5,
    baths: 4,
    type: 'Estate',
    price: '$1,850,000',
    image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=500'
  },
  {
    id: 6,
    name: 'Modern Minimalist',
    description: 'Sleek modern home with clean lines, open concept design, energy-efficient features, and a private backyard oasis with a swimming pool.',
    beds: 3,
    baths: 3,
    type: 'Modern',
    price: '$890,000',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500'
  }
]

const truncateText = (text: string, maxLength: number = 100) => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '... Read More'
}

export default function FeaturedProperties() {
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 3
  const totalPages = Math.ceil(properties.length / itemsPerPage)
  
  const currentProperties = properties.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  )

  return (
    <ScrollAnimation direction="left">
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Featured Properties</h2>
            <p className="text-gray-400 max-w-2xl text-sm">
              Explore our handpick selection of featured properties. Each listing offers a glimpse into exceptional 
              homes and investments available through Estatein. Click "View Details" for information.
            </p>
          </div>
          <Button variant="secondary">View All Properties</Button>
        </div>

        {/* Property Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {currentProperties.map((property) => (
            <div key={property.id} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-purple-500 transition-all duration-300">
              <img src={property.image} alt={property.name} className="w-full h-56 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-white mb-2">{property.name}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {truncateText(property.description)}
                </p>
                <div className="flex items-center gap-4 text-gray-400 text-sm mb-4 pb-4 border-b border-white/10">
                  <span className="flex items-center gap-1"><Bed size={16} /> {property.beds} beds</span>
                  <span className="flex items-center gap-1"><Bath size={16} /> {property.baths} baths</span>
                  <span className="flex items-center gap-1"><HomeIcon size={16} /> {property.type}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-500 font-bold text-xl">{property.price}</span>
                  <Link href={`/property/${property.id}`}>
                    <Button variant="primary" size="sm">View Property Details</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-8">
          <p className="text-gray-400 text-sm">
            {String(currentPage * itemsPerPage + 1).padStart(2, '0')}-{String(Math.min((currentPage + 1) * itemsPerPage, properties.length)).padStart(2, '0')} / {String(properties.length).padStart(2, '0')}
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
              disabled={currentPage === 0}
              className="p-2 rounded-lg border border-white/10 hover:border-purple-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))}
              disabled={currentPage === totalPages - 1}
              className="p-2 rounded-lg border border-white/10 hover:border-purple-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  )
}