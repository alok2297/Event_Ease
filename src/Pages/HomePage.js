import React, { useState } from 'react'
import HeroSection from "../components/HeroSection/HeroSection";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import WeddingBlogSlider from "../components/WeddingBlogSlider/WeddingBlogSlider";
import PopularSlider from "../components/PopularSlider/PopularSlider";
import slides from "../LocalFile/PopularVenues.json"
import Category from "../components/Category/Category";
import SliderTwo from "../components/SliderTwo/SliderTwo";
import WMGInHouse from "../components/WMG/WMGInHouse";

const HomePage = (props) => {
  return (
    <div>
      <HeroSection selectedCity={props.city}/>
      <PopularSlider slides={slides} swiperHeight="150px" boxImgWidth="180px" boxImgHeight="120px"/>
      <SliderTwo/>
      <Category/>
      <WMGInHouse/>
      <NewsLetter/>
      <WeddingBlogSlider slideView = "3" wedWidth = "390px"/>
      <SliderTwo/>
      <WeddingBlogSlider slideView = "4" wedWidth = "344px"/>
      <WeddingBlogSlider  slideView = "3" wedWidth = "390px"/>
    </div>
  )
}

export default HomePage
