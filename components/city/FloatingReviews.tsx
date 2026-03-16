"use client";

const reviews = [
  { name: "Priya Sharma", text: "Stumbled upon the most incredible street food stalls tucked in narrow lanes — every bite felt like discovering a hidden gem of the city." },
  { name: "Rahul Mehta", text: "The authentic flavors here are unlike anything I've tasted elsewhere. SwaadYatra guided me to spots I'd never have found on my own." },
  { name: "Ananya Iyer", text: "From spicy chaats to melt-in-your-mouth sweets, this food tour completely changed how I experience travel." },
  { name: "Vikram Nair", text: "Every food spot felt like a well-kept local secret. The street food near the tourist areas was absolutely phenomenal." },
  { name: "Sneha Kapoor", text: "I came for the sightseeing but stayed for the food. The local street food scene here is vibrant, affordable, and deeply authentic." },
  { name: "Arjun Bose", text: "Discovering hidden food spots through SwaadYatra was the highlight of my trip. The flavors were bold, fresh, and unforgettable." },
  { name: "Meera Pillai", text: "A paradise for food lovers! The local cuisine tells the story of the city better than any guidebook ever could." },
  { name: "Karan Joshi", text: "The street food culture here is alive and thriving. Every stall had a unique specialty that kept me coming back for more." },
  { name: "Divya Reddy", text: "Authentic, affordable, and absolutely delicious — this city's food scene deserves way more recognition among travelers." },
  { name: "Nikhil Gupta", text: "SwaadYatra helped me eat like a local from day one. The hidden food spots and iconic dishes made this trip truly memorable." },
];

const CARD_WIDTH = 320;
const GAP = 20;
const TOTAL = CARD_WIDTH + GAP;

export default function FloatingReviews() {
  return (
    <section aria-label="Traveler food reviews" className="py-12 md:py-16 bg-white border-t border-gray-100 overflow-hidden">
      <div className="container mx-auto max-w-5xl px-4 mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">What Travelers Are Saying</h2>
        <p className="text-gray-500 text-sm md:text-base">Real experiences from food explorers across India</p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div
          data-reviews-track
          className="flex gap-5 w-max"
          style={{ animation: `scrollReviews ${reviews.length * 4}s linear infinite` }}
          onMouseEnter={e => (e.currentTarget.style.animationPlayState = "paused")}
          onMouseLeave={e => (e.currentTarget.style.animationPlayState = "running")}
        >
          {[...reviews, ...reviews].map((r, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[300px] md:w-[320px] bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} className="w-4 h-4 text-[#E23744]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">"{r.text}"</p>
              <p className="text-sm font-semibold text-gray-900">{r.name}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        [data-reviews-track] {
          will-change: transform;
        }
        @keyframes scrollReviews {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${reviews.length * TOTAL}px); }
        }
      `}</style>
    </section>
  );
}
