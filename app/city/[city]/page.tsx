import { notFound } from "next/navigation";
import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FoodSpotCard, { FoodSpot } from "@/components/city/FoodSpotCard";

interface CityData {
  city: string;
  foodSpots: FoodSpot[];
}

function getCityData(citySlug: string): CityData | null {
  try {
    const filePath = path.join(process.cwd(), "public", "city_pages_json", `${citySlug}.json`);
    const raw = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(raw) as CityData;
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: citySlug } = await params;
  const data = getCityData(citySlug);
  if (!data) return { title: "City Not Found" };

  const { city } = data;
  return {
    title: `Best Food in ${city} | Famous Street Food & Restaurants Near Tourist Places – SwaadYatra`,
    description: `Discover the best food spots in ${city}. Explore famous street food, iconic restaurants, and must-try dishes near top tourist places in ${city}. Your complete ${city} food guide by SwaadYatra.`,
    keywords: `best food in ${city}, famous food spots ${city}, street food near tourist places ${city}, ${city} restaurants, ${city} food guide`,
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: citySlug } = await params;
  const data = getCityData(citySlug);
  if (!data) notFound();

  const { city, foodSpots } = data;

  return (
    <>
      <Navbar />
      <main>
        {/* Hero heading section */}
        <header className="bg-gradient-to-br from-[#E23744] to-[#c72d38] text-white py-12 md:py-16 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
              Best Food in {city}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-2">
              Discover the most famous food spots, iconic street food, and must-try dishes near top tourist places in {city}.
            </p>
            <p className="text-base md:text-lg text-white/80">
              Your ultimate {city} food guide — from legendary chai stalls to authentic Rajasthani thalis, curated for every traveler.
            </p>
          </div>
        </header>

        {/* Food spots */}
        <section
          aria-label={`Food spots in ${city}`}
          className="container mx-auto max-w-5xl px-4 py-10 md:py-14 flex flex-col gap-8"
        >
          {foodSpots.map((spot, i) => (
            <FoodSpotCard key={spot.shopName} spot={spot} index={i} />
          ))}
        </section>

        {/* City food review / SEO section */}
        <section
          aria-label={`${city} food culture`}
          className="bg-orange-50 border-t border-orange-100 py-12 md:py-16 px-4"
        >
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Explore the Food Culture of {city}
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              {city} is a city where every lane tells a culinary story. The best food in {city} is deeply rooted in its heritage, culture, and the warmth of its people. Whether you are a street food lover hunting for famous food spots near tourist places or a traveler seeking authentic local dining experiences, {city} never disappoints.
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              The street food near tourist places in {city} offers an unmatched blend of taste and tradition. Every spot listed above has been curated to help you experience the true soul of {city} through its food. SwaadYatra brings you the most trusted, traveler-verified food guide so your journey is as delicious as it is memorable.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
