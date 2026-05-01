// app/page.tsx
import Hero from '@/components/home/Hero'
import ServiceCards from '@/components/home/ServiceCards'
import FeaturedProperties from '@/components/home/FeaturedProperties'
import Testimonials from '@/components/home/Testimonials'
import FAQ from '@/components/home/FAQ'
import CTA from '@/components/home/CTA'

export default function HomePage() {
  return (
    <div>
      <Hero />
      <ServiceCards />
      <FeaturedProperties />
      <Testimonials />
      <FAQ />
      <CTA />
    </div>
  )
}
