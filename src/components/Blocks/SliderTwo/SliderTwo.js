import './SliderTwo.css';
import { Container } from "../../Elements/Container"
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Iconify } from "../../Elements/Icon";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { getVenues } from "Api/services";
import { slugify } from 'Utility';

const SliderTwo = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [data, setData] = useState("");

  const navigate = useNavigate();
  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };

  const handleClick = (event, item) => {
    event.preventDefault();
    navigate(`/venues/category/${slugify(item)}`)
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
      img: "https://image.wedmegood.com/resized/300X/uploads/banner_image/1/bridal-wear.jpg",
      name: "Bridal Wear"
    },
    {
      img: "https://image.wedmegood.com/resized/300X/uploads/banner_image/2/mua.jpg",
      name: "Jewellery"
    },
    {
      img: "https://image.wedmegood.com/resized/300X/uploads/banner_image/6/groom-wear.jpg",
      name: "Groom Wear"
    },
    {
      img: "https://image.wedmegood.com/resized/300X/uploads/banner_image/3/photography.jpg",
      name: "Wedding Pandits"
    },
    {
      img: "https://image.wedmegood.com/resized/300X/uploads/banner_image/2/mua.jpg",
      name: "Bartenders"
    },
    {
      img: "https://image.wedmegood.com/resized/300X/uploads/banner_image/3/photography.jpg",
      name: "Pre Wedding Shoot Locations"
    },
    {
      img: "https://image.wedmegood.com/resized/300X/uploads/banner_image/2/mua.jpg",
      name: "Beauty and Wellness"
    },
    {
      img: "https://image.wedmegood.com/resized/300X/uploads/banner_image/3/photography.jpg",
      name: "Photographers"
    },
    {
      img: "https://image.wedmegood.com/resized/300X/uploads/banner_image/2/mua.jpg",
      name: "Bridal Makeup"
    },
    {
      img: "https://image.wedmegood.com/resized/300X/uploads/banner_image/8/decorators.jpg",
      name: "Decorators"
    },
    {
      img: "https://image.wedmegood.com/resized/300X/uploads/banner_image/2/mua.jpg",
      name: "Mehendi Artist"
    },
    {
      img: "https://image.wedmegood.com/resized/300X/uploads/banner_image/3/photography.jpg",
      name: "Catering Services"
    },
    {
      img: "https://image.wedmegood.com/resized/300X/uploads/banner_image/3/photography.jpg",
      name: "Wedding Entertainment"
    },
    {
      img: "https://image.wedmegood.com/resized/300X/uploads/banner_image/3/photography.jpg",
      name: "Sangeet Choreographer"
    },
    {
      img: "https://image.wedmegood.com/resized/300X/uploads/banner_image/3/photography.jpg",
      name: "Pre Wedding Photographers"
    }
  ];  

  const fetchData = async () => {
    try {
      const data = await getVenues();
      setData(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
      fetchData();
  }, [])

  return (<Container children={
    <><div className="real-wedding-popular">Popular Searches</div><div className="slider-container">
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
            <SwiperSlide onClick={(e)=>handleClick(e,item.name)}key={id}>
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