import React from 'react'
import './AboutSlider.css'
import about from '../assets/About_img.png'
import Flex from './Flex'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
const NextArrow = (props) => {
    const { style, onClick } = props;
    return (
      <div style={{ ...style }} onClick={onClick} className="about-next-arrow">
        <FaArrowRightLong className="w-[28px] h-[28px] border-[#8e8e8e] border rounded-[10px] text-[12px] text-[#8e8e8e] p-1 " />
      </div>
    );
  };
  const PrevArrow = (props) => {
    const { style, onClick } = props;
    return (
      <div style={{ ...style }} onClick={onClick} className="about-prev-arrow">
        <FaArrowLeftLong className="w-[28px] h-[28px] border-[#8e8e8e] border rounded-[10px] text-[12px] text-[#8e8e8e] p-1 " />
      </div>
    );
  };
const AboutSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      };
  return (
    <Slider {...settings}>
    <div className='mt-[60px] mb-[100px] py-10 px-[30px] shadow-lg'>
    <Flex className={`items-center gap-[30px] flex-col lg:flex-row`}>
        <img className='w-full  md:w-[232px] mx-auto' src={about} alt="" />
        <Flex className={`items-start flex-col gap-3`}>
            <p className='font-prompt font-normal text-[24px] text-hash'>"I work with Alguneb Johnl on many projects, he always tolda exceei my expectations with his quality work and fastestopa service, veryal smooth and simple communication."</p>
            <h1 className='font-semibold font-prompt text-[25px]'>Leslie Alexander</h1>
            <h4 className='font-inter font-medium text-[18px] text-main'>Author</h4>
        </Flex>
    </Flex>
    </div>
    <div className='mt-[60px] mb-[100px] py-10 px-[30px] shadow-lg'>
    <Flex className={`items-center gap-[30px] flex-col lg:flex-row`}>
        <img className='w-full  md:w-[232px] mx-auto' src={about} alt="" />
        <Flex className={`items-start flex-col gap-3`}>
            <p className='font-prompt font-normal text-[24px] text-hash'>"I work with Alguneb Johnl on many projects, he always tolda exceei my expectations with his quality work and fastestopa service, veryal smooth and simple communication."</p>
            <h1 className='font-semibold font-prompt text-[25px]'>Leslie Alexander</h1>
            <h4 className='font-inter font-medium text-[18px] text-main'>Author</h4>
        </Flex>
    </Flex>
    </div>
    <div className='mt-[60px] mb-[100px] py-10 px-[30px] shadow-lg'>
    <Flex className={`items-center gap-[30px] flex-col lg:flex-row`}>
        <img className='w-full  md:w-[232px] mx-auto' src={about} alt="" />
        <Flex className={`items-start flex-col gap-3`}>
            <p className='font-prompt font-normal text-[24px] text-hash'>"I work with Alguneb Johnl on many projects, he always tolda exceei my expectations with his quality work and fastestopa service, veryal smooth and simple communication."</p>
            <h1 className='font-semibold font-prompt text-[25px]'>Leslie Alexander</h1>
            <h4 className='font-inter font-medium text-[18px] text-main'>Author</h4>
        </Flex>
    </Flex>
    </div>
    <div className='mt-[60px] mb-[100px] py-10 px-[30px] shadow-lg'>
    <Flex className={`items-center gap-[30px] flex-col lg:flex-row`}>
        <img className='w-full  md:w-[232px] mx-auto' src={about} alt="" />
        <Flex className={`items-start flex-col gap-3`}>
            <p className='font-prompt font-normal text-[24px] text-hash'>"I work with Alguneb Johnl on many projects, he always tolda exceei my expectations with his quality work and fastestopa service, veryal smooth and simple communication."</p>
            <h1 className='font-semibold font-prompt text-[25px]'>Leslie Alexander</h1>
            <h4 className='font-inter font-medium text-[18px] text-main'>Author</h4>
        </Flex>
    </Flex>
    </div>
        
    </Slider>
  )
}

export default AboutSlider