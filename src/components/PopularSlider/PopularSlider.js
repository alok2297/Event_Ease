// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import './PopularSlider.css';
const PopularSlider = (props) => {
  const { slides, swiperWidth, swiperHeight,boxImgWidth,boxImgHeight} = props;
  console.log(swiperWidth);
  return (
    <><h1 className="PopuplarText">Popular Venue Search</h1>
    <div className="swiper" style={{height:swiperHeight,maxWidth:swiperWidth}}>
      <Swiper
        spaceBetween={0}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
      {slides.map((slide)=>(
        <SwiperSlide key={slide.id} className="swiper" >
          <div className="box-of-image" >
            <a href="$">
              <img
                className="mySlides" style={{height:boxImgHeight,width:boxImgWidth}}
                alt="#"
                src={slide.img}
              />
            </a>
            <div className="text-main">
              <a href="$">
                <div class="star-hotels">{slide.title}</div>
              </a>
              <div className="city">
              <p className="city-for-hotels">{Object.values(slide.city).join(' | ')}</p>
              <p className="city-for-hotels">All Localities</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))};
      </Swiper>
    </div></>
  );
};

export default PopularSlider;
