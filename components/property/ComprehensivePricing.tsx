'use client'

import React, { useState } from "react"

interface CellProps {
  label: string
  value: string
  desc?: string
  fullWidth?: boolean
}

const Cell: React.FC<CellProps> = ({ label, value, desc, fullWidth }) => (
  <div className={`bg-neutral-800/50 rounded-lg p-3 ${fullWidth ? "col-span-2" : ""}`}>
    <p className="text-xs text-neutral-400 mb-1">{label}</p>
    <p className="text-base font-medium text-white mb-0.5">{value}</p>
    {desc && <p className="text-xs text-neutral-500">{desc}</p>}
  </div>
)

interface CardProps {
  title: string
  children: React.ReactNode
}

const PricingCard: React.FC<CardProps> = ({ title, children }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-neutral-900/50 border border-neutral-700/60 rounded-xl p-5 mb-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[15px] font-medium text-white">{title}</h3>
        <button
          onClick={() => setOpen(!open)}
          className="text-xs text-neutral-400 border border-neutral-600 rounded-full px-3 py-1 hover:bg-neutral-800 transition-colors"
        >
          {open ? "Close" : "Learn more"}
        </button>
      </div>
      <div className="grid grid-cols-2 gap-3">{children}</div>
      {open && (
        <p className="mt-4 text-xs text-neutral-500 border-t border-neutral-700 pt-3">
          All figures shown are estimates and may vary depending on your
          property, location, and individual circumstances. Consult a licensed
          real estate professional for accurate numbers.
        </p>
      )}
    </div>
  )
}

const ComprehensivePricing: React.FC = () => {
  return (
    <div className="mb-12">
      {/* Header */}
      <h2 className="text-2xl font-semibold text-white mb-2">
        Comprehensive pricing details
      </h2>
      <p className="text-sm text-neutral-400 mb-5 leading-relaxed">
        A full breakdown of all costs associated with your property investment. 
        Below, we break down the pricing for Seaside Serenity Villa to help you make an informed decision.
      </p>

      {/* Note Box - Grey-6 background with white text */}
      <div className="bg-neutral-800/50 border-l-[3px] border-neutral-500 rounded-md px-4 py-3 mb-6 text-sm text-neutral-300">
        <span className="text-white font-medium">Note</span> — The
        figures provided below are estimates and may vary depending on the
        property, location, and individual circumstances.
      </div>

      {/* Listing Price Container - Display Flex with no extra items */}
      <div className="bg-neutral-900/50 border border-neutral-700/60 rounded-xl p-5 mb-6">
        <p className="text-sm text-neutral-400 mb-1">Listing price</p>
        <p className="text-2xl font-bold text-white">$1,250,000</p>
      </div>

      {/* Additional Fees */}
      <PricingCard title="Additional fees">
        <Cell
          label="Property transfer tax"
          value="$25,000"
          desc="Based on sale price and local regulations"
        />
        <Cell
          label="Legal fees"
          value="$3,000"
          desc="Approximate cost for legal services including title transfer"
        />
        <Cell
          label="Home inspection"
          value="$500"
          desc="Recommended for due diligence"
        />
        <Cell
          label="Property insurance"
          value="$1,200"
          desc="Annual cost for comprehensive property insurance"
        />
        <Cell
          label="Mortgage fees"
          value="Varies"
          desc="If applicable, consult with your lender for specific details"
          fullWidth
        />
      </PricingCard>

      {/* Monthly Costs */}
      <PricingCard title="Monthly costs">
        <Cell
          label="Property taxes"
          value="$1,250"
          desc="Approximate monthly payment based on sale price and local rate"
        />
        <Cell
          label="Homeowners association fee"
          value="$300"
          desc="Monthly fee for common area maintenance and security"
        />
      </PricingCard>

      {/* Total Initial Costs */}
      <PricingCard title="Total initial costs">
        <Cell label="Listing price" value="$1,250,000" />
        <Cell
          label="Additional fees"
          value="$29,700"
          desc="Transfer tax, legal fees, inspection, insurance"
        />
        <Cell label="Down payment" value="$250,000 (20%)" />
        <Cell label="Mortgage amount" value="$1,000,000" desc="If applicable" />
      </PricingCard>

      {/* Monthly Expenses */}
      <PricingCard title="Monthly expenses">
        <Cell label="Property taxes" value="$1,250" />
        <Cell label="Homeowners association fee" value="$300" />
        <Cell
          label="Mortgage payment"
          value="Varies"
          desc="Based on terms and interest rate, if applicable"
        />
        <Cell label="Property insurance" value="$100" desc="Approximate monthly cost" />
      </PricingCard>
    </div>
  )
}

export default ComprehensivePricing