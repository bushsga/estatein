import ScrollAnimation from '../ui/ScrollAnimation'

export default function Journey() {
  const stats = [
    { value: "200+", label: "Happy Customers" },
    { value: "10k+", label: "Properties for Clients" },
    { value: "16+", label: "Years of Experience" },
  ]

  return (
    <ScrollAnimation direction='left'>
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our <span className="text-white">Journey</span>
          </h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            Our story is one of continuous growth and evolution. We started as a small team with a big dream to revolutionize the real estate industry.
          </p>

          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-2 border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600"
              alt="About Estatein"
              className="rounded-xl w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
    </ScrollAnimation>

  )
}