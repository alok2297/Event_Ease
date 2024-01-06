import "./header.css";
import "./components/Header/Header";
import Header from "./components/Header/Header";
import { useState } from "react";
import Login from "./components/Authentication/Login";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Venue from './components/Venue/Venue'
import Vendors from "./Pages/Vendors";
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
        </Routes>
        <Footer />
    </div>
  );
}
export default App;
