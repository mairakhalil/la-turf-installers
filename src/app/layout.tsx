import type { Metadata, Viewport } from "next";

import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "./sass/style.scss";

import { ToastContainer } from "react-toastify";
import { GlobalChildrenProps } from "./types";

export const metadata: Metadata = {
	metadataBase: new URL("https://laturfinstallers.com"),

	icons: {
		icon: [
			{
				url: "/assets/img/favicon/favicon-16x16.png",
				sizes: "16x16",
				type: "image/png",
			},
			{
				url: "/assets/img/favicon/favicon-32x32.png",
				sizes: "32x32",
				type: "image/png",
			},
			{
				url: "/assets/img/favicon/favicon-96x96.png",
				sizes: "96x96",
				type: "image/png",
			},
			{
				url: "/assets/img/favicon/android-icon-192x192.png",
				sizes: "192x192",
				type: "image/png",
			},
		],

		apple: [
			{
				url: "/assets/img/favicon/apple-icon-57x57.png",
				sizes: "57x57",
			},
			{
				url: "/assets/img/favicon/apple-icon-60x60.png",
				sizes: "60x60",
			},
			{
				url: "/assets/img/favicon/apple-icon-72x72.png",
				sizes: "72x72",
			},
			{
				url: "/assets/img/favicon/apple-icon-76x76.png",
				sizes: "76x76",
			},
			{
				url: "/assets/img/favicon/apple-icon-114x114.png",
				sizes: "114x114",
			},
			{
				url: "/assets/img/favicon/apple-icon-120x120.png",
				sizes: "120x120",
			},
			{
				url: "/assets/img/favicon/apple-icon-144x144.png",
				sizes: "144x144",
			},
			{
				url: "/assets/img/favicon/apple-icon-152x152.png",
				sizes: "152x152",
			},
			{
				url: "/assets/img/favicon/apple-icon-180x180.png",
				sizes: "180x180",
			},
		],
	},

	manifest: "/assets/img/favicon/manifest.json",

	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
			"max-video-preview": -1,
		},
	},

	openGraph: {
		siteName: "LA Turf Installers",
		locale: "en_US",
		type: "website",
		images: [
			{
				url: "/assets/img/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "LA Turf Installers artificial turf installation services in Los Angeles",
			},
		],
	},

	other: {
		"msapplication-TileColor": "#ffffff",
		"msapplication-TileImage":
			"/assets/img/favicon/ms-icon-144x144.png",
	},
};

export const viewport: Viewport = {
	themeColor: "#ffffff",
};

export default function RootLayout({ children }: GlobalChildrenProps) {
	return (
		<html lang="en">
			<body>
				{children}

				<ToastContainer
					position="top-right"
					autoClose={3000}
					hideProgressBar={false}
					newestOnTop
					closeOnClick
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="colored"
				/>
			</body>
		</html>
	);
}