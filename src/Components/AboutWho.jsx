import React from 'react'
import './AboutWhoArrow.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import about_img from '../assets/About_img.png'
const NextArrow = (props) => {
    const { style, onClick } = props;
    return (
      <div style={{ ...style }} onClick={onClick} className="aboutwho-next-arrow">
        <FaArrowRightLong className="w-[40px] h-[60px] text-[12px] text-[#8e8e8e] p-2 bg-white " />
      </div>
    );
  };
  const PrevArrow = (props) => {
    const { style, onClick } = props;
    return (
      <div style={{ ...style }} onClick={onClick} className="aboutwho-prev-arrow">
        <FaArrowLeftLong className="w-[40px] h-[60px] text-[12px] text-[#8e8e8e] p-2 bg-white " />
      </div>
    );
  };
const AboutWho = () => {
    const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  const slides = [
    { id: 1, content: <img className='w-full' src={about_img} alt="" /> },
    { id: 2, content: <img className='w-full' src={about_img} alt="" /> },
    { id: 3, content: <img className='w-full' src={about_img} alt="" /> },
    { id: 4, content: <img className='w-full' src={about_img} alt="" /> },
    { id: 5, content: <img className='w-full' src={about_img} alt="" /> },
    { id: 6, content: <img className='w-full' src={about_img} alt="" /> },
    { id: 7, content: <img className='w-full' src={about_img} alt="" /> },
    { id: 8, content: <img className='w-full' src={about_img} alt="" /> },
  ];
  return (
    <div className='mt-[150px] w-full mb-12'>
       <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>{slide.content}</div>
        ))}
      </Slider>  
    </div>
  )
}

export default AboutWho