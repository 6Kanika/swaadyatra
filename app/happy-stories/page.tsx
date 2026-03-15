import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/happy-stories/HeroSection";
import StoryCards from "@/components/happy-stories/StoryCards";
import EmailSubmit from "@/components/happy-stories/EmailSubmit";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Happy Stories | SwaadYatra",
  description:
    "Real food travel experiences from travelers who discovered authentic food spots across India's iconic cities.",
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
