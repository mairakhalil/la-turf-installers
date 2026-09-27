import type { Metadata } from "next";

import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

import { BreadCrumbsDataProps, CTADataProps } from "@/app/types";

import CtaSection from "@/app/ui/CTASection/CtaSection";
import Footer1 from "@/app/ui/Footer/Footer1";
import Header from "@/app/ui/Header/Header";
import PageHeading from "@/app/ui/PageHeading";

const BreadcrumbsData: BreadCrumbsDataProps = {
  backgroundImage: "/assets/img/bg/contact-header-bg.webp",
  title: "SERVICE AREAS",
  breadcrumbs: [
    { label: "Home", link: "/", active: false },
    { label: "Services", link: "/services", active: false },
    { label: "Service Areas", link: "", active: true },
  ],
};

const serviceAreas = [
  {
    city: "Los Angeles",
    description: "Artificial turf solutions for residential yards, pet spaces, putting greens, commercial properties, and outdoor areas.",
    link: "/service-areas/los-angeles",
  },
  {
    city: "Beverly Hills",
    description: "Artificial turf options for landscaped homes, private outdoor areas, putting greens, patios, and commercial properties.",
    link: "/service-areas/beverly-hills",
  },
  {
    city: "Santa Monica",
    description: "Turf solutions for residential yards, pet areas, patios, rooftop spaces, and commercial outdoor environments.",
    link: "/service-areas/santa-monica",
  },
  {
    city: "West Hollywood",
    description: "Artificial turf for compact yards, patios, rooftops, pet spaces, and frequently used outdoor areas.",
    link: "/service-areas/west-hollywood",
  },
  {
    city: "Culver City",
    description: "Turf options for homes, businesses, pet-friendly areas, putting greens, and practical outdoor living spaces.",
    link: "/service-areas/culver-city",
  },
  {
    city: "Burbank",
    description: "Artificial turf solutions for residential lawns, backyard spaces, pet areas, and commercial properties.",
    link: "/service-areas/burbank",
  },
  {
    city: "Glendale",
    description: "Turf options for front yards, backyards, putting greens, pet spaces, playgrounds, and commercial landscapes.",
    link: "/service-areas/glendale",
  },
  {
    city: "Pasadena",
    description: "Artificial grass solutions for residential landscapes, outdoor living areas, businesses, and recreational spaces.",
    link: "/service-areas/pasadena",
  },
  {
    city: "Calabasas",
    description: "Turf solutions for spacious yards, pet areas, custom putting greens, patios, and residential outdoor living.",
    link: "/service-areas/calabasas",
  },
  {
    city: "Malibu",
    description: "Artificial turf options for residential landscapes, terraces, patios, rooftops, and distinctive outdoor spaces.",
    link: "/service-areas/malibu",
  },
  {
    city: "Sherman Oaks",
    description: "Artificial turf for front yards, backyards, pet areas, putting greens, and outdoor entertainment spaces.",
    link: "/service-areas/sherman-oaks",
  },
  {
    city: "Encino",
    description: "Turf solutions for residential lawns, pet spaces, backyard putting greens, patios, and recreation areas.",
    link: "/service-areas/encino",
  },
  {
    city: "Studio City",
    description: "Artificial turf options for yards, patios, pet spaces, and compact residential outdoor environments.",
    link: "/service-areas/studio-city",
  },
  {
    city: "Woodland Hills",
    description: "Artificial grass solutions for yards, pet areas, putting greens, and outdoor entertainment spaces.",
    link: "/service-areas/woodland-hills",
  },
  {
    city: "Tarzana",
    description: "Turf options for home landscapes, backyard spaces, pets, putting greens, and outdoor recreation areas.",
    link: "/service-areas/tarzana",
  },
  {
    city: "Northridge",
    description: "Artificial turf solutions for residential lawns, playgrounds, pet areas, and commercial properties.",
    link: "/service-areas/northridge",
  },

  /* Additional Service Areas */

  {
    city: "Van Nuys",
    description: "Artificial turf solutions for residential yards, pet areas, playgrounds, putting greens, and commercial outdoor spaces.",
    link: "/service-areas/van-nuys",
  },
  {
    city: "North Hollywood",
    description: "Turf options for residential lawns, compact yards, pet spaces, patios, recreation areas, and commercial properties.",
    link: "/service-areas/north-hollywood",
  },
  {
    city: "Chatsworth",
    description: "Artificial turf for larger yards, pet areas, putting greens, recreation spaces, and residential outdoor landscapes.",
    link: "/service-areas/chatsworth",
  },
  {
    city: "Granada Hills",
    description: "Turf solutions for front yards, backyards, pet-friendly spaces, putting greens, and outdoor living areas.",
    link: "/service-areas/granada-hills",
  },
  {
    city: "Reseda",
    description: "Artificial grass options for residential lawns, backyard spaces, pets, playgrounds, and practical outdoor areas.",
    link: "/service-areas/reseda",
  },
  {
    city: "Pacific Palisades",
    description: "Artificial turf options for residential landscapes, outdoor living areas, patios, pet spaces, and putting greens.",
    link: "/service-areas/pacific-palisades",
  },
  {
    city: "Marina del Rey",
    description: "Turf solutions for patios, rooftop areas, compact landscapes, pet spaces, and residential outdoor environments.",
    link: "/service-areas/marina-del-rey",
  },
  {
    city: "Manhattan Beach",
    description: "Artificial turf options for residential yards, patios, pet areas, putting greens, and outdoor entertainment spaces.",
    link: "/service-areas/manhattan-beach",
  },
  {
    city: "Redondo Beach",
    description: "Turf solutions for home landscapes, pet-friendly areas, patios, putting greens, and commercial outdoor spaces.",
    link: "/service-areas/redondo-beach",
  },
  {
    city: "Torrance",
    description: "Artificial turf solutions for residential lawns, pet areas, playgrounds, commercial properties, and recreation spaces.",
    link: "/service-areas/torrance",
  },
];

