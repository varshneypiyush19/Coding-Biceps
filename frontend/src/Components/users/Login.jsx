import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess, login, usertoken } from "../../slice/auth";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { IoMailOutline } from "react-icons/io5";
import { BiLockAlt } from "react-icons/bi";
import loginpageimage from "../../assets/web-development-img3.jpg";
import Input from "../common/Input";
const LoginForm = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/login",
        formData
      );
      //  console.log(response);
      const userId = response?.data.user.image;
      console.log(userId);
      dispatch(loginSuccess(userId));
      dispatch(usertoken(response?.data?.token));

      // dispatch(loginSuccess(userId));
      dispatch(login(true));
      toast.success("Login Successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        toast.error("Incorrect Password");
      } else {
        toast.error("User Does Not exist");
      }
    }
  };

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
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
            <Input
            type={"number"}
            id={"phone"}
            icon={<IoMailOutline />}
            handleChange={handleChange}
            value={formData.phone}
            label={"Phone no"}
            placeholder={" Enter Your Phone no"}
          />
           <Input
            type={"password"}
            id={"password"}
            icon={<BiLockAlt />}
            handleChange={handleChange}
            value={formData.password}
            label={"Password"}
            placeholder={"Enter your Password"}

          />

             
            </div>
            <div >
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded w-full my-10"
              >
                Log In
              </button>
            </div>
          </form>
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

export default LoginForm;
