import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import Travel_Slide_part from './Travel_Slide_part';
import './AutherdetArrow.css'
const NextArrow = (props) => {
    const { style, onClick } = props;
    return (
      <div style={{ ...style }} onClick={onClick} className="autherdet-next-arrow">
        <FaAngleRight className="w-[30px] h-[30px] border-[#8e8e8e] border rounded-full text-[12px] text-[#8e8e8e] p-1 " />
      </div>
    );
  };
  const PrevArrow = (props) => {
    const { style, onClick } = props;
    return (
      <div style={{ ...style }} onClick={onClick} className="autherdet-prev-arrow">
        <FaAngleLeft className="w-[30px] h-[30px] border-[#8e8e8e] border rounded-full text-[12px] text-[#8e8e8e] p-1 " />
      </div>
    );
  };
const AutherDetailSlider = () => {
    const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            beforeChange: function(currentSlide, nextSlide) {
              console.log("before change", currentSlide, nextSlide);
            },
            afterChange: function(currentSlide) {
              console.log("after change", currentSlide);
            },
        appendDots: dots => (
          <div
            style={{
                bottom: '-80px'
            }}
          >
            <ul style={{ margin: "0px" }}> {dots} </ul>
          </div>
        ),
        customPaging: i => (
          <div
            style={{
              
              color: "#838383",
              fontSize:"16px",
              
            }}
          >
            {i + 1}
          </div>
        ),
    
      };
      const slides = [
        {
          id: 1,
          content: (
            <Travel_Slide_part
              num="20"
              month="November"
              subtitle="By Miles Jaxon"
              title="Our Begin Now To Beingonl What You Will Be."
              min="5 Min Read"
            />
          ),
        },
        {
          id: 2,
          content: (
            <Travel_Slide_part
              num="30"
              month="November"
              subtitle="By Angel Coper"
              title="primis in faucibusori cubilia luctus et ultrices."
              min="15 Min Read"
            />
          ),
        },
        {
          id: 3,
          content: (
            <Travel_Slide_part
              num="05"
              month="December"
              subtitle="By Colton Roman"
              title="vestibulum ligula sodalesoi Morbi iaculis laoreet."
              min="28 Min Read"
            />
          ),
        },
        {
          id: 4,
          content: (
            <Travel_Slide_part
              num="15"
              month="December"
              subtitle="By Parker Beau"
              title="Etiam et quam atentl tortor placerat facilisis."
              min="2 Day Read"
            />
          ),
        },
        {
          id: 5,
          content: (
            <Travel_Slide_part
              num="20"
              month="November"
              subtitle="By Miles Jaxon"
              title="Our Begin Now To Beingonl What You Will Be."
              min="5 Min Read"
            />
          ),
        },
        {
          id: 6,
          content: (
            <Travel_Slide_part
              num="20"
              month="November"
              subtitle="By Miles Jaxon"
              title="Our Begin Now To Beingonl What You Will Be."
              min="5 Min Read"
            />
          ),
        },
        {
          id: 7,
          content: (
            <Travel_Slide_part
              num="20"
              month="November"
              subtitle="By Miles Jaxon"
              title="Our Begin Now To Beingonl What You Will Be."
              min="5 Min Read"
            />
          ),
        },
        {
          id: 8,
          content: (
            <Travel_Slide_part
              num="20"
              month="November"
              subtitle="By Miles Jaxon"
              title="Our Begin Now To Beingonl What You Will Be."
              min="5 Min Read"
            />
          ),
        },
      ];
  return (
    
    <div className='mb-[200px]'>
     <Slider {...settings}>
                {slides.map((slide) => (
                  <div key={slide.id}>{slide.content}</div>
                ))}
              </Slider>
    </div>
  )
}

export default AutherDetailSlider