import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { login } from "../../slice/auth";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { loginSuccess } from "../../slice/auth";
import Input from "../common/Input";
import { IoMailOutline } from "react-icons/io5";
import { BiLockAlt } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import loginpageimage from "../../assets/web-development-img3.jpg";
const SignupForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpassword: "",
     phone:""
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
      // console.log(response);
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
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              id="firstName"
              name="firstName"
              icon={<AiOutlineUser />}
              handleChange={handleChange}
              value={formData.firstName}
              label="First Name"
              placeholder="First Name"
              errorMessage="Name should be more than 3 characters long and should not include special characters!"
              required
              pattern="^[a-zA-Z]{3,}(?: [a-zA-Z]{3,})*$"
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
              errorMessage="Name should be more than 3 characters long and should not include special characters!"
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
              errorMessage="Enter a valid email address!"
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              required
            />
            <Input
              type="number"
              id="phone"
              name="phone"
              icon={<BiLockAlt />}
              handleChange={handleChange}
              value={formData.phone}
              label="Phone no"
              placeholder="example@90000000000"
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
              errorMessage="Password should be 6-15 characters long and must include at least 1 letter, 1 number and 1 special character!"
              required
              pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$"
            />
            <Input
              type="password"
              id="confirmpassword"
              name="confirmpassword"
              icon={<BiLockAlt />}
              handleChange={handleChange}
              value={formData.confirmpassword}
              label="Confirm Password"
              placeholder="At least 6 characters long"
              errorMessage="Password should be 6-15 characters long and must include at least 1 letter, 1 number and 1 special character!"
              required
              pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded w-full mt-4"
            >
              Sign Up
            </button>
          </form>
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

export default SignupForm;
