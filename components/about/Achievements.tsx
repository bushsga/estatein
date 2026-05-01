const achievements = [
  { title: "3+ Years of Excellence", desc: "We've amassed a wealth of knowledge and experience in the real estate industry, continuously evolving to meet market demands." },
  { title: "500+ Happy Clients", desc: "Our clients' satisfaction is at the heart of what we do. Each success story motivates us to push further." },
  { title: "Industry Recognition", desc: "Recognized for our excellence in the real estate market with multiple awards and positive industry reviews." },
]

export default function Achievements() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Achievements</h2>
      <p className="text-gray-400 mb-8 max-w-2xl">
        Our story is one of continuous growth and evolution. We started as a small team with big dreams, 
        determined to create a real estate platform that transcended the ordinary.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {achievements.map((item, i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="font-semibold text-white text-lg mb-3">{item.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}