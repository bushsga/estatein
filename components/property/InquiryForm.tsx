'use client'

import { useState } from 'react'
import { MapPin, Send, Check } from 'lucide-react'
import Button from '../ui/Button'

export default function InquiryForm() {
  const [agreed, setAgreed] = useState(false)

  return (
    <div className="mt-16 mb-12">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Left Column */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Inquire About Seaside Serenity Villa</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Interested in this property? Fill out the form and our team will contact you shortly. 
            We're here to answer all your questions and schedule a viewing at your convenience.
            Our real estate experts will guide you through every step of the purchasing process.
          </p>
        </div>

        {/* Right Column - Form */}
        <form className="space-y-4">
          {/* Row 1: First Name & Last Name */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-white text-sm mb-2">First Name</label>
              <input 
                type="text" 
                placeholder="Enter First Name" 
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-white text-sm mb-2">Last Name</label>
              <input 
                type="text" 
                placeholder="Enter Last Name" 
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>

          {/* Row 2: Email & Phone */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-white text-sm mb-2">Email</label>
              <input 
                type="email" 
                placeholder="Enter Your Email" 
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-white text-sm mb-2">Phone</label>
              <input 
                type="tel" 
                placeholder="Enter Phone Number" 
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>

          {/* Row 3: Selected Property */}
          <div>
            <label className="block text-white text-sm mb-2">Selected Property</label>
            <div className="flex items-center justify-between bg-black/50 border border-white/10 rounded-lg px-4 py-2.5">
              <span className="text-white text-sm">Seaside Serenity Villa, Malibu, California</span>
              <MapPin size={16} className="text-gray-400" />
            </div>
          </div>

          {/* Row 4: Message */}
          <div>
            <label className="block text-white text-sm mb-2">Message</label>
            <textarea 
              placeholder="Enter Your Message" 
              rows={3}
              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-purple-500"
            />
          </div>

          {/* Checkbox & Submit */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setAgreed(!agreed)}
                className={`w-4 h-4 border rounded flex items-center justify-center transition ${
                  agreed ? 'bg-purple-500 border-purple-500' : 'border-white/20 bg-transparent'
                }`}
              >
                {agreed && <Check size={10} className="text-white" />}
              </button>
              <span className="text-gray-400 text-sm">I agree to the Terms of Use and Privacy Policy</span>
            </div>
            <Button variant="primary" size="lg">Send Message</Button>
          </div>
        </form>
      </div>
    </div>
  )
}