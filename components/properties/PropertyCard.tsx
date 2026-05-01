'use client'

import Link from 'next/link'
import { Bed, Bath, Home as HomeIcon } from 'lucide-react'
import Button from '../ui/Button'

type Props = {
  id: number
  title: string
  description: string
  price: string
  beds: number
  baths: number
  type: string
  image: string
}

const truncateText = (text: string, maxLength: number = 100) => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '... Read More'
}

export default function PropertyCard({ id, title, description, price, beds, baths, type, image }: Props) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-purple-500 transition-all duration-300">
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          {truncateText(description)}
        </p>
        <div className="flex items-center gap-4 text-gray-400 text-sm mb-4 pb-4 border-b border-white/10">
          <span className="flex items-center gap-1"><Bed size={16} /> {beds} beds</span>
          <span className="flex items-center gap-1"><Bath size={16} /> {baths} baths</span>
          <span className="flex items-center gap-1"><HomeIcon size={16} /> {type}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-purple-500 font-bold text-xl">{price}</span>
          <Link href={`/property/${id}`}>
            <Button variant="primary" size="sm">View Property Details</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}