import React from "react";
import image from "../assets/client-logo-img.jpg";
import headerimage from "../assets/our-clients-img.webp";
import Clients from "../Components/Clients";
import { FaChevronDown } from "react-icons/fa";
import Reviews from "../Components/Reviews";

const Clientspage = () => {
  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="relative flex flex-col items-center h-64 sm:h-80 md:h-96 lg:h-[28rem]">
        <img
          src={headerimage}
          alt="Header"
          className="w-full h-full object-cover"
        />
        <p className="absolute text-white pt-40 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          OUR CLIENTS
        </p>
        <div className="absolute bottom-4 animate-bounce text-white">
          <FaChevronDown size={30} />
        </div>
      </div>

      {/* Clients Grid */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-10 sm:py-12 md:py-16 lg:py-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        {Array.from({ length: 20 }, (_, index) => (
          <Clients key={index} image={image} />
        ))}
      </div>

      {/* Reviews Section */}
      <Reviews />
    </div>
  );
};

export default Clientspage;
