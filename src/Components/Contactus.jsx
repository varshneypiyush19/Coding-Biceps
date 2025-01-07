import React from 'react'
import herosectionimage from "../assets/herosectionimage.png";
import { FaChevronDown } from 'react-icons/fa';
const Contactus = () => {
  return (
    <div className='w-full h-[100vh]'>
        <div
        className="relative h-[40vh] md:h-[60vh] bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${herosectionimage})` }}
      >
        <div className="absolute inset-0  bg-opacity-50 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact</h1>
          <div className="absolute bottom-10 animate-bounce">
            <FaChevronDown size={30} />
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center items-start bg-gray-100 py-12"> */}
      {/* <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-11/12 md:w-10/12 lg:w-8/12"> */}
        
        {/* Form Section */}
        <div className=' flex items-center justify-center '>
        <div className='flex  w-9/12  justify-between'>
        {/* form */}
        <div className="w-5/12    p-8 mt-20 bg-richgrey-5  ">
        <div className='w-11/12  p-3 bg-white pb-10'>
          <h2 className="text-3xl font-bold text-blue-300 mb-6">GET IN TOUCH</h2>
          <form className="space-y-4" >
            <input
             required
              type="text"
              placeholder="First Name*"
              className="w-full p-2  border-richgrey-200 border-2 rounded"
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
              className="w-full p-2 border-2 border-richgrey-200  rounded"
            />
            <input
              required
              type="email"
              placeholder="E-mail *"
              className="w-full p-2 border-2 border-richgrey-200  rounded"
            />
            <textarea
              placeholder="Please elaborate your query/requirement *"
              className="w-full p-2 border-2 border-richgrey-200  rounded"
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
        <div className="w-full md:w-6/12 p-8 bg-gray-50  mt-20">
          <h3 className="text-2xl font-bold text-blue-200 mb-4">
            Coding Biceps Solutions Pvt. Ltd.
          </h3>
          <p>B-1/E 13, 1st Floor, Mohan Cooperative, Mathura Rd, New Delhi, Delhi 110044</p>
          <p className="mt-2">5-N, 2nd Floor, Shahpur Jat, Dada Jungi, New Delhi-110049</p>
          <h4 className="text-2xl font-bold text-blue-200 mt-6">For Sales Query</h4>
          <p>sales@.com</p>
          <h4 className="text-2xl font-bold text-blue-200 mt-4">For Career Related Queries</h4>
          <p>careers@codingbiceps.com</p>
        </div>
      </div>
    </div>
     </div>
    // </div>
  )
}

export default Contactus
