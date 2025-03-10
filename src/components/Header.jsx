import React from "react";
import logo from "../assets/img/logo.png";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="container mx-auto px-4 py-3 bg-neutral-900">
      <div className="flex justify-evenly items-center">
        {/* Logo */}
        <img className="h-16 w-auto" src={logo} alt="Logo" />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-lg text-white">
          <a href="#" className="hover:text-amber-600 transition">
            Home
          </a>
          <a href="#" className="hover:text-amber-600 transition">
            Contact Us
          </a>
          <a href="#" className="hover:text-amber-600 transition">
            About Us
          </a>
          <a href="#" className="hover:text-amber-600 transition">
            Our Clients
          </a>
          <button className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700 transition">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-3">
          <a href="#" className="hover:text-amber-600 transition">
            Home
          </a>
          <a href="#" className="hover:text-amber-600 transition">
            Contact Us
          </a>
          <a href="#" className="hover:text-amber-600 transition">
            About Us
          </a>
          <a href="#" className="hover:text-amber-600 transition">
            Our Clients
          </a>
          <button className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700 transition">
            Login
          </button>
        </div>
      )}
    </nav>
  );
}
