import React from "react";
import { FaLinkedin } from "react-icons/fa";

const TeamMember = ({ name, title, image }) => {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-black object-cover border-2 border-gray-200"
      />
      {/* Name */}
      <p className="mt-4 font-bold text-lg sm:text-xl text-red-600">{name}</p>
      {/* Title */}
      <p className="text-sm sm:text-base text-gray-600">{title}</p>
      {/* LinkedIn Icon */}
      <a
        href="link"
        className="mt-2 text-blue-600 hover:text-blue-800"
        aria-label={`LinkedIn profile of ${name}`}
      >
        <FaLinkedin size={20} />
      </a>
    </div>
  );
};
export default TeamMember;
