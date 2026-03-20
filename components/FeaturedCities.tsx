"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const CLOUD = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const cl = (id: string) => `https://res.cloudinary.com/${CLOUD}/image/upload/f_auto,q_auto,w_500/${id}`;

const cities = [
  {
    name: "Delhi",
    images: [
      { src: cl("delhi_sitaram_1_gpvt99"), alt: "Chole Bhature – famous street food of Delhi" },
      { src: cl("delhi_sitaram_2_c4bsbq"), alt: "Street food stall in Delhi" },
      { src: cl("delhi_concept_1_cfs0jp"), alt: "Popular food spot in Delhi" },
      { src: cl("hero_sec_nltkkk"),         alt: "Iconic food of Delhi" },
    ],
  },
  {
    name: "Kashmir",
    images: [
      { src: cl("kash_mughal_1_opmi52"),   alt: "Dum Aloo at Mughal Darbar, Lal Chowk Srinagar" },
      { src: cl("kash_jj_1_plsquv"),       alt: "Wazwan Thali at JJ Foods, Srinagar" },
      { src: cl("kash_gurkha_1_d7dpqx"),   alt: "Kashmiri Kahwa on houseboat, Dal Lake" },
      { src: cl("kash_wani_1_dec4sk"),     alt: "Maggi and tea at Wani Restaurant, Sonmarg" },
    ],
  },
  {
    name: "Varanasi",
    images: [
      { src: cl("Varansi_malaiyo_rybsus"), alt: "Malaiyo – famous winter sweet of Varanasi" },
      { src: cl("amrit_sunny_1_sol0vt"),   alt: "Street food near Dashashwamedh Ghat, Varanasi" },
      { src: cl("tamatar_chat_ighe98"),     alt: "Tamatar chaat – iconic Varanasi street food" },
      { src: cl("raj_kachori_tvfckb"),      alt: "Kachori – popular snack in Varanasi" },
    ],
  },
  {
    name: "Jaipur",
    images: [
      { src: cl("JAI_natraj_1_jiwlts"),    alt: "Dal Baati Churma at Natraj Restaurant, Jaipur" },
      { src: cl("JAI_natraj_2_dbca5l"),    alt: "Rajasthani thali in Jaipur" },
      { src: cl("jai_LMB_1_nux86g"),       alt: "Famous food at LMB Restaurant, Jaipur" },
      { src: cl("jaipur_kachori_qjnzq2"),  alt: "Kachori – popular street food of Jaipur" },
    ],
  },
  {
    name: "Mumbai",
    images: [
      { src: cl("mum_amar_1_ptbfin"),      alt: "Pav Bhaji at Amar Pav Bhaji, Girgaon Chowpatty" },
      { src: cl("mum_rustom_1_v8gafk"),    alt: "Ice Cream Sandwich at K. Rustom & Co., Churchgate" },
      { src: cl("mum_pizzabay_1_itmi2c"),  alt: "Paneer Pizza Bread at Pizza By The Bay, Marine Drive" },
      { src: cl("mum_juhu_1_s8evqp"),      alt: "Butter Pav Bhaji at Juhu Beach" },
    ],
  },
  {
    name: "Pune",
    images: [
      { src: cl("Pune_vaishali1_urudvl"),      alt: "Mysore Masala Dosa at Vaishali, FC Road Pune" },
      { src: cl("Pune_darpan1_edcfuc"),        alt: "Misal Pav at Darpan Misal, Raviwar Peth Pune" },
      { src: cl("Pune_cafegoodluck1_pxnril"),  alt: "Bun Maska and Irani Chai at Cafe Goodluck, Deccan Pune" },
      { src: cl("Pune_sawai1_e7fq1h"),         alt: "Aamras Thali at Sawai Veg, Sinhagad Road Pune" },
    ],
  },
  {
    name: "Amritsar",
    images: [
      { src: cl("amrit_chungi_1_rxkj7x"),  alt: "Amritsari Kulcha at Chungi Kulcha Wala" },
      { src: cl("amrit_chungi_2_vziuma"),  alt: "Kulcha being prepared in Amritsar" },
      { src: cl("amrit_kesar_1_gesei5"),   alt: "Kesar Lassi – famous drink of Amritsar" },
      { src: cl("amrit_kesar_2_gc305z"),   alt: "Street food near Golden Temple, Amritsar" },
    ],
  },
  {
    name: "Puri",
    images: [
      { src: cl("puri_dalma_1_dkh8my"),      alt: "Odia Thali at Dalma Restaurant, Puri" },
      { src: cl("puri_ganguram_1_dluoec"),   alt: "Khaja at Ganguram Sweets near Jagannath Temple, Puri" },
      { src: cl("puri_gopal_1_wxqyr5"),      alt: "Chhena sweets at Govindo Sweet Stall, Puri Beach" },
      { src: cl("puri_nrusingha_1_nvhxnl"), alt: "Khaja prasad at Nrusingha Sweets, Grand Road Puri" },
    ],
  },
  {
    name: "Nainital",
    images: [
      { src: cl("nan_tamang_1_amqmoq"),      alt: "Momos at Tamang, Tibetan Market Nainital" },
      { src: cl("nan_naini_1_cbf1fh"),       alt: "Jalebi with Dahi at Naini Jalebi Bhandar, Nainital" },
      { src: cl("nan_aquarium_1_uq9ugx"),    alt: "Aquarium Island Cafe, Bhimtal Lake Nainital" },
      { src: cl("nan_ashok_1_x3fjib"),       alt: "Kumaoni Thali at Ashok Hotel, Nainital" },
    ],
  },
  {
    name: "Darjeeling",
    images: [
      { src: cl("Darjeeling_Glenarys1_bgsjzx"),    alt: "English Breakfast at Glenary's, Mall Road Darjeeling" },
      { src: cl("Darjeeling_Keventers1_emrdsq"),   alt: "Breakfast platter at Keventers, Chowrasta Darjeeling" },
      { src: cl("Darjeeling_Gangjong1_yxu7w9"),    alt: "Tibetan food at Gang Jong Restaurant, Darjeeling" },
      { src: cl("Darjleeng_TigerHill_dksqxk"),    alt: "Hot momos at Tiger Hill Sunrise Point, Darjeeling" },
    ],
  },
  {
    name: "Kolkata",
    images: [
      { src: cl("kol_flurys_1_oelctm"),  alt: "English Breakfast at Flurys, Park Street Kolkata" },
      { src: cl("kol_tiwari_1_ar17dv"),  alt: "Raj Kachori at Tiwari Brothers, Bara Bazar Kolkata" },
      { src: cl("kol_balarm_1_r1t3bw"),  alt: "Baked Rasgulla at Balaram Mullick, Bhawanipur Kolkata" },
      { src: cl("kol_kc_1_xwzdsx"),      alt: "Rasgulla at KC Das, Esplanade Kolkata" },
    ],
  },
  {
    name: "Matheran",
    images: [
      { src: cl("math_veranda_1_evuteb"),    alt: "Heritage dining at Verandah in the Forest, Matheran" },
      { src: cl("math_hakimi_1_o1256y"),     alt: "Chicken Kolhapuri at Hakimi Restaurant, Matheran Market" },
      { src: cl("math_charlotte_1_yksk0i"),  alt: "Local food near Charlotte Lake, Matheran" },
      { src: cl("math_corn_1_k6zyad"),       alt: "Roasted Bhutta at King George Point, Matheran" },
    ],
  },
  {
    name: "Mahabaleshwar",
    images: [
      { src: cl("maha_mapro_1_fa25i4"),      alt: "Strawberry with cream at Mapro Garden, Mahabaleshwar" },
      { src: cl("maha_bagicha_1_x5nh7x"),   alt: "Makai Patties at Bagicha Restaurant, Mahabaleshwar" },
      { src: cl("maha_pure_1_ck2y4v"),      alt: "Artisan cheese at Pure Gold Cheese Factory, Panchgani" },
      { src: cl("maha_desert_1_poqcuc"),    alt: "Chocolate dipped strawberries at Mahabaleshwar Market" },
    ],
  },
  {
    name: "Lucknow",
    images: [
      { src: cl("luc_raheem_1_lzveti"),      alt: "Kulcha Nahari at Raheem's, Chowk Old Lucknow" },
      { src: cl("luc_royal_2_fjcfbq"),       alt: "Basket Chaat at Royal Cafe, Hazratganj Lucknow" },
      { src: cl("luc_sharmatea_1_qxe3fk"),  alt: "Round Samosa and Chai at Sharma Ji Ki Chai, Lucknow" },
      { src: cl("luc_idrees_1_sgjbub"),      alt: "Mutton Biryani at Idrees Biryani, Aminabad Lucknow" },
    ],
  },
  {
    name: "Tirupati",
    images: [
      { src: cl("tir_ps4_1_wwxkd0"),      alt: "Andhra Veg Thali at PS4 Pure Veg Restaurant, Tirupati" },
      { src: cl("tir_zodiac_1_liu3fk"),    alt: "South Indian breakfast at Zodiac Restaurant, Tirupati" },
      { src: cl("tir_belgian_1_zsy2k9"),   alt: "Belgian Waffles at Belgian Waffle Mania, Tirupati" },
      { src: cl("tir_vrinda_1_l3u8lv"),    alt: "Vegetarian meals at Vrinda Restaurant, Tirupati" },
    ],
  },
];

