import Image from "next/image";
import Link from "next/link";

const navigation = [
  {
    label: "ABOUT",
    href: "#about",
  },
  {
    label: "OUR TEAM",
    href: "#team",
  },
  {
    label: "SPECIALTIES",
    href: "#specialties",
  },
  {
    label: "METHODS",
    href: "#methods",
  },
  {
    label: "FAQS",
    href: "#faqs",
  },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header-inner">

        {/* Logo */}
        <Link
          href="/"
          className="site-logo"
          aria-label="Conejo Valley Family Counseling"
        >
          <Image
            src="/images/logo.webp"
            alt="Conejo Valley Family Counseling"
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
            <Link
              key={item.label}
              href={item.href}
              className="navigation-link"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="#contact"
            className="contact-link"
          >
            CONTACT
          </Link>
        </nav>

        {/* Mobile Menu */}
        <button
          type="button"
          className="mobile-menu-button"
          aria-label="Open menu"
        >
          <span />
          <span />
        </button>

      </div>
    </header>
  );
}