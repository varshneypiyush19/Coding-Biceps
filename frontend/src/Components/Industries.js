import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa6";
import Industry from "./Industry";
import OurClients from "./OurClients";
import Reviews from "./Reviews";
// import ClientsTestimony from "./ClientsTestimony";

const Industries = () => {
  return (
    <div className="sticky top-0 w-full items-center bg-white justify-center z-10">
      {/* <div className="bg-richblue-100   h-screen p-12">
        <h1 className="text-5xl text-white pb-10 pl-4">INDUSTRIES WE SERVE</h1>
        <div className="grid grid-cols-4 ">
          <Industry icon={<FaBriefcase />} title={"B2B"} />
          <Industry icon={<FaUsers />} title={"B2C"} />
          <Industry icon={<FaShoppingCart />} title={"E-Commerce"} />
          <Industry icon={<FaDatabase />} title={"Enterprise"} />
          <Industry icon={<FaBook />} title={"Education"} />
          <Industry icon={<FaHeart />} title={"Non-Profit"} />
          <Industry icon={<FaRocket />} title={"Startups"} />
          <Industry icon={<FaRegHandshake />} title={"Hospitality"} />
          <Industry icon={<FaTruck />} title={"Logistics"} />
          <Industry icon={<FaRegHandshake />} title={"Hospitality"} />
          <Industry icon={<FaTruck />} title={"Logistics"} />
          <Industry icon={<FaRegHandshake />} title={"Hospitality"} />
        </div>
      </div> */}
      <div className="bg-richblue-100 min-h-screen p-6 sm:p-8 md:p-12">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-white pb-6 sm:pb-8 md:pb-10 text-center md:text-left">
          INDUSTRIES WE SERVE
        </h1>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          <Industry icon={<FaBriefcase />} title={"B2B"} />
          <Industry icon={<FaUsers />} title={"B2C"} />
          <Industry icon={<FaShoppingCart />} title={"E-Commerce"} />
          <Industry icon={<FaDatabase />} title={"Enterprise"} />
          <Industry icon={<FaBook />} title={"Education"} />
          <Industry icon={<FaHeart />} title={"Non-Profit"} />
          <Industry icon={<FaRocket />} title={"Startups"} />
          <Industry icon={<FaRegHandshake />} title={"Hospitality"} />
          <Industry icon={<FaTruck />} title={"Logistics"} />
          <Industry icon={<FaRegHandshake />} title={"Hospitality"} />
          <Industry icon={<FaTruck />} title={"Logistics"} />
          <Industry icon={<FaRegHandshake />} title={"Hospitality"} />
        </div>
      </div>

      <OurClients />
      <Reviews />
      {/* <ClientsTestimony /> */}
    </div>
  );
};

export default Industries;
