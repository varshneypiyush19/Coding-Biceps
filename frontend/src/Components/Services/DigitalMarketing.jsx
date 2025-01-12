import React from "react";
import herosectionimage from "../../assets/digitalmarketingimage.jpg";
import { FaChevronDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import MainUiSection from "./MainUiSection";
import {uiuxdata} from "../../Data/digitalmarketingdata"
import { FaArrowPointer } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";
import { IoChatbubbles } from "react-icons/io5";
const DigitalMarketing = () => {
    const menuItems = [
        'Strategy',
        'UI / UX',
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
        className="relative h-[50vh] md:h-[60vh] bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${herosectionimage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Digital Marketing</h1>
          <div className="absolute bottom-10 animate-bounce">
            <FaChevronDown size={30} />
          </div>
        </div>
      </div>
    
      {/* Text Section */}
      <div className="w-full  text-white  pb-20 h-auto bg-blue-200 flex items-center justify-center py-8">
        <div className="w-10/12  md:w-8/12 lg:w-full h-full flex items-center flex-col text-center">
          <div className="w-11/12">
            <p className="text-xl md:text-2xl font-bold mt-12">
              <span className="font-bold text-4xl md:text-6xl">T</span>he best way to unravel your website’s true potential is to enhance its discoverability. From increasing website visits, sessions and ultimately improving your ranking on search engine results page (SERP), our search marketing solutions ensure that your business is set apart from the crowd and can be easily found.
            </p>
          </div>
        </div>
      </div>
    
      {/* UI/UX Main Section */}
      {/* <UiuxmainSection />  */}
      {/* i create custom hook for not creating components like uiuxmain section again and again */}
      <MainUiSection  data = {uiuxdata} icon1 = {FaArrowPointer} icon2={FaDollarSign} icon3 ={IoChatbubbles}/>
      <div className="w-full flex items-center justify-center h-[30vh]">
      <div className="flex flex-wrap justify-center w-[60vw]">
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
    </div>)
}

export default DigitalMarketing
