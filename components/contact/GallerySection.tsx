const images = [
  { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80", alt: "Office space" },
  { src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80", alt: "Team meeting" },
  { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80", alt: "Team collaboration" },
  { src: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&q=80", alt: "Team portrait" },
  { src: "https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?w=600&q=80", alt: "Handshake" },
];

export default function GallerySection() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-white/10">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {/* Left column */}
        <div className="flex flex-col gap-3">
          <img src={images[0].src} alt={images[0].alt} className="rounded-xl object-cover w-full h-48" />
          <img src={images[2].src} alt={images[2].alt} className="rounded-xl object-cover w-full h-48" />
        </div>

        {/* Middle column */}
        <div className="flex flex-col gap-3">
          <img src={images[1].src} alt={images[1].alt} className="rounded-xl object-cover w-full h-48" />
          <img src={images[3].src} alt={images[3].alt} className="rounded-xl object-cover w-full h-48" />
        </div>

        {/* Right column with overlay text */}
        <div className="flex flex-col gap-3">
          <div className="relative rounded-xl overflow-hidden h-48">
            <img src={images[4].src} alt={images[4].alt} className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-purple-400 text-xs">✦</span>
              </div>
              <h3 className="text-white font-bold text-lg leading-tight">Explore Estatein's World</h3>
              <p className="text-gray-300 text-xs mt-1 leading-relaxed">
                Step inside the world of Estatein, where professionalism meets warmth, and excellence meets passion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}