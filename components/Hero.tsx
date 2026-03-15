"use client";

import { useState, useEffect } from "react";
import { Search, MapPin } from "lucide-react";
import { CldImage } from "next-cloudinary";

const heroSlides = [
  {
    title: "India's Most Trusted Food Discovery Guide",
    description:
      "Explore the most iconic food spots of every city while discovering the stories, flavors, and hidden gems loved by locals.",
    image: "hero_sec_nltkkk",
  },
  {
    title: "Taste Every City Like a Local",
    description:
      "Find authentic street food, legendary eateries, and must-try dishes while exploring the city's famous tourist attractions.",
    image: "Varansi_malaiyo_rybsus",
  },
  {
    title: "Your Smart Food Companion For Every Journey",
    description:
      "Travel, explore, and never miss a famous dish again. SwaadYatra helps you discover the best food spots near tourist destinations.",
    image: "tamatar_chat_ighe98",
  },
  {
    title: "Discover Cities Through Their Flavours",
    description:
      "From iconic street food to hidden culinary gems, explore India's cities through their most loved dishes.",
    image: "raj_kachori_tvfckb",
  },
  {
    title: "Every Journey Deserves a Great Meal",
    description:
      "Let SwaadYatra be your guide to the most celebrated food experiences across India's top travel destinations.",
    image: "jaipur_kachori_qjnzq2",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [textVisible, setTextVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade text out first, then switch slide, then fade back in
      setTextVisible(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        setTextVisible(true);
      }, 400);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setTextVisible(false);
    setTimeout(() => {
      setCurrentSlide(index);
      setTextVisible(true);
    }, 400);
  };

  return (
    <section className="relative h-[500px] md:h-[550px] lg:h-[600px] overflow-hidden">
      {/* Background Images */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <CldImage
            src={slide.image}
            alt={slide.title}
            width={1200}
            height={600}
            className="w-full h-full object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">

        {/* Animated Headline + Description */}
        <div
          className="transition-all duration-500"
          style={{
            opacity: textVisible ? 1 : 0,
            transform: textVisible ? "translateY(0px)" : "translateY(12px)",
          }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 max-w-5xl leading-tight">
            {heroSlides[currentSlide].title}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 md:mb-12 max-w-3xl mx-auto">
            {heroSlides[currentSlide].description}
          </p>
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-4xl bg-white rounded-full shadow-2xl p-2 flex flex-col md:flex-row gap-2">
          {/* Location Input */}
          <div className="flex items-center flex-1 px-4 py-3 md:py-0">
            <MapPin className="text-gray-400 w-5 h-5 mr-2 flex-shrink-0" />
            <input
              type="text"
              placeholder="Enter city or tourist place"
              className="w-full outline-none text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Divider - Hidden on mobile */}
          <div className="hidden md:block w-px bg-gray-300 my-2" />

          {/* Search Input */}
          <div className="flex items-center flex-1 px-4 py-3 md:py-0">
            <Search className="text-gray-400 w-5 h-5 mr-2 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search for food, cuisine, restaurant"
              className="w-full outline-none text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Search Button */}
          <button className="bg-[#E23744] hover:bg-[#c72d38] text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300 flex items-center justify-center gap-2">
            <Search className="w-5 h-5" />
            <span>Search</span>
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex gap-2 mt-8">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white w-8" : "bg-white/50 w-2"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
