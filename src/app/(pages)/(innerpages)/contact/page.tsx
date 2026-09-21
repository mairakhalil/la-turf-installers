import type { Metadata } from "next";

import {
	BreadCrumbsDataProps,
	CardDataProps,
	ContractDataProps,
} from "@/app/types";

import CardSection from "@/app/ui/CardSection";
import ContactSection from "@/app/ui/Contact";
import PageHeading from "@/app/ui/PageHeading";

export const metadata: Metadata = {
	title: "Contact LA Turf Installers | Artificial Turf Los Angeles",

	description:
		"Contact LA Turf Installers for artificial turf installation in Los Angeles. Request information for residential, pet, putting green and commercial turf.",

	alternates: {
		canonical: "/contact",
	},

	openGraph: {
		title: "Contact LA Turf Installers | Artificial Turf Los Angeles",
		description:
			"Contact our Los Angeles turf contractor network about residential, pet-friendly, putting green, commercial and specialty turf projects.",
		url: "/contact",
	},
};

export default function ContactPage() {
	const BreadcrumbsData: BreadCrumbsDataProps = {
		backgroundImage: "/assets/img/bg/contact-header-bg.webp",
		title: "CONTACT US",
		breadcrumbs: [
			{
				label: "Home",
				link: "/",
				active: false,
			},
			{
				label: "Contact",
				link: "",
				active: true,
			},
		],
	};

	const contactData: ContractDataProps = {
		mapTitle: "REQUEST A <span>FREE QUOTE</span>",

		sectionTitle: "GET IN <span>TOUCH</span>",

		contactList: [
			{
				label: "EMAIL",
				value: "estimate@freequotepro.com",
			},
			{
				label: "PHONE",
				value: "(747) 379-9772",
			},
			{
				label: "SERVICE AREA",
				value: "Los Angeles & Greater Los Angeles",
			},
		],

		locationUrl:
			"https://www.google.com/maps?q=Los+Angeles,+CA&output=embed",
	};

	const cardData: CardDataProps = {
		backgroundImage: "/assets/img/resources/contact-cta.webp",

		tags: [
			"Artificial Turf",
			"Pet Turf",
			"Putting Greens",
			"Los Angeles",
		],

		title: "PLAN YOUR LOS ANGELES <br /> TURF PROJECT TODAY",

		buttonLink: "tel:+17473799772",
	};

	return (
		<main id="contact-page">
			<PageHeading data={BreadcrumbsData} />

			<div id="contact-turf-installation">
				<ContactSection data={contactData} />
			</div>

			<div id="request-turf-quote">
				<CardSection data={cardData} />
			</div>
		</main>
	);
}