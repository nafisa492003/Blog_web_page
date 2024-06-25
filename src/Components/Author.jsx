import React from 'react'
import Container from './Container'
import Title from './Title'
import AuthorCards from './AuthorCards'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import './AuthorArrow.css'
const NextArrow = (props) => {
    const { style, onClick } = props;
    return (
      <div style={{ ...style }} onClick={onClick} className="author-next-arrow">
        <FaArrowRightLong className="w-[28px] h-[28px] border-[#8e8e8e] border rounded-[10px] text-[12px] text-[#8e8e8e] p-1 " />
      </div>
    );
  };
  const PrevArrow = (props) => {
    const { style, onClick } = props;
    return (
      <div style={{ ...style }} onClick={onClick} className="author-prev-arrow">
        <FaArrowLeftLong className="w-[28px] h-[28px] border-[#8e8e8e] border rounded-[10px] text-[12px] text-[#8e8e8e] p-1 " />
      </div>
    );
  };
const Author = () => {
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
        { id: 1, content:  <AuthorCards /> },
        { id: 2, content:  <AuthorCards /> },
        { id: 3, content:  <AuthorCards /> },
        { id: 4, content:  <AuthorCards /> },
        { id: 5, content:  <AuthorCards /> },
        { id: 6, content:  <AuthorCards /> },
        { id: 7, content:  <AuthorCards /> },
        { id: 8, content:  <AuthorCards /> },
      ];
      
  return (
   <section className='my-[100px]'>
    <Container>
        <Title title='Explorer Author' subtitle='Author'/>
        <Slider {...settings}>
        {slides.map((slide) => (
          <div  key={slide.id} className='slider-item'>{slide.content}</div>
        ))}
      </Slider>
    </Container>
   </section>
  )
}

export default Author