import LegalPage from "@/components/LegalPage";

export const metadata = { title: "Terms of Service | SwaadYatra" };

export default function TermsOfService() {
  return (
    <LegalPage
      title="Terms of Service"
      lastUpdated="March 2026"
      sections={[
        {
          body: "By accessing and using Swad Yatra, you agree to the following terms.",
        },
        {
          heading: "Informational Purpose",
          body: "The content on this website is provided for informational purposes only. We aim to provide accurate information about food vendors, locations, and dishes, but we do not guarantee the completeness or accuracy of all information.",
        },
        {
          heading: "Verify Details",
          body: "Users should verify details such as prices, availability, and opening hours directly with the vendor.",
        },
        {
          heading: "Images",
          body: "Images displayed on the platform may belong to their respective owners and are used for reference and discovery purposes.",
        },
        {
          heading: "Liability",
          body: "Swad Yatra is not responsible for any decisions made based on information provided on this website.",
        },
        {
          heading: "Changes to Terms",
          body: "We reserve the right to update or modify content and policies at any time without prior notice.",
        },
      ]}
    />
  );
}
