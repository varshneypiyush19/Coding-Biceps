import React from "react";

const ClientWebsite = ({ image }) => {
  return (
    <div className="sticky top-0 w-fit flex items-center justify-center z-10 ">
      <img src={image} alt="clientwebsite"></img>
    </div>
  );
};

export default ClientWebsite;
