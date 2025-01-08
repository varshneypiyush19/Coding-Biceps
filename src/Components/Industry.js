import React from "react";

const Industry = ({ icon, title }) => {
  return (
    <div className="bg-white items-center justify-center grid py-12 m-4 rounded-lg shadow-lg">
      <div className="items-center justify-center flex  object-contain">
        {icon}
        <i src={icon}></i>
      </div>
      <label>{title}</label>
    </div>
  );
};

export default Industry;
