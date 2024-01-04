import './SliderTwo.css';
import {Container} from "../Elements/Container"

import React, { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Iconify } from "../Elements/Icon";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SliderTwo = ()=>{
  const [swiperRef, setSwiperRef] = useState(null);

  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };
   return <Container children={
    <div>
        <div class="real-wedding">Popular Searchers</div>
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={100}
            slidesPerView={5}
            speed={2000}
            onSwiper={(swiper) => setSwiperRef(swiper)}
          >
            <SwiperSlide>
             <div className="wrapper-slider">
                <div>
                  <div className="wrapper-image">
                    <img
                      src="https://image.wedmegood.com/resized/300X/uploads/banner_image/1/bridal-wear.jpg"
                      alt=""
                    />
                  </div>
                  <div className="weding-text">Vedika and Rishi</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
             <div className="wrapper-slider">
                <div>
                  <div className="wrapper-image">
                    <img
                      src="https://image.wedmegood.com/resized/300X/uploads/banner_image/1/bridal-wear.jpg"
                      alt=""
                    />
                  </div>
                  <div className="weding-text">Vedika and Rishi</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
             <div className="wrapper-slider">
                <div>
                  <div className="wrapper-image">
                    <img
                      src="https://image.wedmegood.com/resized/300X/uploads/banner_image/1/bridal-wear.jpg"
                      alt=""
                    />
                  </div>
                  <div className="weding-text">Vedika and Rishi</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
             <div className="wrapper-slider">
                <div>
                  <div className="wrapper-image">
                    <img
                      src="https://image.wedmegood.com/resized/300X/uploads/banner_image/1/bridal-wear.jpg"
                      alt=""
                    />
                  </div>
                  <div className="weding-text">Vedika and Rishi</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
             <div className="wrapper-slider">
                <div>
                  <div className="wrapper-image">
                    <img
                      src="https://image.wedmegood.com/resized/300X/uploads/banner_image/1/bridal-wear.jpg"
                      alt=""
                    />
                  </div>
                  <div className="weding-text">Vedika and Rishi</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
             <div className="wrapper-slider">
                <div>
                  <div className="wrapper-image">
                    <img
                      src="https://image.wedmegood.com/resized/300X/uploads/banner_image/1/bridal-wear.jpg"
                      alt=""
                    />
                  </div>
                  <div className="weding-text">Vedika and Rishi</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
             <div className="wrapper-slider">
                <div>
                  <div className="wrapper-image">
                    <img
                      src="https://image.wedmegood.com/resized/300X/uploads/banner_image/1/bridal-wear.jpg"
                      alt=""
                    />
                  </div>
                  <div className="weding-text">Vedika and Rishi</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
             <div className="wrapper-slider">
                <div>
                  <div className="wrapper-image">
                    <img
                      src="https://image.wedmegood.com/resized/300X/uploads/banner_image/1/bridal-wear.jpg"
                      alt=""
                    />
                  </div>
                  <div className="weding-text">Vedika and Rishi</div>
                </div>
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
   }></Container>
}
export default SliderTwo;