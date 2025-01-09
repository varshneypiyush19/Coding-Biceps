import "./App.css";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UiUxSection from "./Components/Services/UiUxSection";
import Contactus from "./Components/Contactus";
import Technology from "./Components/Services/Technology";
import WebDevelopment from "./Components/Services/WebDevelopment";
import DigitalMarketing from "./Components/Services/DigitalMarketing";
import Footer from "./Components/Footer.js";
import Clientspage from "./pages/Clientspage.js";
import Team from "./pages/Team.js";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/ui-ux" element={<UiUxSection />}></Route>
        <Route path="/contact" element={<Contactus />}></Route>
        <Route path="/technology" element={<Technology />}></Route>
        <Route path="/web-development" element={<WebDevelopment />}></Route>
        <Route path="/digital-marketing" element={<DigitalMarketing />}></Route>
        <Route path="/clients" element={<Clientspage />}></Route>
        <Route path="/team" element={<Team />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
