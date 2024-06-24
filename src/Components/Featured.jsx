import React from 'react'
import Container from './Container'
import Title from './Title'
import Featured_Slide from './Featured_Slide'
import './FeaturedArrow.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
const NextArrow = (props) => {
  const { style, onClick } = props;
  return (
    <div style={{ ...style }} onClick={onClick} className="featured-next-arrow">
      <FaArrowRightLong className="w-[28px] h-[28px] border-[#8e8e8e] border rounded-[10px] text-[12px] text-[#8e8e8e] p-1 " />
    </div>
  );
};
const PrevArrow = (props) => {
  const { style, onClick } = props;
  return (
    <div style={{ ...style }} onClick={onClick} className="featured-prev-arrow">
      <FaArrowLeftLong className="w-[28px] h-[28px] border-[#8e8e8e] border rounded-[10px] text-[12px] text-[#8e8e8e] p-1 " />
    </div>
  );
};
const Featured = () => {
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
    { id: 1, content: <Featured_Slide /> },
    { id: 2, content: <Featured_Slide /> },
    { id: 3, content: <Featured_Slide /> },
    { id: 4, content: <Featured_Slide /> },
    { id: 5, content: <Featured_Slide /> },
    { id: 6, content: <Featured_Slide /> },
    { id: 7, content: <Featured_Slide /> },
    { id: 8, content: <Featured_Slide /> },
  ];
  return (
   <section className='my-[100px] px-2 lg:px-10'>
    <Container>
        <Title title='Featured Article' subtitle='Recent Post'/>
    </Container>
        <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>{slide.content}</div>
        ))}
      </Slider>
   </section>
  )
}

export default Featured