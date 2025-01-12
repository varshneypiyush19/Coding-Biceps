import React from "react";
import herosectionimage from "../../assets/herosectionimage.png";
import { FaChevronDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import MainUiSection from "./MainUiSection";
import {uiuxdata} from "../../Data/uiuxdata"
import { FaGears, FaMobileScreen } from "react-icons/fa6";
const UiUxSection = () => {
    const menuItems = [
        'Strategy',
        'Technology',
        'Content',
        'Design',
        'Search',
        'Social',
        'Hosting',
        'Maintenance',
        'Inbound Marketing',
      ];
  return (
    <div className="w-full h-auto ">
      {/* Hero Section */}
      <div
        className="relative h-[70vh] md:h-[60vh] bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${herosectionimage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">UI/UX</h1>
          <div className="absolute bottom-10 animate-bounce">
            <FaChevronDown size={30} />
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full  text-white lg:h-[50vh] h-auto bg-blue-200 flex items-center justify-center py-8">
        <div className="w-10/12  md:w-8/12 lg:w-full h-full flex items-center flex-col text-center">
          <div>
            <p className="text-xl md:text-2xl font-bold mt-12">
              <span className="font-bold text-4xl md:text-6xl">H</span>aving a poorly designed, non-intuitive digital experience can be the breaking point for a potential
            </p>
            <p className="text-xl md:text-2xl font-bold text-center mt-2">
              customer.
            </p>
          </div>

          <div className="mt-8 text-lg md:text-xl px-4">
            <p>This is why it’s important to enhance user experience by working on the interface, usability, accessibility and aesthetics of your</p>
            <p className="mt-3">digital assets. Our UI/UX experts study the logic behind a consumer’s digital journey and use modern design principles to enhance</p>
            <p className="mt-2">their movement, every step of the way.</p>
          </div>
        </div>
      </div>

      {/* UI/UX Main Section */}
      {/* <UiuxmainSection />  */}
      {/* i create custom hook for not creating components like uiuxmain section again and again */}
      <MainUiSection  data = {uiuxdata} icon1 = {FaMobileScreen} icon2={FaGears}/>
      <div className="w-full flex items-center justify-center h-auto mt-10 mb-10">
      <div className="flex flex-wrap justify-center w-[60vw] ">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={`/${item.toLowerCase().replace(' ', '-')}`}
            className="bg-blue-200 text-white px-4 py-2 m-2 rounded-md text-center hover:bg-blue-300"
            activeClassName="font-bold" >
            {item.toUpperCase()}
          </NavLink>
        ))}
      </div>
    </div>
    </div>
  );
};

export default UiUxSection;
