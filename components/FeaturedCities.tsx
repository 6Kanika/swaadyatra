"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FeaturedCities() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState<{ [key: number]: number }>({});

  const cities = [
    {
      name: "Delhi",
      images: [
        "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=500&q=80",
        "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=500&q=80",
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&q=80",
        "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&q=80",
      ],
    },
    {
      name: "Mumbai",
      images: [
        "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=500&q=80",
        "https://images.unsplash.com/photo-1630383249896-424e482df921?w=500&q=80",
        "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&q=80",
        "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&q=80",
      ],
    },
    {
      name: "Varanasi",
      images: [
        "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=500&q=80",
        "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&q=80",
        "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&q=80",
        "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500&q=80",
      ],
    },
    {
      name: "Jaipur",
      images: [
        "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=500&q=80",
        "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=500&q=80",
        "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&q=80",
        "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&q=80",
      ],
    },
    {
      name: "Agra",
      images: [
        "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=500&q=80",
        "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&q=80",
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&q=80",
        "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500&q=80",
      ],
    },
    {
      name: "Lucknow",
      images: [
        "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=500&q=80",
        "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=500&q=80",
        "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&q=80",
        "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&q=80",
      ],
    },
    {
      name: "Amritsar",
      images: [
        "https://images.unsplash.com/photo-1595658658481-d53d3f999875?w=500&q=80",
        "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&q=80",
        "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&q=80",
        "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500&q=80",
      ],
    },
    {
      name: "Hyderabad",
      images: [
        "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=500&q=80",
        "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&q=80",
        "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=500&q=80",
        "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&q=80",
      ],
    },
    {
      name: "Bangalore",
      images: [
        "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=500&q=80",
        "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500&q=80",
        "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&q=80",
        "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&q=80",
      ],
    },
    {
      name: "Kolkata",
      images: [
        "https://images.unsplash.com/photo-1558431382-27e303142255?w=500&q=80",
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&q=80",
        "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&q=80",
        "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500&q=80",
      ],
    },
  ];

  // Auto-rotate images for each card
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => {
        const newIndex = { ...prev };
        cities.forEach((city, cityIndex) => {
          const currentIndex = prev[cityIndex] || 0;
          newIndex[cityIndex] = (currentIndex + 1) % city.images.length;
        });
        return newIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [cities]);

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

  const handleCityClick = (cityName: string) => {
    // TODO: Navigate to city page
    console.log(`Navigating to ${cityName} page`);
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
            Featured Cities
          </h2>
          <p className="text-gray-600 text-lg">
            Explore food destinations across India
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Left Arrow - Desktop */}
          {showLeftArrow && (
            <button
              onClick={() => scroll("left")}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-[#E23744] hover:text-white rounded-full p-3 shadow-lg transition-all opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Cities Carousel */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {cities.map((city, cityIndex) => {
              const currentImageIndex = activeImageIndex[cityIndex] || 0;
              return (
                <div
                  key={cityIndex}
                  onClick={() => handleCityClick(city.name)}
                  className="flex-shrink-0 w-[200px] md:w-[240px] lg:w-[280px] cursor-pointer transform transition-transform duration-300 hover:scale-105"
                >
                  <div className="relative h-[280px] md:h-[320px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-gradient-to-br from-[#E23744] to-[#FFC107]">
                    {/* Card Image Carousel */}
                    <div className="relative h-full">
                      {city.images.map((image, imgIndex) => (
                        <div
                          key={imgIndex}
                          className={`absolute inset-0 transition-opacity duration-1000 ${
                            imgIndex === currentImageIndex ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${image})` }}
                          />
                        </div>
                      ))}

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                      {/* City Name */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-10">
                        <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
                          {city.name}
                        </h3>
                        {/* Image Indicators */}
                        <div className="flex gap-1.5">
                          {city.images.map((_, imgIndex) => (
                            <div
                              key={imgIndex}
                              className={`h-1.5 rounded-full transition-all ${
                                imgIndex === currentImageIndex
                                  ? "bg-[#FFC107] w-6"
                                  : "bg-white/50 w-1.5"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Arrow - Desktop */}
          {showRightArrow && (
            <button
              onClick={() => scroll("right")}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-[#E23744] hover:text-white rounded-full p-3 shadow-lg transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Mobile Scroll Hint */}
        <p className="text-center text-gray-500 text-sm mt-4 md:hidden">
          Swipe to explore more cities →
        </p>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
