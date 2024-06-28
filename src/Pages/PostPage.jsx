import React from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import Container from '../Components/Container'
import PostSlideCom from '../Components/PostSlideCom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import '../Components/PostpageArrow.css'
const NextArrow = (props) => {
  const { style, onClick } = props;
  return (
    <div style={{ ...style }} onClick={onClick} className="postpage-next-arrow">
      <FaAngleRight className="w-[30px] h-[30px] border-[#8e8e8e] border rounded-full text-[12px] text-[#8e8e8e] p-1 " />
    </div>
  );
};
const PrevArrow = (props) => {
  const { style, onClick } = props;
  return (
    <div style={{ ...style }} onClick={onClick} className="postpage-prev-arrow">
      <FaAngleLeft className="w-[30px] h-[30px] border-[#8e8e8e] border rounded-full text-[12px] text-[#8e8e8e] p-1 " />
    </div>
  );
};
const PostPage = () => {
  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
      appendDots: dots => (
  <div
    style={{
        bottom: '-40px'
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
  
  return (
    <section>
        <Breadcrumb title=" Post Video"/>
        <Container>
        <div className='my-[80px]'>
        <Slider {...settings}>
        <PostSlideCom/>
        <PostSlideCom/>
        <PostSlideCom/>
        <PostSlideCom/>
        <PostSlideCom/>
        <PostSlideCom/>
        </Slider>
        </div>
         
        </Container>
    </section>
  )
}

export default PostPage