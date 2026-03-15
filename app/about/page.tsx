import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import {
  MapPin,
  Utensils,
  Star,
  Clock,
  Search,
  Heart,
  Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About SwaadYatra – India's Food Travel Discovery Platform",
  description:
    "SwaadYatra helps travelers discover the best street food spots, famous dishes, and authentic local eateries in every Indian city. Explore food while travelling across India.",
  keywords:
    "food travel India, street food guide India, best food spots in Indian cities, exploring food while travelling, tourist food discovery platform, famous dishes in Indian cities",
  openGraph: {
    title: "About SwaadYatra – India's Food Travel Discovery Platform",
    description:
      "Discover authentic local food spots near India's top tourist destinations with SwaadYatra.",
    type: "website",
  },
};

const features = [
  {
    icon: Utensils,
    title: "Discover Famous Food Spots",
    desc: "Find the most celebrated eateries, street food stalls, and iconic dishes in every Indian city — curated by locals.",
  },
  {
    icon: MapPin,
    title: "Explore Food Near Tourist Locations",
    desc: "Every tourist destination has a food story. We map the best bites right next to the places you're already visiting.",
  },
  {
    icon: Star,
    title: "Real Local Food Experiences",
    desc: "No tourist traps. Our recommendations are rooted in authentic local culture and trusted by travellers across India.",
  },
  {
    icon: Clock,
    title: "Save Time While Travelling",
    desc: "Stop wasting hours searching for good food. SwaadYatra gives you instant, reliable food guides for every city.",
  },
];

