import { Send } from 'lucide-react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/50 mt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
        {/* Flex row - Logo column + 5 link columns side by side */}
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          {/* Column 1: Logo and Email Input (stacked vertically) */}
          <div className="md:w-64">
            <img src="/logo (1).png" alt="Estatein Logo" className="h-10 w-auto mb-4" />
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/5 border border-white/10 p-3 rounded-lg text-sm focus:outline-none focus:border-purple-500"
              />
              <button className="bg-purple-600 px-4 rounded-lg hover:bg-purple-700 transition">
                <Send size={18} />
              </button>
            </div>
          </div>

          {/* Column 2: Home Links */}
          <div className="flex-1">
            <h4 className="text-white font-semibold mb-3 text-sm">Home</h4>
            <ul className="space-y-2 text-gray-400 text-xs">
              <li><a href="#hero" className="hover:text-purple-500 transition">Hero Section</a></li>
              <li><a href="#features" className="hover:text-purple-500 transition">Features</a></li>
              <li><a href="#properties" className="hover:text-purple-500 transition">Properties</a></li>
              <li><a href="#testimonials" className="hover:text-purple-500 transition">Testimonials</a></li>
              <li><a href="#faq" className="hover:text-purple-500 transition">FAQs</a></li>
            </ul>
          </div>

          {/* Column 3: About Us Links */}
          <div className="flex-1">
            <h4 className="text-white font-semibold mb-3 text-sm">About Us</h4>
            <ul className="space-y-2 text-gray-400 text-xs">
              <li><a href="/about" className="hover:text-purple-500 transition">Our Story</a></li>
              <li><a href="/about" className="hover:text-purple-500 transition">Our Works</a></li>
              <li><a href="/about" className="hover:text-purple-500 transition">How it Works</a></li>
              <li><a href="/about" className="hover:text-purple-500 transition">Our Team</a></li>
              <li><a href="/about" className="hover:text-purple-500 transition">Our Clients</a></li>
            </ul>
          </div>

          {/* Column 4: Properties Links */}
          <div className="flex-1">
            <h4 className="text-white font-semibold mb-3 text-sm">Properties</h4>
            <ul className="space-y-2 text-gray-400 text-xs">
              <li><a href="/properties" className="hover:text-purple-500 transition">Portfolio</a></li>
              <li><a href="/properties" className="hover:text-purple-500 transition">Categories</a></li>
            </ul>
          </div>

          {/* Column 5: Services Links */}
          <div className="flex-1">
            <h4 className="text-white font-semibold mb-3 text-sm">Services</h4>
            <ul className="space-y-2 text-gray-400 text-xs">
              <li><a href="/services" className="hover:text-purple-500 transition">Valuation Mastery</a></li>
              <li><a href="/services" className="hover:text-purple-500 transition">Strategy Marketing</a></li>
              <li><a href="/services" className="hover:text-purple-500 transition">Negotiation Wizardry</a></li>
              <li><a href="/services" className="hover:text-purple-500 transition">Closing Success</a></li>
              <li><a href="/services" className="hover:text-purple-500 transition">Property Management</a></li>
            </ul>
          </div>

          {/* Column 6: Contact Us Links */}
          <div className="flex-1">
            <h4 className="text-white font-semibold mb-3 text-sm">Contact Us</h4>
            <ul className="space-y-2 text-gray-400 text-xs">
              <li><a href="/contact" className="hover:text-purple-500 transition">Contact Form</a></li>
              <li><a href="/contact" className="hover:text-purple-500 transition">Our Offices</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-white/10">
          <p className="text-gray-500 text-xs">
            ©2025 Estatein. All Rights Reserved. Terms and conditions
          </p>
          <div className="flex gap-3">
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-purple-600 transition flex items-center justify-center text-gray-400 hover:text-white">
              <FaFacebook size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-purple-600 transition flex items-center justify-center text-gray-400 hover:text-white">
              <FaTwitter size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-purple-600 transition flex items-center justify-center text-gray-400 hover:text-white">
              <FaInstagram size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-purple-600 transition flex items-center justify-center text-gray-400 hover:text-white">
              <FaLinkedin size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-purple-600 transition flex items-center justify-center text-gray-400 hover:text-white">
              <FaYoutube size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}