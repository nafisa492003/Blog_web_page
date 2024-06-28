import React from 'react'
import './PostViewArrow.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import post from "../assets/About_img.png"
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
const NextArrow = (props) => {
    const { style, onClick } = props;
    return (
      <div style={{ ...style }} onClick={onClick} className="post-next-arrow">
        <FaArrowRightLong className="lg:text-[35px] text-[24px] text-main" />
      </div>
    );
  };
  const PrevArrow = (props) => {
    const { style, onClick } = props;
    return (
      <div style={{ ...style }} onClick={onClick} className="post-prev-arrow">
        <FaArrowLeftLong className="lg:text-[35px] text-[24px] text-main" />
      </div>
    );
  };
const PostViewSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              dots: false,
            },
          },
          {
            breakpoint: 430,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
      const slides = [
        { id: 1, content:   <img className='w-full lg:w-[370px]' src={post} alt="" /> },
        { id: 2, content:   <img className='w-full lg:w-[370px]' src={post} alt="" /> },
        { id: 3, content:   <img className='w-full lg:w-[370px]' src={post} alt="" /> },
        { id: 4, content:   <img className='w-full lg:w-[370px]' src={post} alt="" /> },
        { id: 5, content:   <img className='w-full lg:w-[370px]' src={post} alt="" /> },
        { id: 6, content:  <img className='w-full lg:w-[370px]' src={post} alt="" /> },
        { id: 7, content:   <img className='w-full lg:w-[370px]' src={post} alt="" /> },
        { id: 8, content:   <img className='w-full lg:w-[370px]' src={post} alt="" /> },
      ];
  return (
    <div>
        <Slider {...settings}>
        {slides.map((slide) => (
          <div  key={slide.id} className='slider-item'>{slide.content}</div>
        ))}
      </Slider>
    </div>
  )
}

export default PostViewSlider