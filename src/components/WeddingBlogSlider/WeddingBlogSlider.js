import React, { useState } from "react";
import "./WeddingBlogSlider.css";
import { Container } from "../Elements/Container";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Iconify } from "../Elements/Icon";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const WeddingBlogSlider = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };
  return (
    <Container
      children={
        <div className="Container">
          <p className="real-wedding">Real Wedding Stories</p>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={3}
            speed={2000}
            onSwiper={(swiper) => setSwiperRef(swiper)}
          >
            <SwiperSlide>
              <div className="slider-component">
                <div>
                  <div className="wed-img">
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
            <SwiperSlide>
              <div className="slider-component">
                <div>
                  <div className="wed-img">
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
            <SwiperSlide>
              <div className="slider-component">
                <div>
                  <div className="wed-img">
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
            <SwiperSlide>
              <div className="slider-component">
                <div>
                  <div className="wed-img">
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
