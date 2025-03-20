import React from "react";
import logo from "../assets/img/logo.png";

function Footer() {
  return (
    <section className="flex items-center justify-center w-full px-4 py-8">
  <div className="p-6 w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start gap-y-8 gap-x-16 justify-between">
    {/* left side */}
    <div className="flex flex-col justify-center items-start gap-4 text-center md:text-left">
      <img src={logo} alt="Logo" width={120} />
      <span className="secondaryText text-base md:text-lg">
        Our vision is to make people <br />
        the best place to live for
      </span>
    </div>
    {/* right side */}
    <div className="flex flex-col justify-center items-center md:items-start gap-4 text-center md:text-left">
      <span className="text-[#1f3e72] font-bold text-2xl md:text-3xl">Information</span>
      <span className="secondaryText text-sm md:text-base">
        145, New York, FL 4581, USA
      </span>
      <div className="flex justify-center md:justify-start items-center flex-wrap gap-x-6 gap-y-4 mt-4 font-medium">
        <span>Property</span>
        <span>Services</span>
        <span>Products</span>
        <span>About us</span>
      </div>
    </div>
  </div>
</section>

  );
}

export default Footer;
