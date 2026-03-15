import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-[85vh] min-h-[520px] flex items-center justify-center overflow-hidden">
      {/* Background collage */}
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-2">
        {[
          "https://images.unsplash.com/photo-1567337710282-00832b415979?w=800&q=80",
          "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80",
          "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80",
          "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=80",
          "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
        ].map((src, i) => (
          <div key={i} className="relative overflow-hidden">
            <Image src={src} alt="" fill className="object-cover" sizes="33vw" />
          </div>
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <span className="inline-block bg-[#FF9F1C] text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
          Real Stories · Real Flavors
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-5">
          Real Food Journeys from{" "}
          <span className="text-[#FF9F1C]">Our Travelers</span>
        </h1>
        <p className="text-white/80 text-lg md:text-xl mb-8 leading-relaxed">
          Discover how travelers found authentic food experiences across India's
          most iconic cities.
        </p>
        <a
          href="#stories"
          className="inline-block bg-[#E23744] hover:bg-[#c72d38] text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
        >
          Explore Stories
        </a>
      </div>
    </section>
  );
}
