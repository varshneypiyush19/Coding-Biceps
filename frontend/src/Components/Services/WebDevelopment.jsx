import React from "react";
import herosectionimage from "../../assets/webdevimage.jpg";
import { FaChevronDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import MainUiSection from "./MainUiSection";
import {uiuxdata} from "../../Data/webdevdata"
import { FaShoppingCart ,FaWrench  } from "react-icons/fa";

const WebDevelopment = () => {
    const menuItems = [
        'App Development',
        'E-Commerce',
        'Content-Mangement System',
        'Maintenance',
        'Hosting'
       
      ];
    return (
    <div className="w-full h-auto ">
      {/* Hero Section */}
      <div
        className="relative h-[50vh] md:h-[60vh] bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${herosectionimage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Web Development</h1>
          <div className="absolute bottom-10 animate-bounce">
            <FaChevronDown size={30} />
          </div>
        </div>
      </div>
    
      {/* UI/UX Main Section */}
      {/* <UiuxmainSection />  */}
      {/* i create custom hook for not creating components like uiuxmain section again and again */}
      <MainUiSection  data = {uiuxdata} icon1 = {FaShoppingCart} icon2={FaWrench}/>
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

export default WebDevelopment
