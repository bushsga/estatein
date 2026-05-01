'use client'

import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import Button from '../ui/Button'
import ScrollAnimation from '../ui/ScrollAnimation'

const testimonials = [
  {
    id: 1,
    rating: 5,
    title: "Exceptional Service!",
    text: "Estatein made finding our dream home incredibly easy. Their team was professional and supportive throughout the entire process. I couldn't be happier with my new home.",
    name: "Sarah Johnson",
    location: "California, USA",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    id: 2,
    rating: 5,
    title: "Best Real Estate Platform",
    text: "The best real estate platform I have used. Great properties and excellent customer service. They helped me find the perfect investment property.",
    name: "Michael Chen",
    location: "New York, USA",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    id: 3,
    rating: 5,
    title: "Highly Recommended!",
    text: "I found my perfect apartment through Estatein. The search filters made it easy to find exactly what I wanted. Highly recommended for anyone looking for a home.",
    name: "Emily Rodriguez",
    location: "Florida, USA",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    id: 4,
    rating: 5,
    title: "Amazing Experience",
    text: "From start to finish, the team at Estatein was incredible. They listened to our needs and found us the perfect property.",
    name: "David Wilson",
    location: "Texas, USA",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg"
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 3
  const totalPages = Math.ceil(testimonials.length / itemsPerPage)
  
  const currentTestimonials = testimonials.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  )

  return (
    <ScrollAnimation direction='right'>
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
      {/* Header with flex between */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">What Our Clients Say</h2>
          <p className="text-gray-400 text-sm max-w-2xl">
            Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.
          </p>
        </div>
        <Button variant="secondary" size="sm">View All Testimonials</Button>
      </div>
      
      <div className="grid md:grid-cols-3 gap-5 mb-6">
        {currentTestimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-purple-500 transition-all duration-300">
            <div className="flex gap-1 mb-3">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />
              ))}
            </div>
            <h3 className="text-white font-semibold text-base mb-2">{testimonial.title}</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">{testimonial.text}</p>
            <div className="flex items-center gap-3 pt-3 border-t border-white/10">
              <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover" />
              <div>
                <p className="text-white font-medium text-sm">{testimonial.name}</p>
                <p className="text-gray-500 text-xs">{testimonial.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center">
        <p className="text-gray-400 text-sm">
          {String(currentIndex * itemsPerPage + 1).padStart(2, '0')}-{String(Math.min((currentIndex + 1) * itemsPerPage, testimonials.length)).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            className="p-2 rounded-lg border border-white/10 hover:border-purple-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => setCurrentIndex(prev => Math.min(totalPages - 1, prev + 1))}
            disabled={currentIndex === totalPages - 1}
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