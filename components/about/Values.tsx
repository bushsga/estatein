import Card from '../ui/Card'

const values = [
  { title: "Trust", desc: "The cornerstone of every successful real estate transaction. We build lasting relationships through transparency and reliability." },
  { title: "Excellence", desc: "We set the bar high for our services and deliver beyond expectations. Every detail matters in our pursuit of perfection." },
  { title: "Client-Centric", desc: "Your dreams are at the center of our universe. We listen, understand, and tailor our approach to your unique needs." },
  { title: "Commitment", desc: "We deliver top-notch service with professionalism and integrity. Your success is our commitment." },
]

export default function Values() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Values</h2>
          <p className="text-gray-400 leading-relaxed mt-6">
            We started as a small team with big dreams, determined to create a real estate platform that puts clients first. 
            Our values guide everything we do, from how we treat our clients to how we build our community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {values.map((item, i) => (
            <Card key={i} className="p-4">
              <h3 className="font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}