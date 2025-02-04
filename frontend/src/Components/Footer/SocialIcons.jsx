import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="">
      <div
        className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-richblue-200 mx-1.5 text-xl 
        duration-300 hover:scale-125"
      >
        <FaFacebookF />
      </div>
      <div
        className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-richblue-200 mx-1.5 text-xl 
        duration-300 hover:scale-125"
      >
        <FaInstagram />
      </div>
      <div
        className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-richblue-200 mx-1.5 text-xl 
        duration-300 hover:scale-125"
      >
        <FaTwitter />
      </div>
      <div
        className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-richblue-200 mx-1.5 text-xl 
        duration-300 hover:scale-125"
      >
        <FaLinkedinIn />
      </div>
      <div
        className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-richblue-200 mx-1.5 text-xl 
        duration-300 hover:scale-125"
      >
        <FaYoutube />
      </div>
    </div>
  );
};

export default SocialIcons;
