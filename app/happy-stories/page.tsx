import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/happy-stories/HeroSection";
import StoryCards from "@/components/happy-stories/StoryCards";
import EmailSubmit from "@/components/happy-stories/EmailSubmit";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Food Travel Stories from India – Happy Stories | SwaadYatra",
  description:
    "Read real food travel experiences from travelers who discovered authentic street food, hidden food gems, and iconic local dishes across India's most famous cities.",
  keywords:
    "food travel stories India, real food journeys India, street food experiences, authentic food travel India, food discovery stories, traveler food experiences India",
  alternates: {
    canonical: "https://www.swaadyatra.com/happy-stories",
  },
  openGraph: {
    title: "Real Food Travel Stories from India – Happy Stories | SwaadYatra",
    description:
      "Real food journeys from travelers who discovered authentic street food and iconic local dishes across India.",
    url: "https://www.swaadyatra.com/happy-stories",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dinzfa92w/image/upload/f_auto,q_auto,w_1200/amrit_kesar_1_gesei5",
        width: 1200,
        height: 630,
        alt: "Real food travel stories from India – SwaadYatra Happy Stories",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Food Travel Stories from India – Happy Stories | SwaadYatra",
    description:
      "Real food journeys from travelers who discovered authentic street food and iconic local dishes across India.",
    images: ["https://res.cloudinary.com/dinzfa92w/image/upload/f_auto,q_auto,w_1200/amrit_kesar_1_gesei5"],
  },
};

export default function HappyStoriesPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <Navbar />
      <main>
        <HeroSection />
        <StoryCards />
        <EmailSubmit />
      </main>
      <Footer />
    </div>
  );
}
