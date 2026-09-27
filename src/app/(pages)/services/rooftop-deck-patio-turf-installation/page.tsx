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
    { label: "Rooftop, Deck and Patio Turf", link: "", active: true },
  ],

  titleHighlight: "ROOFTOP, DECK &amp; <span>PATIO TURF</span>",

  video: {
    videoUrl: "/assets/videos/rooftop-turf-installer.mp4",
    backgroundImage: "/assets/img/services/roof-top-turf-3.webp",
  },

  cta: {
    title: "",
    buttonUrl: "/contact",
    buttonText: "Plan Your Outdoor Space",
    backgroundImage: "/assets/img/services/roof-top-turf-4.webp",
  },

  description: `
		Rooftops, decks, balconies, terraces, and patios present different installation conditions than a traditional lawn. Artificial turf can soften hard outdoor surfaces and introduce a more inviting green finish, but the installation needs to work with the existing surface, drainage routes, door clearances, perimeter edges, and transitions. In Los Angeles, these spaces are often used for seating, entertaining, container gardens, and everyday outdoor living, making thoughtful layout planning especially important. <br><br>
		Our contractor network supports rooftop, deck, and patio turf installation in Los Angeles for residential and suitable commercial outdoor spaces. Planning considers the existing substrate, water movement, installation access, turf orientation, seams, edges, furniture areas, and connections to adjacent surfaces. Rather than treating every hardscape the same, the installation approach can be adapted to the conditions and intended use of each rooftop, deck, terrace, balcony, or patio.
	`,

  iconBoxes: [
    {
      iconClass: "fa6-solid:building",
      title: "Rooftop Turf Areas",
    },
    {
      iconClass: "fa6-solid:couch",
      title: "Patio Living Spaces",
    },
    {
      iconClass: "fa6-solid:droplet",
      title: "Drainage Considerations",
    },
    {
      iconClass: "fa6-solid:layer-group",
      title: "Hard-Surface Planning",
    },
    {
      iconClass: "fa6-solid:ruler-combined",
      title: "Clean Edge Transitions",
    },
    {
      iconClass: "fa6-solid:seedling",
      title: "Natural Green Outdoor Finish",
    },
  ],
};

const workingProcessData: WorkingProcessDataProps = {
  sectionTitle: "PLANNING TURF FOR <span> OUTDOOR SURFACES</span>",

  subtitle: "HOW IT COMES TOGETHER",

  logo: "/assets/img/logo/la-turf-installer-logo.svg",

  steps: [
    {
      title: "01 | Evaluate the outdoor area",
      description: "Review the rooftop, deck, balcony, terrace, or patio along with its surface condition, access, drainage, edges, and intended use.",
    },
    {
      title: "02 | Plan layout &amp; transitions",
      description: "Determine turf direction, seams, perimeter details, door clearances, furniture zones, and transitions to neighboring surfaces.",
    },
    {
      title: "03 | Prepare the surface",
      description: "Prepare the existing area for the planned turf system while accounting for drainage paths and site-specific installation conditions.",
    },
    {
      title: "04 | Fit &amp; finish the turf",
      description: "Position, trim, join, and secure the turf with careful attention to edges, seams, transitions, and the finished appearance.",
    },
  ],
};

const testimonialData: TestimonialDataProps = {
  sectionTitle: "OUTDOOR SPACE EXPERIENCES",

  testimonials: [
    {
      text: `Our rooftop had plenty of room but never felt like somewhere we wanted to spend time. Adding <span>artificial turf</span> helped define the seating area and gave the space a much warmer feel without taking away from the <span>city views</span>.`,
      img: "/assets/img/testimonials/client-21.webp",
      name: "ALEX M.",
      designation: "West Hollywood, Los Angeles",
    },
    {
      text: `We wanted to make our concrete <span>patio</span> feel less bare while keeping enough room for dining and outdoor furniture. The turf layout works naturally around the space, and the transitions at the existing surfaces look <span>clean</span>.`,
      img: "/assets/img/testimonials/client-19.webp",
      name: "NATALIE C.",
      designation: "Silver Lake, Los Angeles",
    },
    {
      text: `The <span>deck</span> gets used almost every day, so our biggest concern was creating a comfortable surface without making the area difficult to maintain. The finished turf gives it a greener, more inviting <span>outdoor feel</span>.`,
      img: "/assets/img/testimonials/client-20.webp",
      name: "Jason L.",
      designation: "Mar Vista, Los Angeles",
    },
  ],
};

const cardData: CardDataProps = {
  title: "BRING A GREENER FEEL <br /> TO YOUR OUTDOOR SPACE",
  buttonLink: "/contact",
  backgroundImage: "/assets/img/services/patio-turf-cta.webp",
  tags: ["Rooftop Turf", "Deck Turf", "Patio Turf", "Los Angeles"],
};

export const metadata: Metadata = {
  title: "Rooftop, Deck &amp; Patio Turf Los Angeles | LA Turf Installers",

  description: "Rooftop, deck and patio turf installation in Los Angeles for balconies, terraces and hard outdoor surfaces with site-specific drainage and layout planning.",

  alternates: {
    canonical: "/services/rooftop-deck-patio-turf-installation",
  },

  openGraph: {
    title: "Rooftop, Deck &amp; Patio Turf Los Angeles | LA Turf Installers",
    description: "Explore artificial turf for Los Angeles rooftops, decks, patios, balconies and terraces with planning for drainage, edges and surface transitions.",
    url: "/services/rooftop-deck-patio-turf-installation",
  },
};

export default function RooftopDeckPatioTurfInstallationPage() {
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
