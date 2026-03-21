"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const CLOUD = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const cl = (id: string) =>
  `https://res.cloudinary.com/${CLOUD}/image/upload/f_auto,q_auto,w_600/${id}`;

// Each city: first image = city photo, rest = food spot images from JSON
const cities = [
  {
    name: "Delhi",
    slug: "delhi",
    images: [
      { src: cl("delhi_nrqbxy"),            alt: "Delhi city" },
      { src: cl("delhi_sitaram_1_gpvt99"),  alt: "Chole Bhature – SitaRam Diwan Chand" },
      { src: cl("delhi_lotan_1_c0f9sr"),    alt: "Chole Kulche – Lotan Ji" },
      { src: cl("delhi_concept_1_cfs0jp"),  alt: "Chicken Shawarma – Concept Shawarma" },
    ],
  },
  {
    name: "Mumbai",
    slug: "mumbai",
    images: [
      { src: cl("mumbai_khl4xi"),           alt: "Mumbai city" },
      { src: cl("mum_amar_1_ptbfin"),       alt: "Pav Bhaji – Amar Pav Bhaji" },
      { src: cl("mum_rustom_1_v8gafk"),     alt: "Ice Cream Sandwich – K. Rustom" },
      { src: cl("mum_juhu_1_s8evqp"),       alt: "Butter Pav Bhaji – Juhu Beach" },
    ],
  },
  {
    name: "Varanasi",
    slug: "varanasi",
    images: [
      { src: cl("varanasi_bjegtj"),                   alt: "Varanasi city" },
      { src: cl("Varansi_malaiyo_rybsus"),             alt: "Malaiyo – Shri Ji" },
      { src: cl("varan_blue_2_bdxs4f"),               alt: "Dry Fruit Lassi – Blue Lassi Shop" },
      { src: cl("varan_kashi_2_xxtj9v"),              alt: "Tamatar Chaat – Kashi Chaat Bhandar" },
    ],
  },
  {
    name: "Jaipur",
    slug: "jaipur",
    images: [
      { src: cl("jaipur_gqmw0x"),           alt: "Jaipur city" },
      { src: cl("JAI_natraj_1_jiwlts"),     alt: "Dal Baati Churma – Natraj Restaurant" },
      { src: cl("jai_LMB_1_nux86g"),        alt: "Paneer Ghewar – LMB" },
      { src: cl("jai_gulab_1_v0vmus"),      alt: "Kulhad Chai – Gulab Ji Chai Wale" },
    ],
  },
  {
    name: "Amritsar",
    slug: "amritsar",
    images: [
      { src: cl("amritsar_ypvahp"),         alt: "Amritsar city" },
      { src: cl("amrit_chungi_1_rxkj7x"),   alt: "Amritsari Kulcha – Chungi Kulcha Wala" },
      { src: cl("amrit_kesar_1_gesei5"),    alt: "Dal Makhani – Kesar Da Dhaba" },
      { src: cl("amrit_gurdas_1_bb11ui"),   alt: "Desi Ghee Jalebi – Gurdas Ram" },
    ],
  },
  {
    name: "Kashmir",
    slug: "kashmir",
    images: [
      { src: cl("kashmir_xlvar6"),          alt: "Kashmir city" },
      { src: cl("kash_mughal_1_opmi52"),    alt: "Dum Aloo – Mughal Darbar" },
      { src: cl("kash_jj_1_plsquv"),        alt: "Wazwan Thali – JJ Foods" },
      { src: cl("kash_gurkha_1_d7dpqx"),   alt: "Kashmiri Kahwa – Houseboat" },
    ],
  },
  {
    name: "Kolkata",
    slug: "kolkata",
    images: [
      { src: cl("kolkata_xjhvjl"),          alt: "Kolkata city" },
      { src: cl("kol_flurys_1_oelctm"),     alt: "English Breakfast – Flurys" },
      { src: cl("kol_tiwari_1_ar17dv"),     alt: "Raj Kachori – Tiwari Brothers" },
      { src: cl("kol_balarm_1_r1t3bw"),     alt: "Baked Rasgulla – Balaram Mullick" },
    ],
  },
];

const AUTOPLAY_MS = 3000;

export default function FeaturedCities() {
  const [imgIndexes, setImgIndexes] = useState<number[]>(cities.map(() => 0));
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setImgIndexes((prev) =>
        prev.map((idx, i) => (idx + 1) % cities[i].images.length)
      );
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
            Featured Cities
          </h2>
          <p className="text-gray-600 text-lg">Explore food destinations across India</p>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth pb-4 no-scrollbar"
          >
            {cities.map((city, ci) => (
              <Link
                key={city.slug}
                href={`/city/${city.slug}`}
                className="flex-shrink-0 w-[75vw] max-w-[260px] md:w-[240px] lg:w-[280px] cursor-pointer transform transition-transform duration-300 hover:scale-105"
              >
                <div className="relative h-[280px] md:h-[320px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  {/* All images stacked, fade between them */}
                  {city.images.map((img, ii) => (
                    <div
                      key={ii}
                      className={`absolute inset-0 transition-opacity duration-1000 ${
                        ii === imgIndexes[ci] ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 75vw, (max-width: 1024px) 240px, 280px"
                        priority={ci === 0 && ii === 0}
                      />
                    </div>
                  ))}

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* City name + dot indicators */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 z-10">
                    <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
                      {city.name}
                    </h3>
                    <div className="flex gap-1.5">
                      {city.images.map((_, ii) => (
                        <div
                          key={ii}
                          className={`h-1.5 rounded-full transition-all duration-500 ${
                            ii === imgIndexes[ci]
                              ? "bg-[#FFC107] w-6"
                              : "bg-white/50 w-1.5"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>

        {/* Mobile swipe hint */}
        <p className="text-center text-gray-500 text-sm mt-4 md:hidden">
          Swipe to explore more cities →
        </p>
      </div>
    </section>
  );
}
