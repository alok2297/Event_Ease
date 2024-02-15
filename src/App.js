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
import Information from "../src/Pages/Information";
import Wedsta from "./Pages/Wedsta";
import GenieService from "./Pages/GenieService";
import RealWedidingStroies from "./Pages/RealWedidingStroies";
import RealWeddingDetail from "./Pages/RealWeddingDetail";
import Photos from "./Pages/Photos";
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
          <Route path="/wedsta" element={<Wedsta/>}/>
          <Route path="/Genie" element={<GenieService/>}/>
          <Route path="/real-wedding" element={<RealWedidingStroies/>}/>
          <Route path="/wedding-detail" element={<RealWeddingDetail/>}/>
          <Route path="/photo" element={<Photos/>}/>
        </Routes>
        <Footer />
    </div>
  );
}
export default App;
