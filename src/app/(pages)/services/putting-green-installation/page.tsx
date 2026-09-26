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
		{ label: "Putting Greens", link: "", active: true },
	],

	titleHighlight: "CUSTOM <span>BACKYARD PUTTING GREENS</span>",

	video: {
		videoUrl: "/assets/videos/putting-green.mp4",
		backgroundImage:
			"/assets/img/services/putting-green-5.webp",
	},

	cta: {
		title: "",
		buttonUrl: "/contact",
		buttonText: "Design Your Green",
		backgroundImage:
			"/assets/img/services/putting-green-4.webp",
	},

	description: `
		A backyard putting green gives Los Angeles homeowners a dedicated place to work on short-game skills without leaving home. Unlike standard landscape turf, a practice green can be shaped around putting distances, cup positions, approach angles, breaks, fringe areas, and the dimensions of the yard. Thoughtful planning helps the finished green feel integrated with surrounding patios, planting areas, walkways, and other features rather than appearing added onto the landscape. <br><br>
		Our contractor network supports custom putting green installation in Los Angeles for compact practice areas and larger multi-hole designs. Each project can be planned around the golfer's practice goals and the property's available footprint. Base construction, surface contours, drainage, turf selection, cup positioning, fringe details, and perimeter transitions are considered together to create a purposeful practice environment suited to the space.
	`,

	iconBoxes: [
		{
			iconClass: "fa6-solid:golf-ball-tee",
			title: "Practice-Ready Greens",
		},
		{
			iconClass: "fa6-solid:flag",
			title: "Multi-Hole Green Design",
		},
		{
			iconClass: "fa6-solid:arrows-left-right",
			title: "Varied Putt Distances",
		},
		{
			iconClass: "fa6-solid:chart-line",
			title: "Slopes, Breaks & Contours",
		},
		{
			iconClass: "fa6-solid:circle-dot",
			title: "Strategic Cup Positions",
		},
		{
			iconClass: "fa6-solid:route",
			title: "Fringe & Approach Areas",
		},
	],
};

const workingProcessData: WorkingProcessDataProps = {
	sectionTitle:
		"FROM BACKYARD SPACE TO <span>PLAYABLE GREEN</span>",

	subtitle: "PUTTING GREEN PROCESS",

	logo: "/assets/img/logo/la-turf-installer-logo.svg",

	steps: [
		{
			title: "01 | Define your practice goals",
			description:
				"Consider available space, preferred putt lengths, practice routines, cup count, and how the green should fit your property.",
		},
		{
			title: "02 | Shape the playing experience",
			description:
				"Plan green dimensions, cup positions, putting lines, subtle breaks, fringe, and transitions into the surrounding landscape.",
		},
		{
			title: "03 | Form the green profile",
			description:
				"Prepare the site and build the base to establish the planned contours, drainage, stability, and putting surface profile.",
		},
		{
			title: "04 | Complete the putting surface",
			description:
				"Fit and finish the putting turf, cups, fringe, seams, and perimeter details to complete the planned practice area.",
		},
	],
};

const testimonialData: TestimonialDataProps = {
	sectionTitle: "BACKYARD GREEN EXPERIENCES",

	testimonials: [
		{
			text: `I wanted somewhere to work on <span>short putts</span> after work without giving up most of the backyard. The finished layout uses the corner of the yard really well, and having different cup positions gives me several <span>practice lines</span>.`,
			img: "/assets/img/testimonials/client-18.webp",
			name: "BRIAN M.",
			designation: "Studio City, Los Angeles",
		},
		{
			text: `Our priority was a <span>putting green</span> that looked intentional beside the patio and existing landscaping. The curved shape and fringe make the green feel connected to the yard, while the different breaks keep <span>practice</span> interesting.`,
			img: "/assets/img/testimonials/client-16.webp",
			name: "DAVID S.",
			designation: "Brentwood, Los Angeles",
		},
		{
			text: `We converted a section of the backyard that was difficult to use into a <span>practice area</span>. I especially like being able to putt from several angles instead of repeating the same straight shot every time I use the <span>green</span>.`,
			img: "/assets/img/testimonials/client-17.webp",
			name: "RYAN K.",
			designation: "Encino, Los Angeles",
		},
	],
};

const cardData: CardDataProps = {
	title: "TURN UNUSED YARD SPACE <br /> INTO YOUR PRACTICE GREEN",
	buttonLink: "/contact",
	backgroundImage: "/assets/img/services/putting-green-cta.webp",
	tags: [
		"Backyard Golf",
		"Custom Greens",
		"Practice Turf",
		"Los Angeles",
	],
};

export const metadata: Metadata = {
	title: "Putting Green Installation Los Angeles | LA Turf Installers",

	description:
		"Custom putting green installation in Los Angeles for backyard golf practice with planned contours, cup positions, fringe areas and putting layouts.",

	alternates: {
		canonical: "/services/putting-green-installation",
	},

	openGraph: {
		title:
			"Putting Green Installation Los Angeles | LA Turf Installers",
		description:
			"Explore custom backyard putting greens in Los Angeles designed around practice goals, cup positions, contours, fringe and available yard space.",
		url: "/services/putting-green-installation",
	},
};

export default function PuttingGreenInstallationPage() {
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