import React from "react";
import { NavLink } from "react-router-dom";

const MainUiSection = ({ data, icon1: Icon1, icon2: Icon2, icon3: Icon3 }) => {
  return (
    <div>
      <ul>
        {data.map((item, index) => (
          <li
            key={item.id}
            className={`flex flex-col md:flex-row w-full h-auto md:h-[60vh] ${
              index % 2 === 0 ? "" : "md:flex-row-reverse"
            }`}
          >
            {/* Background image or icon */}
            <div
              className="w-full md:w-6/12 h-60 md:h-full flex items-center justify-center bg-cover bg-center"
              style={
                item.id === 3 || item.id === 6 || item.id === 8
                  ? {}
                  : { backgroundImage: `url(${item.image})` }
              }
            >
              {item.image && item.id === 3 && (
                <Icon1 className="text-4xl sm:text-6xl lg:text-9xl text-blue-200" />
              )}
              {item.image && item.id === 6 && (
                <Icon2 className="text-4xl sm:text-6xl lg:text-9xl text-blue-200" />
              )}
              {item.image && item.id === 8 && (
                <Icon3 className="text-4xl sm:text-6xl lg:text-9xl text-blue-200" />
              )}
            </div>

            {/* Content */}
            <div className="relative w-full md:w-6/12 flex flex-col items-start p-4 md:p-8 lg:p-12 justify-center bg-richblack-25">
              <div className="w-full md:w-11/12 lg:w-10/12">
                <p className="text-blue-200 font-bold text-xl sm:text-2xl lg:text-3xl">
                  {item.heading}
                </p>
                {item.description && (
                  <p className="text-gray-600 mt-4 text-sm sm:text-base lg:text-lg">
                    {item.description}
                  </p>
                )}
              </div>
              {item.links && (
                <div className="mt-4">
                  <NavLink
                    to={`/${item.heading.toLowerCase().replace(" ", "-")}`}
                    className="text-blue-200 font-bold"
                  >
                    {item.links}
                  </NavLink>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainUiSection;