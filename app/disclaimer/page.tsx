import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Disclaimer | SwaadYatra",
  description: "Read SwaadYatra's Disclaimer to understand the limitations of our food discovery platform and the nature of information provided.",
};

export default function Disclaimer() {
  return (
    <LegalPage
      title="Disclaimer"
      lastUpdated="March 2026"
      sections={[
        {
          body: "The information provided on SwaadYatra (https://www.swaadyatra.com) is for general informational and food discovery purposes only. By accessing and using this website, you acknowledge and agree to the terms of this Disclaimer. If you do not agree, please discontinue use of the website immediately.",
        },
        {
          heading: "General Information Only",
          body: "All content published on SwaadYatra — including food spot descriptions, vendor details, city guides, dish information, pricing, timings, and location data — is provided on an 'as is' and 'as available' basis for informational purposes only.",
          items: [
            "SwaadYatra does not guarantee the accuracy, completeness, or timeliness of any information on the platform",
            "Information about food vendors, including prices, menus, opening hours, and availability, is subject to change at any time without notice",
            "We strongly recommend verifying all details directly with the vendor or establishment before visiting",
            "SwaadYatra is not responsible for any inconvenience, financial loss, or disappointment resulting from reliance on information published on this platform",
          ],
        },
        {
          heading: "No Endorsement",
          body: "The listing of any food vendor, restaurant, street food stall, or eatery on SwaadYatra does not constitute an endorsement, recommendation, or guarantee of quality, hygiene, or service.",
          items: [
            "SwaadYatra does not inspect, audit, or certify any vendor listed on the platform",
            "Listings are based on publicly available information, user submissions, or editorial research",
            "The inclusion of a vendor on our platform does not imply any formal partnership, affiliation, or commercial relationship unless explicitly stated",
            "User opinions and stories published on the platform reflect the personal views of the submitter and not those of SwaadYatra",
          ],
        },
        {
          heading: "Food Safety and Health",
          body: "SwaadYatra is a discovery platform and does not assess or certify the food safety, hygiene standards, or health compliance of any vendor listed on the website.",
          items: [
            "Visitors consume food from listed vendors entirely at their own risk",
            "SwaadYatra is not liable for any food-related illness, allergic reaction, injury, or health issue arising from consuming food at any listed establishment",
            "Individuals with food allergies, dietary restrictions, or health conditions should exercise personal caution and verify ingredients directly with the vendor",
            "We do not provide medical or nutritional advice of any kind",
          ],
        },
        {
          heading: "Images and Visual Content",
          body: "Images displayed on SwaadYatra are used for illustrative and informational purposes to help users identify food spots and dishes.",
          items: [
            "Some images may be sourced from publicly available platforms, submitted by vendors or users, or captured by our team",
            "We do not claim ownership of third-party images displayed on this platform",
            "All third-party images remain the property of their respective owners",
            "We make reasonable efforts to use properly licensed or original images",
            "If you are the rightful owner of any image displayed on our platform and wish it to be removed, credited, or attributed differently, please contact us at jainkanika708@gmail.com and we will act promptly — typically within 48 hours",
            "Actual food presentation, portion sizes, and appearance at vendors may differ from images shown on the platform",
          ],
        },
        {
          heading: "Trademarks and Brand Names",
          body: "All trademarks, service marks, trade names, logos, and brand names of third parties mentioned or displayed on SwaadYatra belong to their respective owners.",
          items: [
            "Their appearance on our platform does not imply any affiliation with or endorsement by SwaadYatra",
            "SwaadYatra does not claim any rights over third-party trademarks or brand identities",
            "The SwaadYatra name, logo, and brand identity are proprietary to SwaadYatra and may not be used without prior written permission",
          ],
        },
        {
          heading: "External Links",
          body: "Our website may contain links to external websites including Google Maps, social media platforms, and vendor pages. These links are provided solely for the convenience of our users.",
          items: [
            "SwaadYatra does not control, endorse, or take responsibility for the content, accuracy, or availability of any linked external website",
            "Clicking on external links and visiting third-party websites is entirely at your own risk",
            "We are not responsible for any loss or damage that may arise from your use of external websites",
            "The presence of a link does not imply a recommendation or endorsement of the linked website",
          ],
        },
        {
          heading: "Affiliate and Commercial Relationships",
          body: "SwaadYatra may in the future participate in affiliate marketing programmes or sponsored content arrangements. Where this is the case:",
          items: [
            "Any sponsored content or paid listings will be clearly labelled as such",
            "Affiliate relationships will be disclosed in accordance with applicable advertising standards",
            "Our editorial opinions and recommendations are not influenced by commercial relationships",
            "At the time of this writing, SwaadYatra does not have any active affiliate or paid listing arrangements unless explicitly disclosed on the relevant page",
          ],
        },
        {
          heading: "User-Generated Content",
          body: "SwaadYatra may publish stories, reviews, and content submitted by users through our platform. Regarding such content:",
          items: [
            "User-submitted content reflects the personal opinions and experiences of the individual submitter",
            "SwaadYatra does not verify the accuracy of user-submitted stories or reviews",
            "Publication of user content does not constitute endorsement of the views expressed",
            "SwaadYatra reserves the right to remove any user-submitted content that is found to be false, defamatory, offensive, or in violation of our Terms of Service",
          ],
        },
        {
          heading: "Limitation of Liability",
          body: "To the maximum extent permitted by applicable law, SwaadYatra, its owners, team members, and affiliates expressly disclaim all liability for:",
          items: [
            "Any direct, indirect, incidental, consequential, or punitive damages arising from your use of the website",
            "Any errors, omissions, or inaccuracies in the content published on the platform",
            "Any loss of data, revenue, or profits arising from reliance on information on the website",
            "Any food-related harm, illness, or dissatisfaction arising from visiting a listed vendor",
            "Any technical issues, downtime, or interruptions to the website's availability",
          ],
        },
        {
          heading: "Changes to This Disclaimer",
          body: "SwaadYatra reserves the right to update or modify this Disclaimer at any time without prior notice. Changes will be effective immediately upon posting to the website. The 'Last Updated' date at the top of this page reflects the most recent revision. Your continued use of the website after any changes constitutes your acceptance of the updated Disclaimer.",
        },
        {
          heading: "Contact Us",
          body: "If you have any questions about this Disclaimer, wish to report a content concern, or wish to request removal of any image or content, please contact us at: Email: jainkanika708@gmail.com | Website: https://www.swaadyatra.com/contact | Address: Greater Noida, India. We aim to respond to all queries within 48 hours.",
        },
      ]}
    />
  );
}
