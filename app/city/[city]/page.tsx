import { notFound } from "next/navigation";
import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FoodSpotCard, { FoodSpot } from "@/components/city/FoodSpotCard";
import FloatingReviews from "@/components/city/FloatingReviews";
import { cityPageSchema } from "@/lib/jsonld";

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
  const ogImage = `https://res.cloudinary.com/dinzfa92w/image/upload/f_auto,q_auto,w_1200/${data.foodSpots[0]?.images[0]}`;
  return {
    title: `Best Food in ${city} | Famous Street Food & Restaurants Near Tourist Places – SwaadYatra`,
    description: `Discover the best food spots in ${city}. Explore famous street food, iconic restaurants, and must-try dishes near top tourist places in ${city}. Your complete ${city} food guide by SwaadYatra.`,
    keywords: `best food in ${city}, famous food spots ${city}, street food near tourist places ${city}, ${city} restaurants, ${city} food guide`,
    alternates: {
      canonical: `https://www.swaadyatra.com/city/${citySlug}`,
    },
    openGraph: {
      title: `Best Food in ${city} | Famous Street Food & Restaurants – SwaadYatra`,
      description: `Explore famous street food, iconic restaurants, and must-try dishes near top tourist places in ${city}.`,
      url: `https://www.swaadyatra.com/city/${citySlug}`,
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `Best food spots in ${city} – SwaadYatra`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Best Food in ${city} | Famous Street Food – SwaadYatra`,
      description: `Explore famous street food and must-try dishes near top tourist places in ${city}.`,
      images: [ogImage],
    },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cityPageSchema(city, citySlug, foodSpots)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.swaadyatra.com" },
              { "@type": "ListItem", position: 2, name: "Cities", item: "https://www.swaadyatra.com" },
              { "@type": "ListItem", position: 3, name: city, item: `https://www.swaadyatra.com/city/${citySlug}` },
            ],
          }),
        }}
      />
      <Navbar />
      <main>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="bg-white border-b border-gray-100">
          <div className="container mx-auto max-w-5xl px-4 py-2.5">
            <ol className="flex items-center gap-1.5 text-sm text-gray-500">
              <li><a href="/" className="hover:text-[#E23744] transition-colors">Home</a></li>
              <li className="select-none">›</li>
              <li><span className="hover:text-[#E23744] transition-colors">Cities</span></li>
              <li className="select-none">›</li>
              <li className="text-[#E23744] font-medium" aria-current="page">{city}</li>
            </ol>
          </div>
        </nav>

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

        <FloatingReviews />
      </main>
      <Footer />
    </>
  );
}
