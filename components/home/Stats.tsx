'use client'

import { Users, Building2, Trophy } from 'lucide-react'
import Card from '../ui/Card'
import Counter from '../ui/Counter'
import ScrollAnimation from '../ui/ScrollAnimation'

export default function Stats() {
  const stats = [
    { label: 'Happy Customers', value: 200, suffix: '+', icon: Users },
    { label: 'Properties', value: 10000, suffix: '+', icon: Building2 },
    { label: 'Years Experience', value: 16, suffix: '+', icon: Trophy },
  ]

  return (
    <ScrollAnimation direction="up">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 px-6 md:px-12">
        {stats.map((stat, i) => (
          <Card key={i}>
            <div className="flex items-center gap-3 mb-2">
              <stat.icon className="text-purple-500" size={28} />
              <h3 className="text-white text-2xl font-semibold">
                <Counter target={stat.value} suffix={stat.suffix} />
              </h3>
            </div>
            <p className="text-gray-400 text-sm">{stat.label}</p>
          </Card>
        ))}
      </div>
    </ScrollAnimation>
  )
}