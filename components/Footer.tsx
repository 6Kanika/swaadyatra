"use client";

import Link from "next/link";
import { Instagram, Facebook, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Happy Stories", href: "/happy-stories" },
  ];

  const popularCities = [
    "Delhi", "Mumbai", "Varanasi", "Jaipur",
    "Nainital", "Pune", "Amritsar", "Kashmir", "Kolkata", "Puri", "Darjeeling", "Matheran", "Mahabaleshwar", "Lucknow", "Tirupati", "Rameshwaram", "Goa", "Ooty", "Chennai", "Ahmedabad"
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/swaadyatraa/", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61579496769566", label: "Facebook" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <span className="text-2xl md:text-3xl font-bold text-[#E23744] mb-4 block">
              SwaadYatra
            </span>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Discover the best food spots near India's most famous tourist destinations. 
              Your journey to authentic flavors starts here.
            </p>
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-[#E23744]" />
                <span>swaadyatraa@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-[#E23744]" />
                <span>Greater Noida, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#E23744] transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-[#E23744] group-hover:w-4 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Cities */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Popular Cities</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {popularCities.map((city, index) => (
                <li key={index}>
                  <Link
                    href={`/city/${city.toLowerCase()}`}
                    className="text-gray-400 hover:text-[#E23744] transition-colors text-sm"
                  >
                    {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Connect With Us</h3>
            <p className="text-gray-400 text-sm mb-4">
              Follow us on social media for daily food inspiration
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-gray-800 hover:bg-[#E23744] p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>


          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} SwaadYatra. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-[#E23744] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-[#E23744] transition-colors">
                Terms of Service
              </Link>
              <Link href="/disclaimer" className="text-gray-400 hover:text-[#E23744] transition-colors">
                Disclaimer
              </Link>
              <Link href="/sitemap.xml" className="text-gray-400 hover:text-[#E23744] transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
