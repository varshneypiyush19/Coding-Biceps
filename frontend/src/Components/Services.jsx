import React, { useState, useEffect, useRef } from 'react';
import { FaPencilAlt, FaLightbulb, FaMobileAlt, FaCode, FaBullhorn, FaChartLine, FaUser, FaPaintBrush } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const services = [
  { icon: <FaPencilAlt />, title: 'UI/UX', link: "/ui-ux", description: 'This is why it’s important to enhance user experience by ...' },
  { icon: <FaLightbulb />, title: 'Technology', link: "/technology", description: 'With technology on your side, the digital...' },
  { icon: <FaMobileAlt />, title: 'App Development', link: "/app-development", description: 'Mobile app is an essential part of all activities...' },
  { icon: <FaCode />, title: 'Web Development', link: "/web-development", description: 'PHP Development, Magento Development...' },
  { icon: <FaBullhorn />, title: 'Digital Marketing', link: "/digital-marketing", description: 'The best way to unravel your website’s true...' },
  { icon: <FaChartLine />, title: 'Quality Assurance', link: "/quality-assurance", description: 'AKS Interactive removes any chance that your...' },
  { icon: <FaUser />, title: 'Dedicated Resources', link: "/dedicated-resources", description: 'Hire Services of Dedicated Developers On Mobile,...' },
  { icon: <FaPaintBrush />, title: 'Branding', link: "/ecommerce", description: 'A brand’s identity is connected with the way it...' },
];

const Services = () => {
  const [pageVisible, setPageVisible] = useState(false);
    const [iconsVisible, setIconsVisible] = useState(false);
    const navigate = useNavigate();
  
    useEffect(() => {
      setPageVisible(true);
      const timer = setTimeout(() => {
        setIconsVisible(true);
      }, 500);
  
      return () => clearTimeout(timer);
    }, []);
  
    const handleCardClick = (link) => {
      navigate(link);
    };
  
  return (
    <div className="py-12 bg-gray-100 flex items-center justify-center">
       <div
      className={`py-12 bg-gray-100  flex items-center justify-center rounded-md transition-opacity h-full duration-1000 ease-in-out ${
        pageVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className='w-10/12'>
        <h2 className="text-3xl font-bold text-center text-blue-300 mb-8">OUR SERVICES</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg transform transition-all duration-700 hover:bg-blue-400 hover:text-white group cursor-pointer ${
                iconsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => handleCardClick(service.link)}
            >
              <div className="flex justify-center items-center mb-4">
                <div className="text-4xl bg-richblack-25 p-3 rounded-full text-blue-200 transition-all duration-700 ease-in-out group-hover:bg-white group-hover:rounded-md">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">{service.title}</h3>
              <p className="text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Services;