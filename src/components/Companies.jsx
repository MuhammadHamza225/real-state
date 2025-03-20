import React from "react";
import cm10 from "../assets/img/cm10.png";
import cm4 from "../assets/img/cm4.png";
import cm6 from "../assets/img/cm6.png";
import cm7 from "../assets/img/cm7.png";

function Companies() {
  return (
    <section className="m-4">
      <div className="flex flex-wrap justify-center gap-4 sm:justify-evenly">
        <img className="w-28" src={cm10} alt="" />
        <img className="w-40" src={cm4} alt="" />
        <img className="w-30" src={cm6} alt="" />
        <img className="w-56" src={cm7} alt="" />
      </div>
    </section>
  );
}

export default Companies;
