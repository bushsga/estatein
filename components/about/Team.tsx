import { Send } from 'lucide-react'

const team = [
  { name: "Max Mitchell", role: "Founder & CEO", img: "https://randomuser.me/api/portraits/men/1.jpg" },
  { name: "Sarah Johnson", role: "Chief Operating Officer", img: "https://randomuser.me/api/portraits/women/2.jpg" },
  { name: "David Brown", role: "Head of Sales", img: "https://randomuser.me/api/portraits/men/3.jpg" },
  { name: "Michael Turner", role: "Legal Advisor", img: "https://randomuser.me/api/portraits/men/4.jpg" },
]

export default function Team() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet The Estatein Team</h2>
      <p className="text-gray-400 mb-10 max-w-2xl">
        Our dedicated team of professionals is here to guide you through every step of your real estate journey.
      </p>

      <div className="grid md:grid-cols-4 gap-6">
        {team.map((member, i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
            <div className="relative">
              <img src={member.img} alt={member.name} className="w-full h-64 object-cover" />
              {/* Twitter icon positioned on the image */}
              <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-black/60 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-white text-lg">{member.name}</h3>
              <p className="text-gray-400 text-sm mb-3">{member.role}</p>
              <div className="flex items-center justify-between bg-white/10 rounded-lg px-3 py-2">
                <span className="text-gray-300 text-sm">Say Hello 👋</span>
                <Send size={16} className="text-gray-400" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}