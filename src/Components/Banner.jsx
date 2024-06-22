import React from "react";
import Banner_slid_pick from "./Banner_slid_pick";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

const NextArrow = (props) => {
  const {style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        position: "absolute",
        bottom: "-84px",
        right: "460px",
        zIndex: "99999",
      }}
      onClick={onClick}
    >
      <FaArrowRightLong className="w-[30px] h-[30px] border-[#8e8e8e] border rounded-full text-[12px] text-[#8e8e8e] p-1 " />
    </div>
  );
};

const PrevArrow = (props) => {
  const { style, onClick } = props;
  return (
    <div
    style={{
      ...style,
      position: "absolute",
      bottom: "-84px",
      left: "460px",
      zIndex: "99999",
      }}
      onClick={onClick}
    >
      <FaArrowLeftLong className="w-[30px] h-[30px] border-[#8e8e8e] border rounded-full text-[12px] text-[#8e8e8e] p-1 "  />
     
    </div>
  );
};

const Banner = () => {
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
          dots: true
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        }
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const slides = [
    { id: 1, content: <Banner_slid_pick /> },
    { id: 2, content: <Banner_slid_pick /> },
    { id: 3, content: <Banner_slid_pick /> },
    { id: 4, content: <Banner_slid_pick /> },
    { id: 5, content: <Banner_slid_pick /> },
    { id: 6, content: <Banner_slid_pick /> },
    { id: 7, content: <Banner_slid_pick /> },
    { id: 8, content: <Banner_slid_pick /> },
  ];

  return (
    <section className="mb-[100px] mt-10 px-2 lg:px-10">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>{slide.content}</div>
        ))}
      </Slider>
    </section>
  );
};

export default Banner;
