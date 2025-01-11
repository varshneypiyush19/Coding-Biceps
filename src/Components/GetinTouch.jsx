import React, { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const GetinTouch = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    companyname: '',
    contactno: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/v1/contactus', formData);
      console.log('Response:', response); // Debugging: Check the response
      if (response.status === 200) { // Ensure the response status is 200
        toast.success('Message sent successfully!');
        console.log('Data sent successfully:', response.data);
        setFormData({
          firstname: '',
          lastname: '',
          companyname: '',
          contactno: '',
          email: '',
          message: '',
        });
        onClose();
      } else {
        toast.error('Unexpected response from server.');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Error sending data:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 w-full flex justify-center items-center bg-gray-800 bg-opacity-50">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="relative shadow-lg p-8 bg-white rounded-md w-full max-w-md mx-4 sm:mx-0">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-red-500 text-2xl"
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold text-blue-300 mb-6 text-center">GET IN TOUCH</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            required
            type="text"
            name="firstname"
            placeholder="First Name*"
            value={formData.firstname}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
          />
          <input
            type="text"
            name="lastname"
            required
            placeholder="Last Name"
            value={formData.lastname}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
          />
          <input
            required
            type="text"
            name="companyname"
            placeholder="Company Name *"
            value={formData.companyname}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
          />
          <input
            required
            type="text"
            name="contactno"
            placeholder="Phone *"
            value={formData.contactno}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
          />
          <input
            required
            type="email"
            name="email"
            placeholder="E-mail *"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
          />
          <textarea
            name="message"
            placeholder="Please elaborate your query/requirement *"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
            rows="4"
          />
          <button
            type="submit"
            className="w-full hover:scale-95 transition-all duration-300 bg-blue-500 text-white py-2 rounded hover:bg-red-600"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetinTouch;