import type { Metadata } from "next";

import AOSInit from "@/app/helper/AosInit";

import {
	CardDataProps,
	ServiceDetailsProps,
	TestimonialDataProps,
	WorkingProcessDataProps,
} from "@/app/types";

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
		{ label: "Residential Turf", link: "", active: true },
	],

	titleHighlight: "RESIDENTIAL <span>ARTIFICIAL TURF</span>",

	video: {
		videoUrl: "/assets/videos/residential-turf.mp4",
		backgroundImage:
			"/assets/img/services/residential-turf-img-3.webp",
	},

	cta: {
		title: "",
		buttonUrl: "/contact",
		buttonText: "Request a Quote",
		backgroundImage:
			"/assets/img/services/residential-turf-img-4.webp",
	},

	description: `
		Residential artificial turf offers Los Angeles homeowners a practical way to create an attractive, usable lawn without the routine mowing and watering required by natural grass. Turf can be considered for front yards, backyards, side yards, play spaces, and other residential areas where a consistent green surface is preferred. Project planning considers the property's layout, drainage, existing surface, access, and how the outdoor space will be used. <br><br>
		Through our contractor network, homeowners can connect with experienced professionals for residential artificial turf installation in Los Angeles. Proper preparation may include removing existing material, grading the area, preparing and compacting the base, addressing drainage, fitting the turf, securing edges, and completing the surface. Turf selection and installation details can be tailored to the property's conditions, traffic levels, appearance goals, and everyday outdoor needs.
	`,

	iconBoxes: [
		{
			iconClass: "fa6-solid:house",
			title: "Front & Backyard Turf",
		},
		{
			iconClass: "fa6-solid:layer-group",
			title: "Prepared Turf Base",
		},
		{
			iconClass: "fa6-solid:droplet",
			title: "Drainage Planning",
		},
		{
			iconClass: "fa6-solid:ruler-combined",
			title: "Site-Specific Layout",
		},
		{
			iconClass: "fa6-solid:seedling",
			title: "Natural-Looking Turf",
		},
		{
			iconClass: "fa6-solid:house-chimney-window",
			title: "Outdoor Living Areas",
		},
	],
};

const workingProcessData: WorkingProcessDataProps = {
	sectionTitle: "STEPS FOR <span>RESIDENTIAL TURF</span> INSTALLATION",

	subtitle: "HOW IT WORKS",

	logo: "/assets/img/logo/la-turf-installer-logo.svg",

	steps: [
		{
			title: "01 | Property consultation",
			description:
				"Discuss your lawn, outdoor use, turf preferences, site conditions, and goals for your Los Angeles property.",
		},
		{
			title: "02 | Site planning",
			description:
				"The area is evaluated for measurements, existing surfaces, grading, drainage, access, and base preparation needs.",
		},
		{
			title: "03 | Base preparation",
			description:
				"The installation area is prepared and graded to create a stable foundation for the selected artificial turf.",
		},
		{
			title: "04 | Turf installation",
			description:
				"The turf is positioned, trimmed, joined, secured, and finished to suit the planned residential outdoor area.",
		},
	],
};

const testimonialData: TestimonialDataProps = {
	sectionTitle: "CLIENT EXPERIENCES",

	testimonials: [
		{
			text: `The <span>artificial turf</span> made our backyard much easier to use and maintain. The finished lawn looks clean, the edges fit naturally around the landscaping, and the entire <span>outdoor space</span> feels more inviting.`,
			img: "/assets/img/testimonials/client-1.webp",
			name: "DANIEL R.",
			designation: "Sherman Oaks, Los Angeles",
		},
		{
			text: `We wanted a cleaner <span>front yard</span> without constantly dealing with worn grass. The turf gave the property a much more consistent appearance, and we appreciated how carefully the <span>project</span> was planned.`,
			img: "/assets/img/testimonials/client-2.webp",
			name: "MICHELLE T.",
			designation: "Woodland Hills, Los Angeles",
		},
		{
			text: `Our backyard had several areas where natural grass struggled. Switching to <span>artificial grass</span> gave us a more usable lawn and a neat surface that works well for our everyday <span>outdoor living</span>.`,
			img: "/assets/img/testimonials/client-3.webp",
			name: "JASON M.",
			designation: "West Los Angeles, California",
		},
	],
};

const cardData: CardDataProps = {
	title: "CREATE A BETTER <br /> RESIDENTIAL LAWN",
	buttonLink: "/contact",
	backgroundImage: "/assets/img/services/residential-cta-img.webp",
	tags: [
		"Residential Turf",
		"Artificial Grass",
		"Outdoor Living",
		"Los Angeles",
	],
};

export const metadata: Metadata = {
	title: "Residential Artificial Turf Los Angeles | LA Turf Installers",

	description:
		"Residential artificial turf installation in Los Angeles for front yards, backyards and outdoor living areas with site-specific turf solutions.",

	alternates: {
		canonical: "/services/residential-turf-installation",
	},

	openGraph: {
		title: "Residential Artificial Turf Los Angeles | LA Turf Installers",
		description:
			"Explore residential artificial turf installation for Los Angeles front yards, backyards and outdoor living spaces.",
		url: "/services/residential-turf-installation",
	},
};

export default function ResidentialTurfInstallationPage() {
	return (
		<>
			<Header2 />

			<ServiceDetailsSection data={serviceDetailsData} />

			<WorkingProcess data={workingProcessData} />

			<TestimonialSection1 data={testimonialData} />

			<CardSection
				data={cardData}
				bgColor={"cs_color_1"}
			/>

			<Footer1 />

			<AOSInit />
		</>
	);
}