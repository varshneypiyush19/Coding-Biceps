import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../slice/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Button from "./common/Button";
import ProfileDropDown from "./ProfileDropDown";

const Navbar = ({ toggleModal }) => {
  const [shake, setShake] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [toggleMenu, setToggleMenu] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const closeMenu = () => {
    setToggleMenu(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleLogout = async () => {
    try {
      await dispatch(logout());
      toast.success("Logout successfully");
      navigate("/");
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="w-full z-10 flex justify-center items-center">
      <div className="w-11/12 flex items-center justify-between z-10 p-4 relative">
        <div className="flex items-center">
          <h1 className="text-primary font-bold text-xl">Coding</h1>
          <p className="text-richblack-700 text-xl">Biceps</p>
        </div>

        {/* Hamburger Menu */}
        <div className="lg:hidden absolute right-6">
          <button onClick={() => setToggleMenu(!toggleMenu)}>
            {toggleMenu ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        <ul className="lg:flex lg:items-center space-x-6 hidden text-richblack-900 relative">
          <li>
            <NavLink
              to="/"
              className="cursor-pointer hover:text-blue-100 font-semibold"
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>
          <li
            className="cursor-pointer flex items-center gap-x-1"
          >
            <span className="hover:text-blue-100 font-semibold">
              <NavLink
                to="/know-coding-biceps"
                className="p-2 hover:text-blue-100"
              >
                Know CB
              </NavLink>
            </span>
          </li>
          <li
            className="cursor-pointer flex items-center gap-x-1"
          >
            <span className="hover:text-blue-100 font-semibold">
              <NavLink
                to="/service-card-component"
                className="p-2 hover:text-blue-100"
              >
                Services
              </NavLink>
            </span>
          </li>
          <li
            className="cursor-pointer flex items-center gap-x-1"
            onClick={() => toggleDropdown("portfolio")}
          >
            <span className="hover:text-blue-100 font-semibold">Portfolio</span>
            <IoIosArrowDown />
            {openDropdown === "portfolio" && (
              <ul className="absolute top-full shadow-lg rounded-md mt-2 p-2 bg-white">
                <li>
                  <NavLink
                    to="/websites"
                    className="p-2 hover:text-blue-100"
                    onClick={closeMenu}
                  >
                    Websites
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <NavLink
              to="/contact"
              className="cursor-pointer hover:text-blue-100 font-semibold"
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </li>

          <li>
            <button
              className={`rounded-md border-2 border-blue-500 hover:bg-richblue-100 hover:text-white hidden lg:flex text-blue-500 font-bold py-1 px-2 transition-transform ${
                shake ? "animate-ringShake" : ""
              }`}
            >
              <NavLink
                to="/doubt"
                className="cursor-pointer font-semibold"
                onClick={closeMenu}
              >
                Ask doubt
              </NavLink>
            </button>
          </li>
        </ul>

        <button
          onClick={toggleModal}
          className={`rounded-md border-2 border-blue-500 hidden lg:flex text-blue-500 font-bold py-2 px-4 transition-transform ${
            shake ? "animate-ringShake" : ""
          }`}
        >
          GET IN TOUCH
        </button>
        <div className="hidden lg:flex">{<ProfileDropDown />} </div>
      </div>


      {/* Responsive part mobile version */}
      <div
        className={`transition-all z-10 duration-1000 linear ${
          toggleMenu ? "max-h-screen py-2" : "max-h-0 py-0"
        } overflow-hidden lg:hidden absolute top-[3.7em] shadow-lg w-full bg-blue-25`}
      >
        <ul className="space-y-4 px-4">
          <li>
            <NavLink
              to="/"
              className="cursor-pointer hover:text-blue-100 font-semibold"
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>
          <li className="flex flex-col">
            <div
              className="hover:text-blue-100 cursor-pointer flex items-center gap-x-1"
              onClick={() => toggleDropdown("Know AKS")}
            >
              <span className="font-semibold">Know AKS</span>
              <IoIosArrowDown />
            </div>
            <div>
              {openDropdown === "Know AKS" && (
                <ul className="shadow-lg rounded-md p-2 mt-2 bg-white">
                  <li>
                    <NavLink
                      to="/about"
                      className="p-2 hover:text-blue-100"
                      onClick={closeMenu}
                    >
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/core-values"
                      className="p-2 hover:text-blue-100"
                      onClick={closeMenu}
                    >
                      Core Values
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/clients"
                      className="p-2 hover:text-blue-100"
                      onClick={closeMenu}
                    >
                      Clients
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/team"
                      className="p-2 hover:text-blue-100"
                      onClick={closeMenu}
                    >
                      Team
                    </NavLink>
                  </li>
                </ul>
              )}
            </div>
          </li>
         
          <li
            className="cursor-pointer flex items-center "
            onClick={closeMenu}
          >
            <span className="hover:text-blue-100 font-semibold">
              <NavLink
                to="/service-card-component"
                className=" hover:text-blue-100"
              >
                Services
              </NavLink>
            </span>
          </li>
          <li className="flex flex-col">
            <div
              className="hover:text-blue-100 cursor-pointer flex items-center gap-x-1"
              onClick={() => toggleDropdown("Portfolio")}
            >
              <span className="font-semibold">Portfolio</span>
              <IoIosArrowDown />
            </div>
            <div>
              {openDropdown === "Portfolio" && (
                <ul className="shadow-lg rounded-md p-2 mt-2 bg-white">
                  <li>
                    <NavLink
                      to="/websites"
                      className="p-2 hover:text-blue-100"
                      onClick={closeMenu}
                    >
                      Websites
                    </NavLink>
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="cursor-pointer hover:text-blue-100 font-semibold"
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </li>

          <li>
            <button
              className={`rounded-md border-2 border-blue-500 hover:bg-richblue-100 hover:text-white lg:flex text-blue-500 font-bold py-1 px-2 transition-transform ${
                shake ? "animate-ringShake" : ""
              }`}
            >
              <NavLink
                to="/doubt"
                className="cursor-pointer font-semibold"
                onClick={closeMenu}
              >
                Ask doubt
              </NavLink>
            </button>

            {isLoggedIn ? (
              <div>
                <Button onClick={handleLogout}>Logout</Button>
              </div>
            ) : (
              <div className="flex my-5 gap-x-4 items-center">
                <div>
                  <Button linkto={"/login"} onClick={closeMenu}>
                    Login
                  </Button>
                </div>
                <Button linkto={"/signup"} onClick={closeMenu}>
                  Signup
                </Button>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;