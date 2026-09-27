import { FooterDataProps } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import parser from "html-react-parser";

const data: FooterDataProps = {
  logo: "/assets/img/footer_logo.svg",
  newsletterText: " Stay updated with our latest <br /> projects and gardening tips.",
  menus: [
    {
      title: "SUPPORT",
      links: [
        { label: "FAQ", url: "/faq" },
        { label: "CONTACT", url: "/contact" },
        { label: "SERVICES", url: "/services" },
      ],
    },
    {
      title: "LINKS",
      links: [
        { label: "HOME", url: "/" },
        { label: "ABOUT US", url: "/about" },
        { label: "SERVICES AREAS", url: "/service-areas" },
      ],
    },
    {
      title: "SERVICES",
      links: [
        {
          label: "RESIDENTIAL TURF",
          url: "/services/residential-turf-installation",
        },
        {
          label: "PET-FRIENDLY TURF",
          url: "/services/pet-friendly-turf-installation",
        },

        {
          label: "COMMERCIAL TURF",
          url: "/services/commercial-turf-installation",
        },
      ],
    },
  ],

  copyright: "© 2026 LA TURF INSTALLERS. ALL RIGHTS RESERVED.",

  bottomLinks: [
    {
      label: "PRIVACY POLICY",
      url: "/privacy-policy",
    },
    {
      label: "TERMS &amp; CONDITIONS",
      url: "/terms-conditions",
    },
    {
      label: "ACCESSIBILITY STATEMENT",
      url: "/accessibility-statement",
    },
  ],
};

export default function Footer2() {
  return (
    <footer className={`cs_footer cs_style_1 cs_color_2`}>
      <div className="container">
        <div className="cs_footer_row">
          <div className="cs_footer_col">
            <div className="cs_footer_widget">
              <div className="cs_text_widget">
                <Image data-aos="zoom-in" src={data.logo} alt="Logo" width={210} height={80} className="wow zoomIn object-contain" />
                <p>{parser(data.newsletterText)}</p>
              </div>
            </div>
          </div>

          {data.menus.map((menu, i) => (
            <div className="cs_footer_col" key={i}>
              <div className="cs_footer_widget">
                <h4 className="cs_footer_widget_title">{menu.title}</h4>
                <ul className="cs_footer_widget_menu cs_mp_0">
                  {menu.links.map((link, index) => (
                    <li key={index}>
                      <Link href={link.url}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="cs_bottom_footer">
          <div className="cs_bottom_footer_left ">
            <div className="cs_copyright" dangerouslySetInnerHTML={{ __html: data.copyright }}></div>
          </div>
          <div className="cs_bottom_footer_right">
            <ul className="cs_footer_links cs_mp_0">
              {data.bottomLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.url}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
