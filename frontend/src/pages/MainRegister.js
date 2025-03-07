import React from "react";
import { Link } from "react-router-dom";
import loginpageimage from "../assets/web-development-img3.jpg";
const MainRegister = () => {
  return (
    <div>
      <div className="flex justify-center mb-10 items-center h-screen">
        <div className="flex flex-col items-center justify-center w-1/2 ">
          <div className="mt-12 mb-6 flex flex-col gap-3">
            <h2 className="text-center md:text-left font-bold text-3xl">
              Create an account
            </h2>
            <p className="text-center md:text-left text-sm">
              Already have an account?{" "}
              <Link to={"/login"} className="text-blue-400 font-semibold">
                Log In
              </Link>
            </p>
          </div>

          <div className="p-8 rounded-lg shadow-lg  lg:w-8/12 ">
            <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
            <div>
              <Link to="/usersignup">
                <button
                  type="button"
                  className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded w-full my-10"
                >
                  User Register
                </button>
              </Link>

              <Link to="/mentorsignup">
                <button
                  type="button"
                  className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded w-full my-10"
                >
                  Mentor Register
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div
          className="hidden lg:block w-1/2 h-[100vh] bg-no-repeat bg-cover bg-center mt-[75px]"
          style={{ backgroundImage: `url(${loginpageimage})` }}
        ></div>
      </div>
    </div>
  );
};

export default MainRegister;
