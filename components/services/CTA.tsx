import { ArrowRight, Phone } from 'lucide-react'
import Button from '../ui/Button'

export default function ServicesCTA() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="text-xl md:text-2xl text-white font-semibold mb-2">
            Start Your Real Estate Journey Today
          </h3>
          <p className="text-gray-400 text-sm max-w-xl">
            Your dream property is just a click away. Whether you're looking for a new home or investment, we're here to help.
          </p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" className="flex items-center gap-2">
            <Phone size={16} /> Call Us
          </Button>
          <Button className="flex items-center gap-2">
            Explore Properties <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  )
}