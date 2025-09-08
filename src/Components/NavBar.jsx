import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="https://lh3.googleusercontent.com/a-/ALV-UjUxQGa2qB0wyKS5J1n-DxKUeWR1laF0o4G1prwq_otK7UfR53EV=w90-h90-p-rp-mo-br100"
            className="w-10 rounded-full object-cover"
            alt="Logo"
          />
          <h1 className="text-xl font-bold text-[#d96d67]">Vastram Boutique</h1>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-[#d96d67]">Home</Link></li>
          <li><Link to="/about" className="hover:text-[#d96d67]">About</Link></li>
          <li><Link to="/services" className="hover:text-[#d96d67]">Service</Link></li>
          <li><Link to="/clothing" className="hover:text-[#d96d67]">Clothing</Link></li>
          <li><Link to="/contact" className="hover:text-[#d96d67]">Contact</Link></li>
          <li><Link to="/profile" className="hover:text-[#d96d67]">Profile</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setOpen(!open)} 
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Links */}
      {open && (
        <ul className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 text-gray-700 font-medium">
          <li><Link to="/" className="block hover:text-[#d96d67]" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link to="/about" className="block hover:text-[#d96d67]" onClick={() => setOpen(false)}>About</Link></li>
          <li><Link to="/services" className="block hover:text-[#d96d67]" onClick={() => setOpen(false)}>Service</Link></li>
          <li><Link to="/clothing" className="block hover:text-[#d96d67]" onClick={() => setOpen(false)}>Clothing</Link></li>
          <li><Link to="/contact" className="block hover:text-[#d96d67]" onClick={() => setOpen(false)}>Contact</Link></li>
          <li><Link to="/profile" className="block hover:text-[#d96d67]" onClick={() => setOpen(false)}>Profile</Link></li>
        </ul>
      )}
    </nav>
  );
}