import type { Metadata } from "next";

import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { notFound } from "next/navigation";

import Footer from "@/app/ui/Footer/Footer";
import Header from "@/app/ui/Header/Header";
import PageHeading from "@/app/ui/PageHeading";

import { BreadCrumbsDataProps } from "@/app/types";

import { cityData } from "./cityData";

interface CityPageProps {
  params: Promise<{
    city: string;
  }>;
}

const services = [
  {
    icon: "fa6-solid:house",
    title: "Residential Turf",
    description: "Artificial turf solutions for front yards, backyards, side yards, and everyday residential outdoor spaces.",
    link: "/services/residential-turf-installation",
  },
  {
    icon: "fa6-solid:paw",
    title: "Pet-Friendly Turf",
    description: "Durable turf options for pet areas with planning that considers drainage, use, and routine cleanup.",
    link: "/services/pet-friendly-turf-installation",
  },
  {
    icon: "fa6-solid:tree",
    title: "Putting Greens",
    description: "Custom practice-green layouts planned around available space, putting goals, contours, and cup positions.",
    link: "/services/putting-green-installation",
  },
  {
    icon: "fa6-solid:building",
    title: "Commercial Turf",
    description: "Artificial turf solutions for businesses, shared spaces, and frequently used commercial outdoor environments.",
    link: "/services/commercial-turf-installation",
  },
  {
    icon: "fa6-solid:child-reaching",
    title: "Playground Turf",
    description: "Turf solutions for play and recreation areas with attention to preparation, drainage, and intended use.",
    link: "/services/playground-turf-installation",
  },
  {
    icon: "fa6-solid:seedling",
    title: "Rooftop, Deck &amp; Patio Turf",
    description: "Artificial grass options for suitable rooftops, decks, patios, terraces, and other hard-surface spaces.",
    link: "/services/rooftop-deck-patio-turf-installation",
  },
];

const whyChooseItems = [
  {
    icon: "fa6-solid:house",
    title: "Property-Focused Planning",
    description: "Turf options are considered around your property's layout, existing surfaces, intended use, and surrounding outdoor features.",
  },
  {
    icon: "fa6-solid:people-group",
    title: "Experienced Contractor Network",
    description: "Projects are supported through experienced professionals in our contractor network serving Greater Los Angeles.",
  },
  {
    icon: "fa6-solid:layer-group",
    title: "Proper Site Preparation",
    description: "Project planning considers grading, base preparation, drainage, edges, seams, and transitions based on site conditions.",
  },
  {
    icon: "fa6-solid:seedling",
    title: "Turf for Diverse Spaces",
    description: "Explore turf options for lawns, pets, putting greens, playgrounds, businesses, rooftops, decks, and patios.",
  },
];

