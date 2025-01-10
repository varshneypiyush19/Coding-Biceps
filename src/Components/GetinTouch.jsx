import React from 'react';

const GetinTouch = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 w-full flex justify-center items-center bg-gray-800 bg-opacity-50">
      <div className="relative shadow-lg p-8 bg-white rounded-md w-full max-w-md mx-4 sm:mx-0">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-red-500 text-2xl"
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold text-blue-300 mb-6 text-center">GET IN TOUCH</h2>
        <form className="space-y-4">
          <input
            required
            type="text"
            placeholder="First Name*"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
          />
          <input
            type="text"
            required
            placeholder="Last Name"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
          />
          <input
            required
            type="text"
            placeholder="Company Name *"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
          />
          <input
            required
            type="text"
            placeholder="Phone *"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
          />
          <input
            required
            type="email"
            placeholder="E-mail *"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
          />
          <textarea
            placeholder="Please elaborate your query/requirement *"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
            rows="4"
          />
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>I'm not a robot</span>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-red-600"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetinTouch;