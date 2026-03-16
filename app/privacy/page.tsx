import LegalPage from "@/components/LegalPage";

export const metadata = { title: "Privacy Policy | SwaadYatra" };

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="March 2026"
      sections={[
        {
          body: "At Swad Yatra, we respect your privacy.",
        },
        {
          heading: "Information We Collect",
          body: "We may collect basic information such as browser type, device information, and usage statistics to improve our website experience.",
        },
        {
          heading: "Analytics",
          body: "We may use analytics tools to understand how users interact with the website. These tools may collect anonymous information such as pages visited and time spent on the website.",
        },
        {
          heading: "Third Parties",
          body: "We do not sell or share personal information with third parties.",
        },
        {
          heading: "Third-Party Content",
          body: "Some images and information displayed on this website may be sourced from publicly available platforms such as Google Maps for informational purposes.",
        },
        {
          heading: "Content Removal",
          body: "If you believe any content belongs to you and should be removed, please contact us and we will promptly review your request.",
        },
        {
          heading: "Agreement",
          body: "By using this website, you agree to this privacy policy.",
        },
      ]}
    />
  );
}
