"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SiteLogo from "@/components/site-logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
];

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="w-full fixed top-0 left-0 z-[100]">
      <nav
        className={`flex flex-col w-full md:w-11/12 lg:w-4/5 xl:w-3/4 max-w-5xl mx-auto text-white rounded-b-3xl transition-shadow duration-300 ${isScrolled ? "bg-[#00418d] shadow-xl" : "bg-[#335f92] shadow-lg"
          }`}
      >
        <div className="flex items-center justify-between gap-4 px-5 py-3">
          {/* Brand colours: #69226F wordmark, black tagline */}
          <SiteLogo variant="dark" height={60} className="md:hidden" />
          <SiteLogo variant="dark" height={70} className="hidden md:inline-flex" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative group py-3 px-3 lg:px-4 text-sm lg:text-base transition-colors ${pathname === link.href
                    ? "text-yellow-400 font-semibold"
                    : "text-white hover:text-yellow-200"
                  }`}
              >
                <span>{link.label}</span>
                <span
                  className={`absolute left-0 bottom-1 w-full h-0.5 bg-gradient-to-r from-blue-300 to-yellow-400 transform origin-left transition-transform duration-300 ${pathname === link.href
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                    }`}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-center pb-4 border-t border-white/20">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-3 text-lg w-full text-center ${pathname === link.href ? "text-yellow-400 font-semibold" : "text-white"
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
