import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Terms of Service | SwaadYatra",
  description: "Read SwaadYatra's Terms of Service to understand the rules and guidelines for using our food discovery platform.",
};

export default function TermsOfService() {
  return (
    <LegalPage
      title="Terms of Service"
      lastUpdated="March 2026"
      sections={[
        {
          body: "Welcome to SwaadYatra. These Terms of Service ('Terms') govern your access to and use of the SwaadYatra website located at https://www.swaadyatra.com ('the Website', 'the Platform'). By accessing or using our website, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our website. SwaadYatra is operated from Greater Noida, India and is subject to the laws of India.",
        },
        {
          heading: "Nature of the Platform",
          body: "SwaadYatra is an independent food discovery and travel guide platform. We provide information about street food spots, local eateries, and food experiences near popular tourist destinations across India. We are not a food delivery service, restaurant booking platform, or affiliated with any food vendor listed on our website unless explicitly stated.",
          items: [
            "All food spot listings are for informational and discovery purposes only",
            "SwaadYatra does not take orders, process payments, or facilitate transactions between users and vendors",
            "Listings may be submitted by vendors themselves or curated by our editorial team",
            "We do not guarantee the availability, quality, or pricing of any food item or vendor listed",
          ],
        },
        {
          heading: "Eligibility",
          body: "By using this website, you represent and warrant that:",
          items: [
            "You are at least 13 years of age",
            "You have the legal capacity to enter into a binding agreement",
            "You will use the website only for lawful purposes and in accordance with these Terms",
            "You will not use the website in any way that violates applicable local, national, or international laws or regulations",
          ],
        },
        {
          heading: "Accuracy of Information",
          body: "We make every effort to ensure the information on SwaadYatra is accurate and up to date. However, we cannot guarantee the completeness, accuracy, or timeliness of any information on the platform.",
          items: [
            "Food spot details including prices, timings, menus, and locations may change without notice",
            "User-submitted content including stories and vendor listings reflects the views of the submitter and not SwaadYatra",
            "We strongly recommend verifying all details directly with the vendor before visiting",
            "SwaadYatra is not liable for any inconvenience, loss, or disappointment arising from inaccurate or outdated information",
          ],
        },
        {
          heading: "User-Submitted Content",
          body: "SwaadYatra allows users to submit content through our contact form, vendor listing form, and story submission form. By submitting content, you agree to the following:",
          items: [
            "You grant SwaadYatra a non-exclusive, royalty-free, perpetual licence to use, display, reproduce, and distribute your submitted content on the platform",
            "You confirm that you own or have the right to submit the content and that it does not infringe any third-party intellectual property rights",
            "You confirm that your submission is truthful, accurate, and not misleading",
            "You agree not to submit content that is defamatory, obscene, offensive, hateful, or otherwise objectionable",
            "You agree not to submit false vendor listings or fabricated food spot information",
            "SwaadYatra reserves the right to reject, edit, or remove any submitted content at its sole discretion without notice",
          ],
          subsections: [
            {
              heading: "Story Submissions",
              body: "Stories submitted through our Happy Stories page may be published on the website. By submitting a story, you consent to it being displayed publicly. We may lightly edit submissions for clarity, grammar, or length. We will not alter the meaning of your story without your consent.",
            },
            {
              heading: "Vendor Listings",
              body: "Vendor listing submissions are reviewed by our team before publication. Submission does not guarantee listing. We reserve the right to decline any listing that does not meet our quality standards or that we believe may be inaccurate or misleading.",
            },
          ],
        },
        {
          heading: "Intellectual Property",
          body: "All content on SwaadYatra — including but not limited to text, graphics, logos, icons, images, audio clips, and software — is the property of SwaadYatra or its content suppliers and is protected under applicable intellectual property laws.",
          items: [
            "You may not reproduce, duplicate, copy, sell, resell, or exploit any portion of the website without express written permission from SwaadYatra",
            "The SwaadYatra name, logo, and brand identity are proprietary and may not be used without prior written consent",
            "Third-party trademarks, brand names, and images displayed on the platform belong to their respective owners and are used for identification and informational purposes only",
            "If you believe any content on our platform infringes your intellectual property rights, please contact us immediately at jainkanika708@gmail.com",
          ],
        },
        {
          heading: "Third-Party Images and Content",
          body: "Some images displayed on SwaadYatra may be sourced from publicly available platforms, submitted by vendors, or obtained through our own photography. We make reasonable efforts to use only properly licensed or original images.",
          items: [
            "We do not claim ownership of third-party images or trademarks",
            "If you are the rightful owner of any image displayed on our platform and wish it to be removed or credited, please contact us at jainkanika708@gmail.com and we will act promptly",
            "We will remove or credit any disputed content within a reasonable timeframe upon receiving a valid request",
          ],
        },
        {
          heading: "Prohibited Activities",
          body: "You agree not to engage in any of the following activities while using SwaadYatra:",
          items: [
            "Attempting to gain unauthorised access to any part of the website or its servers",
            "Using automated tools, bots, or scrapers to extract data from the website without permission",
            "Submitting false, misleading, or fraudulent information through any form on the website",
            "Harassing, threatening, or impersonating any person or entity",
            "Uploading or transmitting viruses, malware, or any other malicious code",
            "Using the website for any commercial solicitation without prior written consent",
            "Attempting to interfere with the proper functioning of the website",
            "Circumventing any security or rate-limiting measures implemented on the platform",
          ],
        },
        {
          heading: "Limitation of Liability",
          body: "To the fullest extent permitted by applicable law, SwaadYatra, its owners, employees, and affiliates shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from:",
          items: [
            "Your use of or inability to use the website",
            "Any reliance placed on information provided on the website",
            "Any food-related illness, injury, or dissatisfaction arising from visiting a listed vendor",
            "Unauthorised access to or alteration of your data",
            "Any errors, omissions, or inaccuracies in the content",
            "Any third-party conduct or content linked to or from our website",
          ],
          subsections: [
            {
              heading: "Food Safety Disclaimer",
              body: "SwaadYatra does not inspect, certify, or endorse the hygiene, food safety standards, or quality of any vendor listed on the platform. Visitors consume food at their own risk. We strongly recommend exercising personal judgment regarding food safety when visiting any food establishment.",
            },
          ],
        },
        {
          heading: "Indemnification",
          body: "You agree to indemnify, defend, and hold harmless SwaadYatra and its owners, employees, and affiliates from and against any claims, liabilities, damages, losses, and expenses — including reasonable legal fees — arising out of or in any way connected with your access to or use of the website, your violation of these Terms, or your infringement of any third-party rights.",
        },
        {
          heading: "External Links",
          body: "Our website may contain links to third-party websites including Google Maps, social media platforms, and vendor pages. These links are provided for your convenience only.",
          items: [
            "SwaadYatra does not endorse, control, or take responsibility for the content of any linked third-party website",
            "Visiting linked websites is at your own risk",
            "We are not responsible for the availability, accuracy, or content of external sites",
          ],
        },
        {
          heading: "Modifications to the Website",
          body: "SwaadYatra reserves the right to modify, suspend, or discontinue any part of the website at any time without notice. We may also update, add, or remove content, features, or functionality at our sole discretion. We shall not be liable to you or any third party for any modification, suspension, or discontinuation of the service.",
        },
        {
          heading: "Changes to These Terms",
          body: "We reserve the right to update or revise these Terms of Service at any time. The updated Terms will be posted on this page with a revised 'Last Updated' date. Your continued use of the website after any changes constitutes your acceptance of the new Terms. We encourage you to review these Terms periodically.",
        },
        {
          heading: "Governing Law and Jurisdiction",
          body: "These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in Greater Noida, Uttar Pradesh, India. If any provision of these Terms is found to be unenforceable, the remaining provisions shall continue in full force and effect.",
        },
        {
          heading: "Contact Us",
          body: "If you have any questions about these Terms of Service, please contact us at: Email: jainkanika708@gmail.com | Website: https://www.swaadyatra.com/contact | Address: Greater Noida, India.",
        },
      ]}
    />
  );
}
