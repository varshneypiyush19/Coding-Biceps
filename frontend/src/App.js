import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UiUxSection from "./Components/Services/UiUxSection";
import Contactus from "./Components/Contactus";
import Technology from "./Components/Services/Technology";
import WebDevelopment from "./Components/Services/WebDevelopment";
import DigitalMarketing from "./Components/Services/DigitalMarketing";
import Clientspage from "./pages/Clientspage.js";
import Team from "./pages/Team.js";
import Footer from "./Components/Footer/Footer.jsx";
import GetinTouch from "./Components/GetinTouch.jsx";
import QualityAssurance from "./Components/Services/QualityAssurance.jsx";
import AskDoubt from "./Components/AskDoubt.js";
import Signup from "./Components/users/Signup.jsx";
import LoginForm from "./Components/users/Login.jsx";
import ServicesCardsComponents from "./Components/ServicesCardsComponents.jsx";
import PaymentSuccess from "./Components/PaymentSuccess.jsx";
import { SelectMentor } from "./Components/Selectmentor";
import MainLogin from "./pages/MainLogin.js";
import MentorLogin from "./Components/mentor/LoginMentor.js";
import MainRegister from "./pages/MainRegister.js";
import SignupMentor from "./Components/mentor/SignupMentor.js";
// import Register from "./pages/Register.js";
// import Login from "./pages/Login.js";
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="relative">
      <div
        className={`transition-all duration-300 ${
          isModalOpen ? "blur-md fixed" : ""
        }`}
      >
        <Navbar toggleModal={toggleModal} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/ui-ux" element={<UiUxSection />}></Route>
          <Route path="/contact" element={<Contactus />}></Route>
          <Route path="/technology" element={<Technology />}></Route>
          <Route path="/web-development" element={<WebDevelopment />}></Route>
          <Route
            path="/digital-marketing"
            element={<DigitalMarketing />}
          ></Route>
          <Route path="/clients" element={<Clientspage />}></Route>
          <Route path="/team" element={<Team />}></Route>
          <Route path="/know-coding-biceps" element={<Team />}></Route>
          <Route
            path="/quality-assurance"
            element={<QualityAssurance />}
          ></Route>
          <Route path="/select-mentor" element={<SelectMentor />} />
          <Route path="/select-mentor/:id" element={<AskDoubt />} />
          {/* <Route path="/doubt" element={<AskDoubt />}></Route> */}
          {/* <Route path="/login" element={<Login />}></Route> */}
          {/* <Route path="/register" element={<Register />}></Route> */}
          <Route path="/signup" element={<MainRegister />}></Route>
          <Route path="/usersignup" element={<Signup />}></Route>
          <Route path="/mentorsignup" element={<SignupMentor />}></Route>

          <Route path="/login" element={<MainLogin />}></Route>
          <Route path="/userlogin" element={<LoginForm />}></Route>
          <Route path="/mentorlogin" element={<MentorLogin />}></Route>
          <Route
            path="/service-card-component"
            element={<ServicesCardsComponents />}
          ></Route>
          <Route path="/paymentsuccess" element={<PaymentSuccess />}>
            {" "}
          </Route>
        </Routes>
        <Footer />
      </div>
      <GetinTouch isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
}

export default App;
