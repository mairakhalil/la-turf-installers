"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const data = {
	logo: "/assets/img/logo/la-turf-installer-logo.svg",
	logoUrl: "/",

	menuItems: [
		{ label: "HOME", href: "/" },

		{ label: "ABOUT", href: "/about" },

		{
			label: "SERVICES",
			href: "/services",
			children: [
				{
					label: "ALL SERVICES",
					href: "/services",
				},
				{
					label: "RESIDENTIAL TURF INSTALLATION",
					href: "/residential-turf-installation",
				},
				{
					label: "PET-FRIENDLY TURF INSTALLATION",
					href: "/pet-friendly-turf-installation",
				},
				{
					label: "PUTTING GREEN INSTALLATION",
					href: "/putting-green-installation",
				},
				{
					label: "COMMERCIAL TURF INSTALLATION",
					href: "/commercial-turf-installation",
				},
				{
					label: "PLAYGROUND TURF INSTALLATION",
					href: "/playground-turf-installation",
				},
				{
					label: "ROOFTOP, DECK & PATIO TURF",
					href: "/rooftop-deck-patio-turf-installation",
				},
			],
		},

		{
			label: "SERVICE AREAS",
			href: "/service-areas",
		},

		{
			label: "PAGES",
			href: "#",
			children: [
				{
					label: "FAQ",
					href: "/faq",
				},
				{
					label: "PRIVACY POLICY",
					href: "/privacy-policy",
				},
				{
					label: "TERMS & CONDITIONS",
					href: "/terms-conditions",
				},
				{
					label: "ACCESSIBILITY STATEMENT",
					href: "/accessibility-statement",
				},
				{
					label: "TESTIMONIALS",
					href: "/testimonials",
				},
			],
		},

		{ label: "CONTACT", href: "/contact" },
	],
};

const Header = () => {
	const [isShowMobileMenu, setIsShowMobileMenu] = useState<boolean>(false);

	const [openMobileSubmenuIndex, setOpenMobileSubmenuIndex] = useState<
		number[]
	>([]);

	const [isSticky, setIsSticky] = useState<string>("");

	const handleOpenMobileSubmenu = (index: number) => {
		setOpenMobileSubmenuIndex((prev) =>
			prev.includes(index)
				? prev.filter((item) => item !== index)
				: [...prev, index]
		);
	};

	const handleCloseMobileMenu = () => {
		setIsShowMobileMenu(false);
		setOpenMobileSubmenuIndex([]);
	};

	useEffect(() => {
		const handleScroll = () => {
			setIsSticky(window.scrollY > 100 ? "cs_sticky_active" : "");
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			id="site-header"
			className={`cs_site_header cs_style_1 cs_sticky_header ${
				isSticky ? isSticky : ""
			}`}
		>
			<div className="cs_main_header">
				<div className="container">
					<div className="cs_main_header_in">
						<div className="cs_main_header_left">
							<Link
								className="cs_site_branding"
								href={data.logoUrl}
								aria-label="LA Turf Installers homepage"
							>
								<Image
									src={data.logo}
									alt="LA Turf Installers artificial turf installation in Los Angeles"
									width={150}
									height={80}
									className="object-contain"
									priority
								/>
							</Link>
						</div>

						<div className="cs_main_header_center">
							<div className="cs_nav cs_heading_color">
								<nav
									id="primary-navigation"
									aria-label="Primary navigation"
									className={`cs_nav_list_wrap text-uppercase ${
										isShowMobileMenu ? "cs_active" : ""
									}`}
								>
									<ul className="cs_nav_list">
										{data.menuItems.map((item, index) => (
											<li
												key={item.label}
												className={
													item.children ? "menu-item-has-children" : ""
												}
											>
												<Link
													href={item.href}
													onClick={
														!item.children
															? handleCloseMobileMenu
															: undefined
													}
												>
													{item.label}
												</Link>

												{item.children && (
													<>
														<ul
															style={{
																display: openMobileSubmenuIndex.includes(
																	index
																)
																	? "block"
																	: undefined,
															}}
														>
															{item.children.map((child) => (
																<li key={child.href}>
																	<Link
																		href={child.href}
																		onClick={handleCloseMobileMenu}
																	>
																		{child.label}
																	</Link>
																</li>
															))}
														</ul>

														<button
															type="button"
															className={`cs_munu_dropdown_toggle ${
																openMobileSubmenuIndex.includes(index)
																	? "active"
																	: ""
															}`}
															onClick={() =>
																handleOpenMobileSubmenu(index)
															}
															aria-label={`Toggle ${item.label.toLowerCase()} submenu`}
															aria-expanded={openMobileSubmenuIndex.includes(
																index
															)}
														>
															<span aria-hidden="true" />
														</button>
													</>
												)}
											</li>
										))}
									</ul>
								</nav>

								<button
									type="button"
									className={`cs_menu_toggle ${
										isShowMobileMenu ? "cs_toggle_active" : ""
									}`}
									onClick={() =>
										setIsShowMobileMenu(!isShowMobileMenu)
									}
									aria-label="Toggle main navigation"
									aria-expanded={isShowMobileMenu}
									aria-controls="primary-navigation"
								>
									<span aria-hidden="true"></span>
								</button>
							</div>
						</div>

						
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;