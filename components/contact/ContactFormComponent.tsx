'use client'

import { useState } from "react";

export default function ContactFormComponent() {
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiryType: "",
    howHeard: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-white/10">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-purple-400 text-xs">✦</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Let's Connect</h2>
      <p className="text-gray-400 max-w-2xl text-sm leading-relaxed mb-10">
        We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. 
        Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions.
      </p>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {/* First Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-gray-400 text-sm">First Name</label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="Enter First Name"
              className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>
          {/* Last Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-gray-400 text-sm">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Enter Last Name"
              className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>
          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label className="text-gray-400 text-sm">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your Email"
              className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>
          {/* Phone */}
          <div className="flex flex-col gap-1.5">
            <label className="text-gray-400 text-sm">Phone</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter Phone Number"
              className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>
          {/* Inquiry Type */}
          <div className="flex flex-col gap-1.5">
            <label className="text-gray-400 text-sm">Inquiry Type</label>
            <select
              name="inquiryType"
              value={form.inquiryType}
              onChange={handleChange}
              className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-gray-400 text-sm focus:outline-none focus:border-purple-500 transition-colors appearance-none cursor-pointer"
            >
              <option value="" disabled>Select Inquiry Type</option>
              <option value="buy">Buy a Property</option>
              <option value="sell">Sell a Property</option>
              <option value="invest">Investment Inquiry</option>
              <option value="other">Other</option>
            </select>
          </div>
          {/* How Did You Hear */}
          <div className="flex flex-col gap-1.5">
            <label className="text-gray-400 text-sm">How Did You Hear About Us?</label>
            <select
              name="howHeard"
              value={form.howHeard}
              onChange={handleChange}
              className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-gray-400 text-sm focus:outline-none focus:border-purple-500 transition-colors appearance-none cursor-pointer"
            >
              <option value="" disabled>Select</option>
              <option value="google">Google</option>
              <option value="social">Social Media</option>
              <option value="friend">Friend / Referral</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1.5 mb-6">
          <label className="text-gray-400 text-sm">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Enter your Message here.."
            rows={5}
            className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
          />
        </div>

        {/* Footer row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => setAgreed(!agreed)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${agreed ? "bg-purple-600 border-purple-600" : "border-white/20"}`}>
              {agreed && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>}
            </div>
            <span className="text-gray-400 text-sm">I agree with Terms of Use and Privacy Policy</span>
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-6 py-3 rounded-lg transition-colors whitespace-nowrap">
            Send Your Message
          </button>
        </div>
      </div>
    </section>
  );
}