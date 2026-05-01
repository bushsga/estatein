'use client'

import { useParams } from 'next/navigation'
import PropertyGallery from '@/components/property/PropertyGallery'
import PropertyInfo from '@/components/property/PropertyInfo'
import InquiryForm from '@/components/property/InquiryForm'
import ComprehensivePricing from '@/components/property/ComprehensivePricing'
import FAQ from '@/components/home/FAQ'
import CTA from '@/components/home/CTA'
import ScrollAnimation from '@/components/ui/ScrollAnimation'

export default function PropertyPage() {
  const params = useParams()
  const propertyId = params.id

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-6 sm:py-8 overflow-x-hidden">
      {/* Title Section */}
      <ScrollAnimation direction="left">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 sm:mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Seaside Serenity Villa</h1>
            <div className="flex items-center gap-2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span className="text-sm sm:text-base">Malibu, California</span>
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-400 text-xs sm:text-sm">Price</p>
            <p className="text-2xl sm:text-3xl font-bold text-purple-500">$1,250,000</p>
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation direction="right">
        <PropertyGallery />
      </ScrollAnimation>
      
      <ScrollAnimation direction="left">
        <PropertyInfo />
      </ScrollAnimation>
      
      <ScrollAnimation direction="up">
        <InquiryForm />
      </ScrollAnimation>
      
      <ScrollAnimation direction="right">
        <ComprehensivePricing />
      </ScrollAnimation>
      
      <ScrollAnimation direction="zoom">
        <FAQ />
      </ScrollAnimation>
      
      <ScrollAnimation direction="up">
        <CTA />
      </ScrollAnimation>
    </div>
  )
}