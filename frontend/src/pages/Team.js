import React from "react";
import Reviews from "../Components/Reviews";
import { FaChevronDown } from "react-icons/fa";
import image from "../assets/profile.png";
import headerimage from "../assets/our-team-img.webp";
import TeamMember from "../Components/TeamMember";
import Clientspage from "./Clientspage";
import Technology from "../Components/Services/Technology";

const teamMembers = [
  {
    name: "MR. Rohit Kumar",
    title: "CEO",
    image: image, // Replace with the correct path
  },
  {
    name: "MR. Harsh Kumar",
    title: "COO",
    image: image, // Replace with the correct path
  },
  {
    name: "Mr. Suraj Saxena",
    title: "Chief E-commerce Evangelist",

    image: image,
  },
  {
    name: "Mr. Piyush Varshney",
    title: "Project Delivery Head",
    image: image,
  },
  {
    name: "Mr. Mohit Khatri",
    title: "Operations Head",
    image: image,
  },
  {
    name: "Ms. Muskan",
    title: "Project Delivery Head",
    image: image,
  },
  {
    name: "SHIV CHAUHAN",
    title: "Operations Head",
    image: image,
  },
  {
    name: "SAURABH MISHRA",
    title: "Project Delivery Head",
    image: image,
  },
  {
    name: "SHIV CHAUHAN",
    title: "Operations Head",
    image: image,
  },
];

const Team = () => {
  return (
    <div className="w-full">
      {/* Header Section */}
      <Technology />
      <Clientspage />
      <div className="relative flex flex-col items-center justify-center h-64 sm:h-80 md:h-96 lg:h-[28rem]">
        <img
          src={headerimage}
          alt="Header"
          className="w-full h-full object-cover"
        />
        <p className="absolute text-white  font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          OUR TEAM
        </p>
        <div className="absolute bottom-4 animate-bounce text-white">
          <FaChevronDown size={30} />
        </div>
      </div>

      {/* Clients Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-10 py-10">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            title={member.title}
            image={member.image}
          />
        ))}
      </div>

      {/* Reviews Section */}
      {/* <Reviews /> */}
    </div>
  );
};

export default Team;
