'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import Button from '../ui/Button'
import ScrollAnimation from '../ui/ScrollAnimation'

const faqs = [
  {
    id: 1,
    question: "How do I search for properties on Estatein?",
    answer: "You can search for properties using our advanced search filters including location, price range, property type, and more. Simply enter your criteria and browse through the listings."
  },
  {
    id: 2,
    question: "What documents do I need to buy a property?",
    answer: "Typically you'll need identification, proof of income, bank statements, and tax returns. Our team will guide you through the specific requirements."
  },
  {
    id: 3,
    question: "Can I schedule a property tour?",
    answer: "Yes! Contact our agents directly through the property page or call our support team to schedule a viewing at your convenience."
  },
  {
    id: 4,
    question: "What financing options are available?",
    answer: "We partner with multiple lenders to offer competitive mortgage rates and flexible payment plans tailored to your financial situation."
  },
  {
    id: 5,
    question: "How does the buying process work?",
    answer: "The process includes property search, viewing, making an offer, negotiation, inspection, financing, and finally closing. Our team guides you every step."
  },
  {
    id: 6,
    question: "Are there any hidden fees?",
    answer: "We believe in transparency. All fees are clearly outlined upfront. Ask your agent for a complete breakdown."
  }
]

export default function FAQ() {
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 3
  const totalPages = Math.ceil(faqs.length / itemsPerPage)
  
  const currentFaqs = faqs.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  )

  return (
    <ScrollAnimation direction='up'>
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
      {/* Header with flex between */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Frequently Asked Questions</h2>
          <p className="text-gray-400 text-sm max-w-2xl">
            Find answers to common questions about Estatein services, properties listing, and real estate process. 
            We are here to provide clarity and assist you every step of the way.
          </p>
        </div>
        <Button variant="secondary" size="sm">View All FAQs</Button>
      </div>

      <div className="grid md:grid-cols-3 gap-5 mb-6">
        {currentFaqs.map((faq) => (
          <div key={faq.id} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-purple-500 transition-all duration-300">
            <h3 className="text-white font-semibold text-base mb-3 line-clamp-2">{faq.question}</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">{faq.answer}</p>
            <button className="bg-white/10 text-white text-sm px-4 py-2 rounded-lg hover:bg-white/20 transition-all flex items-center gap-1">
              Read More <ArrowRight size={14} />
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center">
        <p className="text-gray-400 text-sm">
          {String(currentPage * itemsPerPage + 1).padStart(2, '0')}-{String(Math.min((currentPage + 1) * itemsPerPage, faqs.length)).padStart(2, '0')} / {String(faqs.length).padStart(2, '0')}
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
            disabled={currentPage === 0}
            className="p-2 rounded-lg border border-white/10 hover:border-purple-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))}
            disabled={currentPage === totalPages - 1}
            className="p-2 rounded-lg border border-white/10 hover:border-purple-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  
    </ScrollAnimation>
  )
}