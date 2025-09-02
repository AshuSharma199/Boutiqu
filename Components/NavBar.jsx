import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <img
          src="https://lh3.googleusercontent.com/a-/ALV-UjUxQGa2qB0wyKS5J1n-DxKUeWR1laF0o4G1prwq_otK7UfR53EV=w90-h90-p-rp-mo-br100"
          className="w-10 rounded-full object-cover"
          alt="Logo"
        />
        <h1 className="text-xl font-bold text-[#d96d67]">Vastram Boutique</h1>
      </div>

      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li><Link to="/" className="hover:text-[#d96d67]">Home</Link></li>
        <li><Link to="/about" className="hover:text-[#d96d67]">About</Link></li>
        <li><Link to="/clothing" className="hover:text-[#d96d67]">Clothing</Link></li>
        <li><Link to="/contact" className="hover:text-[#d96d67]">Contact</Link></li>
        <li><Link to='/Services' className="hover:text-[#d96d67]">Service</Link></li>
        <li><Link to='/Profile' className="hover:text-[#d96d67]">Profile</Link></li>
      </ul>
    </nav>
  );
}