const completedCities = ["delhi", "jaipur", "amritsar", "varanasi", "kashmir", "mumbai", "pune", "kolkata", "nainital", "puri", "darjeeling", "matheran", "mahabaleshwar", "lucknow", "tirupati"];

export default function FeaturedCities() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  // Single tick counter — each card derives its image index via modulo.
  // One state update = one re-render instead of 10.
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTick((t) => t + 1), 3000);
    return () => clearInterval(interval);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      const newScrollLeft =
        direction === "left"
          ? scrollRef.current.scrollLeft - scrollAmount
          : scrollRef.current.scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
            Featured Cities
          </h2>
          <p className="text-gray-600 text-lg">Explore food destinations across India</p>
        </div>

        <div className="relative group">
          {showLeftArrow && (
            <button
              onClick={() => scroll("left")}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-[#E23744] hover:text-white rounded-full p-3 shadow-lg transition-all opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth pb-4 no-scrollbar"
          >
            {cities.map((city, cityIndex) => {
              const currentImageIndex = tick % city.images.length;
              const isCompleted = completedCities.includes(city.name.toLowerCase());
              const cardContent = (
                <div className="relative h-[280px] md:h-[320px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-gradient-to-br from-[#E23744] to-[#FFC107]">
                  <div className="relative h-full">
                    {city.images.map((image, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                          imgIndex === currentImageIndex ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 200px, (max-width: 1024px) 240px, 280px"
                          loading={cityIndex === 0 && imgIndex === 0 ? "eager" : "lazy"}
                        />
                      </div>
                    ))}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-10">
                      <h3 className="text-white text-xl md:text-2xl font-bold mb-2">{city.name}</h3>
                      <div className="flex gap-1.5">
                        {city.images.map((_, imgIndex) => (
                          <div
                            key={imgIndex}
                            className={`h-1.5 rounded-full transition-all ${
                              imgIndex === currentImageIndex ? "bg-[#FFC107] w-6" : "bg-white/50 w-1.5"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
              return (
                <div
                  key={cityIndex}
                  className="flex-shrink-0 w-[75vw] max-w-[260px] md:w-[240px] lg:w-[280px] cursor-pointer transform transition-transform duration-300 hover:scale-105"
                >
                  {isCompleted ? (
                    <Link href={`/city/${city.name.toLowerCase()}`}>{cardContent}</Link>
                  ) : (
                    cardContent
                  )}
                </div>
              );
            })}
          </div>

          {showRightArrow && (
            <button
              onClick={() => scroll("right")}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-[#E23744] hover:text-white rounded-full p-3 shadow-lg transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        <p className="text-center text-gray-500 text-sm mt-4 md:hidden">
          Swipe to explore more cities →
        </p>
      </div>

      </section>
  );
}
