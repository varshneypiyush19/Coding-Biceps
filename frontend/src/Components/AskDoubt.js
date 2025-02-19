import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import BookingUI from "./Booking";
import ConfirmationForm from "./ConfirmationForm";

const AskDoubt = () => {
  const [isYearly, setIsYearly] = useState(false);

  const pricing = {
    monthly: {
      student: 29,
      intern: 50,
      experienced: 100,
    },
    yearly: {
      student: 250,
      intern: 450,
      experienced: 900,
    },
  };

  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedTimeZone , setSelectedTimezone] = useState(null);
  return (
    <div className="bg-richblue-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ask Doubt
          </h2>{" "}
          <div className="flex flex-col items-center  min-h-screen p-6 md:p-12">
            {step === 1 ? (
              <BookingUI
                setStep={setStep}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                selectedTime={selectedTime}
                setSelectedTime={setSelectedTime}
                selectedTimeZone = {selectedTimeZone}
                setSelectedTimezone = {setSelectedTimezone}
              />
            ) : (
               
              <ConfirmationForm
                setStep={setStep}
                selectedDate={selectedDate}
                selectedTime={selectedTime}
                selectedTimeZone = {selectedTimeZone}
              />
            )}
          </div>
          {/* <p className="mt-4 text-lg text-gray-600">
            Choose the best plan that fits your needs. 1 doubt free in every
            plan!
          </p> */}
        </div>

        {/* Toggle Button */}
        {/* <div className="flex justify-center mt-8">
          <button
            className={`px-4 py-2 ${
              !isYearly ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
            } rounded-l-md hover:underline`}
            onClick={() => setIsYearly(false)}
          >
            Pay Monthly
          </button>
          <button
            className={`px-4 py-2 ${
              isYearly ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
            } rounded-r-md hover:underline`}
            onClick={() => setIsYearly(true)}
          >
            Pay Yearly
          </button>
        </div>

        {/* Pricing Cards
        <div className="mt-12 grid gap-6 lg:grid-cols-3 sm:grid-cols-1">
          {/* Student Plan 
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800">Student</h3>
            <p className="text-4xl font-extrabold text-gray-900 mt-4">
              ₹{isYearly ? pricing.yearly.student : pricing.monthly.student}
            </p>
            <p className="text-green-600 font-medium mt-4">1 doubt for free!</p>
            <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
              <NavLink to="/login" className="cursor-pointer  font-semibold">
                Grab this Opportunity now !!
              </NavLink>
            </button>
            <ul className="mt-4 text-left text-sm text-gray-600">
              <li className="mb-2">✔ 24/7 Support</li>
              <li className="mb-2">✔ Doubt resolution in 24 hours</li>
              <li>✔ Perfect for students</li>
            </ul>
          </div>

          {/* Intern Plan 
          <div className="bg-white shadow-lg rounded-lg p-6 text-center border-2 border-blue-500">
            <h3 className="text-xl font-semibold text-gray-800">Intern</h3>
            <p className="text-4xl font-extrabold text-gray-900 mt-4">
              ₹{isYearly ? pricing.yearly.intern : pricing.monthly.intern}
            </p>
            <p className="text-green-600 font-medium mt-4">1 doubt for free!</p>
            <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
              <NavLink to="/login" className="cursor-pointer  font-semibold">
                Grab this Opportunity now !!
              </NavLink>
            </button>
            <ul className="mt-4 text-left text-sm text-gray-600">
              <li className="mb-2">✔ Priority Support</li>
              <li className="mb-2">✔ Doubt resolution in 12 hours</li>
              <li>✔ Ideal for interns</li>
            </ul>
          </div>

          {/* Experienced Plan 
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800">Experienced</h3>
            <p className="text-4xl font-extrabold text-gray-900 mt-4">
              ₹
              {isYearly
                ? pricing.yearly.experienced
                : pricing.monthly.experienced}
            </p>
            <p className="text-green-600 font-medium mt-4">1 doubt for free!</p>
            <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
              <NavLink to="/login" className="cursor-pointer  font-semibold">
                Grab this Opportunity now !!
              </NavLink>
            </button>
            <ul className="mt-4 text-left text-sm text-gray-600">
              <li className="mb-2">✔ VIP Support</li>
              <li className="mb-2">✔ Doubt resolution in 6 hours</li>
              <li>✔ Tailored for professionals</li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AskDoubt;
