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
    { label: "Pet-Friendly Turf", link: "", active: true },
  ],

  titleHighlight: "PET-FRIENDLY <span>ARTIFICIAL TURF</span>",

  video: {
    videoUrl: "/assets/videos/pet-friendly-turf.mp4",
    backgroundImage: "/assets/img/services/pet-friendly-turf-installation-3.webp",
  },

  cta: {
    title: "",
    buttonUrl: "/contact",
    buttonText: "Plan Your Pet Turf",
    backgroundImage: "/assets/img/services/pet-friendly-turf-installation-4.webp",
  },

  description: `
		Pet-friendly artificial turf gives Los Angeles homeowners a practical surface for dog runs, backyards, side yards, and dedicated pet areas where natural grass can become worn, muddy, or difficult to maintain. A well-planned pet turf system considers how dogs use the space, including frequent foot traffic, bathroom areas, drainage, routine cleanup, and access around gates, patios, landscaping, and other yard features. <br><br>
		Our contractor network supports pet turf installation in Los Angeles with attention to the details that matter in animal-use areas. Site preparation can include removing the existing surface, establishing proper grading, preparing a stable base, planning drainage, fitting and securing the turf, and selecting appropriate infill where needed. The goal is a durable, comfortable outdoor area that is easier to clean while maintaining a neat appearance around everyday pet activity.
	`,

  iconBoxes: [
    {
      iconClass: "fa6-solid:paw",
      title: "Pet-Focused Turf Areas",
    },
    {
      iconClass: "fa6-solid:droplet",
      title: "Drainage Considerations",
    },
    {
      iconClass: "fa6-solid:broom",
      title: "Easier Routine Cleanup",
    },
    {
      iconClass: "fa6-solid:dog",
      title: "Dog Runs &amp; Play Areas",
    },
    {
      iconClass: "fa6-solid:layer-group",
      title: "Prepared Pet Turf Base",
    },
    {
      iconClass: "fa6-solid-shield-halved",
      title: "High-Use Area Planning",
    },
  ],
};

const workingProcessData: WorkingProcessDataProps = {
  sectionTitle: "PLANNING YOUR <span>PET TURF</span> SPACE",

  subtitle: "HOW IT WORKS",

  logo: "/assets/img/logo/la-turf-installer-logo.svg",

  steps: [
    {
      title: "01 | Pet area assessment",
      description: "The space is reviewed around your pets, daily activity, bathroom habits, access points, existing surface, and project goals.",
    },
    {
      title: "02 | Drainage planning",
      description: "Grading, drainage conditions, turf placement, and cleanup needs are considered before the installation area is prepared.",
    },
    {
      title: "03 | Base preparation",
      description: "The existing area is prepared to establish a stable, properly graded base suited to frequent pet use and drainage needs.",
    },
    {
      title: "04 | Turf fitting &amp; finish",
      description: "Pet turf is fitted, joined, secured, and finished around edges, gates, landscaping, and other features within the space.",
    },
  ],
};

const testimonialData: TestimonialDataProps = {
  sectionTitle: "CLIENT EXPERIENCES",

  testimonials: [
    {
      text: `Our dogs had worn down the grass near the patio and created muddy areas after watering. The new <span>pet turf</span> gives them a cleaner place to run, and the yard is much easier to keep <span>tidy</span>.`,
      img: "/assets/img/testimonials/client-7.webp",
      name: "OLIVIA P.",
      designation: "Brentwood, Los Angeles",
    },
    {
      text: `We needed a better surface for our <span>dog run</span> along the side of the house. The drainage and layout were important to us, and the finished area works much better for daily <span>pet use</span>.`,
      img: "/assets/img/testimonials/client-9.webp",
      name: "ETHAN W.",
      designation: "Los Feliz, Los Angeles",
    },
    {
      text: `With two active dogs, our natural lawn never stayed in good condition. The <span>artificial turf</span> created a more practical backyard while still giving our pets plenty of usable <span>outdoor space</span>.`,
      img: "/assets/img/testimonials/client-8.webp",
      name: "SOPHIA L.",
      designation: "Pacific Palisades, Los Angeles",
    },
  ],
};

const cardData: CardDataProps = {
  title: "CREATE A BETTER <br /> SPACE FOR YOUR PETS",
  buttonLink: "/contact",
  backgroundImage: "/assets/img/services/pet-friendly-turf-cta.webp",
  tags: ["Pet Turf", "Dog Runs", "Pet Areas", "Los Angeles"],
};

export const metadata: Metadata = {
  title: "Pet-Friendly Artificial Turf Los Angeles | LA Turf Installers",

  description: "Pet-friendly artificial turf installation in Los Angeles for dog runs, backyards and pet areas with drainage and cleanup needs considered.",

  alternates: {
    canonical: "/services/pet-friendly-turf-installation",
  },

  openGraph: {
    title: "Pet-Friendly Artificial Turf Los Angeles | LA Turf Installers",
    description: "Explore pet turf installation in Los Angeles for dog runs, backyards and dedicated pet areas with site-specific drainage planning.",
    url: "/services/pet-friendly-turf-installation",
  },
};

export default function PetFriendlyTurfInstallationPage() {
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
