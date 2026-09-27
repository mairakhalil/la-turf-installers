import type { Metadata } from "next";
import { CTADataProps, FeatureDataProps, HeroDataProps, ServiceDataProps, TestimonialDataProps, ValueDataProps, WorkingProcessDataProps, WorksDataProps } from "@/app/types";
import CTASection from "@/app/ui/CTASection";
import FeatureSection from "@/app/ui/FeatureSection";
import HeroSection from "@/app/ui/Hero";
import ServicesSection from "@/app/ui/ServicesSection";
import TestimonialSection from "@/app/ui/TestimonialSection";
import ValueSection from "@/app/ui/ValueSection";
import WorkingProcessSection from "@/app/ui/WorkingProcess";
import WorksSection from "@/app/ui/WorksSection";

const heroData: HeroDataProps = {
  title: "ARTIFICIAL TURF <b>INSTALLATION LA</b>",

  subtitle: "Upgrade your outdoor space with durable artificial turf solutions for Los Angeles homes, pet areas, putting greens, and commercial properties.",

  btnText1: "Explore Turf Services",
  btnUrl1: "/services",

  btnText2: "Request a Free Quote",
  btnUrl2: "/contact",

  funfact: {
    number: "100%",
    text: "Customer Satisfaction",
  },

  box: {
    title: "Los Angeles Turf Solutions",
    subtitle: "Connect with experienced professionals in our contractor network for artificial turf projects tailored to your property.",
    link: "/services",
  },

  backgrounds: ["/assets/img/resources/home-slider-1.webp", "/assets/img/resources/home-slider-2.webp", "/assets/img/resources/home-slider-3.webp", "/assets/img/resources/home-slider-4.webp"],
};

const valueData: ValueDataProps = {
  sectionTitle: "TURF SERVICES",
  values: [{ text: "Artificial Turf Installation" }, { text: "Artificial Grass Installation" }],
};

const featureData: FeatureDataProps = {
  sectionTitle: "<span>ARTIFICIAL TURF</span> SOLUTIONS LA",

  buttonText: "View Turf Options",
  buttonUrl: "/services",

  image: "/assets/img/resources/about-img.webp",

  features: [
    {
      icon: "fa6-solid:scissors",
      title: "Low-maintenance lawns",
      description: "Artificial grass creates a clean, green lawn without mowing, fertilizing, or routine natural grass upkeep.",
    },
    {
      icon: "fa6-solid:house",
      title: "Built for Los Angeles spaces",
      description: "Turf solutions for Los Angeles backyards, front yards, side yards, pet areas, and other outdoor spaces.",
    },
    {
      icon: "fa6-solid:layer-group",
      title: "Installation done right",
      description: "Contractor partners handle site preparation, grading, base installation, drainage, seams, edges, and final turf finishing.",
    },
    {
      icon: "fa6-solid:seedling",
      title: "Turf for every property",
      description: "Artificial turf options for homes, pet areas, putting greens, playgrounds, commercial properties, rooftops, and patios.",
    },
  ],
};

const workingProcessData: WorkingProcessDataProps = {
  sectionTitle: "FROM SITE REVIEW TO A <span>FINISHED LAWN</span>",
  subtitle: "WHAT TO EXPECT",
  logo: "/assets/img/logo/la-turf-installer-logo.svg",
  steps: [
    {
      title: "01 | Assess your space",
      description: "Your property, intended use, drainage, access, and existing surface are reviewed to determine the right approach for the project.",
    },
    {
      title: "02 | Select the right turf",
      description: "Turf options are considered for appearance, foot traffic, pets, recreation, and other needs specific to your Los Angeles property.",
    },
    {
      title: "03 | Prepare the foundation",
      description: "The area is graded and prepared with the appropriate base and drainage so the new surface has a stable, long-lasting foundation.",
    },
    {
      title: "04 | Complete the installation",
      description: "Turf is positioned, joined, secured, and finished around edges and features for a polished lawn that fits naturally into the space.",
    },
  ],
};

