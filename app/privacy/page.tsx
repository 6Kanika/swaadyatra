import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Privacy Policy | SwaadYatra",
  description: "Read SwaadYatra's Privacy Policy to understand how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="March 2026"
      sections={[
        {
          body: "Welcome to SwaadYatra ('we', 'our', 'us'). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://www.swaadyatra.com. Please read this policy carefully. If you disagree with its terms, please discontinue use of the site. This policy is compliant with the Information Technology Act, 2000 and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 of India.",
        },
        {
          heading: "Information We Collect",
          body: "We collect information that you voluntarily provide to us when you use our contact forms, vendor listing forms, or story submission forms. The types of information we may collect include:",
          items: [
            "Personal identification information such as your name and email address",
            "Contact details such as phone number (for vendor listings only)",
            "Messages, stories, or descriptions you submit through our forms",
            "Device and browser information collected automatically via analytics tools",
            "IP address and approximate geographic location for security and rate-limiting purposes",
            "Pages visited, time spent on pages, and referral URLs via analytics",
          ],
        },
        {
          heading: "How We Use Your Information",
          body: "We use the information we collect for the following purposes:",
          items: [
            "To respond to your contact form inquiries and communicate with you",
            "To review and process vendor listing requests submitted through our platform",
            "To publish user-submitted food travel stories on our Happy Stories page (only with your consent via submission)",
            "To improve our website content, structure, and user experience",
            "To monitor and prevent fraudulent or abusive activity on our platform",
            "To comply with applicable legal obligations",
          ],
        },
        {
          heading: "Cookies and Tracking Technologies",
          body: "We may use cookies and similar tracking technologies to enhance your browsing experience. These include:",
          items: [
            "Essential cookies required for the website to function correctly",
            "Analytics cookies (such as Google Analytics) to understand how visitors interact with our site — these collect data anonymously",
            "Preference cookies to remember your settings",
          ],
          subsections: [
            {
              heading: "How to Control Cookies",
              body: "You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, some portions of our website may not function properly.",
            },
          ],
        },
        {
          heading: "Third-Party Services",
          body: "We use the following third-party services that may collect or process data on our behalf:",
          items: [
            "Resend (resend.com) — for sending email notifications from our contact, vendor, and story forms. Your submitted data is transmitted to Resend's servers to deliver emails.",
            "Cloudinary (cloudinary.com) — for hosting and serving food and city images displayed on our website.",
            "Vercel (vercel.com) — our website hosting provider, which may collect server logs including IP addresses.",
            "Google Analytics (if enabled) — for anonymous website traffic analysis.",
          ],
          subsections: [
            {
              heading: "Third-Party Privacy Policies",
              body: "These third-party services have their own privacy policies governing the use of your information. We encourage you to review their policies. We are not responsible for the privacy practices of these third parties.",
            },
          ],
        },
        {
          heading: "Data Sharing and Disclosure",
          body: "We do not sell, trade, rent, or otherwise transfer your personal information to outside parties except in the following circumstances:",
          items: [
            "With service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements",
            "When required by law, court order, or governmental authority",
            "To protect the rights, property, or safety of SwaadYatra, our users, or the public",
            "In connection with a merger, acquisition, or sale of all or a portion of our assets, in which case users will be notified",
          ],
        },
        {
          heading: "Data Retention",
          body: "We retain personal information submitted through our forms only as long as necessary to fulfil the purpose for which it was collected — typically to respond to your inquiry or process your submission. Email records are retained in our email inbox and are subject to our email provider's retention policies. We do not maintain a separate database of user personal information.",
        },
        {
          heading: "Data Security",
          body: "We implement reasonable technical and organisational security measures to protect your personal information from unauthorised access, alteration, disclosure, or destruction. These measures include:",
          items: [
            "HTTPS encryption for all data transmitted between your browser and our servers",
            "CSRF (Cross-Site Request Forgery) protection on all form submission endpoints",
            "Rate limiting on API endpoints to prevent abuse",
            "Magic-byte MIME validation for uploaded files to prevent malicious uploads",
            "Environment variable protection for all API keys and sensitive credentials",
          ],
          subsections: [
            {
              heading: "No Guarantee of Absolute Security",
              body: "While we strive to use commercially acceptable means to protect your personal information, no method of transmission over the Internet or method of electronic storage is 100% secure. We cannot guarantee absolute security.",
            },
          ],
        },
        {
          heading: "Children's Privacy",
          body: "SwaadYatra is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately at jainkanika708@gmail.com and we will take steps to delete such information.",
        },
        {
          heading: "Your Rights",
          body: "Depending on your location, you may have the following rights regarding your personal information:",
          items: [
            "The right to access the personal information we hold about you",
            "The right to request correction of inaccurate or incomplete information",
            "The right to request deletion of your personal information",
            "The right to withdraw consent where processing is based on consent",
            "The right to lodge a complaint with a relevant data protection authority",
          ],
          subsections: [
            {
              heading: "How to Exercise Your Rights",
              body: "To exercise any of these rights, please contact us at jainkanika708@gmail.com. We will respond to your request within 30 days.",
            },
          ],
        },
        {
          heading: "Links to Other Websites",
          body: "Our website may contain links to third-party websites, including restaurant pages, map links, and social media profiles. We have no control over the content or privacy practices of those sites and are not responsible for their privacy policies. We encourage you to review the privacy policy of every website you visit.",
        },
        {
          heading: "Changes to This Privacy Policy",
          body: "We reserve the right to update or modify this Privacy Policy at any time. Changes will be effective immediately upon posting to the website. The 'Last Updated' date at the top of this page will reflect the most recent revision. Your continued use of the website after any changes constitutes your acceptance of the updated policy. We encourage you to review this page periodically.",
        },
        {
          heading: "Contact Us",
          body: "If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at: Email: jainkanika708@gmail.com | Website: https://www.swaadyatra.com/contact | Address: Greater Noida, India. We will make every effort to resolve your concerns promptly.",
        },
      ]}
    />
  );
}
