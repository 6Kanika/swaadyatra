const BASE = "https://www.swaadyatra.com";

/** WebSite schema for the homepage — enables Google Sitelinks Search Box */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SwaadYatra",
    url: BASE,
    description:
      "SwaadYatra helps travelers discover the best street food spots, famous local dishes, and authentic eateries near top tourist places across India.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE}/city/{search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export interface FoodSpotForSchema {
  shopName: string;
  dishName: string;
  description: string;
  fullAddress: string;
  mapLink: string;
  avgPrice: string;
}

/** ItemList + FoodEstablishment schema for city pages */
export function cityPageSchema(city: string, citySlug: string, foodSpots: FoodSpotForSchema[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Best Food Spots in ${city}`,
    description: `A curated list of the most famous street food spots and restaurants in ${city}, India.`,
    url: `${BASE}/city/${citySlug}`,
    numberOfItems: foodSpots.length,
    itemListElement: foodSpots.map((spot, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "FoodEstablishment",
        name: spot.shopName,
        description: spot.description,
        servesCuisine: spot.dishName,
        address: {
          "@type": "PostalAddress",
          streetAddress: spot.fullAddress,
          addressLocality: city,
          addressCountry: "IN",
        },
        url: spot.mapLink,
        priceRange: spot.avgPrice,
      },
    })),
  };
}
