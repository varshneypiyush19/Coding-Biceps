import React from "react";

const Clients = ({ image }) => {
  return (
    <div className="w-full h-full border border-e-richblack-300 border-l-richblack-300 border-t-richblack-300 border-b-richblack-300 rounded-md hover:scale-75 transition duration-300">
      <img
        src={image}
        alt="Client Logo"
        className="w-full h-auto object-cover rounded-lg"
      />
    </div>
  );
};

export default Clients;
