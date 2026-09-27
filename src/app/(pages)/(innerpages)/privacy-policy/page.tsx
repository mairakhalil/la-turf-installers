import type { Metadata } from "next";

import { BreadCrumbsDataProps } from "@/app/types";
import PageHeading from "@/app/ui/PageHeading";

const BreadcrumbsData: BreadCrumbsDataProps = {
  backgroundImage: "/assets/img/bg/legal-pages-bg.webp",
  title: "Privacy Policy",
  breadcrumbs: [
    { label: "Home", link: "/", active: false },
    { label: "Privacy Policy", link: "", active: true },
  ],
};

export const metadata: Metadata = {
  title: "Privacy Policy | LA Turf Installers",

  description: "Read the LA Turf Installers privacy policy to learn how information submitted through our website is collected, used, protected and shared.",

  alternates: {
    canonical: "/privacy-policy",
  },

  openGraph: {
    title: "Privacy Policy | LA Turf Installers",
    description: "Learn how information submitted through the LA Turf Installers website is collected, used, protected and shared.",
    url: "/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <>
      <PageHeading data={BreadcrumbsData} />

      <div className="cs_height_70 cs_height_lg_50" />

      <div className="container">
        <p className="last-updated">Last Updated: September 21, 2026</p>

        <p>
          This Privacy Policy explains how <strong>LA Turf Installers</strong> collects, uses, and protects information provided when you visit our website, request information, or contact us about artificial turf services in the Los Angeles area.
        </p>

        <div className="cs_text_block_wrapper">
          <div className="cs_text_block">
            <h2 className="cs_fs_32">1. Information We Collect</h2>

            <ul className="cs_mp_0">
              <li>
                <strong>Contact Information:</strong> When you submit our contact form, we may collect your name, email address, phone number, ZIP Code, and message.
              </li>

              <li>
                <strong>Website Information:</strong> We may collect basic technical and usage information about how visitors access and interact with our website.
              </li>

              <li>
                <strong>Cookies:</strong> Our website or third-party services may use cookies and similar technologies for functionality, analytics, and performance.
              </li>
            </ul>
          </div>

          <div className="cs_text_block">
            <h2 className="cs_fs_32">2. How We Use Your Information</h2>

            <ul className="cs_mp_0">
              <li>To respond to questions and quote requests</li>
              <li>To coordinate inquiries with appropriate contractor partners</li>
              <li>To maintain and improve website functionality and performance</li>
            </ul>
          </div>

          <div className="cs_text_block">
            <h2 className="cs_fs_32">3. Information Sharing</h2>

            <p>We do not sell your personal information. Information may be shared when reasonably necessary:</p>

            <ul className="cs_mp_0">
              <li>To comply with applicable legal requirements</li>

              <li>With contractor partners or service providers involved in responding to your inquiry</li>
            </ul>
          </div>

          <div className="cs_text_block">
            <h2 className="cs_fs_32">4. Third-Party Services</h2>

            <p>Our website may use third-party services for forms, maps, analytics, or website functionality. These providers may process information according to their own privacy policies and terms.</p>
          </div>

          <div className="cs_text_block">
            <h2 className="cs_fs_32">5. Data Security</h2>

            <p>We use reasonable safeguards designed to protect information submitted through our website, although no method of internet transmission or electronic storage is completely secure.</p>
          </div>

          <div className="cs_text_block">
            <h2 className="cs_fs_32">6. Changes to This Policy</h2>

            <p>We may update this Privacy Policy periodically. Any revised version will be posted on this page with an updated Last Updated date.</p>
          </div>
        </div>
      </div>

      <div className="cs_height_70 cs_height_lg_50" />
    </>
  );
}
