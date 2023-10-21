import "./header.css";
import "./components/Header";
import Header from "./components/Header";
import HeroSection from "./components/MainActivity/HeroSection";
import { useState } from "react";
import PopularSlider from "./components/MainActivity/PopularSlider";
import slides from "./LocalFile/PopularVenues.json"
import Category from "./components/MainActivity/Category";

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
      <PopularSlider slides={slides} swiperWidth="1200px" swiperHeight="186px" boxImgWidth="180px" boxImgHeight="120px"/>
      <Category/>
    </div>
  );
}
export default App;
