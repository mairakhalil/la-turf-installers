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
		{ label: "Playground Turf", link: "", active: true },
	],

	titleHighlight: "PLAYGROUND TURF<span> INSTALLATION</span>",

	video: {
		videoUrl: "/assets/videos/playground-turf.mp4",
		backgroundImage:
			"/assets/img/services/playground-turf-installation-3.webp",
	},

	cta: {
		title: "",
		buttonUrl: "/contact",
		buttonText: "Discuss Your Play Area",
		backgroundImage:
			"/assets/img/services/playground-turf-installation-4.webp",
	},

	description: `
		Playground turf requires more than choosing artificial grass that looks good. Play areas need thoughtful planning around equipment placement, foot traffic, drainage, transitions, accessibility, and the type of activity expected on the surface. For playgrounds with elevated equipment, the surfacing system may also need appropriate impact attenuation based on equipment fall heights and applicable project requirements. <br><br>
		Our contractor network supports playground turf installation in Los Angeles for residential play areas, schools, childcare properties, community spaces, and commercial recreation areas. Project planning can address sub-base conditions, drainage, turf selection, seams, perimeter details, and compatible cushioning systems where required. The goal is a well-prepared artificial turf surface designed around the specific play environment rather than treating playground turf like a standard landscape lawn.
	`,

	iconBoxes: [
		{
			iconClass: "fa6-solid:child-reaching",
			title: "Play-Area Planning",
		},
        {
			iconClass: "fa6-solid:people-group",
			title: "High-Use Play Areas",
		},
		{
			iconClass: "fa6-solid:shield-halved",
			title: "Impact-Aware Surfacing",
		},
		{
			iconClass: "fa6-solid:layer-group",
			title: "Prepared Base System",
		},
		{
			iconClass: "fa6-solid:droplet",
			title: "Drainage Considerations",
		},
		{
			iconClass: "fa6-solid:person-walking",
			title: "Accessible Transitions",
		},
		
	],
};

const workingProcessData: WorkingProcessDataProps = {
	sectionTitle: "PLANNING YOUR <span>PLAYGROUND TURF</span> ",

	subtitle: "HOW IT WORKS",

	logo: "/assets/img/logo/la-turf-installer-logo.svg",

	steps: [
		{
			title: "01 | Play area assessment",
			description:
				"The site is reviewed around equipment, activity zones, traffic patterns, existing surfaces, access, and drainage conditions.",
		},
		{
			title: "02 | Surfacing plan",
			description:
				"Turf, base, transitions, and any project-specific cushioning needs are considered for the intended playground environment.",
		},
		{
			title: "03 | Ground preparation",
			description:
				"The installation area is graded and prepared to support drainage, surface stability, and the planned playground turf system.",
		},
		{
			title: "04 | Turf finishing",
			description:
				"Turf is fitted around the play area with attention to seams, edges, equipment zones, transitions, and final surface details.",
		},
	],
};

const testimonialData: TestimonialDataProps = {
	sectionTitle: "CLIENT EXPERIENCES",

	testimonials: [
		{
			text: `The new <span>playground turf</span> gave our outdoor play area a much cleaner and more finished appearance. We especially appreciated the attention given to the equipment areas, edges, and <span>surface layout</span>.`,
			img: "/assets/img/testimonials/client-13.webp",
			name: "MARCUS P.",
			designation: "Pasadena, Los Angeles County",
		},
		{
			text: `Our priority was creating a more practical <span>play surface</span> for an area that receives regular use. The planning around drainage and transitions made the finished space feel much more <span>purpose-built</span>.`,
			img: "/assets/img/testimonials/client-15.webp",
			name: "KEVIN W.",
			designation: "Sherman Oaks, Los Angeles",
		},
		{
			text: `We needed an outdoor area that worked naturally around the existing <span>play equipment</span>. The turf layout made the space feel cohesive while keeping the play area easier to <span>maintain</span>.`,
			img: "/assets/img/testimonials/client-14.webp",
			name: "NEFELI D.",
			designation: "Woodland Hills, Los Angeles",
		},
	],
};

const cardData: CardDataProps = {
	title: "PLAN A BETTER <br /> PLAYGROUND SURFACE",
	buttonLink: "/contact",
	backgroundImage: "/assets/img/services/playground-turf-cta-img.webp",
	tags: [
		"Playground Turf",
		"Play Areas",
		"Artificial Grass",
		"Los Angeles",
	],
};

export const metadata: Metadata = {
	title: "Playground Turf Installation Los Angeles | LA Turf Installers",

	description:
		"Playground turf installation in Los Angeles for schools, childcare, residential and commercial play areas with site-specific surfacing solutions.",

	alternates: {
		canonical: "/services/playground-turf-installation",
	},

	openGraph: {
		title: "Playground Turf Installation Los Angeles | LA Turf Installers",
		description:
			"Explore artificial playground turf solutions in Los Angeles with planning for play areas, drainage, base preparation and surface transitions.",
		url: "/services/playground-turf-installation",
	},
};

export default function PlaygroundTurfInstallationPage() {
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