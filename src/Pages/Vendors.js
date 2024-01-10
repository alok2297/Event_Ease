import React from 'react'
import Category from '../components/Blocks/Category/Category'
import SliderTwo from '../components/Blocks/SliderTwo/SliderTwo'
import WeddingBlogSlider from '../components/Blocks/WeddingBlogSlider/WeddingBlogSlider'
import WeddingCategory from "../LocalFile/WeddingCategory.json";

const Vendors = () => {
  return (
    <div>
      <Category show={true} category={WeddingCategory} />
      <SliderTwo />
      <WeddingBlogSlider slideView="4" wedWidth="344px" />
      <SliderTwo />
      <WeddingBlogSlider slideView="4" wedWidth="344px" />
    </div>
  )
}

export default Vendors
