export interface CityMeta {
  name: string;
  slug: string;
  count: number;
}

// Static city index — add new cities here as their JSON files are created.
// count = number of foodSpots in that city's JSON file.
export const cityIndex: CityMeta[] = [
  { name: "Amritsar", slug: "amritsar", count: 15 },
  { name: "Delhi",    slug: "delhi",    count: 17 },
  { name: "Jaipur",   slug: "jaipur",   count: 10 },
  { name: "Varanasi", slug: "varanasi", count: 19 },
  { name: "Kashmir",  slug: "kashmir",  count: 11 },
  { name: "Mumbai",   slug: "mumbai",   count: 18 },
  { name: "Pune",     slug: "pune",     count: 12 },
  { name: "Kolkata",  slug: "kolkata",  count: 14 },
  { name: "Nainital", slug: "nainital", count: 16 },
  { name: "Puri",       slug: "puri",       count: 10 },
  { name: "Darjeeling", slug: "darjeeling", count: 11 },
  { name: "Matheran",      slug: "matheran",      count: 10 },
  { name: "Mahabaleshwar", slug: "mahabaleshwar", count: 11 },
  { name: "Lucknow",       slug: "lucknow",       count: 14 },
  { name: "Tirupati",      slug: "tirupati",      count: 19 },
  { name: "Rameshwaram",   slug: "rameshwaram",   count: 14 },
  { name: "Goa",           slug: "goa",           count: 15 },
  { name: "Ooty",          slug: "ooty",          count: 13 },
  { name: "Chennai",       slug: "chennai",       count: 14 },
  { name: "Ahmedabad",     slug: "ahmedabad",     count: 11 },
];
