'use client'

import { Phone, Mail, Check } from 'lucide-react'
import Button from '../ui/Button'

export default function ContactForm() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Let's Make it Happen</h2>
        <p className="text-gray-400 text-sm">
          Ready to find your dream property? Fill out the form below and our team will get back to you within 24 hours.
        </p>
      </div>

      <form className="bg-white/5 border border-white/10 rounded-xl p-6">
        {/* Row 1: First Name, Last Name, Email, Phone - 4 inputs */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
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
          <div>
            <label className="block text-white text-sm mb-2">Email</label>
            <input 
              type="email" 
              placeholder="Enter Email" 
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

        {/* Row 2: Preferred Location, Property Type, Bedrooms, Bathrooms - 4 inputs */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label className="block text-white text-sm mb-2">Preferred Location</label>
            <select className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-gray-400 focus:outline-none focus:border-purple-500">
              <option>Select Location</option>
              <option>New York</option>
              <option>California</option>
              <option>Florida</option>
              <option>Texas</option>
            </select>
          </div>
          <div>
            <label className="block text-white text-sm mb-2">Property Type</label>
            <select className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-gray-400 focus:outline-none focus:border-purple-500">
              <option>Select Property Type</option>
              <option>House</option>
              <option>Apartment</option>
              <option>Condo</option>
              <option>Villa</option>
            </select>
          </div>
          <div>
            <label className="block text-white text-sm mb-2">No. of Bedrooms</label>
            <select className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-gray-400 focus:outline-none focus:border-purple-500">
              <option>Select bedrooms</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5+</option>
            </select>
          </div>
          <div>
            <label className="block text-white text-sm mb-2">No. of Bathrooms</label>
            <select className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-gray-400 focus:outline-none focus:border-purple-500">
              <option>Select bathrooms</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5+</option>
            </select>
          </div>
        </div>

        {/* Row 3: Budget, Preferred Contact Method (Phone + Email together) - 3 inputs areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-white text-sm mb-2">Budget</label>
            <select className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-gray-400 focus:outline-none focus:border-purple-500">
              <option>Select Budget Range</option>
              <option>$0 - $500k</option>
              <option>$500k - $1M</option>
              <option>$1M - $2M</option>
              <option>$2M+</option>
            </select>
          </div>
          <div>
            <label className="block text-white text-sm mb-2">Phone Number</label>
            <div className="flex items-center gap-2 bg-black/50 border border-white/10 rounded-lg px-4 py-2.5">
              <Phone size={16} className="text-gray-400" />
              <input 
                type="tel" 
                placeholder="Enter Your Number" 
                className="flex-1 bg-transparent outline-none text-sm text-white"
              />
            </div>
          </div>
          <div>
            <label className="block text-white text-sm mb-2">Email Address</label>
            <div className="flex items-center gap-2 bg-black/50 border border-white/10 rounded-lg px-4 py-2.5">
              <Mail size={16} className="text-gray-400" />
              <input 
                type="email" 
                placeholder="Enter Your Email" 
                className="flex-1 bg-transparent outline-none text-sm text-white"
              />
            </div>
          </div>
        </div>

        {/* Row 4: Message - full width */}
        <div className="mb-6">
          <label className="block text-white text-sm mb-2">Message</label>
          <textarea 
            placeholder="Enter your message here..." 
            rows={4}
            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-purple-500"
          />
        </div>

        {/* Terms and Submit */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border border-white/10 rounded bg-black/50 flex items-center justify-center">
              <Check size={12} className="text-purple-500" />
            </div>
            <span className="text-gray-400 text-sm">Agree with terms of Use and Privacy Policy</span>
          </div>
          <Button variant="primary" size="lg">Send Your Message</Button>
        </div>
      </form>
    </section>
  )
}