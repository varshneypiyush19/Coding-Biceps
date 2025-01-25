import React, { useRef, useState } from "react";
import useOnClickOutside from "../Components/hooks/useOnClickOutside";
import { AiOutlineCaretDown } from "react-icons/ai";
import image from "../assets/defaultuserimage.jpeg";
import Button from "./common/Button";
import toast from "react-hot-toast";
import { logout } from "../slice/auth";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const ProfileDropDown = () => {
  const [open, setOpen] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ref = useRef(null);

  useOnClickOutside(ref, () => setOpen(false));

  const handleLogout = async () => {
    try {
      await dispatch(logout());
      toast.success("Logout successfully");
      navigate("/");
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  return (
    <div className="relative">
      <button
        className="flex items-center gap-x-1"
        onClick={() => setOpen(!open)}
      >
        <img
          src={isLoggedIn && user ? user : image}
          alt="User"
          className="aspect-square  w-[30px] rounded-full object-cover"
        />
        <AiOutlineCaretDown className="text-sm text-richblack-100" />
      </button>
      <div
        ref={ref}
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl transform ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <button
          onClick={() => setOpen(false)}
          className="m-4 p-2 bg-red-500 text-white rounded"
        >
          Close
        </button>
        <div className="p-4 flex flex-col justify-center items-center w-full ">
          {isLoggedIn ? (
            // <Button onClick={handleLogout}>Logout</Button>
            <button
            onClick={() => handleLogout()}
            className="items-center justify-center text-[16px] py-2 px-4 w-[80%] inline-block rounded-md font-bold bg-blue-400 text-white hover:bg-blue-300 hover:scale-95 transition-all duration-200 h-10"
          >
            Logout
          </button>
          ) : (
            <div className="flex flex-col gap-4 items-center justify-center w-full">
              <button
                onClick={() => navigate("/login")}
                className="items-center justify-center text-[16px] py-2 px-4 w-[80%] inline-block rounded-md font-bold bg-blue-400 text-white hover:bg-blue-300 hover:scale-95 transition-all duration-200 h-10"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="items-center justify-center text-[16px] py-2 px-4 w-[80%] inline-block rounded-md font-bold bg-blue-400 text-white hover:bg-blue-300 hover:scale-95 transition-all duration-200 h-10"
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileDropDown;