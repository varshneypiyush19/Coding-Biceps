import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { loginSuccess, login } from "../../slice/auth";
import Input from "../common/Input";
import { IoMailOutline } from "react-icons/io5";
import { BiLockAlt } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import loginpageimage from "../../assets/web-development-img3.jpg";

const SignupMentor = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpassword: "",
    phone: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmpassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/signup",
        formData
      );
      const userId = response?.data;
      dispatch(loginSuccess(userId));
      dispatch(login(true));
      navigate("/");
      toast.success("Registration successful!");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error("Email is already registered");
      } else {
        toast.error("Failed to sign up. Please try again later.");
      }
    }
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen bg-gray-50 p-4">
      {/* Left Section - Signup Form */}
      <div className="flex flex-col items-center w-full lg:w-1/2">
        <div className="text-center lg:text-left w-full max-w-[90%] md:max-w-[70%] lg:w-8/12">
          <h2 className="font-bold text-3xl sm:text-4xl mb-3">
            Create an account
          </h2>
          <p className="text-sm mb-6">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-400 font-semibold">
              Log In
            </Link>
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-[90%] md:max-w-[70%] lg:w-8/12">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              id="firstName"
              name="firstName"
              icon={<AiOutlineUser />}
              handleChange={handleChange}
              value={formData.firstName}
              label="First Name"
              placeholder="First Name"
              pattern="^[a-zA-Z]{3,}(?: [a-zA-Z]{3,})*$"
              required
            />
            <Input
              type="text"
              id="lastName"
              name="lastName"
              icon={<AiOutlineUser />}
              handleChange={handleChange}
              value={formData.lastName}
              label="Last Name"
              placeholder="Last Name"
              pattern="^[a-zA-Z]{3,}(?: [a-zA-Z]{3,})*$"
            />
            <Input
              type="email"
              id="email"
              name="email"
              icon={<IoMailOutline />}
              handleChange={handleChange}
              value={formData.email}
              label="Email"
              placeholder="example@abc.com"
              required
            />
            <Input
              type="number"
              id="phone"
              name="phone"
              icon={<BiLockAlt />}
              handleChange={handleChange}
              value={formData.phone}
              label="Phone No"
              placeholder="9000000000"
              required
            />
            <Input
              type="password"
              id="password"
              name="password"
              icon={<BiLockAlt />}
              handleChange={handleChange}
              value={formData.password}
              label="Password"
              placeholder="At least 6 characters long"
              required
            />
            <Input
              type="password"
              id="confirmpassword"
              name="confirmpassword"
              icon={<BiLockAlt />}
              handleChange={handleChange}
              value={formData.confirmpassword}
              label="Confirm Password"
              placeholder="Re-enter password"
              required
            />
            {/* Resume Upload Field */}
            <Input
              type="file"
              id="resume"
              name="resume"
              handleChange={handleChange}
              label="Upload Resume"
              required
            />
            {formData.resume && (
              <p className="text-sm text-gray-500">{formData.resume.name}</p>
            )}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-4 rounded w-full mt-4"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>

      {/* Right Section - Image */}
      <div
        className="hidden lg:flex w-full lg:w-1/2 h-64 md:h-96 lg:h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${loginpageimage})` }}
      ></div>
    </div>
  );
};

export default SignupMentor;
