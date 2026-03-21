"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const CLOUD = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const cl = (id: string) =>
  `https://res.cloudinary.com/${CLOUD}/image/upload/f_auto,q_auto,w_800/${id}`;

const foodSpots = [
  { name: "Tamatar Chaat",       city: "Varanasi",    citySlug: "varanasi",    shop: "Kashi Chaat Bhandar",       image: cl("varan_tamatarchaat_w6pzg0"), spotIndex: 4  },
  { name: "Kashmiri Kahwa",      city: "Kashmir",     citySlug: "kashmir",     shop: "Char Chinar Shikara Stall", image: cl("Kashmiri-kahwa_akaanb"),    spotIndex: 8  },
  { name: "Desi Ghee Jalebi",    city: "Amritsar",    citySlug: "amritsar",    shop: "Gurdas Ram Jalebi Wala",    image: cl("amrit_gurdas_1_bb11ui"),    spotIndex: 14 },
  { name: "Kulcha Nahari",       city: "Lucknow",     citySlug: "lucknow",     shop: "Raheem's",                  image: cl("luc_raheem_1_lzveti"),       spotIndex: 10 },
  { name: "Baked Rasgulla",      city: "Kolkata",     citySlug: "kolkata",     shop: "Balaram Mullick",           image: cl("kol_balarm_1_r1t3bw"),      spotIndex: 10 },
  { name: "Momos",               city: "Darjeeling",  citySlug: "darjeeling",  shop: "Kathmandu Kitchen",         image: cl("Darjeeling_Kathmandu2_wtcmtd"), spotIndex: 10 },
];

export default function PopularFoodSpots() {
  const [expanded, setExpanded] = useState(false);

  // On mobile: show 3 initially, all 6 when expanded. On desktop: always show all 6.
  const visibleSpots = foodSpots; // grid handles visibility via CSS

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Popular Food Spots
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            Discover iconic dishes from India&apos;s most famous food destinations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {visibleSpots.map((food, index) => {
            const href = `/city/${food.citySlug}#spot-${food.spotIndex}`;
            const card = (
              <div
                className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${
                  // On mobile hide items beyond index 2 unless expanded
                  index >= 3 ? (expanded ? "block" : "hidden sm:block") : "block"
                }`}
              >
                <div className="relative h-[260px] sm:h-[300px] md:h-[280px] lg:h-[320px] overflow-hidden">
                  <Image
                    src={food.image}
                    alt={`${food.name} at ${food.shop}, ${food.city}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute top-4 right-4 bg-[#FFC107] text-gray-900 px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                    {food.city}
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{food.name}</h3>
                    <div className="flex items-center gap-2 text-white">
                      <svg className="w-5 h-5 text-[#FFC107] shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm md:text-base font-semibold">{food.shop}</span>
                    </div>
                  </div>
                </div>
              </div>
            );

            return (
              <div key={index} className={`group cursor-pointer ${index >= 3 ? (expanded ? "block" : "hidden sm:block") : "block"}`}>
                <Link href={href}>{card}</Link>
              </div>
            );
          })}
        </div>

        {/* Mobile "More" button — hidden on sm+ */}
        {!expanded && (
          <div className="flex justify-center mt-6 sm:hidden">
            <button
              onClick={() => setExpanded(true)}
              className="inline-flex items-center gap-2 bg-[#E23744] hover:bg-[#c72d38] text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-md"
            >
              More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
