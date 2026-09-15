"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  {
    label: "ABOUT",
    href: "#about",
  },
  {
    label: "SERVICES",
    href: "#specialties",
    dropdown: [
      {
        label: "Anxiety & Stress",
        href: "#specialties",
      },
      {
        label: "Trauma Therapy",
        href: "#specialties",
      },
      {
        label: "Burnout & Perfectionism",
        href: "#specialties",
      },
    ],
  },
  {
    label: "APPROACH",
    href: "#methods",
    dropdown: [
      {
        label: "How I Work",
        href: "#methods",
      },
      {
        label: "Therapy Modalities",
        href: "#methods",
      },
      {
        label: "My Philosophy",
        href: "#methods",
      },
    ],
  },
  {
    label: "OUR OFFICE",
    href: "#office",
  },
  {
    label: "FAQS",
    href: "#faqs",
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(
    null
  );

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="site-header">
      <div className="site-header-inner">

        {/* Logo */}
        <Link
          href="/"
          className="site-logo"
          aria-label="Dr. Maya Reynolds, PsyD"
          onClick={closeMenu}
        >
          <Image
            src="/images/newlogo.png"
            alt="Dr. Maya Reynolds, PsyD"
            width={230}
            height={60}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="desktop-navigation"
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() =>
                item.dropdown &&
                setActiveDropdown(item.label)
              }
              onMouseLeave={() =>
                item.dropdown &&
                setActiveDropdown(null)
              }
            >
              <Link
                href={item.href}
                className="navigation-link flex items-center gap-[7px]"
              >
                {item.label}

                {item.dropdown && (
                  <span
                    className={`text-[10px] transition-transform duration-200 ${
                      activeDropdown === item.label
                        ? "rotate-180"
                        : ""
                    }`}
                  >
                    ↓
                  </span>
                )}
              </Link>

              {/* Dropdown */}
              {item.dropdown &&
                activeDropdown === item.label && (
                  <div
                    className="
                      absolute left-1/2 top-full z-[300]
                      w-[245px] -translate-x-1/2
                      pt-5
                    "
                  >
                    <div
                      className="
                        overflow-hidden
                        border border-[#ded9d0]
                        bg-[#f7f5ef]
                        shadow-[0_18px_40px_rgba(0,0,0,0.08)]
                      "
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.label}
                          href={dropdownItem.href}
                          className="
                            block
                            border-b border-[#e4dfd7]
                            px-6 py-4
                            font-body
                            text-[12px]
                            tracking-[0.08em]
                            text-[#3d3c3a]
                            transition-all
                            duration-200
                            last:border-b-0
                            hover:bg-[#ebe3d6]
                            hover:pl-7
                          "
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
            </div>
          ))}

          {/* Contact */}
          <Link
            href="#contact"
            className="contact-link"
          >
            CONTACT
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="mobile-menu-button"
          aria-label={
            isMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
            setActiveDropdown(null);
          }}
        >
          <span
            style={{
              transform: isMenuOpen
                ? "translateY(4px) rotate(45deg)"
                : "none",
            }}
          />

          <span
            style={{
              transform: isMenuOpen
                ? "translateY(-4px) rotate(-45deg)"
                : "none",
            }}
          />
        </button>
      </div>

      {/* =====================================================
          MOBILE NAVIGATION
          ===================================================== */}

      {isMenuOpen && (
        <nav
          className="
            absolute left-0 top-full z-[200]
            w-full
            border-t border-[#ded9d0]
            bg-[#f7f5ef]
            px-6 py-6
            shadow-[0_12px_30px_rgba(0,0,0,0.06)]
            md:hidden
          "
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col">

            {navigation.map((item) => (
              <div
                key={item.label}
                className="border-b border-[#ded9d0]"
              >
                {item.dropdown ? (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.label
                            ? null
                            : item.label
                        )
                      }
                      className="
                        flex w-full
                        items-center justify-between
                        py-5
                        text-left
                        font-body
                        text-[13px]
                        tracking-[0.14em]
                        text-[#3d3c3a]
                      "
                    >
                      {item.label}

                      <span
                        className={`text-[12px] transition-transform duration-200 ${
                          activeDropdown === item.label
                            ? "rotate-180"
                            : ""
                        }`}
                      >
                        ↓
                      </span>
                    </button>

                    {activeDropdown === item.label && (
                      <div className="pb-3">
                        {item.dropdown.map(
                          (dropdownItem) => (
                            <Link
                              key={dropdownItem.label}
                              href={dropdownItem.href}
                              onClick={closeMenu}
                              className="
                                block
                                py-3 pl-4
                                font-body
                                text-[12px]
                                tracking-[0.08em]
                                text-[#66625d]
                              "
                            >
                              {dropdownItem.label}
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="
                      block
                      py-5
                      font-body
                      text-[13px]
                      tracking-[0.14em]
                      text-[#3d3c3a]
                    "
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile Contact */}
            <Link
              href="#contact"
              onClick={closeMenu}
              className="
                mt-6
                flex h-[52px]
                items-center justify-center
                rounded-[50%]
                border border-[#464646]
                font-body
                text-[12px]
                tracking-[0.14em]
                text-[#444]
              "
            >
              CONTACT
            </Link>

          </div>
        </nav>
      )}
    </header>
  );
}