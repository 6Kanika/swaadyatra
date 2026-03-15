"use client";

export default function PopularFoodSpots() {
  const foodSpots = [
    {
      name: "Banarasi Kachori",
      city: "Varanasi",
      shop: "Kashi Chat Bhandar",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80",
    },
    {
      name: "Agra Petha",
      city: "Agra",
      shop: "Panchhi Petha Store",
      image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=800&q=80",
    },
    {
      name: "Amritsari Kulcha",
      city: "Amritsar",
      shop: "Kulcha Land",
      image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=800&q=80",
    },
    {
      name: "Hyderabadi Biryani",
      city: "Hyderabad",
      shop: "Paradise Biryani",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80",
    },
    {
      name: "Mumbai Vada Pav",
      city: "Mumbai",
      shop: "Ashok Vada Pav",
      image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=80",
    },
    {
      name: "Lucknow Tunday Kabab",
      city: "Lucknow",
      shop: "Tunday Kababi",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&q=80",
    },
    {
      name: "Delhi Chole Bhature",
      city: "Delhi",
      shop: "Sitaram Diwan Chand",
      image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=800&q=80",
    },
    {
      name: "Kolkata Kathi Roll",
      city: "Kolkata",
      shop: "Nizam's Restaurant",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80",
    },
    {
      name: "Bangalore Masala Dosa",
      city: "Bangalore",
      shop: "Vidyarthi Bhavan",
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=80",
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-10 md:mb-14 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Popular Food Spots
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover iconic dishes from India's most famous food destinations
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {foodSpots.map((food, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Food Image */}
                <div className="relative h-[320px] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                    style={{ backgroundImage: `url(${food.image})` }}
                  />
                  
                  {/* Hover Overlay with Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* City Badge */}
                  <div className="absolute top-4 right-4 bg-[#FFC107] text-gray-900 px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                    {food.city}
                  </div>

                  {/* Hover Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {food.name}
                    </h3>
                    <div className="flex items-center gap-2 text-white/90">
                      <svg
                        className="w-5 h-5 text-[#FFC107]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm md:text-base font-semibold">{food.shop}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
