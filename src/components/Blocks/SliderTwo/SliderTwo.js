import './SliderTwo.css';
import { Container } from "../../Elements/Container"
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Iconify } from "../../Elements/Icon";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SliderTwo = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const navigate = useNavigate();
  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };

  const handleClick = (event, item) => {
    event.preventDefault();
    navigate("/venues")
  }

  const breakPoints = {
    default: {
      slidesPerView: 4,
    },
    // when window width is >= 480px
    sm: {
      slidesPerView: 4,
    },
    md: {
      slidesPerView: 4,
    },
    // when window width is >= 640px
    lg: {
      slidesPerView: 8,
    },
  };

  const slides = [
    {
      img: "https://image.wedmegood.com/resized/300X/uploads/banner_image/3/photography.jpg",
      name: "Vedika and Rishi"
    },
    {
      img: "https://image.wedmegood.com/resized/300X/uploads/banner_image/2/mua.jpg",
      name: "Vedika and Rishi"
    },
    {
      img: "https://image.wedmegood.com/resized/300X/uploads/banner_image/1/bridal-wear.jpg",
      name: "Vedika and Rishi"
    },
    {
      img: "https://image.wedmegood.com/resized/300X/uploads/banner_image/6/groom-wear.jpg",
      name: "Vedika and Rishi"
    },
    {
      img: "https://image.wedmegood.com/resized/300X/uploads/banner_image/8/decorators.jpg",
      name: "Vedika and Rishi"
    },
    {
      img: "https://image.wedmegood.com/resized/300X/uploads/banner_image/1/bridal-wear.jpg",
      name: "Vedika and Rishi"
    },
    {
      img: "https://image.wedmegood.com/resized/300X/uploads/banner_image/1/bridal-wear.jpg",
      name: "Vedika and Rishi"
    },
    {
      img: "https://image.wedmegood.com/resized/300X/uploads/banner_image/1/bridal-wear.jpg",
      name: "Vedika and Rishi"
    }
  ];

  return (<Container children={
    <><div className="real-wedding-popular">Popular Searchers</div><div className="slider-container">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={5}
        speed={1000}
        onSwiper={(swiper) => setSwiperRef(swiper)}
        breakpoints={breakPoints}
      >
        {
          slides.map((item, id) => (
            <SwiperSlide onClick={(e)=>handleClick(e,item)}key={id}>
              <div className="wrapper-slider">
                <div>
                  <div className="wrapper-image">
                    <img
                      src={item.img}
                      alt="" />
                  </div>
                  <div className="weding-text">{item.name}</div>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
      <div className="btn-container">
        <button className="prev" onClick={prevHandler}>
          <Iconify width={40} height={40} color={"#4a4a4a"} icon="mdi:chevron-left"></Iconify>
        </button>
        <button className="next" onClick={nextHandler}>
          <Iconify width={40} height={40} color={"#4a4a4a"} icon="mdi:chevron-right"></Iconify>
        </button>
      </div>
    </div></>
  }></Container>)
}
export default SliderTwo;