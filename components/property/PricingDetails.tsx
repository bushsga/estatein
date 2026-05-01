'use client'

import { useState } from 'react'
import { Info, ChevronDown, ChevronUp } from 'lucide-react'

export default function PricingDetails() {
  const [showAdditionalFees, setShowAdditionalFees] = useState(true)
  const [showMonthlyCosts, setShowMonthlyCosts] = useState(true)
  const [showTotalCosts, setShowTotalCosts] = useState(true)
  const [showMonthlyExpenses, setShowMonthlyExpenses] = useState(true)

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold text-white mb-4">Comprehensive Pricing Details</h2>
      <p className="text-gray-400 text-sm mb-6 leading-relaxed">
        Understanding the full cost of your property investment is crucial. Below is a detailed breakdown 
        of all expenses associated with purchasing Seaside Serenity Villa. These estimates help you plan 
        your budget effectively and avoid unexpected costs.
      </p>

      {/* Note Box */}
      <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 mb-8">
        <div className="flex gap-3">
          <Info size={20} className="text-yellow-500 flex-shrink-0" />
          <p className="text-yellow-500/80 text-sm">
            NOTE: The figures provided above are estimates and may vary depending on the property, 
            location, and individual circumstances.
          </p>
        </div>
      </div>

      {/* Listing Price & Additional Fees Row */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
          <p className="text-gray-400 text-sm mb-1">Listing Price</p>
          <p className="text-2xl font-bold text-white">$1,250,000</p>
        </div>
        <div>
          <button 
            onClick={() => setShowAdditionalFees(!showAdditionalFees)}
            className="w-full flex justify-between items-center bg-white/5 border border-white/10 rounded-xl p-5 hover:border-purple-500 transition"
          >
            <span className="text-white font-semibold">Additional Fees</span>
            <span className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm transition-all duration-300">
              {showAdditionalFees ? 'Hide Details' : 'Learn More'}
            </span>
          </button>
        </div>
      </div>

      {/* Additional Fees Content */}
      {showAdditionalFees && (
        <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Property Transfer Tax */}
            <div className="border-b border-white/10 pb-4">
              <p className="text-white font-medium mb-2">Property Transfer Tax</p>
              <div className="flex justify-between items-start flex-wrap gap-2">
                <p className="text-purple-500 font-bold">$18,750</p>
                <div className="bg-white/10 rounded-full px-3 py-1">
                  <p className="text-gray-400 text-xs">Based on sale price and local regulations</p>
                </div>
              </div>
            </div>
            {/* Legal Fees */}
            <div className="border-b border-white/10 pb-4">
              <p className="text-white font-medium mb-2">Legal Fees</p>
              <div className="flex justify-between items-start flex-wrap gap-2">
                <p className="text-purple-500 font-bold">$3,500</p>
                <div className="bg-white/10 rounded-full px-3 py-1">
                  <p className="text-gray-400 text-xs">Approximate cost for legal services</p>
                </div>
              </div>
            </div>
            {/* Home Inspection */}
            <div className="border-b border-white/10 pb-4 md:border-b-0">
              <p className="text-white font-medium mb-2">Home Inspection</p>
              <div className="flex justify-between items-start flex-wrap gap-2">
                <p className="text-purple-500 font-bold">$500</p>
                <div className="bg-white/10 rounded-full px-3 py-1">
                  <p className="text-gray-400 text-xs">Recommended for due diligence</p>
                </div>
              </div>
            </div>
            {/* Property Insurance */}
            <div>
              <p className="text-white font-medium mb-2">Property Insurance</p>
              <div className="flex justify-between items-start flex-wrap gap-2">
                <p className="text-purple-500 font-bold">$1,200</p>
                <div className="bg-white/10 rounded-full px-3 py-1">
                  <p className="text-gray-400 text-xs">Annual cost for comprehensive insurance</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-white/10">
            <p className="text-white font-medium mb-2">Mortgage Fees</p>
            <div className="flex justify-between items-start flex-wrap gap-2">
              <p className="text-gray-400">Varies</p>
              <div className="bg-white/10 rounded-full px-3 py-1">
                <p className="text-gray-400 text-xs">If applicable, consult with your lender</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Monthly Costs Section */}
      <div className="mb-6">
        <button 
          onClick={() => setShowMonthlyCosts(!showMonthlyCosts)}
          className="w-full flex justify-between items-center bg-white/5 border border-white/10 rounded-xl p-5 hover:border-purple-500 transition"
        >
          <span className="text-white font-semibold">Monthly Costs</span>
          <span className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm transition-all duration-300">
            {showMonthlyCosts ? 'Hide Details' : 'Learn More'}
          </span>
        </button>
      </div>

      {showMonthlyCosts && (
        <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-white font-medium mb-2">Property Taxes</p>
              <div className="flex justify-between items-start flex-wrap gap-2">
                <p className="text-purple-500 font-bold">$1,042</p>
                <div className="bg-white/10 rounded-full px-3 py-1">
                  <p className="text-gray-400 text-xs">Monthly property tax estimate</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-white font-medium mb-2">Homeowner Association Fee</p>
              <div className="flex justify-between items-start flex-wrap gap-2">
                <p className="text-purple-500 font-bold">$350</p>
                <div className="bg-white/10 rounded-full px-3 py-1">
                  <p className="text-gray-400 text-xs">Monthly fee for common area maintenance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Total Initial Costs */}
      <div className="mb-6">
        <button 
          onClick={() => setShowTotalCosts(!showTotalCosts)}
          className="w-full flex justify-between items-center bg-white/5 border border-white/10 rounded-xl p-5 hover:border-purple-500 transition"
        >
          <span className="text-white font-semibold">Total Initial Costs</span>
          <span className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm transition-all duration-300">
            {showTotalCosts ? 'Hide Details' : 'Learn More'}
          </span>
        </button>
      </div>

      {showTotalCosts && (
        <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-b border-white/10 pb-4">
              <p className="text-gray-400 text-sm mb-1">Listing Price</p>
              <p className="text-xl font-bold text-white">$1,250,000</p>
            </div>
            <div className="border-b border-white/10 pb-4">
              <p className="text-gray-400 text-sm mb-1">Additional Fees</p>
              <p className="text-xl font-bold text-white">$23,950</p>
              <div className="bg-white/10 rounded-full px-3 py-1 mt-2 inline-block">
                <p className="text-gray-400 text-xs">Transfer tax, legal fees, inspection, insurance</p>
              </div>
            </div>
            <div className="border-b border-white/10 pb-4 md:border-b-0">
              <p className="text-gray-400 text-sm mb-1">Down Payment (20%)</p>
              <p className="text-xl font-bold text-white">$250,000</p>
              <div className="bg-white/10 rounded-full px-3 py-1 mt-2 inline-block">
                <p className="text-gray-400 text-xs">20%</p>
              </div>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Mortgage Amount</p>
              <p className="text-xl font-bold text-white">$1,000,000</p>
              <div className="bg-white/10 rounded-full px-3 py-1 mt-2 inline-block">
                <p className="text-gray-400 text-xs">If applicable</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Monthly Expenses */}
      <div className="mb-6">
        <button 
          onClick={() => setShowMonthlyExpenses(!showMonthlyExpenses)}
          className="w-full flex justify-between items-center bg-white/5 border border-white/10 rounded-xl p-5 hover:border-purple-500 transition"
        >
          <span className="text-white font-semibold">Monthly Expenses</span>
          <span className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm transition-all duration-300">
            {showMonthlyExpenses ? 'Hide Details' : 'Learn More'}
          </span>
        </button>
      </div>

      {showMonthlyExpenses && (
        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-b border-white/10 pb-4">
              <p className="text-gray-400 text-sm mb-1">Property Taxes</p>
              <p className="text-xl font-bold text-white">$1,042</p>
            </div>
            <div className="border-b border-white/10 pb-4">
              <p className="text-gray-400 text-sm mb-1">Homeowner Association Fees</p>
              <p className="text-xl font-bold text-white">$350</p>
            </div>
            <div className="border-b border-white/10 pb-4 md:border-b-0">
              <p className="text-gray-400 text-sm mb-1">Mortgage Payment</p>
              <p className="text-gray-400">Varies based on terms and interest rate</p>
              <div className="bg-white/10 rounded-full px-3 py-1 mt-2 inline-block">
                <p className="text-gray-400 text-xs">If applicable</p>
              </div>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Property Insurance</p>
              <p className="text-xl font-bold text-white">$100</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}