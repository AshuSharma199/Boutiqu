import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ Import Link

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-10 mt-10 w-full">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold text-[#d96d67] mb-3">About Us</h3>
          <p className="text-sm leading-relaxed">
            Vastram Boutique brings you the latest traditional and modern clothing
            designs. Our mission is to make fashion accessible, elegant, and timeless.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#d96d67] mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-[#d96d67]">Home</Link></li>
            <li><Link to="/clothing" className="hover:text-[#d96d67]">Clothing</Link></li>
            <li><Link to="/about" className="hover:text-[#d96d67]">About</Link></li>
            <li><Link to="/contact" className="hover:text-[#d96d67]">Contact</Link></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold text-[#d96d67] mb-3">Contact Us</h3>
          <p className="text-sm">📍 LG 10, Pan Oasis Market, Sector 70, Noida, Uttar Pradesh 201301</p>
          <p className="text-sm">📞 +91 78689 5452256</p>
          <p className="text-sm">✉️ support@vastram.com</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 text-xl">
            <a href="#" className="hover:text-[#d96d67]"><FaFacebook /></a>
            <a href="#" className="hover:text-[#d96d67]"><FaInstagram /></a>
            <a href="#" className="hover:text-[#d96d67]"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Vastram Boutique. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
