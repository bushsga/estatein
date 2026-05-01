import { Bed, Bath, Square, Zap, Wifi, Droplet, Sun, Wind, Coffee, Car } from 'lucide-react'

export default function PropertyInfo() {
  const features = [
    { name: "Smart Home System", icon: Zap },
    { name: "High-Speed WiFi", icon: Wifi },
    { name: "Swimming Pool", icon: Droplet },
    { name: "Solar Panels", icon: Sun },
    { name: "Central AC", icon: Wind },
    { name: "Modern Kitchen", icon: Coffee },
    { name: "Garage Parking", icon: Car },
  ]

  return (
    <div className="grid md:grid-cols-2 gap-10 mt-10 mb-16">
      {/* Left Column - Description & Stats */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Description</h2>
        <p className="text-gray-400 leading-relaxed text-sm mb-6">
          Experience luxury living in this stunning seaside villa. Featuring modern architecture, 
          spacious interiors, and breathtaking ocean views. This property offers the perfect blend 
          of comfort and elegance, with high-end finishes throughout. The open floor plan creates 
          a seamless flow between indoor and outdoor living spaces, perfect for entertaining guests 
          or enjoying quiet family time.
        </p>

        {/* Stats with borders */}
        <div className="flex items-center gap-6 p-4 bg-white/5 rounded-xl border border-white/10">
          <div className="flex-1 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Bed size={18} className="text-gray-400" />
              <span className="text-gray-400 text-sm">Bedroom</span>
            </div>
            <p className="text-white font-bold text-xl">04</p>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div className="flex-1 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Bath size={18} className="text-gray-400" />
              <span className="text-gray-400 text-sm">Bathroom</span>
            </div>
            <p className="text-white font-bold text-xl">03</p>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div className="flex-1 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Square size={18} className="text-gray-400" />
              <span className="text-gray-400 text-sm">Area</span>
            </div>
            <p className="text-white font-bold text-xl">2,500 ft²</p>
          </div>
        </div>
      </div>

      {/* Right Column - Key Features */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Key Features and Amenities</h2>
        <div className="space-y-2">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-3 bg-white/5 border-l-2 border-purple-500 p-3 rounded-r-lg">
              <feature.icon size={16} className="text-white" />
              <span className="text-gray-300 text-sm font-normal">{feature.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}