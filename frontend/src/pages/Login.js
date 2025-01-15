// // import { useEffect, useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import { toast, ToastContainer } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";
// // import axios from "axios";
// // import Logo from "../assets/client-logo-img.jpg";
// // import { FaEye, FaEyeSlash } from "react-icons/fa"; // Add this line to import the icons

// // export default function Login({ loginRoute }) {
// //   const navigate = useNavigate();
// //   const [values, setValues] = useState({
// //     username: "",
// //     password: "",
// //   });
// //   const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

// //   const toastOptions = {
// //     position: "bottom-right",
// //     autoClose: 8000,
// //     pauseOnHover: true,
// //     draggable: true,
// //     theme: "dark",
// //   };

// //   useEffect(() => {
// //     if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
// //       navigate("/");
// //     }
// //   }, [navigate]);

// //   const handleChange = (event) => {
// //     setValues({ ...values, [event.target.name]: event.target.value });
// //   };

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();
// //     if (handleVaildation()) {
// //       try {
// //         const { username, password } = values;
// //         const { data } = await axios.post(loginRoute, { username, password });
// //         if (data.status === false) {
// //           toast.error(data.msg, toastOptions);
// //         } else {
// //           localStorage.setItem(
// //             process.env.REACT_APP_LOCALHOST_KEY,
// //             JSON.stringify(data.user)
// //           );
// //           navigate("/");
// //         }
// //       } catch (error) {
// //         toast.error("Something went wrong. Please try again.", toastOptions);
// //       }
// //     }
// //   };

// //   const handleVaildation = () => {
// //     const { username, password } = values;
// //     if (!username) {
// //       toast.error("Username and Password is required.", toastOptions);
// //       return false;
// //     }
// //     if (!password) {
// //       toast.error("Username and Password is required.", toastOptions);
// //       return false;
// //     }
// //     return true;
// //   };

// //   return (
// //     <>
// //       <form onSubmit={(e) => handleSubmit(e)}>
// //         <div className="brand">
// //           <img src={Logo} alt="Logo" />
// //           <h1>Frienz</h1>
// //         </div>
// //         <input
// //           type="text"
// //           placeholder="Username"
// //           name="username"
// //           onChange={(e) => handleChange(e)}
// //           min="3"
// //         />
// //         <div className="password-container">
// //           <input
// //             type={showPassword ? "text" : "password"} // Toggle password visibility
// //             placeholder="Password"
// //             name="password"
// //             onChange={(e) => handleChange(e)}
// //           />
// //           <span
// //             onClick={() => setShowPassword((prev) => !prev)} // Toggle state
// //             className="toggle-password"
// //           >
// //             {showPassword ? <FaEye /> : <FaEyeSlash />}
// //           </span>
// //         </div>
// //         <button type="submit">Login</button>
// //         <span>
// //           Already have an account? <Link to="/register">Register</Link>
// //         </span>
// //       </form>
// //       <ToastContainer />
// //     </>
// //   );
// // }

// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// // import axios from "axios";
// import Logo from "../assets/client-logo-img.jpg";
// // Ensure this path is correct
// import { FaEye, FaEyeSlash } from "react-icons/fa";

// const Login = () => {
//   // const [showPassword, setShowPassword] = useState("");
//   // const navigate = useNavigate();
//   // const [values, setValues] = useState({
//   //   username: "",
//   //   password: "",
//   // });

//   // const toastOptions = {
//   //   position: "bottom-right",
//   //   autoClose: 8000,
//   //   pauseOnHover: true,
//   //   draggable: true,
//   //   theme: "dark",
//   // };

//   // const LOCALHOST_KEY = process.env.REACT_APP_LOCALHOST_KEY || "frienz-key";

//   // useEffect(() => {
//   //   if (localStorage.getItem(LOCALHOST_KEY)) {
//   //     navigate("/");
//   //   }
//   // }, [navigate, LOCALHOST_KEY]);

//   // const handleChange = (event) => {
//   //   setValues({ ...values, [event.target.name]: event.target.value });
//   // };

//   // const handleSubmit = async (event) => {
//   //   event.preventDefault();
//   //   if (handleValidation()) {
//   //     try {
//   //       const { username, password } = values;
//   //       const { data } = await axios.post(loginRoute, { username, password });
//   //       if (data.status === false) {
//   //         toast.error(data.msg, toastOptions);
//   //         return;
//   //       }
//   //       localStorage.setItem(LOCALHOST_KEY, JSON.stringify(data.user));
//   //       navigate("/");
//   //     } catch (error) {
//   //       toast.error("Something went wrong. Please try again.", toastOptions);
//   //     }
//   //   }
//   // };

//   // const handleValidation = () => {
//   //   const { username, password } = values;
//   //   if (!username || !password) {
//   //     toast.error("Username and Password are required.", toastOptions);
//   //     return false;
//   //   }
//   //   return true;
//   // };

//   return (
//     <>
//       <form>
//         <div className="brand">
//           <img src={Logo} alt="Logo" />
//           <h1>Frienz</h1>
//         </div>
//         <input
//           type="text"
//           placeholder="Username"
//           name="username"
//           // onChange={handleChange}
//           min="3"
//         />
//         <div className="password-container">
//           <input
//             // type={showPassword ? "text" : "password"}
//             placeholder="Password"
//             name="password"
//             // onChange={handleChange}
//           />
//           <span
//             // onClick={() => setShowPassword((prev) => !prev)}
//             className="toggle-password"
//           >
//             {/* {showPassword ? <FaEye /> : <FaEyeSlash />} */}
//           </span>
//         </div>
//         <button type="submit">Login</button>
//         <span>
//           Already have an account? <Link to="/register">Register</Link>
//         </span>
//       </form>
//       <ToastContainer />
//     </>
//   );
// };
// export default Login;
