import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaChevronUp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div  className="mt-20">
      <div className="flex flex-col items-center p-10 bg-richblue-100 text-white justify-center">
        <h1 className="md:text-5xl font-bold  text-2xl sm:text-4xl pb-4 sm:pb-10">
          LET'S WORK TOGETHER!
        </h1>
        <button className=" border px-2  sm:px-8 sm:py-2 hover:bg-white hover:text-richblue-100 rounded-md sm:text-2xl">
          CONTACT
        </button>
      </div>
      <footer className=" relative bg-gray-100 py-6">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-20">
          {/* Left Section - Logo */}
          <div className="flex flex-col items-center lg:items-start space-y-4 lg:space-y-0 lg:flex-row lg:space-x-8">
            <div className="flex flex-col items-center border border-gray-300 rounded-md px-4 py-2">
              <span className="text-sm font-semibold">TOP</span>
              <span className="text-gray-700 font-bold">B2B SERVICES</span>
              <span className="text-xs text-gray-500">INDIA</span>
              <span className="text-xs text-gray-500">2022</span>
            </div>
          </div>

          {/* Center Section - Policies and Copyright */}
          <div className="flex flex-col items-center text-center space-y-4 mt-6 lg:mt-0 lg:space-y-0 lg:space-x-8">
            {/* Policies */}
            <div className="flex flex-wrap justify-center gap-4 text-gray-600 text-sm">
              <a href="link" className="hover:text-red-500">
                POLICIES
              </a>
              <a href="link" className="hover:text-red-500">
                DISCLAIMER
              </a>
              <a href="link" className="hover:text-red-500">
                TERMS
              </a>
              <a href="link" className="hover:text-red-500">
                FAQ'S
              </a>
              <a href="link" className="hover:text-red-500">
                BLOG
              </a>
              <a href="link" className="hover:text-red-500">
                CONTACT
              </a>
            </div>
            {/* Copyright */}
            <div className="text-gray-600 text-sm pt-4">
              Copyright © 2025{" "}
              <span className="text-red-500 font-semibold">
                AKS Interactive Solutions Pvt. Ltd.
              </span>{" "}
              All Rights Reserved.
            </div>
          </div>

          {/* Right Section - Social Media */}
          <div className="flex flex-col items-center mt-6 lg:mt-0 space-y-4">
            <div className="flex space-x-4">
              <FaFacebookF className="bg-richblue-100 text-white hover:scale-125 transition cursor-pointer" />
              <FaInstagram className="bg-richblue-100 text-white hover:scale-125 transition cursor-pointer" />
              <FaTwitter className="bg-richblue-100 text-white hover:scale-125 transition cursor-pointer" />
              <FaLinkedinIn className="bg-richblue-100 text-white hover:scale-125 transition cursor-pointer" />
              <FaYoutube className="bg-richblue-100 text-white hover:scale-125 transition cursor-pointer" />
            </div>
            <span className="text-sm text-red-500 font-semibold text-center">
              STAY CONNECTED WITH OUR SOCIAL NETWORK
            </span>
          </div>
        </div>
        <div className="absolute bottom-10 right-5  animate-bounce text-richblue-100">
          <FaChevronUp size={40} />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
