import React from "react";
import Banner_slid_pick from "./Banner_slid_pick";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import "./BannerArrows.css";
import Container from './Container'
const NextArrow = (props) => {
  const { style, onClick } = props;
  return (
    <div style={{ ...style }} onClick={onClick} className="custom-next-arrow">
      <FaArrowRightLong className="w-[30px] h-[30px] border-[#8e8e8e] border rounded-full text-[12px] text-[#8e8e8e] p-1 " />
    </div>
  );
};
const PrevArrow = (props) => {
  const { style, onClick } = props;
  return (
    <div style={{ ...style }} onClick={onClick} className="custom-prev-arrow">
      <FaArrowLeftLong className="w-[30px] h-[30px] border-[#8e8e8e] border rounded-full text-[12px] text-[#8e8e8e] p-1 " />
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
    <section className="mb-[140px] mt-10 px-2 lg:px-10">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>{slide.content}</div>
        ))}
      </Slider>
      <Container>
        <div className="py-[18px] px-[30px] border-[#dedede] border rounded-full w-full md:w-[540px] mx-auto md:translate-y-[44px] hidden md:block ">
          <ul className="flex items-center justify-between">
            <li className="font-normal font-prompt italic text-[14px] text-black hover:text-main hover:underline">
            Newest
            </li>
            <li className="font-normal font-prompt italic text-[14px] text-black hover:text-main hover:underline">
            Trending
            </li>
            <li className="font-normal font-prompt italic text-[14px] text-black hover:text-main hover:underline">
            Top View
            </li>
            <li className="font-normal font-prompt italic text-[14px] text-black hover:text-main hover:underline">
            Top Like
            </li>
            <li className="font-normal font-prompt italic text-[14px] text-black hover:text-main hover:underline">
            Recent
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