export function generateStaticParams() {
  return Object.keys(cityData).map((city) => ({
    city,
  }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city } = await params;
  const data = cityData[city];

  if (!data) {
    return {};
  }

  return {
    title: data.metaTitle,
    description: data.metaDescription,

    alternates: {
      canonical: `/services/service-areas/${data.slug}`,
    },

    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `/services/service-areas/${data.slug}`,
    },
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { city } = await params;
  const data = cityData[city];

  if (!data) {
    notFound();
  }

  const BreadcrumbsData: BreadCrumbsDataProps = {
    backgroundImage: "/assets/img/bg/contact-header-bg.webp",

    title: `ARTIFICIAL TURF IN <span>${data.city.toUpperCase()}</span>`,

    breadcrumbs: [
      {
        label: "Home",
        link: "/",
        active: false,
      },
      {
        label: "Services",
        link: "/services",
        active: false,
      },
      {
        label: "Service Areas",
        link: "/services/service-areas",
        active: false,
      },
      {
        label: data.city,
        link: "",
        active: true,
      },
    ],
  };

  return (
    <>
      <Header />

      <PageHeading data={BreadcrumbsData} />

      <main>
        {/* =====================================================
				    About
				===================================================== */}

        <section id="about-city" className="cs_city_about" aria-labelledby="city-about-title">
          <div className="cs_height_120 cs_height_lg_70" />

          <div className="container">
            <div className="row align-items-center cs_gap_y_40">
              <div className="col-lg-6">
                <div className="cs_city_about_image">
                  <img src={data.about.image} alt={`Artificial turf project example for ${data.city} properties`} />

                  <div className="cs_city_about_badge">
                    <Icon icon="fa6-solid:location-dot" aria-hidden="true" />

                    <span>{data.city}</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="cs_city_about_content">
                  <p className="cs_city_subtitle cs_bold text-uppercase mb-0">{data.about.subtitle}</p>

                  <div className="cs_height_14" />

                  <h2
                    id="city-about-title"
                    className="cs_city_section_title cs_heading_color mb-0"
                    dangerouslySetInnerHTML={{
                      __html: data.about.title,
                    }}
                  />

                  <div className="cs_height_24" />

                  <p className="cs_city_text mb-0">{data.about.description1}</p>

                  <div className="cs_height_18" />

                  <p className="cs_city_text mb-0">{data.about.description2}</p>

                  <div className="cs_height_32" />

                  <Link href="/contact" className="cs_btn cs_style_1 cs_bold cs_heading_color">
                    <span>{data.about.buttonText}</span>

                    <Icon icon="fa6-solid:arrow-right" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="cs_height_120 cs_height_lg_70" />
        </section>

        {/* =====================================================
				    Why Choose Us
				===================================================== */}

        <section id="why-choose-us" className="cs_city_why" aria-labelledby="city-why-title">
          <div className="cs_height_120 cs_height_lg_70" />

          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-10">
                <div className="cs_city_heading text-center">
                  <p className="cs_city_subtitle cs_bold text-uppercase mb-0">Why Choose Us</p>

                  <div className="cs_height_14" />

                  <h2 id="city-why-title" className="cs_city_section_title cs_heading_color mb-0">
                    TURF PROJECT SUPPORT FOR <span>{data.city.toUpperCase()}</span>
                  </h2>

                  <div className="cs_height_20" />

                  <p className="cs_city_heading_text mb-0">Every property has different dimensions, surfaces, drainage needs, and everyday uses. Our contractor network helps property owners explore turf solutions suited to individual site conditions.</p>
                </div>
              </div>
            </div>

            <div className="cs_height_60 cs_height_lg_40" />

            <div className="row cs_gap_y_30">
              {whyChooseItems.map((item) => (
                <div className="col-xl-3 col-md-6" key={item.title}>
                  <div className="cs_city_why_card">
                    <div className="cs_city_why_icon" aria-hidden="true">
                      <Icon icon={item.icon} />
                    </div>

                    <div className="cs_height_25" />

                    <h3 className="cs_city_why_title cs_heading_color mb-0">{item.title}</h3>

                    <div className="cs_height_14" />

                    <p className="cs_city_why_text mb-0">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="cs_height_120 cs_height_lg_70" />
        </section>

        {/* =====================================================
				    Services
				===================================================== */}

        <section id="city-services" className="cs_city_services" aria-labelledby="city-services-title">
          <div className="cs_height_120 cs_height_lg_70" />

          <div className="container">
            <div className="row align-items-end cs_gap_y_20">
              <div className="col-lg-7">
                <div className="cs_city_heading">
                  <p className="cs_city_subtitle cs_bold text-uppercase mb-0">Our Turf Services</p>

                  <div className="cs_height_14" />

                  <h2 id="city-services-title" className="cs_city_section_title cs_heading_color mb-0">
                    ARTIFICIAL TURF SERVICES IN <span>{data.city.toUpperCase()}</span>
                  </h2>
                </div>
              </div>

              <div className="col-lg-5">
                <p className="cs_city_heading_text mb-0">Explore turf solutions for residential, recreational, pet-friendly, commercial, and specialty outdoor spaces in {data.city}.</p>
              </div>
            </div>

            <div className="cs_height_60 cs_height_lg_40" />

            <div className="row cs_gap_y_30">
              {services.map((service, index) => (
                <div className="col-lg-4 col-md-6" key={service.title}>
                  <Link href={service.link} className="cs_city_service_card" aria-label={`${service.title} in ${data.city}`}>
                    <div className="cs_city_service_top">
                      <div className="cs_city_service_icon" aria-hidden="true">
                        <Icon icon={service.icon} />
                      </div>

                      <span className="cs_city_service_number">{String(index + 1).padStart(2, "0")}</span>
                    </div>

                    <div className="cs_height_30" />

                    <h3 className="cs_city_service_title cs_heading_color mb-0">{service.title}</h3>

                    <div className="cs_height_14" />

                    <p className="cs_city_service_text mb-0">{service.description}</p>

                    <div className="cs_height_25" />

                    <span className="cs_city_service_link cs_bold cs_heading_color">
                      Explore Service
                      <Icon icon="fa6-solid:arrow-right" aria-hidden="true" />
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="cs_height_120 cs_height_lg_70" />
        </section>

        {/* =====================================================
				    FAQs
				===================================================== */}

        <section id="city-faq" className="cs_city_faq" aria-labelledby="city-faq-title">
          <div className="cs_height_120 cs_height_lg_70" />

          <div className="container">
            <div className="row cs_gap_y_40">
              <div className="col-lg-5">
                <div className="cs_city_faq_intro">
                  <p className="cs_city_subtitle cs_bold text-uppercase mb-0">Frequently Asked Questions</p>

                  <div className="cs_height_14" />

                  <h2 id="city-faq-title" className="cs_city_section_title cs_heading_color mb-0">
                    ARTIFICIAL TURF QUESTIONS IN <span>{data.city.toUpperCase()}</span>
                  </h2>

                  <div className="cs_height_20" />

                  <p className="cs_city_heading_text mb-0">Find helpful information about artificial turf planning, property applications, drainage, surfaces, and project options in {data.city}.</p>

                  <div className="cs_height_30" />

                  <Link href="/contact" className="cs_btn cs_style_1 cs_bold cs_heading_color">
                    <span>Ask About Your Project</span>

                    <Icon icon="fa6-solid:arrow-right" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="cs_city_faq_list">
                  {data.faqs.map((faq, index) => (
                    <details className="cs_city_faq_item" key={faq.question} open={index === 0}>
                      <summary className="cs_city_faq_question cs_heading_color">
                        <span>{faq.question}</span>

                        <span className="cs_city_faq_icon" aria-hidden="true">
                          <Icon icon="fa6-solid:plus" />
                        </span>
                      </summary>

                      <div className="cs_city_faq_answer">
                        <p className="mb-0">{faq.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="cs_height_120 cs_height_lg_70" />
        </section>
      </main>

      <Footer />
    </>
  );
}
