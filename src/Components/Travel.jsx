import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Title from "./Title";
import { IoSearchOutline } from "react-icons/io5";
import Travel_Slide_part from "./Travel_Slide_part";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import "./TravelArrow.css";
import travel_img from "../assets/Image_three.png";
import { GoDotFill } from "react-icons/go";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import banner from '../assets/Banner.png'
const NextArrow = (props) => {
  const { style, onClick } = props;
  return (
    <div style={{ ...style }} onClick={onClick} className="travel-next-arrow">
      <FaArrowRightLong className="w-[30px] h-[30px] border-[#8e8e8e] border rounded-full text-[12px] text-[#8e8e8e] p-1 " />
    </div>
  );
};
const PrevArrow = (props) => {
  const { style, onClick } = props;
  return (
    <div style={{ ...style }} onClick={onClick} className="travel-prev-arrow">
      <FaArrowLeftLong className="w-[30px] h-[30px] border-[#8e8e8e] border rounded-full text-[12px] text-[#8e8e8e] p-1 " />
    </div>
  );
};
const Travel = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    <section className="my-[100px]">
      <Container>
        <Flex className={`flex-col lg:flex-row gap-[30px]`}>
          <div className="w-full mx-auto lg:w-8/12">
            <Title title="Travel Stories" subtitle="New Post" />
            {/* search part */}
            <div className="my-[60px] py-4 px-5 w-full border-b-[1px] border-secondary bg-white ">
              <Flex className={`items-center gap-10`}>
                <h4 className="font-medium font-inter text-[14px] text-black p-4 border-l-[1px] border-r-[1px] border-t-[1px] border-secondary translate-y-[17px] border-b-[1px] border-b-white rounded-[5px]">
                  Stories
                </h4>
                <Flex className={`items-center gap-3 translate-y-[17px]`}>
                  <IoSearchOutline className="text-[14px] text-hash" />
                  <h4 className="font-inter font-medium text-[14px] text-hash">
                    Search
                  </h4>
                </Flex>
                {/* search part */}
              </Flex>
            </div>
            {/* slide part */}
            <div className="mt-5 ">
              <Slider {...settings}>
                {slides.map((slide) => (
                  <div key={slide.id}>{slide.content}</div>
                ))}
              </Slider>
            </div>
            {/* slide part */}
          </div>
          <div className="w-full mx-auto lg:w-4/12">
          {/* editor choice */}
            <div className="py-[30px] px-5 border border-secondary rounded-[20px]">
              <h1 className="font-prompt font-medium text-[15px] text-black uppercase">
                Editor Choice
              </h1>
              <div className="md:w-[320px] h-[1px] bg-secondary mx-auto my-4 w-full"></div>
              <Flex className={`flex-col gap-3 items-center`}>
                <Flex className={`gap-3`}>
                  <img className="w-[110px]" src={travel_img} alt="pick" />
                  <Flex className={`flex-col gap-2`}>
                    <h3 className="font-prompt font-semibold text-[16px] capitalize">
                      gravida orci sed jaritob laoreet tellus.
                    </h3>
                    <Flex className="items-center gap-2">
                      <h5 className="font-medium font-inter text-[12px]  text-hash hover:text-black duration-150">
                        Nov 10, 2022
                      </h5>
                      <GoDotFill className="text-[12px]  text-main" />
                      <h5 className="font-medium font-inter text-[12px] text-hash hover:text-black duration-150">
                        500 Comment
                      </h5>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex className={`gap-3`}>
                  <img className="w-[110px]" src={travel_img} alt="pick" />
                  <Flex className={`flex-col gap-2`}>
                    <h3 className="font-prompt font-semibold text-[16px] capitalize">
                      gravida orci sed jaritob laoreet tellus.
                    </h3>
                    <Flex className="items-center gap-2">
                      <h5 className="font-medium font-inter text-[12px]  text-hash hover:text-black duration-150">
                        Nov 10, 2022
                      </h5>
                      <GoDotFill className="text-[12px]  text-main" />
                      <h5 className="font-medium font-inter text-[12px] text-hash hover:text-black duration-150">
                        500 Comment
                      </h5>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex className={`gap-3`}>
                  <img className="w-[110px]" src={travel_img} alt="pick" />
                  <Flex className={`flex-col gap-2`}>
                    <h3 className="font-prompt font-semibold text-[16px] capitalize">
                      gravida orci sed jaritob laoreet tellus.
                    </h3>
                    <Flex className="items-center gap-2">
                      <h5 className="font-medium font-inter text-[12px]  text-hash hover:text-black duration-150">
                        Nov 10, 2022
                      </h5>
                      <GoDotFill className="text-[12px]  text-main" />
                      <h5 className="font-medium font-inter text-[12px] text-hash hover:text-black duration-150">
                        500 Comment
                      </h5>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </div>
              {/* editor choice */}
              {/* stay part */}

               <div className="py-[30px] px-5 border border-secondary rounded-[20px] my-6">
               <h1 className="font-prompt font-medium text-[15px] text-black uppercase">
               Stay Conected
              </h1>
              <div className="md:w-[320px] h-[1px] bg-secondary mx-auto my-4 w-full"></div>
              <Flex className={` gap-5 flex-col`}>
                <Flex className={`items-center gap-10 group md:gap-[80px]`}>
                    <Flex className={`py-[10px] px-[24px] bg-secondary rounded-full items-center gap-2 group-hover:bg-main`}>
                    <FaFacebookF className="text-[14px] text-black group-hover:text-white" />
                    <h4 className="font-prompt font-normal text-[14px] text-black group-hover:text-white uppercase">Facebook</h4> 
                    </Flex>
                    <h4 className="font-prompt font-medium text-[14px] text-black group-hover:text-main">3.5K Like</h4>
                </Flex>
                <Flex className={`items-center gap-10 group md:gap-[80px]`}>
                    <Flex className={`py-[10px] px-[24px] bg-secondary rounded-full items-center gap-2 group-hover:bg-main`}>
                    <FaTwitter className="text-[14px] text-black group-hover:text-white" />
                    <h4 className="font-prompt font-normal text-[14px] text-black group-hover:text-white uppercase">Twitter</h4> 
                    </Flex>
                    <h4 className="font-prompt font-medium text-[14px] text-black group-hover:text-main">60K Follower</h4>
                </Flex>
                <Flex className={`items-center gap-10 group md:gap-[80px]`}>
                    <Flex className={`py-[10px] px-[24px] bg-secondary rounded-full items-center gap-2 group-hover:bg-main`}>
                    <FaPinterestP className="text-[14px] text-black group-hover:text-white" />
                    <h4 className="font-prompt font-normal text-[14px] text-black group-hover:text-white uppercase">pinterest</h4> 
                    </Flex>
                    <h4 className="font-prompt font-medium text-[14px] text-black group-hover:text-main">25K Follower</h4>
                </Flex>
                <Flex className={`items-center gap-10 group md:gap-[80px]`}>
                    <Flex className={`py-[10px] px-[24px] bg-secondary rounded-full items-center gap-2 group-hover:bg-main`}>
                    <SiInstagram className="text-[14px] text-black group-hover:text-white" />
                    <h4 className="font-prompt font-normal text-[14px] text-black group-hover:text-white">Facebook</h4> 
                    </Flex>
                    <h4 className="font-prompt font-medium text-[14px] text-black group-hover:text-main">3.5K Like</h4>
                </Flex>
               </Flex>
               </div>
                 {/* stay part */}
                 {/* banner */}
                 <img className="lg:mt-12" src={banner} alt="" />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Travel;
