import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Button from '../ui/Button'
import ScrollAnimation from '../ui/ScrollAnimation'

export default function CTA() {
  return (
    <ScrollAnimation direction='zoom'>
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-white text-2xl md:text-3xl font-semibold">Start Your Real Estate Journey Today</h2>
          <p className="text-gray-400 mt-2">Take the first step towards your dream property.</p>
        </div>
        <Link href="/properties">
          <Button>Explore Properties <ArrowRight size={16} className="inline ml-1" /></Button>
        </Link>
      </div>
    </section>
    </ScrollAnimation>

  )
}