const servicesData: ServiceDataProps = {
  title: "ARTIFICIAL TURF SERVICES",
  highlightedText: "",

  service: [
    {
      title: "RESIDENTIAL ARTIFICIAL TURF",
      subtitle: "Transform Los Angeles yards with attractive artificial turf designed for everyday outdoor living, easy upkeep, and year-round curb appeal.",
      image: "/assets/img/services/residential-turf.webp",
      link: "services/residential-turf-installation",
      tags: [
        { label: "Residential", url: "/residential-turf-installation" },
        { label: "Artificial Turf", url: "/residential-turf-installation" },
        { label: "Backyards", url: "/residential-turf-installation" },
        { label: "Los Angeles", url: "/service-areas" },
      ],
      description: "",
    },

    {
      title: "PET-FRIENDLY ARTIFICIAL TURF",
      subtitle: "Create a practical outdoor space for dogs with pet-friendly turf options planned around drainage, regular use, and easier routine cleanup.",
      image: "/assets/img/services/pet-friendly-turf.webp",
      link: "services/pet-friendly-turf-installation",
      tags: [
        { label: "Pet Turf", url: "/pet-friendly-turf-installation" },
        { label: "Dog Areas", url: "/pet-friendly-turf-installation" },
        { label: "Drainage", url: "/pet-friendly-turf-installation" },
        { label: "Outdoor Living", url: "/pet-friendly-turf-installation" },
      ],
      description: "",
    },

    {
      title: "PUTTING GREEN INSTALLATION",
      subtitle: "Bring golf closer to home with a custom artificial putting green planned for your available space, preferred layout, and practice goals.",
      image: "/assets/img/services/putting-green-installation.webp",
      link: "services/putting-green-installation",
      tags: [
        { label: "Putting Greens", url: "/putting-green-installation" },
        { label: "Golf Turf", url: "/putting-green-installation" },
        { label: "Backyard Golf", url: "/putting-green-installation" },
        { label: "Custom Layout", url: "/putting-green-installation" },
      ],
      description: "",
    },

    {
      title: "COMMERCIAL ARTIFICIAL TURF",
      subtitle: "Upgrade commercial outdoor areas with artificial turf solutions suited to professional properties, shared spaces, and high-use Los Angeles environments.",
      image: "/assets/img/services/commercial-turf.webp",
      link: "services/commercial-turf-installation",
      tags: [
        { label: "Commercial Turf", url: "/commercial-turf-installation" },
        { label: "Business", url: "/commercial-turf-installation" },
        { label: "High-Traffic", url: "/commercial-turf-installation" },
        { label: "Los Angeles", url: "/service-areas" },
      ],
      description: "",
    },
  ],
};

const testimonialData: TestimonialDataProps = {
  sectionTitle: "CLIENT EXPERIENCES",

  testimonials: [
    {
      text: `The new <span>artificial turf</span> completely changed how we use our backyard. The area looks clean and finished, and the <span>drainage</span> was carefully considered for our dogs. We were especially pleased with how naturally everything <span>blends</span> with the rest of the yard.`,
      name: "DANIEL R.",
      designation: "Sherman Oaks, Los Angeles",
      img: "",
    },
    {
      text: `We wanted a <span>putting green</span> that fit naturally into our backyard without taking over the space. The layout works beautifully, the details feel thoughtful, and we now have a practical <span>practice area</span> the whole family enjoys.`,
      name: "MICHELLE T.",
      designation: "Woodland Hills, Los Angeles",
      img: "",
    },
    {
      text: `Our yard had become difficult to maintain, so we explored <span>artificial grass</span> as an alternative. The finished space feels much more usable and tidy, and we appreciated the clear communication throughout the <span>project</span>.`,
      name: "JASON M.",
      designation: "West Los Angeles, California",
      img: "",
    },
  ],
};

const worksData: WorksDataProps = {
  title: "EXPLORE <span>ARTIFICIAL TURF</span> <br /> PROJECT <span>INSPIRATION</span>",
  subtitle: "TURF PROJECTS",

  slides: [
    {
      image: "/assets/img/project/project-residential.webp",
      name: "RESIDENTIAL TURF",
      location: "LOS ANGELES, CA",
      description: "Artificial turf creates a clean, inviting backyard surface for outdoor living while reducing the routine upkeep of natural grass.",
    },
    {
      image: "/assets/img/project/project-putting-backyard-green.webp",
      name: "BACKYARD PUTTING GREEN",
      location: "LOS ANGELES, CA",
      description: "A custom putting green can turn available backyard space into an attractive and practical area for regular golf practice.",
    },
    {
      image: "/assets/img/project/project-pet-friendly-turf.webp",
      name: "PET-FRIENDLY TURF",
      location: "LOS ANGELES, CA",
      description: "Pet-friendly artificial turf provides a practical outdoor surface for dogs with drainage and everyday maintenance in mind.",
    },
  ],
};

const ctaData: CTADataProps = {
  backgroundImage: "/assets/img/bg/home-cta-img.webp",
  title: "READY FOR A FRESH <br /> NEW OUTDOOR SPACE?",
  buttonText: "Plan Your Turf Project",
  buttonUrl: "/contact",
};

export const metadata: Metadata = {
  title: "Artificial Turf Installation Los Angeles | LA Turf Installers",

  description: "Artificial turf installation in Los Angeles for homes, pets, putting greens, commercial spaces, playgrounds, rooftops, decks and patios.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Artificial Turf Installation Los Angeles | LA Turf Installers",
    description: "Artificial turf installation in Los Angeles for homes, pets, putting greens, commercial spaces, playgrounds, rooftops, decks and patios.",
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection data={heroData} />
      <ValueSection data={valueData} />
      <FeatureSection data={featureData} />
      <WorkingProcessSection data={workingProcessData} />
      <ServicesSection data={servicesData} />
      <TestimonialSection data={testimonialData} />
      <WorksSection data={worksData} />
      <CTASection data={ctaData} />
    </>
  );
}
