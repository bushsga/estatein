import { Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 text-center md:text-left">
      <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-1 mb-6 animate-fade-in">
        <Sparkles size={14} className="text-purple-500" />
        <span className="text-purple-400 text-xs">Our Services</span>
      </div>
      <h1 className="text-3xl md:text-5xl font-semibold text-white mb-6 animate-fade-in">
        Elevate Your{' '}
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Real Estate Experience
        </span>
      </h1>
      <p className="text-gray-400 max-w-2xl mx-auto md:mx-0 text-sm md:text-base leading-relaxed">
        Welcome to Estatein, where your real estate aspirations meet expert guidance.
        Explore our comprehensive range of services, each designed to cater to your unique needs and dreams.
      </p>
    </section>
  )
}