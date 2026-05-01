import PropertyGallery from '@/components/property/PropertyGallery'
import PropertyInfo from '@/components/property/PropertyInfo'
import InquiryForm from '@/components/property/InquiryForm'

export default function PropertyPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
      {/* Title */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold text-white">
            Seaside Serenity Villa
          </h1>
          <p className="text-gray-400 text-sm">Malibu, California</p>
        </div>
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-xl">
          <p className="text-sm text-gray-300">Starting from</p>
          <p className="text-2xl font-bold text-white">$1,250,000</p>
        </div>
      </div>

      <PropertyGallery />
      <PropertyInfo />
      <InquiryForm />
    </div>
  )
}