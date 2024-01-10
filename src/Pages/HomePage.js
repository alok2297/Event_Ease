import HeroSection from "../components/Blocks/HeroSection/HeroSection";
import NewsLetter from "../components/Blocks/NewsLetter/NewsLetter";
import WeddingBlogSlider from "../components/Blocks/WeddingBlogSlider/WeddingBlogSlider";
import PopularSlider from "../components/Blocks/PopularSlider/PopularSlider";
import slides from "../LocalFile/PopularVenues.json"
import Category from "../components/Blocks/Category/Category";
import SliderTwo from "../components/Blocks/SliderTwo/SliderTwo";
import WMGInHouse from "../components/Blocks/WMG/WMGInHouse";
import Categories from "../LocalFile/WeddingCategory.json";

const HomePage = (props) => {
  return (
    <div>
      <HeroSection selectedCity={props.city} />
      <PopularSlider slides={slides} swiperHeight="150px" boxImgWidth="180px" boxImgHeight="120px" />
      <SliderTwo />
      <Category show={false} category={Categories.slice(0, 6)} />
      <WMGInHouse />
      <NewsLetter />
      <WeddingBlogSlider slideView="3" wedWidth="390px" />
      <SliderTwo />
      <WeddingBlogSlider slideView="4" wedWidth="344px" />
      <WeddingBlogSlider slideView="3" wedWidth="390px" />
    </div>
  )
}

export default HomePage
