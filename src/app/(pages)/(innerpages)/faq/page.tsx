import type { Metadata } from "next";

import {
	BreadCrumbsDataProps,
	CardDataProps,
	FaqDataProps,
} from "@/app/types";

import AccordionSection2 from "@/app/ui/Accordion/AccordionSection2";
import CardSection from "@/app/ui/CardSection";
import PageHeading from "@/app/ui/PageHeading";

const BreadcrumbsData: BreadCrumbsDataProps = {
	backgroundImage: "/assets/img/bg/contact-header-bg.webp",
	title: "FAQs",
	breadcrumbs: [
		{ label: "Home", link: "/", active: false },
		{ label: "FAQ", link: "", active: true },
	],
};

const cardData: CardDataProps = {
	backgroundImage: "/assets/img/resources/contact-cta.webp",
	tags: ["Turf Options", "Project Questions", "Local Service", "Free Quote"],
	title: "STILL HAVE QUESTIONS? <br /> LET'S TALK TURF",
	buttonLink: "/contact",
};

const faqData: FaqDataProps = {
	sectionTitle: "ARTIFICIAL TURF <span>INSTALLATION</span>",
	image: "/assets/img/resources/faq-img-1.webp",
	subtitle: "",
	highlightedText: "",
	items: [
		{
			question:
				"How much does artificial turf installation cost in Los Angeles?",
			answer:
				"Artificial turf installation costs vary based on the project size, turf type, site conditions, preparation requirements, drainage, and installation details. Contractors within our network can evaluate your Los Angeles property and provide a project-specific estimate based on the area and type of artificial turf you are considering.",
		},
		{
			question: "How long does artificial turf installation take?",
			answer:
				"Installation time depends on the size and condition of the project area. Smaller residential turf projects may be completed relatively quickly, while larger or more complex spaces can require additional preparation and installation time. Site access, existing landscaping, drainage, and base preparation can also affect the overall project schedule.",
		},
		{
			question: "What goes underneath artificial turf?",
			answer:
				"Artificial turf installations typically require a properly prepared and compacted base that helps create a stable surface and supports drainage. The exact base materials and installation method depend on existing site conditions and the intended use of the area. Proper preparation is important for long-term performance and appearance.",
		},
		{
			question: "Does artificial turf need drainage?",
			answer:
				"Yes, effective drainage is an important part of many artificial turf installations. The appropriate drainage approach depends on the property, soil conditions, existing surface, and intended use of the turf. Pet areas and other frequently used spaces may require particular attention to drainage and base preparation.",
		},
	],
};

const faqData2: FaqDataProps = {
	sectionTitle: "TURF USE & <span>MAINTENANCE</span>",
	image: "/assets/img/resources/faq-img-2.webp",
	subtitle: "",
	highlightedText: "",
	items: [
		{
			question: "Is artificial turf a good option for dogs?",
			answer:
				"Pet-friendly artificial turf can be used for dog runs, backyards, side yards, and other pet areas. Proper drainage, suitable turf materials, and routine cleaning are important considerations for pet spaces. Contractors within our network can help evaluate the area and discuss turf options suited to households with dogs.",
		},
		{
			question: "Does artificial turf get hot in Los Angeles?",
			answer:
				"Artificial turf can become warm in direct sunlight, particularly during hot Los Angeles weather. Surface temperature can vary depending on the turf product, surrounding materials, shade, and site exposure. Property owners can discuss turf selection and practical ways to manage heat in frequently used outdoor areas.",
		},
		{
			question: "Can artificial turf be installed over concrete?",
			answer:
				"Artificial turf can be installed over some concrete surfaces, including certain patios, decks, and outdoor areas, when the existing surface is suitable. Drainage, edges, attachment methods, and surface condition should be evaluated before installation. The appropriate approach depends on the specific property and intended use.",
		},
		{
			question: "How do you maintain artificial grass?",
			answer:
				"Artificial grass generally requires routine care to keep the surface clean and presentable. Maintenance may include removing leaves and debris, brushing turf fibers when needed, rinsing appropriate areas, and cleaning pet spaces. Maintenance needs can vary depending on traffic, pets, landscaping, and the surrounding environment.",
		},
	],
};

export const metadata: Metadata = {
	title: "Artificial Turf FAQs Los Angeles | LA Turf Installers",

	description:
		"Find answers about artificial turf installation in Los Angeles, including cost, drainage, pet turf, maintenance, installation time and concrete surfaces.",

	alternates: {
		canonical: "/faq",
	},

	openGraph: {
		title: "Artificial Turf FAQs Los Angeles | LA Turf Installers",
		description:
			"Get answers to common questions about artificial turf installation, pet turf, drainage, maintenance and turf projects in Los Angeles.",
		url: "/faq",
	},
};

export default function FaqPage() {
	return (
		<>
			<PageHeading data={BreadcrumbsData} />

			<div className="cs_height_100 cs_height_lg_70" />

			<AccordionSection2 data={faqData} />

			<div className="cs_height_100 cs_height_lg_70" />

			<AccordionSection2 data={faqData2} />

			<div className="cs_height_100 cs_height_lg_70" />

			<CardSection data={cardData} />
		</>
	);
}