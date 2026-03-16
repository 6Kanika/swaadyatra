import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactPageClient from "@/components/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact SwaadYatra – Suggest a Food Spot or List Your Restaurant",
  description:
    "Get in touch with SwaadYatra to suggest a famous food spot, list your restaurant or street food stall, or ask anything about food travel in India.",
  keywords:
    "contact SwaadYatra, list food spot India, suggest street food, food vendor listing India, food travel platform contact",
  alternates: {
    canonical: "https://www.swaadyatra.com/contact",
  },
  openGraph: {
    title: "Contact SwaadYatra – Suggest a Food Spot or List Your Restaurant",
    description:
      "Reach out to SwaadYatra to suggest a food spot, list your eatery, or ask about food travel across India.",
    url: "https://www.swaadyatra.com/contact",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dinzfa92w/image/upload/f_auto,q_auto,w_1200/hero_sec_nltkkk",
        width: 1200,
        height: 630,
        alt: "Contact SwaadYatra – India's Food Travel Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact SwaadYatra – Suggest a Food Spot or List Your Restaurant",
    description:
      "Reach out to SwaadYatra to suggest a food spot, list your eatery, or ask about food travel across India.",
    images: ["https://res.cloudinary.com/dinzfa92w/image/upload/f_auto,q_auto,w_1200/hero_sec_nltkkk"],
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ContactPageClient />
      <Footer />
    </main>
  );
}
