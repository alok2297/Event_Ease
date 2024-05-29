import React, { useState } from "react";
import "./WeddingBlogSlider.css";
import { Container } from "../../Elements/Container";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Iconify } from "../../Elements/Icon";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

const WeddingBlogSlider = (props) => {
  const [swiperRef, setSwiperRef] = useState(null);
  const {slideView,wedWidth} = props;

  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };

  const navigate = useNavigate();

  const handleClick = ()=>{
    navigate("/wedding-detail")
  }

  return (
    <Container
      children={
        <div className="Container">
          <p className="real-wedding-stories">Real Wedding Stories</p>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={slideView}
            speed={2000}
            onSwiper={(swiper) => setSwiperRef(swiper)}
          >
            <SwiperSlide onClick={handleClick}>
              <div className="slider-component">
                <div>
                  <div className="wed-img" style={{width:wedWidth}}>
                    <img
                      src="https://image.wedmegood.com/resized/450X/uploads/images/f9f4888059434ffdb8d71e7eeed02414realwedding/IMG-1482.JPG?crop=203,264,1619,911"
                      alt=""
                    />
                  </div>
                  <div className="wed-text">Vedika and Rishi</div>
                </div>
                <span className="slider-component-text">Viral Mumbai Wedding with With Glam Outfits & Opulence</span>
                <div className="date">15 December 2023</div>
              </div>
            </SwiperSlide>
            <SwiperSlide onClick={handleClick}>
              <div className="slider-component">
                <div>
                  <div className="wed-img" style={{width:wedWidth}}>
                    <img
                      src="https://image.wedmegood.com/resized/450X/uploads/images/a6110dc2258140719874a88633b963farealwedding/ISHITAMAGUN-33.JPG?crop=416,422,1619,911"
                      alt=""
                    />
                  </div>
                  <div className="wed-text">Vedika and Rishi</div>
                </div>
                <span className="slider-component-text">Viral Mumbai Wedding with With Glam Outfits & Opulence</span>
                <div className="date">15 December 2023</div>
              </div>
            </SwiperSlide>
            <SwiperSlide onClick={handleClick}>
              <div className="slider-component">
                <div>
                  <div className="wed-img" style={{width:wedWidth}}>
                    <img
                      src="https://image.wedmegood.com/resized/450X/uploads/images/ed1826b25af54788933394ed219cce0erealwedding/BrideGettingReady_PAR09279.jpg?crop=407,84,1623,913"
                      alt=""
                    />
                  </div>
                  <div className="wed-text">Vedika and Rishi</div>
                </div>
                <span className="slider-component-text">Viral Mumbai Wedding with With Glam Outfits & Opulence</span>
                <div className="date">15 December 2023</div>
              </div>
            </SwiperSlide>
            <SwiperSlide onClick={handleClick}>
              <div className="slider-component">
                <div>
                  <div className="wed-img" style={{width:wedWidth}}>
                    <img
                      src="https://image.wedmegood.com/resized/450X/uploads/images/c8fe80721f0e491bb7ae246f01610cearealwedding/IMG_2396.JPG?crop=238,273,1519,854"
                      alt=""
                    />
                  </div>
                  <div className="wed-text">Vedika and Rishi</div>
                </div>
                <span className="slider-component-text">Viral Mumbai Wedding with With Glam Outfits & Opulence</span>
                <div className="date">15 December 2023</div>
              </div>
            </SwiperSlide>
            <SwiperSlide onClick={handleClick}>
              <div className="slider-component">
                <div>
                  <div className="wed-img" style={{width:wedWidth}}>
                    <img
                      src="https://image.wedmegood.com/resized/450X/uploads/images/c8fe80721f0e491bb7ae246f01610cearealwedding/IMG_2396.JPG?crop=238,273,1519,854"
                      alt=""
                    />
                  </div>
                  <div className="wed-text">Vedika and Rishi</div>
                </div>
                <span className="slider-component-text">Viral Mumbai Wedding with With Glam Outfits & Opulence</span>
                <div className="date">15 December 2023</div>
              </div>
            </SwiperSlide>
            <SwiperSlide onClick={handleClick}>
              <div className="slider-component">
                <div>
                  <div className="wed-img" style={{width:wedWidth}}>
                    <img
                      src="https://image.wedmegood.com/resized/450X/uploads/images/c8fe80721f0e491bb7ae246f01610cearealwedding/IMG_2396.JPG?crop=238,273,1519,854"
                      alt=""
                    />
                  </div>
                  <div className="wed-text">Vedika and Rishi</div>
                </div>
                <span className="slider-component-text">Viral Mumbai Wedding with With Glam Outfits & Opulence</span>
                <div className="date">15 December 2023</div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="btn-container">
            <button className="prev" onClick={prevHandler}>
              <Iconify width={40} height={40} color={"#4a4a4a"} icon="mdi:chevron-left"></Iconify>
            </button>
            <button className="next" onClick={nextHandler}>
              <Iconify width={40} height={40} color={"#4a4a4a"} icon="mdi:chevron-right"></Iconify>
            </button>
          </div>
        </div>
      }
    />
  );
};

export default WeddingBlogSlider;
