import "./header.css";
import "./components/Blocks/Header/Header";
import Header from "./components/Blocks/Header/Header";
import { useState } from "react";
import Login from "./components/Blocks/Authentication/Login";
import Footer from "./components/Blocks/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Venue from './components/Blocks/Venue/Venue'
import Vendors from "./Pages/Vendors";
import Information from "./components/Blocks/Information/Information";
import WedstaHeader from "./components/Blocks/Wedsta-header/WedstaHeader";
function App() {
  const [selectedCity, setSelectedCity] = useState("Delhi NCR");
  const getCity = (city) => {
    setSelectedCity(city);
  }
  return (
    <div>
        <Header getCity={getCity} />
        <Routes>
          <Route path='/' element={<HomePage city={selectedCity} />}></Route>
          <Route path='/login' element={<Login />} />
          <Route path="/vendor" element={<Vendors />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/info" element={<Information/>}/>
          <Route path="/wedsta" element={<WedstaHeader/>}/>
        </Routes>
        <Footer />
    </div>
  );
}
export default App;
