import { Mail, Phone, MapPin, Share2, ArrowUpRight } from "lucide-react";
import ScrollAnimation from '../ui/ScrollAnimation'

const cards = [
  { icon: Mail, label: "info@estatein.com" },
  { icon: Phone, label: "+1 (123) 456-7890" },
  { icon: MapPin, label: "Main Headquarters" },
  { icon: Share2, label: "Instagram  LinkedIn  Facebook" },
];

export default function ContactCards() {
  return (
    <ScrollAnimation direction="up">
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, i) => (
          <div
            key={i}
            className="relative bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center gap-3 group hover:border-purple-500 transition-all duration-300 cursor-pointer"
          >
            <div className="absolute top-4 right-4 text-gray-600 group-hover:text-purple-400 transition-colors">
              <ArrowUpRight size={16} />
            </div>
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
              <card.icon size={20} />
            </div>
            <span className="text-gray-300 text-sm text-center">{card.label}</span>
          </div>
        ))}
      </div>
    </section>
    </ScrollAnimation>

  );
}