import React from 'react'
import Category from '../components/Category/Category'
import SliderTwo from '../components/SliderTwo/SliderTwo'
import WeddingBlogSlider from '../components/WeddingBlogSlider/WeddingBlogSlider'

const Vendors = () => {
  return (
    <div>
      <Category/>
      <SliderTwo/>
      <WeddingBlogSlider slideView = "4" wedWidth = "344px"/>
      <SliderTwo/>
      <WeddingBlogSlider slideView = "4" wedWidth = "344px"/>
    </div>
  )
}

export default Vendors