const ctaData: CTADataProps = {
  backgroundImage: "/assets/img/services/services-cta-img.webp",
  title: "PLANNING AN ARTIFICIAL TURF PROJECT?",
  buttonText: "Request a Free Quote",
  buttonUrl: "/contact",
};

export const metadata: Metadata = {
  title: "Artificial Turf Service Areas Los Angeles | LA Turf Installers",
  description: "Explore artificial turf service areas across Los Angeles for residential lawns, pet turf, putting greens, commercial spaces, playgrounds, rooftops and patios.",
  alternates: {
    canonical: "/service-areas",
  },
  openGraph: {
    title: "Artificial Turf Service Areas Los Angeles | LA Turf Installers",
    description: "Explore artificial turf services for homes, businesses and outdoor spaces across Los Angeles and nearby communities.",
    url: "/service-areas",
  },
};

export default function ServiceAreasPage() {
  return (
    <>
      <Header />

      <PageHeading data={BreadcrumbsData} />

      <main>
        <section id="service-areas" className="cs_service_areas" aria-labelledby="service-areas-title">
          <div className="cs_height_120 cs_height_lg_70" />

          <div className="container">
            {/* Section Heading */}
            <div className="row justify-content-center">
              <div className="col-xl-9 col-lg-10">
                <div className="cs_service_area_heading text-center">
                  <p className="cs_service_area_subtitle cs_bold text-uppercase mb-0">Areas We Serve</p>

                  <div className="cs_height_14" />

                  <h2 id="service-areas-title" className="cs_service_area_title cs_heading_color mb-0">
                    ARTIFICIAL TURF SERVICE AREAS ACROSS LA
                  </h2>

                  <div className="cs_height_22 cs_height_lg_18" />

                  <p className="cs_service_area_intro mb-0">
                    Explore artificial turf solutions for homes, businesses, pet areas, putting greens, and outdoor spaces across Los Angeles and nearby communities.
                    <br />
                    Choose your city to learn more about turf services available in your area.
                  </p>

                  <div className="cs_height_30 cs_height_lg_25" />

                  <Link href="#service-area-cities" className="cs_btn cs_style_1 cs_bold cs_heading_color">
                    <span>Explore Service Areas</span>

                    <Icon icon="fa6-solid:arrow-down" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="cs_height_70 cs_height_lg_45" />

            {/* City Cards */}
            <div id="service-area-cities" className="row cs_gap_y_30">
              {serviceAreas.map((area) => (
                <div className="col-xl-4 col-md-6" key={area.city}>
                  <Link href={area.link} className="cs_service_area_card" aria-label={`Explore artificial turf services in ${area.city}`}>
                    <div className="cs_service_area_card_top">
                      <div className="cs_service_area_icon" aria-hidden="true">
                        <Icon icon="fa6-solid:location-dot" />
                      </div>

                      <span className="cs_service_area_arrow" aria-hidden="true">
                        <Icon icon="fa6-solid:arrow-up-right-from-square" />
                      </span>
                    </div>

                    <div className="cs_height_30" />

                    <h3 className="cs_service_area_card_title cs_heading_color mb-0">{area.city}</h3>

                    <div className="cs_height_14" />

                    <p className="cs_service_area_card_text mb-0">{area.description}</p>

                    <div className="cs_height_28" />

                    <span className="cs_service_area_card_link cs_bold cs_heading_color">
                      Explore Area
                      <Icon icon="fa6-solid:arrow-right" aria-hidden="true" />
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="cs_height_120 cs_height_lg_70" />
        </section>

        <CtaSection data={ctaData} />
      </main>

      <Footer1 />
    </>
  );
}
