import Hero from '@/components/properties/Hero'
import PropertyGrid from '@/components/properties/PropertyGrid'
import ContactForm from '@/components/properties/ContactForm'
import CTA from '@/components/home/CTA'

export default function PropertiesPage() {
  return (
    <div>
      <Hero />
      <PropertyGrid />
      <ContactForm />
      <CTA />
    </div>
  )
}