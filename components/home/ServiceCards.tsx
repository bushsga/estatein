'use client'

import { Home, Camera, Building2, Sun } from 'lucide-react'
import { ArrowUpRight } from 'lucide-react'
import ScrollAnimation from '../ui/ScrollAnimation'

const services = [
  { icon: Home, title: "Find Your Dream Home" },
  { icon: Camera, title: "Unlock Property Value" },
  { icon: Building2, title: "Effortless Property Management" },
  { icon: Sun, title: "Smart Investment, Informed Decisions" },
]

export default function ServiceCards() {
  return (
    <ScrollAnimation direction="up">
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid md:grid-cols-4 gap-5">
          {services.map((service, index) => (
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
  )
}