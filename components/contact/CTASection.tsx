import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Button from '../ui/Button'

export default function CTASection() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 pb-24">
      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="max-w-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Start Your Real Estate Journey Today
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, 
            or expert real estate advice, Estatein is here to assist you every step of the way.
          </p>
        </div>
        <Link href="/properties">
          <Button variant="primary" size="lg" className="flex items-center gap-2">
            Explore Properties <ArrowRight size={16} />
          </Button>
        </Link>
      </div>
    </section>
  );
}