"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const data = {
  logo: "/assets/img/logo/la-turf-installers-footer.svg",
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
          label: "RESIDENTIAL TURF",
          href: "/services/residential-turf-installation",
        },
        {
          label: "PET-FRIENDLY TURF",
          href: "/services/pet-friendly-turf-installation",
        },
        {
          label: "PUTTING GREEN",
          href: "/services/putting-green-installation",
        },
        {
          label: "COMMERCIAL TURF",
          href: "/services/commercial-turf-installation",
        },
        {
          label: "PLAYGROUND TURF",
          href: "/services/playground-turf-installation",
        },
        {
          label: "ROOFTOP TURF",
          href: "/services/rooftop-deck-patio-turf-installation",
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
          label: "TERMS &amp; CONDITIONS",
          href: "/terms-conditions",
        },
        {
          label: "ACCESSIBILITY STATEMENT",
          href: "/accessibility-statement",
        },
      ],
    },

    { label: "CONTACT", href: "/contact" },
  ],
};

const Header2 = () => {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
  const [openMobileSubmenuIndex, setOpenMobileSubmenuIndex] = useState<number | null>(null);
  const [isSticky, setIsSticky] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleOpenMobileSubmenu = (index: number): void => {
    setOpenMobileSubmenuIndex(openMobileSubmenuIndex === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100 ? "cs_sticky_active" : "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`cs_site_header cs_style_1 cs_color_1 cs_sticky_header ${isSticky ? isSticky : ""}`}>
        <div className="cs_main_header">
          <div className="container">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <Link className="cs_site_branding" href={data.logoUrl}>
                  <Image src={data.logo} alt="Logo" width={210} height={80} className="cs_header2_logo object-contain" />
                </Link>
              </div>
              <div className="cs_main_header_center">
                <div className="cs_nav cs_heading_color">
                  <nav className={`cs_nav_list_wrap text-uppercase ${isShowMobileMenu ? "cs_active" : ""}`}>
                    <ul className={`cs_nav_list`}>
                      {data.menuItems.map((item, index) => (
                        <li key={index} className={item.children ? "menu-item-has-children" : ""}>
                          <Link href={item.href}>{item.label}</Link>
                          {item.children && (
                            <>
                              <ul
                                style={{
                                  display: openMobileSubmenuIndex === index ? "block" : "none",
                                }}
                              >
                                {item.children.map((child, i) => (
                                  <li key={i} onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}>
                                    <Link href={child.href}>{child.label}</Link>
                                  </li>
                                ))}
                              </ul>
                              <span className={`cs_munu_dropdown_toggle ${openMobileSubmenuIndex === index ? "active" : ""}`} onClick={() => handleOpenMobileSubmenu(index)}>
                                <span />
                              </span>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <span className={`cs_menu_toggle ${isShowMobileMenu && "cs_toggle_active"}`} onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}>
                    <span></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header2;
