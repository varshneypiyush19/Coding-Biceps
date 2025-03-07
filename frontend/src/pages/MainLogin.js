import React from "react";
import { Link } from "react-router-dom";
import loginpageimage from "../assets/web-development-img3.jpg";
const MainLogin = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center h-full">
        <div className=" flex flex-col items-center justify-center w-1/2  p-8 h-full">
          <div className="mt-12 mb-6 flex flex-col gap-3">
            <h2 className="text-center md:text-left font-bold text-3xl">
              Welcome back
            </h2>
            <p className="text-center md:text-left text-sm">
              New to Coding-Biceps?{" "}
              <Link to={"/signup"} className="text-blue-400 font-semibold">
                Create an account
              </Link>
            </p>
          </div>
          <div className="p-8 rounded-lg shadow-lg  md:scale-100 lg:w-9/12 lg:h-[50vh]">
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            <div>
              <Link to="/userlogin">
                <button
                  type="button"
                  className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded w-full my-10"
                >
                  User Login
                </button>
              </Link>

              <Link to="/mentorlogin">
                <button
                  type="button"
                  className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded w-full my-10"
                >
                  Mentor Login
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="  hidden lg:block w-1/2  h-[100vh] bg-no-repeat bg-cover bg-center mt-[75px]"
          style={{ backgroundImage: `url(${loginpageimage})` }}
        ></div>
      </div>
    </div>
  );
};

export default MainLogin;
