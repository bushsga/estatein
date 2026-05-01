const steps = [
  { 
    step: "01", 
    title: "Discover a World of Possibilities", 
    desc: "Explore our extensive portfolio of properties ranging from luxury estates to cozy homes. Our advanced search tools help you find exactly what you're looking for." 
  },
  { 
    step: "02", 
    title: "Narrowing Down Your Choices", 
    desc: "Use our filtering system to refine your search based on location, price, amenities, and more. We help you focus on properties that match your criteria." 
  },
  { 
    step: "03", 
    title: "Personalized Guidance", 
    desc: "Our expert agents provide one-on-one consultations to understand your needs and preferences, ensuring you make informed decisions." 
  },
  { 
    step: "04", 
    title: "See It for Yourself", 
    desc: "Schedule virtual or in-person tours of your shortlisted properties. Experience the space and envision your future there." 
  },
  { 
    step: "05", 
    title: "Making Informed Decisions", 
    desc: "Review detailed property reports, market analysis, and legal documentation with our team. We ensure transparency at every step." 
  },
  { 
    step: "06", 
    title: "Getting the Best Deal", 
    desc: "Our negotiation experts work tirelessly to secure the best price and terms for your property transaction." 
  },
]

export default function Steps() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Navigating the <span className="text-white">Estatein Experience</span>
      </h2>
      <p className="text-gray-400 mb-10 max-w-3xl">
        At Estatein, we've designed a seamless journey to help you find your perfect property. 
        From initial discovery to final closing, our process ensures you feel supported and confident every step of the way.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((step, i) => (
          <div key={i} className="relative">
            {/* Border card with custom borders */}
            <div className="border-l-2 border-t-2 border-purple-500/50 rounded-tl-2xl p-5 pt-8">
              <div className="absolute -top-3 left-4 bg-black px-3">
                <span className="text-white font-bold text-sm">Step {step.step}</span>
              </div>
              <h3 className="font-semibold text-white text-base mb-3">{step.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{step.desc}</p>
            </div>
            <div className="border-r-2 border-b-2 border-purple-500/50 rounded-br-2xl -mt-1" />
          </div>
        ))}
      </div>
    </section>
  )
}