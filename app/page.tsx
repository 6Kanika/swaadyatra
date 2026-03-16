import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedCities from "@/components/FeaturedCities";
import PopularFoodSpots from "@/components/PopularFoodSpots";
import TravelFoodExperience from "@/components/TravelFoodExperience";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Store } from "lucide-react";
import { websiteSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "SwaadYatra – Discover the Best Street Food in Every Indian City",
  description:
    "Explore the most famous street food spots, iconic local dishes, and authentic eateries near top tourist places across India. Your ultimate food travel guide by SwaadYatra.",
  keywords:
    "best street food India, food travel guide, famous food spots India, street food near tourist places, authentic Indian food, food discovery India, best food in Delhi, best food in Jaipur, best food in Amritsar",
  alternates: {
    canonical: "https://www.swaadyatra.com",
  },
  openGraph: {
    title: "SwaadYatra – Discover the Best Street Food in Every Indian City",
    description:
      "Explore famous street food, iconic local dishes, and authentic eateries near top tourist places across India.",
    url: "https://www.swaadyatra.com",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dinzfa92w/image/upload/f_auto,q_auto,w_1200/hero_sec_nltkkk",
        width: 1200,
        height: 630,
        alt: "SwaadYatra – India's Best Street Food Discovery Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SwaadYatra – Discover the Best Street Food in Every Indian City",
    description:
      "Explore famous street food, iconic local dishes, and authentic eateries near top tourist places across India.",
    images: ["https://res.cloudinary.com/dinzfa92w/image/upload/f_auto,q_auto,w_1200/hero_sec_nltkkk"],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
      />
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
              <Link href="/contact#vendor-listing">
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
