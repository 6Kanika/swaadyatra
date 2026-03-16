import LegalPage from "@/components/LegalPage";

export const metadata = { title: "Disclaimer | SwaadYatra" };

export default function Disclaimer() {
  return (
    <LegalPage
      title="Disclaimer"
      lastUpdated="March 2026"
      sections={[
        {
          body: "Swaad Yatra is a food discovery platform designed to help users explore popular street food locations.",
        },
        {
          heading: "Trademarks & Ownership",
          body: "All trademarks, images, and brand names belong to their respective owners.",
        },
        {
          heading: "Third-Party Images",
          body: "Some images displayed on the website may be sourced from publicly available content such as Google Maps reviews.",
        },
        {
          heading: "Content Removal",
          body: "If you are the owner of any content and would like it removed or credited, please contact us.",
        },
        {
          heading: "No Ownership Claim",
          body: "We do not claim ownership of third-party images or trademarks displayed on this platform.",
        },
      ]}
    />
  );
}
