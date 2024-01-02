import "./header.css";
import "./components/Header/Header";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import { useState } from "react";
import PopularSlider from "./components/PopularSlider/PopularSlider";
import slides from "./LocalFile/PopularVenues.json"
import Category from "./components/Category/Category";
import SliderTwo from "./components/SliderTwo/SliderTwo";
import WMGInHouse from "./components/WMG/WMGInHouse";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import WeddingBlogSlider from "./components/WeddingBlogSlider/WeddingBlogSlider";

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
      <PopularSlider slides={slides} swiperHeight="150px" boxImgWidth="180px" boxImgHeight="120px"/>
      <SliderTwo/>
      <Category/>
      <WMGInHouse/>
      <NewsLetter/>
      <WeddingBlogSlider/>
    </div>
  );
}
export default App;
