import type { Metadata } from "next";

import { AboutUsDataProps, BrandDataProps, BreadCrumbsDataProps, CardDataProps, FeatureDataProps, TeamMembersDataProps, ValueDataProps, WorksTwoDataProps } from "@/app/types";

import AboutUsSection from "@/app/ui/Aboutus";
import BrandSection from "@/app/ui/BrandSection";
import CardSection from "@/app/ui/CardSection";
import FeatureSection from "@/app/ui/FeatureSection";
import PageHeading from "@/app/ui/PageHeading";
import TeamMemberSection from "@/app/ui/Team";
import ValueSection from "@/app/ui/ValueSection";
import WorkSection1 from "@/app/ui/WorksSection/WorkSection1";

const BreadcrumbsData: BreadCrumbsDataProps = {
  backgroundImage: "/assets/img/bg/contact-header-bg.webp",
  title: "ABOUT US",
  breadcrumbs: [
    { label: "Home", link: "/", active: false },
    { label: "About", link: "", active: true },
  ],
};

const aboutUsData: AboutUsDataProps = {
  title: `LOS ANGELES <br><span>ARTIFICIAL TURF</span> <br>SOLUTIONS`,

  introduction: "<strong>LA Turf Installers</strong> supports artificial turf projects across Los Angeles through an experienced contractor network. We help property owners explore turf solutions for lawns, pets, putting greens, and commercial spaces.",

  introduction1: "From project planning to installation details, our contractor partners consider site conditions, drainage, intended use, and turf options to help create practical outdoor spaces.",

  video: {
    videoUrl: "/assets/videos/la-turf-installer-video.mp4",
    backgroundImage: "/assets/img/bg/turf-video-bg.webp",
  },

  cta: {
    backgroundImage: "/assets/img/resources/about-img-3.webp",
    buttonUrl: "/services",
    buttonText: "Explore Turf Services",
    title: "",
  },
};

const valueData: ValueDataProps = {
  sectionTitle: "OUR FOCUS",
  values: [{ text: "Artificial Turf" }, { text: "Outdoor Spaces" }],
};

const featureData: FeatureDataProps = {
  sectionTitle: "BUILT AROUND <span>YOUR TURF PROJECT</span>",

  buttonText: "Compare Turf Options",
  buttonUrl: "/services",

  image: "/assets/img/resources/our-focus.webp",

  features: [
    {
      icon: "fa6-solid:house",
      title: "Property-focused planning",
      description: "Turf options are considered around your property, outdoor use, site conditions, and project goals.",
    },
    {
      icon: "fa6-solid:people-group",
      title: "Experienced contractor network",
      description: "Connect with experienced professionals supporting artificial turf installation projects throughout Los Angeles.",
    },
    {
      icon: "fa6-solid:layer-group",
      title: "Proper site preparation",
      description: "Base preparation, grading, drainage, and finishing details are considered for dependable turf performance.",
    },
    {
      icon: "fa6-solid:seedling",
      title: "Turf for diverse spaces",
      description: "Explore turf solutions for yards, pets, putting greens, playgrounds, commercial spaces, decks, and patios.",
    },
  ],
};

const teamMembersData: TeamMembersDataProps = {
  title: `OUR TURF <br><span>INSTALLATION</span> SERVICES`,
  subtitle: "SERVICES",

  teamMembers: [
    {
      img: "/assets/img/services/residential-turf-3.webp",
      name: "Residential Artificial Turf",
      role: "Los Angeles Homes",
      description: "Artificial turf solutions for lawns, backyards, side yards, and residential outdoor spaces.",
      link: "/services/residential-turf-installation",
    },
    {
      img: "/assets/img/services/pet-friendly-3.webp",
      name: "Pet-Friendly Turf",
      role: "Pet Areas &amp; Dog Runs",
      description: "Pet turf options designed around drainage, regular use, cleanup, and comfortable outdoor spaces.",
      link: "/services/pet-friendly-turf-installation",
    },
    {
      img: "/assets/img/services/putting-green-3.webp",
      name: "Putting Green Installation",
      role: "Backyard Golf Spaces",
      description: "Custom artificial putting greens planned around available space, layout, and practice goals.",
      link: "/services/putting-green-installation",
    },
    {
      img: "/assets/img/services/commercial-turf-3.webp",
      name: "Commercial Artificial Turf",
      role: "Commercial Properties",
      description: "Artificial turf solutions for business properties, shared areas, and high-use outdoor spaces.",
      link: "/services/commercial-turf-installation",
    },
    {
      img: "/assets/img/services/play-ground-3.webp",
      name: "Playground Turf Installation",
      role: "Play &amp; Recreation Areas",
      description: "Artificial turf solutions for playgrounds and recreational spaces with practical site planning.",
      link: "/services/playground-turf-installation",
    },
    {
      img: "/assets/img/services/deck-patio-turf-3.webp",
      name: "Rooftop, Deck &amp; Patio Turf",
      role: "Specialty Outdoor Spaces",
      description: "Artificial turf options for suitable rooftops, decks, patios, terraces, and hard-surface areas.",
      link: "/services/rooftop-deck-patio-turf-installation",
    },
  ],
};

const brandLogos: BrandDataProps = {
  brands: ["/assets/img/icons/turf-installation.svg", "/assets/img/icons/backyard-turf-installation.svg", "/assets/img/icons/commercial-turf.svg", "/assets/img/icons/residential-turf.svg", "/assets/img/icons/putting-greens.svg", "/assets/img/icons/pet-friendly-turf.svg", "/assets/img/icons/play-ground-turf.svg"],
};

const worksData: WorksTwoDataProps = {
  title: "OUR <span>WORK</span>",
  subtitle: "GALLERY",

  galleryItems: [
    {
      imgSrc: "/assets/img/project/project-img-1.webp",
      title: "Residential Turf",
      year: "Los Angeles",
      height: "694px",
    },
    {
      imgSrc: "/assets/img/project/project-img-2.webp",
      title: "Pet Turf",
      year: "Los Angeles",
      height: "287px",
    },
    {
      imgSrc: "/assets/img/project/project-img-3.webp",
      title: "Putting Green",
      year: "Los Angeles",
      height: "383px",
    },
    {
      imgSrc: "/assets/img/project/project-img-4.webp",
      title: "Commercial Turf",
      year: "Los Angeles",
      height: "480px",
    },
    {
      imgSrc: "/assets/img/project/project-img-5.webp",
      title: "Outdoor Turf",
      year: "Los Angeles",
      height: "190px",
    },
  ],
};

const cardData: CardDataProps = {
  backgroundImage: "/assets/img/bg/about-cta.webp",
  tags: ["Artificial Turf", "Pet Turf", "Putting Greens", "Los Angeles"],
  title: "START YOUR LOS ANGELES <br /> TURF PROJECT",
  buttonLink: "/contact",
};

export const metadata: Metadata = {
  title: "About LA Turf Installers | Artificial Turf Los Angeles",
  description: "Learn about LA Turf Installers and artificial turf installation solutions for residential, pet, putting green and commercial projects in Los Angeles.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About LA Turf Installers | Artificial Turf Los Angeles",
    description: "Explore artificial turf solutions and contractor support for residential and commercial properties throughout Los Angeles.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeading data={BreadcrumbsData} />

      <AboutUsSection data={aboutUsData} />

      <div className="cs_heading_bg cs_white_color">
        <ValueSection data={valueData} />
        <FeatureSection data={featureData} />
      </div>

      <TeamMemberSection data={teamMembersData} />

      <BrandSection data={brandLogos} />

      <WorkSection1 data={worksData} />

      <CardSection data={cardData} />
    </>
  );
}
