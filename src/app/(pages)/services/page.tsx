import type { Metadata } from "next";

import {
	BreadCrumbsDataProps,
	CTADataProps,
	ServiceTwoDataProps,
} from "@/app/types";

import CtaSection from "@/app/ui/CTASection/CtaSection";
import Footer1 from "@/app/ui/Footer/Footer1";
import Header from "@/app/ui/Header/Header";
import PageHeading from "@/app/ui/PageHeading";
import ServiceSection1 from "@/app/ui/ServicesSection/ServiceSection1";

const BreadcrumbsData: BreadCrumbsDataProps = {
	backgroundImage: "/assets/img/bg/contact-header-bg.webp",
	title: "OUR SERVICES",
	breadcrumbs: [
		{ label: "Home", link: "/", active: false },
		{ label: "Services", link: "", active: true },
	],
};

const servicesData: ServiceTwoDataProps[] = [
	{
		title: "RESIDENTIAL TURF",
		description:
			"Artificial turf for Los Angeles yards. Explore practical lawn options designed for attractive, usable residential outdoor spaces.",
		image: "/assets/img/services/residential-turf-installation-1.webp",
		link: "/residential-turf-installation",
	},
	{
		title: "PET-FRIENDLY TURF",
		description:
			"Pet-friendly turf for active outdoor areas. Suitable options pair durable surfaces with drainage considerations for homes with dogs.",
		image: "/assets/img/services/pet-friendly-turf-installation-1.webp",
		link: "/pet-friendly-turf-installation",
	},
	{
		title: "PUTTING GREENS",
		description:
			"Custom putting greens for home practice. Contractors in our network plan turf layouts around available space, contours, and play goals.",
		image: "/assets/img/services/putting-green-installation-1.webp",
		link: "/putting-green-installation",
	},
	{
		title: "COMMERCIAL TURF",
		description:
			"Artificial turf for commercial properties. Durable synthetic surfaces can create clean, consistent landscaping for high-use outdoor areas.",
		image: "/assets/img/services/commercial-turf-installation-1.webp",
		link: "/commercial-turf-installation",
	},
	{
		title: "PLAYGROUND TURF",
		description:
			"Artificial turf for play areas and recreational spaces. Project planning considers surface use, drainage, preparation, and site conditions.",
		image: "/assets/img/services/playground-turf-installation-1.webp",
		link: "/playground-turf-installation",
	},
	{
		title: "ROOFTOP, DECK & PATIO TURF",
		description:
			"Artificial grass for rooftops, decks, and patios. Transform suitable hard surfaces into inviting green spaces with site-specific turf solutions.",
		image: "/assets/img/services/deck-patio-turf-1.webp",
		link: "/rooftop-deck-patio-turf-installation",
	},
];

const ctaData: CTADataProps = {
	backgroundImage: "/assets/img/services/services-cta-img.webp",
	title: "READY TO UPGRADE YOUR OUTDOOR SPACE?",
	buttonText: "Request a Free Quote",
	buttonUrl: "/contact",
};

export const metadata: Metadata = {
	title: "Artificial Turf Services Los Angeles | LA Turf Installers",

	description:
		"Explore artificial turf services in Los Angeles for homes, pets, putting greens, commercial properties, playgrounds, rooftops, decks and patios.",

	alternates: {
		canonical: "/services",
	},

	openGraph: {
		title: "Artificial Turf Services Los Angeles | LA Turf Installers",
		description:
			"Explore residential, pet-friendly, putting green, commercial, playground and specialty artificial turf services across Los Angeles.",
		url: "/services",
	},
};

export default function ServicePage() {
	return (
		<>
			<Header />

			<PageHeading data={BreadcrumbsData} />

			<ServiceSection1 data={servicesData} />

			<CtaSection data={ctaData} />

			<Footer1 />
		</>
	);
}