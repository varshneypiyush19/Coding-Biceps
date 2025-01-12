import React from 'react';
import herosectionimage from "../assets/herosectionimage.png";
import { FaChevronDown } from 'react-icons/fa';
import { NavLink } from "react-router-dom";

const Contactus = () => {
  const menuItems = [
    'Home',
    'About US',
    'Core Values',
    'Team',
    'Clients',
    'Partners',
    'Technology',
    'UI / UX',
    'Design',
    'Search',
    'Social',
    'Hosting',
    'Inbound Marketing',
    'Websites',
    'Mobile',
    'Careers'
  ];

  return (
    <div className='w-full'>
      <div
        className="relative h-[40vh] md:h-[60vh] bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${herosectionimage})` }}
      >
        <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact</h1>
          <div className="absolute bottom-10 animate-bounce">
            <FaChevronDown size={30} />
          </div>
        </div>
      </div>
      
      <div className='flex flex-col md:flex-row items-center justify-center mt-10'>
        <div className='flex flex-col lg:flex-row md:flex-col w-full md:w-9/12 justify-between'>
          {/* Form Section */}
          <div className="w-full md:w-11/12 p-4 md:p-8 mt-10 md:mt-0 bg-richgrey-5 flex justify-center items-center">
            <div className='w-full md:w-11/12 p-3 bg-white pb-10'>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-300 mb-6">GET IN TOUCH</h2>
              <form className="space-y-4">
                <input
                  required
                  type="text"
                  placeholder="First Name*"
                  className="w-full p-2 border-richgrey-200 border-2 rounded"
                />
                <input
                  type="text"
                  required
                  placeholder="Last Name"
                  className="w-full p-2 border-2 border-richgrey-200 rounded"
                />
                <input
                  required
                  type="text"
                  placeholder="Company Name *"
                  className="w-full p-2 border-2 border-richgrey-200 rounded"
                />
                <input
                  required
                  type="text"
                  placeholder="Phone *"
                  className="w-full p-2 border-2 border-richgrey-200 rounded"
                />
                <input
                  required
                  type="email"
                  placeholder="E-mail *"
                  className="w-full p-2 border-2 border-richgrey-200 rounded"
                />
                <textarea
                  placeholder="Please elaborate your query/requirement *"
                  className="w-full p-2 border-2 border-richgrey-200 rounded"
                  rows="4"
                />
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>I'm not a robot</span>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded hover:bg-red-600 mb-10"
                >
                  Send
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="w-full md:w-6/12 p-4 md:p-8 bg-gray-50 mt-10 md:mt-0">
            <h3 className="text-xl md:text-2xl font-bold text-blue-200 mb-4">
              Coding Biceps Solutions Pvt. Ltd.
            </h3>
            <p>B-1/E 13, 1st Floor, Mohan Cooperative, Mathura Rd, New Delhi, Delhi 110044</p>
            <p className="mt-2">5-N, 2nd Floor, Shahpur Jat, Dada Jungi, New Delhi-110049</p>
            <h4 className="text-xl md:text-2xl font-bold text-blue-200 mt-6">For Sales Query</h4>
            <p>sales@.com</p>
            <h4 className="text-xl md:text-2xl font-bold text-blue-200 mt-4">For Career Related Queries</h4>
            <p>careers@codingbiceps.com</p>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="flex justify-center mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14010.762569808701!2d77.21891260650598!3d28.609056060837684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sIndia%20Gate!5e0!3m2!1sen!2sin!4v1736322576626!5m2!1sen!2sin"
          width="80%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="w-full flex items-center justify-center mt-10">
        <div className="flex flex-wrap justify-center w-full md:w-[60vw]">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={`/${item.toLowerCase().replace(' ', '-')}`}
              className="bg-blue-200 text-white px-4 py-2 m-2 rounded-md text-center hover:bg-blue-300"
              activeClassName="font-bold"
            >
              {item.toUpperCase()}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contactus;