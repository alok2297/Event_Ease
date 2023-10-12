import "./header.css";
import "./components/Header";
import Header from "./components/Header";
import HeroSection from "./components/MainActivity/HeroSection";
import { useState } from "react";

function App() {
  const [selectedCity, setSelectedCity] = useState("Delhi NCR");
  const getCity = (city) =>{
    console.log(city , "App data");
    setSelectedCity(city);
  }
  return (
    <div>
      <Header getCity={getCity} />
      <HeroSection selectedCity={selectedCity}/>
    </div>
  );
}
export default App;
