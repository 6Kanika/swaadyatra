"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, UtensilsCrossed } from "lucide-react";
import CitySearch from "./CitySearch";
import type { CityMeta } from "@/lib/cityIndex";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Happy Stories", href: "/happy-stories" },
];

export default function NavbarClient({ cities }: { cities: CityMeta[] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer">
                <div className="bg-[#E23744] p-1.5 rounded-lg">
                  <UtensilsCrossed className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold text-[#E23744]">SwaadYatra</span>
              </div>
            </Link>
          </div>

          {/* Search Bar - Desktop/Tablet */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <CitySearch cities={cities} />
          </div>

          {/* Nav Links - Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors font-medium ${
                  pathname === link.href ? "text-[#E23744]" : "text-gray-700 hover:text-[#E23744]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Hamburger - Mobile/Tablet */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden text-gray-700 hover:text-[#E23744] transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Search Bar - Mobile */}
        <div className="md:hidden mt-4">
          <CitySearch cities={cities} />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors font-medium ${
                  pathname === link.href ? "text-[#E23744]" : "text-gray-700 hover:text-[#E23744]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
