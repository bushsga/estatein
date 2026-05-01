'use client'

import Link from 'next/link'
import Button from '../ui/Button'
import ScrollAnimation from '../ui/ScrollAnimation'

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <ScrollAnimation direction="left">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
              Discover Your Dream <br />
              <span className="text-white">Property With Estatein</span>
            </h1>
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              Your journey to finding the perfect property begins here. Explore our curated collection of luxury homes and investment opportunities.
            </p>
            <div className="flex gap-4 mb-8">
              <Button variant="outline">Learn More</Button>
              <Link href="/properties">
                <Button variant="primary">Browse Properties</Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                <h3 className="text-xl font-bold text-white counter" data-target="200">200+</h3>
                <p className="text-gray-400 text-xs">Happy Customers</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                <h3 className="text-xl font-bold text-white counter" data-target="10000">10k+</h3>
                <p className="text-gray-400 text-xs">Properties</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                <h3 className="text-xl font-bold text-white counter" data-target="16">16+</h3>
                <p className="text-gray-400 text-xs">Years Experience</p>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation direction="right">
          <div className="relative">
            <div className="relative bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-2 border border-white/10">
              <img
                src="/hero-image.png"
                alt="Luxury property"
                className="rounded-xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}