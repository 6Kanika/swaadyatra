import { Compass, UtensilsCrossed, Clock, Heart } from "lucide-react";

const benefits = [
  {
    icon: Compass,
    title: "Discover Authentic Spots",
    desc: "Find hidden food gems near famous tourist landmarks that guidebooks miss.",
  },
  {
    icon: UtensilsCrossed,
    title: "Famous Local Dishes",
    desc: "Explore iconic regional dishes tied to the culture of each city.",
  },
  {
    icon: Clock,
    title: "Save Time While Traveling",
    desc: "No more wandering — get direct routes to the best food spots instantly.",
  },
  {
    icon: Heart,
    title: "Real Local Food Culture",
    desc: "Experience food the way locals do, not just what tourists are shown.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-[#FF9F1C] font-semibold uppercase tracking-widest text-sm">
            Why Travelers Love Us
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mt-2">
            How SwaadYatra Helps You
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#FFF8F0] hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-[#FF9F1C]/15 flex items-center justify-center mb-4">
                <Icon className="w-7 h-7 text-[#FF9F1C]" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
