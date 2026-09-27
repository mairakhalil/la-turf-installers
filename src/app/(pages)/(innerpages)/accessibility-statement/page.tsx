import type { Metadata } from "next";

import { BreadCrumbsDataProps } from "@/app/types";
import PageHeading from "@/app/ui/PageHeading";

const BreadcrumbsData: BreadCrumbsDataProps = {
  backgroundImage: "/assets/img/bg/legal-pages-bg.webp",
  title: "Accessibility Statement",
  breadcrumbs: [
    { label: "Home", link: "/", active: false },
    { label: "Accessibility Statement", link: "", active: true },
  ],
};

export const metadata: Metadata = {
  title: "Accessibility Statement | LA Turf Installers",

  description: "Read the LA Turf Installers accessibility statement and learn about our efforts to provide an accessible website experience for visitors.",

  alternates: {
    canonical: "/accessibility-statement",
  },

  openGraph: {
    title: "Accessibility Statement | LA Turf Installers",
    description: "Learn about our efforts to make the LA Turf Installers website accessible and usable for visitors in the Los Angeles area.",
    url: "/accessibility-statement",
  },
};

export default function AccessibilityStatement() {
  return (
    <>
      <PageHeading data={BreadcrumbsData} />

      <div className="cs_height_70 cs_height_lg_50" />

      <div className="container">
        <p className="last-updated">Last Updated: September 21, 2026</p>

        <p>
          <strong>LA Turf Installers</strong> is committed to providing an accessible and user-friendly website experience for all visitors, including individuals with disabilities. We continue to review our website and look for practical ways to improve accessibility and usability.
        </p>

        <div className="cs_text_block_wrapper">
          <div className="cs_text_block">
            <h2 className="cs_fs_32">1. Our Accessibility Commitment</h2>

            <p>We aim to make our website content, navigation, and features easier to access and understand for a wide range of visitors. Our accessibility efforts may include:</p>

            <ul className="cs_mp_0">
              <li>Providing clear and consistent website navigation</li>
              <li>Using readable text and organized page structures</li>
              <li>Providing descriptive text for meaningful website images</li>
              <li>Supporting keyboard-friendly website navigation where possible</li>
            </ul>
          </div>

          <div className="cs_text_block">
            <h2 className="cs_fs_32">2. Accessibility Standards</h2>

            <p>We work to improve the accessibility of this website with recognized web accessibility practices in mind, including guidance provided by the Web Content Accessibility Guidelines (WCAG).</p>

            <p>Accessibility is an ongoing process, and website content, features, technologies, and standards may change over time.</p>
          </div>

          <div className="cs_text_block">
            <h2 className="cs_fs_32">3. Website Accessibility Features</h2>

            <p>We consider accessibility when reviewing and maintaining website content and functionality. These efforts may include:</p>

            <ul className="cs_mp_0">
              <li>Descriptive alternative text for relevant images</li>
              <li>Logical heading structures for page content</li>
              <li>Descriptive links and navigation labels</li>
              <li>Readable text with appropriate visual contrast</li>
              <li>Keyboard-accessible interactive elements where supported</li>
            </ul>
          </div>

          <div className="cs_text_block">
            <h2 className="cs_fs_32">4. Third-Party Content</h2>

            <p>Our website may contain links, tools, maps, or other content provided by third parties. While we aim to provide an accessible website experience, we may not control the accessibility features or practices of third-party websites and services.</p>

            <p>Visitors who follow third-party links should review the accessibility information provided by those organizations when available.</p>
          </div>

          <div className="cs_text_block">
            <h2 className="cs_fs_32">5. Ongoing Improvements</h2>

            <p>We periodically review website content and functionality and may make updates intended to improve accessibility, usability, and compatibility with commonly used browsers and assistive technologies.</p>

            <p>Because web technologies continue to evolve, some areas of the website may require additional improvements over time.</p>
          </div>

          <div className="cs_text_block">
            <h2 className="cs_fs_32">6. Accessibility Assistance</h2>

            <p>If you experience difficulty accessing information or using a feature on this website, please contact us. When possible, describe the page, content, or feature you were trying to access so we can better understand the issue.</p>

            <p>We will make reasonable efforts to provide the requested information through an alternative method when appropriate.</p>
          </div>

          <div className="cs_text_block">
            <h2 className="cs_fs_32">7. Feedback</h2>

            <p>We welcome feedback about the accessibility and usability of this website. If you encounter an accessibility barrier or have suggestions for improving your experience, please let us know.</p>

            <p>Accessibility feedback helps us identify areas that may benefit from further review or improvement.</p>
          </div>

          <div className="cs_text_block">
            <h2 className="cs_fs_32">8. Contact Us</h2>

            <p>If you have questions, feedback, or need assistance accessing information on this website, please contact us through our website contact page.</p>
          </div>
        </div>
      </div>

      <div className="cs_height_70 cs_height_lg_50" />
    </>
  );
}
