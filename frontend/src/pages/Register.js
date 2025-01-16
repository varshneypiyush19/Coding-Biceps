// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Logo from "../assets/client-logo-img.jpg";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";
// export default function Register(registerRoute) {
//   const navigate = useNavigate();
//   const [values, setValues] = useState({
//     username: "",
//     password: "",
//     confirmPassword: "",
//     email: "",
//   });

//   const toastOptions = {
//     position: "bottom-right",
//     autoClose: 8000,
//     pauseOnHover: true,
//     draggable: true,
//     theme: "dark",
//   };
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (handleVaildation()) {
//       const { username, password, email } = values;
//       const { data } = await axios.post(registerRoute, {
//         username,
//         email,
//         password,
//       });
//       if (data.status === false) {
//         toast.error(data.msg, toastOptions);
//       }
//       if (data.status === true) {
//         localStorage.setItem(
//           process.env.REACT_APP_LOCALHOST_KEY,
//           JSON.stringify(data.user)
//         );
//         navigate("/login");
//       }
//     }
//   };

//   const handleVaildation = () => {
//     const { username, password, confirmPassword, email } = values;
//     if (password !== confirmPassword) {
//       toast.error(
//         "Password and Confirm password should be same.",
//         toastOptions
//       );
//       return false;
//     } else if (username.length < 3) {
//       toast.error(
//         "Username should be greater than 3 Characters.",
//         toastOptions
//       );
//       return false;
//     } else if (password.length < 8) {
//       toast.error(
//         "Password should be equal or greater than 8 Characters.",
//         toastOptions
//       );
//       return false;
//     } else if (email === "") {
//       toast.error("Email is required", toastOptions);
//       return false;
//     }
//     return true;
//   };

//   const handleChange = (event) => {
//     setValues({ ...values, [event.target.name]: event.target.value });
//   };
//   return (
//     <>
//       <form onSubmit={(e) => handleSubmit(e)}>
//         <div className="brand">
//           <img src={Logo} alt="Logo" />
//           <h1>Frienz</h1>
//         </div>
//         <input
//           type="text"
//           placeholder="Username"
//           name="username"
//           onChange={(e) => handleChange(e)}
//         ></input>
//         <input
//           type="email"
//           placeholder="Email"
//           name="email"
//           onChange={(e) => handleChange(e)}
//         ></input>
//         <input
//           type="password"
//           placeholder="Password"
//           name="password"
//           onChange={(e) => handleChange(e)}
//         ></input>
//         <input
//           type="password"
//           placeholder="Confirm Password"
//           name="confirmPassword"
//           onChange={(e) => handleChange(e)}
//         ></input>
//         <button type="submit">Create User </button>
//         <span>
//           Already have an account ?<Link to="/login"> Login</Link>
//         </span>
//       </form>
//       <ToastContainer />
//     </>
//   );
// }
// // const FormContainer = styled.div`
// //   height: 100vh;
// //   width: 100vw;
// //   display: flex;
// //   flex-direction: column;
// //   justify-content: center;
// //   gap: 1rem;
// //   align-items: center;
// //   background-color: #131324;

// //   .brand {
// //     display: flex;
// //     align-items: center;
// //     gap: 1rem;
// //     justify-content: center;
// //     img {
// //       height: 5rem;
// //     }
// //     h1 {
// //       color: white;
// //       text-transform: uppercase;
// //       font-size: 2rem;
// //     }
// //   }

// //   form {
// //     display: flex;
// //     flex-direction: column;
// //     gap: 2rem;
// //     background-color: #00000076;
// //     border-radius: 2rem;
// //     padding: 3rem 5rem;
// //     width: 100%;
// //     max-width: 400px; /* Max width for larger screens */

// //     .password-container {
// //       position: relative;
// //       input {
// //         width: 100%;
// //       }
// //       .toggle-password {
// //         position: absolute;
// //         right: 10px;
// //         top: 50%;
// //         transform: translateY(-50%);
// //         cursor: pointer;
// //         color: white;
// //       }
// //     }

// //     input {
// //       background-color: transparent;
// //       padding: 1rem;
// //       border: 0.1rem solid #4e0eff;
// //       border-radius: 0.4rem;
// //       color: white;
// //       width: 100%;
// //       font-size: 1rem;
// //       &:focus {
// //         border: 0.1rem solid #997af0;
// //         outline: none;
// //       }
// //     }

// //     button {
// //       background-color: #997af0;
// //       color: white;
// //       padding: 1rem 2rem;
// //       border: none;
// //       font-weight: bold;
// //       cursor: pointer;
// //       border-radius: 0.4rem;
// //       font-size: 1rem;
// //       text-transform: uppercase;
// //       transition: 0.5s ease-in-out;
// //       &:hover {
// //         background-color: #4e0eff;
// //       }
// //     }

// //     span {
// //       color: white;
// //       text-transform: uppercase;
// //       a {
// //         color: #4e0eff;
// //         text-decoration: none;
// //         font-weight: bold;
// //       }
// //     }
// //   }

// //   /* Responsive Design */
// //   @media (max-width: 768px) {
// //     .brand {
// //       gap: 0.5rem;
// //       h1 {
// //         font-size: 1.5rem;
// //       }
// //     }

// //     form {
// //       padding: 2rem 3rem;
// //     }

// //     input,
// //     button {
// //       font-size: 0.9rem;
// //     }
// //   }

// //   @media (max-width: 480px) {
// //     .brand {
// //       gap: 0.3rem;
// //       h1 {
// //         font-size: 1.2rem;
// //       }
// //     }

// //     form {
// //       padding: 1.5rem 2rem;
// //       max-width: 90%; /* Full width for very small screens */
// //     }

// //     input,
// //     button {
// //       font-size: 0.8rem;
// //     }
// //   }
// // `;
