import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedCities from "@/components/FeaturedCities";
import PopularFoodSpots from "@/components/PopularFoodSpots";
import TravelFoodExperience from "@/components/TravelFoodExperience";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Store } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <FeaturedCities />
      <PopularFoodSpots />
      <TravelFoodExperience />

      {/* ── Own a Famous Food Spot? ── */}
      <section
        className="relative overflow-hidden py-14"
        style={{ background: "linear-gradient(135deg, #E23744 0%, #c72d38 50%, #a8232d 100%)" }}
      >
        <div
          className="absolute top-0 left-0 w-[380px] h-[200px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 20% 20%, rgba(255,255,255,0.12) 0%, transparent 70%)" }}
        />
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            <div className="flex-1">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-5 mx-auto md:mx-0">
                <Store className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Own a Famous Food Spot?
              </h2>
              <p className="text-white/85 text-lg leading-relaxed">
                If you run a popular food shop or restaurant, get featured on SwaadYatra and help
                thousands of travelers discover your food. Join India&apos;s growing food exploration platform.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link href="/contact">
                <span className="inline-flex items-center gap-2 bg-white text-[#E23744] hover:bg-gray-100 font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 text-base cursor-pointer">
                  <Store className="w-5 h-5" />
                  Apply For Listing
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
