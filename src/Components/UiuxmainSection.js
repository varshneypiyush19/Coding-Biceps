import React from 'react';
import { uiuxdata } from '../Data/uiuxdata';
import { FaGears } from "react-icons/fa6";
import { FaMobileScreen } from "react-icons/fa6";


const UiuxmainSection = () => {
  return (
    <div className=" px-4">
      <ul>
        {uiuxdata.map((data, index) => (
          <li
            key={data.id}
            className={`flex flex-col md:flex-row w-full h-auto md:h-[60vh] ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
          >
            {/* Background image or icon */}
            <div className="w-full md:w-6/12 h-60 md:h-full flex items-center justify-center bg-cover bg-center"
              style={data.id === 3 || data.id === 6 ? {} : { backgroundImage: `url(${data.image})` }}
            >
              {data.id === 3 && <FaMobileScreen className='text-6xl md:text-9xl text-blue-200' />}
              {data.id === 6 && <FaGears className='text-6xl md:text-9xl text-blue-200' />}
            </div>

            {/* Content */}
            <div className="w-full md:w-6/12 flex flex-col items-center justify-center bg-richblack-25">
              <div className="w-11/12 md:w-10/12 p-4">
                <p className="text-blue-200 font-bold text-2xl md:text-3xl">{data.heading}</p>
                <p className="text-gray-600 mt-4 w-full md:w-9/12 text-base md:text-lg">{data.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UiuxmainSection;