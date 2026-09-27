import type { Metadata } from "next";

import AOSInit from "@/app/helper/AosInit";

import { CardDataProps, ServiceDetailsProps, TestimonialDataProps, WorkingProcessDataProps } from "@/app/types";

import CardSection from "@/app/ui/CardSection";
import Footer1 from "@/app/ui/Footer/Footer1";
import Header2 from "@/app/ui/Header/Header2";
import ServiceDetailsSection from "@/app/ui/ServiceDetails";
import TestimonialSection1 from "@/app/ui/TestimonialSection/TestimonialSection1";
import WorkingProcess from "@/app/ui/WorkingProcess";

const serviceDetailsData: ServiceDetailsProps = {
  breadcrumb: [
    { label: "Home", link: "/", active: false },
    { label: "Services", link: "/services", active: false },
    { label: "Commercial Turf", link: "", active: true },
  ],

  titleHighlight: "COMMERCIAL <span>ARTIFICIAL TURF</span>",

  video: {
    videoUrl: "/assets/videos/commercial-turf.mp4",
    backgroundImage: "/assets/img/services/commercial-turf-5.webp",
  },

  cta: {
    title: "",
    buttonUrl: "/contact",
    buttonText: "Discuss Your Property",
    backgroundImage: "/assets/img/services/commercial-turf-4.webp",
  },

  description: `
		Commercial artificial turf provides Los Angeles properties with a consistent landscape surface for spaces where appearance, usability, and ongoing upkeep all matter. It can be planned for office grounds, retail properties, apartment communities, hospitality settings, common areas, courtyards, amenity spaces, and other commercial environments. Material selection should account for foot traffic, drainage, surrounding hardscape, intended use, access, and the visual character of the property. <br><br>
		<strong>LA Turf Installers</strong> works with experienced professionals in our contractor network to support commercial artificial turf installation in Los Angeles. A well-planned project begins with site evaluation and preparation rather than turf alone. Depending on existing conditions, the work may involve surface removal, grading, base construction, drainage planning, precise seams, perimeter securing, and detailed finishing. This site-specific approach helps create an artificial grass surface suited to the operational and landscaping needs of the commercial property.
	`,

  iconBoxes: [
    {
      iconClass: "fa6-solid:building",
      title: "Commercial Property Turf",
    },
    {
      iconClass: "fa6-solid:road",
      title: "High-Traffic Turf Areas",
    },
    {
      iconClass: "fa6-solid:layer-group",
      title: "Stable Base Preparation",
    },
    {
      iconClass: "fa6-solid:water",
      title: "Effective Drainage Planning",
    },
    {
      iconClass: "fa6-solid:ruler-combined",
      title: "Precise Turf Layout Design",
    },
    {
      iconClass: "fa6-solid:seedling",
      title: "Professional Landscape Finish",
    },
  ],
};

const workingProcessData: WorkingProcessDataProps = {
  sectionTitle: "PLANNING YOUR <span> TURF</span> PROJECT",

  subtitle: "HOW IT WORKS",

  logo: "/assets/img/logo/la-turf-installer-logo.svg",

  steps: [
    {
      title: "01 | Commercial site assessment",
      description: "Review property use, traffic levels, site access, existing surfaces, drainage conditions, and goals for the proposed commercial turf area.",
    },
    {
      title: "02 | Turf system planning",
      description: "Plan turf selection, measurements, grading, drainage, transitions, edges, and preparation requirements around the commercial property's conditions.",
    },
    {
      title: "03 | Installation area preparation",
      description: "Prepare and grade the installation area, establish a stable base, address drainage needs, and complete required perimeter preparation.",
    },
    {
      title: "04 | Artificial turf installation",
      description: "Position, trim, join, and secure the artificial turf, then complete seams, edges, infill, and finishing details across the prepared area.",
    },
  ],
};

const testimonialData: TestimonialDataProps = {
  sectionTitle: "CLIENT EXPERIENCES",

  testimonials: [
    {
      text: `We wanted the entrance area to stay <span>polished</span> without constant lawn maintenance. The artificial turf gave the property a clean, consistent appearance and created a much more <span>professional</span> first impression.`,
      img: "/assets/img/testimonials/client-4.webp",
      name: "MARCUS T.",
      designation: "Century City, Los Angeles",
    },
    {
      text: `Our shared courtyard gets regular use throughout the week, so we needed a surface that looked <span>presentable</span> and worked well with the existing layout. The finished turf made the entire <span>courtyard</span> feel more complete.`,
      img: "/assets/img/testimonials/client-6.webp",
      name: "ELENA R.",
      designation: "Westwood, Los Angeles",
    },
    {
      text: `The outdoor space had several worn areas that were difficult to keep looking consistent. Artificial turf created a more <span>uniform</span> landscape and gave our tenants a cleaner, more inviting <span>amenity area</span>.`,
      img: "/assets/img/testimonials/client-5.webp",
      name: "DAVID K.",
      designation: "Culver City, Los Angeles",
    },
  ],
};

const cardData: CardDataProps = {
  title: "UPGRADE YOUR COMMERCIAL <br /> OUTDOOR SPACE",
  buttonLink: "/contact",
  backgroundImage: "/assets/img/services/commercial-turf-cta.webp",
  tags: ["Commercial Turf", "Artificial Grass", "Property Landscaping", "Los Angeles"],
};

export const metadata: Metadata = {
  title: "Commercial Artificial Turf Los Angeles | LA Turf Installers",

  description: "Commercial artificial turf installation in Los Angeles for businesses, multifamily properties, common areas, courtyards and commercial outdoor spaces.",

  alternates: {
    canonical: "/services/commercial-turf-installation",
  },

  openGraph: {
    title: "Commercial Artificial Turf Los Angeles | LA Turf Installers",
    description: "Explore commercial artificial turf installation for Los Angeles businesses, multifamily properties, common areas and outdoor amenity spaces.",
    url: "/services/commercial-turf-installation",
  },
};

export default function CommercialTurfInstallationPage() {
  return (
    <>
      <Header2 />

      <ServiceDetailsSection data={serviceDetailsData} />

      <WorkingProcess data={workingProcessData} />

      <TestimonialSection1 data={testimonialData} />

      <CardSection data={cardData} bgColor={"cs_color_1"} />

      <Footer1 />

      <AOSInit />
    </>
  );
}