const steps = [
  { icon: Search,   step: "01", title: "Search a City",        desc: "Enter any Indian city or tourist destination to get started." },
  { icon: Utensils, step: "02", title: "Explore Food Spots",   desc: "Browse famous dishes, street food, and top-rated local eateries." },
  { icon: MapPin,   step: "03", title: "Visit the Location",   desc: "Get directions and visit the spot with confidence." },
  { icon: Heart,    step: "04", title: "Enjoy Authentic Taste", desc: "Savour real, local flavours that define the city's food culture." },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ── 1. HERO ── */}
      <AboutHero />

      {/* ── 2. WHY SWAADYATRA ── */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              Why <span className="text-[#E23744]">SwaadYatra?</span>
            </h2>
            <p className="text-gray-500 text-xl leading-relaxed">
              Everything a food-loving traveller needs, in one smart platform.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:bg-[#E23744] hover:border-[#E23744] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                <div className="w-11 h-11 bg-[#E23744]/10 group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 p-2">
                  <Icon className="w-5 h-5 text-[#E23744] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-2 transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-base text-gray-500 group-hover:text-white/85 leading-relaxed transition-colors duration-300">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. HOW IT WORKS ── */}
      <section className="py-14 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              How It <span className="text-[#E23744]">Works</span>
            </h2>
            <p className="text-gray-500 text-xl leading-relaxed">
              Four simple steps to your next great food experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto relative">
            <div className="hidden lg:block absolute top-9 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#E23744]/20 via-[#E23744] to-[#E23744]/20 z-0" />

            {steps.map(({ icon: Icon, step, title, desc }) => (
              <div key={step} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-18 h-18 bg-white border-2 border-[#E23744] rounded-full flex items-center justify-center mb-4 shadow-md p-4">
                  <Icon className="w-7 h-7 text-[#E23744]" />
                </div>
                <span className="text-sm font-bold text-[#E23744] tracking-widest mb-1 uppercase">
                  Step {step}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
                <p className="text-base text-gray-500 leading-relaxed max-w-[200px]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. VISION — wave top, same style as hero ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #E23744 0%, #c72d38 50%, #a8232d 100%)" }}
      >
        {/* top-left highlight */}
        <div
          className="absolute top-0 left-0 w-[420px] h-[260px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 20% 20%, rgba(255,255,255,0.15) 0%, transparent 70%)",
          }}
        />
        {/* yellow accent glow */}
        <div
          className="absolute bottom-10 right-10 w-48 h-48 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(255,193,7,0.18) 0%, transparent 70%)",
            filter: "blur(24px)",
          }}
        />

        {/* wave TOP edge — flipped vertically */}
        <div className="absolute top-0 left-0 w-full leading-none" style={{ lineHeight: 0 }}>
          <svg
            viewBox="0 0 1440 80"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={{ width: "100%", height: "80px", display: "block", transform: "scaleY(-1)" }}
          >
            <path
              className="wave-path"
              d="M0,48 C180,0 360,80 540,48 C720,0 900,80 1080,48 C1260,0 1440,80 1440,48 L1440,80 L0,80 Z"
              fill="rgba(255,255,255,0.20)"
            />
            <path
              className="wave-path"
              d="M0,32 C180,80 360,-16 540,32 C720,80 900,-16 1080,32 C1260,80 1440,-16 1440,32 L1440,80 L0,80 Z"
              fill="#f9fafb"
              style={{ animationDelay: "0.6s" }}
            />
          </svg>
        </div>

        <div className="relative z-10 container mx-auto px-6 pt-20 pb-16 text-center max-w-4xl">
          <Globe className="w-12 h-12 mx-auto mb-5 text-white opacity-80" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">Our Vision</h2>
          <p className="text-xl md:text-2xl leading-relaxed text-white/90 mb-8">
            To become{" "}
            <strong style={{ color: "#FFC107" }}>
              India&apos;s most trusted food exploration platform for travelers
            </strong>{" "}
            — a place where food culture, tourism, and local discovery come together seamlessly.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { label: "Food Culture",    value: "Preserving India's rich culinary heritage city by city." },
              { label: "Tourism",         value: "Making every trip more memorable through authentic food." },
              { label: "Local Discovery", value: "Putting hidden gems and local favourites on the map." },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="bg-white/10 rounded-2xl p-5 border border-white/20 backdrop-blur-sm"
              >
                <h3 className="text-xl font-bold text-white mb-2">{label}</h3>
                <p className="text-base text-white/80 leading-relaxed">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. SEO CONTENT ── */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-7 text-center">
              Your Ultimate Guide to{" "}
              <span className="text-[#E23744]">Food Travel in India</span>
            </h2>
            <div className="text-gray-600 space-y-5 text-lg leading-relaxed">
              <p>
                India is one of the world&apos;s most diverse food destinations. From the spicy street
                food of Delhi&apos;s Chandni Chowk to the melt-in-your-mouth malaiyo of Varanasi, every
                city tells a unique culinary story. Yet for most travellers, finding authentic local
                food while exploring a new city remains a challenge. That&apos;s exactly the problem
                SwaadYatra was built to solve.
              </p>
              <p>
                As a dedicated <strong>food travel platform for India</strong>, SwaadYatra curates
                the best food spots in Indian cities — from iconic street food stalls to legendary
                local restaurants — and maps them alongside the tourist attractions you&apos;re already
                planning to visit. Whether you&apos;re looking for the best chaat in Jaipur, the most
                famous biryani in Hyderabad, or the top street food in Amritsar, SwaadYatra is your
                go-to food travel guide.
              </p>
              <p>
                Our platform is designed for food lovers who travel and travellers who love food.
                We believe that <strong>exploring food while travelling</strong> is one of the most
                enriching ways to understand a city&apos;s culture, history, and people. A bowl of
                Lucknow&apos;s nihari or a plate of Mumbai&apos;s vada pav isn&apos;t just a meal — it&apos;s a story
                waiting to be experienced.
              </p>
              <p>
                SwaadYatra&apos;s <strong>street food guide for India</strong> covers hundreds of cities
                and thousands of food spots, all verified and loved by locals. We don&apos;t just list
                restaurants — we guide you to the most authentic, most celebrated, and most
                memorable food experiences in every destination.
              </p>
              <p>
                Whether you&apos;re a solo backpacker, a family on vacation, or a food blogger on a
                culinary road trip, SwaadYatra helps you discover the{" "}
                <strong>best food spots in Indian cities</strong> without wasting time or settling
                for mediocre meals. Start your food journey today — because every city in India
                deserves to be tasted, not just seen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
