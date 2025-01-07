import './App.css';
import Navbar from './Components/Navbar';
import {Route , Routes} from "react-router-dom";
import Home from './pages/Home';
import UiUxSection from './Components/UiUxSection';
import Contactus from './Components/Contactus';
function App() {
  return (
    <div>
    <Navbar />
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path = 'ui-ux' element = {<UiUxSection/>}></Route>
      <Route path='/contact' element = {<Contactus/>}></Route>

     </Routes>
  </div>
  );
}

export default App;
