import './App.css';
import Navbar from './Components/Navbar';
import {Route , Routes} from "react-router-dom";
import Home from './pages/Home';
function App() {
  return (
    <div>
    <Navbar />
     <Routes>
      <Route path='/' element={<Home/>}></Route>
     </Routes>
  </div>
  );
}

export default App;
