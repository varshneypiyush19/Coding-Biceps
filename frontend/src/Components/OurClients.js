import React from "react";
import image from "../assets/client-logo-img.jpg";
import Clients from "./Clients";
const OurClients = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center z-10 p-4 md:p-10">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-6xl text-richblue-100 pb-6 sm:pb-8 text-center">
        Our Clients
      </h2>

      {/* Clients Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        <Clients image={image} />
        <Clients image={image} />
        <Clients image={image} />
        <Clients image={image} />
        <Clients image={image} />
        <Clients image={image} />
        <Clients image={image} />
        <Clients image={image} />
        <Clients image={image} />
        <Clients image={image} />
        <Clients image={image} />
        <Clients image={image} />
        <Clients image={image} />
        <Clients image={image} />
        <Clients image={image} />
        <Clients image={image} />
        <Clients image={image} />
        <Clients image={image} />
        <Clients image={image} />
        <Clients image={image} />
      </div>
    </div>
  );
};

export default OurClients;
