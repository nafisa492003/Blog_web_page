import React from "react";
import Container from "../Components/Container";
import Breadcrumb from "../Components/Breadcrumb";
import About_banner from "../assets/About_banner.png";
import Flex from "../Components/Flex";
import { ImFire } from "react-icons/im";
import about_img from '../assets/About_img.png'
import AboutWho from "../Components/AboutWho";
import post from '../assets/post.png'
import social from '../assets/Social Share.png'
import visitor from '../assets/Visitor.png'
import author_pick from '../assets/Author.png'
import BecomeAuther from './../Components/BecomeAuther';
import AboutSlider from "../Components/AboutSlider";
import Title from '../Components/Title';
const About = () => {
  return (
    <section>
      <Breadcrumb title="About us" />
      <Container>
        {/* banner */}
        <div className="my-[100px]">
          <h1 className="font-prompt font-semibold text-[50px] lg:text-[110px] leading-[80px] lg:leading-[155px]">
            Creative magazine, design{" "}
            <img className="inline-block" src={About_banner} alt="" />
            article solutions
          </h1>
        </div>
        {/* banner */}
        {/* who we are */}
        <Flex className={`gap-[70px] flex-col lg:flex-row`}>    
        <div className="w-full mx-auto lg:w-1/2">
          <Flex className={`items-center gap-1 my-4`}>
            <ImFire className="text-[18px] text-main" />
            <h5 className="italic font-medium font-inter text-[18px] text-main">
              Who We Are
            </h5>
          </Flex>
          <h1 className="font-semibold font-prompt text-[30px] w-full lg:w-[700px]">Vestibulum ante ipsum primisol in that onek faucibus orci luctus et.</h1>
          <p className="font-inter font-normal text-[16px] text-hash leading-[35px] my-10">
          vestibulum gomat dictum, lorem nibh faucibus quam, non mattis dutoma augue ac quam. Donec placeratena nibh ac turpis cursus, ut blandit ante ullamcorper. Pellentesque lorem nisl, vehiculalut quis libero in, dignissimi fringilla odio. Vivamus congue commodo euismod. Integer ac purusantut aliquam, dapibus ipsum vel, accumsan massa. Proin imperdiet, lectusont nonprotai convallis pretium, justo dui rhoncus nunc, non vestibulum urna augue sed libero. andt Mauris sed sagittis dolor. Suspendisse europeana tincidunt purus, tristique rhoncu.
          </p>
          <img src={about_img} alt="" />
        </div>
        {/* who we are */}
       <div className="w-full mx-auto lg:w-1/2">
       {/* slide */}
       <AboutWho/>
       <Flex className={`items-center justify-between flex-wrap lg:flex-row`}>
        <Flex className={`flex-col items-center justify-center gap-3 mt-2`}>
           <img src={post} alt="" /> 
           <h1 className="font-medium font-prompt text-[20px] lg:text-[30px]">10.39k</h1>
           <h5 className="font-inter font-normal text-[15px] text-hash">Perfect Posts</h5>
        </Flex>
        <Flex className={`flex-col items-center justify-center gap-3 mt-2`}>
           <img src={social} alt="" /> 
           <h1 className="font-medium font-prompt text-[20px] lg:text-[30px]">1.9k</h1>
           <h5 className="font-inter font-normal text-[15px] text-hash">Social Shares</h5>
        </Flex>
        <Flex className={`flex-col items-center justify-center gap-3 mt-2`}>
           <img src={author_pick} alt="" /> 
           <h1 className="font-medium font-prompt text-[20px] lg:text-[30px]">320</h1>
           <h5 className="font-inter font-normal text-[15px] text-hash">Super Authors</h5>
        </Flex>
        <Flex className={`flex-col items-center justify-center gap-3 mt-2`}>
           <img src={visitor} alt="" /> 
           <h1 className="font-medium font-prompt text-[20px] lg:text-[30px]">25.7k</h1>
           <h5 className="font-inter font-normal text-[15px] text-hash">Daily Visitors</h5>
        </Flex>
       </Flex>
       </div>
        </Flex>
        <BecomeAuther/>
        <Title title='Testimonial' subtitle='Author Say'  />
        <AboutSlider/>
      </Container>
    </section>
  );
};

export default About;
