import React from "react";
import logo from "../assets/img/logo.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header({
  scrollToResidens,
  scrollToContact,
  scrollToValue,
  scrollToStarted,
}) {
  console.log("scrollToResidens:", scrollToResidens);
  console.log("scrollToContact:", scrollToContact);
  console.log("scrollToValue:", scrollToValue);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-4 py-3 bg-neutral-900 w-full">
      <div className="flex justify-evenly items-center">
        {/* Logo */}
        <img className="h-16 w-auto" src={logo} alt="Logo" />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-lg text-white">
          <button
            onClick={scrollToResidens}
            href="#"
            className="hover:text-orange-400 transition"
          >
            Residencies
          </button>
          <button
            onClick={scrollToValue}
            href="#"
            className="hover:text-orange-400 transition"
          >
            Our Value
          </button>
          <button
            onClick={scrollToContact}
            href="#"
            className="hover:text-orange-400 transition"
          >
            Contact Us
          </button>
          <button
            onClick={scrollToStarted}
            href="#"
            className="hover:text-orange-400 transition"
          >
            Get Started
          </button>
          <button
            onClick={() => window.open("https://wa.me/923170125388", "_blank")}
            className="bg-orange-400 text-white px-4 py-1 rounded hover:bg-amber-700 transition cursor-pointer"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="text-[#ffa500] md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28}  /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-3">
          <div
            onClick={() => {
              scrollToResidens();
              setIsOpen(false);
            }}
            className="text-white hover:text-[#ffa500] transition cursor-pointer"
          >
            Residencies
          </div>
          <div
            onClick={() => {
              scrollToValue();
              setIsOpen(false);
            }}
            className="text-white hover:text-[#ffa500] transition"
          >
            Our Value
          </div>
          <div
            onClick={() => {
              scrollToContact();
              setIsOpen(false);
            }}
            className="text-white hover:text-[#ffa500] transition"
          >
            Contact Us
          </div>
          <div
            onClick={() => {
              scrollToStarted();
              setIsOpen(false);
            }}
            className="text-white hover:text-[#ffa500] transition"
          >
            Get Started
          </div>
          <button
            onClick={() => window.open("https://wa.me/923001234567", "_blank")}
            className="bg-[#ffa500] text-white px-4 py-2 rounded hover:bg-amber-700 transition"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}
