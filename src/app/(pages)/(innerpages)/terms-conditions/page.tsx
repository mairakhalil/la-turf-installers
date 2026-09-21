import type { Metadata } from "next";

import { BreadCrumbsDataProps } from "@/app/types";
import PageHeading from "@/app/ui/PageHeading";

const BreadcrumbsData: BreadCrumbsDataProps = {
	backgroundImage: "/assets/img/bg/legal-pages-bg.webp",
	title: "Terms & Conditions",
	breadcrumbs: [
		{ label: "Home", link: "/", active: false },
		{ label: "Terms & Conditions", link: "", active: true },
	],
};

export const metadata: Metadata = {
	title: "Terms & Conditions | LA Turf Installers",

	description:
		"Review the terms and conditions for using the LA Turf Installers website and requesting information about artificial turf services in Los Angeles.",

	alternates: {
		canonical: "/terms-conditions",
	},

	openGraph: {
		title: "Terms & Conditions | LA Turf Installers",
		description:
			"Review the terms governing use of the LA Turf Installers website and inquiries about artificial turf services in the Los Angeles area.",
		url: "/terms-conditions",
	},
};

export default function TermsAndConditions() {
	return (
		<>
			<PageHeading data={BreadcrumbsData} />

			<div className="cs_height_70 cs_height_lg_50" />

			<div className="container">
				<p className="last-updated">
					Last Updated: September 21, 2026
				</p>

				<p>
					By accessing or using the <strong>LA Turf Installers</strong> website,
					you agree to these Terms & Conditions regarding website use,
					service inquiries, and information provided through this site.
				</p>

				<div className="cs_text_block_wrapper">
					<div className="cs_text_block">
						<h2 className="cs_fs_32">1. Website Use</h2>

						<p>
							This website provides information about artificial turf services
							available in the Los Angeles area. You agree to:
						</p>

						<ul className="cs_mp_0">
							<li>Use the website only for lawful purposes</li>
							<li>Provide accurate information when submitting an inquiry</li>
						</ul>

						<p>
							Website content may be updated, modified, or removed when
							necessary without prior notice.
						</p>
					</div>

					<div className="cs_text_block">
						<h2 className="cs_fs_32">2. Service Inquiries</h2>

						<p>When requesting information or a quote:</p>

						<ul className="cs_mp_0">
							<li>Project details and availability may vary</li>
							<li>Pricing depends on the scope and site conditions</li>
							<li>Submitting a form does not create a service contract</li>
						</ul>

						<p>
							<strong>Please note:</strong> Final project terms, pricing, and
							scope should be confirmed before work begins.
						</p>
					</div>

					<div className="cs_text_block">
						<h2 className="cs_fs_32">3. Contractor Network</h2>

						<p>
							Artificial turf opportunities may be coordinated with
							contractors represented through our contractor network.
						</p>

						<ul className="cs_mp_0">
							<li>Project availability may vary by location</li>
							<li>Specific project terms are confirmed separately</li>
						</ul>
					</div>

					<div className="cs_text_block">
						<h2 className="cs_fs_32">4. Limitation of Liability</h2>

						<p>To the extent permitted by law, we are not responsible for:</p>

						<ul className="cs_mp_0">
							<li>Interruptions or temporary website availability issues</li>
							<li>Reliance on outdated or incomplete website information</li>
							<li>Third-party websites or services linked from this site</li>
						</ul>
					</div>

					<div className="cs_text_block">
						<h2 className="cs_fs_32">5. Website Updates</h2>

						<p>We may periodically update this website to reflect:</p>

						<ul className="cs_mp_0">
							<li>Changes to available services</li>
							<li>Website functionality improvements</li>
							<li>Updates to policies and information</li>
						</ul>

						<p>
							Continued use of the website is subject to the current terms
							posted on this page.
						</p>
					</div>

					<div className="cs_text_block">
						<h2 className="cs_fs_32">6. Governing Law</h2>

						<p>
							These Terms & Conditions are governed by applicable laws and
							regulations. Any disputes will be handled in accordance with
							the jurisdiction applicable to the matter.
						</p>
					</div>
				</div>
			</div>

			<div className="cs_height_70 cs_height_lg_50" />
		</>
	);
}