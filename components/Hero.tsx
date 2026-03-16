"use client";

import { useState, useEffect } from "react";
import { CldImage } from "next-cloudinary";

const heroSlides = [
  {
    title: "India's Most Trusted Food Discovery Guide",
    description: "Explore the most iconic food spots of every city while discovering the stories, flavors, and hidden gems loved by locals.",
    image: "hero_sec_nltkkk",
  },
  {
    title: "Taste Every City Like a Local",
    description: "Find authentic street food, legendary eateries, and must-try dishes while exploring the city's famous tourist attractions.",
    image: "Varansi_malaiyo_rybsus",
  },
  {
    title: "Your Smart Food Companion For Every Journey",
    description: "Travel, explore, and never miss a famous dish again. SwaadYatra helps you discover the best food spots near tourist destinations.",
    image: "tamatar_chat_ighe98",
  },
  {
    title: "Discover Cities Through Their Flavours",
    description: "From iconic street food to hidden culinary gems, explore India's cities through their most loved dishes.",
    image: "raj_kachori_tvfckb",
  },
  {
    title: "Every Journey Deserves a Great Meal",
    description: "Let SwaadYatra be your guide to the most celebrated food experiences across India's top travel destinations.",
    image: "jaipur_kachori_qjnzq2",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [textVisible, setTextVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
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

  const nextSlide = (currentSlide + 1) % heroSlides.length;

  return (
    <section className="relative h-[340px] md:h-[380px] lg:h-[420px] overflow-hidden">
      <div className="absolute inset-0">
        <CldImage
          key={currentSlide}
          src={heroSlides[currentSlide].image}
          alt={heroSlides[currentSlide].title}
          width={1200}
          height={420}
          className="w-full h-full object-cover"
          priority
        />
      </div>

      <link
        rel="preload"
        as="image"
        href={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,q_auto,w_1200/${heroSlides[nextSlide].image}`}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
        <div
          className="transition-all duration-500"
          style={{
            opacity: textVisible ? 1 : 0,
            transform: textVisible ? "translateY(0px)" : "translateY(12px)",
          }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 max-w-4xl leading-tight">
            {heroSlides[currentSlide].title}
          </h1>
          <p className="text-base md:text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
            {heroSlides[currentSlide].description}
          </p>
        </div>

        {/* Slide Indicators */}
        <div className="flex gap-2 mt-4">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
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
