import React, { useState, useEffect, useRef } from 'react';
import { FaPencilAlt, FaLightbulb, FaMobileAlt, FaCode, FaBullhorn, FaChartLine, FaUser, FaPaintBrush } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import herosectionimage from "../assets/serviceimage.jpg";
import { FaChevronDown } from 'react-icons/fa';
import Services from './Services';


const services = [
  { icon: <FaPencilAlt />, title: 'UI/UX', link: "/ui-ux", description: 'This is why it’s important to enhance user experience by working on the interface...' },
  { icon: <FaLightbulb />, title: 'Technology', link: "/technology", description: 'With technology on your side, the digital...' },
  { icon: <FaMobileAlt />, title: 'App Development', link: "/app-development", description: 'Mobile app is an essential part of all activities...' },
  { icon: <FaCode />, title: 'Web Development', link: "/web-development", description: 'PHP Development, Magento Development...' },
  { icon: <FaBullhorn />, title: 'Digital Marketing', link: "/digital-marketing", description: 'The best way to unravel your website’s true...' },
  { icon: <FaChartLine />, title: 'Quality Assurance', link: "/quality-assurance", description: 'AKS Interactive removes any chance that your...' },
  { icon: <FaUser />, title: 'Dedicated Resources', link: "/dedicated-resources", description: 'Hire Services of Dedicated Developers On Mobile,...' },
  { icon: <FaPaintBrush />, title: 'Branding', link: "/ecommerce", description: 'A brand’s identity is connected with the way it...' },
];

const ServicesCardsComponents = () => {
  const navigate = useNavigate();
  return (

    <div>
        <div
          className="relative h-[70vh] bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${herosectionimage})` }}
        >
          <div className="absolute inset-0  flex flex-col  items-center text-white">
             <div className='flex flex-col items-center justify-center mt-28 gap-y-9'>
            <h1 className="text-2xl md:text-4xl lg:text-6xl  font-bold mb-4 ">Wanna Superchage Your Website?</h1>
            <p className="text-xl md:text-3xl lg:text-4xl font-bold mb-4">Explore Coding-Biceps Expert Services</p>
            </div>
            <div className="absolute bottom-10 animate-bounce">
              <FaChevronDown size={30} />
            </div>
          </div>
        </div>
    <div>{<Services/>}</div>
    </div>
  );
};

export default ServicesCardsComponents;